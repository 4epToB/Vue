/* Реализовать редактируемые текстовой тег. Например: дан тег
<p> c текстом «Измени моё содержимое». По нажатию на него открывается всплывающее окошко с элементов input по средству которого можно изменить содержимое тега <p>. */

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
