<template>
	<view>
		<view class="u-p-40">
			<view class="u-font-28 text-bold u-m-b-24" style="color: #404E60;">维修记录</view>
			<view style="border-radius: 10rpx;background-color: #F8F9FD;padding: 22rpx 16rpx;">
				<u-input type="textarea" v-model="value" height="319" placeholder="请填写维修记录描述"></u-input>
			</view>
			<u-upload class="u-m-t-30" width="160" height="160" :action="http.interfaceUrl()+action" :header="header" :max-count="99" @on-list-change="onChange"></u-upload>
		</view>
		<u-button class="u-m-25" type="primary" style="position: fixed;bottom: 78rpx;right: 0;left: 0;">提交记录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:'',
				action: '/api/v1/Common/fileUploader',
				header:{'Authorization':'Bearer '+ this.http.getToken()},
				lists:[]
			}
		},
		methods: {
			//上传合同图片
			onChange(lists){
				console.log('onListChange', lists[0]);
				this.lists=lists
			},
		}
	}
</script>

<style>

</style>
