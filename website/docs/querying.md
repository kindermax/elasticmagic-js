---
id: querying
title: Querying
---

Elasticmagic has a simple and powerful DSL to define queries.

## How it works

#### SearchQuery

To start writing queries you need a custom class which represents you document in Elasticsearch and extends Elasticmagic `Doc` class.

Assume we have document `Laptop` in Elasticseach with the next mapping:

```javascript
...
properties: {
    model: {
        type: 'string',
    },
    cpu: {
        type: 'integer',
    },
    price: {
        type: 'float',
    }, 
    manufactured_at: {
        type: 'date',
    },   
    manufacturer_id: {
        type: 'integer',
    }, 
    for_games: {
        type: 'boolean',
    },
}
```

Let's declare custom document.

You have to specify `docType` so the Elasticmagic will know which real document in Elasticseach this class represents.

```javascript
import { Doc } from 'elasticmagic';

class LaptopDoc extends Doc {
  public static docType: string = 'laptop';
} 
```

Next declare static properties which maps the mapping of the document in Elasticsearch.

```javascript
import { 
  Doc, 
  Field,

  StringType,
  IntegerType,
  DateType,
  BooleanType,
  FloatType,
} from 'elasticmagic';

class LaptopDoc extends Doc {
  public static docType: string = 'laptop';

  public static model = new Field(StringType, 'model', Laptop);
  public static cpu = new Field(IntegerType, 'cpu', Laptop);
  public static price = new Field(FloatType, 'price', Laptop);
  public static manufacturerId = new Field(IntegerType, 'manufacturer_id', Laptop);
  public static manufacturedAt = new Field(DateType, 'manufactured_at', Laptop);
  public static forGames = new Field(BooleanType, 'for_games', Laptop);
} 
```

If you planning to retreiveing source from document you have to declare instance properties.

Instance properies will be populated from `_source` field in `hit` object of the result, so
the former must be in same case as fields in Elasticsearch;

Conventionaly, you can declare instance properties below static properties.

```javascript
import { 
  Doc, 
  Field,

  StringType,
  IntegerType,
  DateType,
  BooleanType,
  FloatType,
} from 'elasticmagic';

class LaptopDoc extends Doc {
  public static docType: string = 'laptop';

  public static model = new Field(StringType, 'model', Laptop);
  public static cpu = new Field(IntegerType, 'cpu', Laptop);
  public static price = new Field(FloatType, 'price', Laptop);
  public static manufacturerId = new Field(IntegerType, 'manufacturer_id', Laptop);
  public static manufacturedAt = new Field(DateType, 'manufactured_at', Laptop);
  public static forGames = new Field(BooleanType, 'for_games', Laptop);

  public model?: string;
  public cpu?: number;
  public price?: number;
  public manufactured_id?: number;
  public manufactured_at?: string; // ISO format string
  public for_games?: boolean;
} 
```

##### Creating search query

Now you are ready to start building search query.

`SearchQuery` instance can be created in 3 ways.

* `new SearchQuery()` - will create unbound SearchQuery instance. Its enough to build a query, but to make a search request you have to bind query to `Index` or `Cluster` instance.
* `new Cluster(...).searchQuery()` - will created SearchQuery instance bounded to `Cluster`.  
* `new Index(...).searchQuery()` - will created SearchQuery instance bounded to `Index`.  

Prefered way is to call `.searchQuery()` on `index` or `cluster`;

##### Adding filters

Each static propery of type `Field` has a list of methods used to build query. Its same as [TODO link to es docs]().

For using `bool` expressions you can import `Bool` class from Elasticmagic.

```javascript
import { 
  Doc, 
  Field,

  StringType,
  IntegerType,
  DateType,
  BooleanType,
  FloatType,

  Bool,
} from 'elasticmagic';

const query = new SearchQuery()
  .filter(
    Bool.must(
      LaptopDoc.model.eq('Lenovo 530S'),
      LaptopDoc.price.lte(1000),
    )
  );
```

And that's it. You have built a query.

To see the json that Elasticmagic will generate to you:

```javascript
console.log(query.toJSON());
// or with getter property
console.log(query.body);
// or JSON.stringified and formatted string
console.log(query.prettyBody);
```

##### Cloning query

`SearchQuery` instance is mutable so each chained method changes its state.

If you want to start building another one query based on one you've already created, just call `.clone()` method on `SearchQuery` instance.

Next we will run search query against Elasticsearch

#### Cluster

To be able make queryies to Elasticsearch you have to create `Cluster`.

`Cluster` represents Elasticsearch cluster and is binded to Elasticsearch `Client` from `@elastic/elasticsearch` package.

Let's create new `Cluster` instance.

```javascript
import { Client } from '@elastic/elasticsearch';
import { Cluster } from 'elasticmagic';

const client = new Client({ node: 'http://localhost:9200' });
const cluster = new Cluster(client, 'laptop_index');
```

When passing index name as a second argument to `Cluster`, it will create `Index` instance under the hood.

> Current `Cluster` implementation allows to make a query to only one index. Work on supporting multi index queries is in progress.

If you want to make a query to particular index, call `.withIndex(<index_name_or_instance>)` method on `Cluster` instance. `withIndex` will change index for the whole cluster.

If you want to specify different index for only one search query, you can call `.withIndex(<index_instance>)` on `SearchQuery`. It will change index only for this query.

##### Making a request to Elasticsearch

Let's make a query

```javascript
import { Client } from '@elastic/elasticsearch';
import { Cluster } from 'elasticmagic';

const client = new Client({ node: 'http://localhost:9200' });
const cluster = new Cluster(client, 'laptop_index');

const query = cluster.searchQuery()
  .filter(
    Bool.must(
      LaptopDoc.model.eq('Lenovo 530S'),
      LaptopDoc.price.lte(1000),
    )
  );

const result = await query.getResult();

```
