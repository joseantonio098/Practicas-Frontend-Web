
//......................... MÉTODOS Y FUNCIONES ADICIONALES DE JS .........................

 //-------------------- Convertir Números y Textos
let numero= '100';
let numero2= 299.323;
let edad= 21;

Number(numero);  // Convierte texto a número
edad.toFixed(2); // Convierte un número a número exacto , (2) ---> es el Número de decimales --> (299.32)

String(edad);  // Convierte número a texto
edad.toString(); // Convierte número a texto


//-------------------- Arreglos
let semana  = new Array('lunes','martes','miercoles','jueves','viernes');
let numeros = [3,6,1,5,70,10,30,40,20];

semana.indexOf('miercoles');  // Indica la posición de un elemento en el array ---> (3)
semana.slice(3,4); // Elimina el elemento de un array ---> elimina desde la posición 3 al 4 (2 elementos)

numero.sort(function(a,b){
    return a-b   // Permite ordenar Números según su valor  ----> (1,3,5,6,10,20,30,40,70)
});

// *Arreglos con objetos
const autos = [
    {modelo: 'Mustang', motor: 6.2},
    {modelo: 'Camaro', motor: 6.1},
    {modelo: 'Challenger', motor: 6.3}
]
console.log(autos[0].motor); //Accedemos al array autos ----> posición(0) ------> propiedad(motor)


//-------------------- Funciones
//Declaramos Funciones con valores por defecto a los parámetros
let amigo = (nombre='jose',edad=22) => {
    return `yo me llamo ${nombre} y tengo ${edad} años`;
}
console.log(amigo('Raul')); //Nombre ---->(Raul)


//Funciónes Autoinvocadas -----> (IIFE)
(function(mascota){
    console.log(`mi mascota es un ${mascota}`)
})('Gato'); //----> mascota = 'Gato';


//--------------------------- (LOCALSTORAGE) -----> Datos almacenados en la pag. Web 

//-->(localStorage) Si cerramos el navegador, el elemento(llave) se mantiene almacenado
//-->(sessionStorage) si cerramos el navegador, el elemento se elimina

//---> Permite establecer un elemento(llave) y almacenarlo
localStorage.setItem('mascota','Tiger');

//---> Permite acceder al elemento almacenado
localStorage.getItem('mascota');

//---> Permite eliminar el elemento almacenado
localStorage.removeItem('mascota');

//---> Permite eliminar todos los elementos almacenados
localStorage.clear();


//--------------------------- Errores con Try Catch

//---> Permite ejecutar código(Funciones) sin alterar el resto de funciones.
try{
    aplicando();
} catch(error) {
    console.log(error);
} finally { 
    console.log('no le importa, igual se ejecuta'); //-->Siempre se va ejecutar
}


//--------------------------- Fecha

//---> Podemos definir una fecha específica
let fecha = new Date('10-20-2016');  
console.log(fecha);

//---> Podemos establecer un año
let dato = fecha.setFullYear(2018);
console.log(dato);


//--------------------------- Operador Ternario
const logueado = true;
console.log( logueado === true ? 'Sí se logeo' : 'No se logeo' );


//--------------------------- Iteradores para recorrer

//---> forEach para recorrer arreglos
const meses = ['enero','febrero','marzo','abril','mayo','junio'];

meses.forEach( function (mes, index){
    console.log(`${index} - ${mes}`);
});


//---> map para recorrer arreglos con objetos
const carrito = [
    {id: 1, producto: 'libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Guitarra'},
    {id: 4, producto: 'Disco'}
]
const nomProd = carrito.map( function(carro){
    console.log(`${carro.id} - ${carro.producto}`);
});

//---> Recorrer objetos
const automovil = {
    modelo: 'Camaro',
    motor: 6.2,
    marca: 'Chevrolet'
}
for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}

//--------------------------- Eventos
btn.addEventListener('click', function(e){
    console.log(e.type);
    // e.type --> Muestra el tipo de evento que se ejecutó (click)
});

//---> Evento bubbling
btn.addEventListener('click', function(e){
    e.stopPropagation();
    // e.stopPropagation() --> Detiene la ejecución(propagación) de otros eventos
});