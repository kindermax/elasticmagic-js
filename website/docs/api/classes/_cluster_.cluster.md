---
id: "_cluster_.cluster"
title: "Cluster"
sidebar_label: "Cluster"
---

## Hierarchy

* **Cluster**

## Index

### Constructors

* [constructor](_cluster_.cluster.md#constructor)

### Properties

* [client](_cluster_.cluster.md#private-client)
* [esVersion](_cluster_.cluster.md#private-optional-esversion)
* [index](_cluster_.cluster.md#private-optional-index)

### Methods

* [doRequest](_cluster_.cluster.md#private-dorequest)
* [getEsVersion](_cluster_.cluster.md#getesversion)
* [getIndex](_cluster_.cluster.md#getindex)
* [processEsVersionResult](_cluster_.cluster.md#private-processesversionresult)
* [processResult](_cluster_.cluster.md#private-processresult)
* [search](_cluster_.cluster.md#search)
* [searchQuery](_cluster_.cluster.md#searchquery)
* [withIndex](_cluster_.cluster.md#withindex)

## Constructors

###  constructor

\+ **new Cluster**(`client`: Client, `indexName?`: undefined | string): *[Cluster](_cluster_.cluster.md)*

*Defined in [cluster.ts:42](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | Client |
`indexName?` | undefined &#124; string |

**Returns:** *[Cluster](_cluster_.cluster.md)*

## Properties

### `Private` client

• **client**: *Client*

*Defined in [cluster.ts:45](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L45)*

___

### `Private` `Optional` esVersion

• **esVersion**? : *[EsVersion](_cluster_.esversion.md)*

*Defined in [cluster.ts:42](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L42)*

___

### `Private` `Optional` index

• **index**? : *[Index](_cluster_.index.md)*

*Defined in [cluster.ts:41](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L41)*

## Methods

### `Private` doRequest

▸ **doRequest**(`compiledQuery`: [Query](../modules/_search_.md#query), `params`: [SearchParams](../modules/_search_.md#searchparams)): *Promise‹ApiResponse‹[RawResultBody](../modules/_types_.md#rawresultbody)‹any›››*

*Defined in [cluster.ts:92](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L92)*

Make a request using underlying es client.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compiledQuery` | [Query](../modules/_search_.md#query) | - |
`params` | [SearchParams](../modules/_search_.md#searchparams) |   |

**Returns:** *Promise‹ApiResponse‹[RawResultBody](../modules/_types_.md#rawresultbody)‹any›››*

___

###  getEsVersion

▸ **getEsVersion**(): *Promise‹[EsVersion](_cluster_.esversion.md)›*

*Defined in [cluster.ts:74](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L74)*

**Returns:** *Promise‹[EsVersion](_cluster_.esversion.md)›*

___

###  getIndex

▸ **getIndex**(): *[Nullable](../modules/_types_.md#nullable)‹[Index](_cluster_.index.md)›*

*Defined in [cluster.ts:61](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L61)*

**Returns:** *[Nullable](../modules/_types_.md#nullable)‹[Index](_cluster_.index.md)›*

___

### `Private` processEsVersionResult

▸ **processEsVersionResult**(`rawResult`: [RootRawResult](../modules/_cluster_.md#rootrawresult)): *[EsVersion](_cluster_.esversion.md)*

*Defined in [cluster.ts:80](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`rawResult` | [RootRawResult](../modules/_cluster_.md#rootrawresult) |

**Returns:** *[EsVersion](_cluster_.esversion.md)*

___

### `Private` processResult

▸ **processResult**<**T**>(`rawResultBody`: [RawResultBody](../modules/_types_.md#rawresultbody)‹any›, `searchQueryContext`: [SearchQueryContext](_search_.searchquerycontext.md)): *[SearchResult](_result_.searchresult.md)‹T›*

*Defined in [cluster.ts:114](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L114)*

returns SearchResult instance with processed raw es response.

**Type parameters:**

▪ **T**: *[Doc](_document_.doc.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rawResultBody` | [RawResultBody](../modules/_types_.md#rawresultbody)‹any› | \ |
`searchQueryContext` | [SearchQueryContext](_search_.searchquerycontext.md) |   |

**Returns:** *[SearchResult](_result_.searchresult.md)‹T›*

___

###  search

▸ **search**<**T**>(`searchQuery`: [SearchQuery](_search_.searchquery.md)): *Promise‹[SearchResult](_result_.searchresult.md)‹T››*

*Defined in [cluster.ts:130](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L130)*

run search query against elasticsearch cluster and return processed result.

**Type parameters:**

▪ **T**: *[Doc](_document_.doc.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchQuery` | [SearchQuery](_search_.searchquery.md) |   |

**Returns:** *Promise‹[SearchResult](_result_.searchresult.md)‹T››*

___

###  searchQuery

▸ **searchQuery**(`searchQueryOptions`: [SearchQueryOptions](../modules/_search_.md#searchqueryoptions)): *[SearchQuery](_search_.searchquery.md)*

*Defined in [cluster.ts:53](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L53)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`searchQueryOptions` | [SearchQueryOptions](../modules/_search_.md#searchqueryoptions) |  {} |

**Returns:** *[SearchQuery](_search_.searchquery.md)*

___

###  withIndex

▸ **withIndex**(`index`: string | [Index](_cluster_.index.md)): *this*

*Defined in [cluster.ts:65](https://github.com/kindritskyiMax/elasticmagic-js/blob/3a76a7e/src/cluster.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | string &#124; [Index](_cluster_.index.md) |

**Returns:** *this*
