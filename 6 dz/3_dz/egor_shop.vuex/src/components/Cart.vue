<template>
      <div id="basket_tr">
        <table id="table-basket">
          <tbody>
            <tr class="bskt_title"><th colspan="7"><span>Товары в корзине</span></th></tr>
            <tr class="bskt_subtitle">
              <th class="t1"><span>ID</span></th>
              <th class="t2" colspan="2"><span>Наименование</span></th>
              <th class="t3"><span>Цена, руб</span></th>
              <th class="t4"><span>Кол-во</span></th>
              <th class="t5"><span>Сумма, руб</span></th>
              <th class="t6"><span><a class="bskt_btn bskt_del_all" onclick="delete_all()" title="Очистить корзину"></a></span></th>
            </tr>
            <tr v-for="(item,index) in getCart" :key="index">
                <td class="t1">{{item.id}}</td>
                <td class="t2">
                  <span class="img-wrapper">
                    <router-link class="goods-thumb" :to="getFullUrl(item)">
                      <img :src="url(item.image)">
                    </router-link>
                  </span>
                </td>
                <td class="t2">
                  <router-link class="underline" :to="getFullUrl(item)">{{item.name}}</router-link>
                  <div class="bskt_anons">{{item.description}}</div>
                </td>
                <td class="t3">{{item.price}}</td>
                <td class="t4">
                  <input 
                  type="number" 
                  size="2" 
                  maxlength="3" 
                  :max="item.available"
                  min='0'
                  v-model="item.quant"
                  name="kol" 
                  id="kol"
                  onblur="">
                </td>
                <td class="t5">{{item.quant*item.price}}</td>
                <td class="t6"><a class="bskt_btn bskt_del_pos" @click="deleteFromCart(item.index)" title="Удалить товар из корзины"></a></td>
            </tr>
            <tr class="itogo">
              <td colspan="4"></td>
              <td>Итого:</td>
              <td><span id="sum_itogo">{{totalPrice}}</span></td>
            </tr>
          </tbody>
        </table>
        
      </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{
      
    }
  },
  components:{
    
  },
  methods:{
        ...mapActions([
      'DELETE_FROM_CART'
    ]),
    url(link){
        return "./img/"+link
    },
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    },
  },
  computed:{
    ...mapGetters([
        'getCart','totalPrice','getFullUrl'
    ]),
 
  },
  props:[
    
  ],
  watch:{
  },
      
  
}

</script>

<style>
#basket_tr{
  padding-top: 10px;
}
#table-basket {
    border-collapse: collapse;
    text-align: center;
    width: 775px
}

#table-basket tr,.table-in-basket th {
  border-bottom: 1px solid #d2d2d2;
  padding-bottom: 5px;
  text-align: left
}

#table-basket tr:hover,.st_wrap .cont_table tr:hover {
  background: #ececec
}

#table-basket tr.bskt_title {
  border-bottom: none
}

#table-basket tr.bskt_subtitle {
  border-bottom: 1px solid #d2d2d2
}

#table-basket tr.bskt_subtitle:hover,#table-basket tr.bskt_title:hover {
  background: #f6f6f6
}

#table-basket th span,.bskt_header {
  background: #e4eef4;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  color: #0e6097;
  display: block;
  font-size: 16px;
  font-weight: 400;
  padding: 3px;
  text-align: center
}

#table-basket tr.bskt_subtitle th span {
  background: #eee;
  color: #777;
  font-size: 13px;
  text-align: center
}

#table-basket tr.itogo {
  border-bottom: medium none;
  border-top: 3px solid #d2d2d2
}

#table-basket tr.itogo:hover {
  background: #f6f6f6
}

#table-basket tr.itogo td {
  padding-top: 6px;
  text-align: center
}

#table-basket .t1 {
  width: 46px;
  text-align: center
}

#table-basket .t2 {
  padding: 3px
}
#table-basket .img-wrapper {
  display: block;
  position: relative;
  margin: 0 4px
}
#table-basket .goods-thumb img {
  display: block;
  width: 40px;
  height: 40px
}

#table-basket .t3 {
  width: 86px;
  text-align: center
}

#table-basket .t4 {
  width: 60px;
  text-align: center
}

#table-basket .t5 {
  width: 96px;
  text-align: center
}

#table-basket .t6 {
  width: 28px
}

#table-basket .t6 img {
  width: 16px
}
.bskt_anons {
  clear: both;
  color: #7f7f7f;
  font-size: 12px;
  padding-top: 2px;
  text-align: left;
  width: 100%;
    
}
#table-basket a.underline {
  display: inline;
  float: none;
}

.underline {
  border-bottom: 1px dashed #000;
}
.bskt_btn {
  background: url(../assets/bskt_act.png) no-repeat scroll 0 -16px transparent;
  cursor: pointer;
  display: block;
  height: 16px;
  margin: auto;
  width: 16px;
}
.bskt_del_pos {
  background-position: 0 0;
}
#kol{
  text-align: center;
  width: 28px;
}
</style>