// @flow

import _, { keys } from 'underscore';

const funcs = {
  a: () => {},
  b: () => {},
  c: () => {}
};

// Standard usage
const a = _.keys(funcs);

// Exported usage
keys(funcs);

// Wrapped usage
_(funcs).keys();

// Chained usage
_(funcs).chain()
  .keys()
  .value();
