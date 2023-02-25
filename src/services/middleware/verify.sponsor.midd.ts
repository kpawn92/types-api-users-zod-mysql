import { Request, Response, NextFunction } from 'express';
import { RowDataPacket } from 'mysql2';
import { Moderator } from '../models';
import { AffiliesParamsType, AffiliesQuerysType } from '../schemas/user.schema';

const iMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export const verifySponsor = async (
    req: Request<AffiliesParamsType, unknown, unknown, AffiliesQuerysType>,
    res: Response,
    next: NextFunction
) => {
    try {
        const sponsor = req.params.ref;
        const indexMonth = req.query.month;

        if (indexMonth) {
            if (!iMonths.includes(indexMonth))
                return res.status(400).json({ message: 'Invalid month' });
        }

        const querySponsor = <RowDataPacket>(
            await Moderator.getModByUserID(sponsor)
        );

        if (querySponsor.length === 0)
            return res.status(404).json({ message: 'Moderator not exits' });

        return next();
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
