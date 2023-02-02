import 'dotenv/config';
import { RowDataPacket } from 'mysql2';
import { v4 as uuid } from 'uuid';
import { Roles, User } from '../services/models';
import { encryptPassword } from '../tools/pass.tool';
import { AdminUser } from '../types';

export const createRoles = async () => {
    try {
        const count = <RowDataPacket>await Roles.countRole();
        if (count[0].count > 0) return;

        await Roles.createRols();
        console.log('Created roles');
    } catch (e) {
        console.log(e);
    }
};

export const accountAdmin = async () => {
    try {
        const count = <RowDataPacket>await User.countUsers();
        if (count[0].count > 0) return;

        const pass = <string>process.env.PASSWORD;
        const email = <string>process.env.EMAIL;
        const password = await encryptPassword(pass);
        const arrRole = <RowDataPacket>await Roles.getRoleByName('root');

        const admin: AdminUser = {
            id: uuid(),
            email,
            password,
            role: arrRole[0].id,
        };

        await User.accountUser(admin);
        console.log('Root created');
    } catch (e) {
        console.log(e);
    }
};
