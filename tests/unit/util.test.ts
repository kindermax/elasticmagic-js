import { Params } from '../../src/expression';
import { SearchQuery } from '../../src/search';
import { cleanParams, collectDocClasses, mergeParams, mustClean } from '../../src/util';
import { OrderDoc } from '../fixtures';

describe('Util', () => {
  test('collectDocClasses', () => {
    let query = new SearchQuery();
    query = query.filter(OrderDoc.userId.eq(1));
    // @ts-ignore
    // pass expression
    const collected = collectDocClasses(query._filters);
    expect(collected.length).toBe(1);

    // pass params type
    // pass FieldQueryValue
  });

  test('mergeParams', () => {
    const a = {
      one: 1,
    };
    const b = {
      two: 2,
    };
    const merged = mergeParams(
      new Params(a),
      new Params(b),
    );
    expect(merged.getParams()).toStrictEqual(new Params({ ...a, ...b}).getParams());
  });

  test('cleanParams', () => {
    const valid = {
      one: 1,
    };
    const not = {
      two: null,
      three: undefined,
    };
    const cleaned = cleanParams({
      ...valid,
      ...not,
    });
    expect(cleaned).toStrictEqual(valid);
    expect(cleanParams(null)).toStrictEqual({});
  });

  test('mustClean', () => {
    expect(mustClean(true)).toBe(false);
    expect(mustClean(false)).toBe(false);
    expect(mustClean([])).toBe(true);
    expect(mustClean([null])).toBe(true);
    expect(mustClean(['1'])).toBe(false);
    expect(mustClean([1])).toBe(false);
    expect(mustClean({})).toBe(true);
    expect(mustClean(null)).toBe(true);
    expect(mustClean(undefined)).toBe(true);
  });
});
