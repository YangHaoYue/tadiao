<template>
	<view class="">
		<u-form :model="model" ref="uForm" :errorType="errorType">
			<u-form-item :label-style="labelStyle" :label-width="200" :label-position="labelPosition" label="姓名" prop="name">
				<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-style="labelStyle" :label-width="200" :label-position="labelPosition" label="银行" prop="phone">
				<u-input :border="border" type="text" v-model="model.phone" placeholder="请输入银行名称"></u-input>
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
		computed: {
			disabled: function() {
				let bool = true;
				if (this.model.name && this.model.phone && this.model.code1) {
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
				
				model:{
					name:'',
					phone:'',
					code1:'',
					code2:''
				},
			}
		},
		methods: {
			submit(){
				uni.navigateBack({
					delta:1
				})
				/* this.$refs.uForm.validate(valid => {
					if (valid) {
						this.http.post('/api/v1/Apply/save',{
							logo:this.logoLists[0]&&this.logoLists[0].response.data.path||'',
							pay_img:this.payLists[0]&&this.payLists[0].response.data.path||'',
							store_name:this.model.storeName,
							person_name:this.model.name,
							person_mobile:this.model.phone,
							person_wx:this.model.wx,
							business_type:this.model.storesType,
							pay_type:this.model.payType=='其他'?this.model.other:this.model.payType,
							area_id:this.model.area_id,
							address:this.model.address,
							sex:this.model.sex=='男'?1:0
						}).then((res)=>{
							if(res.code==1000){
								this.$refs.uToast.show({
									title:res.msg,
									type:"success",
									back:true
								})
							}else{
								this.$refs.uToast.show({
									title:res.msg,
									type:'error'
								})
							}
						})
					} else {
						this.$refs.uToast.show({
							title:"请填写完带*号的选项再提交",
							type:'error'
						})
					}
				}); */
			}
		}
	}
</script>

<style>

</style>
