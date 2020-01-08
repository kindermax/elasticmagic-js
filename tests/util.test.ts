import { collectDocClasses } from '../src/util';
import { SearchQuery } from '../src/query';
import { OrderDoc } from './fixtures';

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
});
