import { ApiResponse, Client } from '@elastic/elasticsearch';
import { Doc } from './document';
import { Query, SearchParams, SearchQuery, SearchQueryContext, SearchQueryOptions } from './query';
import { SearchResult } from './result';
import { Nullable, RawResultBody } from './types';

type RootRawResult = {
  name: string;
  cluster_name: string;
  cluster_uuid: string;
  version: {
    number: string;
  }
};

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

class EsVersion {
  constructor(public major: number, public minor: number, public patch: number) {}
}

export class Cluster {
  private index?: Index;
  private esVersion?: EsVersion;

  constructor(
    private client: Client,
    indexName?: string,
  ) {
    if (indexName) {
      this.index = new Index(indexName, this);
    }
  }

  public searchQuery(searchQueryOptions: SearchQueryOptions = {}): SearchQuery {
    return new SearchQuery({
      cluster: this,
      index: this.index,
      ...searchQueryOptions,
    });
  }

  public getIndex(): Nullable<Index> {
    return this.index;
  }

  public addIndex(name: string) {
    this.index = new Index(name, this);
  }

  public async getEsVersion(): Promise<EsVersion> {
    if (this.esVersion) { return this.esVersion; }
    const rawResult: ApiResponse<RootRawResult> = await this.client.info();
    return this.processEsVersionResult(rawResult.body);
  }

  private processEsVersionResult(rawResult: RootRawResult): EsVersion {
    const versionString = rawResult.version.number;
    const [version] = versionString.split('-');
    const [major, minor, patch] = version.split('.').map(Number);
    return new EsVersion(major, minor, patch);
  }

  /**
   * Make a request using underlying es client.
   * @param compiledQuery
   * @param params
   */
  private async doRequest(
    compiledQuery: Query,
    params: SearchParams,
  ): Promise<ApiResponse<RawResultBody<any>>> {
    // TODO for now we hardcoded search method
    // TODO get client method to call, must be a accep-like function in searchQuery
    if (!this.index) {
      throw new Error('index required');
    }
    return this.client.search({
      body: compiledQuery,
      index: this.index.getName(),
      ...params,
    });
  }

  /**
   * returns SearchResult instance with processed raw es response.
   *
   * @param rawResultBody \
   * @param searchQueryContext
   */
  private processResult<T extends Doc>(
    rawResultBody: RawResultBody<any>,
    searchQueryContext: SearchQueryContext,
  ): SearchResult<T> {
    return new SearchResult<T>(
      rawResultBody,
      searchQueryContext.aggregations,
      searchQueryContext.docClasses,
      searchQueryContext.instanceMapper,
    );
  }

  /**
   * run search query against elasticsearch cluster and return processed result.
   * @param searchQuery
   */
  public async search<T extends Doc>(searchQuery: SearchQuery): Promise<SearchResult<T>> {
    const rawResultResponse: ApiResponse<RawResultBody<any>> = await this.doRequest(
      searchQuery.body,
      searchQuery.params,
    );
    return this.processResult<T>(
      rawResultResponse.body,
      searchQuery.getQueryContext(),
    );
  }
}
