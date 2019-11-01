<template>
<div class="joke">
	<div class="main" v-title data-title="Joke" />
	<h1>笑话页面</h1>
	<div v-for="item in joks">
		<div class="item" v-if="item.title">
			<h2>{{item.title}}</h2>
			<p>{{item.summary}}</p>	
		</div>	
	</div>
	
	
	<button :disabled="flag"  @click="getMore" class="more">加载更多</button>
</div>
</template>

<script>
export default{
	data(){
		return {
			joks:[],
			flag:false,
			page:1
		}
	},
	created(){
		this.getjokes(this.page);
	},
	methods:{
		getjokes(page){
			this.flag=true;
			this.$http({
				url:`http://biger.applinzi.com/duan/list.php?page=${this.page}`,
				method:"get"
			}).then(res=>{
				this.joks = this.joks.concat(res.data.result);
				// console.log(this.joks)
				this.flag=false;
			})
		},
		getMore(){
			this.page++;
			this.getjokes(this.page)
		}
	}
}
</script>

<style scoped lang="less">
	.joke{
		width: 800px;
		margin: 0 auto;
		.more{
			width: 100%;
			height: 50px;
			margin-bottom: 50px;
			margin-top: 50px;

			
		}
	}
</style>
