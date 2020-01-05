export type Dictionary<T1 extends string | number, T2 = any> = {
  [key in T1]: T2 
};
export type KVList<T1, T2 = any> = [T1, T2];

export type PlainObject = { [name: string]: any }

export function isPlainObject(obj: any): obj is PlainObject {
  return obj && obj.constructor === Object || false;
}


// TODO add generic type for fields behind s_ource
export type Hit<T = any> = {
  _id: string;
  _index?: string;
  _routing?: string;
  _score?: number;
  _type?: string;
  _source: T;
}

// TODo not sure if we need this fields in type
type AggOpts = {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
};

export type BucketAgg = {
  [key: string]: Agg
}

type AggBucketChild = {
  [key: string]: {
    doc_count: number;
  } & AggBucketChild
};

export type AggBucket = {
  key: any;
  doc_count: number;
} & AggBucketChild;

export type Agg = {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: Array<AggBucket>
} & AggOpts;
type Aggs = {
  [key: string]: Agg
};

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
  aggregations?: Aggs;
}

// TODO this is a temp type, must be replaces with user type after functionality done and tested
type Source = {
  [key: string]: any;
}

export type RawResultBody<T = Source> = SearchResponseBody<T>;