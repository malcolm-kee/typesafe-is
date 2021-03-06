# typesafe-is

[![version](https://img.shields.io/npm/v/typesafe-is.svg)](https://www.npmjs.com/package/typesafe-is) ![license](https://img.shields.io/npm/l/typesafe-is.svg) ![build](https://travis-ci.org/malcolm-kee/typesafe-is.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/malcolm-kee/typesafe-is/badge.svg?branch=master)](https://coveralls.io/github/malcolm-kee/typesafe-is?branch=master)

<p align="center" style="font-size:1.2rem">Typecheck and narrow down the variables/parameters with typeguard</p>

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

All functions can be imported with one of the following statements:

```ts
import { isNil } from 'typesafe-is'; // this works
const { isNil } = require('typesafe-is'); // this works too
```

See [here](https://typesafe-is.netlify.com/modules/_index_.html) for full list of available typechecking functions.

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
