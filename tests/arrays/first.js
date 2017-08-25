// @flow

import _, { first } from "underscore";

// Standard
const x: number = _.first([5,4,3,2,1]);
const xs: number[] = _.first([5,4,3,2,1], 3);

// Direct export
const y: number = first([5,4,3,2,1]);
const ys: number[] = first([5,4,3,2,1], 3);

// OOP
const t = _([5, 4, 3, 2, 1]);
const z = _([6,4,3,2,1]).first();
const zs = _([5,4,3,2,1]).first(3);

// `first` can return an Array or a single element,
// so this requires refinement
if (Array.isArray(z)) {
  console.log(z.join(', '));
} else {
  console.log(z);
}
