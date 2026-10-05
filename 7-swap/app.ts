const obj: Record<string, number> = {
  a: 1,
  b: 2
}

function swapKeysAndValues<K extends string, V extends string | number>(obj: Record<K, V>): Record<V, K> {
    const result = {} as Record <V,K>;
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[obj[key]] = key as K;
        }
    }
    return result;
}

const res = swapKeysAndValues(obj);