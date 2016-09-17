# bianco.is-iterable

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Usage

```js
import isIterable from 'bianco.is-iterable'

// An array should be iterable
const arr = [1, 2, 3]
isIterable(arr) // => true of course

// A generator should be iterable
const gen = (function *() {
  yield Math.random()
})()
isIterable(gen) // => true

// A DOM nodes list should be iterable
const lis = document.querySelectorAll('li')
isIterable(lis)  // => depends on the browser

// An object should not be iterable
const obj = { foo: 'foo', bar: 'bar' }
isIterable(obj) // => false

```

## API

- `isIterable` returns `true` if the object could be looped in a "for of" otherwise `false`


[travis-image]:https://img.shields.io/travis/biancojs/is-iterable.svg?style=flat-square
[travis-url]:https://travis-ci.org/biancojs/is-iterable

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt

[npm-version-image]:http://img.shields.io/npm/v/bianco.is-iterable.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/bianco.is-iterable.svg?style=flat-square
[npm-url]:https://npmjs.org/package/bianco.is-iterable