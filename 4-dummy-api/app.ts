import axios, { AxiosError } from 'axios';

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export enum UserRole {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user',
}

export enum BloodGroup {
  APositive = 'A+',
  ANegative = 'A-',
  BPositive = 'B+',
  BNegative = 'B-',
  ABPositive = 'AB+',
  ABNegative = 'AB-',
  OPositive = 'O+',
  ONegative = 'O-',
}

export enum EyeColor {
  Amber = 'Amber',
  Blue = 'Blue',
  Brown = 'Brown',
  Gray = 'Gray',
  Green = 'Green',
  Hazel = 'Hazel',
  Red = 'Red',
  Violet = 'Violet',
}

// ===== Вложенные сущности =====

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

// ===== Основной пользователь =====

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

// ===== Ответ эндпоинта =====

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export async function fetchUsers(): Promise<UsersResponse> {
  try {
    const response = await fetch('https://dummyjson.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return (await response.json()) as UsersResponse;
  } catch (error: unknown) {
    if (isError(error)) {
      console.error(error.message);
      throw error;
    }
    console.error('Неизвестная ошибка:', error);
    throw new Error('Неизвестная ошибка');
  }
}