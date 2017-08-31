// @flow

import _, { contains } from 'underscore';

/* Import */
contains([1, 2, 3], 3);
contains([1, 2, 3], 3, 2);
contains({a: 1, b: 2, c: 3}, 3);
contains({a: 1, b: 2, c: 3}, 3, 2);

/* Array */

// Standard usage
_.contains([1, 2, 3], 3);
_.contains([1, 2, 3], 3, 2);

// Individually exported usage
 contains([1, 2, 3], 3);
 contains([1, 2, 3], 3, 2);

// OO Style Usage
_([1, 2, 3]).contains(3);
_([1, 2, 3]).contains(3, 2);

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .contains(3)
  .value();

/* Object */

// Standard usage
_.contains({a: 1, b: 2, c: 3}, 3);
_.contains({a: 1, b: 2, c: 3}, 3, 1);

// Individually exported usage
contains({a: 1, b: 2, c: 3}, 3, 1);

// OO Style Usage
_({a: 1, b: 2, c: 3}).contains(3);
_({a: 1, b: 2, c: 3}).contains(3, 2);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .contains(3)
  .value();
