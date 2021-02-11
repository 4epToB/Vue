/* На странице есть некоторое краткое описание. В конце некоторый элемент (например, кнопка: «Подробнее») 
по нажатию на которое открывается скрытый текст, который делает данное описание полным. */
let app=Vue.createApp({
    data: function(){
        return {
            visible: false,
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
