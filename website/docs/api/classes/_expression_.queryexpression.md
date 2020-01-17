---
id: "_expression_.queryexpression"
title: "QueryExpression"
sidebar_label: "QueryExpression"
---

## Hierarchy

  ↳ [ParamsExpression](_expression_.paramsexpression.md)

  ↳ **QueryExpression**

  ↳ [FieldExpression](_expression_.fieldexpression.md)

  ↳ [Bool](_expression_.bool.md)

  ↳ [Sort](_expression_.sort.md)

## Index

### Constructors

* [constructor](_expression_.queryexpression.md#constructor)

### Properties

* [params](_expression_.queryexpression.md#params)
* [queryKey](_expression_.queryexpression.md#querykey)
* [queryName](_expression_.queryexpression.md#queryname)
* [visitName](_expression_.queryexpression.md#visitname)

### Methods

* [collectDocClasses](_expression_.queryexpression.md#collectdocclasses)

## Constructors

###  constructor

\+ **new QueryExpression**(`params?`: [Dictionary](../modules/_types_.md#dictionary)‹any, any›): *[QueryExpression](_expression_.queryexpression.md)*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[constructor](_expression_.paramsexpression.md#constructor)*

*Defined in [expression.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`params?` | [Dictionary](../modules/_types_.md#dictionary)‹any, any› |

**Returns:** *[QueryExpression](_expression_.queryexpression.md)*

## Properties

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

• **visitName**: *string* = "queryExpression"

*Overrides [Expression](_expression_.expression.md).[visitName](_expression_.expression.md#visitname)*

*Defined in [expression.ts:99](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L99)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L72)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
