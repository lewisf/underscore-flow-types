// @flow

import _, { find } from 'underscore';

/* Import */
find([1, 2, 3], (x) => x === 3);
find({a: 1, b: 2, c: 3}, (x) => x === 3);

/* Array */

// Standard usage
_.find([1, 2, 3], (x) => x === 3);

// Individually exported usage
_.find([1, 2, 3], (x) => x === 3);

// OO Style Usage
_([1, 2, 3]).find( x => x === 3);

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .find(x => x === 3)
  .value();

/* Object */

// Standard usage
_.find({a: 1, b: 2, c: 3}, (x) => x === 3);

// Individually exported usage
_.find({a: 1, b: 2, c: 3}, (x) => x === 3);

// OO Style Usage
_({a: 1, b: 2, c: 3}).find((x: number) => x === 3);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .find((x: number) => x === 3)
  .value();
