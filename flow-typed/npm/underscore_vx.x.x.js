
declare module 'underscore' {
  /* Utility types */
  declare type FnIteratee<T, Return> = (t: T, index?: number, array?: T[]) => Return;
  declare type FnPredicate<T> = FnIteratee<T, boolean>
  declare type UnaryFn<A, R> = (a: A) => R;

  // This should get replaced with the native compose soon!:
  // https://github.com/facebook/flow/commit/ab9bf44c725efd2ed6d7e1e957c5566b6eb6f688
	declare type Compose = (<A, B, C, D, E, F, G, H, I, J, K>(
		fg: UnaryFn<J, K>,
		fg: UnaryFn<I, J>,
		fg: UnaryFn<H, I>,
		fg: UnaryFn<G, H>,
		fg: UnaryFn<F, G>,
		ef: UnaryFn<E, F>,
		de: UnaryFn<D, E>,
		cd: UnaryFn<C, D>,
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, K>) & (<A, B, C, D, E, F, G, H, I, J>(
		fg: UnaryFn<I, J>,
		fg: UnaryFn<H, I>,
		fg: UnaryFn<G, H>,
		fg: UnaryFn<F, G>,
		ef: UnaryFn<E, F>,
		de: UnaryFn<D, E>,
		cd: UnaryFn<C, D>,
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, J>) & (<A, B, C, D, E, F, G, H, I>(
		fg: UnaryFn<H, I>,
		fg: UnaryFn<G, H>,
		fg: UnaryFn<F, G>,
		ef: UnaryFn<E, F>,
		de: UnaryFn<D, E>,
		cd: UnaryFn<C, D>,
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, I>) & (<A, B, C, D, E, F, G, H>(
		fg: UnaryFn<G, H>,
		fg: UnaryFn<F, G>,
		ef: UnaryFn<E, F>,
		de: UnaryFn<D, E>,
		cd: UnaryFn<C, D>,
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, H>) & (<A, B, C, D, E, F, G>(
		fg: UnaryFn<F, G>,
		ef: UnaryFn<E, F>,
		de: UnaryFn<D, E>,
		cd: UnaryFn<C, D>,
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, G>) & (<A, B, C, D, E, F>(
		ef: UnaryFn<E, F>,
		de: UnaryFn<D, E>,
		cd: UnaryFn<C, D>,
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, F>) & (<A, B, C, D, E>(
		de: UnaryFn<D, E>,
		cd: UnaryFn<C, D>,
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, E>) & (<A, B, C, D>(
		cd: UnaryFn<C, D>,
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, D>) & (<A, B, C>(
		bc: UnaryFn<B, C>,
		ab: UnaryFn<A, B>,
		...rest: Array<void>
	) => UnaryFn<A, C>) & (<A, B>(ab: UnaryFn<A, B>, ...rest: Array<void>) => UnaryFn<A, B>);

	declare function Extend<A: {}>(a: A, ...rest: Array<void>): A;
	declare function Extend<A: {}, B: {}>(a: A, b: B, ...rest: Array<void>): A & B;
	declare function Extend<A: {}, B: {}, C: {}>(a: A, b: B, c: C, ...rest: Array<void>): A & B & C;
	declare function Extend<A: {}, B: {}, C: {}, D: {}>(
		a: A,
		b: B,
		c: C,
		d: D,
		...rest: Array<void>
	): A & B & C & D;
	declare function Extend<A: {}, B: {}, C: {}, D: {}, E: {}>(
		a: A,
		b: B,
		c: C,
		d: D,
		e: E,
		...rest: Array<void>
	): A & B & C & D & E;

	declare function ExtendParameterized<A: {}>(...rest: Array<void>): A;
	declare function ExtendParameterized<A: {}, B: {}>(b: B, ...rest: Array<void>): A & B;
	declare function ExtendParameterized<A: {}, B: {}, C: {}>(b: B, c: C, ...rest: Array<void>): A & B & C;
	declare function ExtendParameterized<A: {}, B: {}, C: {}, D: {}>(
		b: B,
		c: C,
		d: D,
		...rest: Array<void>
	): A & B & C & D;
	declare function ExtendParameterized<A: {}, B: {}, C: {}, D: {}, E: {}>(
		b: B,
		c: C,
		d: D,
		e: E,
		...rest: Array<void>
	): A & B & C & D & E;

  declare type WrappedObject<O: {}> = {
    chain(): ChainedObject<O>,

    // Function functions
    bindAll: (...methodNames: string[]) => void,

    // Collection functions
    each: <A: $Values<O>>(iteratee: FnIteratee<A, void>, context?: mixed) => O,
		map: <A: $Values<O>, R>(iteratee: FnIteratee<A, R>, context?: mixed) => R[],
		reduce: <R>(
			iteratee: (acc: R, item: $Values<O>) => R,
			acc?: R,
      context?: mixed
    ) => R,
		reduceRight: <R>(
			iteratee: (acc: R, item: $Values<O>) => R,
			acc?: R,
      context?: mixed
    ) => R,
    find: <A: $Values<O>>(predicate: FnPredicate<A>, context?: mixed) => ?A,
    filter: <A: $Values<O>>(predicate: FnPredicate<A>, context?: mixed) => A[],
		where: <A: $Values<O>>(properties: Object) => A[],
		findWhere: <A: $Values<O>>(properties: Object) => ?A,
		reject: <A: $Values<O>>(predicate: FnPredicate<A>, context?: mixed) => A[],
		every: <A: $Values<O>>(predicate?: FnPredicate<A>, context?: mixed) => boolean,
		some: <A: $Values<O>>(predicate?: FnPredicate<A>, context?: mixed) => boolean,
		contains: <A: $Values<O>>(value: A, fromIndex?: number) => boolean,
		invoke: (methodName: string, ...args: any[]) => any,
		pluck: (propertyName: string) => any[],
		max: <A: $Values<O>>(iteratee?: FnIteratee<A, *>, context?: mixed) => number | typeof Infinity,
		min: <A: $Values<O>>(iteratee?: FnIteratee<A, *>, context?: mixed) => number | typeof Infinity,
		sortBy: <A: $Values<O>>(iteratee: FnIteratee<A, *>, context?: mixed) => A[],
		groupBy: <R, A: $Values<O>>(iteratee: FnIteratee<A, R>, context?: mixed) => { [key: R]: A[] },
		groupBy: <R, A: $Values<O>>(iteratee: R, context?: mixed) => { [key: R]: A[] },
		indexBy: <R, A: $Values<O>>(iteratee: FnIteratee<A, R>, context?: mixed) => { [key: R]: A[] },
		indexBy: <R, A: $Values<O>>(iteratee: R, context?: mixed) => { [key: R]: A[] },
		countBy: <R, A: $Values<O>>(iteratee: FnIteratee<A, R>, context?: mixed) => { [key: R]: number },
		countBy: <R, A: $Values<O>>(iteratee: R, context?: mixed) => { [key: R]: number },
    shuffle: <A: $Values<O>>() => Array<A>,
    // Unfortunately, for `sample`, we cannot determine whether or not the return
    // type here is a single element or an array.
    sample: <A: $Values<O>>(num?: number) => A | A[],
    toArray: <A: $Values<O>>() => Array<A>,
    size: <A: $Values<O>>() => number,
    partition: <A: $Values<O>>(predicate: FnPredicate<A>) => [A[], A[]],

    // Object-only functions
		// TODO: Get this working with ElementType?
		keys: () => WrappedList<string>,
		allKeys: () => string[],
    // TODO: Try Flow values support?
		values: () => $Values<O>[],
		mapObject: <R>(iteratee: FnIteratee<O, R>, context?: mixed) => {[keys: $Values<O>]: R},
    // TODO: More specific types possible?
    pairs: () => Array<any[]>,
    // TODO: More specific types possible?
    invert: () => Object,
    // TODO: create
    functions: () => string[],
    findKey: (predicate: FnPredicate<O>, context?: mixed) => ?$Keys<O>,
    // TODO: extend
    // TODO: extendOwn
    pick: (...keys: string[]) => Object,
    omit: (...keys: string[]) => Object,
    // TODO: Add more arguments into defaults
    // TODO: Add more arguments into defaults
    defaults: <D: {}>(defaults: D) => {...D, ...O},
    clone: () => O,
    // TODO: More precise function type
    tap: (interceptor: Function) => O,
    has: (key: string) => boolean,
    // TODO: Figure out if `property` is applicable here.
    propertyOf: () => ((key: string) => any),
    // TODO: matcher
    isEqual: () => boolean,
    isMatch: () => boolean,
    isEmpty: () => boolean,
    isElement: () => boolean,
    isArray: () => boolean,
    isObject: () => boolean,
    isArguments: () => boolean,
    isFunction: () => boolean,
    isString: () => boolean,
    isNumber: () => boolean,
    isFinite: () => boolean,
    isBoolean: () => boolean,
    isDate: () => boolean,
    isRegExp: () => boolean,
    isError: () => boolean,
    isNaN: () => boolean,
    isNull: () => boolean,
    isUndefined: () => boolean
  };

  declare type ChainedObject<O: {}> = {
    value: () => O,

    // Functions functions
    bindAll: (...methodNames: string[]) => ChainedValue<void>;

    // Collection functions
    each: <A: $Values<O>>(iteratee: FnIteratee<A, void>, context?: mixed) => ChainedObject<O>,
		map: <A: $Values<O>, R>(iteratee: FnIteratee<A, R>, context?: mixed) => ChainedList<R>,
		reduce: <R, A: $Values<O>>(
			iteratee: (acc: R, item: A) => R,
			memo?: R,
      context?: mixed
    ) => ChainedValue<R>,
		reduceRight: <R, A: $Values<O>>(
			iteratee: (acc: R, item: A) => R,
			memo?: R,
      context?: mixed
    ) => ChainedValue<R>,
    find: <A: $Values<O>>(predicate: FnPredicate<A>, context?: mixed) => ChainedValue<?A>,
    filter: <A: $Values<O>>(predicate: FnPredicate<A>, context?: mixed) => ChainedList<A>,
		where: <A: $Values<O>>(properties: Object) => ChainedList<A>,
		findWhere: <A: $Values<O>>(properties: Object) => ChainedList<?A>,
		reject: (predicate: FnPredicate<$Values<O>>, context?: mixed) => ChainedList<$Values<O>>,
		every: (predicate?: FnPredicate<$Values<O>>, context?: mixed) => ChainedValue<boolean>,
		some: (predicate?: FnPredicate<$Values<O>>, context?: mixed) => ChainedValue<boolean>,
		contains: <A: $Values<O>>(value: A, fromIndex?: number) => ChainedValue<boolean>,
    // Does this work?
		invoke: (methodName: string, ...args: any[]) => ChainedValue<any>,
    // Does this work?
		pluck: (propertyName: string) => ChainedValue<any>,
		max: (iteratee?: FnIteratee<$Values<O>, *>, context?: mixed) => ChainedValue<number>,
		min: (iteratee?: FnIteratee<$Values<O>, *>, context?: mixed) => ChainedValue<number>,
		sortBy: (iteratee: FnIteratee<$Values<O>, *>, context?: mixed) => ChainedList<$Values<O>>,
		groupBy: <R, A: $Values<O>>(iteratee: FnIteratee<A, R>, context?: mixed) => ChainedObject<{ [key: R]: A[] }>,
		groupBy: <R, A: $Values<O>>(iteratee: R, context?: mixed) => ChainedObject<{ [key: R]: A[] }>,
		indexBy: <R, A: $Values<O>>(iteratee: FnIteratee<A, R>, context?: mixed) => ChainedObject<{ [key: R]: A[] }>,
		indexBy: <R, A: $Values<O>>(iteratee: R, context?: mixed) => ChainedObject<{ [key: R]: A[] }>,
		countBy: <R, A: $Values<O>>(iteratee: FnIteratee<A, R>, context?: mixed) => ChainedObject<{ [key: R]: number }>,
		countBy: <R, A: $Values<O>>(iteratee: R, context?: mixed) => ChainedObject<{ [key: R]: number }>,
    shuffle: <A: $Values<O>>() => ChainedList<A>,
    // Unfortunately, for `sample`, we cannot determine whether or not the return
    // type here is a single element or an array.
    sample: (
      & ((n: number) => ChainedList<$Values<O>>)
      & ((_: void) => ChainedValue<$Values<O>>)
    ),

    toArray: <A: $Values<O>>() => ChainedList<A>,
    size: <A: $Values<O>>() => ChainedValue<number>,
    partition: () => ChainedList<$Values<O>[]>,

    // Object-only functions
		keys: () => ChainedList<string>,
		allKeys: () => ChainedList<string>,
    // TODO: Try Flow values support?
		values: () => ChainedList<$Values<O>>,
		mapObject: <R>(iteratee: FnIteratee<O, R>, context?: mixed) => ChainedObject<{[keys: $Keys<O>]: R}>,
    // TODO: More specific types possible?
    pairs: () => ChainedList<any[]>,
    // TODO: More specific types possible?
    invert: () => ChainedObject<any>,
    // TODO: create
    functions: () => ChainedList<string>,
    findKey: (predicate: FnPredicate<O>, context?: mixed) => ChainedValue<?$Keys<O>>,
    // TODO: extend
    // TODO: extendOwn
    pick: <K: string[]>(...keys: K) => ChainedObject<Object>,
    omit: (...keys: string[]) => ChainedObject<Object>,
    // TODO: Add more arguments into defaults
    defaults: <D: {}>(defaults: D) => {...D, ...O},
    clone: () => O,
    // TODO: More precise function type
    tap: (interceptor: Function) => O,
    has: (key: string) => boolean,
    // TODO: Figure out if `property` is applicable here.
    propertyOf: () => ((key: string) => any),
    // TODO: matcher
    isEqual: () => boolean,
    isMatch: () => boolean,
    isEmpty: () => boolean,
    isElement: () => boolean,
    isArray: () => boolean,
    isObject: () => boolean,
    isArguments: () => boolean,
    isFunction: () => boolean,
    isString: () => boolean,
    isNumber: () => boolean,
    isFinite: () => boolean,
    isBoolean: () => boolean,
    isDate: () => boolean,
    isRegExp: () => boolean,
    isError: () => boolean,
    isNaN: () => boolean,
    isNull: () => boolean,
    isUndefined: () => boolean
	}

  declare type WrappedList<A> = {
		chain(): ChainedList<A>,

    // Collection functions
		each: (iteratee: FnIteratee<A, void>, context?: mixed) => A[],
		map: <R>(iteratee: FnIteratee<A, R>, context?: mixed) => R[],
		reduce: <R>(
			iteratee: (acc: R, item: A) => R,
			memo?: R,
      context?: mixed
    ) => R,
		reduceRight: <R>(
			iteratee: (acc: R, item: A) => R,
			memo?: R,
      context?: mixed
    ) => R,
    find: (predicate: FnPredicate<A>, context?: mixed) => ?A,
    filter: (predicate: FnPredicate<A>, context?: mixed) => A[],
		where: (properties: Object) => A[],
		findWhere: (properties: Object) => ?A,
		reject: (predicate: FnPredicate<A>, context?: mixed) => A[],
		every: (predicate?: FnPredicate<A>, context?: mixed) => boolean,
		some: (predicate?: FnPredicate<A>, context?: mixed) => boolean,
		contains: (value: A, fromIndex?: number) => boolean,
		invoke: (methodName: string, ...args: any[]) => any,
		pluck: (propertyName: string) => any[],
		max: (iteratee?: FnIteratee<A, *>, context?: mixed) => number | typeof Infinity,
		min: (iteratee?: FnIteratee<A, *>, context?: mixed) => number | typeof Infinity,
		sortBy: (iteratee: FnIteratee<A, *>, context?: mixed) => A[],
		groupBy: <R>(iteratee: FnIteratee<A, R>, context?: mixed) => { [key: R]: A[] },
		groupBy: <R>(iteratee: R, context?: mixed) => { [key: R]: A[] },
		indexBy: <R>(iteratee: FnIteratee<A, R>, context?: mixed) => { [key: R]: A[] },
		indexBy: <R>(iteratee: R, context?: mixed) => { [key: R]: A[] },
		countBy: <R>(iteratee: FnIteratee<A, R>, context?: mixed) => { [key: R]: number },
		countBy: <R>(iteratee: R, context?: mixed) => { [key: R]: number },
    shuffle: () => A[],
    // Unfortunately, for `sample`, we cannot determine whether or not the return
    // type here is a single element or an array.
    sample: (num?: number) => A | A[],
    toArray: () => A[],
    size: () => number,
    partition: (predicate: FnPredicate<A>) => [A[], A[]],

    // Array functions
    // TODO: Is there a way to not require additional refinement here?
    first: (n?: number) => A[] | A,
    initial: (n?: number) => A[] | A,
    last(): (n?: number) => A[] | A,
    rest(): (n?: number) => A[] | A,
    compact: () => A[],
    // TODO: Is there a way to handle nested arrays?
    flatten: (shallow?: boolean) => A[],
    without: (...values: A) => A[],
    union: (...arrays: A[]) => A[],
    intersection: () => any,
    union: (...arrays: A[]) => A[],
    difference: () => any,
    union: (...arrays: A[]) => A[],
    uniq: (isSorted?: boolean, iteratee?: FnIteratee<A, void>) => A[],
    // TODO: Can we provide more type information for zip/unzip?
    zip: (...arrays: any[]) => any[][],
    unzip: () => any[],
    object: () => any,
    indexOf: (value: any, isSorted?: boolean) => number,
    lastIndexOf: (value: any, fromIndex?: boolean) => number,
    sortedIndex: (value: any, iteratee?: FnIteratee<any, boolean>, context?: mixed) => number,
    findIndex: (predicate: FnPredicate<A>, context?: mixed) => number,
    findLastIndex: (predicate: FnPredicate<A>, context?: mixed) => number,
    range: (stop: number, step?: number) => number[],
	};

  declare type ChainedList<A> = {
		value(): Array<A>,
    // Collection functions
		each: (iteratee: FnIteratee<A, void>, context?: mixed) => ChainedList<A>,
		map: <R>(iteratee: FnIteratee<A, R>, context?: mixed) => ChainedList<R>,
		reduce: <R>(
			iteratee: (acc: R, item: A) => R,
			memo?: R,
      context?: mixed
    ) => ChainedValue<R>,
    reduceRight: <R>(
      iteratee: (acc: R, item: A) => R,
      memo?: R,
      context?: mixed
    ) => ChainedValue<R>,
    find: (predicate: FnPredicate<A>, context?: mixed) => ChainedValue<?A>,
    filter: (predicate: FnPredicate<A>, context?: mixed) => ChainedList<A>,
		where: (properties: Object) => ChainedList<A>,
		findWhere: (properties: Object) => ChainedValue<?A>,
		reject: (predicate: FnPredicate<A>, context?: mixed) => ChainedList<A>,
		every: (predicate?: FnPredicate<A>, context?: mixed) => ChainedValue<boolean>,
		some: (predicate?: FnPredicate<A>, context?: mixed) => ChainedValue<boolean>,
		contains: (value: A, fromIndex?: number) => ChainedValue<boolean>,
		invoke: (methodName: string, ...args: any[]) => ChainedValue<any>,
		pluck: (propertyName: string) => ChainedList<any>,
		max: (iteratee?: FnIteratee<A, *>, context?: mixed) => ChainedValue<number | typeof Infinity>,
		min: (iteratee?: FnIteratee<A, *>, context?: mixed) => ChainedValue<number | typeof Infinity>,
		sortBy: (iteratee: FnIteratee<A, *>, context?: mixed) => ChainedList<A>,
		groupBy: <R>(iteratee: FnIteratee<A, R>, context?: mixed) => ChainedObject<{ [key: R]: A[] }>,
		groupBy: <R>(iteratee: R, context?: mixed) => ChainedObject<{ [key: R]: A[] }>,
		indexBy: <R>(iteratee: FnIteratee<A, R>, context?: mixed) => ChainedObject<{ [key: R]: A[] }>,
		indexBy: <R>(iteratee: R, context?: mixed) => ChainedObject<{ [key: R]: A[] }>,
		countBy: <R>(iteratee: FnIteratee<A, R>, context?: mixed) => ChainedObject<{ [key: R]: number }>,
		countBy: <R>(iteratee: R, context?: mixed) => ChainedObject<{ [key: R]: number }>,
    shuffle: () => ChainedList<A>,
    // Unfortunately, for `sample`, we cannot determine whether or not the return
    // type here is a single element or an array.
    sample: (num?: number) => ChainedValue<A> | ChainedList<A>,
    toArray: () => ChainedList<A>,
    size: () => ChainedValue<number>,
    partition: (predicate: FnPredicate<A>) => ChainedList<[A[], A[]]>,

    // Array functions
    first: (n?: number) => ChainedList<A> | ChainedValue<A>,
    initial: (n?: number) => ChainedList<A> | ChainedValue<A>,
    last(): (n?: number) => ChainedList<A> | ChainedValue<A>,
    rest(): (n?: number) => ChainedList<A> | ChainedValue<A>,
    compact: () => ChainedList<A>,
    // TODO: Is there a way to handle nested arrays?
    flatten: (shallow?: boolean) => ChainedList<A>,
    without: (...values: A) => ChainedList<A>,
    union: (...arrays: A[]) => ChainedList<A>,
    intersection: () => ChainedList<any>,
    union: (...arrays: A[]) => ChainedList<A>,
    difference: () => ChainedList<any>,
    union: (...arrays: A[]) => ChainedList<A>,
    uniq: (isSorted?: boolean, iteratee?: FnIteratee<A, void>) => ChainedList<A>,
    // TODO: Can we provide more type information for zip/unzip?
    zip: (...arrays: any[]) => ChainedList<any[]>,
    unzip: () => ChainedList<any>,
    object: () => ChainedValue<any>,
    indexOf: (value: any, isSorted?: boolean) => ChainedValue<number>,
    lastIndexOf: (value: any, fromIndex?: boolean) => ChainedValue<number>,
    sortedIndex: (value: any, iteratee?: FnIteratee<any, boolean>, context?: mixed) => ChainedValue<number>,
    findIndex: (predicate: FnPredicate<A>, context?: mixed) => ChainedValue<number>,
    findLastIndex: (predicate: FnPredicate<A>, context?: mixed) => ChainedValue<number>,
    range: (stop: number, step?: number) => ChainedList<number>,
	}

  declare type WrappedFunction<F: Function> = {
    chain: () => ChainedFunction<F>,
    bind: (object: mixed, ...arguments?: Array<any>) => F,
  };

  declare type ChainedFunction<F: Function> = {
    bind: (object: mixed, ...arguments?: Array<any>) => ChainedFunction<F>,
    value: () => F
  };

  declare type ChainedValue<A> = {
    value: () => A,
  };

  // Collections
  declare export function each<O: {}>(iterator: O, iteratee: FnIteratee<$Values<O>, void>, context?: mixed): O;
  declare export function each<I>(iterator: I[], iteratee: FnIteratee<I, void>, context?: mixed): I[];

  declare export function map<O: {}, R>(iterator: O, iteratee: FnIteratee<$Values<O>, R>, context?: mixed): R[];
  declare export function map<I, R>(iterator: I[], iteratee: FnIteratee<I, R>, context?: mixed): R[];

  declare export function reduce<O: {}, R>(iterator: O, iteratee: (acc: R, item: $Values<O>) => R, memo: R, context?: mixed): R;
  declare export function reduce<I, R>(iterator: I[], iteratee: (acc: R, item: I) => R, memo: R, context?: mixed): R;

  declare export var reduceRight: typeof reduce;

  declare export function find<O: {}>(object: O, predicate: FnPredicate<$Values<O>>, context?: mixed): ?$Values<O>;
  declare export function find<I>(iterator: I[], predicate: FnPredicate<I>, context?: mixed): ?I;

  declare export function filter<O: {}, R>(iterator: O, predicate: FnPredicate<$Values<O>>, context?: mixed): $Values<O>[];
  declare export function filter<I>(iterator: I[], predicate: FnPredicate<I>, context?: mixed): I[];

  // Where doesn't work correctly if the iterator is an object?
  declare export function where<O: {}>(iterator: O, properties: Object): $Values<O>[];
  declare export function where<I>(iterator: I[], properties: Object): I[];

  declare export function findWhere<O: {}>(iterator: O, properties: Object): ?$Values<O>;
  declare export function findWhere<I>(iterator: I[], properties: Object): ?I;

  declare export var reject: typeof filter;

  declare export function every<O: {}>(iterator: O, predicate?: FnPredicate<$Values<O>>, context?: mixed): boolean;
  declare export function every<I>(iterator: I[], predicate?: FnPredicate<I>, context?: mixed): boolean;

  declare export var some: typeof every;

	declare export function contains<O: {}>(iterator: O, value: any, fromIndex?: number): boolean;
	declare export function contains<I>(iterator: I[], value: any, fromIndex?: number): boolean;

  // Impossible to figure out return types here
  declare export function invoke<O: {}>(iterator: O, methodName: string, ...args: any[]): any;
  declare export function invoke<I>(iterator: I[], methodName: string, ...args: any[]): any;

  // Impossible to figure out return types here
  declare export function pluck(iterator: Object, propertyName: string): any;
  declare export function pluck(iterator: Array<Object>, propertyName: string): any;

  declare export function max<O: {}>(iterator: O, iteratee?: FnIteratee<$Values<O>, *>, context?: mixed): number;
  declare export function max<I>(iterator: I[], iteratee?: FnIteratee<I, *>, context?: mixed): number;

  declare export var min: typeof max;

  declare export function sortBy<O: {}>(iterator: O, iteratee: FnIteratee<$Values<O>, *>, context?: mixed): $Values<O>[];
  declare export function sortBy<I>(iterator: I[], iteratee: FnIteratee<I, *>, context?: mixed): I[];

  declare export function groupBy<I, R>(iterator: I[], iteratee: FnIteratee<I, R>, context?: mixed): { [key: R]: I[] };
  declare export function groupBy<I, R>(iterator: I[], iteratee: R, context?: mixed): { [key: R]: I[] };

  declare export function countBy<I, R>(iterator: I[], iteratee: FnIteratee<I, R>, context?: mixed): { [key: R]: number };
  declare export function countBy<I, R>(iterator: I[], iteratee: R, context?: mixed): { [key: R]: number };

  declare export var indexBy: typeof groupBy;

  declare export function shuffle<O: {}>(iterator: O): $Values<O>[];
  declare export function shuffle<I>(iterator: I[]): I[];

  // For `sample`, we cannot determine whether or not the return type here is a single element or an array.
  declare export function sample<O: {}>(iterator: O, num?: number): $Values<O> | $Values<O>[];
  declare export function sample<I>(iterator: I[], num?: number): I | I[];

  declare export function toArray<O: {}>(iterator: O): $Values<O>[];
  declare export function toArray<I>(iterator: I[]): I[];

  declare export function size<O>(iterator: O): number;

  declare export function partition<O: {}>(iterator: O, predicate: FnPredicate<$Values<O>>): [$Values<O>[], $Values<O>[]];
  declare export function partition<I>(iterator: I[], predicate: FnPredicate<I>): [I[], I[]];

	// Arrays
	declare export function first<I>(array: I[]): I
	declare export function first<I>(array: I[], n: number): I[]

	// Functions
  declare export function bind<F: Function>(function: F, object: mixed): F;
  // TODO: Maybe it's worth writing out all the different permutations for _.bind / _.partial
  declare export function bind<F: Function, NF: Function>(function: F, object: mixed, ...arguments: any[]): NF;
  declare export function bindAll(object: Object, ...methodNames: string[]): void;
  declare export function partial(function: Function, ...arguments: any[]): Function;
  declare export function memoize<F: Function>(function: F, hashFunction?: Function): F;
  declare export function delay(function: Function, wait: number, ...arguments: any[]): void;
  declare export function defer(function: Function, ...arguments: any[]): void;
  declare export function throttle(function: Function, wait: number, options?: { leading: boolean, trailing: boolean }): void;
  declare export function debounce<F: Function>(function: F, wait: number, immediate?: boolean): F;
  declare export function once<F: Function>(function: F): F;
  declare export function after<F: Function>(count: number, function: F): F;
  declare export function before<F: Function>(count: number, function: F): F;
  declare export function wrap<F: Function, R>(function: F, wrapper: (func: F) => R): R;
  declare export function negate<R>(predicate: FnPredicate<R>): FnPredicate<R>;


	// TODO: For both bind and partial is there a way to do partial function application
	// and generating a new function?
	declare export function bind<F: Function, NF: Function>(function: F, object: Object, ...arguments: any[]): NF;
	declare export function bindAll(object: Object, ...methodNames: string[]): void;
	declare export function partial<F: Function, NF: Function>(function: F, ...arguments: any[]): NF;
	declare export function memoize<F: Function>(function: F, hashFunction: Function): F;
	declare export function delay(function: Function, wait: number, ...arguments: Array<any>): void;
	declare export function defer(function: Function, ...arguments: Array<any>): void;
	declare export function throttle<F: Function>(function: F, wait: number, options?: { leading: boolean, trailing: boolean }): F;
	declare export function debounce<F: Function>(function: F, wait: number, immediate?: boolean): F;
	declare export function once<F: Function>(function: F): F;
	declare export function after<F: Function>(count: number, function: F): F;
	declare export function before<F: Function>(count: number, function: F): F;
	declare export function wrap<F: Function>(function: F, wrapper: Function): F;
	declare export function negate<F: Function, A>(predicate: FnPredicate<A>): FnPredicate<A>;
	declare export var compose: Compose

	// Object functions
	// TODO
  declare export function keys<O: Object>(object: O): string[];
  declare export function allKeys<O: Object>(object: O): string[];
  declare export function values<O: Object>(object: O): $Values<O>;
  declare export function mapObject<O: Object, R>(object: O, iteratee: (val: $Values<O>, key: $Keys<O>) => R, context?: mixed): {[ keys: $Keys<O> ]: R};
  declare export function pairs<O: Object>(object: O): Array<[$Keys<O>, $Values<O>]>;
  declare export function invert<O: Object>(object: O): {[ keys: $Values<O> ]: $Keys<O>};
  // TODO create
  declare export function functions(object: Object): string[];
  declare export function findKey(object: Object, predicate: FnPredicate<any>, context?: mixed): ?string;
  // TODO: extend
  // TODO: extendOwn
  // TODO declare export function pick<T: {}, R: {}, I: $Diff<T, R>>(object: T, ...keys: $Keys<I>): R;
  declare export function pick(object: Object, ...keys: string[]): Object;
  // TODO declare export function omit<T: {}, I: {}, R: {}>(object: {...I, ...R}, ...keys: string[]): R;



	// Utility
	// TODO

  declare type Underscore = {
    property: (prop: ?string) => (() => any);

    // Collections
    each: typeof each,
		map: typeof map,
		reduce: typeof reduce,
		reduceRight: typeof reduce,
    find: typeof find,
    filter: typeof filter,
		where: typeof where,
		findWhere: typeof findWhere,
		reject: typeof filter,
		every: typeof every,
		some: typeof every,
		contains: typeof contains,
		invoke: typeof invoke,
		pluck: <I>(list: I[], propertyName: string) => any[],
		max: typeof max,
		min: typeof max,
		sortBy: typeof sortBy,
		groupBy: typeof groupBy,
		indexBy: typeof groupBy,
		countBy: typeof countBy,
    shuffle: typeof shuffle,
    sample: typeof sample,
    toArray: typeof toArray,
    size: typeof size,
    partition: typeof partition,

		// Arrays
		first: typeof first,

		// Functions

		// Objects
    keys: typeof keys,

		// Utility
  }

  // NOTE: Order is significant here (though I'm not sure why).
  // Function MUST come before Object or else Flow will fail to return
  // WrpapedFunction when it should.
  declare function UFunctionWrapper<F: Function>(arg: F): WrappedFunction<F>;
  declare function UObjectWrapper<O: {}>(arg: O): WrappedObject<O>;
  declare function UListWrapper<A>(arg: Array<A>): WrappedList<A>;
 
  declare export default (
    & Underscore
    & typeof UFunctionWrapper
    & typeof UObjectWrapper
    & typeof UListWrapper
  );
}
