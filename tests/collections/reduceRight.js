// @flow

import _, { reduceRight } from 'underscore';

/* Import */
reduceRight([1, 2, 3], (acc, x) => { return acc + x }, 0);
reduceRight({a: 1, b: 2, c: 3}, (acc, x) => { return acc + x }, 0);

/* Array */

// Standard usage
_.reduceRight([1, 2, 3], (x) => { console.log(x) });

// Individually exported usage
_.reduceRight([1, 2, 3], (x) => { console.log(x) });

// OO Style Usage
_([1, 2, 3]).reduceRight( x => { console.log(x) });

// Chain Style Usage
_([1, 2, 3])
  .chain()
  .reduceRight( x => { console.log(x) })
  .value();

/* Object */

// Standard usage
_.reduceRight({a: 1, b: 2, c: 3}, (x) => { console.log(x) }, 00);

// Individually exported usage
_.reduceRight({a: 1, b: 2, c: 3}, (x) => { console.log(x) });

// OO Style Usage
_({a: 1, b: 2, c: 3}).reduceRight((acc, x: number) => { return acc + x; }, 0);
// $ExpectError - string does not match up with $Values of the object
// _({a: 1, b: 2, c: 3}).reduceRight((acc, x: string) => { return acc + x; }, 0);

// Chain Style Usage
_({a: 1, b: 2, c: 3})
  .chain()
  .reduceRight((acc, x: number) => { return acc + x; }, 1)
  .value();
