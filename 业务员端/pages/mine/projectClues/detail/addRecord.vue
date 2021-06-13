<template>
	<view>
		<view class="u-p-40">
			<view class="u-font-28 text-bold u-m-b-24" style="color: #404E60;">跟进记录</view>
			<view style="border-radius: 10rpx;background-color: #F8F9FD;padding: 22rpx 16rpx;">
				<u-input type="textarea" v-model="value" height="319" placeholder="请填写跟进记录描述"></u-input>
			</view>
		</view>
		<u-button class="u-m-25" type="primary">提交记录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
