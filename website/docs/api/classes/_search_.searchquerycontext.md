---
id: "_search_.searchquerycontext"
title: "SearchQueryContext"
sidebar_label: "SearchQueryContext"
---

## Hierarchy

* **SearchQueryContext**

## Index

### Constructors

* [constructor](_search_.searchquerycontext.md#constructor)

### Properties

* [aggregations](_search_.searchquerycontext.md#aggregations)
* [docClasses](_search_.searchquerycontext.md#docclasses)
* [docType](_search_.searchquerycontext.md#optional-doctype)
* [docTypes](_search_.searchquerycontext.md#doctypes)
* [fields](_search_.searchquerycontext.md#fields)
* [filters](_search_.searchquerycontext.md#filters)
* [instanceMapper](_search_.searchquerycontext.md#optional-instancemapper)
* [limit](_search_.searchquerycontext.md#limit)
* [query](_search_.searchquerycontext.md#query)
* [searchParams](_search_.searchquerycontext.md#searchparams)
* [sort](_search_.searchquerycontext.md#sort)
* [source](_search_.searchquerycontext.md#source)
* [visitName](_search_.searchquerycontext.md#visitname)

### Methods

* [getUniqueDocTypes](_search_.searchquerycontext.md#private-getuniquedoctypes)

## Constructors

###  constructor

\+ **new SearchQueryContext**(`query`: [QueryOverride](../modules/_search_.md#queryoverride), `source`: [Source](_expression_.source.md) | null, `fields`: [Field](_document_.field.md)[], `filters`: [Expression](_expression_.expression.md)[], `sort`: [Sort](_expression_.sort.md)[], `limit`: [Limit](../modules/_search_.md#limit), `searchParams`: [Params](_expression_.params.md), `aggregations`: [Params](_expression_.params.md), `docClasses`: Readonly‹[DocClass](../modules/_document_.md#docclass)[]›, `docType?`: undefined | string, `instanceMapper?`: [InstanceMapper](../modules/_search_.md#instancemapper)‹any›): *[SearchQueryContext](_search_.searchquerycontext.md)*

*Defined in [search.ts:114](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | [QueryOverride](../modules/_search_.md#queryoverride) |
`source` | [Source](_expression_.source.md) &#124; null |
`fields` | [Field](_document_.field.md)[] |
`filters` | [Expression](_expression_.expression.md)[] |
`sort` | [Sort](_expression_.sort.md)[] |
`limit` | [Limit](../modules/_search_.md#limit) |
`searchParams` | [Params](_expression_.params.md) |
`aggregations` | [Params](_expression_.params.md) |
`docClasses` | Readonly‹[DocClass](../modules/_document_.md#docclass)[]› |
`docType?` | undefined &#124; string |
`instanceMapper?` | [InstanceMapper](../modules/_search_.md#instancemapper)‹any› |

**Returns:** *[SearchQueryContext](_search_.searchquerycontext.md)*

## Properties

###  aggregations

• **aggregations**: *[Params](_expression_.params.md)*

*Defined in [search.ts:124](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L124)*

___

###  docClasses

• **docClasses**: *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Defined in [search.ts:125](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L125)*

___

### `Optional` docType

• **docType**? : *undefined | string*

*Defined in [search.ts:126](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L126)*

___

###  docTypes

• **docTypes**: *Readonly‹string[]›* =  []

*Defined in [search.ts:114](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L114)*

___

###  fields

• **fields**: *[Field](_document_.field.md)[]*

*Defined in [search.ts:119](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L119)*

___

###  filters

• **filters**: *[Expression](_expression_.expression.md)[]*

*Defined in [search.ts:120](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L120)*

___

### `Optional` instanceMapper

• **instanceMapper**? : *[InstanceMapper](../modules/_search_.md#instancemapper)‹any›*

*Defined in [search.ts:127](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L127)*

___

###  limit

• **limit**: *[Limit](../modules/_search_.md#limit)*

*Defined in [search.ts:122](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L122)*

___

###  query

• **query**: *[QueryOverride](../modules/_search_.md#queryoverride)*

*Defined in [search.ts:117](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L117)*

___

###  searchParams

• **searchParams**: *[Params](_expression_.params.md)*

*Defined in [search.ts:123](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L123)*

___

###  sort

• **sort**: *[Sort](_expression_.sort.md)[]*

*Defined in [search.ts:121](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L121)*

___

###  source

• **source**: *[Source](_expression_.source.md) | null*

*Defined in [search.ts:118](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L118)*

___

###  visitName

• **visitName**: *string* = "searchQueryContext"

*Defined in [search.ts:112](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L112)*

## Methods

### `Private` getUniqueDocTypes

▸ **getUniqueDocTypes**(`docTypes`: string[], `docClasses`: Readonly‹[DocClass](../modules/_document_.md#docclass)[]›): *Readonly‹string[]›*

*Defined in [search.ts:143](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/search.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`docTypes` | string[] |
`docClasses` | Readonly‹[DocClass](../modules/_document_.md#docclass)[]› |

**Returns:** *Readonly‹string[]›*
