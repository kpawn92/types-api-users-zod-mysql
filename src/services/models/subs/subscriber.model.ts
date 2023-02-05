import { pool } from '../../../connection/mysql.conn';
import { v4 as uuid } from 'uuid';
import { IsUser } from '../../../types';

export const createSubs = async ({
    name,
    lastname,
    userId,
}: IsUser): Promise<object> => {
    const id = uuid();
    const [result] = await pool.query('INSERT INTO tb_subscriber SET ?', {
        id,
        name,
        lastname,
        userId,
    });
    return {
        subsResult: result,
        id,
        name,
        lastname,
    };
};
