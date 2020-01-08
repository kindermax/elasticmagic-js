import { SearchQuery } from '../src/query';
import { OrderDoc } from './fixtures';

describe('SearchQuery', () => {
  test('collectDocClasses private method', async () => {
    let searchQuery = new SearchQuery();
    searchQuery = searchQuery.filter(OrderDoc.userId.eq(1)).limit(1);
    // @ts-ignore
    const collected = searchQuery.collectDocClasses();
    expect(collected.length).toBe(1);
  });
});
