<template>
  <div id="mainwrapper">
    <shop-header :sitename="sitename"></shop-header>
    <div id="middle">
      <navigation id="nav"></navigation>
      <div class="content-wrap">
        <search></search>
        <div class="content">
          <div class="top">{{getPathNameFromURL}}-{{$route.params.categoryName2}}</div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from './components/Header'
import Search from './components/Search'
import Navigation from './components/Navigation'
export default {
  data(){
    return{
      sitename: "Сеть компьютерных магазинов Геральд"
    }
  },
  components:{
    'shop-header':Header,
    'navigation':Navigation,
    'search':Search,
    
  },
  computed:{
    ...mapGetters(['PRODUCTS']), 
    getPathNameFromURL(){
      if(!this.$route.params.categoryName){
        return "Хиты продаж"
      }else if(this.$route.params.categoryName=="/cart"){
        return "Корзина"
      }else{
        return this.PRODUCTS.filter(
          (prod)=>{return prod.categoryName==this.$route.params.categoryName})[0].category
      }
    },
  }
}

</script>

<style>
#mainwrapper{
  width: 1240px;
  padding: 0 10px;
  margin: 0 auto;
}
#middle{
  display: flex;
  width: 100%;
  background-color: #fff;
  margin-top: -18px;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
}
body{
  margin: 0px;
  background: url(./assets/bg_sprite.png) repeat-x 0 -104px;
  font: 13px PFDinDisplayProMedium,"Trebuchet MS",Arial,Verdana,Helvetica;
}
.top{
  background: url(./assets/bg2_sprite.png) no-repeat 100% -245px;
  height: 37px;
  text-align: left;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
  display: block;
  font-family: PFDinDisplayProMedium,"Trebuchet MS";
  font-size: 20px;
  line-height: 30px;
  overflow: hidden;
  margin-top: 10px;
  padding: 3px 0 8px 16px;
  box-sizing: border-box;
  width: 775px;
}
.content-wrap{
  padding:10px;
  width: 100%;
}
a {
    color: #000;
    text-decoration: none;
}
input{
      border: 1px solid #d2d2d2;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,.1) inset;
    padding: 3px 5px;
    color: #333;
}
</style>
