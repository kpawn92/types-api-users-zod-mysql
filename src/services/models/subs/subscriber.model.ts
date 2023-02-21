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

export const getDataSubscriber = async (id: string) => {
    const [result] = await pool.query(
        'SELECT tb_subscriber.id, tb_subscriber.name, tb_subscriber.lastname, tb_user.email, tb_user.state FROM tb_subscriber JOIN tb_user ON tb_user.id = tb_subscriber.userId JOIN tb_role ON tb_role.id = tb_user.role WHERE tb_subscriber.id = ?',
        [id]
    );
    return result;
};

export const getSubs = async () => {
    const [result] = await pool.query(
        'SELECT tb_user.id as userId, tb_subscriber.`name`, tb_subscriber.lastname, email, state, createdAt FROM tb_subscriber JOIN tb_user ON tb_user.id = tb_subscriber.userId'
    );
    return result;
};
