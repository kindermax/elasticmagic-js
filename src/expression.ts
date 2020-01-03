import { Field } from "./document";

// TODO must be generic type with restrictions
export type TermValue = number | string | boolean;
export type TermField = {
  [field: string]: TermValue
}


// TODo this must be interface ???
export class Expression {
  public _visitName: string = 'notDefined_visitName';
  public _queryName: string = 'notDefined_queryName';
  public _queryKey: string = 'notDefined_queryKey';
}

type BoolOptions = {
  must?: any;
  filter?: any; // Bool can be here
  must_not?: any; // TODO snake or camel case ???
  should?: any;
  mininum_should_match?: any;
  boost?: any;
  disable_coord?: any;
};

type ParamsType = {
  [key: string]: any // TODO maybe some type
}; 

/**
   * TODO add tests
   * Filter keys having null or undefined values
   */
function cleanParams(params: ParamsType): ParamsType {
  if (!params) return params;

  return Object.entries<ParamsType>(params)
    .reduce((acc: any, [key, val]: any) => {
      if (val !== null && val !== undefined) {
        acc[key] = val;
      }
      return acc;
    }, {} as ParamsType);
}

type ParamKV = [string, any];

export class Params extends Expression {
  public _visitName = 'params';
  private params: ParamsType;
  private paramsKvList: Array<ParamKV>;

  // private pointer = 0;

  constructor(params: ParamsType) {
    super();
      this.params = cleanParams(params);
      this.paramsKvList = this.params ? Object.entries(this.params) : [];
  }

  public getParamsKvList() {
    return this.paramsKvList;
  }

  public getParams() {
    return this.params;
  }

  get length() {
    return this.paramsKvList.length;
  }

}

export class Literal extends Expression {
  public _visitName = 'literal';

  constructor(public obj: any) {
    super();
  }
}

export class ParamsExpression extends Expression {
  public params: Params;

  constructor(params: any) {
    super();
    this.params = new Params(params)
  }
}

export class QueryExpression extends ParamsExpression {
  public _visitName = 'queryExpression';
}

export class FieldExpression extends QueryExpression {
  public _visitName = 'fieldExpression';

  // TODO maybe later it will be FieldType but for now it simple string
  public field: Expression;

  // TODO field is an AttributeField, OrderedAttributes
  constructor(field: Field, params: any) {
    super(params); // TODO pass null or field ???
    this.field = this.wrapLiteral(field);
  }

  private wrapLiteral(field: Field): Expression {
    if (field instanceof Expression) {
      return field;
    }
    return new Literal(field)
  }
}

export class FieldQueryExpression extends FieldExpression {
  public _visitName = 'fieldQuery';
  public _queryKey = 'query';

  constructor(field: Field, public query: any) {
    super(field, null);
  }
}

export class Term extends FieldQueryExpression {
  public _visitName = 'term';
  public _queryName = 'term';
  public _queryKey = 'value';

  constructor(
    field: Field, // TODO possibly a cyclic import
    term: TermValue // value
  ) {
    super(field, term);
  }
}

export class Terms extends FieldExpression {
  public _visitName = 'terms';

  constructor(
    field: Field,
    public terms: TermValue[]
  ) {
    super(field, {
      mininum_should_match: null,
      boost: null
    }); // TODO this fields must be passed from Terms
  }
}

// TODO must extend QueryExpression
export class Bool extends QueryExpression {
  public _queryName = 'bool';

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
