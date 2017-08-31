// @flow

import _, { sortBy } from 'underscore';

const that = {};

/* Array */

// Standard usage
_.sortBy([1, 2, 3], (x) => { return x; });
_.sortBy([1, 2, 3], (x) => { return x; }, that);

// Individually exported usage
sortBy([1, 2, 3], (x) => { return x; });
sortBy([1, 2, 3], (x) => { return x; }, that);

// OO Style Usage
_([1, 2, 3]).sortBy(x => { return x; });
_([1, 2, 3]).sortBy(x => { return x; }, that);

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .sortBy(x => { return x; })
  .value();

/* Object */

// Standard usage
_.sortBy({a: 1, b: 2, c: 3}, (x) => { return x; });
_.sortBy({a: 1, b: 2, c: 3}, (x) => { return x; }, that);

// Individually exported usage
sortBy({a: 1, b: 2, c: 3}, (x) => { return x; });
sortBy({a: 1, b: 2, c: 3}, (x) => { return x; }, that);

// OO Style Usage
_({a: 1, b: 2, c: 3}).sortBy((x: number) => { return x; });
_({a: 1, b: 2, c: 3}).sortBy((x: number) => { return x; }, that);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .sortBy((x) => { return x; })
  .value();
