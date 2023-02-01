interface User {
    id: string;
    name: string;
    lastname: string;
    userId: string;
    email: string;
    password: string;
    role: number;
}

export type AdminUser = Omit<User, 'name' | 'lastname' | 'userId'>;
export type IsUser = Omit<User, 'email' | 'password' | 'role'>;
