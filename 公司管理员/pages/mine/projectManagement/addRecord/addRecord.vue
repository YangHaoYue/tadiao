<template>
	<view class="">
		<view class="bg-white u-flex u-row-between solid-bottom u-p-30" @click="showDate = true">
			<view class="u-flex">
				<view class="u-flex u-font-28 u-m-r-20 text-black" style="width: 150rpx;">应付款时间</view>
				<view class="u-m-r-15" :class="time?'text-black':'text-gray'">{{time||'请选择应付款时间'}}</view>
			</view>
			<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
		</view>
		<view class="bg-white u-flex solid-bottom u-p-30">
			<view class="u-flex u-font-28 u-m-r-20 text-black" style="width: 150rpx;">金额</view>
			<view class="u-flex">
				<text class="text-black u-font-28 u-m-r-20">￥</text>
				<u-input v-model="price" type="text" :auto-height="true"  placeholder="请输入金额" placeholder-style="color:#999999;font-size:28rpx;"/>
			</view>
		</view>
		<view class="bg-white solid-bottom u-p-30 u-flex u-col-top">
			<view class="u-flex u-font-28 u-m-r-20 text-black u-m-t-10" style="width: 150rpx;">摘要</view>
			<u-input v-model="remark" type="textarea" :height="210" :auto-height="true" placeholder="请输入摘要" placeholder-style="color:#999999;font-size:28rpx;"/>
		</view>
		<u-button type="primary" class="u-m-30" style="margin-top: 117rpx;" @click="submit">提交</u-button>
		
		<u-calendar v-model="showDate" btn-type="primary" active-bg-color="#0F58FB" mode="date" @change="dateChange" max-date="2050-12-31"></u-calendar>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.order_id = e.order_id;
		},
		data() {
			return {
				time:'',
				price:'',
				remark:'',
				showDate:false
			}
		},
		methods: {
			dateChange(e){
				console.log(e);
				this.time = e.result
			},
			submit(){
				this.http.post('Order/addOrderPay',{
					order_id:this.order_id,
					start_at:this.time,
					amount:this.price,
					remark:this.remark
				}).then(res=>{
					this.$u.toast(res.msg)
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
