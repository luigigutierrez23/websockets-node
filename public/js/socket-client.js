/**
 * HTML References
 */
const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txtMsg = document.querySelector('#txtMsg');
const btnSend = document.querySelector('#btnSend');


const socket = io();

socket.on('connect', () => {
    lbOffline.style.display = 'none';
    lbOnline.style.display = '';
});

socket.on('disconnect', () => {
    lbOnline.style.display = 'none';
    lbOffline.style.display = '';
});

socket.on('send-message', (payload) => {
    console.log(payload);
});


btnSend.addEventListener('click', () => {
    const msg = txtMsg.value;
    const payload = {
        message: msg,
        id:'asd',
        date: new Date().getTime(),
    }
    socket.emit('send-message', payload, (id) => {
        console.log('From server: ',id);
    });
})