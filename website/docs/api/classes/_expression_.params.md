---
id: "_expression_.params"
title: "Params"
sidebar_label: "Params"
---

## Hierarchy

* [Expression](_expression_.expression.md)

  ↳ **Params**

## Index

### Constructors

* [constructor](_expression_.params.md#constructor)

### Properties

* [params](_expression_.params.md#private-params)
* [paramsKvList](_expression_.params.md#private-paramskvlist)
* [queryKey](_expression_.params.md#querykey)
* [queryName](_expression_.params.md#queryname)
* [visitName](_expression_.params.md#visitname)

### Accessors

* [length](_expression_.params.md#length)

### Methods

* [collectDocClasses](_expression_.params.md#collectdocclasses)
* [getParams](_expression_.params.md#getparams)
* [getParamsKvList](_expression_.params.md#getparamskvlist)

## Constructors

###  constructor

\+ **new Params**(`params?`: [Nullable](../modules/_types_.md#nullable)‹[ParamsType](../modules/_expression_.md#paramstype)›): *[Params](_expression_.params.md)*

*Defined in [expression.ts:30](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`params?` | [Nullable](../modules/_types_.md#nullable)‹[ParamsType](../modules/_expression_.md#paramstype)› |

**Returns:** *[Params](_expression_.params.md)*

## Properties

### `Private` params

• **params**: *[ParamsType](../modules/_expression_.md#paramstype)*

*Defined in [expression.ts:29](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L29)*

___

### `Private` paramsKvList

• **paramsKvList**: *[ParamKV](../modules/_expression_.md#paramkv)[]*

*Defined in [expression.ts:30](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L30)*

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

###  visitName

• **visitName**: *string* = "params"

*Overrides [Expression](_expression_.expression.md).[visitName](_expression_.expression.md#visitname)*

*Defined in [expression.ts:28](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L28)*

## Accessors

###  length

• **get length**(): *number*

*Defined in [expression.ts:50](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L50)*

**Returns:** *number*

## Methods

###  collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Overrides [Expression](_expression_.expression.md).[collectDocClasses](_expression_.expression.md#collectdocclasses)*

*Defined in [expression.ts:46](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L46)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

___

###  getParams

▸ **getParams**(): *[ParamsType](../modules/_expression_.md#paramstype)*

*Defined in [expression.ts:42](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L42)*

**Returns:** *[ParamsType](../modules/_expression_.md#paramstype)*

___

###  getParamsKvList

▸ **getParamsKvList**(): *[ParamKV](../modules/_expression_.md#paramkv)[]*

*Defined in [expression.ts:38](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/expression.ts#L38)*

**Returns:** *[ParamKV](../modules/_expression_.md#paramkv)[]*
