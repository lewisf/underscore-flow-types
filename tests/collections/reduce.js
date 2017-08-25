// @flow

import _, { reduce } from 'underscore';

/* Import */
reduce([1, 2, 3], (acc, x) => { return acc + x }, 0);
reduce({a: 1, b: 2, c: 3}, (acc, x) => { return acc + x }, 0);

/* Array */

// Standard usage
_.reduce([1, 2, 3], (x) => { console.log(x) });

// Individually exported usage
_.reduce([1, 2, 3], (x) => { console.log(x) });

// OO Style Usage
_([1, 2, 3]).reduce( x => { console.log(x) });

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .reduce( x => { console.log(x) })
  .value();

/* Object */

// Standard usage
_.reduce({a: 1, b: 2, c: 3}, (x) => { console.log(x) }, 00);

// Individually exported usage
_.reduce({a: 1, b: 2, c: 3}, (x) => { console.log(x) });

// OO Style Usage
_({a: 1, b: 2, c: 3}).reduce((acc, x: number) => { return acc + x; }, 0);
// $ExpectError - string does not match up with $Values of the object
// _({a: 1, b: 2, c: 3}).reduce((acc, x: string) => { return acc + x; }, 0);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .reduce((acc, x: number) => { return acc + x; }, 0)
  .value();
