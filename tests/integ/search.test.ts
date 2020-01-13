import { Client } from '@elastic/elasticsearch'; // TODO maybe replace
import * as agg from '../../src/agg';
import { Cluster } from '../../src/cluster';
import { Bool } from '../../src/expression';
import { SearchQuery } from '../../src/query';
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
  // index doc
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

describe('Search integration', () => {
  test('run search query and get result', async () => {
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

  test('run search query with date as Date instance', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(Bool.must(OrderDoc.dateCreated.lte(new Date())))
      .limit(0);

    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(0);
  });

  test('run search query with date as iso string', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(Bool.must(OrderDoc.dateCreated.lte(new Date().toISOString())))
      .limit(0);

    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(0);
  });

  test('run search query and get result with a hits', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([userId]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      );

    const result = await query.getResult<OrderDoc>();

    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(1);

    const hit = result.hits[0];
    expect(hit).toBeInstanceOf(OrderDoc);
    expect(hit._id).toBe('1');
  });
  test('run search query and get result with populated doc fields from _source', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc }).filter(OrderDoc.userId.in([userId]));

    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.hits.length).toBe(1);
    const hit = result.hits[0];

    expect(hit.user_id).toBe(1);
    expect(hit.status).toBe(1);
    expect(hit.source).toBe(1);
    expect(hit.price).toBe(5);
    expect(hit.date_created).toBe(dateCreated.toISOString());
  });

  test('run search query and get result with populated doc fields from _source with exclude', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .filter(OrderDoc.userId.in([userId]))
      .source(true, {
        exclude: ['status'],
        include: ['user_id', OrderDoc.dateCreated],
      });

    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.hits.length).toBe(1);

    const rawHit = result.raw.hits.hits[0];
    expect(rawHit._source).toHaveProperty('user_id');
    expect(rawHit._source).toHaveProperty('date_created');
    expect(rawHit._source).not.toHaveProperty('status');

    const hit = result.hits[0];

    expect(hit.user_id).toBe(1);
    expect(hit.status).toBe(undefined);
    expect(hit.source).toBe(undefined);
    expect(hit.price).toBe(undefined);
    expect(hit.date_created).toBe(dateCreated.toISOString());
  });

  test('run search query and get result with aggregations', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([userId]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .aggregations({
        users: new agg.Terms({
          field: OrderDoc.userId,
          size: 1,
          aggs: {
            total: new agg.Filter({
              filter: OrderDoc.status.eq(OrderStatus.new),
            }),
          },
        }),
      });

    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(1);
    const hit = result.hits[0];
    expect(hit).toBeInstanceOf(OrderDoc);
    expect(hit._id).toBe('1');

    expect(Object.keys(result.aggregations).length).toBe(1);

    const users = result.getAggregation('users');

    expect(users.buckets.length).toBe(1);
    expect(users.buckets[0].key).toBe(1);
    expect(users.buckets[0].docCount).toBe(1);
    expect(Object.keys(users.buckets[0].aggregations).length).toBe(1);

    const totalBucket = users.buckets[0].getAggregation('total');

    expect(totalBucket.docCount).toBe(1);
  });

  test('should work if pass cluster to not bounded search query', async () => {
    const cluster = new Cluster(client, indexName);
    let query = new SearchQuery({ cluster, docClass: OrderDoc });
    query = query.source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([userId]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      );
    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
  });

  test('should work with explicilty provided docClass via withDoc', async () => {
    const cluster = new Cluster(client, indexName);
    let query = new SearchQuery({ cluster });
    // TODO add test where withDoc(Doc) can accept only sublcasses of Doc
    query = query.filter(OrderDoc.userId.in([userId])).withDoc(OrderDoc);
    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
  });

  test('should work with explicilty provided docType class via withDocType', async () => {
    const cluster = new Cluster(client, indexName);
    let query = new SearchQuery({ cluster });
    query = query.filter(OrderDoc.userId.in([userId])).withDocType(OrderDoc.docType);
    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
  });

  test('should work without explicilty provided doc class', async () => {
    const cluster = new Cluster(client, indexName);
    let query = new SearchQuery({ cluster });
    query = query.source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([userId]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      );
    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
  });

  test('get ids', async () => {
    const cluster = new Cluster(client, indexName);
    let query = new SearchQuery({ cluster });
    query = query.source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([userId]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      );
    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.getIds()).toStrictEqual(['1']);
  });
});
