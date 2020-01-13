elasticmagic-js - JS/Typescript DSL for Elasticsearch
=======================

> The project is still very much a work in progress and in an alpha state, api may/will change; input and contributions welcome!

[![actions](https://github.com/kindritskyiMax/elasticmagic-js/workflows/tests/badge.svg?branch=master)](https://github.com/kindritskyiMax/elasticmagic-js/actions)

Elasticmagic is an Elasticsearch query builder and ORM for JavaScript/Typescript.

It helps you easily build queries which are typed and safe. 

You do not need to remember how to write `json` DSL for Elasticsearch, Elasticmagic will do it for you.


> This lib is a port of original library written in `python` by [@anti-social]( https://github.com/anti-social/elasticmagic )

## Versions

Supports Elasticsearch version 6.x

## Docs

**Docs** - [https://elasticmagic.js.org/](https://elasticmagic.js.org/)

**Changelog** - [https://elasticmagic.js.org/docs/changelog.html](elasticmagic.js.org/docs/changelog.html)

## Installation

To install Elasticmagic via NPM:

```bash
npm install --save elasticmagic
```

Also you need an Elasticseach official js client

```bash
npm install --save @elastic/elasticsearch
```

## Getting Started

#### Query building

```javascript
import { Client } from '@elastic/elasticsearch';
import { 
  Cluster,
  Field,
  IntegerType,
  Doc,
  Bool,
} from "elasticmagic-js";


/**
 * Here we creating our document which maps structure of same document in Elasticsearch.  
 * 
 * We will use this class as our query builder.
 * Also when we will get result from elasticsearch, we instantiate this class
 * and populate it with data from Elasticsearch hits.
 * 
 * First we declare docType - it must be the same as document in Elasticsearch mapping. 
 * 
 * Then we declare static fields that will be user to build our queries. 
 * As we do not need an instance of this class to build queries, the fields are static.
 * 
 * Next, conventionaly, we declare instance properties, as you can see, with almost same name. 
 * Then lettercase is same as fields in Elasticseach mapping
 * 
 * And thats is.  
 */
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

// Create a Elasticsearch client which will be passed to cluster.
const client = new Client({ node: 'http://es6-test:9200' });
// Create cluster instance. Its an entrypiint for interacting with Elasticsearch.
const cluster = new Cluster(client, 'test_order_index');


// Lets start building our query.
// Calling searchQuery method we start creating new query.
// We using builder pattern, so you can chain any amount of methods
const query = cluster.searchQuery({ routing: 1 })
  .source(true)
  .filter(
    Bool.must(
      OrderDoc.user_id.in([1]),
      OrderDoc.status.in([1, 2]),
      OrderDoc.source.not(1),
      OrderDoc.dateCreated.lte(new Date().toISOString())
    )
  );

// To make a query to Elasticsearch we calling getResult.
const result = await query.getResult<OrderDoc>();
console.log(result.getIds()); // prints ["1"]

const hit = result.hits[0];
console.log(hit.user_id); // prints 1
```

We can check what query Elasticmagic will build for us.

```javascript
console.log(query.toJSON()) 
// or alias 
console.log(query.body)

// to see prettified query
console.log(query.prettyQuery)
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

## Tests

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

## TODO

#### Document API (CRUD)

- [ ] Index API
- [ ] Get API
- [ ] Delete API
- [ ] Delete By Query API
- [ ] Update API
- [ ] Update By Query API
- [ ] Multi Get API
- [ ] Bulk API
- [ ] Reindex API
  
#### Query DSL
- [x] searchQuery
- [x] aggregations
- [ ] Match All Query
- [ ] Match All Query
- Full text queries
  - [ ] Match Query
  - [ ] Match Phrase Query
  - [ ] Match Phrase PrefixQuery
  - [ ] Multi Match Query
  - [ ] Common Terms Query
  - [ ] Query String Query
  - [ ] Simple Query String Query
- Term level queries
  - [x] Term Query
  - [x] Terms Query
  - [ ] Terms Set Query
  - [x] Range Query
  - [ ] Exists Query
  - [ ] Prefix Query
  - [ ] Wildcard Query
  - [ ] Regexp Query
  - [ ] Fuzzy Query
  - [ ] Type Query
  - [ ] Ids Query
- Compound queries
  - [ ] Constant Score Query
  - [ ] Bool Query
  - [ ] Dis Max Query
  - [ ] Function Score Query
  - [ ] Boosting Query
- Joining queries
  - [ ] Nested Query
  - [ ] Has Child Query
  - [ ] Has Parent Query
  - [ ] Parent Id Query
- Specialized queries
  - [ ] Distance Feature Query
  - [ ] More Like This Query
  - [ ] Script Query
  - [ ] Script Score Query
  - [ ] Percolate Query
- Sorting
  - [ ] Sort by score
  - [x] Sort by field
  - [ ] Sort by geo distance
  - [ ] Sort by script
  - [ ] Sort by doc

  
#### Search APIs (

- [ ] Multi Search
- [ ] Search Shards API
- [ ] Multi Search API
- [ ] Count API
- [ ] Validate API
- [ ] Explain API
- [ ] Profile API


#### Elasticsearch versions interop

- [ ] add support for elasticsearch 5, 7 versions, compilers for different es versions

#### Development

- [ ] precommit hooks
- [ ] fix integration tests by randomly creating indexes, so tests can be run in parallel
- [ ] add documentation to methods
- [ ] generate api docs (typedoc)
  
#### cat APIs

#### Other

- [ ] Post filters
- [ ] Rescores
- [ ] Scroll
- [ ] Pagination
- [ ] QueryFilters
- [ ] Sub document in field
- [ ] Sub field in field
- [ ] Highlight
