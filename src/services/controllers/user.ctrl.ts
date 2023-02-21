import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import { getMonth } from '../../libs/months';
import { ListIdAffilies } from '../../types';
import { Moderator, References, Subscriber } from '../models';
import {
    AffiliesParamsType,
    AffiliesQuerysType,
    UserParamsType,
    UserQuerysType,
    UsersQuerysType,
} from '../schemas/user.schema';

export const getUsersAffilies = async (
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

        if (req.query.month === undefined) return res.status(202).json(arr);

        return res.status(200).json({
            month: getMonth(Number(req.query.month) - 1),
            amountAffilies: arr.length,
            amountOfTheMonth,
            listIdAffilies,
        });
    } catch (e) {
        return res.status(500).json({ message: 'Internal error ' + e });
    }
};

export const getUserDataById = async (
    req: Request<UserParamsType, unknown, unknown, UserQuerysType>,
    res: Response
) => {
    try {
        if (req.query.role === 'user') {
            const user = await Subscriber.getDataSubscriber(req.params.id);
            return res.status(202).json({ user });
        }

        const moderator = await Moderator.getDataModerator(req.params.id);
        return res.status(200).json({ moderator });
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};

export const getUsers = async (
    req: Request<unknown, unknown, unknown, UsersQuerysType>,
    res: Response
) => {
    try {
        console.log(req.query.role);
        return res.status(200).json(req.query.role);
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
