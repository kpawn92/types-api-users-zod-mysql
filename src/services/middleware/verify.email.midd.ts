import { Request, Response, NextFunction } from 'express';
import { RowDataPacket } from 'mysql2';
import { User } from '../models';
import { RegisterBodyType, RegisterParamsType } from '../schemas/auth.schema';

export const verifyEmail = async (
    req: Request<RegisterParamsType, unknown, RegisterBodyType>,
    res: Response,
    next: NextFunction
) => {
    try {
        const isEmail = <RowDataPacket>await User.getByEmail(req.body.email);
        if (isEmail.length > 0)
            return res.status(400).json({ message: 'Email already exists' });

        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
