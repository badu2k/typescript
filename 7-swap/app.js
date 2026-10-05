"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    a: 1,
    b: 2
};
function swapKeysAndValues(obj) {
    const result = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[obj[key]] = key;
        }
    }
    return result;
}
const res = swapKeysAndValues(obj);
//# sourceMappingURL=app.js.map