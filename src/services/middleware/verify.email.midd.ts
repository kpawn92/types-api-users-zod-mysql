import { Request, Response, NextFunction } from 'express';
import { RowDataPacket } from 'mysql2';
import { User } from '../models';
import { RegisterBodyType } from '../schemas/auth.schema';

export const verifyEmail = async (
    req: Request<unknown, unknown, RegisterBodyType>,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const isEmail = <RowDataPacket>await User.getByEmail(req.body.email);
        if (isEmail.length > 0)
            return res.status(400).json({ message: 'Email already exists' });

        return next();
    } catch (e) {}
};
