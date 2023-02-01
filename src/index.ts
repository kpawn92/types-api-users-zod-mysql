import 'dotenv/config';
import { isConn } from './connection/mysql.conn';
import app from './app';

try {
    async function main() {
        app.listen(process.env.PORT || 3000);
        console.log(await isConn(), 'Database conected');
        console.log('Server listened on port: ' + process.env.PORT);
    }

    main();
} catch (e) {
    console.log(e);
}
