import { ParamsType, Expression, FieldQueryValue } from "./expression";
import { DocClass } from "./document";

export function arrayKVToDict<T = any>(array: any[][]): T {
  return array.reduce((acc: any, [key, val]) => {
    acc[key] = val;
    return acc;
  }, {});
}

/**
 * TODO add tests
 * Filter keys having null or undefined values
 */
export function cleanParams(params?: ParamsType): ParamsType {
  if (!params) { return {}; }

  return Object.entries<ParamsType>(params)
    .reduce((acc: any, [key, val]: any) => {
      if (val !== null && val !== undefined) {
        acc[key] = val;
      }
      return acc;
    }, {} as ParamsType);
}

export function isArray<T>(x: any): x is T[] {
  return Array.isArray(x) && typeof x.length === 'number';
}

export function isString(x: any): x is string {
  return typeof x === 'string';
}

export function isObject(x: any): x is object {
  return x && typeof x === 'object' && x.constructor === Object;
}

export function isExpression(x: any): x is Expression {
  return x instanceof Expression;
}

export function uniqueArray<T = any>(items: T[]): T[] {
  return Array.from(new Set(items));
}
export function collectDocClasses(
  expr: Expression | Expression[] | ParamsType | FieldQueryValue,
): Readonly<DocClass[]> {
  if (isExpression(expr)) {
    return expr.collectDocClasses();
  }

  if (isArray(expr)) {
    return uniqueArray(expr.flatMap((item) => collectDocClasses(item)));
  }

  if (isObject(expr)) {
    const kvListChain = Object.keys(expr).concat(Object.values(expr));
    return uniqueArray(kvListChain.flatMap((item) => collectDocClasses(item)));
  }
  return [];
}
