export const isDefined = <T>(value: T | undefined): value is T =>
  typeof value !== 'undefined';

export const isNil = (value: any): value is undefined | null =>
  typeof value === 'undefined' || value === null;

export const isNumber = (value: any): value is number => typeof value === 'number';

export const isString = (value: any): value is string => typeof value === 'string';

/**
 * the value is a string and is not an empty string ('')
 */
export const isFilledString = (value: any): value is string =>
  typeof value === 'string' && value.length > 0;

export const isArray = <T>(value: any): value is Array<T> => Array.isArray(value);

export const isFunction = (value: any): value is Function => typeof value === 'function';
