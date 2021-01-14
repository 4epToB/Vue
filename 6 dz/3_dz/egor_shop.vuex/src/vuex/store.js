import {createStore} from 'vuex'
import axios from 'axios'



let store = createStore ({
  state(){
    return{
    products:[],
    }
  },
  mutations:{
    SET_PRODUCTS_TO_STATE:(state, products)=>{
      state.products=products
    }
  },
  actions:{
    GET_PRODUCTS_FROM_API({commit}){
      return axios('http://localhost:3000/products',{
        method: "GET"
      })
      .then((products)=>{
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
    }
  },
  getters:{
    PRODUCTS(state){
      return state.products
    }
  },

})
export default store