import { Field, IntegerType } from "../src/document";
import { Terms, Bool, Term, RangeExpr } from "../src/expression";
import { OrderDoc } from "./fixtures";


describe("Field", () => {
  test('accept name as 2 positional arg', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.name).toBe('id');
  });
  test('accept name in options', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.name).toBe('id');
  });

  test('accept parent in options', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.parent).toBe(OrderDoc);
  });

  test('has in operator', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.in([1, 2, 3])).toBeInstanceOf(Terms)
  });

  test('has not operator', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.not(1)).toBeInstanceOf(Bool);
    expect(field.not(1).params.length).toBe(1);
    expect(field.not(1).params.getParams()).toStrictEqual({ 
      must_not: [
        new Term(field, 1)
      ]
    });
  });

  test('has eq operator', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.eq(false)).toBeInstanceOf(Term);
    expect(field.eq(false).query).toBe(false);
    // expect(field.eq(null)).toBeInstanceOf(Missing);
  });

  test('has lt operator', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.lt(1)).toBeInstanceOf(RangeExpr);
  });

  test('has gt operator', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.gt(1)).toBeInstanceOf(RangeExpr);
  });

  test('has lte operator', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.lte(1)).toBeInstanceOf(RangeExpr);
  });

  test('has gte operator', () => {
    const field: Field = new Field(IntegerType, 'id', OrderDoc);
    expect(field.gte(1)).toBeInstanceOf(RangeExpr);
  });
});