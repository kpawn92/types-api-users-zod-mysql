import 'dotenv/config';
export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Gestor de usuarios',
            version: '1.0.0',
            description: 'API-REST-MYSQL-NODEJS',
        },
        servers: [
            {
                url: process.env.HOSTING,
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};
