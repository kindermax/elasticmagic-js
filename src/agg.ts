import { ParamsExpression, ParamsType, Params, Expression } from "./expression";
import { isObject } from "./util";
import { Field, FieldType } from "./document";
import { KVList, Agg, AggBucket, Dictionary } from "./types";

type BucketKey = string | number;

class Bucket {
  // TODO figure out _typed_key

  public key: BucketKey;
  public docCount: number;
  public aggregations: Dictionary<string, AggResult> =  {};

  constructor(
    rawData: any,
    aggExpr: BucketAgg,
    private parent: any,
    docClsMap: any,
    mapperRegistry: any,
  ) {
    this.key = rawData.key; // TODO check if has property
    this.docCount = rawData.doc_count;

    aggExpr._aggregations.getParamsKvList().forEach((agg) => {
      const aggName: string = agg[0]
      const aggExpr: BucketAgg = agg[1];

      this.aggregations[aggName] = aggExpr.buildAggResult(
        rawData[aggName],
        docClsMap,
        mapperRegistry,
      );;
    });
  }

  public getAggregation(name: string): AggResult {
    return this.aggregations[name];
  }

  public toString(): string {
    return `${this.constructor.name}({ key: ${this.key}, docCount: ${this.docCount} })`;
  }
}


export class AggResult {
  public buckets: Bucket[] = [];
  public docCount: number = 0;
  constructor(public expr: BucketAgg) {}
}

export class AggExpression extends ParamsExpression {
  public _visitName = 'agg';
  public _aggName: any; // TODO hack so compiler sees this field for generic type

  public buildAggResult(_rawData: any, _docClsMap: any = null, _mapperRegistry: any = null) {
    throw new Error('AggExpression: buildAggResult not implemented');
  }
}

export class BucketAgg extends AggExpression {
  public _visitName = 'bucketAgg';
  public _aggName: any; // TODO hack so compiler sees this field for generic type

  public _aggregations: Params;
  
  // TODO here must be interfact for resultClass, but in typescript it is hard to reason abount how to do this properly
  constructor(aggs: any, params: ParamsType, private resultClass: any) { 
    super(params);
    // TODO kwargs.pop('aggregations', {})
    this._aggregations = new Params(aggs);
  }

  public buildAggResult(rawData: Agg, docClsMap: any = null, mapperRegistry: any = null): AggResult {
    return new this.resultClass(this, rawData, docClsMap, mapperRegistry);
  }
}

function sortByKey(collection: object): Array<KVList<string>> {
  return Object.entries(collection).sort((a, b) => {
    const [keyA] = a;
    const [keyB] = b;
    return keyA.localeCompare(keyB);
  });
}

class SingleBucketAggResult extends AggResult {
  public buckets: any = [];
  public docCount: number = 0;
  public aggregations: any = {};

  constructor(
    aggExpr: BucketAgg,
    rawData: any,
    docClsMap: any,
    mapperRegistry: any,
  ) {
    super(aggExpr);
    
    this.docCount = rawData.doc_count;

    aggExpr._aggregations.getParamsKvList().forEach((agg) => {
      const aggName: string = agg[0]
      const aggExpr: BucketAgg = agg[1];
      this.aggregations[aggName] = aggExpr.buildAggResult(
        rawData[aggName],
        docClsMap,
        mapperRegistry,
      );;
    });
  }

  public getAggregation(name: string): any {
    return this.aggregations[name];
  }
}

export class MultiBucketAggResult extends AggResult {
  private bucketClass: any = Bucket
  public buckets: any = [];
  private bucketsMap: any = {};
  private mapperRegistry: any = {};

  constructor(
    aggExpr: BucketAgg,
    rawData: any,
    docClsMap: any,
    mapperRegistry: any,
    private instanceMapper: any,
  ) {
    super(aggExpr);
    
    let rawBuckets = rawData.buckets || [];
    if (isObject(rawBuckets)) {
      const rawBucketsMap = rawBuckets;
      rawBuckets = sortByKey(rawBucketsMap).map(([key, rawBucket]) => {
        if (!('key' in rawBucket)) {
          rawBucket.key = key;
        }
        return rawBucket;
      });
    }

    rawBuckets.forEach((rawBucket: AggBucket) => {
      const bucket = new this.bucketClass(
        rawBucket,
        aggExpr,
        this,
        docClsMap,
        mapperRegistry,
      );
      this.addBucket(bucket);
    });

    if (mapperRegistry) {
      this.mapperRegistry = mapperRegistry;
    }

    if (this.instanceMapper) {
      if (!(this.instanceMapper in this.mapperRegistry)) {
        this.mapperRegistry[this.mapperRegistry] = [];
      }
      this.mapperRegistry[this.mapperRegistry].push(this);
    }
  }

  public addBucket(bucket: any) {
    this.buckets.push(bucket);
    if (bucket.key) {
      this.bucketsMap[bucket.key] = bucket;
    }
  }

  public getBucket(key: any) {
    return this.bucketsMap[key];
  }

  // TODO def _populate_instances

}

export class SingleBucketAgg extends BucketAgg {
  public _aggName: any; // TODO hack so compiler sees this field for generic type

  constructor(
    aggs: any,
    params: any, // TODO probably not appropriate type as MultiBucketAgg is parent class, replace with more generic
  ) {
    super(aggs, params, SingleBucketAggResult);
  }
}

export class MultiBucketAgg extends BucketAgg {
  public _aggName: any; // TODO hack so compiler sees this field for generic type

  constructor(
    aggs: any,
    params: TermsOptionsShrink, // TODO probably not appropriate type as MultiBucketAgg is parent class, replace with more generic
    private type?: FieldType,
    protected instanceMapper?: any,
  ) {
    super(aggs, params, MultiBucketAggResult);
  }

  public buildAggResult(rawData: any, docClsMap: any = null, mapperRegistry: any = null): MultiBucketAggResult {
    return new MultiBucketAggResult(this, rawData, docClsMap, mapperRegistry, this.instanceMapper);
  }
}

type TermsOptions = {
  field?: Field;
  script?: any;
  size?: number;
  type?: FieldType;
  aggs?: {
    [agg: string]: Filter
  };
  instanceMapper?: any;
};

type TermsOptionsShrink = { // TODO not nice hack to differ types
  field?: Field;
  script?: any;
  size?: number;
};

function getType(type: any, field: any): any {
  return type || (field ? field.getType() : null);
};

export class Terms extends MultiBucketAgg {
  public _aggName = 'terms';

  constructor({ field, type, aggs, instanceMapper, ...opts }: TermsOptions) {
    super(
      aggs,
      { field, ...opts },
      getType(type, field),
      instanceMapper,
    );

    this.instanceMapper = instanceMapper;
  }
}

type FilterOptions = {
  filter: Expression;
  aggs?: {
    [agg: string]: Filter
  };
};


export class Filter extends SingleBucketAgg {
  public _visitName = 'filterAgg';
  public _aggName = 'filter';

  public filter: Expression;
  constructor({ filter, aggs, ...opts }: FilterOptions) {
    super(aggs, opts);

    this.filter = filter;

  }
}