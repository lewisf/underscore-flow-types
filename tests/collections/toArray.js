// @flow

import _, { toArray } from 'underscore';

/* Array */

// Standard usage
_.toArray([1, 2, 3]);

// Individually exported usage
toArray([1, 2, 3]);

// OO Style Usage
_([1, 2, 3]).toArray();

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .toArray()
  .value();

/* Object */

// Standard usage
_.toArray({a: 1, b: 2, c: 3});

// Individually exported usage
toArray({a: 1, b: 2, c: 3});

// OO Style Usage
_({a: 1, b: 2, c: 3}).toArray();

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .toArray()
  .value();
