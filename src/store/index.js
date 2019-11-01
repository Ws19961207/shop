import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from'js-cookie'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goods:[],
	  xianshi:false,
  },
  
 getters:{
	 getxianshi(state){
		 return state.xianshi||Cookie.get("xianshi"); 
	 }
 },
  
  mutations: {
	  setxianshi(state,log){
		  state.xianshi=log;
		  if(log){
			  Cookie.set("xianshi",true)
		  }else{
			  Cookie.remove("xianshi")
		  }
	  },
	  addtocart(state,item){
		  let temp=true;
		  state.goods.forEach((good)=>{
			  if(good.id==item.id){
				  good.num+=item.num;
				  temp=false;
			  }
		  })
		  if(temp){
			  state.goods.push(item);
		  }
	  },
	  removecart(state,index){
		  state.goods.splice(index,1);
	  },
	  reducenum(state,item){
		  
		  let index = state.goods.indexOf(item);
		  state.goods.forEach((good)=>{
			  if(good.id==item.id){
				  good.num--;
				  if(good.num<=0){
					  state.goods.splice(index,1);
				  }
			  }
		  })
	  },
	  addnum(state,item){
		  state.goods.forEach((good)=>{
			  if(good.id==item.id){
				  good.num++;
			  }
		  })
	  }
  },
  actions: {
  },
  modules: {
  }
})
