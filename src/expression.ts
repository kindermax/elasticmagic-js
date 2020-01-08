import { DocClass, Field } from './document';
import { Dictionary, Nullable } from './types';
import { cleanParams, collectDocClasses, uniqueArray } from './util';

// TODO maybe generic type with restrictions
export type TermValue =
  | number
  | string
  | boolean;
export type TermField = Dictionary<string, TermValue>;

// TODO make Expression an interface
export class Expression {
  public readonly visitName!: string;
  public readonly queryName!: string;
  public readonly queryKey!: string;

  public collectDocClasses(): Readonly<DocClass[]> {
    return [];
  }
}

export type ParamsType = Dictionary<any, any>;

export type ParamKV = [string, any];

export class Params extends Expression {
  public visitName = 'params';
  private params: ParamsType = {}; // TODO maybe change this to Map
  private paramsKvList: ParamKV[];

  constructor(params?: Nullable<ParamsType>) {
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
  public visitName = 'literal';

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
  public visitName = 'queryExpression';
}

export class FieldExpression extends QueryExpression {
  public visitName = 'fieldExpression';

  constructor(public field: Field, params?: Dictionary<any, any>) {
    super(params);
  }

  public collectDocClasses(): Readonly<DocClass[]> {
    return uniqueArray(super.collectDocClasses().concat(collectDocClasses(this.field)));
  }
}

export type FieldQueryValue =
  | string
  | number
  | boolean
  | null;

export class FieldQueryExpression extends FieldExpression {
  public visitName = 'fieldQuery';
  public queryKey = 'query';

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
  public visitName = 'term';
  public queryName = 'term';
  public queryKey = 'value';

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
  public visitName = 'terms';

  constructor(
    field: Field,
    public terms: TermValue[],
    termsOptions?: TermsOptions,
  ) {
    super(field, termsOptions);
  }
}

type ISOString = string;
export type RangeValue = number | string | Date | ISOString;

type RangeOptions = {
  gte?: RangeValue;
  lte?: RangeValue;
  gt?: RangeValue;
  lt?: RangeValue;
  from?: RangeValue;
  to?: RangeValue;
  include_lower?: boolean;
  include_upper?: boolean;
};

type RangeSettings = {
  execution?: any;
  name?: string;
  cache?: string;
  cacheKey?: string; // TOD maybe make kwargs
};

export class RangeExpr extends FieldExpression {
  public visitName = 'range';
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
  public queryName = 'bool';

  constructor(options: BoolOptions) {
    super(options);
  }

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

export type SortOpts = {
  mode?: any;
  missing?: any;
  nested_path?: any;
  nested_filter?: any;
  ignore_unmapped?: any;
};
export class Sort extends QueryExpression {
  public visitName = 'sort';

  constructor(
    public field: Field,
    public order: 'asc' | 'desc',
    opts?: SortOpts,
  ) {
    super(opts);
  }

  public collectDocClasses(): Readonly<DocClass[]> {
    return uniqueArray(super.collectDocClasses().concat(collectDocClasses(this.field)));
  }
}

// TODO add Exists, Missing, Limit, Sort, Not, Ids, Script, Match, HasChild, HasParent
