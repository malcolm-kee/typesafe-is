import { isNil } from '../src';

describe('isNil', () => {
  test('isNil(undefined) -> true', () => {
    expect(isNil(undefined)).toBe(true);
  });

  test('isNil(null) -> true', () => {
    expect(isNil(null)).toBe(true);
  });

  test('isNil("123") -> false', () => {
    expect(isNil('123')).toBe(false);
  });

  test('isNil("") -> false', () => {
    expect(isNil('')).toBe(false);
  });

  test('isNil([]) => false', () => {
    expect(isNil([])).toBe(false);
  });

  test('isNil([1,2,3]) => false', () => {
    expect(isNil([1, 2, 3])).toBe(false);
  });

  test('isNil([[], []]) => false', () => {
    expect(isNil([[], []])).toBe(false);
  });

  test('isNil({}) -> false', () => {
    expect(isNil({})).toBe(false);
  });

  test('isNil(2) -> false', () => {
    expect(isNil(2)).toBe(false);
  });
});
