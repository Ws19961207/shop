<template>
	<div class="detailContainer">
		<h2>{{ goods.title }}</h2>
		<img :src="goods.image" alt=""><br>
		<button @click="goods.num--" >-</button> {{goods.num}} <button @click="goods.num++">+</button>  <button @click="addcart">加入购物车</button><br>
		
		<router-link :to="`/detail/${this.$route.params.id}/baby`"><span>宝贝详情</span></router-link><router-link :to="`/detail/${this.$route.params.id}/comments`"><span>详情</span></router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	data(){
		return {
			goods:null
		}
	},
	created(){
		this.goods={
			id:this.$route.params.id,
			title:`商品:${this.$route.params.id}`,
			image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=250&h=250&f=webp&q=90",
			price:parseInt(Math.random()*100),
			num:1
		}
	},
	methods:{
		addcart(){
			this.$store.commit("addtocart",{
				id:this.goods.id,
				title:this.goods.title,
				price:this.goods.price,
				num:this.goods.num
			})
		}
	}
	
	
}

</script>

<style lang="less">

</style>
