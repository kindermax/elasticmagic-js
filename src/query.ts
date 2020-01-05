import { Expression, Params, ParamsType } from "./expression";
import { CompilerVisitor } from "./compiler";
import { Cluster, Index } from "./cluster";
import { cleanParams } from './util';
import { IDocument } from './document';
import { AggExpression } from "./agg";

export type SearchQueryOptions = {
  routing?: number;
  docClass?: IDocument; 
  docType?: string; 
}

type ClusterSearchQueryOptions = {
  index?: Index;
  cluster?: Cluster;
} & SearchQueryOptions

export type SearchParams = {
  routing?: number;
  doc_type?: string;
}

type SourceField = boolean | Array<string> | null; // TODO create Source class as expression

type MatchValue = string | number | boolean;
type TermValue = string | number | boolean;
type ExistsValue = string | number | boolean;

type MatchFilter = {
  match: {
    [field: string]: MatchValue
  }
};

type MatchPhraseFilter = {
  match: {
    [field: string]: MatchValue
  }
};

type TermFilter = {
  term: {
    [field: string]: TermValue
  }
};

type TermsFilter = {
  terms: {
    [field: string]: Array<TermValue>
  }
};

type ExistsFilter = {
  exists: {
    [field: string]: ExistsValue
  };
};

type BoolField = {
  must?: Array<TermFilter | TermsFilter | MatchFilter | MatchPhraseFilter>;
  must_not?: Array<TermFilter | TermsFilter | MatchFilter | MatchPhraseFilter>;
};

type FilterRootField = BoolField | Array<ExistsFilter>;

export type BoolMustFilter = Array<MatchFilter | MatchPhraseFilter>;
type BoolMustNotFilter = Array<MatchFilter | MatchPhraseFilter>;

type BoolRootField = {
  must?: BoolMustFilter;
  must_not?: BoolMustNotFilter;
  filter?: FilterRootField;
};

// TODO probably must move types to relevant modules
type AggregationsField = {
  [agg: string]: any;
}

export type Aggregations = { // TODO maybe one of types is obsolete
  [agg: string]: AggExpression;
}

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
}

export type QueryOverride = object | null;
export type Limit = number | null;

export class SearchQueryContext {
  public _visitName: string = 'searchQueryContext';

  constructor(
    public query: QueryOverride,
    public source: SourceField,
    public fields: any,
    public filters: any,
    public limit: Limit,
    public searchParams: Params,
    public aggregations: Params,
    public docClass?: IDocument, // TODO maybe we should pass entire SearchQuery ?
  ) {
    if (!docClass) {
      // TODO collect_doc_classes
    }
  }
}

// UTIL
function getDocType(docType?: string, docClass?: IDocument): string | null {
  if (docType) return docType;
  if (docClass) return docClass._docType;
  return null
}

export class SearchQuery {
  private cluster?: Cluster;
  private index?: Index;
  
  private _limit: Limit = null;
  private _fields: any = null; // TODO not used right now
  private _filters: Expression[] = [];
  private _aggregations: Params = new Params();

  private _source: SourceField = null;
  private _query: QueryOverride = null;
  private _searchParams: Params = new Params(); // TODO maybe add subtype like SearchParams
  private _docClass?: IDocument;
  private _docType?: string;

  constructor(
    searchQueryOptions: ClusterSearchQueryOptions,
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
      routing: routing,
      docType: getDocType(docType, docClass),
    });
  }

  public getQueryContext(): SearchQueryContext {
    return new SearchQueryContext(
      this._query,
      this._source,
      this._fields,
      this._filters,
      this._limit,
      this._searchParams,
      this._aggregations,
      this._docClass,
    )
  }

  /**
   * Controls which fields of the document's ``_source`` field to retrieve.
   * @param include 
   */
  public source(fields: SourceField): SearchQuery {
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
  public filter(...filters: Expression[]): SearchQuery {
    this._filters.push(...filters);
    return this;
  }
  
  public limit(limit: number): SearchQuery {
    this._limit = limit;
    return this;
  }

  public query(query: QueryOverride): SearchQuery {
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
  public aggregations(aggs: Aggregations): SearchQuery {
    // TODO implement null cleaning
    this._aggregations = new Params(aggs);
    return this;
  }

  public toJSON(): Query {
    return this.compile();
  }

  private compile(): Query {
    const compiler = new CompilerVisitor();
    return compiler.compile(this.getQueryContext());
  }

  private prepareSearchParams(params: ParamsType): any {
    return {
      routing: `${params.routing}`,
      type: params.docType,
    }
  }
  // TODO maybe reuse logic with Compiled.
  // Like hold class which can compile all on construction and then use that instance?
  public get body() {
    return this.toJSON();
  }

  public get params(): any {
    return this.prepareSearchParams(cleanParams(this._searchParams.getParams()));
  }

  public get prettyBody(): string {
    return JSON.stringify(this.compile(), null, 2);
  }

  public async getResult(): Promise<any> {
    // TODO add cache
    if (!this.cluster) {
      throw new Error('getResult: no cluster specified, can not make a query');
    }
    return this.cluster.search(this);
  }
}
