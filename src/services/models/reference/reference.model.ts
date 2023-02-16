import { pool } from '../../../connection/mysql.conn';
import { Affilies } from '../../../types';

export const searchSponsor = async (userId: string) => {
    const [result] = await pool.query(
        'SELECT affilies FROM tb_references WHERE userId = ?',
        [userId]
    );

    return result;
};

export const createdReference = async ({ userId, affilies }: Affilies) => {
    const [result] = await pool.query('INSERT INTO tb_references SET ?', {
        userId,
        affilies,
    });
    return result;
};

export const updateReference = async ({ userId, affilies }: Affilies) => {
    const [result] = await pool.query(
        'UPDATE tb_references SET affilies = ? WHERE userId = ?',
        [affilies, userId]
    );
    return result;
};
