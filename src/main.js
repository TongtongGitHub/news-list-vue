/*
*	main.js 入口文件
**/
import './scss/base.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'

import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './components/App.vue';
import Main from './components/Main.vue';
import World from './components/World.vue';
import Contact from './components/Contact.vue';
import Category from './components/Category.vue';
import Source from './components/Source.vue';

Vue.use(VueRouter);


// 定义路由
// 每个路由应该映射一个组件
const routes = [
{ 
	path: '/', 
	component: App,
	//定义子路由
	children: [ 
		{ 
			path: '/', 
			component: Main 
		},
		{ 
			path: '/world', 
			component: World,
			children:[
				{
					path: 'category',
					component: Category
				},
				{
					path: 'source/:id',
					name: 'source',
					component: Source
				}
			]		
		},
		{
			path: '/contact',
			component: Contact
		}
	]
}
]

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
	router
}).$mount('#app')



