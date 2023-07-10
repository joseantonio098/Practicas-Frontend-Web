const socket = io(); //Mantiene la conexión con el servidor
 
// DOM Elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', ()=>{
    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    })
    message.value = '';
});

message.addEventListener('keypress', ()=>{
    socket.emit('chat:typing', username.value)
});

socket.on('chat:message',(data) => {
    actions.innerHTML = ''
    output.innerHTML += /* HTML */ `<p>
        <strong>${data.username}</strong>: ${data.message}
    </p>`;
})

socket.on('chat:typing', (data)=>{
    actions.innerHTML = /* HTML */ `<p><em>${data} está escribiendo..</em></p>`
});