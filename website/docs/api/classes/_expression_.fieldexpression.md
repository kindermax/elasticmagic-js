---
id: "_expression_.fieldexpression"
title: "FieldExpression"
sidebar_label: "FieldExpression"
---

## Hierarchy

  ↳ [QueryExpression](_expression_.queryexpression.md)

  ↳ **FieldExpression**

  ↳ [FieldQueryExpression](_expression_.fieldqueryexpression.md)

  ↳ [Terms](_expression_.terms.md)

  ↳ [RangeExpr](_expression_.rangeexpr.md)

## Index

### Constructors

* [constructor](_expression_.fieldexpression.md#constructor)

### Properties

* [field](_expression_.fieldexpression.md#field)
* [params](_expression_.fieldexpression.md#params)
* [queryKey](_expression_.fieldexpression.md#querykey)
* [queryName](_expression_.fieldexpression.md#queryname)
* [visitName](_expression_.fieldexpression.md#visitname)

### Methods

* [collectDocClasses](_expression_.fieldexpression.md#collectdocclasses)

## Constructors

###  constructor

\+ **new FieldExpression**(`field`: [Field](_document_.field.md), `params?`: [Dictionary](../modules/_types_.md#dictionary)‹any, any›): *[FieldExpression](_expression_.fieldexpression.md)*

*Overrides [ParamsExpression](_expression_.paramsexpression.md).[constructor](_expression_.paramsexpression.md#constructor)*

*Defined in [expression.ts:103](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](_document_.field.md) |
`params?` | [Dictionary](../modules/_types_.md#dictionary)‹any, any› |

**Returns:** *[FieldExpression](_expression_.fieldexpression.md)*

## Properties

###  field

• **field**: *[Field](_document_.field.md)*

*Defined in [expression.ts:105](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L105)*

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

• **visitName**: *string* = "fieldExpression"

*Overrides [QueryExpression](_expression_.queryexpression.md).[visitName](_expression_.queryexpression.md#visitname)*

*Defined in [expression.ts:103](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L103)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Overrides [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Defined in [expression.ts:109](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L109)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
