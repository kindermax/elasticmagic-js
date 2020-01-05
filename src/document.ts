import { Terms, Term, Bool, Expression, TermValue } from "./expression";

export class FieldType {

}

export class Integer extends FieldType {

}


export class Field extends Expression {
  public readonly _visitName = 'field';
  
  constructor(
    private type: FieldType,
    public name: string,
  ){
    super();
  }

  public in_(terms: TermValue[]): Terms {
    return new Terms(this, terms);
  }

  public not_(term: TermValue): Bool {
    return Bool.mustNot(new Term(this, term));
  }

  public getType(): FieldType {
    return this.type;
  }
}

export interface IDocument {
  _docType: string;
  new (): Document;
}

// TODO maybe decorator can be used as an alternative to metaclass
// https://github.com/Microsoft/TypeScript/issues/17454
export class Document {
  public static readonly _docType: string;
  constructor() {};
}