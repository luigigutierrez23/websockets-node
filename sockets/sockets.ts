import { Server, Socket } from "socket.io";


export const socketController = (socket: Socket) => {
    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
    })

    socket.on('send-message', (payload, callback) =>{
        const id = '123456';
        callback({ id, date: new Date().getDate() });
        socket.broadcast.emit('send-message', payload );
    })
}