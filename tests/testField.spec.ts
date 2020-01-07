import { Field, IntegerType } from "../src/document";
import { Terms, Bool, Term, RangeExpr } from "../src/expression";
import { OrderDoc } from "./fixtures";


describe("Field", () => {
  test('accept name as 2 positional arg', () => {
    const field: Field = new Field(IntegerType, 'id');
    expect(field.name).toBe('id');
  });
  test('accept name in options', () => {
    const field: Field = new Field(IntegerType, { name: 'id' });
    expect(field.name).toBe('id');
  });

  test('accept parent in options', () => {
    const field: Field = new Field(IntegerType, { name: 'id', parent: OrderDoc });
    expect(field.parent).toBe(OrderDoc);
  });

  test('has in_ operator', () => {
    const field: Field = new Field(IntegerType, { name: 'id' });
    expect(field.in_([1,2,3])).toBeInstanceOf(Terms)
  });

  test('has not_ operator', () => {
    const field: Field = new Field(IntegerType, { name: 'id' });
    expect(field.not_(1)).toBeInstanceOf(Bool);
    expect(field.not_(1).params.length).toBe(1);
    expect(field.not_(1).params.getParams()).toStrictEqual({ 
      must_not: [
        new Term(field, 1)
      ]
    });
  });  

  test('has eq_ operator', () => {
    const field: Field = new Field(IntegerType, { name: 'id' });
    expect(field.eq_(false)).toBeInstanceOf(Term);
    expect(field.eq_(false).query).toBe(false);
    // expect(field.eq_(null)).toBeInstanceOf(Missing);
  });

  test('has lt_ operator', () => {
    const field: Field = new Field(IntegerType, 'id');
    expect(field.lt_(1)).toBeInstanceOf(RangeExpr);
  });

  test('has gt_ operator', () => {
    const field: Field = new Field(IntegerType, 'id');
    expect(field.gt_(1)).toBeInstanceOf(RangeExpr);
  });

  test('has lte_ operator', () => {
    const field: Field = new Field(IntegerType, 'id');
    expect(field.lte_(1)).toBeInstanceOf(RangeExpr);
  });

  test('has gte_ operator', () => {
    const field: Field = new Field(IntegerType, 'id');
    expect(field.gte_(1)).toBeInstanceOf(RangeExpr);
  });
});