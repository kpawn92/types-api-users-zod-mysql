import { pool } from '../../../connection/mysql.conn';
import { IsUser } from '../../../types';
import { v4 as uuid } from 'uuid';

export const createMod = async ({
    name,
    lastname,
    userId,
}: IsUser): Promise<object> => {
    const id = uuid();
    const [result] = await pool.query('INSERT INTO tb_moderator SET ?', {
        id,
        name,
        lastname,
        userId,
    });
    return {
        modResult: result,
        id,
        name,
        lastname,
    };
};
