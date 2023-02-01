import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { signupSchema } from '../schemas/auth.schema';

export const signup = (req: Request, res: Response): Response => {
    try {
        signupSchema.parse(req.body);

        const { ref } = req.params;
        if (ref) console.log('refereciado');

        return res.send(req.body);
    } catch (e) {
        if (e instanceof ZodError) {
            return res
                .status(400)
                .json(e.issues.map((issue) => ({ message: issue.message })));
        }

        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const signin = (_req: Request, res: Response) => {
    res.send('signIn');
};

export const profile = (_req: Request, res: Response): Response => {
    return res.send('Profile');
};
