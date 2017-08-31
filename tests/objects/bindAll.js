// @flow

import _, { bindAll } from 'underscore';

const funcs = {
  a: () => {},
  b: () => {},
  c: () => {}
};

// Standard usage
_.bindAll(funcs, 'a', 'b', 'c');

// Exported usage
bindAll(funcs, 'a', 'b');

// Wrapped usage
_(funcs).bindAll('a');

// Chained usage
_(funcs).chain()
  .bindAll('a')
  .value();
