import dotenv from 'dotenv';
import ExpressServer from './models/server';


dotenv.config();

const server = new ExpressServer();

server.listen();