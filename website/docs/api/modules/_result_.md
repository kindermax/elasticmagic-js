---
id: "_result_"
title: "result"
sidebar_label: "result"
---

## Index

### Classes

* [Result](../classes/_result_.result.md)
* [SearchResult](../classes/_result_.searchresult.md)

### Type aliases

* [InstanceMapperDict](_result_.md#instancemapperdict)

### Variables

* [DOC_TYPE_FIELD](_result_.md#const-doc_type_field)
* [DOC_TYPE_NAME_FIELD](_result_.md#const-doc_type_name_field)

### Functions

* [docClsMap](_result_.md#docclsmap)
* [getDocTypeForHit](_result_.md#getdoctypeforhit)
* [isInstanceMapperDict](_result_.md#isinstancemapperdict)

## Type aliases

###  InstanceMapperDict

Ƭ **InstanceMapperDict**: *[Dictionary](_types_.md#dictionary)‹string, [InstanceMapper](_search_.md#instancemapper)‹any››*

*Defined in [result.ts:25](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L25)*

## Variables

### `Const` DOC_TYPE_FIELD

• **DOC_TYPE_FIELD**: *"_doc_type"* = "_doc_type"

*Defined in [result.ts:8](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L8)*

___

### `Const` DOC_TYPE_NAME_FIELD

• **DOC_TYPE_NAME_FIELD**: *string* =  `${DOC_TYPE_FIELD}.name`

*Defined in [result.ts:9](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L9)*

## Functions

###  docClsMap

▸ **docClsMap**(`docClasses`: Readonly‹[DocClass](_document_.md#docclass)[]›): *[Dictionary](_types_.md#dictionary)‹string, [DocClass](_document_.md#docclass)›*

*Defined in [result.ts:11](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`docClasses` | Readonly‹[DocClass](_document_.md#docclass)[]› |

**Returns:** *[Dictionary](_types_.md#dictionary)‹string, [DocClass](_document_.md#docclass)›*

___

###  getDocTypeForHit

▸ **getDocTypeForHit**(`hit`: [Hit](_types_.md#hit)): *string*

*Defined in [result.ts:19](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`hit` | [Hit](_types_.md#hit) |

**Returns:** *string*

___

###  isInstanceMapperDict

▸ **isInstanceMapperDict**(`arg`: any): *arg is InstanceMapperDict*

*Defined in [result.ts:27](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | any |

**Returns:** *arg is InstanceMapperDict*
