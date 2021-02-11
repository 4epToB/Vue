<template>
  <div id="nav">
    <ul @click="filter">
        <li id='firstlvl' v-for="(catName,index) in filteredCategory" :key="index" >
        <router-link :to="getLinkFromCatName(catName)">{{catName}}</router-link>
          <ul class="open">
            <li v-for="(catName2,index) in filteredSecond(catName)" :key="index">
              <router-link :to="getLinkFromCatName(catName)+'/'+catName2">{{catName2}}</router-link>
            </li>
          </ul>
        </li>
    </ul>
   
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
    filteredCategory(){
      return [...new Set(this.PRODUCTS.map(it => it.category))];
    },

  },
  
  components:{},
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    filteredSecond(catName){
      let tempmas=this.PRODUCTS.filter(at => new RegExp(catName, "i").test(at.category))// массив объектов с category:"catName"
      if(catName=="Видеокарты"){
          return [...new Set(tempmas.map(at => at.manufacturer))]//массив уникальных значений ключа manufacturer в массиве среди видеокарт
        }else if(catName=="Процессоры"){
          return [...new Set(tempmas.map(at => at.Socket))]
        }else if(catName=="Жесткие диски"){
          return [...new Set(tempmas.map(at => at.formfactor))]
        }else if(catName=="Материнские платы"){
          return [...new Set(tempmas.map(at => at.Socket))]
        }else {
          return []
        }
    },
    getLinkFromCatName(catName){
      return "/"+this.PRODUCTS.filter(
        (prod)=>{return prod.category==catName})[0].categoryName
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
#nav{
  flex: 0 0 225px;
  margin: 0;
 
  padding: 10px 0px 0px 10px;
  
}
ul{
  padding: 0 7px;
  background-color: #f6f6f6;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  margin: 0;
  margin-left: 0;
}
li{
  padding: 0;
  list-style: none;
  text-align: left;
  cursor: pointer;
  margin-bottom: 3px;
  border-bottom: 1px solid #d2d2d2;
  margin: 0;
  margin-bottom: 3px;
  padding-bottom: 5px;
  padding-top: 3px;
  padding-right: 20px;
  background: url(../assets/ilmenu_plus.gif) no-repeat 100%;
  background-position: right 3px;

}
.open li{
  background-image: none
}
.open{
  background-color: #fff;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  font-family: PFDinDisplayProMedium,"Trebuchet MS";
  font-size: 13px;
  font-weight: 400;
  margin-top: 5px;
  padding-top: 4px;
  padding-right: 6px;
  margin-right: -20px;
  margin-bottom: 5px;
  display: block;
}
</style>
