interface User {
    id: string;
    name: string;
    lastname: string;
    userId: string;
    email: string;
    password: string;
    role: number;
}

export interface IPayload {
    id: string;
    iat: number;
    exp: number;
}

export interface Affilies {
    userId: string;
    affilies: string;
}

export interface ListIdAffilies {
    idAffilies: string;
    createdAt: string;
}

export type AdminUser = Omit<User, 'name' | 'lastname' | 'userId'>;
export type IsUser = Omit<User, 'id' | 'email' | 'password' | 'role'>;
export type Reference = Pick<User, 'id' | 'email'>;
