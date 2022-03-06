import express, { Application } from 'express';
import { Server, Socket } from 'socket.io'
import cors from 'cors';
import { socketController } from '../sockets/sockets';

class ExpressServer {
    private app: Application;
    private port: string;
    private server;
    private io;
    private paths = {
        auth:'/api/auth',
    }

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT || '8081';
        this.server = require('http').createServer(this.app);
        this.io     = new Server(this.server);

        /**
         * Middlewares
         */
        this.middlewares();

        /**
         * Routes
         */
        this.routes();

        /**
         * Sockets
         */
        this.sockets();
    }

    middlewares() {

        /**
         * CORS
         */
        this.app.use( cors() );

        /**
         * Public directory
         */
        this.app.use( express.static('public') );
    }

    routes() {    
        // this.app.use( this.paths.auth, require('../routes/auth'));        
    }

    sockets(){          
          this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Server running on port:', this.port );
        });
    }

}




export default ExpressServer;