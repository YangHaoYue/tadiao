<template>
	<view class="u-m-31">
		<view class="u-flex u-row-between bankCard" :class="item.status" v-for="(item,index) in list" :key="index">
			<view class="text-white text-bold">
				<view class="u-font-28">{{item.name}}</view>
				<view style="font-size: 42rpx;line-height: 1.5;">{{item.code}}</view>
			</view>
			<u-icon name="trash" size="40" color="#ffffff"></u-icon>
		</view>
		<view class="u-flex u-row-center bankCard" :class="list.length>6?'u-m-t-30':'fixed'" style="border: 1rpx #979797 dashed;padding: 27rpx;" @click="addBankCard">
			<u-icon name="plus" color="#0F58FB" size="26" label="添加银行卡" label-color="#333333"></u-icon>
		</view>
		<u-gap bg-color="#ffffff"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:'建设银行',code:"**** **** **** 7116",status:'primary'},
					{name:'建设银行',code:"**** **** **** 7116",status:'red'},
					{name:'建设银行',code:"**** **** **** 7116",status:'success'},
					{name:'建设银行',code:"**** **** **** 7116",status:'primary'},
					{name:'建设银行',code:"**** **** **** 7116",status:'primary'},
				]
			}
		},
		methods: {
			addBankCard(){
				uni.navigateTo({url: 'addBankCard/addBankCard'});
			}
		}
	}
</script>

<style scoped>
	.bankCard{
		padding: 29rpx 29rpx 21rpx 66rpx;
		border-radius: 17rpx;
		margin: 20rpx 31rpx;
	}
	.primary{
		background: -webkit-linear-gradient(left,#0F58FB,#1C96FA);
		box-shadow: 0 2px 4px 0 #0F58FB;
	}
	.red{
		background: -webkit-linear-gradient(left,#F73535,#FA5A31);
		box-shadow: 0 2px 4px 0 #F95331;
	}
	.success{
		background: -webkit-linear-gradient(left,#009F90,#0BBDBA);
		box-shadow: 0 2px 4px 0 #09B8B3;
	}
	.fixed{
		position: fixed;
		bottom: 30rpx;
		right: 0;
		left: 0;
	}
</style>
