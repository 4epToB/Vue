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
            <router-link to="/"><img src="../assets/logo.png" alt="Сеть компьютерных магазинов Геральд"></router-link>
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
    margin: 0 auto;
}
ul{
    list-style-type: disc;
     padding: 0;
     display: flex;
     border: 1px solid black;
     margin:0px;
}
li{
    padding: 0;
    list-style: none;
    text-align: center;
}
li a, li span{
    padding: 8px 37px 6px;

}
#main-board{
    border: 1px solid black;
    padding: 10px;
}
</style>