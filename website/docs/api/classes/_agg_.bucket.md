---
id: "_agg_.bucket"
title: "Bucket"
sidebar_label: "Bucket"
---

## Hierarchy

* **Bucket**

## Index

### Constructors

* [constructor](_agg_.bucket.md#constructor)

### Properties

* [aggregations](_agg_.bucket.md#aggregations)
* [docCount](_agg_.bucket.md#doccount)
* [key](_agg_.bucket.md#key)
* [parent](_agg_.bucket.md#private-parent)

### Methods

* [getAggregation](_agg_.bucket.md#getaggregation)
* [toString](_agg_.bucket.md#tostring)

## Constructors

###  constructor

\+ **new Bucket**(`rawData`: [RawAggBucket](../modules/_types_.md#rawaggbucket), `aggExpr`: [BucketAgg](_agg_.bucketagg.md), `parent`: [AggResult](_agg_.aggresult.md), `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any): *[Bucket](_agg_.bucket.md)*

*Defined in [agg.ts:12](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`rawData` | [RawAggBucket](../modules/_types_.md#rawaggbucket) |
`aggExpr` | [BucketAgg](_agg_.bucketagg.md) |
`parent` | [AggResult](_agg_.aggresult.md) |
`docClsMap` | [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)› |
`mapperRegistry` | any |

**Returns:** *[Bucket](_agg_.bucket.md)*

## Properties

###  aggregations

• **aggregations**: *[Dictionary](../modules/_types_.md#dictionary)‹string, [AggResult](_agg_.aggresult.md)›*

*Defined in [agg.ts:12](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L12)*

___

###  docCount

• **docCount**: *number*

*Defined in [agg.ts:11](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L11)*

___

###  key

• **key**: *[BucketKey](../modules/_agg_.md#bucketkey)*

*Defined in [agg.ts:10](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L10)*

___

### `Private` parent

• **parent**: *[AggResult](_agg_.aggresult.md)*

*Defined in [agg.ts:17](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L17)*

## Methods

###  getAggregation

▸ **getAggregation**(`name`: string): *[AggResult](_agg_.aggresult.md)*

*Defined in [agg.ts:36](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[AggResult](_agg_.aggresult.md)*

___

###  toString

▸ **toString**(): *string*

*Defined in [agg.ts:40](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L40)*

**Returns:** *string*
