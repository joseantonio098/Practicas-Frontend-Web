app.component('footer-principal',{ //Componentes
    props:['cantidad','fecha'],  //Enviar info entre componentes  
    
    template: /*html*/ `
        <div class="footer">
            <p class="text-center bg-dark text-white p-3">{{texto}} - {{cantidad}} - {{fecha}}</p>
        </div>
        `,
    data() {
        return{
            texto: 'Derechos Reservados - Vue.js',
        }
    }
})