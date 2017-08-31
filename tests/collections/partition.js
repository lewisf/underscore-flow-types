// @flow

import _, { partition } from 'underscore';

/* Array */

// Standard usage
_.partition([1, 2, 3], x => x % 2 === 0);

// Individually exported usage
partition([1, 2, 3], x => x % 2 === 0);

// OO Style Usage
_([1, 2, 3]).partition(x => x % 2 === 0);

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .partition(x => x % 2 === 0)
  .value();

/* Object */

// Standard usage
_.partition({a: 1, b: 2, c: 3}, x => x % 2 === 0);

// Individually exported usage
partition({a: 1, b: 2, c: 3}, x => x % 2 === 0);

// OO Style Usage
_({a: 1, b: 2, c: 3}).partition(x => x % 2 === 0);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  // $FlowFixMe
  .partition(x => x % 2 === 0)
  .value();
