import { Bool } from '../../src/expression';
import { SearchQuery } from '../../src/search';
import { OrderDoc, OrderSource, OrderStatus } from '../fixtures';

describe('SearchQuery compile', () => {
  test('empty search query', () => {
    const searchQuery = new SearchQuery({});
    expect(searchQuery.toJSON()).toStrictEqual({});
  });

  test('with terms expression in bool must', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery.filter(Bool.must(OrderDoc.userId.in([1])));
    expect(query.toJSON()).toStrictEqual({
      query: {
        bool: {
          filter: {
            terms: {
              user_id: [1],
            },
          },
        },
      },
    });
  });

  test('with terms expression without bool must', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery.filter(OrderDoc.userId.in([1]));
    expect(query.toJSON()).toStrictEqual({
      query: {
        bool: {
          filter: {
            terms: {
              user_id: [1],
            },
          },
        },
      },
    });
  });

  test('with two terms expression', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
        ),
      );
    expect(query.toJSON()).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
              ],
            },
          },
        },
      },
    });
  });

  test('with term and terms expression', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      );
    expect(query.toJSON()).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}},
                  ],
                }},
              ],
            },
          },
        },
      },
    });
  });

  test('with date range', () => {
    const searchQuery = new SearchQuery({});
    const now = new Date().toISOString();
    const query = searchQuery
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
          OrderDoc.dateCreated.lte(now),
        ),
      );
    expect(query.toJSON()).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}},
                  ],
                }},
                {
                  range: {
                    date_created: {
                      lte: `${now}`,
                    },
                  },
                },
              ],
            },
          },
        },
      },
    });
  });

  test('with only _source field', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery.source(false);

    expect(query.toJSON()).toStrictEqual({ _source: false });
  });

  test('with expressions and _source field', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .source(false);

    expect(query.toJSON()).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}},
                  ],
                }},
              ],
            },
          },
        },
      },
      _source: false,
    });
  });

  test('with size field only', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery.limit(0);

    expect(query.toJSON()).toStrictEqual({ size: 0 });
  });

  test('with expressions and size field', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .limit(0);

    expect(query.toJSON()).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}},
                  ],
                }},
              ],
            },
          },
        },
      },
      size: 0,
    });
  });

  test('valid es query in json', () => {
    const searchQuery = new SearchQuery({});
    const query = searchQuery
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .limit(0);
    expect(query.toJSON()).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {terms: {user_id: [1]}},
                {terms: {status: [OrderStatus.new, OrderStatus.paid]}},
                {bool: {
                  must_not: [
                    {term: {source: OrderSource.mobile}},
                  ],
                }},
              ],
            },
          },
        },
      },
      _source: false,
      size: 0,
    });
  });

  test('valid query with _routing', () => {
    const searchQuery = new SearchQuery({
      routing: 1,
      docClass: OrderDoc,
      docType: 'order',
    });
    const query = searchQuery
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .limit(0);
    expect(query.params).toStrictEqual({
      routing: '1',
      type: 'order',
    });
  });

  test('valid query with size field', () => {
    const query = new SearchQuery()
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .limit(0);
    const original = query.clone().sort(OrderDoc.userId.desc());
    expect(original.toJSON().sort).toStrictEqual([{
        user_id: 'desc',
    }]);

    original.orderBy(null);
    expect(original.toJSON()).not.toHaveProperty('sort');

    original.orderBy(OrderDoc.userId);
    expect(original.toJSON().sort).toStrictEqual(['user_id']);

    const cloned = query.clone().orderBy(OrderDoc.userId.asc());
    query.clone().orderBy(OrderDoc.userId.asc());
    query.clone().orderBy(OrderDoc.userId.asc());
    expect(cloned.toJSON().sort).toStrictEqual([{
        user_id: 'asc',
    }]);
  });

  test('valid query with nulled  _source field', () => {
    const query = new SearchQuery()
      .source(null)
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .limit(0);

    expect(query.toJSON()).not.toHaveProperty('_source');
  });

  test('valid query with fields in _source field', () => {
    const query = new SearchQuery()
      .source([
        OrderDoc.userId,
        'status',
      ])
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .limit(0);

    expect(query.toJSON()).toHaveProperty('_source');
    expect(query.toJSON()._source).toStrictEqual(['user_id', 'status']);
  });

  test('valid query with all fields and exclude is list of string in _source field', () => {
    const query = new SearchQuery()
      .source(true, {
        exclude: ['status'],
      });

    expect(query.toJSON()).toHaveProperty('_source');
    expect(query.toJSON()._source).toStrictEqual({exclude: ['status']});
  });

  test('valid query with all fields include and exclude is list of string in _source field', () => {
    const query = new SearchQuery()
      .source(true, {
        exclude: ['status'],
        include: [OrderDoc.userId],
      });

    expect(query.toJSON()).toHaveProperty('_source');
    expect(query.toJSON()._source).toStrictEqual({exclude: ['status'], include: ['user_id']});
  });

  test('valid query with all fields and empty exclude in _source field', () => {
    const query = new SearchQuery()
      .source(true, {
        exclude: [],
      })
      .filter(
        Bool.must(
          OrderDoc.userId.in([1]),
          OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
          OrderDoc.source.not(OrderSource.mobile),
        ),
      )
      .limit(0);

    expect(query.toJSON()).toHaveProperty('_source');
    expect(query.toJSON()._source).toStrictEqual({});
  });
});
