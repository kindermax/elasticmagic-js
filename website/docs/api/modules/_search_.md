---
id: "_search_"
title: "search"
sidebar_label: "search"
---

## Index

### Classes

* [SearchQuery](../classes/_search_.searchquery.md)
* [SearchQueryContext](../classes/_search_.searchquerycontext.md)

### Type aliases

* [Aggregations](_search_.md#aggregations)
* [AggregationsField](_search_.md#aggregationsfield)
* [BoolField](_search_.md#boolfield)
* [BoolMustFilter](_search_.md#boolmustfilter)
* [BoolMustNotFilter](_search_.md#boolmustnotfilter)
* [BoolRootField](_search_.md#boolrootfield)
* [ClusterSearchQueryOptions](_search_.md#clustersearchqueryoptions)
* [ExistsFilter](_search_.md#existsfilter)
* [ExistsValue](_search_.md#existsvalue)
* [FilterRootField](_search_.md#filterrootfield)
* [InstanceMapper](_search_.md#instancemapper)
* [Limit](_search_.md#limit)
* [MatchFilter](_search_.md#matchfilter)
* [MatchPhraseFilter](_search_.md#matchphrasefilter)
* [MatchValue](_search_.md#matchvalue)
* [Query](_search_.md#query)
* [QueryOverride](_search_.md#queryoverride)
* [QueryRootField](_search_.md#queryrootfield)
* [SearchParams](_search_.md#searchparams)
* [SearchQueryOptions](_search_.md#searchqueryoptions)
* [SortMode](_search_.md#sortmode)
* [SortObject](_search_.md#sortobject)
* [SortOrder](_search_.md#sortorder)
* [SortRootField](_search_.md#sortrootfield)
* [TermFilter](_search_.md#termfilter)
* [TermValue](_search_.md#termvalue)
* [TermsFilter](_search_.md#termsfilter)

### Functions

* [getDocType](_search_.md#getdoctype)

## Type aliases

###  Aggregations

Ƭ **Aggregations**: *[Dictionary](_types_.md#dictionary)‹string, [AggExpression](../classes/_agg_.aggexpression.md)›*

*Defined in [search.ts:81](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L81)*

___

###  AggregationsField

Ƭ **AggregationsField**: *[PlainObject](_types_.md#plainobject)*

*Defined in [search.ts:79](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L79)*

___

###  BoolField

Ƭ **BoolField**: *object*

*Defined in [search.ts:62](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L62)*

#### Type declaration:

* **must**? : *Array‹[TermFilter](_search_.md#termfilter) | [TermsFilter](_search_.md#termsfilter) | [MatchFilter](_search_.md#matchfilter) | [MatchPhraseFilter](_search_.md#matchphrasefilter)›*

* **must_not**? : *Array‹[TermFilter](_search_.md#termfilter) | [TermsFilter](_search_.md#termsfilter) | [MatchFilter](_search_.md#matchfilter) | [MatchPhraseFilter](_search_.md#matchphrasefilter)›*

___

###  BoolMustFilter

Ƭ **BoolMustFilter**: *Array‹[MatchFilter](_search_.md#matchfilter) | [MatchPhraseFilter](_search_.md#matchphrasefilter)›*

*Defined in [search.ts:69](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L69)*

___

###  BoolMustNotFilter

Ƭ **BoolMustNotFilter**: *Array‹[MatchFilter](_search_.md#matchfilter) | [MatchPhraseFilter](_search_.md#matchphrasefilter)›*

*Defined in [search.ts:70](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L70)*

___

###  BoolRootField

Ƭ **BoolRootField**: *object*

*Defined in [search.ts:72](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L72)*

#### Type declaration:

* **filter**? : *[FilterRootField](_search_.md#filterrootfield)*

* **must**? : *[BoolMustFilter](_search_.md#boolmustfilter)*

* **must_not**? : *[BoolMustNotFilter](_search_.md#boolmustnotfilter)*

___

###  ClusterSearchQueryOptions

Ƭ **ClusterSearchQueryOptions**: *object & [SearchQueryOptions](_search_.md#searchqueryoptions)*

*Defined in [search.ts:28](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L28)*

___

###  ExistsFilter

Ƭ **ExistsFilter**: *object*

*Defined in [search.ts:58](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L58)*

#### Type declaration:

* **exists**: *[Dictionary](_types_.md#dictionary)‹string, [ExistsValue](_search_.md#existsvalue)›*

___

###  ExistsValue

Ƭ **ExistsValue**: *string | number | boolean*

*Defined in [search.ts:40](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L40)*

___

###  FilterRootField

Ƭ **FilterRootField**: *[BoolField](_search_.md#boolfield) | [ExistsFilter](_search_.md#existsfilter)[]*

*Defined in [search.ts:67](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L67)*

___

###  InstanceMapper

Ƭ **InstanceMapper**: *function*

*Defined in [search.ts:108](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L108)*

#### Type declaration:

▸ (`ids`: string[]): *Promise‹Map‹string, T››*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | string[] |

___

###  Limit

Ƭ **Limit**: *number | null*

*Defined in [search.ts:106](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L106)*

___

###  MatchFilter

Ƭ **MatchFilter**: *object*

*Defined in [search.ts:42](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L42)*

#### Type declaration:

* **match**: *[Dictionary](_types_.md#dictionary)‹string, [MatchValue](_search_.md#matchvalue)›*

___

###  MatchPhraseFilter

Ƭ **MatchPhraseFilter**: *object*

*Defined in [search.ts:46](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L46)*

#### Type declaration:

* **match**: *[Dictionary](_types_.md#dictionary)‹string, [MatchValue](_search_.md#matchvalue)›*

___

###  MatchValue

Ƭ **MatchValue**: *string | number | boolean*

*Defined in [search.ts:38](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L38)*

___

###  Query

Ƭ **Query**: *object*

*Defined in [search.ts:96](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L96)*

#### Type declaration:

* **_source**? : *[SourceField](_expression_.md#sourcefield)*

* **aggregations**? : *[AggregationsField](_search_.md#aggregationsfield)*

* **query**? : *[QueryRootField](_search_.md#queryrootfield)*

* **size**? : *undefined | number*

* **sort**? : *[SortRootField](_search_.md#sortrootfield)*

___

###  QueryOverride

Ƭ **QueryOverride**: *any | null*

*Defined in [search.ts:105](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L105)*

___

###  QueryRootField

Ƭ **QueryRootField**: *object*

*Defined in [search.ts:83](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L83)*

#### Type declaration:

* **bool**? : *[BoolRootField](_search_.md#boolrootfield)*

* **match**? : *any*

___

###  SearchParams

Ƭ **SearchParams**: *object*

*Defined in [search.ts:33](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L33)*

#### Type declaration:

* **routing**? : *undefined | string*

* **type**? : *undefined | string*

___

###  SearchQueryOptions

Ƭ **SearchQueryOptions**: *object*

*Defined in [search.ts:22](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L22)*

#### Type declaration:

* **docClass**? : *[DocClass](_document_.md#docclass)*

* **docType**? : *undefined | string*

* **routing**? : *undefined | number*

___

###  SortMode

Ƭ **SortMode**: *"min" | "max" | "sum" | "avg" | "median"*

*Defined in [search.ts:89](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L89)*

___

###  SortObject

Ƭ **SortObject**: *[Dictionary](_types_.md#dictionary)‹string, [SortOrder](_search_.md#sortorder) | object›*

*Defined in [search.ts:91](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L91)*

___

###  SortOrder

Ƭ **SortOrder**: *"asc" | "desc"*

*Defined in [search.ts:88](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L88)*

___

###  SortRootField

Ƭ **SortRootField**: *[SortObject](_search_.md#sortobject)[] | string | "_score"*

*Defined in [search.ts:92](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L92)*

___

###  TermFilter

Ƭ **TermFilter**: *object*

*Defined in [search.ts:50](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L50)*

#### Type declaration:

* **term**: *[Dictionary](_types_.md#dictionary)‹string, [TermValue](_search_.md#termvalue)›*

___

###  TermValue

Ƭ **TermValue**: *string | number | boolean*

*Defined in [search.ts:39](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L39)*

___

###  TermsFilter

Ƭ **TermsFilter**: *object*

*Defined in [search.ts:54](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L54)*

#### Type declaration:

* **terms**: *[Dictionary](_types_.md#dictionary)‹string, [TermValue](_search_.md#termvalue)[]›*

## Functions

###  getDocType

▸ **getDocType**(`docType?`: undefined | string, `docClass?`: [DocClass](_document_.md#docclass)): *string | null*

*Defined in [search.ts:150](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`docType?` | undefined &#124; string |
`docClass?` | [DocClass](_document_.md#docclass) |

**Returns:** *string | null*
