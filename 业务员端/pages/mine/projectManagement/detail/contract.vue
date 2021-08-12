<template>
	<view>
		<block v-for="(item,index) in contract_imgs" :key="index">
			<u-image :src="http.resourceUrl()+item" mode="widthFix" width="750rpx"></u-image>
		</block>
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
				contract_imgs:''
			}
		},
		methods: {
			getInfo(){
				this.http.get('Order/getContract',{
					order_id:this.order_id
				}).then(res=>{
					this.contract_imgs = res.data.contract_imgs;
				})
			}
		}
	}
</script>

<style>

</style>
