import { Request, Response } from 'express';

export const signup = (req: Request, res: Response): Response => {
    try {
        const { ref } = req.params;
        const { role } = req.body;
        if (role) console.log('Is role');
        if (ref) console.log('refereciado');

        return res.send(req.body);
    } catch (e) {
        return res.status(500).json({ message: 'Internal server error' + e });
    }
};

export const signin = (_req: Request, res: Response) => {
    res.send('signIn');
};

export const profile = (_req: Request, res: Response): Response => {
    return res.send('Profile');
};
