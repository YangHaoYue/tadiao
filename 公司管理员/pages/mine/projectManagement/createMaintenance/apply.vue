<template>
	<view>
		<view class="bg-white u-flex u-row-between solid-bottom u-p-30" @click="showDate = true">
			<view class="u-flex">
				<view class="u-flex u-font-28 u-m-r-20 text-black" style="width: 175rpx;">首次维保时间</view>
				<view class="u-m-r-15" :class="time?'text-black':'text-gray'">{{time||'请选择首次维保时间'}}</view>
			</view>
			<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
		</view>
		<view class="bg-white u-flex u-row-between solid-bottom u-p-30" @click="toChoose">
			<view class="u-flex">
				<view class="u-flex u-font-28 u-m-r-20 text-black" style="width: 175rpx;">维保员</view>
				<view class="u-m-r-15" :class="time?'text-black':'text-gray'">{{time||'请选择维保员'}}</view>
			</view>
			<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
		</view>
		
		<u-button type="primary" class="u-m-30" style="margin-top: 117rpx;">提交</u-button>
		
		<u-calendar v-model="showDate" btn-type="primary" active-bg-color="#0F58FB" mode="date" @change="dateChange" max-date="2050-12-31"></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showDate:false,
				time:''
			}
		},
		methods: {
			dateChange(e){
				console.log(e);
				this.time = e.result
			},
			toChoose(){
				uni.navigateTo({url: 'chooseRepairman'});
			}
		}
	}
</script>

<style>

</style>
