import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import { Roles } from '../models';

export const AccountMod = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { role } = req.body;

        if (role !== 'moderator')
            return res.status(404).json({ message: 'Invalid role' });

        const idRole = <RowDataPacket>await Roles.getRoleByName(role);

        return res.status(200).json(idRole);
    } catch (e) {
        return res.status(500).json({ message: 'Internal error: ' + e });
    }
};
