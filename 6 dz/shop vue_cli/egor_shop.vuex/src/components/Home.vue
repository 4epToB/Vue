<template>
  <div id="home">
    <div class="content">
      <product 
        v-for="(product,index) in filteredProducts" 
        :key="index"
        :product="product"
        @addToCart="addToCart"
      ></product>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import Product from './Product'
export default {
  data(){
    return{
        
    }
  },
  computed:{
    ...mapGetters(['PRODUCTS','getHits','getCategory','getSubCategory']),   
    filteredProducts(){
      if(!this.$route.params.categoryName){
        return this.getHits
      }else if(!this.$route.params.categoryName2){
        return this.getCategory(this.$route.params.categoryName)
      }else {
        return this.getSubCategory(this.$route.params.categoryName,this.$route.params.categoryName2)
      }
  }
  },
  
  components:{
    'product':Product
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(product){
      this.ADD_TO_CART(product)
    },
  },
  beforemount(){
  },
  created: function(){
    this.GET_PRODUCTS_FROM_API()
  }
}

</script>

<style scoped>
*{
  box-sizing: border-box;
}

#home {
  width: 775px;
}
.top{
  background: url(../assets/bg2_sprite.png) no-repeat 100% -245px;
  height: 37px;
  width: 100%;
  text-align: left;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
  display: block;
  font-family: PFDinDisplayProMedium,"Trebuchet MS";
  font-size: 20px;
  line-height: 30px;
  overflow: hidden;
  padding: 3px 0 8px 16px;
}
.content{
  display: flex;
  border: 1px solid #d2d2d2;
  border-top: none;
  border-bottom: none;
  background-color: #f6f6f6;
  flex-wrap: wrap;
  justify-content:space-between;
  margin: 0px 0px 0px 0px;
  padding: 5px 10px 5px 10px;
 
    
}

</style>
