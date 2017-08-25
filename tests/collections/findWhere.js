// @flow

import _, { findWhere } from 'underscore';

/* Import */
findWhere([{a: 3}, {b: 3}, {c: 3}], {c: 3});
findWhere({a: {a: 3}, b: {b: 3}, c: {c: 3}}, {c: 3});

/* Array */

// Standard usage
_.findWhere([{a: 3}, {b: 3}, {c: 3}], {c: 3});

// Individually exported usage
findWhere([{a: 3}, {b: 3}, {c: 3}], {c: 3});

// OO Style Usage
_([{a: 3}, {b: 3}, {c: 3}]).findWhere({c: 3});

// Chain Style Usage
_([{a: 3}, {b: 3}, {c: 3}])
  .chain()
  .findWhere({c: 3})
  .value();

/* Object */

// Standard usage
_.findWhere({a: {a: 3}, b: {b: 3}, c: {c: 3}}, {c: 3});

// Individually exported usage
findWhere({a: {a: 3}, b: {b: 3}, c: {c: 3}}, {c: 3});

// OO Style Usage
_({a: {a: 3}, b: {b: 3}, c: {c: 3}}).findWhere({c: 3});

// Chain Style Usage
_({a: {a: 3}, b: {b: 3}, c: {c: 3}})
  .chain()
  .findWhere({c: 3})
  .value();
