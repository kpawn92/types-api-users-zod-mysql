import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { v4 as uuid } from 'uuid';
import { RegisterBodyType, RegisterParamsType } from '../schemas/auth.schema';
import { comparePassword, encryptPassword } from '../../tools/pass.tool';
import { Roles, Subscriber, User } from '../models/';
import { AdminUser, IsUser } from '../../types';
import { affilies } from '../../tools/affilies.tool';

export const signup = async (
    req: Request<RegisterParamsType, unknown, RegisterBodyType>,
    res: Response
): Promise<Response> => {
    try {
        const { ref } = req.params;

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

        console.time('Creating user');

        await User.accountUser(user);

        const accountSubscriber = <RowDataPacket>(
            await Subscriber.createSubs(subs)
        );
        console.timeEnd('Creating user');

        console.time('Execution affilies');
        if (ref) await affilies(req.userRef, accountSubscriber.id); //TODO: condicion para llamar al metodo de affilies
        console.timeEnd('Execution affilies');

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

    const { id, pass, state } = verifyUser[0];

    if (state === 0) return res.status(401).json({ message: 'Invalid user' });
    const mathPassword = await comparePassword(password, pass);

    if (!mathPassword)
        return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id }, String(process.env.KEY_SECRET), {
        expiresIn: 86400, // 24h valid
    });

    return res.status(200).json({ token });
};

export const profile = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        if (req.rol === 'user') {
            const subsProfile = await User.getProfile(req.userID);
            return res.status(200).json(subsProfile);
        }
        const modProfile = await User.getProfile(req.userID, req.rol);
        return res.status(200).json(modProfile);
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
