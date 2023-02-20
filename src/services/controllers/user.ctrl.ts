import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import { getMonth } from '../../libs/months';
import { ListIdAffilies } from '../../types';
import { References } from '../models';
import { AffiliesParamsType, AffiliesQuerysType } from '../schemas/user.schema';

export const usersAffilies = async (
    req: Request<AffiliesParamsType, unknown, unknown, AffiliesQuerysType>,
    res: Response
) => {
    try {
        const result = <RowDataPacket>(
            await References.getUsersByReference(req.params.ref)
        );
        console.log(req.query.month);
        const arr = JSON.parse(result[0].affilies);

        const listMonth = arr
            .map(({ createdAt }: { createdAt: string }) =>
                Date.parse(createdAt)
            )
            .map((item: number) => new Date(item).getMonth());

        const listIdAffilies = arr.filter(
            (item: ListIdAffilies) =>
                item.createdAt.split('-')[1] ===
                (Number(req.query.month) < 10
                    ? '0' + req.query.month
                    : req.query.month)
        );

        const amountOfTheMonth = listMonth.filter(
            (item: number) => item === Number(req.query.month) - 1
        ).length;

        return res.status(200).json({
            amountAffilies: arr.length,
            month: getMonth(Number(req.query.month) - 1),
            amountOfTheMonth,
            listIdAffilies,
        });
    } catch (e) {
        return res.status(500).json({ message: 'Internal error ' + e });
    }
};
