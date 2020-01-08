export type Nullable<T> = T | null | undefined;

export type Dictionary<T1 extends string | number, T2 = any> = {
  [key in T1]: T2
};
export type KVList<T1, T2 = any> = [T1, T2];

export type PlainObject = { [name: string]: any };

export function isPlainObject(obj: any): obj is PlainObject {
  return obj && obj.constructor === Object || false;
}

// TODO add generic type for fields behind _source
export type Hit<T = any> = {
  _id: string;
  _index?: string;
  _routing?: string;
  _score?: number;
  _type?: string;
  _source?: T;
  fields?: PlainObject;
};

type BucketFields = { doc_count: number; };

export type RawAggBucketChild = Dictionary<string, BucketFields | Dictionary<string, BucketFields>>;

export type RawAggBucket = {
  key: any;
  doc_count: number;
} & RawAggBucketChild; // TODO can be rewriten with ts utility types such as Pick, Exclude, Extract

export type RawAgg = {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: RawAggBucket[]
};
type RawAggs = Dictionary<string, RawAgg>;

type SearchResponseBody<T> = {
  error?: string;
  took: number;
  timed_out: boolean;
  _scroll_id?: number;
  _shards: {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
  };
  hits: {
    total: number;
    max_score: number;
    hits: Array<Hit<T>>
  },
  aggregations?: RawAggs;
};

export type RawResultBody<T = PlainObject> = SearchResponseBody<T>;
