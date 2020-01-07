import { SearchQuery } from '../src/query';
import { Bool } from '../src/expression';
import * as agg from '../src/agg';
import { OrderDoc, OrderStatus, OrderSource } from './fixtures';

describe('Aggregations compile', () => {
  test('valid aggregations', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery
      .source(false)
      .filter(
        Bool.must(
          OrderDoc.userId.in_([1]),
          OrderDoc.status.in_([OrderStatus.new, OrderStatus.handled, OrderStatus.paid]),
          OrderDoc.source.not_(OrderSource.mobile),
        )
      )
      .aggregations({
        usersOrders: new agg.Terms({
          field: OrderDoc.userId,
          size: 1,
          aggs: {
            total: new agg.Filter({
              filter: OrderDoc.conditionSourceDesktop(),
              aggs: {
                selled: new agg.Filter({
                  filter: Bool.must(
                    OrderDoc.status.in_([OrderStatus.paid, OrderStatus.handled]),
                  ),
                  aggs: {
                    paid: new agg.Filter({
                      filter: OrderDoc.status.eq_(OrderStatus.paid)
                    }), 
                    handled: new agg.Filter({
                      filter: OrderDoc.status.eq_(OrderStatus.handled)
                    }),
                  }
                }),
                canceled: new agg.Filter({
                  filter: OrderDoc.status.eq_(OrderStatus.canceled),
                }),
                new: new agg.Filter({
                  filter: OrderDoc.status.eq_(OrderStatus.new)
                })
              }
            }),
            lowcost: new agg.Filter({
              filter: OrderDoc.conditionLowPrice()
            })
          }
        })
      })
      .limit(0);
    expect(query.body).toStrictEqual({
      query: {
        bool: {
          filter: {
            bool: {
              must: [
                {
                  terms: {
                    user_id: [
                      1
                    ]
                  }
                },
                {
                  terms: {
                    status: [
                      1,
                      3,
                      2 // order is a must
                    ]
                  }
                },
                {
                  bool: {
                    must_not: [
                      {
                        term: {
                          source: 2
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      _source: false,
      aggregations: {
        usersOrders: {
          terms: {
            field: 'user_id',
            size: 1
          },
          aggregations: {
            total: {
              filter: {
                terms: {
                  source: [
                    1
                  ]
                }
              },
              aggregations: {
                selled: {
                  filter: {
                    terms: {
                      status: [2, 3]
                    }
                  },
                  aggregations: {
                    paid: {
                      filter: {
                        term: {
                          status: 2
                        }
                      }
                    },
                    handled: {
                      filter: {
                        term: {
                          status: 3
                        }
                      }
                    }
                  }
                },
                canceled: {
                  filter: {
                    term: {
                      status: 4
                    }
                  }
                },
                new: {
                  filter: {
                    term: {
                      status: 1
                    }
                  }
                }
              }
            },
            lowcost: {
              filter: {
                range: {
                  price: {
                    lt: 10
                  }
                }
              }
            }
          }
        }
      },
      size: 0
    })
  });
});