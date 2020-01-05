import { Field, Integer, Document } from "../src/document";
import { SearchQuery } from "../src/query";
import { Bool } from "../src/expression";
import * as agg from '../src/agg';

class OpinionDocument extends Document {
  public static _docType: string = 'opinion';

  public static companyId: Field = new Field(Integer, 'company_id')
  public static status: Field = new Field(Integer, 'status') // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(Integer, 'source')
}

const companyIds = [123];

describe("Aggregations compile", () => {
  test('valid aggregations', () => {
    const searchQuery = new SearchQuery({})
    const query = searchQuery
      .source(false)
      .filter(
        Bool.must(
          OpinionDocument.companyId.in_(companyIds),
          OpinionDocument.status.in_([1, 5]),
          OpinionDocument.source.not_(16),
        )
      )
      .aggregations({
        companies: new agg.Terms({
          field: OpinionDocument.companyId,
          size: companyIds.length,
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
                    company_id: [
                      123
                    ]
                  }
                },
                {
                  terms: {
                    status: [
                      1,
                      5
                    ]
                  }
                },
                {
                  bool: {
                    must_not: [
                      {
                        term: {
                          source: 16
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
        companies: {
          terms: {
            field: "company_id",
            size: 1
          },
          aggregations: {
            total: {
              filter: {
                terms: {
                  status: [
                    1,
                    5
                  ]
                }
              },
              aggregations: {
                with_rating: {
                  filter: {
                    bool: {
                      must: [
                        {
                          bool: {
                            must_not: [
                              {
                                term: {
                                  rating: 3
                                }
                              }
                            ]
                          }
                        },
                        {
                          term: {
                            published_without_rating: false
                          }
                        }
                      ]
                    }
                  },
                  aggregations: {
                    positive: {
                      filter: {
                        range: {
                          rating: {
                            gt: 3
                          }
                        }
                      }
                    },
                    negative: {
                      filter: {
                        range: {
                          rating: {
                            lt: 3
                          }
                        }
                      }
                    }
                  }
                },
                neutral: {
                  filter: {
                    bool: {
                      must: [
                        {
                          term: {
                            rating: 3
                          }
                        },
                        {
                          term: {
                            published_without_rating: false
                          }
                        }
                      ]
                    }
                  }
                }
              }
            },
            total_short: {
              filter: {
                bool: {
                  must: [
                    {
                      terms: {
                        status: [
                          1,
                          5
                        ]
                      }
                    },
                    {
                      range: {
                        date_created: {
                          gte: "2019-01-04T23:59:59.999999"
                        }
                      }
                    }
                  ]
                }
              },
              aggregations: {
                with_rating: {
                  filter: {
                    bool: {
                      must: [
                        {
                          bool: {
                            must_not: [
                              {
                                term: {
                                  rating: 3
                                }
                              }
                            ]
                          }
                        },
                        {
                          term: {
                            published_without_rating: false
                          }
                        }
                      ]
                    }
                  },
                  aggregations: {
                    positive: {
                      filter: {
                        range: {
                          rating: {
                            gt: 3
                          }
                        }
                      }
                    },
                    negative: {
                      filter: {
                        range: {
                          rating: {
                            lt: 3
                          }
                        }
                      }
                    }
                  }
                },
                neutral: {
                  filter: {
                    bool: {
                      must: [
                        {
                          term: {
                            rating: 3
                          }
                        },
                        {
                          term: {
                            published_without_rating: false
                          }
                        }
                      ]
                    }
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