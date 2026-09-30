type HashMapEntry<K, V> = {
    key: K;
    value: V;
    next: HashMapEntry<K, V> | null;
};

export default class MyMap<K, V> {
    private buckets: Array<HashMapEntry<K, V> | null>;
    private itemCount: number;
    private readonly loadFactor: number;

    public constructor(
        initialCapacity: number = 16,
        loadFactor: number = 0.75
    ) {
        if (
            initialCapacity < 1 ||
            !Number.isInteger(initialCapacity)
        ) {
            throw new RangeError(
                'initialCapacity must be a positive integer'
            );
        }

        if (loadFactor <= 0 || loadFactor >= 1) {
            throw new RangeError(
                'loadFactor must be greater than 0 and less than 1'
            );
        }

        this.buckets = new Array<HashMapEntry<K, V> | null>(
            initialCapacity
        ).fill(null);

        this.itemCount = 0;
        this.loadFactor = loadFactor;
    }

    public set(key: K, value: V): this {
        const index: number = this.getBucketIndex(key);
        let current: HashMapEntry<K, V> | null =
            this.getBucket(index);

        while (current !== null) {
            if (Object.is(current.key, key)) {
                current.value = value;
                return this;
            }

            current = current.next;
        }

        const newEntry: HashMapEntry<K, V> = {
            key,
            value,
            next: this.getBucket(index)
        };

        this.buckets[index] = newEntry;
        this.itemCount++;

        if (
            this.itemCount / this.buckets.length >
            this.loadFactor
        ) {
            this.resize();
        }

        return this;
    }

    public get(key: K): V | undefined {
        const index: number = this.getBucketIndex(key);
        let current: HashMapEntry<K, V> | null =
            this.getBucket(index);

        while (current !== null) {
            if (Object.is(current.key, key)) {
                return current.value;
            }

            current = current.next;
        }

        return undefined;
    }

    public delete(key: K): boolean {
        const index: number = this.getBucketIndex(key);

        let current: HashMapEntry<K, V> | null =
            this.getBucket(index);

        let previous: HashMapEntry<K, V> | null = null;

        while (current !== null) {
            if (Object.is(current.key, key)) {
                if (previous === null) {
                    this.buckets[index] = current.next;
                } else {
                    previous.next = current.next;
                }

                this.itemCount--;
                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    public clear(): void {
        this.buckets.fill(null);
        this.itemCount = 0;
    }

    public has(key: K): boolean {
        const index: number = this.getBucketIndex(key);
        let current: HashMapEntry<K, V> | null =
            this.getBucket(index);

        while (current !== null) {
            if (Object.is(current.key, key)) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    public get size(): number {
        return this.itemCount;
    }

    private getBucket(index: number): HashMapEntry<K, V> | null {
        return this.buckets[index] ?? null;
    }

    private getBucketIndex(key: K): number {
        return this.hash(key) % this.buckets.length;
    }

    private hash(key: K): number {
        const keyString: string = this.keyToString(key);
        let hash: number = 0;

        for (let i = 0; i < keyString.length; i++) {
            hash = (
                hash * 31 +
                keyString.charCodeAt(i)
            ) >>> 0;
        }

        return hash;
    }

    private keyToString(key: K): string {
        if (typeof key === 'string') {
            return `string:${key}`;
        }

        if (typeof key === 'number') {
            if (Number.isNaN(key)) {
                return 'number:NaN';
            }

            if (Object.is(key, -0)) {
                return 'number:-0';
            }

            return `number:${key}`;
        }

        if (typeof key === 'boolean') {
            return `boolean:${key}`;
        }

        if (typeof key === 'bigint') {
            return `bigint:${key.toString()}`;
        }

        if (typeof key === 'symbol') {
            return `symbol:${key.toString()}`;
        }

        if (typeof key === 'function') {
            return `function:${key.toString()}`;
        }

        if (key === null) {
            return 'null';
        }

        if (key === undefined) {
            return 'undefined';
        }

        return `object:${JSON.stringify(key)}`;
    }

    private resize(): void {
        const oldBuckets: Array<HashMapEntry<K, V> | null> =
            this.buckets;

        this.buckets = new Array<HashMapEntry<K, V> | null>(
            oldBuckets.length * 2
        ).fill(null);

        for (const bucket of oldBuckets) {
            let current: HashMapEntry<K, V> | null = bucket;

            while (current !== null) {
                const next: HashMapEntry<K, V> | null =
                    current.next;

                const index: number =
                    this.getBucketIndex(current.key);

                current.next = this.getBucket(index);
                this.buckets[index] = current;

                current = next;
            }
        }
    }
}