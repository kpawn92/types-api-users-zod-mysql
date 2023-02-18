import 'dotenv/config';
import { isConn } from './connection/mysql.conn';
import app from './app';
import { Server as WebsocketServer } from 'socket.io';
import http from 'http';
import socket from './socket';

const server = http.createServer(app);
const httpServer = server.listen(process.env.PORT || 3000);
const io = new WebsocketServer(httpServer);
socket(io);
try {
    async function main() {
        // app.listen(process.env.PORT || 3000);
        console.log(await isConn(), '\n🔥 Database conected');
        console.log('🚀 Server listened on port: ' + process.env.PORT);
    }

    main();
} catch (e) {
    console.log(e);
}
