<template>
	<div class="logout">
		<button @click="logout">退出登录</button>
	</div>
</template>

<script>
	export default{
		methods:{
			logout(){
				this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:'post',
					data:'dopost=exit',
					withCredentials:true
				}).then((res)=>{
					//申请注销成功
					if(res.data.status==1){
						this.$store.commit("setxianshi",false);
						this.$router.push("/");
					}
				})
			}
			
		}
	}
</script>

<style>
</style>
