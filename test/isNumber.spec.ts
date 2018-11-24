import { isNumber } from '../src';

describe('isNumber', () => {
  test('isNumber(2) -> true', () => {
    expect(isNumber(2)).toBe(true);
  });

  test('isNumber("123") -> false', () => {
    expect(isNumber('123')).toBe(false);
  });

  test('isNumber(undefined) -> false', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  test('isNumber(null) -> false', () => {
    expect(isNumber(null)).toBe(false);
  });

  test('isNumber("") -> false', () => {
    expect(isNumber('')).toBe(false);
  });

  test('isNumber([]) => false', () => {
    expect(isNumber([])).toBe(false);
  });

  test('isNumber([1,2,3]) => false', () => {
    expect(isNumber([1, 2, 3])).toBe(false);
  });

  test('isNumber([[], []]) => false', () => {
    expect(isNumber([[], []])).toBe(false);
  });

  test('isNumber({}) -> false', () => {
    expect(isNumber({})).toBe(false);
  });
});
