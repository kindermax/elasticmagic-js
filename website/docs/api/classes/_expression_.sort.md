---
id: "_expression_.sort"
title: "Sort"
sidebar_label: "Sort"
---

## Hierarchy

  ↳ [QueryExpression](_expression_.queryexpression.md)

  ↳ **Sort**

## Index

### Constructors

* [constructor](_expression_.sort.md#constructor)

### Properties

* [field](_expression_.sort.md#field)
* [order](_expression_.sort.md#order)
* [params](_expression_.sort.md#params)
* [queryKey](_expression_.sort.md#querykey)
* [queryName](_expression_.sort.md#queryname)
* [visitName](_expression_.sort.md#visitname)

### Methods

* [collectDocClasses](_expression_.sort.md#collectdocclasses)

## Constructors

###  constructor

\+ **new Sort**(`field`: [Field](_document_.field.md), `order`: "asc" | "desc", `opts?`: [SortOpts](../modules/_expression_.md#sortopts)): *[Sort](_expression_.sort.md)*

*Overrides [ParamsExpression](_expression_.paramsexpression.md).[constructor](_expression_.paramsexpression.md#constructor)*

*Defined in [expression.ts:244](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L244)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](_document_.field.md) |
`order` | "asc" &#124; "desc" |
`opts?` | [SortOpts](../modules/_expression_.md#sortopts) |

**Returns:** *[Sort](_expression_.sort.md)*

## Properties

###  field

• **field**: *[Field](_document_.field.md)*

*Defined in [expression.ts:247](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L247)*

___

###  order

• **order**: *"asc" | "desc"*

*Defined in [expression.ts:248](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L248)*

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

• **visitName**: *string* = "sort"

*Overrides [QueryExpression](_expression_.queryexpression.md).[visitName](_expression_.queryexpression.md#visitname)*

*Defined in [expression.ts:244](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L244)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Overrides [ParamsExpression](_expression_.paramsexpression.md).[collectDocClasses](_expression_.paramsexpression.md#collectdocclasses)*

*Defined in [expression.ts:254](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L254)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
