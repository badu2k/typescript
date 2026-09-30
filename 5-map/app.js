"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyMap {
    buckets;
    itemCount;
    loadFactor;
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        if (initialCapacity < 1 ||
            !Number.isInteger(initialCapacity)) {
            throw new RangeError('initialCapacity must be a positive integer');
        }
        if (loadFactor <= 0 || loadFactor >= 1) {
            throw new RangeError('loadFactor must be greater than 0 and less than 1');
        }
        this.buckets = new Array(initialCapacity).fill(null);
        this.itemCount = 0;
        this.loadFactor = loadFactor;
    }
    set(key, value) {
        const index = this.getBucketIndex(key);
        let current = this.getBucket(index);
        while (current !== null) {
            if (Object.is(current.key, key)) {
                current.value = value;
                return this;
            }
            current = current.next;
        }
        const newEntry = {
            key,
            value,
            next: this.getBucket(index)
        };
        this.buckets[index] = newEntry;
        this.itemCount++;
        if (this.itemCount / this.buckets.length >
            this.loadFactor) {
            this.resize();
        }
        return this;
    }
    get(key) {
        const index = this.getBucketIndex(key);
        let current = this.getBucket(index);
        while (current !== null) {
            if (Object.is(current.key, key)) {
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }
    delete(key) {
        const index = this.getBucketIndex(key);
        let current = this.getBucket(index);
        let previous = null;
        while (current !== null) {
            if (Object.is(current.key, key)) {
                if (previous === null) {
                    this.buckets[index] = current.next;
                }
                else {
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
    clear() {
        this.buckets.fill(null);
        this.itemCount = 0;
    }
    has(key) {
        const index = this.getBucketIndex(key);
        let current = this.getBucket(index);
        while (current !== null) {
            if (Object.is(current.key, key)) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    get size() {
        return this.itemCount;
    }
    getBucket(index) {
        return this.buckets[index] ?? null;
    }
    getBucketIndex(key) {
        return this.hash(key) % this.buckets.length;
    }
    hash(key) {
        const keyString = this.keyToString(key);
        let hash = 0;
        for (let i = 0; i < keyString.length; i++) {
            hash = (hash * 31 +
                keyString.charCodeAt(i)) >>> 0;
        }
        return hash;
    }
    keyToString(key) {
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
    resize() {
        const oldBuckets = this.buckets;
        this.buckets = new Array(oldBuckets.length * 2).fill(null);
        for (const bucket of oldBuckets) {
            let current = bucket;
            while (current !== null) {
                const next = current.next;
                const index = this.getBucketIndex(current.key);
                current.next = this.getBucket(index);
                this.buckets[index] = current;
                current = next;
            }
        }
    }
}
exports.default = MyMap;
//# sourceMappingURL=app.js.map