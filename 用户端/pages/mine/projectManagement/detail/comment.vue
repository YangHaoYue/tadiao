<template>
	<view>
		<view class="u-p-40">
			<view class="u-font-28 text-bold u-m-b-24" style="color: #404E60;">维修师傅</view>
			<view style="border-radius: 10rpx;background-color: #F8F9FD;padding: 22rpx 16rpx;">
				<u-input type="textarea" v-model="fix_comment" height="319" placeholder="请输入对维修师傅的评价"></u-input>
			</view>
			<view class="u-font-28 text-bold u-m-b-24" style="color: #404E60;">设备</view>
			<view style="border-radius: 10rpx;background-color: #F8F9FD;padding: 22rpx 16rpx;">
				<u-input type="textarea" v-model="tower_comment" height="319" placeholder="请输入对设备的评价"></u-input>
			</view>
		</view>
		<u-button class="u-m-25" type="primary" style="position: fixed;bottom: 78rpx;right: 0;left: 0;" @click="commentOrder">提交评价</u-button>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.order_id = e.order_id
		},
		data() {
			return {
				order_id:'',
				fix_comment:'',
				tower_comment:'',
			}
		},
		methods: {
			//评价
			commentOrder(){
				this.http.post('Order/commentOrder',{
					order_id:this.order_id,
					fix_comment:this.fix_comment,
					tower_comment:this.tower_comment
				}).then(res=>{
					this.$u.toast(res.msg);
					if(res.code == 1000){
						setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							});
						},1500)
					}
				})
			}
		}
	}
</script>

<style>

</style>
