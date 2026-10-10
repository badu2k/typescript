"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Vasiliy",
    age: 8,
    skills: ['typescript', 'javascript']
};
function pickObjectKeys(obj, keys) {
    const result = {};
    for (const key of keys) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);
//# sourceMappingURL=app.js.map