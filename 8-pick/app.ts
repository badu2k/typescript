interface User {
    name: string,
    age: number,
    skills: string[]
}

const user: User = {
  name: "Vasiliy",
  age: 8,
  skills: ['typescript', 'javascript']
}

function pickObjectKeys<T extends User, K extends keyof T>(
    obj: T,
    keys: K[]
    ): Pick<T, K> {
    const result = {} as Pick<T, K>;

    for (const key of keys) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = obj[key];
        }
    }

    return result;
}
const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);