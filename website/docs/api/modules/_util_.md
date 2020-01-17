---
id: "_util_"
title: "util"
sidebar_label: "util"
---

## Index

### Functions

* [arrayKVToDict](_util_.md#arraykvtodict)
* [cleanParams](_util_.md#cleanparams)
* [collectDocClasses](_util_.md#collectdocclasses)
* [flatMap](_util_.md#flatmap)
* [isArray](_util_.md#isarray)
* [isBoolean](_util_.md#isboolean)
* [isExpression](_util_.md#isexpression)
* [isNullOrUndef](_util_.md#isnullorundef)
* [isObject](_util_.md#isobject)
* [isString](_util_.md#isstring)
* [mergeParams](_util_.md#mergeparams)
* [mustClean](_util_.md#mustclean)
* [uniqueArray](_util_.md#uniquearray)

## Functions

###  arrayKVToDict

▸ **arrayKVToDict**<**T**>(`array`: any[][]): *T*

*Defined in [util.ts:5](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L5)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | any[][] |

**Returns:** *T*

___

###  cleanParams

▸ **cleanParams**(`params?`: [Nullable](_types_.md#nullable)‹[ParamsType](_expression_.md#paramstype)›): *[ParamsType](_expression_.md#paramstype)*

*Defined in [util.ts:16](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L16)*

TODO add tests
Filter keys having null or undefined values

**Parameters:**

Name | Type |
------ | ------ |
`params?` | [Nullable](_types_.md#nullable)‹[ParamsType](_expression_.md#paramstype)› |

**Returns:** *[ParamsType](_expression_.md#paramstype)*

___

###  collectDocClasses

▸ **collectDocClasses**(`expr?`: [Expression](../classes/_expression_.expression.md) | [Expression](../classes/_expression_.expression.md)[] | [ParamsType](_expression_.md#paramstype) | [FieldQueryValue](_expression_.md#fieldqueryvalue)): *Readonly‹[DocClass](_document_.md#docclass)[]›*

*Defined in [util.ts:55](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`expr?` | [Expression](../classes/_expression_.expression.md) &#124; [Expression](../classes/_expression_.expression.md)[] &#124; [ParamsType](_expression_.md#paramstype) &#124; [FieldQueryValue](_expression_.md#fieldqueryvalue) |

**Returns:** *Readonly‹[DocClass](_document_.md#docclass)[]›*

___

###  flatMap

▸ **flatMap**(`f`: function, `arr`: any[]): *any[]*

*Defined in [util.ts:77](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L77)*

**Parameters:**

▪ **f**: *function*

▸ (`arg`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | any |

▪ **arr**: *any[]*

**Returns:** *any[]*

___

###  isArray

▸ **isArray**<**T**>(`x`: any): *x is T[]*

*Defined in [util.ts:28](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L28)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is T[]*

___

###  isBoolean

▸ **isBoolean**(`x`: any): *x is boolean*

*Defined in [util.ts:36](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is boolean*

___

###  isExpression

▸ **isExpression**(`x`: any): *x is Expression*

*Defined in [util.ts:44](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is Expression*

___

###  isNullOrUndef

▸ **isNullOrUndef**(`x`: any): *x is null | undefined*

*Defined in [util.ts:48](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is null | undefined*

___

###  isObject

▸ **isObject**(`x`: any): *x is object*

*Defined in [util.ts:40](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is object*

___

###  isString

▸ **isString**(`x`: any): *x is string*

*Defined in [util.ts:32](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is string*

___

###  mergeParams

▸ **mergeParams**(`currentParams`: [Params](../classes/_expression_.params.md), `newParams`: [Params](../classes/_expression_.params.md)): *[Params](../classes/_expression_.params.md)*

*Defined in [util.ts:73](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`currentParams` | [Params](../classes/_expression_.params.md) |
`newParams` | [Params](../classes/_expression_.params.md) |

**Returns:** *[Params](../classes/_expression_.params.md)*

___

###  mustClean

▸ **mustClean**(`arg`: any[] | [Nullable](_types_.md#nullable)): *boolean*

*Defined in [util.ts:81](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | any[] &#124; [Nullable](_types_.md#nullable) |

**Returns:** *boolean*

___

###  uniqueArray

▸ **uniqueArray**<**T**>(`items`: T[]): *T[]*

*Defined in [util.ts:52](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/util.ts#L52)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`items` | T[] |

**Returns:** *T[]*
