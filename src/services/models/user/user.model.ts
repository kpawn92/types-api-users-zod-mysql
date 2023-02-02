import { pool } from '../../../connection/mysql.conn';
import { AdminUser } from '../../../types';

export const countUsers = async () => {
    const [result] = await pool.query('SELECT COUNT(id) as count FROM tb_user');
    return result;
};

export const accountRoot = async ({
    id,
    email,
    password,
    role,
}: AdminUser): Promise<object> => {
    const [result] = await pool.query('INSERT INTO tb_user SET ?', {
        id,
        email,
        password,
        role,
    });
    return { result, id };
};
