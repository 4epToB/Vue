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
