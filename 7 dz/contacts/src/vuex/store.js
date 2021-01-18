import {createStore} from 'vuex'



const store = createStore ({
  state(){
    return{
    contacts:[
      {
        "Имя": "Егор",
        "Фамилия": "Ягупов",
        "Заметка": "Это я",
        "Номер":89215608382,
        "id":"1"
    },
    {
        "Имя": "Паша",
        "Фамилия": "Смородкин",
        "Заметка": "Это Паша",
        "Номер":89213575214,
        "id":"2"
    },
    {
        "Имя": "Петр",
        "Фамилия": "Иванов",
        "Заметка": "Это Петр",
        "Номер":89219586348,
        "id":"3"
    }
    ],
    }
  },
  mutations:{
    addkey:(state,obj)=>{
      state.contacts[obj.index][obj.key]=obj.value
    },
    add:(state,obj)=>{
      state.contacts[state.contacts.length]={
        "Имя": obj.tempName,
        "Фамилия": obj.tempSurname,
        "Заметка": obj.tempDesc,
        "Номер":obj.tempNumber,
        "id":(state.contacts.length+1)
      }
    },
    delete:(state,obj)=>{
      state.contacts.splice(obj.index-1,1)
    },
  },
  actions:{

  },
  getters:{ 
    getcontactPasha(state){
      return state.contacts.filter(
        (pasha)=>{return pasha.Имя=='Pasha'}
      )
    }
  },

})
export default store