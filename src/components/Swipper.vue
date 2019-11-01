<template>
	<div class="swipper-container"  @mouseenter="stop" @mouseleave="resume">
		<h3>这是一个轮播图地组件</h3>
		<div class="img" v-for="(item,index) in items" v-show="swipperindex==index">
			<img :src="item">
		</div>
		<div class="point" v-for="(item,index) in items" @mouseenter="swipperindex=index"><span></span></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				swipperindex:0,
				playing:true
			}
		},
		props:["items"],
		methods:{
			play(){
				setInterval(()=>{
					if(this.playing){
						this.swipperindex++;
						if(this.swipperindex>=this.items.length){
							this.swipperindex=0;
						}
					}
				},2000)
				
				
			},
			stop(){
				this.playing = false;
			},
			resume(){
				this.playing = true;
			}
		},
		created(){
			this.play();
		}
	}
</script>

<style lang="less">
.swipper-container{
	margin: 0 auto;
	width: 800px;
	.img{
		img{
			width: 100%;
		}
	}
	.point{
		display: inline-block;
		border: 8px solid aqua;
		margin: 8px;
		background-color: aqua;
		position: relative;
		top: -40px;
		border: aqua solid;
		border-radius: 8px;
	}
}
</style>
