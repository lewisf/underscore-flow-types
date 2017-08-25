// @flow

import _ from 'underscore';

const z = _.property('asdf');

const y = _(['asdf'])
	.chain()

const a = _({ asdf: 'string'}).keys()

const x = y
	.map((z) => {
		return z;
	})
	.value();

const reduceTest = _([1, 2, 3])
	.reduce((memo, i) => {
    return memo + i;
  }, 0);

const reduceRightTest = _([1, 2, 3])
	.reduceRight((memo, i) => {
    return memo + i;
  }, 0);

const findTest = _([1, 2, 3])
	.find((i) => {
		return i === 1;
  });

const filterTest = _([1, 2, 3])
	.find((i) => {
		return i === 1;
  });

const arr = [1, 2, 3];
const an = _(arr).sample();
const ans = _(arr).sample(3);

