import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos:[
      {codigo:'0001',nombre:'Sekiro',stock: 100, precio:30000,color:'red', destacado:true},
      {codigo:'0002',nombre:'Fifa 21',stock: 100, precio:25000,color:'blue', destacado:false},
      {codigo:'0003',nombre:'Gears of War',stock: 100, precio:15000,color:'green', destacado:true},
      {codigo:'0004',nombre:'Mario Tennis Aces',stock: 100, precio:35000,color:'yellow', destacado:false},
      {codigo:'0005',nombre:'Boodbone',stock: 100, precio:10000,color:'blue', destacado:false},
      {codigo:'0006',nombre:'Forza Horizon 4',stock: 100, precio:20000,color:'red', destacado:true}
    ],
    titulo: '32Bits',
    subtitulo: 'Juegos de PC y consolas'
  },
  getters:{
    juegosConStock: state => {
      return state.juegos.filter((juego)=>{
        return juego.stock > 0
    })
    },
    totaljuegos: state => {
      return state.juegos.length;
    },
    stocktotal: state => {
      var totalAges = state.juegos.reduce((sum, value) => (typeof value.stock == "number" ? sum + value.stock : sum), 0);
      return totalAges
    },
    filtrojuegos: (state,getters) => (codigo) => {
      if (codigo){
        return getters.juegosConStock.filter((juego)=>{
          return juego.codigo==codigo
        })
      }else{
        return getters.juegosConStock
      }
    },
  },
   mutations: {},
  actions: {}
});

export default store;
