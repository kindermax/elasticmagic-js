import { Client, ApiResponse } from '@elastic/elasticsearch';

import { SearchQuery } from "../src/query";
import { RawResultBody, PlainObject } from "../src/types";
import { Cluster } from '../src/cluster';
import { OrderDoc } from './fixtures';

const client = new Client({ node: 'http://mock' });
jest.spyOn(client, 'search').mockImplementation((_params: any, _options: any, _callback: any): any => {
  const resp: ApiResponse<RawResultBody<PlainObject>, any> = {
    headers: {},
    meta: {} as any,
    statusCode: 200,
    warnings: [],
    body: {
      took: 1,
      timed_out: false,
      _shards: {
        failed: 0,
        skipped: 0,
        successful: 1,
        total: 1,
      },
      hits: {
        total: 1,
        max_score: 1,
        hits: [{
          _id: '1',
          _source: {},
          _index: 'mock_index',
          _routing: '123',
          _score: 1,
          _type: 'order',
        }],
      },
    },
  };
  return resp;
});
describe('SearchQuery', () => {
  test.skip('instance mapper should work', async () => {
    const cluster = new Cluster(client, 'mock_index')
    const searchQuery = cluster.searchQuery().filter(OrderDoc.userId.eq_(1)).limit(1);
    console.log('searchQuery.body', searchQuery.prettyBody)
    const result = await searchQuery.getResult<OrderDoc>();
    expect(searchQuery.body).toStrictEqual({});
    expect(result.hits).toStrictEqual({});
  });

  test('collectDocClasses private method', async () => {
    let searchQuery = new SearchQuery();
    searchQuery = searchQuery.filter(OrderDoc.userId.eq_(1)).limit(1);
    // @ts-ignore
    const collected = searchQuery.collectDocClasses();
    expect(collected.length).toBe(1);
  });
});
