import { SearchQuery } from "../src/query";
import { Bool } from '../src/expression';
import { OrderDoc, OrderStatus, OrderSource } from "./fixtures";

describe("SearchQuery compile", () => {
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
