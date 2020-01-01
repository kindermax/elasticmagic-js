import { getQuery } from "../src/index";

describe("Query generation", () => {
  test('should generate proper es query in json', () => {

    expect(getQuery()).toStrictEqual({
      bool: 'must'
    })
  });
});