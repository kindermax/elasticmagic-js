---
id: "_types_"
title: "types"
sidebar_label: "types"
---

## Index

### Type aliases

* [BucketFields](_types_.md#bucketfields)
* [Dictionary](_types_.md#dictionary)
* [Hit](_types_.md#hit)
* [KVList](_types_.md#kvlist)
* [Nullable](_types_.md#nullable)
* [PlainObject](_types_.md#plainobject)
* [RawAgg](_types_.md#rawagg)
* [RawAggBucket](_types_.md#rawaggbucket)
* [RawAggBucketChild](_types_.md#rawaggbucketchild)
* [RawAggs](_types_.md#rawaggs)
* [RawResultBody](_types_.md#rawresultbody)
* [SearchResponseBody](_types_.md#searchresponsebody)

### Functions

* [isPlainObject](_types_.md#isplainobject)

## Type aliases

###  BucketFields

Ƭ **BucketFields**: *object*

*Defined in [types.ts:25](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L25)*

#### Type declaration:

* **doc_count**: *number*

___

###  Dictionary

Ƭ **Dictionary**: *object*

*Defined in [types.ts:3](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L3)*

#### Type declaration:

___

###  Hit

Ƭ **Hit**: *object*

*Defined in [types.ts:15](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L15)*

#### Type declaration:

* **_id**: *string*

* **_index**? : *undefined | string*

* **_routing**? : *undefined | string*

* **_score**? : *undefined | number*

* **_source**? : *T*

* **_type**? : *undefined | string*

* **fields**? : *[PlainObject](_types_.md#plainobject)*

___

###  KVList

Ƭ **KVList**: *[T1, T2]*

*Defined in [types.ts:6](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L6)*

___

###  Nullable

Ƭ **Nullable**: *T | null | undefined*

*Defined in [types.ts:1](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L1)*

___

###  PlainObject

Ƭ **PlainObject**: *object*

*Defined in [types.ts:8](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L8)*

#### Type declaration:

* \[ **name**: *string*\]: any

___

###  RawAgg

Ƭ **RawAgg**: *object*

*Defined in [types.ts:34](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L34)*

#### Type declaration:

* **buckets**: *[RawAggBucket](_types_.md#rawaggbucket)[]*

* **doc_count_error_upper_bound**: *number*

* **sum_other_doc_count**: *number*

___

###  RawAggBucket

Ƭ **RawAggBucket**: *object & [RawAggBucketChild](_types_.md#rawaggbucketchild)*

*Defined in [types.ts:29](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L29)*

___

###  RawAggBucketChild

Ƭ **RawAggBucketChild**: *[Dictionary](_types_.md#dictionary)‹string, [BucketFields](_types_.md#bucketfields) | [Dictionary](_types_.md#dictionary)‹string, [BucketFields](_types_.md#bucketfields)››*

*Defined in [types.ts:27](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L27)*

___

###  RawAggs

Ƭ **RawAggs**: *[Dictionary](_types_.md#dictionary)‹string, [RawAgg](_types_.md#rawagg)›*

*Defined in [types.ts:39](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L39)*

___

###  RawResultBody

Ƭ **RawResultBody**: *[SearchResponseBody](_types_.md#searchresponsebody)‹T›*

*Defined in [types.ts:60](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L60)*

___

###  SearchResponseBody

Ƭ **SearchResponseBody**: *object*

*Defined in [types.ts:41](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L41)*

#### Type declaration:

* **_scroll_id**? : *undefined | number*

* **_shards**(): *object*

  * **failed**: *number*

  * **skipped**: *number*

  * **successful**: *number*

  * **total**: *number*

* **aggregations**? : *[RawAggs](_types_.md#rawaggs)*

* **error**? : *undefined | string*

* **hits**(): *object*

  * **hits**: *Array‹[Hit](_types_.md#hit)‹T››*

  * **max_score**: *number*

  * **total**: *number*

* **timed_out**: *boolean*

* **took**: *number*

## Functions

###  isPlainObject

▸ **isPlainObject**(`obj`: any): *obj is PlainObject*

*Defined in [types.ts:10](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/types.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is PlainObject*
