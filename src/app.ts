import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
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

// Initial Setup
createRoles();
accountAdmin();

// routes
app.use('/auth/', authRoute);
app.use('/user/', userRoute);

export default app;
