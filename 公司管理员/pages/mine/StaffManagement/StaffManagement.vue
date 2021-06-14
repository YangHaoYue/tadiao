<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="card bg-white">
				<view class="u-flex u-row-between u-border-bottom" style="padding: 20rpx 20rpx 13rpx 30rpx;">
					<view class="u-flex">
						<u-avatar :src="item.src" size="56"></u-avatar>
						<view class="u-font-24 u-m-l-10">
							<view class="text-black u-m-b-4">{{item.name}}</view>
							<view style="color: #999999;">{{item.time}}</view>
						</view>
					</view>
					<view class="u-flex u-row-right" style="color: #999999;"> 
						<view class="u-m-r-12">查看详情</view>
						<u-icon name="arrow-right" size="28" color="#999999"></u-icon>
					</view>
				</view>
				<view class="u-flex u-row-around" style="padding: 25rpx 0;">
					<navigator open-type="navigate" url="staffDetail/projectDetail" hover-class="none"
					 class="u-flex u-row-center u-flex-1" style="flex-direction: column;">
						<view class="u-font-36 text-bold u-m-b-10" style="color: #0F58FB;">{{item.order}}</view>
						<view class="u-font-26" style="color: #999999;">订单数</view>
					</navigator>
					<navigator open-type="navigate" url="staffDetail/clueDetail" hover-class="none"
					 class="u-flex u-row-center u-flex-1" style="flex-direction: column;">
						<view class="u-font-36 text-bold u-m-b-10" style="color: #0F58FB;">{{item.order}}</view>
						<view class="u-font-26" style="color: #999999;">线索数</view>
					</navigator>
					<view class="u-flex u-row-center u-flex-1" style="flex-direction: column;">
						<view class="u-font-36 text-bold u-m-b-10" style="color: #333333;">{{item.order}}</view>
						<view class="u-font-26" style="color: #999999;">应收款</view>
					</view>
					<view class="u-flex u-row-center u-flex-1" style="flex-direction: column;">
						<view class="u-font-36 text-bold u-m-b-10" style="color: #333333;">￥{{item.order}}</view>
						<view class="u-font-26" style="color: #999999;">订单金额</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{src:'',name:'李维',time:'2021-04-21 13:00:00',order:'200'},
					{src:'',name:'李维',time:'2021-04-21 13:00:00',order:'200'},
					{src:'',name:'李维',time:'2021-04-21 13:00:00',order:'200'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #F8F8F8;
	}
	.card{
		border-radius: 10rpx;
		margin: 20rpx 25rpx;
	}
</style>
