<template>
  <div  class="goods_wrap">
    <div class="goods_header">
        <div class="goods_id">{{product.id}}</div>
        <h1 id="goods_head">{{product.name}}</h1>
    </div>
    <div class="bcontent">
      <div class="block_img">
        <div class="big_preview">
          <a href="#">
            <img class="big_preview" :src="url(product.image)" style="width:280px;">
          </a>
        </div>
        <div class="preview_block">
          <ul id="previews">
            <li class="" v-for="(image,index) in product.images" :key="index">
              <img :src="url(image)" style="width:75px;" :alt="product.name">
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="block-text">
          <div><span>{{product.description}}</span></div>
        </div>
        <div class="goods_price">
            <span class="available">В наличии</span>
            <div>
              <span>{{product.price}}</span>
              <button class="tocart" @click="addToCart(product)"></button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return{
    }
  },
  components:{

  },
   computed:{
    ...mapGetters(['getProductById']),
    product(){
      return this.getProductById(this.$route.params.id)[0]
    }
  },
  methods:{
        ...mapActions([
      'ADD_TO_CART'
    ]),
    url(link){
        return "/img/"+link
    },
    addToCart(product){
      this.ADD_TO_CART(product)
    },

  },
      
  
}

</script>

<style>
.goods_wrap{
  width: 752px;
  padding: 10px 10px 10px 10px;
  margin: 0 0 50px 0px;
  border: 1px solid #D2D2D2;
  border-top: none;
  border-radius: 0 0 5px 5px;
}
.bcontent {
  background: none repeat scroll 0 0 #FFFFFF;
  color: #000000;
  font-size: 14px;
  height: auto;
  min-height: 374px;
  display: flex;
  width: 762px;
}
.block_img{
  font: 13px PFDinDisplayProMedium,"Trebuchet MS",Arial,Verdana,Helvetica;
  text-align: left;
  color: #000000;
  font-size: 14px;
  outline: 0;
  background: none repeat scroll 0 0 #f6f6f6;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  box-shadow: none;
  height: 389px;
  margin: 10px 0 0;
  padding: 11px;
  width: 302px;
}
div.big_preview {
  background: none repeat scroll 0 0 #FFFFFF;
  cursor: pointer;
  height: 100%;
  margin-bottom: 0;
  max-height: 280px;
  max-width: 280px;
  padding: 10px;
  border: 1px solid #d2d2d2;
  border-radius: 5px 5px 5px 5px;
  color: #000000;
  font-size: 14px;
}
div.preview_block {
  background: none repeat scroll 0 0 white;
  border: 1px solid #D2D2D2;
  border-radius: 5px 5px 5px 5px;
  height: 73px;
  margin: 10px 0 0;
  overflow: hidden;
  width: 300px;
  display: flex;
}
#previews {
    left: 0;
    margin: 0;
    padding: 6px 0 0;
    
    display: table;
}
#previews li {
    cursor: pointer;
    display: table-cell;
    vertical-align: middle;
}
#previews li.preview_selected img {
    border-bottom: 3px solid silver;
    padding-bottom: 4px;
}
#previews li img {
    margin: 0 5px;
    max-width: 54px;
    max-height: 54px;
}
.block-text {
    box-shadow: none;
    font-size: 13px;
    height: 59px;
    margin: 10px 10px 0px 10px;
    background: none repeat scroll 0 0 #f6f6f6;
    border: 1px solid #d2d2d2;
    border-radius: 5px 5px 5px 5px;
    padding: 6px 12px;
    vertical-align: middle;
}
.block-text span {
    display: table-cell;
    height: 59px;
    overflow: hidden;
    vertical-align: middle;
    line-height: 15px;
    min-width: 387px;
}
.goods_price {
    background: none repeat scroll 0 0 #F6F6F6;
    border: 1px solid #D2D2D2;
    border-radius: 5px 5px 5px 5px;
    box-shadow: none;
    
    height: 216px;
    margin: 10px 10px 0 10px;
    padding: 12px;
    position: relative;
    text-align: center;
    
}
.price {
    display: inline-block;
    font-size: 40px;
    left: 0;
    padding: 0;
    position: relative;
    text-align: center;
}
.available{
    background-color: #6dbb5b;
    padding: 1px 5px;
    width: 100px;
    text-align: center;
    border-radius: 3px;
    margin-right: 5px;
    color: #fff;
}
.goods_header {
    
    border: 1px solid #D2D2D2;
    border-radius: 5px 5px 5px 5px;
    color: #000000;
    display: block;
    font-size: 20px;
    height: auto;
    line-height: 22px;
    border: 1px solid #D2D2D2;
    padding: 5px 10px 5px 10px;
    text-align: left;
}
.goods_id {
    border-right: 1px solid #D2D2D2;
    color: #7DB0CF;
    display: table-cell;
    padding-right: 12px;
    text-align: center;
    vertical-align: middle;
    width: 70px;
}
#goods_head {
    display: table-cell;
    padding-left: 12px;
    background: none;
    font-size: 20px;
    color: #000000;
    padding: 0;
    line-height: 22px;
    height: auto;
}
</style>
