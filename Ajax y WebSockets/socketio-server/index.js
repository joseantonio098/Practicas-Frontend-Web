//Configuración del servidor

const path = require('path'); //manejar rutas
const express = require('express');
const app = express();

// settings (configurar puerto)
app.set('port', process.env.PORT || 3000);

// static files (mostrar archivo en el navegador)
app.use(express.static(path.join(__dirname, 'public')));

// start the server (Ejecutar servidor en el puerto)
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

//WebSockets

const SocketIO = require('socket.io'); //comunicación bidireccional
const io = SocketIO(server);

io.on('connection', (socket) =>{ //Evento de conexión
    console.log('xD')

    socket.on('chat:message', (data) =>{
        io.sockets.emit('chat:message', data); //Emitir a todos los usuarios incluyéndome
    });

    socket.on('chat:typing', (data) =>{
        socket.broadcast.emit('chat:typing', data); //Emitir a todos los usuarios sin incluirme
    });
});
