"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = { a: 5, b: '' };
let b = { a: 10, c: true };
function difference(a, b) {
    const result = {};
    for (const key in a) {
        if (Object.prototype.hasOwnProperty.call(a, key)) {
            // Если ключа нет в b — забираем его из a
            if (!(key in b)) {
                result[key] = a[key];
            }
        }
    }
    return result;
}
let v0 = difference(a, b);
//# sourceMappingURL=app.js.map