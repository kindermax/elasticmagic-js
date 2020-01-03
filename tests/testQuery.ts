import { Index } from "../src/cluster";
import { Field, Integer, Document } from "../src/document";
import { Bool } from "../src/expression";

class OpinionDocument extends Document {
  public static companyId: Field = new Field(Integer, 'company_id')
  public static status: Field = new Field(Integer, 'status') // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(Integer, 'source')
}


describe("Query generation", () => {
  test('should generate proper es query in json', () => {
    const index = new Index();

    const query = index.searchQuery()
      .source(false)
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([123]),
          OpinionDocument.status.in_([1, 5]),
          OpinionDocument.source.not_(16),
        )
      )
      .limit(0);
    expect(query.toDict()).toStrictEqual({
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
});