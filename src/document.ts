import {
  Bool,
  Expression,
  RangeExpr,
  RangeValue,
  Term,
  Terms,
  TermValue,
} from './expression';
import { SearchResult } from './result';
import { Hit } from './types';
import { isString } from './util';

export class FieldType {}

export class IntegerType extends FieldType {}

export class BooleanType extends FieldType {}

export class DateType extends FieldType {}

export type FieldOpts = {
  name?: string;
  parent?: DocClass;
};

type FieldOptsArg = Required<Pick<FieldOpts, 'name'>> & { parent?: DocClass } | string;

export class Field extends Expression {
  public readonly visitName = 'field';
  public name!: string;
  public parent!: DocClass;

  constructor(
    private type: FieldType,
    fieldOpts: FieldOptsArg,
  ) {
    super();
    if (isString(fieldOpts)) {
      this.name = fieldOpts;
    } else {
      if (fieldOpts.name) {
        this.name = fieldOpts.name;
      }
      if (fieldOpts.parent) {
        this.parent = fieldOpts.parent;
      }
    }
  }

  public in_(terms: TermValue[]): Terms {
    return new Terms(this, terms);
  }

  public not_(term: TermValue): Bool {
    return Bool.mustNot(new Term(this, term));
  }

  public eq_(other: TermValue): Term {
    // TODO add if other is None: return self.missing()
    return new Term(this, other);
  }

  public lt_(other: RangeValue): RangeExpr {
    return new RangeExpr(this, { lt: other });
  }

  public gt_(other: RangeValue): RangeExpr {
    return new RangeExpr(this, { gt: other });
  }

  public lte_(other: RangeValue): RangeExpr {
    return new RangeExpr(this, { lte: other });
  }

  public gte_(other: RangeValue): RangeExpr {
    return new RangeExpr(this, { gte: other });
  }

  public getType(): FieldType {
    return this.type;
  }

  public collectDocClasses(): Readonly<DocClass[]> {
    return this.parent ? [this.parent] : [];
  }

  public setParent(parent: DocClass) {
    this.parent = parent;
  }
}

type DocOpts = {
  hit: Hit;
  result: SearchResult<any>;
};

// TODO maybe decorator can be used as an alternative to metaclass
// https://github.com/Microsoft/TypeScript/issues/17454
export class Doc {
  public static readonly docType: string;
  private hit: Hit;
  private result: SearchResult<any>;

  public _id: string | number;  // tslint:disable-line
  constructor(opts: DocOpts) {
    this.hit = opts.hit;
    this.result = opts.result;

    this._id = opts.hit._id;
  }

  /**
   * If instanceMapper was defined for query
   * then return instance mapped by instanceMapper
   * else return null;
   */
  public get instance(): any | null {
    return null;
  }

  public static getDocCls(): string {
    return this.docType;
  }
}

export type DocClass = typeof Doc;
