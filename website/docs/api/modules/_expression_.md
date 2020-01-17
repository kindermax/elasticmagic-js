---
id: "_expression_"
title: "expression"
sidebar_label: "expression"
---

## Index

### Classes

* [Bool](../classes/_expression_.bool.md)
* [Expression](../classes/_expression_.expression.md)
* [FieldExpression](../classes/_expression_.fieldexpression.md)
* [FieldQueryExpression](../classes/_expression_.fieldqueryexpression.md)
* [Literal](../classes/_expression_.literal.md)
* [Params](../classes/_expression_.params.md)
* [ParamsExpression](../classes/_expression_.paramsexpression.md)
* [QueryExpression](../classes/_expression_.queryexpression.md)
* [RangeExpr](../classes/_expression_.rangeexpr.md)
* [Sort](../classes/_expression_.sort.md)
* [Source](../classes/_expression_.source.md)
* [Term](../classes/_expression_.term.md)
* [Terms](../classes/_expression_.terms.md)

### Type aliases

* [BoolOptions](_expression_.md#booloptions)
* [FieldQueryValue](_expression_.md#fieldqueryvalue)
* [ISOString](_expression_.md#isostring)
* [ParamKV](_expression_.md#paramkv)
* [ParamsType](_expression_.md#paramstype)
* [RangeOptions](_expression_.md#rangeoptions)
* [RangeSettings](_expression_.md#rangesettings)
* [RangeValue](_expression_.md#rangevalue)
* [SortOpts](_expression_.md#sortopts)
* [SourceField](_expression_.md#sourcefield)
* [TermField](_expression_.md#termfield)
* [TermValue](_expression_.md#termvalue)
* [TermsOptions](_expression_.md#termsoptions)

## Type aliases

###  BoolOptions

Ƭ **BoolOptions**: *object*

*Defined in [expression.ts:200](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L200)*

#### Type declaration:

* **boost**? : *any*

* **disable_coord**? : *any*

* **filter**? : *[Nullable](_types_.md#nullable)‹[Expression](../classes/_expression_.expression.md)[]› | [Expression](../classes/_expression_.expression.md)*

* **mininum_should_match**? : *any*

* **must**? : *[Nullable](_types_.md#nullable)‹[Expression](../classes/_expression_.expression.md)[]›*

* **must_not**? : *[Nullable](_types_.md#nullable)‹[Expression](../classes/_expression_.expression.md)[]›*

* **should**? : *[Nullable](_types_.md#nullable)‹[Expression](../classes/_expression_.expression.md)[]›*

___

###  FieldQueryValue

Ƭ **FieldQueryValue**: *string | number | boolean | null*

*Defined in [expression.ts:114](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L114)*

___

###  ISOString

Ƭ **ISOString**: *string*

*Defined in [expression.ts:165](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L165)*

___

###  ParamKV

Ƭ **ParamKV**: *[string, any]*

*Defined in [expression.ts:25](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L25)*

___

###  ParamsType

Ƭ **ParamsType**: *[Dictionary](_types_.md#dictionary)‹any, any›*

*Defined in [expression.ts:23](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L23)*

___

###  RangeOptions

Ƭ **RangeOptions**: *object*

*Defined in [expression.ts:168](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L168)*

#### Type declaration:

* **from**? : *[RangeValue](_expression_.md#rangevalue)*

* **gt**? : *[RangeValue](_expression_.md#rangevalue)*

* **gte**? : *[RangeValue](_expression_.md#rangevalue)*

* **include_lower**? : *undefined | false | true*

* **include_upper**? : *undefined | false | true*

* **lt**? : *[RangeValue](_expression_.md#rangevalue)*

* **lte**? : *[RangeValue](_expression_.md#rangevalue)*

* **to**? : *[RangeValue](_expression_.md#rangevalue)*

___

###  RangeSettings

Ƭ **RangeSettings**: *object*

*Defined in [expression.ts:179](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L179)*

#### Type declaration:

* **cache**? : *undefined | string*

* **cacheKey**? : *undefined | string*

* **execution**? : *any*

* **name**? : *undefined | string*

___

###  RangeValue

Ƭ **RangeValue**: *number | string | Date | [ISOString](_expression_.md#isostring)*

*Defined in [expression.ts:166](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L166)*

___

###  SortOpts

Ƭ **SortOpts**: *object*

*Defined in [expression.ts:236](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L236)*

#### Type declaration:

* **ignore_unmapped**? : *any*

* **missing**? : *any*

* **mode**? : *any*

* **nested_filter**? : *any*

* **nested_path**? : *any*

___

###  SourceField

Ƭ **SourceField**: *boolean | string | [Field](../classes/_document_.field.md) | null*

*Defined in [expression.ts:77](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L77)*

___

###  TermField

Ƭ **TermField**: *[Dictionary](_types_.md#dictionary)‹string, [TermValue](_expression_.md#termvalue)›*

*Defined in [expression.ts:10](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L10)*

___

###  TermValue

Ƭ **TermValue**: *number | string | boolean*

*Defined in [expression.ts:6](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L6)*

___

###  TermsOptions

Ƭ **TermsOptions**: *object*

*Defined in [expression.ts:148](https://github.com/kindritskyiMax/elasticmagic-js/blob/34d4703/src/expression.ts#L148)*

#### Type declaration:

* **boost**? : *any*

* **mininum_should_match**? : *any*
