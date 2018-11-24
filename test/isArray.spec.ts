import { isArray } from '../src';

describe('isArray', () => {
  test('isArray([]) => true', () => {
    expect(isArray([])).toBe(true);
  });

  test('isArray([1,2,3]) => true', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  test('isArray([[], []]) => true', () => {
    expect(isArray([[], []])).toBe(true);
  });

  test('isArray(undefined) -> false', () => {
    expect(isArray(undefined)).toBe(false);
  });

  test('isArray(null) -> false', () => {
    expect(isArray(null)).toBe(false);
  });

  test('isArray({}) -> false', () => {
    expect(isArray({})).toBe(false);
  });

  test('isArray(2) -> false', () => {
    expect(isArray(2)).toBe(false);
  });

  test('isArray("123") -> false', () => {
    expect(isArray('123')).toBe(false);
  });
});
