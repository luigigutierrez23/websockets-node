"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const sockets_1 = require("../sockets/sockets");
class ExpressServer {
    constructor() {
        this.paths = {
            auth: '/api/auth',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8081';
        this.server = require('http').createServer(this.app);
        this.io = new socket_io_1.Server(this.server);
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
        this.app.use((0, cors_1.default)());
        /**
         * Public directory
         */
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        // this.app.use( this.paths.auth, require('../routes/auth'));        
    }
    sockets() {
        this.io.on('connection', sockets_1.socketController);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('Server running on port:', this.port);
        });
    }
}
exports.default = ExpressServer;
//# sourceMappingURL=server.js.map