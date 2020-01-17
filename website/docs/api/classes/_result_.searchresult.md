---
id: "_result_.searchresult"
title: "SearchResult"
sidebar_label: "SearchResult"
---

## Type parameters

▪ **T**: *[Doc](_document_.doc.md)*

## Hierarchy

* [Result](_result_.result.md)

  ↳ **SearchResult**

## Index

### Constructors

* [constructor](_result_.searchresult.md#constructor)

### Properties

* [aggregations](_result_.searchresult.md#aggregations)
* [docClasses](_result_.searchresult.md#private-docclasses)
* [docClsMap](_result_.searchresult.md#private-docclsmap)
* [error](_result_.searchresult.md#error)
* [hits](_result_.searchresult.md#hits)
* [instanceMappers](_result_.searchresult.md#private-instancemappers)
* [mapperRegistry](_result_.searchresult.md#private-mapperregistry)
* [maxScore](_result_.searchresult.md#maxscore)
* [queryAggs](_result_.searchresult.md#private-queryaggs)
* [raw](_result_.searchresult.md#raw)
* [scrollId](_result_.searchresult.md#scrollid)
* [timedOut](_result_.searchresult.md#timedout)
* [took](_result_.searchresult.md#took)
* [total](_result_.searchresult.md#total)

### Accessors

* [prettyRaw](_result_.searchresult.md#prettyraw)

### Methods

* [getAggregation](_result_.searchresult.md#getaggregation)
* [getDocTypeDocMap](_result_.searchresult.md#private-getdoctypedocmap)
* [getIds](_result_.searchresult.md#getids)
* [getInstances](_result_.searchresult.md#getinstances)
* [populateInstances](_result_.searchresult.md#populateinstances)

## Constructors

###  constructor

\+ **new SearchResult**(`rawResult`: [RawResultBody](../modules/_types_.md#rawresultbody)‹any›, `aggregations`: [Params](_expression_.params.md), `docClasses`: Readonly‹[DocClass](../modules/_document_.md#docclass)[]›, `instanceMapper?`: [InstanceMapper](../modules/_search_.md#instancemapper)‹any› | [InstanceMapperDict](../modules/_result_.md#instancemapperdict)): *[SearchResult](_result_.searchresult.md)*

*Overrides [Result](_result_.result.md).[constructor](_result_.result.md#constructor)*

*Defined in [result.ts:53](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`rawResult` | [RawResultBody](../modules/_types_.md#rawresultbody)‹any› |
`aggregations` | [Params](_expression_.params.md) |
`docClasses` | Readonly‹[DocClass](../modules/_document_.md#docclass)[]› |
`instanceMapper?` | [InstanceMapper](../modules/_search_.md#instancemapper)‹any› &#124; [InstanceMapperDict](../modules/_result_.md#instancemapperdict) |

**Returns:** *[SearchResult](_result_.searchresult.md)*

## Properties

###  aggregations

• **aggregations**: *[Dictionary](../modules/_types_.md#dictionary)‹string, any›*

*Defined in [result.ts:52](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L52)*

___

### `Private` docClasses

• **docClasses**: *Readonly‹[DocClass](../modules/_document_.md#docclass)[]›*

*Defined in [result.ts:58](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L58)*

___

### `Private` docClsMap

• **docClsMap**: *[Dictionary](../modules/_types_.md#dictionary)‹string, [DocClass](../modules/_document_.md#docclass)›*

*Defined in [result.ts:42](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L42)*

___

###  error

• **error**: *string | undefined*

*Defined in [result.ts:46](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L46)*

___

###  hits

• **hits**: *T[]* =  []

*Defined in [result.ts:51](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L51)*

___

### `Private` instanceMappers

• **instanceMappers**: *[InstanceMapperDict](../modules/_result_.md#instancemapperdict)*

*Defined in [result.ts:43](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L43)*

___

### `Private` mapperRegistry

• **mapperRegistry**: *any*

*Defined in [result.ts:44](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L44)*

___

###  maxScore

• **maxScore**: *number*

*Defined in [result.ts:50](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L50)*

___

### `Private` queryAggs

• **queryAggs**: *[Params](_expression_.params.md)* =  new Params()

*Defined in [result.ts:41](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L41)*

___

###  raw

• **raw**: *[RawResultBody](../modules/_types_.md#rawresultbody)‹any›*

*Inherited from [Result](_result_.result.md).[raw](_result_.result.md#raw)*

*Defined in [result.ts:32](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L32)*

___

###  scrollId

• **scrollId**: *number | undefined*

*Defined in [result.ts:53](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L53)*

___

###  timedOut

• **timedOut**: *boolean*

*Defined in [result.ts:48](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L48)*

___

###  took

• **took**: *number*

*Defined in [result.ts:47](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L47)*

___

###  total

• **total**: *number*

*Defined in [result.ts:49](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L49)*

## Accessors

###  prettyRaw

• **get prettyRaw**(): *string*

*Inherited from [Result](_result_.result.md).[prettyRaw](_result_.result.md#prettyraw)*

*Defined in [result.ts:34](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L34)*

**Returns:** *string*

## Methods

###  getAggregation

▸ **getAggregation**(`name`: string): *[AggResult](_agg_.aggresult.md)*

*Defined in [result.ts:111](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[AggResult](_agg_.aggresult.md)*

___

### `Private` getDocTypeDocMap

▸ **getDocTypeDocMap**(): *Map‹string, [Doc](_document_.doc.md)[]›*

*Defined in [result.ts:151](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L151)*

**Returns:** *Map‹string, [Doc](_document_.doc.md)[]›*

___

###  getIds

▸ **getIds**(): *string[]*

*Defined in [result.ts:115](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L115)*

**Returns:** *string[]*

___

###  getInstances

▸ **getInstances**<**Inst**>(): *Promise‹Inst[]›*

*Defined in [result.ts:163](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L163)*

**Type parameters:**

▪ **Inst**

**Returns:** *Promise‹Inst[]›*

___

###  populateInstances

▸ **populateInstances**(`docType?`: undefined | string): *Promise‹void›*

*Defined in [result.ts:122](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/result.ts#L122)*

Populates docs (hits) with result of instance mapper.

**Parameters:**

Name | Type |
------ | ------ |
`docType?` | undefined &#124; string |

**Returns:** *Promise‹void›*
