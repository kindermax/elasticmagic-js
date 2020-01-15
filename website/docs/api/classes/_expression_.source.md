---
id: "_expression_.source"
title: "Source"
sidebar_label: "Source"
---

## Hierarchy

* [Expression](_expression_.expression.md)

  ↳ **Source**

## Index

### Constructors

* [constructor](_expression_.source.md#constructor)

### Properties

* [exclude](_expression_.source.md#optional-exclude)
* [fields](_expression_.source.md#fields)
* [include](_expression_.source.md#optional-include)
* [queryKey](_expression_.source.md#querykey)
* [queryName](_expression_.source.md#queryname)
* [visitName](_expression_.source.md#visitname)

### Methods

* [collectDocClasses](_expression_.source.md#collectdocclasses)

## Constructors

###  constructor

\+ **new Source**(`fields`: boolean | string | [Field](_document_.field.md) | Array‹string | [Field](_document_.field.md)›, `include?`: Array‹string | [Field](_document_.field.md)›, `exclude?`: Array‹string | [Field](_document_.field.md)›): *[Source](_expression_.source.md)*

*Defined in [expression.ts:79](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`fields` | boolean &#124; string &#124; [Field](_document_.field.md) &#124; Array‹string &#124; [Field](_document_.field.md)› |
`include?` | Array‹string &#124; [Field](_document_.field.md)› |
`exclude?` | Array‹string &#124; [Field](_document_.field.md)› |

**Returns:** *[Source](_expression_.source.md)*

## Properties

### `Optional` exclude

• **exclude**? : *Array‹string | [Field](_document_.field.md)›*

*Defined in [expression.ts:84](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L84)*

___

###  fields

• **fields**: *boolean | string | [Field](_document_.field.md) | Array‹string | [Field](_document_.field.md)›*

*Defined in [expression.ts:82](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L82)*

___

### `Optional` include

• **include**? : *Array‹string | [Field](_document_.field.md)›*

*Defined in [expression.ts:83](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L83)*

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

• **visitName**: *string* = "source"

*Overrides [Expression](_expression_.expression.md).[visitName](_expression_.expression.md#visitname)*

*Defined in [expression.ts:79](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L79)*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:89](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/expression.ts#L89)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*
