export declare enum Gender {
    Male = "male",
    Female = "female"
}
export declare enum UserRole {
    Admin = "admin",
    Moderator = "moderator",
    User = "user"
}
export declare enum BloodGroup {
    APositive = "A+",
    ANegative = "A-",
    BPositive = "B+",
    BNegative = "B-",
    ABPositive = "AB+",
    ABNegative = "AB-",
    OPositive = "O+",
    ONegative = "O-"
}
export declare enum EyeColor {
    Amber = "Amber",
    Blue = "Blue",
    Brown = "Brown",
    Gray = "Gray",
    Green = "Green",
    Hazel = "Hazel",
    Red = "Red",
    Violet = "Violet"
}
export interface Coordinates {
    lat: number;
    lng: number;
}
export interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
}
export interface Hair {
    color: string;
    type: string;
}
export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
export interface Company {
    department: string;
    name: string;
    title: string;
    address: Address;
}
export interface Crypto {
    coin: string;
    wallet: string;
    network: string;
}
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: Gender;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: BloodGroup;
    height: number;
    weight: number;
    eyeColor: EyeColor;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;
    role: UserRole;
}
export interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}
export declare function isError(error: unknown): error is Error;
export declare function fetchUsers(): Promise<UsersResponse>;
//# sourceMappingURL=app.d.ts.map