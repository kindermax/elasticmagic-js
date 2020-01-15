---
id: "_agg_.multibucketaggresult"
title: "MultiBucketAggResult"
sidebar_label: "MultiBucketAggResult"
---

## Hierarchy

* [AggResult](_agg_.aggresult.md)

  ↳ **MultiBucketAggResult**

## Index

### Constructors

* [constructor](_agg_.multibucketaggresult.md#constructor)

### Properties

* [bucketClass](_agg_.multibucketaggresult.md#private-bucketclass)
* [buckets](_agg_.multibucketaggresult.md#buckets)
* [bucketsMap](_agg_.multibucketaggresult.md#private-bucketsmap)
* [docCount](_agg_.multibucketaggresult.md#doccount)
* [expr](_agg_.multibucketaggresult.md#expr)
* [instanceMapper](_agg_.multibucketaggresult.md#private-optional-instancemapper)
* [mapperRegistry](_agg_.multibucketaggresult.md#private-mapperregistry)

### Methods

* [addBucket](_agg_.multibucketaggresult.md#addbucket)
* [getBucket](_agg_.multibucketaggresult.md#getbucket)

## Constructors

###  constructor

\+ **new MultiBucketAggResult**(`aggExpr`: [MultiBucketAgg](_agg_.multibucketagg.md), `rawData`: [RawAgg](../modules/_types_.md#rawagg), `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any, `instanceMapper?`: [InstanceMapper](../modules/_search_.md#instancemapper)‹any›): *[MultiBucketAggResult](_agg_.multibucketaggresult.md)*

*Overrides [AggResult](_agg_.aggresult.md).[constructor](_agg_.aggresult.md#constructor)*

*Defined in [agg.ts:121](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`aggExpr` | [MultiBucketAgg](_agg_.multibucketagg.md) |
`rawData` | [RawAgg](../modules/_types_.md#rawagg) |
`docClsMap` | [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)› |
`mapperRegistry` | any |
`instanceMapper?` | [InstanceMapper](../modules/_search_.md#instancemapper)‹any› |

**Returns:** *[MultiBucketAggResult](_agg_.multibucketaggresult.md)*

## Properties

### `Private` bucketClass

• **bucketClass**: *[Bucket](_agg_.bucket.md)* =  Bucket

*Defined in [agg.ts:118](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L118)*

___

###  buckets

• **buckets**: *[Bucket](_agg_.bucket.md)[]* =  []

*Overrides [AggResult](_agg_.aggresult.md).[buckets](_agg_.aggresult.md#buckets)*

*Defined in [agg.ts:119](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L119)*

___

### `Private` bucketsMap

• **bucketsMap**: *[Dictionary](../modules/_types_.md#dictionary)‹string, [Bucket](_agg_.bucket.md)›*

*Defined in [agg.ts:120](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L120)*

___

###  docCount

• **docCount**: *number* = 0

*Inherited from [AggResult](_agg_.aggresult.md).[docCount](_agg_.aggresult.md#doccount)*

*Defined in [agg.ts:47](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L47)*

___

###  expr

• **expr**: *[BucketAgg](_agg_.bucketagg.md)*

*Inherited from [AggResult](_agg_.aggresult.md).[expr](_agg_.aggresult.md#expr)*

*Defined in [agg.ts:48](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L48)*

___

### `Private` `Optional` instanceMapper

• **instanceMapper**? : *[InstanceMapper](../modules/_search_.md#instancemapper)‹any›*

*Defined in [agg.ts:128](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L128)*

___

### `Private` mapperRegistry

• **mapperRegistry**: *any*

*Defined in [agg.ts:121](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L121)*

## Methods

###  addBucket

▸ **addBucket**(`bucket`: [Bucket](_agg_.bucket.md)): *void*

*Defined in [agg.ts:167](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`bucket` | [Bucket](_agg_.bucket.md) |

**Returns:** *void*

___

###  getBucket

▸ **getBucket**(`key`: [BucketKey](../modules/_agg_.md#bucketkey)): *[Bucket](_agg_.bucket.md)‹›*

*Defined in [agg.ts:174](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [BucketKey](../modules/_agg_.md#bucketkey) |

**Returns:** *[Bucket](_agg_.bucket.md)‹›*
