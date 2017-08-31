// @flow

import _, { max } from 'underscore';

const that = {};

/* Array */

// Standard usage
_.max([1, 2, 3]);
_.max([1, 2, 3], (x) => { return x; });
_.max([1, 2, 3], (x) => { return x; }, that);

// Individually exported usage
max([1, 2, 3]);
max([1, 2, 3], (x) => { return x; });
max([1, 2, 3], (x) => { return x; }, that);

// OO Style Usage
_([1, 2, 3]).max();
_([1, 2, 3]).max(x => { return x; });
_([1, 2, 3]).max(x => { return x; }, that);

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .max()
  .value();

_([1, 2, 3])
  .chain()
  .max(x => { return x; })
  .value();

/* Object */

// Standard usage
_.max({a: 1, b: 2, c: 3});
_.max({a: 1, b: 2, c: 3}, (x) => { return x; });
_.max({a: 1, b: 2, c: 3}, (x) => { return x; }, that);

// Individually exported usage
max({a: 1, b: 2, c: 3});
max({a: 1, b: 2, c: 3}, (x) => { return x; });
max({a: 1, b: 2, c: 3}, (x) => { return x; }, that);

// OO Style Usage
_({a: 1, b: 2, c: 3}).max();
_({a: 1, b: 2, c: 3}).max((x: number) => { return x; });
_({a: 1, b: 2, c: 3}).max((x: number) => { return x; }, that);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .max()
  .value();

_({a: 1, b: 2, c: 3})
  .chain()
  .max((x) => { return x; })
  .value();
