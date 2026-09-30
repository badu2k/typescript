export default class MyMap<K, V> {
    private buckets;
    private itemCount;
    private readonly loadFactor;
    constructor(initialCapacity?: number, loadFactor?: number);
    set(key: K, value: V): this;
    get(key: K): V | undefined;
    delete(key: K): boolean;
    clear(): void;
    get size(): number;
    private getBucketIndex;
    private hash;
    private keyToString;
    private resize;
}
//# sourceMappingURL=app.d.ts.map