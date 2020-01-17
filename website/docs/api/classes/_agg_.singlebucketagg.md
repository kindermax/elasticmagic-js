---
id: "_agg_.singlebucketagg"
title: "SingleBucketAgg"
sidebar_label: "SingleBucketAgg"
---

## Hierarchy

  ↳ [BucketAgg](_agg_.bucketagg.md)

  ↳ **SingleBucketAgg**

  ↳ [Filter](_agg_.filter.md)

## Index

### Constructors

* [constructor](_agg_.singlebucketagg.md#constructor)

### Properties

* [aggName](_agg_.singlebucketagg.md#aggname)
* [aggregations](_agg_.singlebucketagg.md#aggregations)
* [params](_agg_.singlebucketagg.md#params)
* [queryKey](_agg_.singlebucketagg.md#querykey)
* [queryName](_agg_.singlebucketagg.md#queryname)
* [visitName](_agg_.singlebucketagg.md#visitname)

### Methods

* [buildAggResult](_agg_.singlebucketagg.md#buildaggresult)
* [collectDocClasses](_agg_.singlebucketagg.md#collectdocclasses)

## Constructors

###  constructor

\+ **new SingleBucketAgg**(`aggs?`: [Dictionary](../modules/_types_.md#dictionary)‹string, [Filter](_agg_.filter.md)›, `params?`: [Dictionary](../modules/_types_.md#dictionary)‹string, any›): *[SingleBucketAgg](_agg_.singlebucketagg.md)*

*Overrides [BucketAgg](_agg_.bucketagg.md).[constructor](_agg_.bucketagg.md#constructor)*

*Defined in [agg.ts:180](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`aggs?` | [Dictionary](../modules/_types_.md#dictionary)‹string, [Filter](_agg_.filter.md)› |
`params?` | [Dictionary](../modules/_types_.md#dictionary)‹string, any› |

**Returns:** *[SingleBucketAgg](_agg_.singlebucketagg.md)*

## Properties

###  aggName

• **aggName**: *string*

*Overrides [BucketAgg](_agg_.bucketagg.md).[aggName](_agg_.bucketagg.md#aggname)*

*Defined in [agg.ts:180](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L180)*

___

###  aggregations

• **aggregations**: *[Params](_expression_.params.md)*

*Inherited from [BucketAgg](_agg_.bucketagg.md).[aggregations](_agg_.bucketagg.md#aggregations)*

*Defined in [agg.ts:68](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L68)*

___

###  params

• **params**: *[Params](_expression_.params.md)*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[params](_expression_.paramsexpression.md#params)*

*Defined in [expression.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L65)*

___

###  queryKey

• **queryKey**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryKey](_expression_.expression.md#querykey)*

*Defined in [expression.ts:16](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L16)*

___

###  queryName

• **queryName**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryName](_expression_.expression.md#queryname)*

*Defined in [expression.ts:15](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L15)*

___

###  visitName

• **visitName**: *string* = "bucketAgg"

*Inherited from [BucketAgg](_agg_.bucketagg.md).[visitName](_agg_.bucketagg.md#visitname)*

*Overrides [AggExpression](_agg_.aggexpression.md).[visitName](_agg_.aggexpression.md#visitname)*

*Defined in [agg.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L65)*

## Methods

###  buildAggResult

▸ **buildAggResult**(`rawData`: [RawAggBucket](../modules/_types_.md#rawaggbucket), `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any): *[SingleBucketAggResult](_agg_.singlebucketaggresult.md)*

*Overrides [AggExpression](_agg_.aggexpression.md).[buildAggResult](_agg_.aggexpression.md#buildaggresult)*

*Defined in [agg.ts:191](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L191)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`rawData` | [RawAggBucket](../modules/_types_.md#rawaggbucket) | - |
`docClsMap` | [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)› |  {} |
`mapperRegistry` | any |  null |

**Returns:** *[SingleBucketAggResult](_agg_.singlebucketaggresult.md)*

___

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L72)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
