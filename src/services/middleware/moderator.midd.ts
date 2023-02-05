import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Moderator, Roles, User } from '../models';
import { v4 as uuid } from 'uuid';
import { encryptPassword } from '../../tools/pass.tool';

export const accountMod = async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, role } = req.body;

        if (role !== 'moderator')
            return res.status(404).json({ message: 'Invalid role' });

        const idRole = <RowDataPacket>await Roles.getRoleByName(role);

        const user = await User.accountUser({
            id: uuid(),
            email,
            password: await encryptPassword(req.body.password),
            role: idRole[0].id,
        });

        const { userResul, _id } = Object(user);

        const mod = await Moderator.createMod({ name, lastname, userId: _id });

        const token = jwt.sign({ _id }, String(process.env.KEY_SECRET), {
            expiresIn: 86400, // 24h valid
        });

        return res.status(200).json({ mod, userResul, token });
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
