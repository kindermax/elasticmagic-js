elasticmagic-js (alpha)
=======================

> This is alpha. Api may/will change.

JS/Typescript DSL for Elasticsearch

This lib is a port of original library written in `python` by [@anti-social]( https://github.com/anti-social/elasticmagic )

Supports Elasticsearch version 6.x

* **Docs** - [https://elasticmagic.js.org/](https://elasticmagic.js.org/)

# Getting Started

Install elasticmagic-js using [`npm`](https://www.npmjs.com/):

```bash
npm install elasticmagic
```

# Examples

Let's get started by writing a simple query.

1. Declare class. We will use it both as `query builder` and container for data from elastic.

   As you can see we declare one static field and one intance field with almost same name but different types.  
   Static field will be used to build queries.
   Instance field will be populated on search query so they must be the same as in elasticsearch document.

```javascript
import { Client } from '@elastic/elasticsearch';
import { 
  Cluster,
  Field,
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

class OrderDoc extends Doc {
  public static docType: string = 'order';

  public static userId = new Field(IntegerType, 'user_id', OrderDoc);
  public user_id?: number;

  public static status = new Field(IntegerType, 'status', OrderDoc);
  public status?: number;

  public static source = new Field(IntegerType, 'source', OrderDoc);
  public source?: number;

  public static price = new Field(IntegerType, 'price', OrderDoc);
  public price?: number;

  public static dateCreated = new Field(DateType, 'date_created', OrderDoc);
  public date_created?: Date;
}
```

2. Create elasticsearch client and pass it to Cluester

```javascript
const client = new Client({ node: 'http://es6-test:9200' });
const cluster = new Cluster(client, 'test_order_index');

```

3. Now we ready to write our query

```javascript
const query = cluster.searchQuery({ routing: 1 })
  .source(false)
  .filter(
    Bool.must(
      OrderDoc.user_id.in([1]),
      OrderDoc.status.in([OrderStatus.new, OrderStatus.paid]),
      OrderDoc.source.not(OrderSource.mobile),
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

4. To fetch results from elasticsearch: Lets suppouse we have one doc in index with id 1.

```javascript
const result = await query.getResult<OrderDoc>();
console.log(result.getIds()); // prints [1]
const hit = result.hits[0];

console.log(hit.user_id); // prints 1
```

#### Aggregations

```javascript
const query = searchQuery
  .source(false)
  .filter(
    Bool.must(
      OrderDoc.userId.in([1]),
      OrderDoc.status.in([OrderStatus.new, OrderStatus.handled, OrderStatus.paid]),
      OrderDoc.source.not(OrderSource.mobile),
      OrderDoc.dateCreated.lte(new Date().toISOString()),
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
                OrderDoc.status.in([OrderStatus.paid, OrderStatus.handled]),
              ),
              aggs: {
                paid: new agg.Filter({
                  filter: OrderDoc.status.eq(OrderStatus.paid)
                }), 
                handled: new agg.Filter({
                  filter: OrderDoc.status.eq(OrderStatus.handled)
                }),
              }
            }),
            canceled: new agg.Filter({
              filter: OrderDoc.status.eq(OrderStatus.canceled),
            }),
            new: new agg.Filter({
              filter: OrderDoc.status.eq(OrderStatus.new)
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
console.log(total.docCount) // prints 1
```

# Development


#### Tests

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

- [ ] documentation (https://typedoc.org, docusaurus, js.org)
- [ ] add support for elasticsearch  5, 7 versions, compilers for different es versions
- [ ] precommit hooks
- [ ] generate doc with jsDoc
- [ ] generate doc like ttag has
- [ ] elasticsearch must be devDep or peerDep, but not production dep (create Client interface)
- [ ] scroll
- [ ] pagination
- [ ] queryFilters
- [ ] function_score, inline functions
- [ ] sub documents
- [ ] more tests
- [ ] indexing, delete, bulk (CRUD)
- [ ] post_filters
- [ ] rescores
- [ ] highlight
- [ ] add doc to methods
- [ ] MultiMatch, Ids
- [ ] api docs

# Doc TODO

As an example - https://github.com/reduxjs/redux

- [ ] API - for each class and each method of there must be 
  - [ ] how to create or instantiate or call
  - [ ] how to pass args
  - [ ] basic usage example
  - [ ] the most important relations with others elements
- [ ] Examples
  - [ ] query
  - [ ] aggregation
  - [ ] cluster
  - [ ] multiple indices
  - [ ] function score
  - [ ] query filters
  - [ ] realworld examples
  - [ ] CRUD
- [ ] deprecations
- [ ] how to develop and contribute
