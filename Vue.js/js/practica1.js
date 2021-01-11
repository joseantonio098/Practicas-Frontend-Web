
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola, Bienvenido(a) a Vue',
        meses: ['enero','febrero','marzo','abril'],
        frutas: [
            {nombre: 'fresa', cantidad: 9},
            {nombre: 'mango', cantidad: 0},
            {nombre: 'manzana', cantidad: 7},
        ]
    }
});