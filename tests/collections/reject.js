// @flow

import _, { reject } from 'underscore';

/* Import */
reject([1, 2, 3], (x) => { return x === 3 });
reject({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

/* Array */

// Standard usage
_.reject([1, 2, 3], (x) => { return x === 3 });

// Individually exported usage
_.reject([1, 2, 3], (x) => { return x === 3 });

// OO Style Usage
_([1, 2, 3]).reject(x => { return x === 3 });

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .reject(x => { return x === 3 })
  .value();

/* Object */

// Standard usage
_.reject({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

// Individually exported usage
_.reject({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

// OO Style Usage
_({a: 1, b: 2, c: 3}).reject((x: number) => { return x === 3 });

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .reject((x) => { return x === 3 })
  .value();
