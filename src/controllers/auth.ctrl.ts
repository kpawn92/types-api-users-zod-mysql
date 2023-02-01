import { Request, Response } from 'express';

export const signup = (_req: Request, res: Response): Response => {
    return res.send('signUp');
};
export const signin = (_req: Request, res: Response) => {
    res.send('signIn');
};
export const profile = (_req: Request, res: Response): Response => {
    return res.send('Profile');
};
