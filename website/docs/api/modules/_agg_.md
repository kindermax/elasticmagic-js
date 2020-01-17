---
id: "_agg_"
title: "agg"
sidebar_label: "agg"
---

## Index

### Classes

* [AggExpression](../classes/_agg_.aggexpression.md)
* [AggResult](../classes/_agg_.aggresult.md)
* [Bucket](../classes/_agg_.bucket.md)
* [BucketAgg](../classes/_agg_.bucketagg.md)
* [Filter](../classes/_agg_.filter.md)
* [MultiBucketAgg](../classes/_agg_.multibucketagg.md)
* [MultiBucketAggResult](../classes/_agg_.multibucketaggresult.md)
* [SingleBucketAgg](../classes/_agg_.singlebucketagg.md)
* [SingleBucketAggResult](../classes/_agg_.singlebucketaggresult.md)
* [Terms](../classes/_agg_.terms.md)

### Type aliases

* [BucketKey](_agg_.md#bucketkey)
* [FilterOptions](_agg_.md#filteroptions)
* [TermsOptions](_agg_.md#termsoptions)
* [TermsOptionsShrink](_agg_.md#termsoptionsshrink)

### Functions

* [getType](_agg_.md#gettype)
* [sortByKey](_agg_.md#sortbykey)

## Type aliases

###  BucketKey

Ƭ **BucketKey**: *string | number*

*Defined in [agg.ts:7](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L7)*

___

###  FilterOptions

Ƭ **FilterOptions**: *object*

*Defined in [agg.ts:258](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L258)*

#### Type declaration:

* **aggs**? : *[Dictionary](_types_.md#dictionary)‹string, [Filter](../classes/_agg_.filter.md)›*

* **filter**: *[Expression](../classes/_expression_.expression.md)*

___

###  TermsOptions

Ƭ **TermsOptions**: *object*

*Defined in [agg.ts:224](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L224)*

#### Type declaration:

* **aggs**? : *[Dictionary](_types_.md#dictionary)‹string, [Filter](../classes/_agg_.filter.md)›*

* **field**: *[Field](../classes/_document_.field.md)*

* **instanceMapper**? : *[InstanceMapper](_search_.md#instancemapper)‹any›*

* **script**? : *any*

* **size**? : *undefined | number*

* **type**? : *[FieldType](../classes/_document_.fieldtype.md)*

___

###  TermsOptionsShrink

Ƭ **TermsOptionsShrink**: *object*

*Defined in [agg.ts:233](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L233)*

#### Type declaration:

* **field**? : *[Field](../classes/_document_.field.md)*

* **script**? : *any*

* **size**? : *undefined | number*

## Functions

###  getType

▸ **getType**(`field`: [Field](../classes/_document_.field.md), `type?`: [FieldType](../classes/_document_.fieldtype.md)): *[FieldType](../classes/_document_.fieldtype.md)*

*Defined in [agg.ts:239](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L239)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](../classes/_document_.field.md) |
`type?` | [FieldType](../classes/_document_.fieldtype.md) |

**Returns:** *[FieldType](../classes/_document_.fieldtype.md)*

___

###  sortByKey

▸ **sortByKey**(`collection`: object): *Array‹[KVList](_types_.md#kvlist)‹string››*

*Defined in [agg.ts:79](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/agg.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | object |

**Returns:** *Array‹[KVList](_types_.md#kvlist)‹string››*
