const fechaActual = document.getElementById('fechaActual');

let fecha = new Date;
let año = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDay();
let diaNumero = fecha.getDate();

const meses = new Array('enero','febrero','marzo','abril','mayo','junio','julio','agosto','setiembre','octubre','noviembre','diciembre');

const dias = new Array('domingo','lunes','martes','miercoles','jueves','viernes','sabado');


fechaActual.innerHTML = `<center> Hoy es ${dias[dia]} ${diaNumero} de ${meses[mes]} del ${año} </center>`;

//-----------Mostrar la hora cada 10 milisegundos
function mostrarHora(){
    let horaActual = document.getElementById('horaActual');
    let fecha = new Date;
    horaActual.value = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();;
}
setInterval(mostrarHora,10);
