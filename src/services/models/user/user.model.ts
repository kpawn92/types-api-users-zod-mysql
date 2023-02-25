import { pool } from '../../../connection/mysql.conn';
import { AdminUser } from '../../../types';
import 'dotenv/config';

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
        'SELECT id, email, password as pass, state FROM tb_user WHERE email = ?',
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

export const searchUserByParams = async (ref: string) => {
    const [query] = await pool.query(
        `SELECT id, email FROM tb_user WHERE email LIKE '%${ref}%'`
    );
    return query;
};

export const getProfile = async (
    id: string,
    entity: string = 'subscriber'
): Promise<object> => {
    const [result] = await pool.query(
        `SELECT tb_${entity}.id, tb_${entity}.name, lastname, email, createdAt FROM tb_${entity} JOIN tb_user ON tb_user.id = tb_${entity}.userId WHERE tb_user.id = ?`,
        [id]
    );
    return { result, permission: entity };
};

export const getUserByID = async (id: string) => {
    const [result] = await pool.query('SELECT id FROM tb_user WHERE id= ?', [
        id,
    ]);
    return result;
};

export const changeStateUser = async (id: string) => {
    const [result] = await pool.query(
        'UPDATE tb_user SET state = 0 WHERE id = ?',
        [id]
    );
    return result;
};
