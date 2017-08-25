// @flow

import _, { filter } from 'underscore';

/* Import */
filter([1, 2, 3], (x) => x === 3);
filter({a: 1, b: 2, c: 3}, (x) => x === 3);

/* Array */

// Standard usage
_.filter([1, 2, 3], (x) => x === 3);

// Individually exported usage
_.filter([1, 2, 3], (x) => x === 3);

// OO Style Usage
_([1, 2, 3]).filter( x => x === 3);

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .filter(x => x === 3)
  .value();

/* Object */

// Standard usage
_.filter({a: 1, b: 2, c: 3}, (x) => x === 3);

// Individually exported usage
_.filter({a: 1, b: 2, c: 3}, (x) => x === 3);

// OO Style Usage
_({a: 1, b: 2, c: 3}).filter((x: number) => x === 3);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .filter((x: number) => x === 3)
  .value();
