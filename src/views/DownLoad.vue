<template>
	<div>
		<p>下载页</p>
		<download-table :items="hbuilder"><h1>hbulider</h1></download-table>
		<download-table :items="py"><h1>pycharm</h1></download-table>
		
	</div>
</template>

<script>
import DownloadTable from '@/components/DownloadTable.vue'
export default{
	components:{
		DownloadTable
	},
	data(){
		return {
			hbuilder:[
				{
					version:1,
					updatetime:10.29,
					load:"http://www.baidu.com"
				},
				{
					version:2,
					updatetime:2.23,
					load:"http://www.baidu.com"
				},
				{
					version:1,
					updatetime:11.24,
					load:"http://www.baidu.com"
				}
			],
			py:[
				{
					version:1,
					updatetime:10.29,
					load:"http://www.baidu.com"
				},
				{
					version:2,
					updatetime:2.23,
					load:"http://www.baidu.com"
				},
				{
					version:1,
					updatetime:11.24,
					load:"http://www.baidu.com"
				}
			]
		}
	}


}
</script>

<style>
</style>
