<template>
	<view>
		<view class="bg-white u-p-10 u-p-l-30">
			<u-search class="u-p-10" placeholder="搜索关键字" input-align="left" :focus="true" v-model="keyward" :action-style="{fontWeight:'bold'}"></u-search>
		</view>
		<block v-for="(item,index) in list" :key="index">
			<view class="u-flex u-row-between u-col-center bg-white u-m-t-20" style="padding: 20rpx 30rpx;">
				<view class="u-flex">
					<u-avatar :src="item.avatar" size="98"></u-avatar>
					<view class="u-m-l-16 u-font-24" style="color: #666666;">{{item.name}}</view>
				</view>
				<view class="u-font-24" style="color: #1058FB;" @click="back">选择</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyward:'',
				list:[
					{avatar:'',name:'张三'},{avatar:'',name:'张三'},{avatar:'',name:'张三'},{avatar:'',name:'张三'},{avatar:'',name:'张三'}
				]
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F5F6FA;
	}
</style>
