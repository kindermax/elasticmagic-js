import { Client } from "@elastic/elasticsearch";
import { SearchQuery, Query, SearchQueryOptions, SearchParams } from "./query";


export class Index {
  constructor(
    private name: string,
    private cluster: Cluster,
  ) {}
  // TODO add routing
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

  private async doRequest(compiledQuery: Query, params: any): Promise<any> {
    // TODO get client method to call, must be a accep-like function in searchQuery
    return this.client.search({
      index: this.index.getName(),
      body: compiledQuery,
      ...params
    })
  }

  public async search(searchQuery: SearchQuery): Promise<any> {
    return this.doRequest(searchQuery.body, searchQuery.params);
  }
}
