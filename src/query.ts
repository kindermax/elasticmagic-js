import { AggExpression } from "./agg";
import { Cluster, Index } from "./cluster";
import { CompilerVisitor } from "./compiler";
import { Doc, DocClass } from "./document";
import { Expression, Params, ParamsType } from "./expression";
import { SearchResult } from "./result";
import { Dictionary, PlainObject } from "./types";
import { cleanParams, isString, collectDocClasses, uniqueArray } from "./util";

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

type SourceField = boolean | string[] | null; // TODO create Source class as expression

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

export type Query = {
  query?: QueryRootField;
  size?: number;
  _source?: SourceField;
  aggregations?: AggregationsField;
  // TODO complete this type
};

export type QueryOverride = any | null; // TODO this type is incorrect, hack
export type Limit = number | null;

export type InstanceMapper<T1, T2> = (ids: T1[]) => T2;

// TODO make all fields readonly
export class SearchQueryContext {
  public visitName: string = 'searchQueryContext';

  public docTypes: Readonly<string[]> = [];

  constructor(
    public query: QueryOverride,
    public source: SourceField,
    public fields: any,
    public filters: any,
    public limit: Limit,
    public searchParams: Params,
    public aggregations: Params,
    public docClasses: Readonly<DocClass[]>,
    public docType?: string,
    public instanceMapper?: InstanceMapper<any, any>,
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

// UTIL
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
  private _fields: any = null; // TODO not used right now
  private _filters: Expression[] = [];
  private _aggregations: Params = new Params();

  private _source: SourceField = null;
  private _query: QueryOverride = null;
  private _searchParams: Params = new Params();
  private _docClass?: DocClass;
  private _docType?: string;
  private _instanceMapper?: InstanceMapper<any, any>;

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
    this.index = index;

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
   * @param include
   */
  public source(fields: SourceField): this {
    // TODO add exclude and include
    this._source = fields;
    return this;
  }

  // TODO later there can be multiple filter func declarations, one with variadic args

  /**
   * TODO maybe we need clone Query instance on filter call?
   *
   * Multiple expressions may be specified, so they will be joined together using ``Bool.must`` expression.
   * @param filters
   */
  public filter(...filters: Expression[]): this {
    this._filters.push(...filters);
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
  public aggregations(aggs: Aggregations): this {
    // TODO implement null cleaning
    this._aggregations = new Params(aggs);
    return this;
  }

  public withInstanceMapper<T1, T2>(instanceMapper: InstanceMapper<T1, T2>): this {
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

  public toJSON(): Query {
    return this.compile();
  }

  // TODO maybe reuse logic with Compiled.
  // Like hold class which can compile all on construction and then use that instance?
  public get body() {
    return this.toJSON();
  }

  public get params(): SearchParams {
    return this.prepareSearchParams(cleanParams(this._searchParams.getParams()));
  }

  public get prettyBody(): string {
    return JSON.stringify(this.compile(), null, 2);
  }

  public async getResult<T extends Doc = any, TRaw = any>(): Promise<SearchResult<T>> {
    // TODO add cache
    if (!this.cluster) {
      throw new Error('getResult: no cluster specified, can not make a query');
    }
    return this.cluster.search<T, TRaw>(this);
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
      // this._postFilters,
      // function_score functions list,
      Object.values(this._aggregations.getParams()),
      // this._orderBy,
      // this._rescores,
      // this._highlight,
    ];
    return uniqueArray(expressions.flatMap((expr) => collectDocClasses(expr)));
  }
}
