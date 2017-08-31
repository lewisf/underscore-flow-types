// @flow

import _, { shuffle } from 'underscore';

/* Array */

// Standard usage
_.shuffle([1, 2, 3]);

// Individually exported usage
shuffle([1, 2, 3]);

// OO Style Usage
_([1, 2, 3]).shuffle();

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .shuffle()
  .value();

/* Object */

// Standard usage
_.shuffle({a: 1, b: 2, c: 3});

// Individually exported usage
shuffle({a: 1, b: 2, c: 3});

// OO Style Usage
_({a: 1, b: 2, c: 3}).shuffle();

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .shuffle()
  .value();
