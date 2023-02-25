import { NextFunction, Request, Response } from 'express';
import { UsersQuerysType } from '../schemas/user.schema';

export const roles = ['moderator', 'user'];

export const verifyRole = (
    req: Request<unknown, unknown, unknown, UsersQuerysType>,
    res: Response,
    next: NextFunction
) => {
    try {
        const role = req.query.role;

        if (!roles.includes(role))
            return res.status(400).json({ message: 'Invalid role' });

        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
