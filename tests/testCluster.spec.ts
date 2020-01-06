import { Client } from '@elastic/elasticsearch';
import { Field, IntegerType, Doc, DateType } from "../src/document";
import { Bool } from "../src/expression";
import { Cluster } from "../src/cluster";
import * as agg from '../src/agg';

enum OrderStatus {
  new = 1,
  paid = 2,
  handled = 3,
  canceled = 4,
}

enum OrderSource {
  desktop = 1,
  mobile = 2,
}

class OrderDoc extends Doc {
  public static _docType: string = 'order';

  public static userId: Field = new Field(IntegerType, 'user_id');
  public static status: Field = new Field(IntegerType, 'status'); // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(IntegerType, 'source');
  public static price: Field = new Field(IntegerType, 'price');
  public static dateCreated: Field = new Field(DateType, 'date_created');
  
}

let client: Client;

const userId = 1;
const type = 'order';
const indexName = 'test_order_index';
const esHost = `http://${process.env.ES_HOST}:9200`;

const mapping = {
  "dynamic": "false",
  "_all": {
      "enabled": false
  },
  "_routing": {
      "required": true
  },
  "date_detection": false,
  "properties": {
      "user_id": {
          "type": "integer"
      },
      "source": {
          "type": "integer"
      },
      "status": {
          "type": "integer"
      },    
      "date_created": {
          "type": "date"
      },    
      "price": {
          "type": "integer"
      }
  }
};

beforeAll(async () => {
  client = new Client({ node: esHost });
  // cleanup before all tests
  await client.indices.delete({
    index: indexName,
    ignore_unavailable: true
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

describe("Cluster", () => {
  test('should make a request with a valid response', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in_([userId]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
        )
      )
      .limit(0);
    
    const result = await query.getResult<OrderDoc>();
    expect(result.error).toBeUndefined();
    expect(result.total).toBe(1);
    expect(result.hits.length).toBe(0);
  });

  test('should return response with a source', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in_([userId]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
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

  test('should return response with aggregations', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: userId, docClass: OrderDoc })
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in_([userId]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
        )
      )
      .aggregations({
        users: new agg.Terms({
          field: OrderDoc.userId,
          size: 1,
          aggs: {
            total: new agg.Filter({
              filter: OrderDoc.status.eq_(OrderStatus.new)
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

  test('should return es version', async () => {
    const cluster = new Cluster(client, indexName);

    const esVersion = await cluster.getEsVersion();
    expect(esVersion.major).toBe(6);
  });
});