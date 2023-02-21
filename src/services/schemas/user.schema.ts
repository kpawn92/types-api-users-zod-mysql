import { z } from 'zod';

export const affiliesSchema = z.object({
    params: z.object({
        ref: z.string().min(4).max(36),
    }),
    query: z.object({
        month: z.string().min(1).max(2).optional(),
    }),
});

export const userSchema = z.object({
    params: z.object({
        id: z.string().min(4).max(36),
    }),
    query: z.object({
        role: z.string().min(4).max(9),
    }),
});

export const usersSchema = z.object({
    query: z.object({
        role: z.string().min(4).max(9),
    }),
});

export const updateUserSchema = z.object({
    body: z.object({
        email: z.string().email().optional(),
        password: z.string().min(6).optional(),
    }),
});

export type AffiliesParamsType = z.infer<typeof affiliesSchema>['params'];
export type AffiliesQuerysType = z.infer<typeof affiliesSchema>['query'];

export type UserParamsType = z.infer<typeof userSchema>['params'];
export type UserQuerysType = z.infer<typeof userSchema>['query'];

export type UsersQuerysType = z.infer<typeof usersSchema>['query'];

export type UpdateUserBodyType = z.infer<typeof updateUserSchema>['body'];
