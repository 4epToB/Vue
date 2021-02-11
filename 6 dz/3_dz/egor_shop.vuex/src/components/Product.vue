<template>
      <div class="itemblock" >
        <figure>
          <img :src="url(product.image)" alt="">
          <figcaption>ID:{{product.id}}</figcaption>
        </figure>
        <div class="descrwrap">
            <div class="name"><router-link :to="getFullUrl(product)" :product="product">{{product.name}}</router-link></div>
            <div class="descr">{{product.description}}</div>
            <div><button class="compare"></button><button class="tocart" @click="addToCart"></button>{{product.price}}</div>
        </div>
      </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
    }
  },
  components:{
    
  },
  computed:{
    ...mapGetters(['getFullUrl']),

  },
  methods:{
    url(link){
        return "/img/"+link
    },
    addToCart(){
      this.$emit('addToCart',this.product)
    },
  },
  props:["product"],
      
  
}

</script>

<style>
.itemblock{
  background-color:white ;
  width: 371px;
  height: 142px;
  margin: 5px 0px 5px 0px;
  padding: 0px 0px 0px 0px;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  display: flex;
}
figure img{
  width: 100px;
  height: 100px;
}
figure{
  margin: 0px;
  width: 100px;
  padding: 10px 0 0 10px;
}
figcaption{
  color: #7f7f7f;
  text-align: center;
  font-size: 12px;
  padding-top: 5px;
}
.descrwrap{
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 10px 10px 10px 10px
}
.descrwrap div:last-child{
    justify-self: end;
    height: 20px;
    margin-top: auto
    
}
.name{
    font-size: 14px;
}
.descr{
    color: #7f7f7f;
    font-size: 12px;
}
.compare, .tocart{
    padding: 0px;
    margin: 0px;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    background: url(../assets/compare_icon.png) 0 -40px no-repeat
}
.tocart{
    background: url(../assets/cart.png) no-repeat 0 0
}
button:active, button:focus {
    outline: none;
}
</style>
