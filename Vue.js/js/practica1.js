
const app = new Vue({
    el: '#app',
    data: {     //Permite agregar información
        titulo: 'Hola, Bienvenido(a) a Vue',
        meses: ['enero','febrero','marzo','abril'],
        frutas: [
            {nombre: 'fresa', cantidad: 9},
            {nombre: 'mango', cantidad: 0},
            {nombre: 'manzana', cantidad: 7},
        ],
        nuevaFruta: '',
        totalFrutas: 0
    },
    methods:{       //Permite agregar funciones 
        agregarFruta(){
            this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0  });
            this.nuevaFruta = '';
        },
        agregarEstado: function(){
            console.log('buen estado');
        }
    },
    computed:{      //Permite agregar funciones (Se ejecutan automáticamente)
        sumarFrutas(){
            this.totalFrutas = 0;
            for(fruta of this.frutas){
                if(fruta.cantidad >= 0 && fruta.cantidad !== ''){
                    this.totalFrutas = this.totalFrutas + fruta.cantidad;
                }
            }
            return this.totalFrutas;
        }
    }
});