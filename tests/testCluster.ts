import { Client } from '@elastic/elasticsearch';
import { Field, Integer, Document } from "../src/document";
import { Bool } from "../src/expression";
import { Cluster } from "../src/cluster";

class OpinionDocument extends Document {
  public static companyId: Field = new Field(Integer, 'company_id')
  public static status: Field = new Field(Integer, 'status') // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(Integer, 'source')
}

let client: Client;

const companyId = 123;
const indexName = 'test_opinion_index';
const esHost = 'http://es6:9200';

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
      "company_id": {
          "type": "integer"
      },
      "source": {
          "type": "integer"
      },
      "status": {
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
    type: 'opinion', // TODO use include_type_name for es >= 7, https://www.elastic.co/guide/en/elasticsearch/reference/master/removal-of-types.html
    body: mapping
  });
  // index doc
  await client.index({
    index: indexName,
    id: "1",
    type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      company_id: companyId,
      status: 1,
      source: 15
    },
    routing: `${companyId}`,
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

    const query = cluster.searchQuery({ routing: companyId, docClass: OpinionDocument })
      .source(false)
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([companyId]),
          OpinionDocument.status.in_([1, 5]),
          OpinionDocument.source.not_(16),
        )
      )
      .limit(0);
    
    const result = await query.getResult();
    expect(result.statusCode).toBe(200);
    expect(result.body.hits.total).toBe(1);
    expect(result.body.hits.hits.length).toBe(0);
  });

  test('should return response with a source', async () => {
    const cluster = new Cluster(client, indexName);

    const query = cluster.searchQuery({ routing: companyId, docClass: OpinionDocument })
      .source(false)
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([companyId]),
          OpinionDocument.status.in_([1, 5]),
          OpinionDocument.source.not_(16),
        )
      );
    
    const result = await query.getResult();
    expect(result.statusCode).toBe(200);
    expect(result.body.hits.total).toBe(1);
    expect(result.body.hits.hits.length).toBe(1);
    expect(result.body.hits.hits[0]).toStrictEqual({
      "_id": "1",
      "_index": indexName,
      "_routing": `${companyId}`,
      "_score": 0,
      "_type": "opinion",
    });
  });
});