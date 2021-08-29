<template>
	<view>
		<view class="card shadow shadow-lg">
			<u-image :src="http.resourceUrl()+item.tower_img" width="100%" height="305" border-radius="13rpx"></u-image>
			<view class="u-flex u-p-t-12 u-p-b-12 u-p-l-8">
				<text v-if="item.status == 0" class="tag" style="background-color: #2DA016;">可用</text>
				<text v-if="item.status == 1" class="tag" style="background-color: #0F58FB;">租赁中</text>
				<text v-if="item.status == 2" class="tag" style="background-color: #868686;">锁定</text>
				<text class="u-m-l-5 u-font-28 text-bold">{{item.tower_name}}</text>
			</view>
			<view class="u-font-32 text-bold u-p-l-6 u-m-b-10" style="color: #F95435;line-height: 1;">￥{{item.month_rent}}/月</view>
			<view class="u-p-l-10 u-p-r-6">
				<view class="u-font-26 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码：</view>
				<view style="color: #666666;line-height: 1.5;">{{item.serial_num}}</view>
				<view class="u-font-26 u-p-l-6" style="color: #666666;line-height: 1.5;">品牌：{{item.brand_name}}</view>
				<slot name="footer">
					<view class="u-font-26 u-p-l-6" style="color: #666666;line-height: 1.5;">年限：{{item.age_limit}}</view>
					<view class="u-font-26 u-m-l-4 u-p-b-10" style="color: #999999;line-height: 1.5;">
						<u-icon name="map-fill" size="30rpx"></u-icon>{{item.location}}
					</view>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"equipment-item",
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.card{
		border-radius: 13rpx;
		background-color: #FFFFFF;
		z-index: 999;
	}
	.tag{
		border-radius: 7rpx;
		padding: 2rpx 10rpx;
		color: #FFFFFF;
		font-size: 22rpx;
	}
</style>
