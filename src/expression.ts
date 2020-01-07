import { Field, DocClass } from "./document";
import { Dictionary, Nullable } from "./types";
import { cleanParams, collectDocClasses, uniqueArray } from "./util";

// TODO must be generic type with restrictions
export type TermValue =
  | number
  | string
  | boolean;
export type TermField = Dictionary<string, TermValue>;

// TODo this must be interface ???
export class Expression {
  /**
   * TODO hack, is there some way to not init this fields ? interface ?
   */
  public readonly visitName: string = "notDefined";
  public readonly queryName: string = "notDefined";
  public readonly queryKey: string = "notDefined";

  public collectDocClasses(): Readonly<DocClass[]> {
    return [];
  }
}

export type ParamsType = Dictionary<any, any>;

export type ParamKV = [string, any];

export class Params extends Expression {
  public visitName = "params";
  private params: ParamsType; // TODO maybe change this to Map
  private paramsKvList: ParamKV[];

  constructor(params?: ParamsType) {
    super();
    this.params = cleanParams(params);
    this.paramsKvList = this.params ? Object.entries(this.params) : [];
  }

  public getParamsKvList(): ParamKV[] {
    return this.paramsKvList;
  }

  public getParams(): ParamsType {
    return this.params;
  }

  public collectDocClasses(): Readonly<DocClass[]> {
    return collectDocClasses(this.params);
  }

  get length(): number {
    return this.paramsKvList.length;
  }

}

export class Literal extends Expression {
  public visitName = "literal";

  constructor(public obj: any) {
    super();
  }
}

export class ParamsExpression extends Expression {
  public params: Params;

  constructor(params?: Dictionary<any, any>) {
    super();
    this.params = new Params(params);
  }

  public collectDocClasses(): Readonly<DocClass[]> {
    return collectDocClasses(this.params);
  }
}

export class QueryExpression extends ParamsExpression {
  public visitName = "queryExpression";
}

export class FieldExpression extends QueryExpression {
  public visitName = "fieldExpression";

  // TODO maybe later it will be Field but for now it Expression
  public field: Expression;

  // TODO field is an AttributeField, OrderedAttributes
  constructor(field: Field, params?: Dictionary<any, any>) {
    super(params); // TODO pass null or field ???
    this.field = this.wrapLiteral(field);
  }

  private wrapLiteral(field: Field): Expression {
    if (field instanceof Expression) {
      return field;
    }
    return new Literal(field);
  }

  public collectDocClasses(): Readonly<DocClass[]> {
    const parentClasses = super.collectDocClasses();
    const ownClasses = collectDocClasses(this.field);
    return uniqueArray(parentClasses.concat(ownClasses));
  }
}

export type FieldQueryValue =
  | string
  | number
  | boolean
  | null;

export class FieldQueryExpression extends FieldExpression {
  public visitName = "fieldQuery";
  public queryKey = "query";

  constructor(field: Field, public query: FieldQueryValue) {
    super(field, {});
  }

  public collectDocClasses(): Readonly<DocClass[]> {
    const parentClasses = super.collectDocClasses();
    const ownClasses = collectDocClasses(this.query);
    return uniqueArray(parentClasses.concat(ownClasses));
  }
}

export class Term extends FieldQueryExpression {
  public visitName = "term";
  public queryName = "term";
  public queryKey = "value";

  constructor(
    field: Field,
    term: TermValue,
  ) {
    super(field, term);
  }
}

type TermsOptions = {
  mininum_should_match?: any;
  boost?: any;
};

export class Terms extends FieldExpression {
  public visitName = "terms";

  constructor(
    field: Field,
    public terms: TermValue[],
    termsOptions?: TermsOptions,
  ) {
    super(field, termsOptions);
  }
}

// TODO is type correct, for date?
export type RangeValue = number | string | Date;

type RangeOptions = {
  gte?: RangeValue;
  lte?: RangeValue;
  gt?: RangeValue;
  lt?: RangeValue;
  from?: RangeValue;
  to?: RangeValue;
  includeLower?: boolean;
  includeUpper?: boolean;
};

type RangeSettings = {
  execution?: any;
  name?: string;
  cache?: string;
  cacheKey?: string; // TOD maybe make kwargs
};

export class RangeExpr extends FieldExpression {
  public visitName = "range";
  public rangeParams: Params = new Params();

  constructor(
    field: Field,
    rangeOpts: RangeOptions,
    rangeSettings?: RangeSettings,
  ) {
    super(field, rangeOpts);
    this.rangeParams = new Params(rangeSettings);
  }
}

type BoolOptions = {
  must?: Nullable<Expression[]>;
  filter?: Nullable<Expression[]>;
  must_not?: Nullable<Expression[]>;
  should?: Nullable<Expression[]>;
  mininum_should_match?: any; // TODO finish this props
  boost?: any;
  disable_coord?: any;
};

export class Bool extends QueryExpression {
  public queryName = "bool";

  constructor(options: BoolOptions) {
    super(options);
  }

  // TODO make it clear what Expression to return
  public static must(...expressions: Expression[]): Expression {
    if (expressions.length === 1) {
      return expressions[0];
    }
    return new Bool({ must: expressions });
  }

  public static mustNot(...expressions: Expression[]): Bool {
    return new Bool({ must_not: expressions });
  }

  public static should(...expressions: Expression[]): Expression {
    if (expressions.length === 1) {
      return expressions[0];
    }
    return new Bool({ should: expressions });
  }
}

// TODO add Exists, Missing, Limit, Sort, Not, Ids, Script, Match, HasChild, HasParent
