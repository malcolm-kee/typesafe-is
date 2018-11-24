# typesafe-is

[![version](https://img.shields.io/npm/v/typesafe-is.svg)](https://www.npmjs.com/package/typesafe-is) ![license](https://img.shields.io/npm/l/typesafe-is.svg) ![build](https://travis-ci.org/malcolm-kee/typesafe-is.svg?branch=master)

<p align="center" style="font-size:1.2rem">Typecheck while typeguard to narrow down the variables/parameters</p>

<hr />

## Example

```ts
import { isString } from 'typesafe-is';

let x: string | number;

if (isString(x)) {
  console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
  console.log(x.substr(1)); // OK
} else {
  console.log(x.substr(1)); // Error
  console.log(x.subtr(1)); // OK, 'subtr' exists on number
}
```

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save typesafe-is
```

or

```
yarn add typesafe-is
```

## API

Each of the function below can be imported with one of the following statements:

```ts
import { isNil } from 'typesafe-is'; // this works
import isNil from 'typesafe-is/isNil'; // this works too!
```

### `isNil`

Check if the value is `undefined` or `null`.

### `isString`

Check if the value is a `string`.

### `isFilledString`

Check if the value is a `string` and is not empty string (`""`).

### `isNumber`

Check if the value is a `number`.

### `isFunction`

Check if the value is a `function`.

### `isArray`

Check if the value is an `Array`.
