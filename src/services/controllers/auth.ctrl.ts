import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { RegisterBodyType, RegisterParamsType } from '../schemas/auth.schema';
import { comparePassword } from '../../tools/pass.tool';
import { User } from '../models/';

export const signup = async (
    req: Request<RegisterParamsType, unknown, RegisterBodyType>,
    res: Response
): Promise<Response> => {
    try {
        const { ref } = req.params;
        if (ref) console.log(ref); //TODO: condicion para llamar al metodo de affilies

        return res.send(req.body);
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
