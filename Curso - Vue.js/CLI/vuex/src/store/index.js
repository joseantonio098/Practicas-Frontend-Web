import { createStore } from 'vuex'

export default createStore({
  state: {  /* Computed -> Datos globales */
    contador: 100,
    saludar: 'WELCOME!!'
  },
  mutations: { /* Methods -> Modifica el estado */
    aumentarContador(state){
      state.contador = state.contador + 10;
    },
    disminuirContador(state, numero){
      state.contador = state.contador - numero;
    }
  }, /* Methods -> Acciona/Ejecuta las mutaciones */
  actions: {
    accionDismContador({ commit }, numero){
      commit('disminuirContador', numero);
    }
  },
  modules: {
  }
})
