import { AggResult, BucketAgg } from "./agg";
import { Doc, IDocument } from "./document";
import { ParamKV, Params } from "./expression";
import { InstanceMapper } from "./query";
import { Dictionary, Hit, RawResultBody } from "./types";
import { arrayKVToDict } from "./util";

const DOC_TYPE_FIELD = "_doc_type";
const DOC_TYPE_NAME_FIELD = `${DOC_TYPE_FIELD}.name`;

function docClsMap(docCls: IDocument | IDocument[] | null | undefined): Dictionary<string, IDocument> {
  let docClasses: IDocument[] = [];
  if (!docCls) {
    docClasses = [];
  } else if (!Array.isArray(docCls)) {
    docClasses = [docCls];
  } else {
    docClasses = docCls;
  }
  return arrayKVToDict<Dictionary<string, IDocument>>(
    docClasses.map((cls) => [cls._docType, cls]),
  );
}

function getDocTypeForHit(hit: Hit): string {
  const fields = hit.fields || {};
  const customDocType = fields[DOC_TYPE_NAME_FIELD];
  return customDocType ? customDocType[0] : hit._type;
}

type InstanceMapperDict = Dictionary<string, InstanceMapper<IDocument, any>>;

function isInstanceMapperDict(arg: any): arg is InstanceMapperDict {
  return arg.constructor.name === "Object";
}

class Result {
  constructor(public raw: any) {}
}

export class SearchResult<T extends Doc, TRaw = any> extends Result {

  private queryAggs: Params = new Params();
  private docClsMap: Dictionary<string, IDocument> = {};
  private docClasses: IDocument[] = [];
  private instanceMappers: InstanceMapperDict = {};
  private mapperRegistry: any = {};

  public error: string | undefined;
  public took: number;
  public timedOut: boolean;
  public total: number;
  public maxScore: number;
  public hits: T[] = [];
  public aggregations: Dictionary<string, any> = {};
  public scrollId: number | undefined;

  constructor(
    rawResult: RawResultBody<TRaw>,
    aggregations: Params,
    docClass?: IDocument,
    instanceMapper?: InstanceMapper<IDocument, any> | InstanceMapperDict, // TODO pass types
  ) {
    super(rawResult);

    this.queryAggs = aggregations || new Params();
    this.docClsMap = docClsMap(docClass);
    this.docClasses = Object.values(this.docClsMap);

    if (instanceMapper) {
      if (isInstanceMapperDict(instanceMapper)) {
        this.instanceMappers = instanceMapper;
      } else {
        this.instanceMappers = arrayKVToDict<InstanceMapperDict>(
          this.docClasses.map((cls) => [cls._docType, instanceMapper]),
        );
      }
    }
    this.error = rawResult.error;
    this.took = rawResult.took;
    this.timedOut = rawResult.timed_out;

    const hits = rawResult.hits || {};
    this.total = hits.total;
    this.maxScore = hits.max_score;
    // TODO add type for hit: any
    hits.hits.forEach((hit: Hit) => {
      const docType = getDocTypeForHit(hit);
      const docCls = this.docClsMap[docType]; // TODO DynamicDocument

      // TODO below is a hack
      // the propblem is when having class type to create instance from it we need to know its type
      // but we have only interface
      // The solution unknown by now
      this.hits.push(new docCls({ hit, result: this }) as T);
    });

    this.queryAggs.getParamsKvList().forEach((agg: ParamKV) => {
      const aggName: string = agg[0];
      const aggExpr: BucketAgg = agg[1];

      const rawAggData = (rawResult.aggregations || {})[aggName];
      this.aggregations[aggName] = aggExpr.buildAggResult(
        rawAggData,
        this.docClsMap,
        this.mapperRegistry,
      );
    });

    this.scrollId = rawResult._scroll_id;
  }

  public getAggregation(name: string): AggResult {
    return this.aggregations[name];
  }
}
