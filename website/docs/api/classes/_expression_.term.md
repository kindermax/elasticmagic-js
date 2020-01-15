---
id: "_expression_.term"
title: "Term"
sidebar_label: "Term"
---

## Hierarchy

  ↳ [FieldQueryExpression](_expression_.fieldqueryexpression.md)

  ↳ **Term**

## Index

### Constructors

* [constructor](_expression_.term.md#constructor)

### Properties

* [field](_expression_.term.md#field)
* [params](_expression_.term.md#params)
* [query](_expression_.term.md#query)
* [queryKey](_expression_.term.md#querykey)
* [queryName](_expression_.term.md#queryname)
* [visitName](_expression_.term.md#visitname)

### Methods

* [collectDocClasses](_expression_.term.md#collectdocclasses)

## Constructors

###  constructor

\+ **new Term**(`field`: [Field](_document_.field.md), `term`: [TermValue](../modules/_expression_.md#termvalue)): *[Term](_expression_.term.md)*

*Overrides [FieldQueryExpression](_expression_.fieldqueryexpression.md).[constructor](_expression_.fieldqueryexpression.md#constructor)*

*Defined in [expression.ts:138](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](_document_.field.md) |
`term` | [TermValue](../modules/_expression_.md#termvalue) |

**Returns:** *[Term](_expression_.term.md)*

## Properties

###  field

• **field**: *[Field](_document_.field.md)*

*Inherited from [FieldExpression](_expression_.fieldexpression.md).[field](_expression_.fieldexpression.md#field)*

*Defined in [expression.ts:105](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L105)*

___

###  params

• **params**: *[Params](_expression_.params.md)*

*Inherited from [ParamsExpression](_expression_.paramsexpression.md).[params](_expression_.paramsexpression.md#params)*

*Defined in [expression.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L65)*

___

###  query

• **query**: *[FieldQueryValue](../modules/_expression_.md#fieldqueryvalue)*

*Inherited from [FieldQueryExpression](_expression_.fieldqueryexpression.md).[query](_expression_.fieldqueryexpression.md#query)*

*Defined in [expression.ts:124](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L124)*

___

###  queryKey

• **queryKey**: *string* = "value"

*Overrides [FieldQueryExpression](_expression_.fieldqueryexpression.md).[queryKey](_expression_.fieldqueryexpression.md#querykey)*

*Defined in [expression.ts:138](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L138)*

___

###  queryName

• **queryName**: *string* = "term"

*Overrides [Expression](_expression_.expression.md).[queryName](_expression_.expression.md#queryname)*

*Defined in [expression.ts:137](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L137)*

___

###  visitName

• **visitName**: *string* = "term"

*Overrides [FieldQueryExpression](_expression_.fieldqueryexpression.md).[visitName](_expression_.fieldqueryexpression.md#visitname)*

*Defined in [expression.ts:136](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L136)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [FieldQueryExpression](_expression_.fieldqueryexpression.md).[collectDocClasses](_expression_.fieldqueryexpression.md#collectdocclasses)*

*Overrides [FieldExpression](_expression_.fieldexpression.md).[collectDocClasses](_expression_.fieldexpression.md#collectdocclasses)*

*Defined in [expression.ts:128](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L128)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
