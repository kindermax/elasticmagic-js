---
id: "_agg_.aggresult"
title: "AggResult"
sidebar_label: "AggResult"
---

## Hierarchy

* **AggResult**

  ↳ [SingleBucketAggResult](_agg_.singlebucketaggresult.md)

  ↳ [MultiBucketAggResult](_agg_.multibucketaggresult.md)

## Index

### Constructors

* [constructor](_agg_.aggresult.md#constructor)

### Properties

* [buckets](_agg_.aggresult.md#buckets)
* [docCount](_agg_.aggresult.md#doccount)
* [expr](_agg_.aggresult.md#expr)

## Constructors

###  constructor

\+ **new AggResult**(`expr`: [BucketAgg](_agg_.bucketagg.md)): *[AggResult](_agg_.aggresult.md)*

*Defined in [agg.ts:47](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [BucketAgg](_agg_.bucketagg.md) |

**Returns:** *[AggResult](_agg_.aggresult.md)*

## Properties

###  buckets

• **buckets**: *[Bucket](_agg_.bucket.md)[]* =  []

*Defined in [agg.ts:46](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L46)*

___

###  docCount

• **docCount**: *number* = 0

*Defined in [agg.ts:47](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L47)*

___

###  expr

• **expr**: *[BucketAgg](_agg_.bucketagg.md)*

*Defined in [agg.ts:48](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/agg.ts#L48)*
