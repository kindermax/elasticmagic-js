import cloneDeep from 'lodash.clonedeep';
import { AggExpression } from './agg';
import { Cluster, Index } from './cluster';
import { CompilerVisitor } from './compiler';
import { Doc, DocClass, Field } from './document';
import { Expression, Params, ParamsType, Sort, Source, SourceField } from './expression';
import { SearchResult } from './result';
import { Dictionary, Nullable, PlainObject } from './types';
import {
  cleanParams,
  collectDocClasses,
  flatMap,
  isArray,
  isBoolean,
  isNullOrUndef,
  isString,
  mergeParams,
  mustClean,
  uniqueArray,
} from './util';

export type SearchQueryOptions = {
  routing?: number;
  docClass?: DocClass;
  docType?: string;
};

type ClusterSearchQueryOptions = {
  index?: Index;
  cluster?: Cluster;
} & SearchQueryOptions;

export type SearchParams = {
  routing?: string;
  type?: string;
};

type MatchValue = string | number | boolean;
type TermValue = string | number | boolean;
type ExistsValue = string | number | boolean;

type MatchFilter = {
  match: Dictionary<string, MatchValue>;
};

type MatchPhraseFilter = {
  match: Dictionary<string, MatchValue>;
};

type TermFilter = {
  term: Dictionary<string, TermValue>;
};

type TermsFilter = {
  terms: Dictionary<string, TermValue[]>;
};

type ExistsFilter = {
  exists: Dictionary<string, ExistsValue>;
};

type BoolField = {
  must?: Array<TermFilter | TermsFilter | MatchFilter | MatchPhraseFilter>;
  must_not?: Array<TermFilter | TermsFilter | MatchFilter | MatchPhraseFilter>;
};

type FilterRootField = BoolField | ExistsFilter[];

export type BoolMustFilter = Array<MatchFilter | MatchPhraseFilter>;
type BoolMustNotFilter = Array<MatchFilter | MatchPhraseFilter>;

type BoolRootField = {
  must?: BoolMustFilter;
  must_not?: BoolMustNotFilter;
  filter?: FilterRootField;
};

// TODO probably must move types to relevant modules
type AggregationsField = PlainObject;

export type Aggregations = Dictionary<string, AggExpression>;

type QueryRootField = {
  bool?: BoolRootField;
  match?: any;
};

type SortOrder = 'asc' | 'desc';
type SortMode = 'min' | 'max' | 'sum' | 'avg' | 'median';
// TODO finish https://www.elastic.co/guide/en/elasticsearch/reference/6.8/search-request-sort.html#nested-sorting
type SortObject = Dictionary<string, SortOrder | { order: SortOrder; mode?: SortMode }>;
type SortRootField =
  | SortObject[]
  | string
  | '_score';
export type Query = {
  query?: QueryRootField;
  size?: number;
  _source?: SourceField;
  aggregations?: AggregationsField;
  sort?: SortRootField
  // TODO complete this type
};

export type QueryOverride = any | null; // rewrite type
export type Limit = number | null;

export type InstanceMapper<T> = (ids: string[]) => Promise<Map<string, T>>;

// TODO make all fields readonly
export class SearchQueryContext {
  public visitName: string = 'searchQueryContext';

  public docTypes: Readonly<string[]> = [];

  constructor(
    public query: QueryOverride,
    public source: Source | null,
    public fields: Field[],
    public filters: Expression[],
    public sort: Sort[],
    public limit: Limit,
    public searchParams: Params,
    public aggregations: Params,
    public docClasses: Readonly<DocClass[]>,
    public docType?: string,
    public instanceMapper?: InstanceMapper<any>,
  ) {

    const docTypes: string[] = [];
    // TODO debug this to make it right, maybe look at tests
    if (docType) {
      if (isString(docType)) {
        docTypes.push(...docType.split(',').map((type) => type.trim()));
      } else {
        docTypes.push(docType);
      }
    }

    this.docTypes = this.getUniqueDocTypes(docTypes, this.docClasses);
  }

  private getUniqueDocTypes(docTypes: string[], docClasses: Readonly<DocClass[]>): Readonly<string[]> {
    const docClassesTypes = docClasses.map((cls) => cls.getDocCls());
    const uniqueDocTypes = new Set(docTypes.concat(docClassesTypes));
    return Array.from(uniqueDocTypes);
  }
}

function getDocType(docType?: string, docClass?: DocClass): string | null {
  if (docType) { return docType; }
  if (docClass) { return docClass.docType; }
  return null;
}

export class SearchQuery {
  private cluster?: Cluster;
  /**
   * TODO this field needed when SearchQuery created on its own and hence not bound to cluster or query
   * * implement check _index_or_cluster
   * * add method for bound, like withIndex, withCluster
   */
  private index?: Index;

  private _limit: Limit = null;
  private _fields: Field[] = [];
  private _filters: Expression[] = [];
  private _sort: Sort[] = [];
  private _aggregations: Params = new Params();

  private _source: Source | null = null;
  private _query: QueryOverride = null;
  private _searchParams: Params = new Params();
  private _docClass?: DocClass;
  private _docType?: string;
  private _instanceMapper?: InstanceMapper<any>;

  constructor(
    searchQueryOptions: ClusterSearchQueryOptions = {},
  ) {
    const {
      index,
      cluster,
      routing,
      docClass,
      docType,
    } = searchQueryOptions;

    this.cluster = cluster;
    if (index) {
      this.withIndex(index);
    }

    if (docClass) {
      this._docClass = docClass;
    }

    if (docType) {
      this._docType = docType;
    }

    this._searchParams = new Params({
      docType: getDocType(docType, docClass),
      routing,
    });
  }

  public getQueryContext(): SearchQueryContext {
    const docClasses = this._docClass ? [this._docClass] : this.collectDocClasses();
    return new SearchQueryContext(
      this._query,
      this._source,
      this._fields,
      this._filters,
      this._sort,
      this._limit,
      this._searchParams,
      this._aggregations,
      docClasses,
      this._docType,
      this._instanceMapper,
    );
  }

  /**
   * Controls which fields of the document's ``_source`` field to retrieve.
   *
   * @param fields: list of fields which should be returned by elasticsearch. Can be one of the following types:
   * - field expression, for example: ``PostDocument.title``
   * - ``str`` means field name or glob pattern. For example:
   * ``"title"``, ``"user.*"``
   * - ``False`` disables retrieving source
   * - ``True`` enables retrieving all source document
   * - ``None`` cancels source filtering applied before
   * @param include: list of fields to include
   * @param exclude: list of fields to exclu
   * See `source filtering for more information.
   * <https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-source-filtering.html>`_
   */
  public source(
    fields: boolean | null | undefined | string | Field | Array<string | Field>,
    opts?: {
      include?: Array<string | Field>;
      exclude?: Array<string | Field>;
    },
  ): this {
    if (isNullOrUndef(fields) || mustClean(fields)) {
      this._source = null;
    } else if (isBoolean(fields)) {
      this._source = new Source(fields, opts?.include, opts?.exclude);
    } else if (isArray(fields)) {
      this._source = new Source(fields, opts?.include, opts?.exclude);
    } else {
      this._source = new Source(fields, opts?.include, opts?.exclude);
    }
    return this;
  }

  /**
   * Multiple expressions may be specified, so they will be joined together using ``Bool.must`` expression.
   * @param filters
   */
  public filter(...filters: Expression[] | Nullable[]): this {
    if (mustClean(filters)) {
      this._filters = [];
    } else {
      this._filters.push(...filters);
    }
    return this;
  }

  public limit(limit: number): this {
    this._limit = limit;
    return this;
  }

   // TODO QueryOverride type is incorrect, hack
  public query(query: QueryOverride): this {
    this._query = query;
    return this;
  }

  /**
   * Adds `aggregations <https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html>`_
   * to the search query.
   *
   * After executing the query you can get aggregation result by its name
   * calling :meth:`SearchResult.get_aggregation` method.
   *
   * @param aggs objects with aggregations. Can be ``null`` that cleans up previous aggregations.
   */
  public aggregations(aggs: Nullable<Aggregations>): this {
    // TODO implement null cleaning
    if (mustClean(aggs)) {
      this._aggregations = new Params();
    } else {
      this._aggregations = mergeParams(this._aggregations, new Params(aggs));
    }
    return this;
  }

  public aggs(aggs: Nullable<Aggregations>): this {
    this.aggregations(aggs);
    return this;
  }

  public withInstanceMapper<T>(instanceMapper: InstanceMapper<T>): this {
    this._instanceMapper = instanceMapper;
    return this;
  }

  public withDoc<T extends DocClass>(docClass: T): this {
    this._docClass = docClass;
    return this;
  }

  public withDocType(docType: string): this {
    this._docType = docType;
    return this;
  }

  public withIndex(index: Index): this {
    this.index = index;
    return this;
  }

  public toJSON(): Query {
    return this.compile();
  }

  public get body(): Query {
    return this.toJSON();
  }

  public get params(): SearchParams {
    return this.prepareSearchParams(cleanParams(this._searchParams.getParams()));
  }

  public get prettyBody(): string {
    return JSON.stringify(this.compile(), null, 2);
  }

  public async getResult<T extends Doc = any>(): Promise<SearchResult<T>> {
    // TODO add cache
    if (!this.cluster) {
      throw new Error('getResult: no cluster specified, can not make a query');
    }
    return this.cluster.search<T>(this);
  }

  public clone(): this {
    return cloneDeep(this);
  }

  public sort(...orders: Sort[] | Field[] | Nullable[]): this {
    if (mustClean(orders)) {
      this._sort = [];
    } else {
      this._sort.push(...orders);
    }
    return this;
  }

  public orderBy(...orders: Sort[] | Field[] | Nullable[]): this {
    this.sort(...orders);
    return this;
  }

  private compile(): Query {
    const compiler = new CompilerVisitor();
    return compiler.compile(this.getQueryContext());
  }

  private prepareSearchParams(params: ParamsType): SearchParams {
    return {
      routing: `${params.routing}`,
      type: params.docType,
    };
  }

  private collectDocClasses(): Readonly<DocClass[]> {
    const expressions = [
      this._query,
      this._source,
      this._fields,
      this._filters,
      Object.values(this._aggregations.getParams()),
    ];
    return uniqueArray(flatMap((expr) => collectDocClasses(expr), expressions));
  }
}
