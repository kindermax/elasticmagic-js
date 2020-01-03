import { Terms, Term, Bool, Expression, TermValue } from "./expression";

export class FieldType {

}

export class Integer extends FieldType {

}


export class Field extends Expression {
  public _visitName = 'field';
  
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
}

export class Document {}