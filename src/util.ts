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
  