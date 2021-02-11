
<template>
  <div class="main">
    <div class="contactlist">
      <ul>
        <li v-for="(contact,index) in this.$store.state.contacts" :key="index">
          <router-link :to="{name:'contact',params:{id:contact.id}}">
            {{contact['Имя']}}
          </router-link> 
        </li>
      </ul>
      <div class="add">
        <button @click="visible=!visible" v-if="visible">Добавить контакта</button>
        <button @click="addContact" v-if="!visible">Добавить</button><br>
        <input v-if="!visible" type="text" v-model="tempName" placeholder="Имя">
        <input v-if="!visible" type="text" v-model="tempSurname" placeholder="Фамилия">
        <input v-if="!visible" type="text" v-model="tempDesc" placeholder="Заметка">
        <input v-if="!visible" type="text" v-model="tempNumber" placeholder="Телефон">
      </div>
      
    </div>
    <router-view></router-view>  
  </div>
  
</template>

<script>

export default {
    data(){
      return{
       visible:true,
       tempName:'',
       tempSurname:'',
       tempDesc:'',
       tempNumber:'',
    }
  },
  methods:{
    addContact(){
      this.visible=!this.visible,
      this.$store.commit('add',{
        tempName: this.tempName,
        tempSurname:this.tempSurname,
        tempDesc:this.tempDesc,
        tempNumber:this.tempNumber
      })
    },
   
    
  },
}
</script>

<style>

.contactlist{
  padding: 0px;
  width:300px;
  padding-right: 50px;
}
ul{
  list-style: none;
  padding: 0px;
}
li{
  position: relative;
  line-height: 50px;
  font-size: 50px;
}
.main{
  display: flex;
}

</style>
