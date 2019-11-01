<template>
  <div class="cart">
    <h1>购物车</h1>
	<div class="container">
		<table cellpadding="" cellspacing="" border="">
			<tr><th>商品名</th><th>商品价格</th><th>商品数量</th></tr>
			<tr v-for="(item,index) in $store.state.goods">
				<td>{{ item.title }}</td>
				<td>{{ item.price }}</td>
				<td>
					<button @click="reduce(item)">-</button>
					<span>{{ item.num }}</span> 
					<button @click="add(item)">+</button> <span></span>
					<button @click="del(index)">del</button>
				</td>
			</tr>
			
		</table>
		
	</div>
  </div>
</template>
<script>
	export default{
		methods:{
			del(index){
				this.$store.commit("removecart",index);
			},
			reduce(item){
				this.$store.commit("reducenum",item);
				// console.log(item)
			},
			add(item){
				this.$store.commit("addnum",item);
			}
		}
	}
</script>
<style lang="less" scoped>
	.container{
		table{
			width: 75%;
		}
		display: flex;
		justify-content: center;
	}
</style>
