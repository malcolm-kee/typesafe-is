import { isString } from '../src';

describe('isString', () => {
  test('isString("123") -> true', () => {
    expect(isString('123')).toBe(true);
  });

  test('isString("") -> true', () => {
    expect(isString('')).toBe(true);
  });

  test('isString([]) => false', () => {
    expect(isString([])).toBe(false);
  });

  test('isString([1,2,3]) => false', () => {
    expect(isString([1, 2, 3])).toBe(false);
  });

  test('isString([[], []]) => false', () => {
    expect(isString([[], []])).toBe(false);
  });

  test('isString(undefined) -> false', () => {
    expect(isString(undefined)).toBe(false);
  });

  test('isString(null) -> false', () => {
    expect(isString(null)).toBe(false);
  });

  test('isString({}) -> false', () => {
    expect(isString({})).toBe(false);
  });

  test('isString(2) -> false', () => {
    expect(isString(2)).toBe(false);
  });
});
