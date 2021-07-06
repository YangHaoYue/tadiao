<template>
	<view class="">
		<u-form :model="model" ref="uForm" :errorType="errorType">
			<u-form-item :label-style="labelStyle" :label-width="200" :label-position="labelPosition" label="姓名" prop="name">
				<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-style="labelStyle" :label-width="200" :label-position="labelPosition" label="银行" prop="brankName">
				<u-input :border="border" type="text" v-model="model.brankName" placeholder="请输入银行名称"></u-input>
			</u-form-item>
			<u-form-item :label-style="labelStyle" :label-width="200" :label-position="labelPosition" label="银行卡号" prop="code1">
				<u-input :border="border" type="text" v-model="model.code1" placeholder="请输入银行卡号"></u-input>
			</u-form-item>
			<u-form-item :label-style="labelStyle" :label-width="200" :label-position="labelPosition" label="确认卡号" prop="code2">
				<u-input :border="border" type="text" v-model="model.code2" placeholder="请再次确认卡号"></u-input>
			</u-form-item>
		</u-form>
		<u-button class="u-m-30 u-m-t-30" type="primary" :disabled="disabled" @click="submit">确认</u-button>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			if(e.bankcard_id){
				this.bankcard_id = e.bankcard_id;
				this.getBankcardById();
			}
		},
		computed: {
			disabled: function() {
				let bool = true;
				if (this.model.name && this.model.brankName && this.model.code1) {
					bool = false;
				}
				return bool;
			}
		},
		data() {
			return {
				border:false,
				labelStyle:{fontSize: '28rpx',fontWeight: 'bold',marginLeft: '30rpx'},
				labelPosition: 'left',
				codeTips: '',
				errorType: ['message','border-bottom'],
				
				bankcard_id:'',
				
				model:{
					name:'',
					brankName:'',
					code1:'',
					code2:''
				},
			}
		},
		methods: {
			getBankcardById(){
				this.http.post('withdraw/getBankcardById',{
					bankcard_id:this.bankcard_id
				}).then(res=>{
					if(res.code == 1000){
						this.model.name = res.data.bankcard.name;
						this.model.brankName = res.data.bankcard.bank_name;
						this.model.code1 = res.data.bankcard.bankcard_num;
						this.model.code2 = res.data.bankcard.bankcard_num;
					}
				})
			},
			addBankcard(){
				if(this.model.code1 != this.model.code2) return this.$u.toast('两次输入的银行卡号不一致，请检查！')
				this.http.post('withdraw/addBankcard',{
					name:this.model.name,
					bank_name:this.model.brankName,
					bankcard_num:this.model.code1
				}).then(res=>{
					this.$u.toast(res.mag)
					if(res.code == 1000){
						setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							});
						},1500)
					}
				})
			},
			editBankcard(){
				if(this.model.code1 != this.model.code2) return this.$u.toast('两次输入的银行卡号不一致，请检查！')
				this.http.post('withdraw/editBankcard',{
					bankcard_id:this.bankcard_id,
					name:this.model.name,
					bank_name:this.model.brankName,
					bankcard_num:this.model.code1
				}).then(res=>{
					this.$u.toast(res.mag)
					if(res.code == 1000){
						setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							});
						},1500)
					}
				})
			},
			submit(){
				if(this.bankcard_id !=''){
					this.editBankcard()
				}else{
					this.addBankcard();
				}
			}
		}
	}
</script>

<style>

</style>
