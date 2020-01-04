import { Field, Integer, Document } from "../src/document";
import { SearchQuery } from "../src/query";
import { Bool } from "../src/expression";

class OpinionDocument extends Document {
  public static _docType: string = 'opinion';

  public static companyId: Field = new Field(Integer, 'company_id')
  public static status: Field = new Field(Integer, 'status') // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(Integer, 'source')
}


describe("Query compile", () => {
  test('empty search query', () => {
    const searchQuery = new SearchQuery({})
    expect(searchQuery.body).toStrictEqual({});  
  });
  
  test('with terms expression in bool must', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery.filter(Bool.must(OpinionDocument.companyId.in_([123])));
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            terms: {
              company_id: [123]
            }
          }
        }
      }
    });
  });
  
  test('with terms expression without bool must', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery.filter(OpinionDocument.companyId.in_([123]));
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            terms: {
              company_id: [123]
            }
          }
        }
      }
    });
  });

  test('with two terms expression', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([123]),
          OpinionDocument.status.in_([1, 5]),
        )
      );
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {company_id: [123]}},
                {terms: {status: [1, 5]}},
              ]
            }
          }
        }
      },
    })
  });

  test('with term and terms expression', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([123]),
          OpinionDocument.status.in_([1, 5]),
          OpinionDocument.source.not_(16),
        )
      );
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
    })
  });

  test('with only _source field', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery.source(false);

    expect(query.body).toStrictEqual({ _source: false });
  });

  test('with expressions and _source field', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_([123]),
          OpinionDocument.status.in_([1, 5]),
          OpinionDocument.source.not_(16),
        )
      )
      .source(false);

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
    })
  });

  test('with size field only', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery.limit(0);

    expect(query.body).toStrictEqual({ size: 0 });
  });

  test('with expressions and size field', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery
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
      size: 0
    })
  });

  test('valid es query in json', () => {
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

  test('valid query with _routing', () => {
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