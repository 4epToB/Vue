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
        </div>
    </header>
</template>

<script>
    export default {
        components:{},
        props:['sitename',],
        data(){
            return{
                
            }
        },
        computed:{},
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
    height: 30.8px;
    line-height: 30.8px;
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
    padding: 18.2px;
}

</style>