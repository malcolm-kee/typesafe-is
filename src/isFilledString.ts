const isFilledString = (value: any): value is string =>
  typeof value === 'string' && value.length > 0;

export default isFilledString;
