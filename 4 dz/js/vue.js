/* 1.На вёрстке задан перечень услуг в виде списка. Внутри
Vue приложения - это массив объектов со свойствами (название услуги, стоимость услуги). У пользователя есть возможность выбрать интересующие услуги, а ниже списка сразу же будет
отображаться итоговая стоимость выбранных услуг пользователем. */

/* 2.В качестве данных дан массив объектов, описывающих статьи
(свойства: название статьи, url местоположения статьи в интернете, путь к файлу картинке из статьи). На интерфейсе реализовать два режима отображения списка статей. Нажав одну из кнопок
в верхней панели, будет переключаться режим показа между сеткой, содержащей кликабельные изображения статей, и списком
с меньшими изображениями и текстом. */
let app=Vue.createApp({
    data(){
        return {
            totalPrice:[],
            label:"плиткой",
            posts:[],
            isActive: true,
            services:[
                {name:"Уборка квартиры", price:200, },
                {name:"Постирать одежду", price:100,  },
                {name:"Помыть посуду", price:400,  },
                {name:"Приготовить еду", price:300,  },
                {name:"Погладить кота", price:0,  },
            ]
        }
        
    },
    methods:{
       swap(){
        this.isActive=!this.isActive
        if(this.label=="плиткой"){
            this.label="столбцом"
        }else{
            this.label="плиткой"
        }
       }
    }, 
    computed:{
        sumprice(){
            let a=this.totalPrice.reduce(function(sum, elem) {
                return sum + elem;
            }, 0);
            return a
           }
    }, 
    mounted(){ 
        fetch('https://jsonplaceholder.typicode.com/posts')
						.then((response)=>{
							return response.json(); 
						}).then((data)=>{
							this.posts = data;
						})
    },
    
});

let card=app.mount("#main")
