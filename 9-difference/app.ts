interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

function difference<T extends object, U extends object>(
    a: T,
    b: U
): Omit<T, keyof U> {
    const result: Record<string, unknown> = {};

    for (const key in a) {
        if (Object.prototype.hasOwnProperty.call(a, key)) {
            if (!(key in b)) {
                result[key] = a[key as keyof T];
            }
        }
    }

    return result as unknown as Omit<T, keyof U>;
}

let v0 = difference(a, b);