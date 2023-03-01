import { createPool } from 'mysql2/promise';
import 'dotenv/config';

export const pool = createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASS || '',
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_MYSQL || 'usersdb',
});

export const isConn = async () => {
    const [res] = await pool.query('SELECT NOW()');
    return res;
};
