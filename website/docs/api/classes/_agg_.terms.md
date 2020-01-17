---
id: "_agg_.terms"
title: "Terms"
sidebar_label: "Terms"
---

## Hierarchy

  ↳ [MultiBucketAgg](_agg_.multibucketagg.md)

  ↳ **Terms**

## Index

### Constructors

* [constructor](_agg_.terms.md#constructor)

### Properties

* [aggName](_agg_.terms.md#aggname)
* [aggregations](_agg_.terms.md#aggregations)
* [instanceMapper](_agg_.terms.md#protected-optional-instancemapper)
* [params](_agg_.terms.md#params)
* [queryKey](_agg_.terms.md#querykey)
* [queryName](_agg_.terms.md#queryname)
* [visitName](_agg_.terms.md#visitname)

### Methods

* [buildAggResult](_agg_.terms.md#buildaggresult)
* [collectDocClasses](_agg_.terms.md#collectdocclasses)

## Constructors

###  constructor

\+ **new Terms**(`__namedParameters`: object): *[Terms](_agg_.terms.md)*

*Overrides [MultiBucketAgg](_agg_.multibucketagg.md).[constructor](_agg_.multibucketagg.md#constructor)*

*Defined in [agg.ts:244](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L244)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`aggs` | undefined &#124; object |
`field` | [Field](_document_.field.md)‹› |
`instanceMapper` | undefined &#124; function |
`opts` | opts |
`type` | undefined &#124; [FieldType](_document_.fieldtype.md)‹› |

**Returns:** *[Terms](_agg_.terms.md)*

## Properties

###  aggName

• **aggName**: *string* = "terms"

*Overrides [MultiBucketAgg](_agg_.multibucketagg.md).[aggName](_agg_.multibucketagg.md#aggname)*

*Defined in [agg.ts:244](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L244)*

___

###  aggregations

• **aggregations**: *[Params](_expression_.params.md)*

*Inherited from [BucketAgg](_agg_.bucketagg.md).[aggregations](_agg_.bucketagg.md#aggregations)*

*Defined in [agg.ts:68](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L68)*

___

### `Protected` `Optional` instanceMapper

• **instanceMapper**? : *[InstanceMapper](../modules/_search_.md#instancemapper)‹any›*

*Inherited from [MultiBucketAgg](_agg_.multibucketagg.md).[instanceMapper](_agg_.multibucketagg.md#protected-optional-instancemapper)*

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

###  visitName

• **visitName**: *string* = "bucketAgg"

*Inherited from [BucketAgg](_agg_.bucketagg.md).[visitName](_agg_.bucketagg.md#visitname)*

*Overrides [AggExpression](_agg_.aggexpression.md).[visitName](_agg_.aggexpression.md#visitname)*

*Defined in [agg.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L65)*

## Methods

###  buildAggResult

▸ **buildAggResult**(`rawData`: [RawAgg](../modules/_types_.md#rawagg), `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any): *[MultiBucketAggResult](_agg_.multibucketaggresult.md)*

*Inherited from [MultiBucketAgg](_agg_.multibucketagg.md).[buildAggResult](_agg_.multibucketagg.md#buildaggresult)*

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
