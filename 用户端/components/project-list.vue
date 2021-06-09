<template>
	<view>
		<u-card :title="item.title" title-size="24" title-color="#666666"
		 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :border="false">
			<slot name="desc">
				<view class="text-bold u-font-28 text-black" slot="body">
					{{item.desc}}
				</view>
			</slot>
			<view class="" slot="foot">
				<view class="u-flex u-font-24" style="color: #666666;">合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="item.thumb"/>李维</view>
				<!-- <view>
					<view class="u-font-26" style="color: #FE5E10;">否决原因：</view>
					<view class="u-font-26 u-m-t-20" style="color: #666666;">{{item.desc}}</view>
				</view> -->
			</view>
		</u-card>
	</view>
</template>

<script>
	export default {
		name:"project-list",
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				
			};
		},
	}
</script>

<style>

</style>
