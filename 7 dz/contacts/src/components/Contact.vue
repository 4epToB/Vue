<template>
  <div>
    <table>
      <tr v-for="(objkey,index) in Object.keys(getcontactById[0])" :key="index" class="row">
        <td class="key">{{objkey}}:</td>
        <td class="value">{{getcontactById[0][objkey]}}</td>
        <td class="deletekey"><img id="deleteicon" src="../assets/delete.png"></td>
      </tr>
    </table>
    <input type="text" v-model="key" class="inputkey">
    <input type="text" v-model="value" class="inputkey">
    <button @click="addkeyContact">Добавить поле</button><br>
    <button @click="visible=!visible">Удалить контакт</button>
    <div v-if="visible" class="deletewrap">
      Вы уверены?
      <button @click="deleteContact">
        <router-link to="/">Да</router-link>
      </button>
      <button @click="visible=!visible"> 
        <router-link :to="{name:'contact',params:{id:this.$route.params.id}}">Нет</router-link>
      </button>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
   return{
      key:'',
      value:'',
      visible:false,
   }
  },
  computed:{
      getcontactById(){
          return this.$store.state.contacts.filter(
            (contact)=>{return contact.id==this.$route.params.id }
          )
      },
  },
  methods:{
    addkeyContact(){
      this.$store.commit('addkey',{
        index: this.$route.params.id-1,
        key:this.key,
        value:this.value
      })
    },
     deleteContact(){
      this.$store.commit('delete',{
        index: this.$route.params.id,
    })
    },
  }
}
</script>

<style>

.key, .value{
  width:200px;
  padding: 0px;

  
}
.key{
  text-align: left;
}
.value{
  text-align: left;
}
.inputkey{
  width:200px
}
.deletekey{
  padding: 0px;
}
#deleteicon{
  width: 25px;
  height: 25px;
  margin: 5px 0 5px 0;
}
.row{
  margin: 0;
  height: 35px;
}
</style>
