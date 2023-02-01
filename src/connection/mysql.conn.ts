import { createPool } from 'mysql2/promise';
import 'dotenv/config';

export const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_MYSQL,
});

export const isConn = async () => {
    const [res] = await pool.query('SELECT NOW()');
    return res;
};
