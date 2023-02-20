import * as fs from 'fs';
export let views = 0;
export let users_conex = 0;

try {
    views = 0 | Number(fs.readFileSync('visitas.txt', 'utf-8'));
} catch (err) {
    views = 0;
    console.error(err);
}

const writeViews = () => {
    try {
        fs.writeFileSync('visitas.txt', String(views));
    } catch (err) {
        console.error(err);
    }
};

export default (io: any) => {
    io.on('connection', (socket: any) => {
        console.log('New user conected ' + socket.id);
        users_conex++;
        views++;

        writeViews();
        io.emit('update', users_conex, views);

        socket.on('disconnect', () => {
            console.log('User disconned ' + socket.id);
            users_conex--;
            io.emit('update', users_conex, views);
        });
    });
};
