const app = Vue.createApp({ //Versión 3
    data(){
        return{
            titulo: `Saludos desde Vue.js!`,
            nombre: `Jose Valencia`,
            cantidad: 10,
            ruta: 'https://www.youtube.com/channel/UCeBvCHoZXt6uGMo33BPH7oQ',
        }
    },
})

const mountedApp = app.mount('#app'); //Relacionamos el id="app" con la Instancia

