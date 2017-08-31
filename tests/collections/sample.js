// @flow

import _, { sample } from 'underscore';

/* Array */

// Standard usage
_.sample([1, 2, 3]);
_.sample([1, 2, 3], 3);

// Individually exported usage
sample([1, 2, 3]);
sample([1, 2, 3], 2);

// OO Style Usage
_([1, 2, 3]).sample();
_([1, 2, 3]).sample(2);

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .sample()
  .value();

_([1, 2, 3])
  .chain()
  .sample(2)
  .value();

/* Object */

// Standard usage
_.sample({a: 1, b: 2, c: 3});

// Individually exported usage
_.sample({a: 1, b: 2, c: 3});

// OO Style Usage
_({a: 1, b: 2, c: 3}).sample();

// Chain Style Usage
_({a: 1, b: 3, c: 3})
  .chain()
  .sample()
  .value();

// NOTE: This seems to require refinement after given this definition.
const z = _({a: 1, b: 2, c: 3})
  .chain()
  .sample(2)
  .value();
