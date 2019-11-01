<template>
	<div class="center">
		<h1>个人中心</h1>
		<h3>{{ this.user.M_UserName }}</h3>
		<h3>{{ this.user.M_Honor }}</h3>
		<h3>{{ this.user.M_Scores}}</h3>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				user:[]
			}
		},
		created(){
			this.getmessage();
		},
		methods:{
			getmessage(){
				this.$http({
					url:'http://www.520mg.com/member/ajax_login.php',
					method:'get',
					withCredentials:true
				}).then(res=>{
					// console.log(res);
					this.user=res.data;
				})
			}
		}
	}
</script>

<style>
</style>
