import { pool } from '../../../connection/mysql.conn';
import { AdminUser, Refence } from '../../../types';

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
        'SELECT id, email, password as pass FROM tb_user WHERE email = ?',
        [email]
    );
    return result;
};

export const getRoleById = async (id: string): Promise<object> => {
    const [result] = await pool.query(
        'SELECT tb_role.name FROM tb_user JOIN tb_role ON tb_role.id = tb_user.role WHERE tb_user.id = ?',
        [id]
    );
    return result;
};

export const searchUserByParams = async (ref: Refence) => {
    const [query] = await pool.query(
        `SELECT email FROM tb_user WHERE email LIKE '%${ref}%'`
    );
    return query;
};
