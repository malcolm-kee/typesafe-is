import { isFilledString } from '../src';

describe('isFilledString', () => {
  test('isFilledString("123") -> true', () => {
    expect(isFilledString('123')).toBe(true);
  });

  test('isFilledString("") -> false', () => {
    expect(isFilledString('')).toBe(false);
  });

  test('isFilledString([]) => false', () => {
    expect(isFilledString([])).toBe(false);
  });

  test('isFilledString([1,2,3]) => false', () => {
    expect(isFilledString([1, 2, 3])).toBe(false);
  });

  test('isFilledString([[], []]) => false', () => {
    expect(isFilledString([[], []])).toBe(false);
  });

  test('isFilledString(undefined) -> false', () => {
    expect(isFilledString(undefined)).toBe(false);
  });

  test('isFilledString(null) -> false', () => {
    expect(isFilledString(null)).toBe(false);
  });

  test('isFilledString({}) -> false', () => {
    expect(isFilledString({})).toBe(false);
  });

  test('isFilledString(2) -> false', () => {
    expect(isFilledString(2)).toBe(false);
  });
});
