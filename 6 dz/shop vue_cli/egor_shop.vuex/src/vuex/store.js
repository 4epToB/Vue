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
      if(state.cart.length){
        let productExist=false;
        state.cart.map(function(item){
          if(item.id==product.id){
            productExist=true
            if(item.quant<product.available){
              item.quant++
            }
            }else{''}
          }) 
        if(!productExist){
          product['quant']=1
          state.cart.push(product)
        }
      }else{
        product['quant']=1
        state.cart.push(product)
      }

    },
    REMOVE_CART:(state,index)=>{
      state.cart.splice(index,1)
    },
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
    },
    DELETE_FROM_CART({commit},index){
      commit('REMOVE_CART',index)
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
    },
    totalPrice(state){
      let total= [];
      if (state.cart.length){    
        for (let item of state.cart){
          total.push(item.quant*item.price)
        }
        total=total.reduce(function(sum,el){
          return sum+el
        })
        return total
      } else {return 0}
       
    },
    totalCount(state){
      let total=0;
      if (state.cart.length){    
        for (let item of state.cart){
          total=total+item.quant
        }
        return total
      } else {return 0}
    },
    getCategory(state){
      return function(categoryName){
        return state.products.filter(
          (prod)=>{return prod.categoryName==categoryName})
      }
    },
    getSubCategory(state){
      return function(categoryName,categorySubName){
        let temp=state.products.filter((prod)=>{return prod.categoryName==categoryName})
        switch(categoryName){
          case 'CPU': return temp.filter((prod)=>{return prod.Socket==categorySubName})
          case 'GPU': return temp.filter((prod)=>{return prod.manufacturer==categorySubName})
          case 'HDD': return temp.filter((prod)=>{return prod.formfactor==categorySubName})
          case 'MB': return temp.filter((prod)=>{return prod.Socket==categorySubName})
        }
      }
    },
    getFullUrl(){
      return function(product){
        switch(product.categoryName){
          case 'CPU': return "/"+product.categoryName+"/"+product.Socket+"/"+product.id
          case 'GPU': return "/"+product.categoryName+"/"+product.manufacturer+"/"+product.id
          case 'HDD': return "/"+product.categoryName+"/"+product.formfactor+"/"+product.id
          case 'MB': return "/"+product.categoryName+"/"+product.Socket+"/"+product.id
        }
      }
    },
    getProductById(state){
      return function(id){
        return state.products.filter(
          (prod)=>{return prod.id==id})
      }
    },
  },


})
export default store