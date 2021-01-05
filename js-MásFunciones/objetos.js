//-------------------------------Objetos en JS (Inicio)

"use strict"; //Vuelve el código JS en forma estricta

const productos = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    modelo: function(color,tamano){ //Método
        return(`El producto es de color ${color}, tiene un tamaño ${tamano} y tiene un precio de ${this.precio} soles`);
    },
    informacion: { //Objeto
        peso: '1 kg',
        fecha: 2017,
        tipo: { //Objeto Anidado
            campaña: 'verano',
            lanzamiento: 2021
        }
    } 
}

Object.freeze(productos); //Congelamos un objeto (No se podrá reemplazar, agregar y eliminar)
Object.isFrozen(productos); //Preguntamos si el objeto está congelado

Object.seal(productos); //Sellamos un objeto (solo se podrá reemplazar, no agregar ni eliminar)
Object.isSealed(productos) //Preguntamos si el objeto está sellado

Object.keys( productos ); //Retorna las llaves en un arreglo
Object.values( productos ); //Retorna los valores de las llaves en un arreglo
Object.entries( productos ); //Retorna las llaves y sus valores en un arreglo

//Unir Objetos (2 formas)
const prod1 = Object.assign(productos,ubicacion);
const prod2 = {...productos,...ubicacion}


const { nombre,precio } = productos //Destructuración de objetos 
const { informacion: { tipo:{ lanzamiento } } } = productos //Destructuración de objetos anidados

delete productos.disponible; //Eliminando llaves de un objeto 



// -----------------------------------------------------------------
// Función Constructora
// --> Nro-1 Creamos en objeto
function Cliente(nombre,saldo){ // --> Nro-2 Definimos la Clase (El Constructor)
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = `Gold`
        } else if ( this.saldo > 500){
            tipo = 'Platinum'
        } else {
            tipo = 'Normal'
        }
        return tipo;
    }
}
// --> Nro-3 Instanciamos el objeto
const persona = new Cliente('jose',700);
const persona2 = new Cliente('Nicol',400);
console.log(persona2.tipoCliente());

// ------------> Objetos y constructores existentes
// STRING
const nombre1 = 'Jose';
const nombre2 = new String('Jose');

// NÚMEROS 
const numero1 = 20;
const numero2 = new Number(20);

// ARREGLOS
const arreglo1 = [1,2,3,4,5];
const arreglo2 = new Array(1,2,3,4,5);

// BOOLEAN
const boolean1 = true;
const boolean2 = new Boolean(true); 

// FUNCIONES
const funcion1 = function (a,b){
    return a + b;
}
const funcion2 = new Function('a','b','return a+b');

// OBJETOS
const persona1 = {
    nombre: 'Jose',
    edad: 22
}
const persona2 = new Object({
    nombre: 'Jose',
    edad: 22
});



// -----------------------------------------------------------------
// PROTOTYPE EN JAVASCRIPT
function Cliente(nombre,saldo){ 
    this.nombre = nombre;
    this.saldo = saldo;
}

// Prototipo que imprime el tipo de cliente
Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 1000){
        tipo = `Gold`
    } else if ( this.saldo > 500){
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }
    return tipo;
}

// Prototipo que imprime descripción del cliente
Cliente.prototype.descripCliente = function(edad){
    return `Este cliente se llama ${this.nombre}, tiene ${edad} años y tiene un saldo de: ${this.saldo}`
}

// Prototipo que imprime el retiro de saldo
Cliente.prototype.retirarSaldo = function(retiro){
    return this.saldo -= retiro;
}

persona1 = new Cliente('José',2000); //Instanciamos al Cliente
persona1.retirarSaldo(300);

console.log(persona1.descripCliente(22)); //Mostramos en pantalla



// -----------------------> HEREDAR PROTOTYPE A OTROS OBJETOS
function Cliente(nombre,saldo){ 
    this.nombre = nombre;
    this.saldo = saldo;
}

// Prototipo que imprime descripción del cliente
Cliente.prototype.descripCliente = function(){
    return `Se llama ${this.nombre} y su saldo es ${this.saldo}`
}

persona1 = new Cliente('José',2000); //Instanciamos al Cliente
console.log(persona1.descripCliente());

function Empresa(nombre,saldo,telefono,tipo){

    // Heredamos las propiedades del objeto Cliente (nombre y saldo)
    Cliente.call(this, nombre, saldo);

    this.telefono = telefono;
    this.tipo = tipo;
}

// Heredamos Todo los prototipos del objeto Cliente ( descripCliente() )
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Udemy',15000,3011382,'Educación'); //Instanciamos a la empresa
console.log(empresa.descripCliente());


// -----------------------> Otra forma de crear prototype
const Cliente = {
    imprimirSaldo: function(){
        return `hola ${this.nombre} tu saldo es ${this.saldo}`
    }
}
//Crear el objeto (SEGUNDA-FORMA)
const usuario = Object.create(Cliente);
usuario.nombre = 'Jose';
usuario.saldo = '5000';

console.log(usuario.imprimirSaldo());



// -----------------------------------------------------------------
// -----------------------> CLASES EN JAVASCRIPT
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo(){
        return `Hola ${this.nombre} tu saldo es de: ${this.saldo} soles`;
    }

    //(static) Muestra el método sin necesidad de instanciar el objeto
    static bienvenida(){
        return `Bienvenido al Cajero`;
    }
}

//----> Herencia de clases
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,tipo){
        super(nombre,saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }

    //Podemos sobrescribir métodos
    static bienvenida(){
        return `Bienvenido al Cajero para Empresas`;
    }
}

const empresa = new Empresa('empresa1',1000,989010571,'Construccion');
console.log(empresa.imprimirSaldo());