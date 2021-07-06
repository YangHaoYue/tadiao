<template>
	<view>
		<u-parse :html="content"></u-parse>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getUserAgreement()
		},
		data() {
			return {
				content: `
					<p>露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
				`
			}
		},
		methods: {
			getUserAgreement(){
				this.http.get('auth/getUserAgreement').then(res=>{
					this.content = res.data.agreement;
				})
			}
		}
	}
</script>

<style>

</style>
