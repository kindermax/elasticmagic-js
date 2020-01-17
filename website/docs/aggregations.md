---
id: aggregations
title: Aggregations
---

Elasticmagic DSL allows you to define aggregations on any complexity.

## How it works

#### Aggregations


##### Basic API

To start writing aggregations we can reuse `LaptopDoc` from [Querying](querying.md) page.

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

`SearchQuery` instance has a `.aggregations()` (with short alias `.aggs()`) method.

It accepts object where key is a name of aggregation and value can be one of expressions:

- `agg.Terms`


##### Start wrinting aggregations

Conventionaly, you can import all aggregation related stuff as:

TODO - test this code and decide

```javascript
import * as aggs from 'elasticmagic/aggs';
// or
import { aggs } from 'elasticmagic';
```

Lets add some aggregations. 

Suppose we want to get an aggregated list of prices.

First we filter docs by `manufacturerIds` list.

Then we create aggregation on `LaptopDoc.price` field, which means we want to collect (aggregate) prices for that manufacturers laptops.

Also we are specifying nested aggregation named `forGames` - it represents amount laptops which are suited for gaming.

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

import * as aggs from 'elasticmagic/aggs';

const manufacturerIds = [1, 2, 3];

const query = new SearchQuery()
  .limit(0)
  .source(false)
  .filter(
    LaptopDoc.manufacturedId.in(manufacturerIds)
  )
  .aggregations({
    prices: new aggs.Terms({
      field: LaptopDoc.price,
      /**
       *  if actual size of matched docs is unknown at the moment of building the query, 
       *  we can set some big value, such as 10 ** 4
       */
      size: 10 ** 4,  
      aggs: {
        forGames: new aggs.Filter({
          filter: LaptopDoc.forGames.eq(true),
        })
      }
    })
  });

const result = await qeury.getResult<LaptopDoc>();

const pricesBucket = result.getAggregation('prices');

const priceBucket = pricesBucket[0];

console.log(priceBucket.key); // prints price

const forGamesBucket = priceBucket.getAggregation('forGames');

console.log(forGamesBucket.docCount); // prints laptops amount suited for gaming

```

We calling `.limit(0)` to say we do not need elasticsearch to limit our query.  

Also we calling `.source(false)` to say we do not need elasticsearch to include source of docs in response.

As you can see, its pretty easy and straitforward to write an aggregations.

