let app=Vue.createApp({
    data(){
        return {
            defaultText: "Кликни на текст что бы изменить",
            display:true,
            titleSearch:"фыв",
            posts:[],
        }
        
    },
    methods:{
        swap(){
            this.display=!this.display
        },
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
