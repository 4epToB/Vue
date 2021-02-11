<template>
    <header>
        <div id="directions">
            <ul>
                <li><router-link to="/about">О компании</router-link></li>
                <li><router-link to="/about">Конфигуратор ПК</router-link></li>
                <li><router-link to="/about">Оплата</router-link></li>
                <li><router-link to="/about">Доставка</router-link></li>
                <li><router-link to="/about">Самовызов</router-link></li>
                <li><router-link to="/about">Гарантия</router-link></li>
                <li><router-link to="/about">Контакты</router-link></li>
                <li><span>Личный кабинет</span></li>
            </ul>
        </div>
        <div id="main-board">
            <router-link class="logo" to="/"><img  src="../assets/logo.png" alt="Сеть компьютерных магазинов Геральд"></router-link>
            <div class="cart-tab"><router-link to="/cart">В корзине {{totalCount}} товаров <br>На сумму {{totalPrice}} рублей</router-link></div>
        </div>
    </header>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        components:{},
        props:['sitename',],
        data(){
            return{
                
            }
        },
        computed:{
            ...mapGetters([
                'totalPrice','totalCount'
            ])
        },
        methods:{},
        watch:{},
        
    }
</script>

<style scoped>
*{
    box-sizing: border-box;
}
header{
    width: 100%;
    height: 146px;
    margin: 0 auto;
}
ul{
    list-style-type: disc;
    padding-left: 0;
    display: flex;
    margin:0px;
}
li{
    height: 31x;
    line-height: 31px;
    list-style: none;
    text-align: center;
}
li a, li span{
    padding: 0px 37px 0px 37px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    color: #000;
    font-weight: 400;
    list-style: none;
    text-transform: uppercase;
    text-decoration: none;
    
}
#main-board{
    padding: 18px 10px 18px 10px;
    display: flex;

}
.cart-tab{
    margin-top: 32px;
    justify-self: end;
    margin-left: auto;
    width: 260px;
    height: 48px;
    background: url(../assets/basket.png) no-repeat 0 0;
    display: flex;
    justify-content: flex-end;
    
}
.cart-tab a{
    
    width: 163px;
    height: 38px;
    padding: 10px 0 0 0px;
    font-size: 12px;
    color: #000;
    text-decoration: none;
    text-align: left;
}

</style>