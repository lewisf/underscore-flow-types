// @flow

import _, { size } from 'underscore';

/* Array */

// Standard usage
_.size([1, 2, 3]);

// Individually exported usage
size([1, 2, 3]);

// OO Style Usage
_([1, 2, 3]).size();

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .size()
  .value();

/* Object */

// Standard usage
_.size({a: 1, b: 2, c: 3});

// Individually exported usage
size({a: 1, b: 2, c: 3});

// OO Style Usage
_({a: 1, b: 2, c: 3}).size();

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .size()
  .value();
