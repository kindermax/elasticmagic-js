---
id: "_expression_.fieldqueryexpression"
title: "FieldQueryExpression"
sidebar_label: "FieldQueryExpression"
---

## Hierarchy

  ↳ [FieldExpression](_expression_.fieldexpression.md)

  ↳ **FieldQueryExpression**

  ↳ [Term](_expression_.term.md)

## Index

### Constructors

* [constructor](_expression_.fieldqueryexpression.md#constructor)

### Properties

* [field](_expression_.fieldqueryexpression.md#field)
* [params](_expression_.fieldqueryexpression.md#params)
* [query](_expression_.fieldqueryexpression.md#query)
* [queryKey](_expression_.fieldqueryexpression.md#querykey)
* [queryName](_expression_.fieldqueryexpression.md#queryname)
* [visitName](_expression_.fieldqueryexpression.md#visitname)

### Methods

* [collectDocClasses](_expression_.fieldqueryexpression.md#collectdocclasses)

## Constructors

###  constructor

\+ **new FieldQueryExpression**(`field`: [Field](_document_.field.md), `query`: [FieldQueryValue](../modules/_expression_.md#fieldqueryvalue)): *[FieldQueryExpression](_expression_.fieldqueryexpression.md)*

*Overrides [FieldExpression](_expression_.fieldexpression.md).[constructor](_expression_.fieldexpression.md#constructor)*

*Defined in [expression.ts:122](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](_document_.field.md) |
`query` | [FieldQueryValue](../modules/_expression_.md#fieldqueryvalue) |

**Returns:** *[FieldQueryExpression](_expression_.fieldqueryexpression.md)*

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

###  query

• **query**: *[FieldQueryValue](../modules/_expression_.md#fieldqueryvalue)*

*Defined in [expression.ts:124](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L124)*

___

###  queryKey

• **queryKey**: *string* = "query"

*Overrides [Expression](_expression_.expression.md).[queryKey](_expression_.expression.md#querykey)*

*Defined in [expression.ts:122](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L122)*

___

###  queryName

• **queryName**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryName](_expression_.expression.md#queryname)*

*Defined in [expression.ts:15](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L15)*

___

###  visitName

• **visitName**: *string* = "fieldQuery"

*Overrides [FieldExpression](_expression_.fieldexpression.md).[visitName](_expression_.fieldexpression.md#visitname)*

*Defined in [expression.ts:121](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L121)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Overrides [FieldExpression](_expression_.fieldexpression.md).[collectDocClasses](_expression_.fieldexpression.md#collectdocclasses)*

*Defined in [expression.ts:128](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L128)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
