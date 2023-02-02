import { pool } from '../../../connection/mysql.conn';
import { AdminUser } from '../../../types';

export const countUsers = async () => {
    const [result] = await pool.query('SELECT COUNT(id) as count FROM tb_user');
    return result;
};

export const accountUser = async ({
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
    return { userResult: result, _id: id };
};

export const getByEmail = async (email: string) => {
    const [result] = await pool.query(
        'SELECT email FROM tb_user WHERE email = ?',
        [email]
    );
    return result;
};
