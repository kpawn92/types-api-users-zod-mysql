export interface User {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    role: number;
}

export type AdminUser = Omit<User, 'name' | 'lastname'>;
