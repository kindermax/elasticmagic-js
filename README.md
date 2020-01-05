elasticmagic-js
===============

JS/Typescript DSL for Elasticsearch

This lib is a port of original library written in `python` by [@anti-social]( https://github.com/anti-social/elasticmagic )

# Getting Started

Install elasticmagic-js using [`npm`](https://www.npmjs.com/):

```bash
npm install elasticmagic-js
```

# Examples

Let's get started by writing a simple query.

```javascript
import { Client } from '@elastic/elasticsearch';
import { Cluster } from "elasticmagic-js/cluster";
import { Field, Integer, Document } from "elasticmagic-js/document";
import { Bool } from "elasticmagic-js/expression";

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

class OrderDoc extends Document {
  public static _docType: string = 'order';

  public static userId: Field = new Field(Integer, 'user_id');
  public static status: Field = new Field(Integer, 'status'); // TODO how can we get names in runtime? like python metaclass
  public static source: Field = new Field(Integer, 'source');
  public static price: Field = new Field(Integer, 'price');
  public static dateCreated: Field = new Field(EsDate, 'date_created');
}

const client = new Client({ node: 'http://es6-test:9200' });
const cluster = new Cluster(client, 'test_order_index');

const query = cluster.searchQuery({ routing: 1, docClass: OrderDoc })
  .source(false)
  .filter(
    Bool.must(
      OrderDoc.user_id.in_([1]),
      OrderDoc.status.in_([OrderStatus.new, OrderStatus.paid]),
      OrderDoc.source.not_(OrderSource.mobile),
    )
  )
  .limit(0);

console.log(query.toJSON()) // or console.log(query.body)
```

It will print:

```bash
{
  query: {
    bool: {
      filter: {
        bool: {
          must: [
            {terms: {user_id: [1]}},
            {terms: {status: [1, 2]}},
            {bool: {
              must_not: [
                {term: {source: 2}}
              ]
            }}
          ]
        }
      }
    }
  },
  _source: false,
  size: 0
}
```

To fetch results from elasticsearch:

```javascript
const result = await query.getResult();
```

#### Aggregations

```javascript
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
  });
```

# Development


#### Tests

First build base image

```bash
make build # 
```

Run all tests

```bash
make test
```

# TODO

- [x] query generation
- [x] aggregations
- [ ] get aggregations result
- [ ] add support for es5, es7
- [ ] work with Date type
- [ ] return typed result of search
- [ ] prettier, tslint
- [ ] generate doc with jsDoc
- [ ] generate doc like ttag has
- [ ] elasticsearch must be devDep or peerDep, but not production dep
- [ ] meta document creation
- [ ] requests
- [ ] scroll
- [ ] pagination
- [ ] queryFilters
- [ ] inline functions
- [ ] compilers for different es versions
- [ ] sub documents
- [ ] more tests
- [ ] indexing
- [ ] delete
- [ ] bulk
- [ ] replace any type with proper types
- [ ] drop unused fields

