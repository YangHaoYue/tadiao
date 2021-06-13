<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="u-m-25 bg-white" style="padding: 37rpx 0 10rpx 22rpx;border-radius: 10rpx;">
				<view class="u-flex">
					<u-image :src="item.img" width="153" height="153" mode="scaleToFill" :fade="false"></u-image>
					<view class="u-m-l-12">
						<view class="u-font-26 text-bold u-m-b-20">{{item.name}}</view>
						<view class="text-gray u-font-22">设备出厂编号:{{item.code}}</view>
						<view class="text-gray u-font-22">品牌:{{item.brand}}</view>
						<view class="text-gray u-font-22">年限:{{item.years}}</view>
					</view>
				</view>
				<view class="text-gray u-font-26 u-m-t-20">关联失效时间:{{item.invalid}}</view>
			</view>
		</block>
		<u-button class="u-m-30" type="primary" @click="toConnect">继续关联</u-button>
		
		<u-gap height="40" bg-color="#F8F8F8"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						invalid:'2021-09-01'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						invalid:'2021-09-01'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						invalid:'2021-09-01'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						invalid:'2021-09-01'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						invalid:'2021-09-01'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						invalid:'2021-09-01'
					}
				]
			}
		},
		methods: {
			toConnect(){
				uni.navigateTo({url: 'relation'});
			}
		}
	}
</script>

<style>
	page{
		background-color: #F8F8F8;
	}
</style>
