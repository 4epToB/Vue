let app=Vue.createApp({
    data: function(){
        return {
            name: "JBL Charge 4",
            price: "6 980",
            sound: "Моно",
            power: "30 дБ",
            frequency: "60 - 20000 Гц",
            link: {
                href:"https://avatars.mds.yandex.net/get-mpic/1364191/img_id6701519559310377721.png/orig",
                alt:"Колонка JBL Charge-4"
            }
        }
    }
});
app.config.globalProperties.$filters={
    rub(value){
        return value+" "+ String.fromCharCode(8381)
    }
}
let card=app.mount("#item-card")

let app2=Vue.createApp({
    data: function(){
        return {
            name: "Егор",
            surname: "Ягупов",
            login: "EgorYagupov",
            email: "egoryagupov@gmail.com",
            photo: {
                href:"img/zombie.png",
                alt:"Фото пользователя"
            }
        }
    }
});
let reson=app2.mount("#person-card")