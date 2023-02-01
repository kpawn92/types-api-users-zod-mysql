import { pool } from '../../../connection/mysql.conn';

export const createRols = async () => {
    const admin = pool.query(`INSERT INTO tb_role VALUES(name, 'root')`);
    const user = pool.query(`INSERT INTO tb_role VALUES(name, 'user')`);
    const moderator = pool.query(
        `INSERT INTO tb_role VALUES(name, 'moderator')`
    );

    await Promise.all([admin, moderator, user]);
};

export const countRole = async () => {
    const [result] = await pool.query('SELECT COUNT(id) as count FROM tb_role');
    return result;
};

export const getRoleByName = async (name: string) => {
    const [result] = await pool.query('SELECT id FROM tb_role WHERE name = ?', [
        name,
    ]);
    return result;
};
