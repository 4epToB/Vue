let app=Vue.createApp({
    data: function(){
        return {
        visible_1:true,
        visible_2:false,
        visible_3:false,
        }
        
    },
    methods:{
        swap1(){
            this.visible_1=true
            this.visible_2=false
            this.visible_3=false
        },  
        swap2(){
            this.visible_1=false
            this.visible_2=true
            this.visible_3=false
        },
        swap3(){
            this.visible_1=false
            this.visible_2=false
            this.visible_3=true
        },
    }
});


let card=app.mount("#main")
