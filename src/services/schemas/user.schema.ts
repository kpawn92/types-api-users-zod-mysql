import { z } from 'zod';

export const affiliesSchema = z.object({
    params: z.object({
        ref: z.string().min(4).max(36),
    }),
    query: z.object({
        month: z.string().min(1).max(2),
    }),
});

export type AffiliesParamsType = z.infer<typeof affiliesSchema>['params'];
export type AffiliesQuerysType = z.infer<typeof affiliesSchema>['query'];
