import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
const routes=[
	{path:"/", component:Home},
	{path:"/:categoryName",component:Home},
	{path:"/about", component:About},
	{path:"/cart", component:Cart},
];

export default createRouter({
	history: createWebHistory(),
	routes: routes
});