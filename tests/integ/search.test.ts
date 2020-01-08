import { Client } from '@elastic/elasticsearch'; // TODO maybe replace
import { Bool } from "../../src/expression";
import { Cluster } from "../../src/cluster";
import * as agg from '../../src/agg';
import { SearchQuery } from '../../src/query';
import { OrderStatus, OrderSource, OrderDoc } from '../fixtures';

let client: Client;

const userId = 1;
const type = 'order';
const indexName = 'test_order_index';
const esHost = `http://${process.env.ES_HOST}:9200`;

const mapping = {
  dynamic: false,
  _all: {
      enabled: false,
  },
  _routing: {
      required: true,
  },
  date_detection: false,
  properties: {
      user_id: {
          type: 'integer',
      },
      source: {
          type: 'integer',
      },
      status: {
          type: 'integer',
      },
      date_created: {
          type: 'date',
      },
      price: {
          type: 'integer',
      }
  }
};

beforeAll(async () => {
  client = new Client({ node: esHost });
  // cleanup before all tests
  await client.indices.delete({
    index: indexName,
    ignore_unavailable: true,
  })
});

beforeEach(async () => {
  // create index
  await client.indices.create({
    index: indexName,
  })
  // put mapping
  await client.indices.putMapping({
    index: indexName,
    type: type, // TODO use include_type_name for es >= 7, https://www.elastic.co/guide/en/elasticsearch/reference/master/removal-of-types.html
    body: mapping
  });
  // index doc
  await client.index({
    index: indexName,
    id: "1",
    type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      user_id: userId,
      status: OrderStatus.new,
      source: OrderSource.desktop,
      date_created: new Date(),
      price: 5,
    },
    routing: `${userId}`,
    refresh: 'wait_for'
  })
});

afterEach(async () => {
  await client.indices.delete({
    index: indexName,
  })
});

describe("Search", () => {
  test('run search query and get result', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([userId]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        )
      )
      .limit(0);

    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(0);
  });

  test('run search query and get result with a source', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([userId]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        )
      );

    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(1);
    const hit = result.hits[0];
    expect(hit).toBeInstanceOf(OrderDoc);
    expect(hit._id).toBe("1");
    // expect(hit.userId).toBe(1);
    // expect(hit.status).toBe(1);
    // expect(hit.source).toBe(1);
    // expect(hit.price).toBe(5);
    // expect(hit.dateCreated).toBe(5);
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
        )
      )
      .aggregations({
        users: new agg.Terms({
          field: OrderDoc.userId,
          size: 1,
          aggs: {
            total: new agg.Filter({
              filter: OrderDoc.status.eq(OrderStatus.new)
            })
          }
        })
      });
    
    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(1);
    const hit = result.hits[0];
    expect(hit).toBeInstanceOf(OrderDoc);
    expect(hit._id).toBe("1");
    // expect(hit.userId).toBe(1);
    // expect(hit.status).toBe(1);
    // expect(hit.source).toBe(1);
    // expect(hit.price).toBe(5);

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
    expect(result.getIds()).toStrictEqual([1]);
  });
});