---
id: "_cluster_.index"
title: "Index"
sidebar_label: "Index"
---

## Hierarchy

* **Index**

## Index

### Constructors

* [constructor](_cluster_.index.md#constructor)

### Properties

* [cluster](_cluster_.index.md#private-cluster)
* [name](_cluster_.index.md#private-name)

### Methods

* [getCluster](_cluster_.index.md#getcluster)
* [getName](_cluster_.index.md#getname)
* [searchQuery](_cluster_.index.md#searchquery)

## Constructors

###  constructor

\+ **new Index**(`name`: string, `cluster`: [Cluster](_cluster_.cluster.md)): *[Index](_cluster_.index.md)*

*Defined in [cluster.ts:17](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/cluster.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`cluster` | [Cluster](_cluster_.cluster.md) |

**Returns:** *[Index](_cluster_.index.md)*

## Properties

### `Private` cluster

• **cluster**: *[Cluster](_cluster_.cluster.md)*

*Defined in [cluster.ts:20](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/cluster.ts#L20)*

___

### `Private` name

• **name**: *string*

*Defined in [cluster.ts:19](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/cluster.ts#L19)*

## Methods

###  getCluster

▸ **getCluster**(): *[Cluster](_cluster_.cluster.md)*

*Defined in [cluster.ts:31](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/cluster.ts#L31)*

**Returns:** *[Cluster](_cluster_.cluster.md)*

___

###  getName

▸ **getName**(): *string*

*Defined in [cluster.ts:27](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/cluster.ts#L27)*

**Returns:** *string*

___

###  searchQuery

▸ **searchQuery**(`searchQueryOptions`: [SearchQueryOptions](../modules/_search_.md#searchqueryoptions)): *[SearchQuery](_search_.searchquery.md)*

*Defined in [cluster.ts:23](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/cluster.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`searchQueryOptions` | [SearchQueryOptions](../modules/_search_.md#searchqueryoptions) |

**Returns:** *[SearchQuery](_search_.searchquery.md)*
