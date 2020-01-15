---
id: "_agg_.singlebucketaggresult"
title: "SingleBucketAggResult"
sidebar_label: "SingleBucketAggResult"
---

## Hierarchy

* [AggResult](_agg_.aggresult.md)

  ↳ **SingleBucketAggResult**

## Index

### Constructors

* [constructor](_agg_.singlebucketaggresult.md#constructor)

### Properties

* [aggregations](_agg_.singlebucketaggresult.md#aggregations)
* [buckets](_agg_.singlebucketaggresult.md#buckets)
* [docCount](_agg_.singlebucketaggresult.md#doccount)
* [expr](_agg_.singlebucketaggresult.md#expr)

### Methods

* [getAggregation](_agg_.singlebucketaggresult.md#getaggregation)

## Constructors

###  constructor

\+ **new SingleBucketAggResult**(`aggExpr`: [SingleBucketAgg](_agg_.singlebucketagg.md), `rawData`: [RawAggBucket](../modules/_types_.md#rawaggbucket), `docClsMap`: [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›, `mapperRegistry`: any): *[SingleBucketAggResult](_agg_.singlebucketaggresult.md)*

*Overrides [AggResult](_agg_.aggresult.md).[constructor](_agg_.aggresult.md#constructor)*

*Defined in [agg.ts:89](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`aggExpr` | [SingleBucketAgg](_agg_.singlebucketagg.md) |
`rawData` | [RawAggBucket](../modules/_types_.md#rawaggbucket) |
`docClsMap` | [Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)› |
`mapperRegistry` | any |

**Returns:** *[SingleBucketAggResult](_agg_.singlebucketaggresult.md)*

## Properties

###  aggregations

• **aggregations**: *[Dictionary](../modules/_types_.md#dictionary)‹string, [AggResult](_agg_.aggresult.md)›*

*Defined in [agg.ts:89](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L89)*

___

###  buckets

• **buckets**: *[Bucket](_agg_.bucket.md)[]* =  []

*Inherited from [AggResult](_agg_.aggresult.md).[buckets](_agg_.aggresult.md#buckets)*

*Defined in [agg.ts:46](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L46)*

___

###  docCount

• **docCount**: *number* = 0

*Overrides [AggResult](_agg_.aggresult.md).[docCount](_agg_.aggresult.md#doccount)*

*Defined in [agg.ts:88](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L88)*

___

###  expr

• **expr**: *[BucketAgg](_agg_.bucketagg.md)*

*Inherited from [AggResult](_agg_.aggresult.md).[expr](_agg_.aggresult.md#expr)*

*Defined in [agg.ts:48](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L48)*

## Methods

###  getAggregation

▸ **getAggregation**(`name`: string): *[AggResult](_agg_.aggresult.md)*

*Defined in [agg.ts:112](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/agg.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[AggResult](_agg_.aggresult.md)*
