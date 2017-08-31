// @flow

import _, { min } from 'underscore';

const that = {};

/* Array */

// Standard usage
_.min([1, 2, 3]);
_.min([1, 2, 3], (x) => { return x; });
_.min([1, 2, 3], (x) => { return x; }, that);

// Individually exported usage
min([1, 2, 3]);
min([1, 2, 3], (x) => { return x; });
min([1, 2, 3], (x) => { return x; }, that);

// OO Style Usage
_([1, 2, 3]).min();
_([1, 2, 3]).min(x => { return x; });
_([1, 2, 3]).min(x => { return x; }, that);

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .min()
  .value();

_([1, 2, 3])
  .chain()
  .min(x => { return x; })
  .value();

/* Object */

// Standard usage
_.min({a: 1, b: 2, c: 3});
_.min({a: 1, b: 2, c: 3}, (x) => { return x; });
_.min({a: 1, b: 2, c: 3}, (x) => { return x; }, that);

// Individually exported usage
min({a: 1, b: 2, c: 3});
min({a: 1, b: 2, c: 3}, (x) => { return x; });
min({a: 1, b: 2, c: 3}, (x) => { return x; }, that);

// OO Style Usage
_({a: 1, b: 2, c: 3}).min();
_({a: 1, b: 2, c: 3}).min((x: number) => { return x; });
_({a: 1, b: 2, c: 3}).min((x: number) => { return x; }, that);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .min()
  .value();

_({a: 1, b: 2, c: 3})
  .chain()
  .min((x) => { return x; })
  .value();
