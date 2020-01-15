---
id: "_agg_.aggexpression"
title: "AggExpression"
sidebar_label: "AggExpression"
---

## Hierarchy

  ↳ [ParamsExpression](_expression_.paramsexpression.md)

  ↳ **AggExpression**

  ↳ [BucketAgg](_agg_.bucketagg.md)

## Index

### Constructors

* [constructor](_agg_.aggexpression.md#constructor)

### Properties

* [aggName](_agg_.aggexpression.md#aggname)
* [params](_agg_.aggexpression.md#params)
* [queryKey](_agg_.aggexpression.md#querykey)
* [queryName](_agg_.aggexpression.md#queryname)
* [visitName](_agg_.aggexpression.md#visitname)

### Methods

* [buildAggResult](_agg_.aggexpression.md#buildaggresult)
* [collectDocClasses](_agg_.aggexpression.md#collectdocclasses)

## Constructors

###  constructor

\+ **new AggExpression**(`params?`: [Dictionary](../modules/_types_.md#dictionary)‹any, any›): *[AggExpression](_agg_.aggexpression.md)*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[constructor](_expression_.paramsexpression.md#constructor)*

*Defined in [expression.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`params?` | [Dictionary](../modules/_types_.md#dictionary)‹any, any› |

**Returns:** *[AggExpression](_agg_.aggexpression.md)*

## Properties

###  aggName

• **aggName**: *any*

*Defined in [agg.ts:53](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L53)*

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

• **visitName**: *string* = "agg"

*Overrides [Expression](_expression_.expression.md).[visitName](_expression_.expression.md#visitname)*

*Defined in [agg.ts:52](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L52)*

## Methods

###  buildAggResult

▸ **buildAggResult**(`rawData`: [Dictionary](../modules/_types_.md#dictionary)‹string, any›, `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any): *[AggResult](_agg_.aggresult.md)*

*Defined in [agg.ts:55](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L55)*

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

*Defined in [expression.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L72)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
