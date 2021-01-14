let app=Vue.createApp({
    data(){
        return {
            currentTab:"Home",
            tabs:["Home","About","Contacts","Staff","Gallery","Game"],
            images:[
                {"descr": "Gorillaz",
                "url": "1.jpg",},
                {"descr": "Eminem",
                "url": "2.jpg",},
                {"descr": "ACDC",
                "url": "3.jpg",},
                {"descr": "Beatles",
                "url": "4.jpg",},
                {"descr": "Крип-а-Крип",
                "url": "5.jpg",},
              ],
        }
        
    },
    methods:{
        
    }, 
    computed:{
        currentTabName:function(){
            return "tab-" + this.currentTab.toLowerCase();
        },
        activateTab: function(e){
            console.log(e)
        },
    }, 
    
});
app.component("tab-home",{
    template:`<h2>Наши товары</h2>`,
}).component("tab-about",{
    template:`<h2>Мы магазин крутых товаров</h2>`,
}).component("tab-contacts",{
    template:`<h2>Наш адрес: Спб</h2>`,
}).component("tab-staff",{
    data(){
        return  {
            currImg:"student.png",
            currImgIndex:0,
            img:["student.png","vampire.png","wizard.png","wizard-2.png","zombie.png",]
        }
    },
    template:`<h2>Наши сотрудники</h2>
    <img :src=url>
    `,
    computed:{
        url(){
            return "./img/"+this.currImg
        },
    },
    methods:{
        
    },
    mounted:function(){
        
        setInterval(() => {
                this.currImg=this.img[this.currImgIndex+1] 
                this.currImgIndex=this.currImgIndex+1
                if(this.currImgIndex==this.img.length){
                    this.currImgIndex=0
                    this.currImg=this.img[this.currImgIndex]
                }
            
        }, 1000);
    },
})
app.component("tab-gallery",{
    data(){
        return {
            imageslinkcopy:JSON.parse(JSON.stringify(this.imageslink)),
            newImgUrl:"",
            newImgDescr:"",
            newimgobj:{},
        }
    },
    computed:{
       
    },
    watch:{
        imageslink: function(newArray,oldArray){
            this.imageslinkcopy=JSON.parse(JSON.stringify(newArray))
        }
    },
    props:['imageslink'],
    methods:{
        url(link){
            if (link.includes("https://")){return link}
            else return "./img/"+link
        },
        deleteicon(event){
                console.log(event.path[2])
                console.log(event) 
        },
        addImg(){
            this.newimgobj={
            "descr": this.newImgDescr,
            "url": this.newImgUrl,
            }
            this.imageslinkcopy[this.imageslinkcopy.length]=this.newimgobj
    },
    },
    template:`
        <h2>Галерея</h2>

        <div class="gallery">
            <figure v-for="(img,index) in imageslinkcopy">
                <p>
                    <img v-bind:src=url(img.url) alt=img.descr>
                    <img id="deleteicon" src="./img/delete.png" @click="imageslinkcopy.splice(index, 1)">
                </p>
                <figcaption>{{img.descr}}</figcaption>
            </figure>
            <div class="add">
                <label>Введите url:</label>
                <input placeholder=" 2.jpg или https://..." type="text" v-model="newImgUrl">
                <label>Введите описание:</label>
                <input type="text" v-model="newImgDescr">
                <button @click="addImg">Добавить картинку</button>
            </div>
        </div>
    `
})
app.component("tab-game",{
    template:`<h2>Игра на память</h2>`
})
let card=app.mount("#main")
