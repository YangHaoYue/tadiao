<template>
	<view>
		<u-image :src="contract_img" mode="widthFix" width="750rpx"></u-image>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.order_id = e.order_id;
			this.getInfo();
		},
		data() {
			return {
				order_id:'',
				contract_img:''
			}
		},
		methods: {
			getInfo(){
				this.http.get('Order/getContract',{
					order_id:this.order_id
				}).then(res=>{
					this.contract_img = this.http.resourceUrl() + res.data.contract_img;
				})
			}
		}
	}
</script>

<style>

</style>
