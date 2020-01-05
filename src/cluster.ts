import { Client, ApiResponse } from "@elastic/elasticsearch";
import { SearchQuery, Query, SearchQueryOptions, SearchQueryContext } from "./query";
import { SearchResult } from "./result";
import { RawResultBody } from "./types";
import { Doc } from "./document";

export class Index {
  constructor(
    private name: string,
    private cluster: Cluster,
  ) {}

  public searchQuery(searchQueryOptions: SearchQueryOptions): SearchQuery {
    return this.cluster.searchQuery(searchQueryOptions);
  }

  public getName(): string {
    return this.name;
  }

  public getCluster(): Cluster {
    return this.cluster;
  }
}

export class Cluster {
  private index: Index;

  constructor(
    private client: Client,
    indexName: string,
  ) {
    this.index = new Index(indexName, this)
  }

  public searchQuery(searchQueryOptions: SearchQueryOptions): SearchQuery {
    return new SearchQuery({
      cluster: this, 
      index: this.index, 
      ...searchQueryOptions
    });
  }

  public getIndex(): Index {
    return this.index;
  }

  

  /**
   * Make a request using underlying es client.
   * 
   * NOTE: If you want to type response body, pass a generic type.
   * @param compiledQuery 
   * @param params 
   */
  private async doRequest<T = any>(compiledQuery: Query, params: any): Promise<ApiResponse<RawResultBody<T>>> {
    // TODO for now we hardcoded search method
    // TODO get client method to call, must be a accep-like function in searchQuery
    return this.client.search({
      index: this.index.getName(),
      body: compiledQuery,
      ...params
    });
  }

  /**
   * returns SearchResult instance with processed raw es response.
   * 
   * NOTE: If you want to type response body, pass a generic type.
   * @param rawResultBody \
   * @param searchQueryContext 
   */
  private processResult<T extends Doc, TRaw>(rawResultBody: RawResultBody<TRaw>, searchQueryContext: SearchQueryContext): SearchResult<T> {
    return new SearchResult<T, TRaw>(
      rawResultBody,
      searchQueryContext.aggregations,
      searchQueryContext.docClass,
      searchQueryContext.instanceMapper
    )
  };

  /**
   * run search query against elasticsearch cluster and return processed result. 
   * @param searchQuery 
   */
  public async search<T extends Doc, TRaw>(searchQuery: SearchQuery): Promise<SearchResult<T>> {
    const rawResultResponse: ApiResponse<RawResultBody<TRaw>> = await this.doRequest<TRaw>(searchQuery.body, searchQuery.params);
    return this.processResult<T, TRaw>(
      rawResultResponse.body,
      searchQuery.getQueryContext(),
    );
  }
}
