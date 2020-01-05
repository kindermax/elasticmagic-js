import { ParamsType } from "./expression";

export function arrayKVToDict(array: any[][]): object {
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
  if (!params) return {};

  return Object.entries<ParamsType>(params)
    .reduce((acc: any, [key, val]: any) => {
      if (val !== null && val !== undefined) {
        acc[key] = val;
      }
      return acc;
    }, {} as ParamsType);
}
  


// TODO maybe rewrite all to Map. Could it be slow ??
export function isObject(value: any): boolean {
  const isObjectLike = typeof value === 'object' && value !== null;
  
  let tag = null;

  if (value == null) {
    tag = value === undefined ? '[object Undefined]' : '[object Null]';
  } else {
    tag = toString.call(value);
  }

  if (!isObjectLike || tag != '[object Object]') {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}