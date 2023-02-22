import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

//SWAGGER
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swaggerOptions';

import authRoute from './routes/auth.routes';
import userRoute from './routes/user.routes';
import { accountAdmin, createRoles } from './libs/initialSetup';

const app: Application = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const specs = swaggerJSDoc(options);

// Initial Setup
createRoles();
accountAdmin();

// routes
app.use('/auth/', authRoute);
app.use('/user/', userRoute);

// Swagger UI
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;
