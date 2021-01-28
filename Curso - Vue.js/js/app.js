const app = Vue.createApp({ //Versión 3
    data(){
        return{
            titulo: `Saludos desde Vue.js!`,
            nombre: `Jose Valencia`,
            cantidad: 10,
            deportes: ['ajedrez','natación','futbol','voley'],
            habilitar: false,
            colorTexto: 'text-warning',
            subTitulo: 'Welcome a vue!!',
            ruta: 'https://www.youtube.com/channel/UCeBvCHoZXt6uGMo33BPH7oQ',
        }
    },
    methods: {
        agregarCantidad(){
            this.cantidad ++;
        },
        disminuirCantidad(valor){
            if( this.cantidad == 0 ){
                alert('Cantidad Vacía');
                this.habilitar = true;
                return;
            }
            this.cantidad = this.cantidad - valor;
        }
    },
    computed: {
        txtMayuscula(){
            return this.subTitulo.toUpperCase();
        }
    }
})

const mountedApp = app.mount('#app'); //Relacionamos el id="app" con la Instancia

