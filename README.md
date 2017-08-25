# UnderscoreJS Flow Types

This repository aims to contain comprehensive flow types for
UnderscoreJS, mostly because we use UnderscoreJS heavily at where I
currently work and having type information around it is really useful.

There is currently a set of UnderscoreJS flow types in [flow-typed](https://github.com/flowtype/flow-typed/tree/master/definitions/npm/underscore_v1.x.x)
that we use, but it doesn't cover all our use cases. Hopefully this
repository will provide a more adequate environment (quicker iteration
cycles, easier testing) for testing all of the different use cases that
we want to test when writing this type definition than what is provided in flow-typed.

## Testing

First, run `yarn flow` to ensure there are no errors
Then run `yarn coverage` to ensure the test cases have full coverage

Testing error cases can sometimes feel like an unbounded problem so that
isn't the focus here. Instead, make sure the test cases completely
capture what happens in real worl use cases.
