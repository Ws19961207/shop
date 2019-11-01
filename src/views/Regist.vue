<template>
<div class="Regist">
	<h1>这是一个注册界面</h1><br>
	用户名：<input type="text" v-model="user.name"><br>
	密码：<input type="password" v-model="user.pwd1" ><br>
	重复密码：<input type="password" v-model="user.pwd2"><br>
	email: <input type="text" v-model="user.email"><br>
	<button @click="reg">注册</button>
</div>
</template>

<script>
	export default{
		data(){
			return {
				user:{
					name:"",
					pwd1:"",
					pwd2:"",
					email:""
				}
			}
		},
		methods:{
			reg(){
				if(this.user.name==""||this.user.pwd1==""||this.user.pwd2==""||this.user.email==""){
					alert("所有内容都得填")
				}else if(this.user.pwd1!=this.user.pwd2){
					alert("密码不一致")
				}else{
					this.$http({
						url:'http://www.520mg.com/member/reg_new2.php',
						method:'post',
						withCredentials:true,
						data:`userid=${this.user.name}&userpwd=${this.user.pwd1}&email=${this.user.email}`,
					}).then((res)=>{
						console.log(res);
						if(res.data.status==1){
							this.$router.push("/login")
						}else{
							alert("账户名已存在")
							
						}
					})
				}
				
			}
		}
		
	}
</script>

<style>
</style>
