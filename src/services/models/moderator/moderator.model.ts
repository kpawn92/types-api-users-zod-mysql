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

export const getDataModerator = async (id: string) => {
    const [result] = await pool.query(
        'SELECT tb_moderator.userId, tb_moderator.name, tb_moderator.lastname, tb_user.email, tb_user.state FROM tb_moderator JOIN tb_user ON tb_user.id = tb_moderator.userId JOIN tb_role ON tb_role.id = tb_user.role WHERE tb_moderator.userId = ?',
        [id]
    );
    return result;
};

export const getModerators = async () => {
    const [result] = await pool.query(
        'SELECT tb_user.id as userId, tb_moderator.`name`, tb_moderator.lastname, email, state, tb_user.createdAt FROM  tb_moderator JOIN tb_user ON tb_user.id = tb_moderator.userId JOIN tb_role ON tb_role.id = tb_user.role'
    );
    return result;
};
