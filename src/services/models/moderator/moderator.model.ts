import { pool } from '../../../connection/mysql.conn';
import { IsUser } from '../../../types';

export const createMod = async ({
    id,
    name,
    lastname,
    userId,
}: IsUser): Promise<object> => {
    const [result] = await pool.query('INSERT INTO tb_user SET ?', {
        id,
        name,
        lastname,
        userId,
    });
    return {
        result,
        id,
        name,
        lastname,
    };
};
