// @flow

import _, { some } from 'underscore';

/* Import */
some([1, 2, 3], (x) => { return x === 3 });
some({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

/* Array */

// Standard usage
_.some([1, 2, 3], (x) => { return x === 3 });

// Individually exported usage
_.some([1, 2, 3], (x) => { return x === 3 });

// OO Style Usage
_([1, 2, 3]).some(x => { return x === 3 });

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .some(x => { return x === 3 })
  .value();

/* Object */

// Standard usage
_.some({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

// Individually exported usage
_.some({a: 1, b: 2, c: 3}, (x) => { return x === 3 });

// OO Style Usage
_({a: 1, b: 2, c: 3}).some((x: number) => { return x === 3 });

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .some((x) => { return x === 3 })
  .value();
