import * as agg from '../../src/agg';
import { Source } from '../../src/expression';
import { SearchQuery } from '../../src/search';
import { OrderDoc, OrderStatus } from '../fixtures';

describe('SearchQuery', () => {
  test('collectDocClasses private method', () => {
    let searchQuery = new SearchQuery();
    searchQuery = searchQuery.filter(OrderDoc.userId.eq(1)).limit(1);
    // @ts-ignore
    const collected = searchQuery.collectDocClasses();
    expect(collected.length).toBe(1);
  });

  test('clone of search query is not the same object', () => {
    const origQuery = new SearchQuery();
    const sameQuery = origQuery.filter(OrderDoc.userId.eq(1)).limit(1);
    expect(Object.is(origQuery, sameQuery)).toBe(true);
    // now clone it
    const clonedQuery = origQuery.clone();
    expect(Object.is(origQuery, clonedQuery)).toBe(false);
  });

  test('clone of search query has same fields values', () => {
    const origQuery = new SearchQuery().filter(OrderDoc.userId.eq(1)).limit(1).source(false);
    const clonedQuery = origQuery.clone();

    // @ts-ignore
    expect(origQuery._limit).toBe(1);
    // @ts-ignore
    expect(clonedQuery._limit).toBe(1);

    // @ts-ignore
    expect(origQuery._source).toBeInstanceOf(Source);
    // @ts-ignore
    expect(origQuery._source.fields).toBe(false);
    // @ts-ignore
    expect(clonedQuery._source).toBeInstanceOf(Source);
    // @ts-ignore
    expect(clonedQuery._source.fields).toBe(false);
  });

  test('clone of search query do not change primitive values in original query', () => {
    const origQuery = new SearchQuery().filter(OrderDoc.userId.eq(1)).limit(1);
    const clonedQuery = origQuery.clone();

    // primitive types must not be changed in original instance
    clonedQuery.limit(5);
    // @ts-ignore
    expect(origQuery._limit).toBe(1);
    // @ts-ignore
    expect(clonedQuery._limit).toBe(5);

    // primitive types must not be changed in original instance
    origQuery.source(false);
    clonedQuery.source(true);

    // @ts-ignore
    expect(origQuery._source).toBeInstanceOf(Source);
    // @ts-ignore
    expect(origQuery._source.fields).toBe(false);
    // @ts-ignore
    expect(clonedQuery._source).toBeInstanceOf(Source);
    // @ts-ignore
    expect(clonedQuery._source.fields).toBe(true);
  });

  test('clone of search query do not change reference values (arrays) in original query', () => {
    const origQuery = new SearchQuery().filter(OrderDoc.userId.eq(1)).limit(1);
    const clonedQuery = origQuery.clone();

    // reference types such as arrays must not be changed in original instance
    clonedQuery.filter(OrderDoc.status.not(OrderStatus.canceled));
    // @ts-ignore
    expect(origQuery._filters.length).toBe(1);
    // @ts-ignore
    expect(clonedQuery._filters.length).toBe(2);
    clonedQuery.filter(null);
    // @ts-ignore
    expect(origQuery._filters.length).toBe(1);
    // @ts-ignore
    expect(clonedQuery._filters.length).toBe(0);
  });

  test('clone of search query do not change reference values (objects) in original query', () => {
    const origQuery = new SearchQuery().filter(OrderDoc.userId.eq(1)).limit(1);
    const clonedQuery = origQuery.clone();

    // reference types such as arrays must not be changed in original instance
    clonedQuery.aggs({
      usersOrders: new agg.Terms({
        field: OrderDoc.userId,
        size: 1,
      }),
    });
    // @ts-ignore
    expect(origQuery._aggregations.length).toBe(0);
    // @ts-ignore
    expect(clonedQuery._aggregations.length).toBe(1);
  });
});
