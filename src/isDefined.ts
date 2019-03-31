const isDefined = <T>(value: T | undefined): value is T => typeof value !== 'undefined';

export default isDefined;