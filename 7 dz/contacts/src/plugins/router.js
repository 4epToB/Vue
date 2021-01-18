import { createRouter, createWebHistory } from 'vue-router';
import Contact from '../components/Contact.vue'
import Home from '../components/Home.vue'
const routes=[
	{path:"/", component:Home},
    {path:"/:id", component: Contact, name:"contact"},
];

export default createRouter({
	history: createWebHistory(),
	routes: routes
});