---
id: "_document_.field"
title: "Field"
sidebar_label: "Field"
---

## Hierarchy

* [Expression](_expression_.expression.md)

  ↳ **Field**

## Index

### Constructors

* [constructor](_document_.field.md#constructor)

### Properties

* [name](_document_.field.md#name)
* [parent](_document_.field.md#parent)
* [queryKey](_document_.field.md#querykey)
* [queryName](_document_.field.md#queryname)
* [type](_document_.field.md#private-type)
* [visitName](_document_.field.md#visitname)

### Methods

* [asc](_document_.field.md#asc)
* [collectDocClasses](_document_.field.md#collectdocclasses)
* [desc](_document_.field.md#desc)
* [eq](_document_.field.md#eq)
* [getType](_document_.field.md#gettype)
* [gt](_document_.field.md#gt)
* [gte](_document_.field.md#gte)
* [in](_document_.field.md#in)
* [lt](_document_.field.md#lt)
* [lte](_document_.field.md#lte)
* [not](_document_.field.md#not)

## Constructors

###  constructor

\+ **new Field**(`type`: [FieldType](_document_.fieldtype.md), `name`: string, `parent`: [DocClass](../modules/_document_.md#docclass)): *[Field](_document_.field.md)*

*Defined in [document.ts:33](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [FieldType](_document_.fieldtype.md) |
`name` | string |
`parent` | [DocClass](../modules/_document_.md#docclass) |

**Returns:** *[Field](_document_.field.md)*

## Properties

###  name

• **name**: *string*

*Defined in [document.ts:37](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L37)*

___

###  parent

• **parent**: *[DocClass](../modules/_document_.md#docclass)*

*Defined in [document.ts:38](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L38)*

___

###  queryKey

• **queryKey**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryKey](_expression_.expression.md#querykey)*

*Defined in [expression.ts:16](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L16)*

___

###  queryName

• **queryName**: *string*

*Inherited from [Expression](_expression_.expression.md).[queryName](_expression_.expression.md#queryname)*

*Defined in [expression.ts:15](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L15)*

___

### `Private` type

• **type**: *[FieldType](_document_.fieldtype.md)*

*Defined in [document.ts:36](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L36)*

___

###  visitName

• **visitName**: *"field"* = "field"

*Overrides [Expression](_expression_.expression.md).[visitName](_expression_.expression.md#visitname)*

*Defined in [document.ts:33](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L33)*

## Methods

###  asc

▸ **asc**(`opts?`: [SortOpts](../modules/_expression_.md#sortopts)): *[Sort](_expression_.sort.md)*

*Defined in [document.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [SortOpts](../modules/_expression_.md#sortopts) |

**Returns:** *[Sort](_expression_.sort.md)*

___

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [document.ts:84](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L84)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

___

###  desc

▸ **desc**(`opts?`: [SortOpts](../modules/_expression_.md#sortopts)): *[Sort](_expression_.sort.md)*

*Defined in [document.ts:76](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [SortOpts](../modules/_expression_.md#sortopts) |

**Returns:** *[Sort](_expression_.sort.md)*

___

###  eq

▸ **eq**(`other`: [TermValue](../modules/_expression_.md#termvalue)): *[Term](_expression_.term.md)*

*Defined in [document.ts:51](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [TermValue](../modules/_expression_.md#termvalue) |

**Returns:** *[Term](_expression_.term.md)*

___

###  getType

▸ **getType**(): *[FieldType](_document_.fieldtype.md)*

*Defined in [document.ts:80](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L80)*

**Returns:** *[FieldType](_document_.fieldtype.md)*

___

###  gt

▸ **gt**(`other`: [RangeValue](../modules/_expression_.md#rangevalue)): *[RangeExpr](_expression_.rangeexpr.md)*

*Defined in [document.ts:60](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [RangeValue](../modules/_expression_.md#rangevalue) |

**Returns:** *[RangeExpr](_expression_.rangeexpr.md)*

___

###  gte

▸ **gte**(`other`: [RangeValue](../modules/_expression_.md#rangevalue)): *[RangeExpr](_expression_.rangeexpr.md)*

*Defined in [document.ts:68](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [RangeValue](../modules/_expression_.md#rangevalue) |

**Returns:** *[RangeExpr](_expression_.rangeexpr.md)*

___

###  in

▸ **in**(`terms`: [TermValue](../modules/_expression_.md#termvalue)[]): *[Terms](_expression_.terms.md)*

*Defined in [document.ts:43](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`terms` | [TermValue](../modules/_expression_.md#termvalue)[] |

**Returns:** *[Terms](_expression_.terms.md)*

___

###  lt

▸ **lt**(`other`: [RangeValue](../modules/_expression_.md#rangevalue)): *[RangeExpr](_expression_.rangeexpr.md)*

*Defined in [document.ts:56](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [RangeValue](../modules/_expression_.md#rangevalue) |

**Returns:** *[RangeExpr](_expression_.rangeexpr.md)*

___

###  lte

▸ **lte**(`other`: [RangeValue](../modules/_expression_.md#rangevalue)): *[RangeExpr](_expression_.rangeexpr.md)*

*Defined in [document.ts:64](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [RangeValue](../modules/_expression_.md#rangevalue) |

**Returns:** *[RangeExpr](_expression_.rangeexpr.md)*

___

###  not

▸ **not**(`term`: [TermValue](../modules/_expression_.md#termvalue)): *[Bool](_expression_.bool.md)*

*Defined in [document.ts:47](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/document.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`term` | [TermValue](../modules/_expression_.md#termvalue) |

**Returns:** *[Bool](_expression_.bool.md)*
