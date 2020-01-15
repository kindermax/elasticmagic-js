---
id: "_expression_.paramsexpression"
title: "ParamsExpression"
sidebar_label: "ParamsExpression"
---

## Hierarchy

* [Expression](_expression_.expression.md)

  ↳ **ParamsExpression**

  ↳ [QueryExpression](_expression_.queryexpression.md)

  ↳ [AggExpression](_agg_.aggexpression.md)

## Index

### Constructors

* [constructor](_expression_.paramsexpression.md#constructor)

### Properties

* [params](_expression_.paramsexpression.md#params)
* [queryKey](_expression_.paramsexpression.md#querykey)
* [queryName](_expression_.paramsexpression.md#queryname)
* [visitName](_expression_.paramsexpression.md#visitname)

### Methods

* [collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)

## Constructors

###  constructor

\+ **new ParamsExpression**(`params?`: [Dictionary](../modules/_types_.md#dictionary)‹any, any›): *[ParamsExpression](_expression_.paramsexpression.md)*

*Defined in [expression.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`params?` | [Dictionary](../modules/_types_.md#dictionary)‹any, any› |

**Returns:** *[ParamsExpression](_expression_.paramsexpression.md)*

## Properties

###  params

• **params**: *[Params](_expression_.params.md)*

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

• **visitName**: *string*

*Inherited from [Expression](_expression_.expression.md).[visitName](_expression_.expression.md#visitname)*

*Defined in [expression.ts:14](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L14)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L72)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
