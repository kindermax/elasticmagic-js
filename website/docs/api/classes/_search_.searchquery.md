---
id: "_search_.searchquery"
title: "SearchQuery"
sidebar_label: "SearchQuery"
---

## Hierarchy

* **SearchQuery**

## Index

### Constructors

* [constructor](_search_.searchquery.md#constructor)

### Properties

* [_aggregations](_search_.searchquery.md#private-_aggregations)
* [_docClass](_search_.searchquery.md#private-optional-_docclass)
* [_docType](_search_.searchquery.md#private-optional-_doctype)
* [_fields](_search_.searchquery.md#private-_fields)
* [_filters](_search_.searchquery.md#private-_filters)
* [_instanceMapper](_search_.searchquery.md#private-optional-_instancemapper)
* [_limit](_search_.searchquery.md#private-_limit)
* [_query](_search_.searchquery.md#private-_query)
* [_searchParams](_search_.searchquery.md#private-_searchparams)
* [_sort](_search_.searchquery.md#private-_sort)
* [_source](_search_.searchquery.md#private-_source)
* [cluster](_search_.searchquery.md#private-optional-cluster)
* [index](_search_.searchquery.md#private-optional-index)

### Accessors

* [body](_search_.searchquery.md#body)
* [params](_search_.searchquery.md#params)
* [prettyBody](_search_.searchquery.md#prettybody)

### Methods

* [aggregations](_search_.searchquery.md#aggregations)
* [aggs](_search_.searchquery.md#aggs)
* [clone](_search_.searchquery.md#clone)
* [collectDocClasses](_search_.searchquery.md#private-collectdocclasses)
* [compile](_search_.searchquery.md#private-compile)
* [filter](_search_.searchquery.md#filter)
* [getQueryContext](_search_.searchquery.md#getquerycontext)
* [getResult](_search_.searchquery.md#getresult)
* [limit](_search_.searchquery.md#limit)
* [orderBy](_search_.searchquery.md#orderby)
* [prepareSearchParams](_search_.searchquery.md#private-preparesearchparams)
* [query](_search_.searchquery.md#query)
* [sort](_search_.searchquery.md#sort)
* [source](_search_.searchquery.md#source)
* [toJSON](_search_.searchquery.md#tojson)
* [withDoc](_search_.searchquery.md#withdoc)
* [withDocType](_search_.searchquery.md#withdoctype)
* [withIndex](_search_.searchquery.md#withindex)
* [withInstanceMapper](_search_.searchquery.md#withinstancemapper)

## Constructors

###  constructor

\+ **new SearchQuery**(`searchQueryOptions`: [ClusterSearchQueryOptions](../modules/_search_.md#clustersearchqueryoptions)): *[SearchQuery](_search_.searchquery.md)*

*Defined in [search.ts:176](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L176)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`searchQueryOptions` | [ClusterSearchQueryOptions](../modules/_search_.md#clustersearchqueryoptions) |  {} |

**Returns:** *[SearchQuery](_search_.searchquery.md)*

## Properties

### `Private` _aggregations

• **_aggregations**: *[Params](_expression_.params.md)* =  new Params()

*Defined in [search.ts:169](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L169)*

___

### `Private` `Optional` _docClass

• **_docClass**? : *[DocClass](../modules/_document_.md#docclass)*

*Defined in [search.ts:174](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L174)*

___

### `Private` `Optional` _docType

• **_docType**? : *undefined | string*

*Defined in [search.ts:175](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L175)*

___

### `Private` _fields

• **_fields**: *[Field](_document_.field.md)[]* =  []

*Defined in [search.ts:166](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L166)*

___

### `Private` _filters

• **_filters**: *[Expression](_expression_.expression.md)[]* =  []

*Defined in [search.ts:167](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L167)*

___

### `Private` `Optional` _instanceMapper

• **_instanceMapper**? : *[InstanceMapper](../modules/_search_.md#instancemapper)‹any›*

*Defined in [search.ts:176](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L176)*

___

### `Private` _limit

• **_limit**: *[Limit](../modules/_search_.md#limit)* =  null

*Defined in [search.ts:165](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L165)*

___

### `Private` _query

• **_query**: *[QueryOverride](../modules/_search_.md#queryoverride)* =  null

*Defined in [search.ts:172](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L172)*

___

### `Private` _searchParams

• **_searchParams**: *[Params](_expression_.params.md)* =  new Params()

*Defined in [search.ts:173](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L173)*

___

### `Private` _sort

• **_sort**: *[Sort](_expression_.sort.md)[]* =  []

*Defined in [search.ts:168](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L168)*

___

### `Private` _source

• **_source**: *[Source](_expression_.source.md) | null* =  null

*Defined in [search.ts:171](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L171)*

___

### `Private` `Optional` cluster

• **cluster**? : *[Cluster](_cluster_.cluster.md)*

*Defined in [search.ts:157](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L157)*

___

### `Private` `Optional` index

• **index**? : *[Index](_cluster_.index.md)*

*Defined in [search.ts:163](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L163)*

TODO this field needed when SearchQuery created on its own and hence not bound to cluster or query
* implement check _index_or_cluster
* add method for bound, like withIndex, withCluster

## Accessors

###  body

• **get body**(): *[Query](../modules/_search_.md#query)*

*Defined in [search.ts:331](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L331)*

**Returns:** *[Query](../modules/_search_.md#query)*

___

###  params

• **get params**(): *[SearchParams](../modules/_search_.md#searchparams)*

*Defined in [search.ts:335](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L335)*

**Returns:** *[SearchParams](../modules/_search_.md#searchparams)*

___

###  prettyBody

• **get prettyBody**(): *string*

*Defined in [search.ts:339](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L339)*

**Returns:** *string*

## Methods

###  aggregations

▸ **aggregations**(`aggs`: [Nullable](../modules/_types_.md#nullable)‹[Aggregations](../modules/_search_.md#aggregations)›): *this*

*Defined in [search.ts:292](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L292)*

Adds aggregations <https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html>
to the search query.

After executing the query you can get aggregation result by its name
calling `SearchResult` [getAggregation](_result_.searchresult.md#getaggregation) method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aggs` | [Nullable](../modules/_types_.md#nullable)‹[Aggregations](../modules/_search_.md#aggregations)› | objects with aggregations. Can be ``null`` that cleans up previous aggregations.  |

**Returns:** *this*

___

###  aggs

▸ **aggs**(`aggs`: [Nullable](../modules/_types_.md#nullable)‹[Aggregations](../modules/_search_.md#aggregations)›): *this*

*Defined in [search.ts:302](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L302)*

**Parameters:**

Name | Type |
------ | ------ |
`aggs` | [Nullable](../modules/_types_.md#nullable)‹[Aggregations](../modules/_search_.md#aggregations)› |

**Returns:** *this*

___

###  clone

▸ **clone**(): *this*

*Defined in [search.ts:351](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L351)*

**Returns:** *this*

___

### `Private` collectDocClasses

▸ **collectDocClasses**(): *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Defined in [search.ts:381](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L381)*

**Returns:** *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

___

### `Private` compile

▸ **compile**(): *[Query](../modules/_search_.md#query)*

*Defined in [search.ts:369](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L369)*

**Returns:** *[Query](../modules/_search_.md#query)*

___

###  filter

▸ **filter**(...`filters`: [Expression](_expression_.expression.md)[] | [Nullable](../modules/_types_.md#nullable)[]): *this*

*Defined in [search.ts:263](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L263)*

Multiple expressions may be specified, so they will be joined together using ``Bool.must`` expression.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...filters` | [Expression](_expression_.expression.md)[] &#124; [Nullable](../modules/_types_.md#nullable)[] |   |

**Returns:** *this*

___

###  getQueryContext

▸ **getQueryContext**(): *[SearchQueryContext](_search_.searchquerycontext.md)*

*Defined in [search.ts:208](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L208)*

**Returns:** *[SearchQueryContext](_search_.searchquerycontext.md)*

___

###  getResult

▸ **getResult**<**T**>(): *Promise‹[SearchResult](_result_.searchresult.md)‹T››*

*Defined in [search.ts:343](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L343)*

**Type parameters:**

▪ **T**: *[Doc](_document_.doc.md)*

**Returns:** *Promise‹[SearchResult](_result_.searchresult.md)‹T››*

___

###  limit

▸ **limit**(`limit`: number): *this*

*Defined in [search.ts:272](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L272)*

**Parameters:**

Name | Type |
------ | ------ |
`limit` | number |

**Returns:** *this*

___

###  orderBy

▸ **orderBy**(...`orders`: [Sort](_expression_.sort.md)[] | [Field](_document_.field.md)[] | [Nullable](../modules/_types_.md#nullable)[]): *this*

*Defined in [search.ts:364](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L364)*

**Parameters:**

Name | Type |
------ | ------ |
`...orders` | [Sort](_expression_.sort.md)[] &#124; [Field](_document_.field.md)[] &#124; [Nullable](../modules/_types_.md#nullable)[] |

**Returns:** *this*

___

### `Private` prepareSearchParams

▸ **prepareSearchParams**(`params`: [ParamsType](../modules/_expression_.md#paramstype)): *[SearchParams](../modules/_search_.md#searchparams)*

*Defined in [search.ts:374](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L374)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ParamsType](../modules/_expression_.md#paramstype) |

**Returns:** *[SearchParams](../modules/_search_.md#searchparams)*

___

###  query

▸ **query**(`query`: [QueryOverride](../modules/_search_.md#queryoverride)): *this*

*Defined in [search.ts:278](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L278)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | [QueryOverride](../modules/_search_.md#queryoverride) |

**Returns:** *this*

___

###  sort

▸ **sort**(...`orders`: [Sort](_expression_.sort.md)[] | [Field](_document_.field.md)[] | [Nullable](../modules/_types_.md#nullable)[]): *this*

*Defined in [search.ts:355](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L355)*

**Parameters:**

Name | Type |
------ | ------ |
`...orders` | [Sort](_expression_.sort.md)[] &#124; [Field](_document_.field.md)[] &#124; [Nullable](../modules/_types_.md#nullable)[] |

**Returns:** *this*

___

###  source

▸ **source**(`fields`: boolean | null | undefined | string | [Field](_document_.field.md) | Array‹string | [Field](_document_.field.md)›, `opts?`: undefined | object): *this*

*Defined in [search.ts:240](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L240)*

Controls which fields of the document's ``_source`` field to retrieve.

**Parameters:**

Name | Type |
------ | ------ |
`fields` | boolean &#124; null &#124; undefined &#124; string &#124; [Field](_document_.field.md) &#124; Array‹string &#124; [Field](_document_.field.md)› |
`opts?` | undefined &#124; object |

**Returns:** *this*

___

###  toJSON

▸ **toJSON**(): *[Query](../modules/_search_.md#query)*

*Defined in [search.ts:327](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L327)*

**Returns:** *[Query](../modules/_search_.md#query)*

___

###  withDoc

▸ **withDoc**<**T**>(`docClass`: T): *this*

*Defined in [search.ts:312](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L312)*

**Type parameters:**

▪ **T**: *[DocClass](../modules/_document_.md#docclass)*

**Parameters:**

Name | Type |
------ | ------ |
`docClass` | T |

**Returns:** *this*

___

###  withDocType

▸ **withDocType**(`docType`: string): *this*

*Defined in [search.ts:317](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`docType` | string |

**Returns:** *this*

___

###  withIndex

▸ **withIndex**(`index`: [Index](_cluster_.index.md)): *this*

*Defined in [search.ts:322](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | [Index](_cluster_.index.md) |

**Returns:** *this*

___

###  withInstanceMapper

▸ **withInstanceMapper**<**T**>(`instanceMapper`: [InstanceMapper](../modules/_search_.md#instancemapper)‹T›): *this*

*Defined in [search.ts:307](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/search.ts#L307)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`instanceMapper` | [InstanceMapper](../modules/_search_.md#instancemapper)‹T› |

**Returns:** *this*
