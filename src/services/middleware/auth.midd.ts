import { Request, Response, NextFunction } from 'express';
import { signupSchema } from '../schemas/auth.schema';
import { ZodError } from 'zod';

export const validateBodyAuth = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {
    try {
        signupSchema.parse(req.body);
        return next();
    } catch (e) {
        if (e instanceof ZodError) {
            return res
                .status(400)
                .json(e.issues.map((issue) => ({ message: issue.message })));
        }
        return res.status(500).json({ message: 'Internal server error' + e });
    }
};
