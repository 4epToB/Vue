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
        swap(event){
            this.display=!this.display
            console.log(event.path[0])
            console.log(event)
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
