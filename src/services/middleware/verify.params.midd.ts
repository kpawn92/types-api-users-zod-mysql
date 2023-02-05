import { Request, Response, NextFunction } from 'express';
import { RowDataPacket } from 'mysql2';
import { User } from '../models';
import { RegisterParamsType } from '../schemas/auth.schema';

export const verifyParams = async (
    req: Request<RegisterParamsType>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { ref } = req.params;

        if (ref) {
            const searchUser = <RowDataPacket>(
                await User.searchUserByParams(ref)
            );
            if (searchUser.length === 0)
                return res
                    .status(404)
                    .json({ message: 'Reference invalid, not exists user' });
            if (searchUser[0].email.split('@')[0] !== ref)
                return res.status(404).json({ message: 'Refer no exists' });
        }

        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
