---
id: "_expression_.terms"
title: "Terms"
sidebar_label: "Terms"
---

## Hierarchy

  ↳ [FieldExpression](_expression_.fieldexpression.md)

  ↳ **Terms**

## Index

### Constructors

* [constructor](_expression_.terms.md#constructor)

### Properties

* [field](_expression_.terms.md#field)
* [params](_expression_.terms.md#params)
* [queryKey](_expression_.terms.md#querykey)
* [queryName](_expression_.terms.md#queryname)
* [terms](_expression_.terms.md#terms)
* [visitName](_expression_.terms.md#visitname)

### Methods

* [collectDocClasses](_expression_.terms.md#collectdocclasses)

## Constructors

###  constructor

\+ **new Terms**(`field`: [Field](_document_.field.md), `terms`: [TermValue](../modules/_expression_.md#termvalue)[], `termsOptions?`: [TermsOptions](../modules/_expression_.md#termsoptions)): *[Terms](_expression_.terms.md)*

*Overrides [FieldExpression](_expression_.fieldexpression.md).[constructor](_expression_.fieldexpression.md#constructor)*

*Defined in [expression.ts:154](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](_document_.field.md) |
`terms` | [TermValue](../modules/_expression_.md#termvalue)[] |
`termsOptions?` | [TermsOptions](../modules/_expression_.md#termsoptions) |

**Returns:** *[Terms](_expression_.terms.md)*

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

###  terms

• **terms**: *[TermValue](../modules/_expression_.md#termvalue)[]*

*Defined in [expression.ts:158](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L158)*

___

###  visitName

• **visitName**: *string* = "terms"

*Overrides [FieldExpression](_expression_.fieldexpression.md).[visitName](_expression_.fieldexpression.md#visitname)*

*Defined in [expression.ts:154](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L154)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [FieldExpression](_expression_.fieldexpression.md).[collectDocClasses](_expression_.fieldexpression.md#collectdocclasses)*

*Overrides [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Defined in [expression.ts:109](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L109)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
