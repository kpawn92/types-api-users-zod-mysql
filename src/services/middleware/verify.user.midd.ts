import { Request, Response, NextFunction } from 'express';
import { RowDataPacket } from 'mysql2';
import { Moderator, Subscriber, User } from '../models';
import {
    InvalidParamsType,
    UserParamsType,
    UserQuerysType,
} from '../schemas/user.schema';
import { roles } from './verify.role.midd';

export const verifyUserID = async (
    req: Request<UserParamsType, unknown, unknown, UserQuerysType>,
    res: Response,
    next: NextFunction
) => {
    try {
        const role = req.query.role;
        if (!roles.includes(role))
            return res.status(400).json({ message: 'Invalid role' });

        if (role === 'user') {
            const queryUser = <RowDataPacket>(
                await Subscriber.getSubsById(req.params.id)
            );
            if (queryUser.length === 0)
                return res
                    .status(404)
                    .json({ message: 'Subscriber not found' });
            return next();
        }

        const queryMod = <RowDataPacket>(
            await Moderator.getModByUserID(req.params.id)
        );
        if (queryMod.length === 0)
            return res.status(404).json({ message: 'Moderator not found' });

        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};

export const verifyUserAccount = async (
    req: Request<InvalidParamsType, unknown, unknown, unknown>,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = <RowDataPacket>User.getUserByID(req.params.id);
        if (user.length === 0)
            return res.status(404).json({ message: 'User not found' });
        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
