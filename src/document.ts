import {
  Bool,
  Expression,
  RangeExpr,
  RangeValue,
  Sort,
  SortOpts,
  Term,
  Terms,
  TermValue,
} from './expression';
import { SearchResult } from './result';
import { Hit } from './types';

export class FieldType {}

export class IntegerType extends FieldType {}

export class BooleanType extends FieldType {}

export class DateType extends FieldType {}

export type FieldOpts = {
  name?: string;
  parent?: DocClass;
};

export class Field extends Expression {
  public readonly visitName = 'field';

  constructor(
    private type: FieldType,
    public readonly name: string,
    public readonly parent: DocClass,
  ) {
    super();
  }

  public in(terms: TermValue[]): Terms {
    return new Terms(this, terms);
  }

  public not(term: TermValue): Bool {
    return Bool.mustNot(new Term(this, term));
  }

  public eq(other: TermValue): Term {
    // TODO add if other is None: return self.missing()
    return new Term(this, other);
  }

  public lt(other: RangeValue): RangeExpr {
    return new RangeExpr(this, { lt: other });
  }

  public gt(other: RangeValue): RangeExpr {
    return new RangeExpr(this, { gt: other });
  }

  public lte(other: RangeValue): RangeExpr {
    return new RangeExpr(this, { lte: other });
  }

  public gte(other: RangeValue): RangeExpr {
    return new RangeExpr(this, { gte: other });
  }

  public asc(opts?: SortOpts): Sort {
    return new Sort(this, 'asc', opts);
  }

  public desc(opts?: SortOpts): Sort {
    return new Sort(this, 'desc', opts);
  }

  public getType(): FieldType {
    return this.type;
  }

  public collectDocClasses(): Readonly<DocClass[]> {
    return this.parent ? [this.parent] : [];
  }
}

type DocOpts = {
  hit: Hit;
  result: SearchResult<any>;
};

export class Doc {
  public static readonly docType: string;
  protected hit: Hit;
  protected result: SearchResult<any>;

  public _id: string;
  constructor(opts: DocOpts) {
    this.hit = opts.hit;
    this.result = opts.result;

    this._id = opts.hit._id;

    if (this.hit._source) {
      this.populateFromSource();
    }
  }

  public static getDocCls(): string {
    return this.docType;
  }

  private populateFromSource() {
    Object.entries(this.hit._source).forEach((hitKV) => {
      const fieldName: string = hitKV[0];
      const fieldValue = hitKV[1];
      const _this: any = this; // TODO well you should't see this
      _this[fieldName] = fieldValue;
    });
  }
}

export type DocClass = typeof Doc;
