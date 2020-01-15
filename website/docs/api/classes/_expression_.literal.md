---
id: "_expression_.literal"
title: "Literal"
sidebar_label: "Literal"
---

## Hierarchy

* [Expression](_expression_.expression.md)

  ↳ **Literal**

## Index

### Constructors

* [constructor](_expression_.literal.md#constructor)

### Properties

* [obj](_expression_.literal.md#obj)
* [queryKey](_expression_.literal.md#querykey)
* [queryName](_expression_.literal.md#queryname)
* [visitName](_expression_.literal.md#visitname)

### Methods

* [collectDocClasses](_expression_.literal.md#collectdocclasses)

## Constructors

###  constructor

\+ **new Literal**(`obj`: any): *[Literal](_expression_.literal.md)*

*Defined in [expression.ts:57](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *[Literal](_expression_.literal.md)*

## Properties

###  obj

• **obj**: *any*

*Defined in [expression.ts:59](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L59)*

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

• **visitName**: *string* = "literal"

*Overrides [Expression](_expression_.expression.md).[visitName](_expression_.expression.md#visitname)*

*Defined in [expression.ts:57](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L57)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Inherited from [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:18](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L18)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
