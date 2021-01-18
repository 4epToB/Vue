<template>
  <div id="mainwrapper">
    <shop-header :sitename="sitename"></shop-header>
    <div id="middle">
      <navigation id="nav"></navigation>
      <div class="content">
        <search></search>
        <router-view></router-view>
      </div>
      
    </div>
  </div>
</template>

<script>
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
</style>
