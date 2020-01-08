import { Doc } from '../src/document';

describe('Doc', () => {
  test('getDocCls', () => {
    class MyDoc extends Doc {
      public static docType = 'my';
    };

    expect(MyDoc.getDocCls()).toBe('my')
  });
});
