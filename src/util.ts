import { DocClass } from './document';
import { Expression, FieldQueryValue, Params, ParamsType } from './expression';
import { Nullable } from './types';

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
export function cleanParams(params?: Nullable<ParamsType>): ParamsType {
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

export function isBoolean(x: any): x is boolean {
  return typeof x === 'boolean';
}

export function isObject(x: any): x is object {
  return x && typeof x === 'object' && x.constructor === Object;
}

export function isExpression(x: any): x is Expression {
  return x instanceof Expression;
}

export function isNullOrUndef(x: any): x is null | undefined {
  return x === null || x === undefined;
}

export function uniqueArray<T = any>(items: T[]): T[] {
  return Array.from(new Set(items));
}
export function collectDocClasses(
  expr?: Expression | Expression[] | ParamsType | FieldQueryValue,
): Readonly<DocClass[]> {
  if (isExpression(expr)) {
    return expr.collectDocClasses();
  }

  if (isArray(expr)) {
    return uniqueArray(flatMap((item) => collectDocClasses(item), expr));
  }

  if (isObject(expr)) {
    const kvListChain = Object.keys(expr).concat(Object.values(expr));
    return uniqueArray(flatMap((item) => collectDocClasses(item), kvListChain));
  }
  return [];
}

export function mergeParams(currentParams: Params, newParams: Params): Params {
  return new Params({ ...currentParams.getParams(), ...newParams.getParams() });
}

export function flatMap(f: (arg: any) => any, arr: any[]): any[] {
  return arr.reduce((x, y) => [...x, ...f(y)], []);
}

export function mustClean(arg: any[] | Nullable): boolean {
  if (isBoolean(arg)) {
    return false;
  }
  if (isObject(arg) && Object.keys(arg).length === 0) {
    return true;
  }
  if (isArray(arg) && arg.length === 1) {
    return isNullOrUndef(arg[0]);
  }
  if (isArray(arg) && arg.length === 0) {
    return true;
  }
  return isNullOrUndef(arg) ? true : false;
}
