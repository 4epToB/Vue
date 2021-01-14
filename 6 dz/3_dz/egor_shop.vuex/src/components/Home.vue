<template>
  <div id="home">
    <div class="top">Хиты продаж</div>
    <div class="content">
      <div class="itemblock" v-for="(product,index) in PRODUCTS" :key="index">
        <figure>
          <img :src=url(product.image) alt="">
          <figcaption>{{product.id}}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{
        
    }
  },
  computed:{
    ...mapGetters(['PRODUCTS']),   
  },
  
  components:{},
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    url(link){
            return "../assets/"+link
    }
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
  width: 805px;
  margin-left: 10px;
}
.top{
  background: url(../assets/bg2_sprite.png) no-repeat 100% -245px;
  height: 37px;
  width: 100%;
  text-align: left;
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
.itemblock{
  background-color:white ;
  width: 386px;
  height: 142px;
  margin: 5px 0px 5px 0px;
  padding: 0px 0px 0px 0px;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
}
img{
  width: 100px;
  height: 100px;
}
figure{
  margin: 0px;
}
</style>
