import { Request, Response, NextFunction } from 'express';
import { signUpSchema, signInSchema } from '../schemas/auth.schema';
import { ZodError } from 'zod';

export const validateBodyAuth = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {
    try {
        signUpSchema.parse(req.body);
        return next();
    } catch (e) {
        if (e instanceof ZodError) {
            return res.status(400).json(
                e.issues.map((issue) => ({
                    path: issue.path,
                    message: issue.message,
                }))
            );
        }
        return res.status(500).json({ message: 'Internal server error' + e });
    }
};

export const validateLogin = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {
    try {
        signInSchema.parse(req.body);
        return next();
    } catch (e) {
        if (e instanceof ZodError) {
            return res.status(400).json(
                e.issues.map((issue) => ({
                    path: issue.path,
                    message: issue.message,
                }))
            );
        }
    }
};
