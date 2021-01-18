import {createStore} from 'vuex'
import axios from 'axios'



let store = createStore ({
  state(){
    return{
    products:[],
    cart:[],  
    }
  },
  mutations:{
    SET_PRODUCTS_TO_STATE:(state, products)=>{
      state.products=products
    },
    SET_CART:(state,product)=>{
      state.cart.push(product)
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
    },
    ADD_TO_CART({commit},product){
      commit('SET_CART',product)
    }
  },
  getters:{
    PRODUCTS(state){
      return state.products
    },
    getHits(state){
      return state.products.filter(
        (prod)=>{return prod.hit==true})
    },
    getCart(state){
      return state.cart
    }
  },


})
export default store