<template>
	<div class="downloadContainer">
		<slot></slot>
			<table cellpadding="" cellspacing="" border="">
				<tr><th>版本号</th><th>更新时间</th><th><a href="#">操作</a></th></tr>
				<tr v-for="item in items"><td>{{ item.version}}</td><td>{{ item.updatetime}}</td><td><a :href="item.load">下载</a></td></tr>
			</table>
	</div>
</template>

<script>
export default{
	props:["items"]
}
</script>

<style lang="less">
.downloadContainer{
	table{
		width: 500px;
		margin: 0 auto;
	}
}
</style>
