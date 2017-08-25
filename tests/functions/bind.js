// @flow
import _, { bind } from 'underscore';

const obj = {};
function f(a, b) {};

// Standard usage;
const f1 = _.bind(f, obj);

// Direct export
const f2 = bind(f, obj);

// When using bind to create partial functions, we lose
// type information about the function.
const fpartial = bind(f, obj, 3);

// Wrapped
const f3 = _(f).bind(obj);

// Chained
const f4 = _(f)
  .chain()
  .bind(obj)
  .value();
