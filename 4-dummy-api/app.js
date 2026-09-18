"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EyeColor = exports.BloodGroup = exports.UserRole = exports.Gender = void 0;
exports.isError = isError;
exports.fetchUsers = fetchUsers;
const axios_1 = __importStar(require("axios"));
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (exports.Gender = Gender = {}));
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Moderator"] = "moderator";
    UserRole["User"] = "user";
})(UserRole || (exports.UserRole = UserRole = {}));
var BloodGroup;
(function (BloodGroup) {
    BloodGroup["APositive"] = "A+";
    BloodGroup["ANegative"] = "A-";
    BloodGroup["BPositive"] = "B+";
    BloodGroup["BNegative"] = "B-";
    BloodGroup["ABPositive"] = "AB+";
    BloodGroup["ABNegative"] = "AB-";
    BloodGroup["OPositive"] = "O+";
    BloodGroup["ONegative"] = "O-";
})(BloodGroup || (exports.BloodGroup = BloodGroup = {}));
var EyeColor;
(function (EyeColor) {
    EyeColor["Amber"] = "Amber";
    EyeColor["Blue"] = "Blue";
    EyeColor["Brown"] = "Brown";
    EyeColor["Gray"] = "Gray";
    EyeColor["Green"] = "Green";
    EyeColor["Hazel"] = "Hazel";
    EyeColor["Red"] = "Red";
    EyeColor["Violet"] = "Violet";
})(EyeColor || (exports.EyeColor = EyeColor = {}));
function isError(error) {
    return error instanceof Error;
}
async function fetchUsers() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return (await response.json());
    }
    catch (error) {
        if (isError(error)) {
            console.error(error.message);
            throw error;
        }
        console.error('Неизвестная ошибка:', error);
        throw new Error('Неизвестная ошибка');
    }
}
//# sourceMappingURL=app.js.map