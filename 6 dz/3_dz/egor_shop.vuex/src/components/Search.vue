<template>
  <div id="search">
    <input type="text" maxlength="255" placeholder="Поиск" > 
    <div class="button_wrap">
      <button >Найти</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },

}

</script>

<style>
*{
  box-sizing: content-box;
}
#search {
  background-color: #e4eef4;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  font-size: 13px;
  padding: 10px 10px 10px 10px;
  display: flex;
}
#search input{
  border: none;
  height: 23px;
  width: 85%;
  vertical-align: middle;
  font: 16px PFDinDisplayProMedium,"Trebuchet MS",Arial,Verdana,Helvetica;
  padding: 5px 15px;
  float: left;
}
.button_wrap{
  width: 15%;
  height: 33px;
}
#search button{
  box-sizing: border-box;
  border: 1px solid #cfcfcf;
  height: 100%;
  width: 70%;
  margin-left: 15%;
  font: 16px PFDinDisplayProMedium,"Trebuchet MS",Arial,Verdana,Helvetica;
}
</style>
