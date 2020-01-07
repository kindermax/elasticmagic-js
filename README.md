elasticmagic-js
===============

JS/Typescript DSL for Elasticsearch

This lib is a port of original library written in `python` by [@anti-social]( https://github.com/anti-social/elasticmagic )

Supports Elasticsearch version 6.x

# Getting Started

Install elasticmagic-js using [`npm`](https://www.npmjs.com/):

```bash
npm install elasticmagic-js
```

# Examples

Let's get started by writing a simple query.

```javascript
import { Client } from '@elastic/elasticsearch';
import { 
  Cluster,
  Field,
  FieldProp,
  IntegerType,
  Doc,
  Bool,
} from "elasticmagic-js";

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

// You can either set property manually or use FieldProp decrator.
// The later will bind parent for you and set field name as well.

class OrderDoc extends Doc {
  public static docType: string = 'order';

  @FieldProp(IntegerType, { name: 'user_id' })
  public static userId: Field;

  @FieldProp(IntegerType)
  public static status: Field;
  
  public static source: Field = new Field(IntegerType, { name: 'source', parent: OrderDoc });
  public static price: Field = new Field(IntegerType, { name: 'price', parent: OrderDoc });
  public static dateCreated: Field = new Field(DateType, { name: 'date_created', parent: OrderDoc });
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
const result = await query.getResult<OrderDoc>();
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

Now you can get aggregation data

```javascript

const result = await query.getResult<OrderDoc>();

const usersOrders = result.getAggregation("usersOrders");
console.log(usersOrders.buckets[0].key) // prints 1
console.log(usersOrders.buckets[0].docCount) // prints 1

const total = usersOrders.buckets[0].getAggregation("total")
console.log(total.docCount) // # prints 1
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

Run one test

```bash
make test TEST=tests/testSearchQuery.spec.ts
# or
make test TEST=testSearchQuery.spec.ts
```

# TODO

- [x] query generation
- [x] aggregations
- [x] get aggregations result
- [ ] documentation (https://typedoc.org, docusaurus, js.org)
- [ ] add support for es5, es7
- [ ] collect doc classes
- [ ] work with Date type
- [ ] clone query
- [x] return typed result of search +-
- [ ] precommit hooks
- [ ] generate doc with jsDoc
- [ ] generate doc like ttag has
- [ ] elasticsearch must be devDep or peerDep, but not production dep
- [ ] meta document creation
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

