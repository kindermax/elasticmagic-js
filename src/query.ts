import { Expression } from "./expression";
import { CompilerVisitor } from "./compiler";


type SourceField = boolean | Array<string>;

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

type QueryRootField = {
  bool?: BoolRootField;
  match?: any;
};

export type Query = {
  query?: QueryRootField;
  size?: number;
  _source?: SourceField;
  // TODO complete this type
}

type FilterContext = {
  filter: FilterRootField;
}

type BoolContext = {
  bool: BoolRootField;
}

export type QueryOverride = object | null;
export type Limit = number | null;

export class SearchQueryContext {
  public _visitName = 'searchQueryContext';

  constructor(
    public query: QueryOverride,
    public source: SourceField,
    public fields: any,
    public filters: any,
    public limit: Limit,
  ) {
  }
}

export class SearchQuery {
  
  private _limit: Limit = null;
  private _fields: any = null; // TODO not used right now
  private _filters: Expression[] = [];

  private _source: SourceField = true;
  private _query: QueryOverride = null;

  public getQueryContext(): SearchQueryContext {
    return new SearchQueryContext(
      this._query,
      this._source,
      this._fields,
      this._filters,
      this._limit,
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

  public toDict(): Query {
    return this.compile();
  }

  private compile(): Query {
    const compiler = new CompilerVisitor();
    return compiler.compile(this.getQueryContext());
  }
}
