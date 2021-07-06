<template>
	<view class="wrap">
		<u-search class="u-p-10 u-p-b-20" placeholder="搜索关键字" input-align="left" :focus="true" v-model="keyward" :action-style="{fontWeight:'bold'}"></u-search>
		<u-row class="u-m-t-30" gutter="20" justify="space-between">
			<u-col span="6" class="u-m-b-20" v-for="(item,index) in list" :key="index">
				<equipmentItem :item="item" :index="index"></equipmentItem>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyward:'',
				list:[]
			}
		},
		methods: {
			search(){
				
			}
		}
	}
</script>

<style scoped>
	page{
		background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA);
	}
</style>
