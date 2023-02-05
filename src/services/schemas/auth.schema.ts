import { z } from 'zod';

export const signUpSchema = z.object({
    body: z.object({
        name: z.string().nonempty('Name is required'),
        lastname: z.string().nonempty('Lastname is required'),
        email: z.string().nonempty('Email is required').email(),
        password: z.string().nonempty('Password is required').min(6),
    }),
    params: z.object({
        ref: z.string().min(3).optional(),
    }),
});

export const signInSchema = z.object({
    body: z.object({
        email: z.string().nonempty('Email is required').email(),
        password: z.string().nonempty('Password is required').min(6),
    }),
});

export type RegisterBodyType = z.infer<typeof signUpSchema>['body'];
export type RegisterParamsType = z.infer<typeof signUpSchema>['params'];
