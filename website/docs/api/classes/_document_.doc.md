---
id: "_document_.doc"
title: "Doc"
sidebar_label: "Doc"
---

## Hierarchy

* **Doc**

## Index

### Constructors

* [constructor](_document_.doc.md#constructor)

### Properties

* [_id](_document_.doc.md#_id)
* [docType](_document_.doc.md#doctype)
* [hit](_document_.doc.md#protected-hit)
* [instance](_document_.doc.md#instance)
* [result](_document_.doc.md#protected-result)
* [docType](_document_.doc.md#static-doctype)

### Methods

* [getInstance](_document_.doc.md#getinstance)
* [populateFromSource](_document_.doc.md#private-populatefromsource)
* [setInstance](_document_.doc.md#setinstance)
* [getDocCls](_document_.doc.md#static-getdoccls)

## Constructors

###  constructor

\+ **new Doc**(`opts`: [DocOpts](../modules/_document_.md#docopts)): *[Doc](_document_.doc.md)*

*Defined in [document.ts:102](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [DocOpts](../modules/_document_.md#docopts) |

**Returns:** *[Doc](_document_.doc.md)*

## Properties

###  _id

• **_id**: *string*

*Defined in [document.ts:102](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L102)*

___

###  docType

• **docType**: *string*

*Defined in [document.ts:97](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L97)*

___

### `Protected` hit

• **hit**: *[Hit](../modules/_types_.md#hit)*

*Defined in [document.ts:98](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L98)*

___

###  instance

• **instance**: *any*

*Defined in [document.ts:100](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L100)*

___

### `Protected` result

• **result**: *[SearchResult](_result_.searchresult.md)‹any›*

*Defined in [document.ts:99](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L99)*

___

### `Static` docType

▪ **docType**: *string*

*Defined in [document.ts:96](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L96)*

## Methods

###  getInstance

▸ **getInstance**(): *Promise‹any›*

*Defined in [document.ts:122](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L122)*

Get instance populated by instance mapper.

**Returns:** *Promise‹any›*

___

### `Private` populateFromSource

▸ **populateFromSource**(): *void*

*Defined in [document.ts:136](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L136)*

**Returns:** *void*

___

###  setInstance

▸ **setInstance**(`instance`: any): *void*

*Defined in [document.ts:132](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | any |

**Returns:** *void*

___

### `Static` getDocCls

▸ **getDocCls**(): *string*

*Defined in [document.ts:115](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/document.ts#L115)*

**Returns:** *string*
