import { isDefined } from '../src';

describe('isDefined', () => {
  test('isDefined(undefined) => false', () => {
    expect(isDefined(undefined)).toBe(false);
  });

  test('isDefined("") => true', () => {
    expect(isDefined('')).toBe(true);
  });

  test('isDefined({}) => true', () => {
    expect(isDefined({})).toBe(true);
  });
});
