// @flow
import _, { pick } from 'underscore';

const object = {
  a: 3,
  b: 4,
  c: 5,
};

// NOTE: Manual refinements of these types after using `pick` are required
// since there is no way to figure out the types.

// Standard
const objectA: {b: number, c: number} = _.pick(object, 'a');

// Export
const objectB: {b: number} = pick(object, 'a', 'c');

// Wrapped
const objectC = _(object).pick('a');

// Chain
const objectD: {a: number, b: number} = _(object)
  .chain()
  .pick('c')
  .value();
