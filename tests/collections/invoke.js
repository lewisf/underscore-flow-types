// @flow

import _, { invoke } from 'underscore';

/**
 * Unfortunately because we're invoking based on `string` name there is no way
 * to detect what the resulting type is so they need to be manually annotated
 * by the user of `invoke`.
 */

// Array

// Standard
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

// Export
invoke([[5, 1, 7], [3, 2, 1]], 'sort');

// OOP
invoke([[5, 1, 7], [3, 2, 1]], 'sort');

// Object

// Standard
_.invoke({a: [5, 1, 7], b: [3, 2, 1]}, 'sort');

// Export
invoke({a: [5, 1, 7], b: [3, 2, 1]}, 'sort');

// OOP
_({a: [5, 1, 7], b: [3, 2, 1]}).invoke('sort');
