import express, { Application } from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.routes';
import { accountAdmin, createRoles } from './libs/initialSetup';

const app: Application = express();

//middlewares
app.use(morgan('dev'));

// Initial Setup
createRoles();
accountAdmin();

// routes
app.use(authRoute);

export default app;
