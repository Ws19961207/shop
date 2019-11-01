import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DownLoad from '../views/DownLoad.vue'
import Detail from '../views/Detail.vue'
import Joke from '../views/Joke.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Logout from '../views/Logout.vue'
import Center from '../views/Center.vue'



import Baby from '@/components/Baby.vue'
import Comments from '@/components/Comments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/joke',
    name: 'joke',
    component: Joke,
	meta:{
		auth:true
	}
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/download',
    name: 'download',
    component: DownLoad
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
	children:[
		{
			path:"baby",
			name:"baby",
			component:Baby
		},
		{
			path:"comments",
			name:"comments",
			component:Comments
		}
	]
  },
  {
    path: '/cart',
    name: 'cart',
	meta:{
		auth:true
	},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  }
]


import store from '../store'
const router = new VueRouter({
  routes
})

router.beforeEach((toRouter,fromRouter,next)=>{
	if(toRouter.meta.auth){
		//进入的页面有导航守卫
		//进到该方法里面，首先判断是否登录。如果登录，直接下一步
		if(store.getters.getxianshi){
			next();
		}else{
			//`本来想进入toRouter.path 结果应为该页面需要登录  而现在又没有登录，就跳转到登录
			next(`/login?redirect=${toRouter.path}`);
		}
		
	}
	else{
		next()
	}

})






export default router
