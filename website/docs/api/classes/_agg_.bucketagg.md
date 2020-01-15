---
id: "_agg_.bucketagg"
title: "BucketAgg"
sidebar_label: "BucketAgg"
---

## Hierarchy

  ↳ [AggExpression](_agg_.aggexpression.md)

  ↳ **BucketAgg**

  ↳ [SingleBucketAgg](_agg_.singlebucketagg.md)

  ↳ [MultiBucketAgg](_agg_.multibucketagg.md)

## Index

### Constructors

* [constructor](_agg_.bucketagg.md#constructor)

### Properties

* [aggName](_agg_.bucketagg.md#aggname)
* [aggregations](_agg_.bucketagg.md#aggregations)
* [params](_agg_.bucketagg.md#params)
* [queryKey](_agg_.bucketagg.md#querykey)
* [queryName](_agg_.bucketagg.md#queryname)
* [visitName](_agg_.bucketagg.md#visitname)

### Methods

* [buildAggResult](_agg_.bucketagg.md#buildaggresult)
* [collectDocClasses](_agg_.bucketagg.md#collectdocclasses)

## Constructors

###  constructor

\+ **new BucketAgg**(`aggs?`: [Dictionary](../modules/_types_.md#dictionary)‹string, [Filter](_agg_.filter.md)›, `params?`: [ParamsType](../modules/_expression_.md#paramstype)): *[BucketAgg](_agg_.bucketagg.md)*

*Overrides [ParamsExpression](_expression_.paramsexpression.md).[constructor](_expression_.paramsexpression.md#constructor)*

*Defined in [agg.ts:68](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`aggs?` | [Dictionary](../modules/_types_.md#dictionary)‹string, [Filter](_agg_.filter.md)› |
`params?` | [ParamsType](../modules/_expression_.md#paramstype) |

**Returns:** *[BucketAgg](_agg_.bucketagg.md)*

## Properties

###  aggName

• **aggName**: *string*

*Overrides [AggExpression](_agg_.aggexpression.md).[aggName](_agg_.aggexpression.md#aggname)*

*Defined in [agg.ts:66](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L66)*

___

###  aggregations

• **aggregations**: *[Params](_expression_.params.md)*

*Defined in [agg.ts:68](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L68)*

___

###  params

• **params**: *[Params](_expression_.params.md)*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[params](_expression_.paramsexpression.md#params)*

*Defined in [expression.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L65)*

___

###  queryKey

• **queryKey**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryKey](_expression_.expression.md#querykey)*

*Defined in [expression.ts:16](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L16)*

___

###  queryName

• **queryName**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryName](_expression_.expression.md#queryname)*

*Defined in [expression.ts:15](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L15)*

___

###  visitName

• **visitName**: *string* = "bucketAgg"

*Overrides [AggExpression](_agg_.aggexpression.md).[visitName](_agg_.aggexpression.md#visitname)*

*Defined in [agg.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L65)*

## Methods

###  buildAggResult

▸ **buildAggResult**(`rawData`: [Dictionary](../modules/_types_.md#dictionary)‹string, any›, `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any): *[AggResult](_agg_.aggresult.md)*

*Inherited from [AggExpression](_agg_.aggexpression.md).[buildAggResult](_agg_.aggexpression.md#buildaggresult)*

*Defined in [agg.ts:55](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L55)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`rawData` | [Dictionary](../modules/_types_.md#dictionary)‹string, any› | - |
`docClsMap` | [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)› |  {} |
`mapperRegistry` | any |  {} |

**Returns:** *[AggResult](_agg_.aggresult.md)*

___

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L72)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
