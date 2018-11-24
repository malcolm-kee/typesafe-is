import { isFunction } from '../src';

describe('isFunction', () => {
  test('isFunction(fn) -> true', () => {
    const fn = jest.fn();
    expect(isFunction(fn)).toBe(true);
  });

  test('isFunction("123") -> false', () => {
    expect(isFunction('123')).toBe(false);
  });

  test('isFunction("") -> false', () => {
    expect(isFunction('')).toBe(false);
  });

  test('isFunction([]) => false', () => {
    expect(isFunction([])).toBe(false);
  });

  test('isFunction([1,2,3]) => false', () => {
    expect(isFunction([1, 2, 3])).toBe(false);
  });

  test('isFunction([[], []]) => false', () => {
    expect(isFunction([[], []])).toBe(false);
  });

  test('isFunction(undefined) -> false', () => {
    expect(isFunction(undefined)).toBe(false);
  });

  test('isFunction(null) -> false', () => {
    expect(isFunction(null)).toBe(false);
  });

  test('isFunction({}) -> false', () => {
    expect(isFunction({})).toBe(false);
  });

  test('isFunction(2) -> false', () => {
    expect(isFunction(2)).toBe(false);
  });
});
