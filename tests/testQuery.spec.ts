import { Field, IntegerType, Doc, DateType } from "../src/document";
import { SearchQuery } from "../src/query";
import { Bool } from "../src/expression";

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
  public static docType: string = 'order';

  public static userId: Field = new Field(IntegerType, 'user_id');
  public static status: Field = new Field(IntegerType, 'status'); // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(IntegerType, 'source');
  public static price: Field = new Field(IntegerType, 'price');
  public static dateCreated: Field = new Field(DateType, 'date_created');
}


describe("Query compile", () => {
  test('empty search query', () => {
    const searchQuery = new SearchQuery({})
    expect(searchQuery.body).toStrictEqual({});  
  });
  
  test('with terms expression in bool must', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery.filter(Bool.must(OrderDoc.userId.in_([1])));
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            terms: {
              user_id: [1]
            }
          }
        }
      }
    });
  });
  
  test('with terms expression without bool must', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery.filter(OrderDoc.userId.in_([1]));
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            terms: {
              user_id: [1]
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
          OrderDoc.userId.in_([1]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
        )
      );
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
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
          OrderDoc.userId.in_([1]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
        )
      );
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}}
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
          OrderDoc.userId.in_([1]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
        )
      )
      .source(false);

    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}}
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
          OrderDoc.userId.in_([1]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
        )
      )
      .limit(0);

    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}}
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
          OrderDoc.userId.in_([1]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
        )
      )
      .limit(0);
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}}
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
      routing: 1,
      docClass: OrderDoc,
      docType: 'order',
    })
    const query = searchQuery
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in_([1]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
        )
      )
      .limit(0);
    expect(query.params).toStrictEqual({
      routing: '1',
      type: 'order'
    })
  });
});