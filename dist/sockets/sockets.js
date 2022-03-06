"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketController = void 0;
const socketController = (socket) => {
    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
    });
    socket.on('send-message', (payload, callback) => {
        const id = '123456';
        callback({ id, date: new Date().getDate() });
        socket.broadcast.emit('send-message', payload);
    });
};
exports.socketController = socketController;
//# sourceMappingURL=sockets.js.map