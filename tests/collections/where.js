// @flow

import _, { where } from 'underscore';

/* Import */
where([{a: 3}, {b: 3}, {c: 3}], {c: 3});
where({a: {a: 3}, b: {b: 3}, c: {c: 3}}, {c: 3});

/* Array */

// Standard usage
_.where([{a: 3}, {b: 3}, {c: 3}], {c: 3});

// Individually exported usage
where([{a: 3}, {b: 3}, {c: 3}], {c: 3});

// OO Style Usage
_([{a: 3}, {b: 3}, {c: 3}]).where({c: 3});

// Chain Style Usage
_([{a: 3}, {b: 3}, {c: 3}])
  .chain()
  .where({c: 3})
  .value();

/* Object */

// Standard usage
_.where({a: {a: 3}, b: {b: 3}, c: {c: 3}}, {c: 3});

// Individually exported usage
where({a: {a: 3}, b: {b: 3}, c: {c: 4}}, {c: 3});

// OO Style Usage
_({a: {a: 3}, b: {b: 3}, c: {c: 3}}).where({c: 3});

// Chain Style Usage
_({a: {a: 3}, b: {b: 3}, c: {c: 3}})
  .chain()
  .where({c: 3})
  .value();
