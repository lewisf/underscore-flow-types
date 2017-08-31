// @flow

import _, { every } from 'underscore';

/* Import */
every([1, 2, 3], (x) => { return x === 3 });
every({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

/* Array */

// Standard usage
_.every([1, 2, 3], (x) => { return x === 3 });

// Individually exported usage
_.every([1, 2, 3], (x) => { return x === 3 });

// OO Style Usage
_([1, 2, 3]).every(x => { return x === 3 });

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .every(x => { return x === 3 })
  .value();

/* Object */

// Standard usage
_.every({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

// Individually exported usage
_.every({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

// OO Style Usage
_({a: 1, b: 2, c: 3}).every((x: number) => { return x === 3 });

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .every((x) => { return x === 3 })
  .value();
