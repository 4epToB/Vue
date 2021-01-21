import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import ProductPage from '../components/ProductPage.vue'
const routes=[
	{path:"/", component:Home},
	{path:"/:categoryName/:categoryName2?",component:Home},
	{path:"/:categoryName/:categoryName2/:id",component:ProductPage},
	{path:"/about", component:About},
	{path:"/cart", component:Cart},
];

export default createRouter({
	history: createWebHistory(),
	routes: routes
});