import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IPayload } from '../../types';
import { User } from '../models';
import { RowDataPacket } from 'mysql2';

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.header('auth-token');
        if (!token) return res.status(401).json({ message: 'Access denied' });

        const payload = jwt.verify(
            token,
            String(process.env.KEY_SECRET)
        ) as IPayload;

        req.userID = payload.id;

        return next();
    } catch (e) {
        return res.status(404).json({ message: 'Token invalid' });
    }
};

export const isRoot = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const role = <RowDataPacket>await User.getRoleById(req.userID);
        if (role[0].name !== 'root')
            return res.status(401).json({ message: 'Unauthorized' });
        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal err server ' + e });
    }
};

export const isModerator = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const role = <RowDataPacket>await User.getRoleById(req.userID);
        if (role[0].name !== 'moderator')
            return res.status(401).json({ message: 'Unauthorized' });
        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal err server ' + e });
    }
};
export const isSubs = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const role = <RowDataPacket>await User.getRoleById(req.userID);
        if (role[0].name !== 'user')
            return res.status(401).json({ message: 'Unauthorized' });
        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal err server ' + e });
    }
};
