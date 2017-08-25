// @flow

import _, { each } from 'underscore';

/* Import */
each([1, 2, 3], (x) => { console.log(x) });
each({a: 1, b: 2, c: 3}, (x) => { console.log(x) });

/* Array */

// Standard usage
_.each([1, 2, 3], (x) => { console.log(x) });

// Individually exported usage
_.each([1, 2, 3], (x) => { console.log(x) });

// OO Style Usage
_([1, 2, 3]).each( x => { console.log(x) });

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .each( x => { console.log(x) })
  .value();

/* Object */

// Standard usage
_.each({a: 1, b: 2, c: 3}, (x) => { console.log(x) });

// Individually exported usage
_.each({a: 1, b: 2, c: 3}, (x) => { console.log(x) });

// OO Style Usage
_({a: 1, b: 2, c: 3}).each((x: number) => { console.log(x) });

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .each((x: number) => { console.log(x) })
  .value();
