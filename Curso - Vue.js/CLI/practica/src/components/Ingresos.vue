<template>
    <div class="cont-ingresos">
        <!-- <button @click="aumentarSaldo">Aumentar Saldo</button> -->
        <p>Su saldo es: {{saldo}}</p>
        
        <!-- Custom Events -->
        <IngPersonales texto="Aumentar saldo" @accion="aumentarSaldo" />
        <IngPersonales texto="Disminuir saldo" @accion="disminuirSaldo" :habilitar="disabled"/>
    </div>
</template>

<script>
import IngPersonales from './IngPersonales'

export default {
    components: {
        IngPersonales
    },
    data() {
        return {
            saldo: 1000,
            disabled: false,
        }
    },
    methods: {
        aumentarSaldo(){
            this.saldo += 100
            this.disabled = false
        },
        disminuirSaldo(){
            if(this.saldo === 0){
                alert('Saldo insuficiente');
                this.disabled = true
            }else{
                this.saldo -= 100
            }
        }
    }
}
</script>

<style scoped>
    p{
      background-color: rgb(181, 204, 218);
      width: 300px;
      margin: 5px auto;  
      padding: 5px;
    }
</style>