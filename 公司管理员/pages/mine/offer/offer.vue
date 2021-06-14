<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="u-m-25 bg-white" style="border-radius: 10rpx;">
				<view style="padding: 37rpx 14rpx 10rpx 22rpx;">
					<view class="u-flex">
						<u-image :src="item.img" width="153" height="153" mode="scaleToFill" :fade="false"></u-image>
						<view class="u-m-l-12 u-flex-1" style="height: 153rpx;">
							<view class="u-flex u-row-between u-m-b-20 u-font-26 text-bold">
								<view >{{item.name}}</view>
								<view style="color: #FE5E10;">租金:¥{{item.price}}/月</view>
							</view>
							<view class="text-gray u-font-22">设备出厂编号:{{item.code}}</view>
							<view class="text-gray u-font-22">品牌:{{item.brand}}</view>
							<view class="text-gray u-font-22">年限:{{item.years}}</view>
						</view>
					</view>
				</view>
				<view class="u-border-top u-p-20 u-flex u-row-right">
					<u-button type="primary" size="mini" style="margin-right: 0;" @click="modify(item.price)">修改价格</u-button>
				</view>
			</view>
		</block>
		
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="546" height="405">
			<view class="u-p-20 u-p-b-20 u-flex" style="flex-direction: column;">
				<view class="text-black u-font-28 u-m-t-30 u-m-b-20">修改价格</view>
				<view class="u-m-t-30 u-m-b-30">
					<view class="u-font-28 text-bold u-m-b-30" style="color: #FE5E10;">当前租金:¥{{oldPrice}}/月</view>
					<view class="u-flex">
						<text class="text-black u-m-r-20 u-font-26 text-bold">租金</text>
						<view class="u-border u-flex" style="width: 424;padding: 6rp 11rpx;border-radius: 4rpx;">
							<text class="u-m-r-10 text-black text-bold">￥</text>
							<u-input v-model="newPrice" type="number" placeholder="请输入租金" height="50" style="width: 360rpx;"></u-input>
						</view>
					</view>
				</view>
				<u-button class="u-m-t-20" style="width: 100%;" :disabled="isInput" size="medium" type="primary" @click="showModal = false">提交</u-button>
			</view>
		</u-popup>
		
		<u-gap height="40" bg-color="#F8F8F8"></u-gap>
	</view>
</template>

<script>
	export default {
		computed: {
			isInput() {
				let bool = true;
				if(this.newPrice){
					bool = false;
				}
				return bool
			}
		},
		data() {
			return {
				list:[
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						price:'670.00'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						price:'670.00'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						price:'670.00'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						price:'670.00'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						code:'WE2445',
						brand:'虎马',
						years:'三年',
						price:'670.00'
					},
				],
				//修改价格
				showModal:false,
				oldPrice:'',
				newPrice:''
			}
		},
		methods: {
			modify(price){
				this.oldPrice = price;
				this.showModal = true;
			}
		}
	}
</script>

<style>
	page{
		background-color: #F8F8F8;
	}
</style>
