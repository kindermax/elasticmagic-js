---
id: "_compiler_.compilervisitor"
title: "CompilerVisitor"
sidebar_label: "CompilerVisitor"
---

## Hierarchy

* **CompilerVisitor**

## Index

### Properties

* [params](_compiler_.compilervisitor.md#params)

### Methods

* [compile](_compiler_.compilervisitor.md#compile)
* [getFilteredQuery](_compiler_.compilervisitor.md#private-getfilteredquery)
* [getQuery](_compiler_.compilervisitor.md#private-getquery)
* [visit](_compiler_.compilervisitor.md#private-visit)
* [visitAgg](_compiler_.compilervisitor.md#private-visitagg)
* [visitArray](_compiler_.compilervisitor.md#private-visitarray)
* [visitBucketAgg](_compiler_.compilervisitor.md#private-visitbucketagg)
* [visitField](_compiler_.compilervisitor.md#private-visitfield)
* [visitFieldQuery](_compiler_.compilervisitor.md#private-visitfieldquery)
* [visitFilterAgg](_compiler_.compilervisitor.md#private-visitfilteragg)
* [visitLiteral](_compiler_.compilervisitor.md#private-visitliteral)
* [visitObject](_compiler_.compilervisitor.md#private-visitobject)
* [visitParams](_compiler_.compilervisitor.md#private-visitparams)
* [visitQueryExpression](_compiler_.compilervisitor.md#private-visitqueryexpression)
* [visitRange](_compiler_.compilervisitor.md#private-visitrange)
* [visitSearchQueryContext](_compiler_.compilervisitor.md#private-visitsearchquerycontext)
* [visitSort](_compiler_.compilervisitor.md#private-visitsort)
* [visitSource](_compiler_.compilervisitor.md#private-visitsource)
* [visitTerm](_compiler_.compilervisitor.md#private-visitterm)
* [visitTerms](_compiler_.compilervisitor.md#private-visitterms)

## Properties

###  params

• **params**: *[Query](../modules/_search_.md#query)*

*Defined in [compiler.ts:24](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L24)*

## Methods

###  compile

▸ **compile**(`queryContext`: [SearchQueryContext](_search_.searchquerycontext.md)): *[Query](../modules/_search_.md#query)*

*Defined in [compiler.ts:26](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`queryContext` | [SearchQueryContext](_search_.searchquerycontext.md) |

**Returns:** *[Query](../modules/_search_.md#query)*

___

### `Private` getFilteredQuery

▸ **getFilteredQuery**(`queryContext`: [SearchQueryContext](_search_.searchquerycontext.md)): *[QueryOverride](../modules/_search_.md#queryoverride)*

*Defined in [compiler.ts:84](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`queryContext` | [SearchQueryContext](_search_.searchquerycontext.md) |

**Returns:** *[QueryOverride](../modules/_search_.md#queryoverride)*

___

### `Private` getQuery

▸ **getQuery**(`queryContext`: [SearchQueryContext](_search_.searchquerycontext.md)): *[QueryOverride](../modules/_search_.md#queryoverride)*

*Defined in [compiler.ts:81](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`queryContext` | [SearchQueryContext](_search_.searchquerycontext.md) |

**Returns:** *[QueryOverride](../modules/_search_.md#queryoverride)*

___

### `Private` visit

▸ **visit**(`expression`: any): *any*

*Defined in [compiler.ts:30](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | any |

**Returns:** *any*

___

### `Private` visitAgg

▸ **visitAgg**(`agg`: [AggExpression](_agg_.aggexpression.md)): *any*

*Defined in [compiler.ts:192](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`agg` | [AggExpression](_agg_.aggexpression.md) |

**Returns:** *any*

___

### `Private` visitArray

▸ **visitArray**(`expression`: any[]): *any*

*Defined in [compiler.ts:181](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | any[] |

**Returns:** *any*

___

### `Private` visitBucketAgg

▸ **visitBucketAgg**(`agg`: [BucketAgg](_agg_.bucketagg.md)): *any*

*Defined in [compiler.ts:198](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L198)*

**Parameters:**

Name | Type |
------ | ------ |
`agg` | [BucketAgg](_agg_.bucketagg.md) |

**Returns:** *any*

___

### `Private` visitField

▸ **visitField**(`field`: [Field](_document_.field.md)): *any*

*Defined in [compiler.ts:173](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [Field](_document_.field.md) |

**Returns:** *any*

___

### `Private` visitFieldQuery

▸ **visitFieldQuery**(`expression`: [FieldQueryExpression](_expression_.fieldqueryexpression.md)): *any*

*Defined in [compiler.ts:134](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [FieldQueryExpression](_expression_.fieldqueryexpression.md) |

**Returns:** *any*

___

### `Private` visitFilterAgg

▸ **visitFilterAgg**(`agg`: [Filter](_agg_.filter.md)): *any*

*Defined in [compiler.ts:208](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`agg` | [Filter](_agg_.filter.md) |

**Returns:** *any*

___

### `Private` visitLiteral

▸ **visitLiteral**(`expression`: [Literal](_expression_.literal.md)): *any*

*Defined in [compiler.ts:177](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [Literal](_expression_.literal.md) |

**Returns:** *any*

___

### `Private` visitObject

▸ **visitObject**(`expression`: object): *any*

*Defined in [compiler.ts:185](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | object |

**Returns:** *any*

___

### `Private` visitParams

▸ **visitParams**(`params`: [Params](_expression_.params.md)): *any*

*Defined in [compiler.ts:165](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [Params](_expression_.params.md) |

**Returns:** *any*

___

### `Private` visitQueryExpression

▸ **visitQueryExpression**(`expression`: [QueryExpression](_expression_.queryexpression.md)): *any*

*Defined in [compiler.ts:128](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [QueryExpression](_expression_.queryexpression.md) |

**Returns:** *any*

___

### `Private` visitRange

▸ **visitRange**(`expr`: [RangeExpr](_expression_.rangeexpr.md)): *any*

*Defined in [compiler.ts:214](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [RangeExpr](_expression_.rangeexpr.md) |

**Returns:** *any*

___

### `Private` visitSearchQueryContext

▸ **visitSearchQueryContext**(`queryContext`: [SearchQueryContext](_search_.searchquerycontext.md)): *[Query](../modules/_search_.md#query)*

*Defined in [compiler.ts:104](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L104)*

This is where we start building our query

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryContext` | [SearchQueryContext](_search_.searchquerycontext.md) |   |

**Returns:** *[Query](../modules/_search_.md#query)*

___

### `Private` visitSort

▸ **visitSort**(`expr`: [Sort](_expression_.sort.md)): *any*

*Defined in [compiler.ts:227](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L227)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [Sort](_expression_.sort.md) |

**Returns:** *any*

___

### `Private` visitSource

▸ **visitSource**(`expr`: [Source](_expression_.source.md)): *any*

*Defined in [compiler.ts:244](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L244)*

**Parameters:**

Name | Type |
------ | ------ |
`expr` | [Source](_expression_.source.md) |

**Returns:** *any*

___

### `Private` visitTerm

▸ **visitTerm**(`term`: [Term](_expression_.term.md)): *any*

*Defined in [compiler.ts:153](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`term` | [Term](_expression_.term.md) |

**Returns:** *any*

___

### `Private` visitTerms

▸ **visitTerms**(`expression`: [Terms](_expression_.terms.md)): *any*

*Defined in [compiler.ts:157](https://github.com/kindritskyiMax/elasticmagic-js/blob/c9215ce/src/compiler.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [Terms](_expression_.terms.md) |

**Returns:** *any*
