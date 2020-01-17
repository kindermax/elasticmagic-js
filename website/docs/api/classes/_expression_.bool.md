---
id: "_expression_.bool"
title: "Bool"
sidebar_label: "Bool"
---

## Hierarchy

  ↳ [QueryExpression](_expression_.queryexpression.md)

  ↳ **Bool**

## Index

### Constructors

* [constructor](_expression_.bool.md#constructor)

### Properties

* [params](_expression_.bool.md#params)
* [queryKey](_expression_.bool.md#querykey)
* [queryName](_expression_.bool.md#queryname)
* [visitName](_expression_.bool.md#visitname)

### Methods

* [collectDocClasses](_expression_.bool.md#collectdocclasses)
* [must](_expression_.bool.md#static-must)
* [mustNot](_expression_.bool.md#static-mustnot)
* [should](_expression_.bool.md#static-should)

## Constructors

###  constructor

\+ **new Bool**(`options`: [BoolOptions](../modules/_expression_.md#booloptions)): *[Bool](_expression_.bool.md)*

*Overrides [ParamsExpression](_expression_.paramsexpression.md).[constructor](_expression_.paramsexpression.md#constructor)*

*Defined in [expression.ts:211](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BoolOptions](../modules/_expression_.md#booloptions) |

**Returns:** *[Bool](_expression_.bool.md)*

## Properties

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

• **queryName**: *string* = "bool"

*Overrides [Expression](_expression_.expression.md).[queryName](_expression_.expression.md#queryname)*

*Defined in [expression.ts:211](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L211)*

___

###  visitName

• **visitName**: *string* = "queryExpression"

*Inherited from [QueryExpression](_expression_.queryexpression.md).[visitName](_expression_.queryexpression.md#visitname)*

*Overrides [Expression](_expression_.expression.md).[visitName](_expression_.expression.md#visitname)*

*Defined in [expression.ts:99](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L99)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L72)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

___

### `Static` must

▸ **must**(...`expressions`: [Expression](_expression_.expression.md)[]): *[Expression](_expression_.expression.md)*

*Defined in [expression.ts:217](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L217)*

**Parameters:**

Name | Type |
------ | ------ |
`...expressions` | [Expression](_expression_.expression.md)[] |

**Returns:** *[Expression](_expression_.expression.md)*

___

### `Static` mustNot

▸ **mustNot**(...`expressions`: [Expression](_expression_.expression.md)[]): *[Bool](_expression_.bool.md)*

*Defined in [expression.ts:224](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L224)*

**Parameters:**

Name | Type |
------ | ------ |
`...expressions` | [Expression](_expression_.expression.md)[] |

**Returns:** *[Bool](_expression_.bool.md)*

___

### `Static` should

▸ **should**(...`expressions`: [Expression](_expression_.expression.md)[]): *[Expression](_expression_.expression.md)*

*Defined in [expression.ts:228](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`...expressions` | [Expression](_expression_.expression.md)[] |

**Returns:** *[Expression](_expression_.expression.md)*
