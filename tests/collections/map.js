// @flow

import _, { map } from 'underscore';

/* Import */
map([1, 2, 3], (x) => { return x; });
map({a: 1, b: 2, c: 3}, (x) => { return x; });

/* Array */

// Standard usage
_.map([1, 2, 3], (x) => { return x; });

// Individually exported usage
_.map([1, 2, 3], (x) => { return x; });

// OO Style Usage
_([1, 2, 3]).map( x => { return x; });

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .map( x => { return x; })
  .value();

/* Object */

// Standard usage
_.map({a: 1, b: 2, c: 3}, (x) => { return x; });

// Individually exported usage
_.map({a: 1, b: 2, c: 3}, (x) => { return x; });

// OO Style Usage
_({a: 1, b: 2, c: 3}).map((x: number) => { return x; });

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .map((x: number) => { return x; })
  .value();
