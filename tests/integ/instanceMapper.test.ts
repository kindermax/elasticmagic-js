import { Client } from '@elastic/elasticsearch'; // TODO maybe replace
import { Cluster } from '../../src/cluster';
import { Bool } from '../../src/expression';
import { OrderDoc, OrderSource, OrderStatus } from '../fixtures';
import { getOrderDocMapping, indexDoc } from './utils';

let client: Client;

const DAY = 24 * 3600 * 1000;

const userId = 1;
const dateCreated = new Date(Date.now() - DAY);
const type = 'order';
const indexName = 'test_order_index';
const esHost = `http://${process.env.ES_HOST}:9200`;

beforeAll(async () => {
  client = new Client({ node: esHost });
  // cleanup before all tests
  await client.indices.delete({
    index: indexName,
    ignore_unavailable: true,
  });
});

beforeEach(async () => {
  // create index
  await client.indices.create({
    index: indexName,
  });
  // put mapping
  await client.indices.putMapping({
    index: indexName,
    // TODO https://www.elastic.co/guide/en/elasticsearch/reference/master/removal-of-types.html
    type,
    body: getOrderDocMapping(),
  });
  await indexDoc(
    client,
    indexName,
    `${userId}`,
    {
      user_id: userId,
      status: OrderStatus.new,
      source: OrderSource.desktop,
      date_created: dateCreated,
      price: 5,
    },
    `${userId}`,
  );
});

afterEach(async () => {
  await client.indices.delete({
    index: indexName,
  });
});

describe('Instance Mapper integration', () => {
  test('getInstances() returns list of objects created by instance mapper', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([userId]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
          OrderDoc.dateCreated.lte(new Date().toISOString()),
        ),
      )
      .limit(0);

    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(0);
  });
});
