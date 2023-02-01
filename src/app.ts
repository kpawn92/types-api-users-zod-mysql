import express, { Application } from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.routes';
import { accountAdmin, createRoles } from './libs/initialSetup';

const app: Application = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

// Initial Setup
createRoles();
accountAdmin();

// routes
app.use('/api/auth/', authRoute);

export default app;
