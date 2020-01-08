import { collectDocClasses, mergeParams, cleanParams } from '../src/util';
import { SearchQuery } from '../src/query';
import { OrderDoc } from './fixtures';
import { Params } from '../src/expression';

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
});
