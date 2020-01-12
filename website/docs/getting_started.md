---
id: getting_started
title: Getting started with Elasticmagic
sidebar_label: Getting started with Elasticmagic
---

Elasticmagic is a Elasticsearch query builder and ORM for JavaScript/Typescript.

It helps you easily build queries which are typed and safe. 

You do not need to remember how to write `json` DSL for Elasticsearch, Elasticmagic will do it for you.

## Installation

To install Elasticmagic via NPM:

```bash
npm install --save elasticmagic
```

Also you need an Elasticseach official js client

```bash
npm install --save @elastic/elasticsearch
```

## Basic example

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
  )
  .limit(0);

// To make a query to Elasticsearch we calling getResult.
const result = await query.getResult<OrderDoc>();
console.log(result.getIds()); // prints [1]

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