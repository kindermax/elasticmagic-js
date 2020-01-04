import { Field, Integer, Document } from "../src/document";
import { SearchQuery } from "../src/query";
import { Bool } from "../src/expression";

class OpinionDocument extends Document {
  public static _docType: string = 'opinion';

  public static companyId: Field = new Field(Integer, 'company_id')
  public static status: Field = new Field(Integer, 'status') // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(Integer, 'source')
}


describe("Query generation", () => {
  test('should generate valis es query in json', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery
      .source(false)
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([123]),
          OpinionDocument.status.in_([1, 5]),
          OpinionDocument.source.not_(16),
        )
      )
      .limit(0);
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {company_id: [123]}},
                {terms: {status: [1, 5]}},
                {bool: {
                  must_not: [
                    {term: {source: 16}}
                  ]
                }}
              ]
            }
          }
        }
      },
      _source: false,
      size: 0
    })
  });

  test('should generate valid query with _routing', () => {
    const searchQuery = new SearchQuery({
      routing: 123,
      docClass: OpinionDocument,
      docType: 'opinion',
    })
    const query = searchQuery
      .source(false)
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([123]),
          OpinionDocument.status.in_([1, 5]),
          OpinionDocument.source.not_(16),
        )
      )
      .limit(0);
    expect(query.params).toStrictEqual({
      routing: '123',
      type: 'opinion'
    })
  });
});