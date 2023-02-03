import { z } from 'zod';

export const signUpSchema = z.object({
    name: z.string().nonempty('Name is required'),
    lastname: z.string().nonempty('Lastname is required'),
    email: z.string().nonempty('Email is required').email(),
    password: z.string().nonempty('Password is required').min(6),
});

export const signInSchema = z.object({
    email: z.string().nonempty('Email is required').email(),
    password: z.string().nonempty('Password is required').min(6),
});
