---
id: "_agg_.multibucketagg"
title: "MultiBucketAgg"
sidebar_label: "MultiBucketAgg"
---

## Hierarchy

  ↳ [BucketAgg](_agg_.bucketagg.md)

  ↳ **MultiBucketAgg**

  ↳ [Terms](_agg_.terms.md)

## Index

### Constructors

* [constructor](_agg_.multibucketagg.md#constructor)

### Properties

* [aggName](_agg_.multibucketagg.md#aggname)
* [aggregations](_agg_.multibucketagg.md#aggregations)
* [instanceMapper](_agg_.multibucketagg.md#protected-optional-instancemapper)
* [params](_agg_.multibucketagg.md#params)
* [queryKey](_agg_.multibucketagg.md#querykey)
* [queryName](_agg_.multibucketagg.md#queryname)
* [type](_agg_.multibucketagg.md#private-optional-type)
* [visitName](_agg_.multibucketagg.md#visitname)

### Methods

* [buildAggResult](_agg_.multibucketagg.md#buildaggresult)
* [collectDocClasses](_agg_.multibucketagg.md#collectdocclasses)

## Constructors

###  constructor

\+ **new MultiBucketAgg**(`aggs?`: [Dictionary](../modules/_types_.md#dictionary)‹string, [Filter](_agg_.filter.md)›, `params?`: [TermsOptionsShrink](../modules/_agg_.md#termsoptionsshrink), `type?`: [FieldType](_document_.fieldtype.md), `instanceMapper?`: [InstanceMapper](../modules/_search_.md#instancemapper)‹any›): *[MultiBucketAgg](_agg_.multibucketagg.md)*

*Overrides [BucketAgg](_agg_.bucketagg.md).[constructor](_agg_.bucketagg.md#constructor)*

*Defined in [agg.ts:201](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L201)*

**Parameters:**

Name | Type |
------ | ------ |
`aggs?` | [Dictionary](../modules/_types_.md#dictionary)‹string, [Filter](_agg_.filter.md)› |
`params?` | [TermsOptionsShrink](../modules/_agg_.md#termsoptionsshrink) |
`type?` | [FieldType](_document_.fieldtype.md) |
`instanceMapper?` | [InstanceMapper](../modules/_search_.md#instancemapper)‹any› |

**Returns:** *[MultiBucketAgg](_agg_.multibucketagg.md)*

## Properties

###  aggName

• **aggName**: *any*

*Overrides [BucketAgg](_agg_.bucketagg.md).[aggName](_agg_.bucketagg.md#aggname)*

*Defined in [agg.ts:201](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L201)*

___

###  aggregations

• **aggregations**: *[Params](_expression_.params.md)*

*Inherited from [BucketAgg](_agg_.bucketagg.md).[aggregations](_agg_.bucketagg.md#aggregations)*

*Defined in [agg.ts:68](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L68)*

___

### `Protected` `Optional` instanceMapper

• **instanceMapper**? : *[InstanceMapper](../modules/_search_.md#instancemapper)‹any›*

*Defined in [agg.ts:210](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L210)*

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

### `Private` `Optional` type

• **type**? : *[FieldType](_document_.fieldtype.md)*

*Defined in [agg.ts:209](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L209)*

___

###  visitName

• **visitName**: *string* = "bucketAgg"

*Inherited from [BucketAgg](_agg_.bucketagg.md).[visitName](_agg_.bucketagg.md#visitname)*

*Overrides [AggExpression](_agg_.aggexpression.md).[visitName](_agg_.aggexpression.md#visitname)*

*Defined in [agg.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L65)*

## Methods

###  buildAggResult

▸ **buildAggResult**(`rawData`: [RawAgg](../modules/_types_.md#rawagg), `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any): *[MultiBucketAggResult](_agg_.multibucketaggresult.md)*

*Overrides [AggExpression](_agg_.aggexpression.md).[buildAggResult](_agg_.aggexpression.md#buildaggresult)*

*Defined in [agg.ts:215](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L215)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`rawData` | [RawAgg](../modules/_types_.md#rawagg) | - |
`docClsMap` | [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)› |  {} |
`mapperRegistry` | any |  null |

**Returns:** *[MultiBucketAggResult](_agg_.multibucketaggresult.md)*

___

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L72)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
