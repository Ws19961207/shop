<template>
<div class="login">
	 <div class="main" v-title data-title="登录" />
	<h1>这是一个登录页面</h1>
	用户名：<input type="text" v-model="user.name" @focus="foc" @blur="bl" ><br>
	密码：<input type="password" v-model="user.pwd"><br>
	<button @click="log">登录</button>
</div>
</template>

<script>
	export default{
		data(){
			return {
				user:{
					name:"zzy0371",
					pwd:"zzy0371"
				}
			}
		},
		methods:{
			log(){
				console.log("请求服务器")
				this.$http({
					url:"http://www.520mg.com/member/index_login.php",
					method:"post",
					withCredentials:true,
					data:`fmdo=login&dopost=login&userid=${this.user.name}&pwd=${this.user.pwd}`,
					
				}).then((res)=>{
					// console.log(res.data.status)
					// console.log("+")
					if(res.data.status==1){
						this.$store.commit("setxianshi",true);
						console.log(`我在进入登录页面之前从${this.$route.query.redirect} 所以登录成功之后我要回到该页面`);
						if(this.$route.query.redirect){
							console.log("==")
							this.$router.push(this.$route.query.redirect);
						}else{
							this.$router.push("/");
								
							}
						}else{
						alert("登陆失败")
					}
					
				})
			},
			foc(){
				console.log("触发了");
				this.user.name=null;
				console.log(this.user.name)
			},
			bl(){
				this.user.name
			}
		}
	}
</script>

<style>
</style>
