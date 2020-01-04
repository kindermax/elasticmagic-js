import { Client } from '@elastic/elasticsearch';
import { Field, Integer, Document } from "../src/document";
import { Bool } from "../src/expression";
import { Cluster } from "../src/cluster";

class OpinionDocument extends Document {
  public static companyId: Field = new Field(Integer, 'company_id')
  public static status: Field = new Field(Integer, 'status') // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(Integer, 'source')
}


describe("Cluster", () => {
  test('should make a request with a valid response', async () => {
    const client = new Client({ node: 'http://es6-test:9200' });
    const cluster = new Cluster(client, 'test_opinion_index');

    const query = cluster.searchQuery({ routing: 123, docClass: OpinionDocument })
      .source(false)
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([123]),
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
    const client = new Client({ node: 'http://es6-test:9200' });
    const cluster = new Cluster(client, 'test_opinion_index');

    const query = cluster.searchQuery({ routing: 123, docClass: OpinionDocument })
      .source(false)
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([123]),
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
      "_index": "test_opinion_index",
      "_routing": "123",
      "_score": 0,
      "_type": "opinion",
    });
  });
});