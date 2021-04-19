import { createStore } from 'vuex'

export default createStore({
  state: {  /* Computed -> Datos globales */
    contador: 10,
    saludar: 'WELCOME!!'
  },
  mutations: { /* Methods -> Modifica el estado */
    aumentarContador(state){
      state.contador = state.contador + 5;
    },
    disminuirContador(state, numero){
      state.contador = state.contador - numero;
    },
    potenciaContador(state,objetoPot){
      state.contador = Math.pow(state.contador, objetoPot.exp) - objetoPot.dif
    }
  }, /* Methods -> Acciona/Ejecuta las mutaciones */
  actions: {
    accionDismContador({ commit }, numero){
      commit('disminuirContador', numero);
    },
    accionPotContador({ commit }, objetoPot){
      commit('potenciaContador', objetoPot);
    }
  },
  modules: {
  }
})
