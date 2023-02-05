import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { v4 as uuid } from 'uuid';
import { RegisterBodyType, RegisterParamsType } from '../schemas/auth.schema';
import { comparePassword, encryptPassword } from '../../tools/pass.tool';
import { Roles, Subscriber, User } from '../models/';
import { AdminUser, IsUser } from '../../types';

export const signup = async (
    req: Request<RegisterParamsType, unknown, RegisterBodyType>,
    res: Response
): Promise<Response> => {
    try {
        const { ref } = req.params;

        if (ref) console.log(ref); //TODO: condicion para llamar al metodo de affilies

        const { name, lastname, email, password } = req.body;

        const rol = <RowDataPacket>await Roles.getRoleByName('user');

        const userId: string = uuid();

        const user: AdminUser = {
            id: userId,
            email,
            password: await encryptPassword(password),
            role: rol[0].id,
        };

        const subs: IsUser = {
            name,
            lastname,
            userId,
        };

        await User.accountUser(user);

        const accountSubscriber = await Subscriber.createSubs(subs);

        return res.status(200).json(accountSubscriber);
    } catch (e) {
        return res.status(500).json({ message: 'Internal server error' + e });
    }
};

export const signin = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { email, password } = req.body;

    const verifyUser = <RowDataPacket>await User.getByEmail(email);
    if (verifyUser.length === 0)
        return res.status(404).json({ message: 'Email not found' });

    const { id, pass } = verifyUser[0];
    const mathPassword = await comparePassword(password, pass);

    if (!mathPassword)
        return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id }, String(process.env.KEY_SECRET), {
        expiresIn: 86400, // 24h valid
    });

    return res.status(200).json({ token });
};

export const profile = (_req: Request, res: Response): Response => {
    return res.send('Profile');
};
