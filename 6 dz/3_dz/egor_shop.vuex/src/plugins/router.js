import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue'
import Home from '../components/Home.vue'
const routes=[
	{path:"/", component:Home},
    {path:"/about", component:About},
];

export default createRouter({
	history: createWebHistory(),
	routes: routes
});