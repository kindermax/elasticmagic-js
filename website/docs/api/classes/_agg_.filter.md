---
id: "_agg_.filter"
title: "Filter"
sidebar_label: "Filter"
---

## Hierarchy

  ↳ [SingleBucketAgg](_agg_.singlebucketagg.md)

  ↳ **Filter**

## Index

### Constructors

* [constructor](_agg_.filter.md#constructor)

### Properties

* [aggName](_agg_.filter.md#aggname)
* [aggregations](_agg_.filter.md#aggregations)
* [filter](_agg_.filter.md#filter)
* [params](_agg_.filter.md#params)
* [queryKey](_agg_.filter.md#querykey)
* [queryName](_agg_.filter.md#queryname)
* [visitName](_agg_.filter.md#visitname)

### Methods

* [buildAggResult](_agg_.filter.md#buildaggresult)
* [collectDocClasses](_agg_.filter.md#collectdocclasses)

## Constructors

###  constructor

\+ **new Filter**(`__namedParameters`: object): *[Filter](_agg_.filter.md)*

*Overrides [SingleBucketAgg](_agg_.singlebucketagg.md).[constructor](_agg_.singlebucketagg.md#constructor)*

*Defined in [agg.ts:267](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L267)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`aggs` | undefined &#124; object |
`filter` | [Expression](_expression_.expression.md)‹› |
`opts` | opts |

**Returns:** *[Filter](_agg_.filter.md)*

## Properties

###  aggName

• **aggName**: *string* = "filter"

*Overrides [SingleBucketAgg](_agg_.singlebucketagg.md).[aggName](_agg_.singlebucketagg.md#aggname)*

*Defined in [agg.ts:265](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L265)*

___

###  aggregations

• **aggregations**: *[Params](_expression_.params.md)*

*Inherited from [BucketAgg](_agg_.bucketagg.md).[aggregations](_agg_.bucketagg.md#aggregations)*

*Defined in [agg.ts:68](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L68)*

___

###  filter

• **filter**: *[Expression](_expression_.expression.md)*

*Defined in [agg.ts:267](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L267)*

___

###  params

• **params**: *[Params](_expression_.params.md)*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[params](_expression_.paramsexpression.md#params)*

*Defined in [expression.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L65)*

___

###  queryKey

• **queryKey**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryKey](_expression_.expression.md#querykey)*

*Defined in [expression.ts:16](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L16)*

___

###  queryName

• **queryName**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryName](_expression_.expression.md#queryname)*

*Defined in [expression.ts:15](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L15)*

___

###  visitName

• **visitName**: *string* = "filterAgg"

*Overrides [BucketAgg](_agg_.bucketagg.md).[visitName](_agg_.bucketagg.md#visitname)*

*Defined in [agg.ts:264](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L264)*

## Methods

###  buildAggResult

▸ **buildAggResult**(`rawData`: [RawAggBucket](../modules/_types_.md#rawaggbucket), `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any): *[SingleBucketAggResult](_agg_.singlebucketaggresult.md)*

*Inherited from [SingleBucketAgg](_agg_.singlebucketagg.md).[buildAggResult](_agg_.singlebucketagg.md#buildaggresult)*

*Overrides [AggExpression](_agg_.aggexpression.md).[buildAggResult](_agg_.aggexpression.md#buildaggresult)*

*Defined in [agg.ts:191](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L191)*

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

*Defined in [expression.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L72)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
