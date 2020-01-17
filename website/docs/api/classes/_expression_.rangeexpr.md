---
id: "_expression_.rangeexpr"
title: "RangeExpr"
sidebar_label: "RangeExpr"
---

## Hierarchy

  ↳ [FieldExpression](_expression_.fieldexpression.md)

  ↳ **RangeExpr**

## Index

### Constructors

* [constructor](_expression_.rangeexpr.md#constructor)

### Properties

* [field](_expression_.rangeexpr.md#field)
* [params](_expression_.rangeexpr.md#params)
* [queryKey](_expression_.rangeexpr.md#querykey)
* [queryName](_expression_.rangeexpr.md#queryname)
* [rangeParams](_expression_.rangeexpr.md#rangeparams)
* [visitName](_expression_.rangeexpr.md#visitname)

### Methods

* [collectDocClasses](_expression_.rangeexpr.md#collectdocclasses)

## Constructors

###  constructor

\+ **new RangeExpr**(`field`: [Field](_document_.field.md), `rangeOpts`: [RangeOptions](../modules/_expression_.md#rangeoptions), `rangeSettings?`: [RangeSettings](../modules/_expression_.md#rangesettings)): *[RangeExpr](_expression_.rangeexpr.md)*

*Overrides [FieldExpression](_expression_.fieldexpression.md).[constructor](_expression_.fieldexpression.md#constructor)*

*Defined in [expression.ts:188](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](_document_.field.md) |
`rangeOpts` | [RangeOptions](../modules/_expression_.md#rangeoptions) |
`rangeSettings?` | [RangeSettings](../modules/_expression_.md#rangesettings) |

**Returns:** *[RangeExpr](_expression_.rangeexpr.md)*

## Properties

###  field

• **field**: *[Field](_document_.field.md)*

*Inherited from [FieldExpression](_expression_.fieldexpression.md).[field](_expression_.fieldexpression.md#field)*

*Defined in [expression.ts:105](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L105)*

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

###  rangeParams

• **rangeParams**: *[Params](_expression_.params.md)* =  new Params()

*Defined in [expression.ts:188](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L188)*

___

###  visitName

• **visitName**: *string* = "range"

*Overrides [FieldExpression](_expression_.fieldexpression.md).[visitName](_expression_.fieldexpression.md#visitname)*

*Defined in [expression.ts:187](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L187)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [FieldExpression](_expression_.fieldexpression.md).[collectDocClasses](_expression_.fieldexpression.md#collectdocclasses)*

*Overrides [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Defined in [expression.ts:109](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L109)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
