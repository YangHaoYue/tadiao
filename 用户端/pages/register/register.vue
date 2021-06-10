<template>
	<view class="u-p-50">
		<view class="text-bold" style="font-size: 60rpx;">注册</view>
		<view class="text-gray u-font-36 u-m-b-20">注册登陆后体验更精彩</view>
		<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
			<u-form-item :label-style="labelStyle" :required="true" label-width="120" :label-position="labelPosition" label="姓名" prop="name">
				<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-style="labelStyle" :required="true" :label-position="labelPosition" label="手机" prop="phone">
				<u-input :border="border" type="text" v-model="model.phone" placeholder="请输入手机号"></u-input>
			</u-form-item>
			<u-form-item :label-style="labelStyle" :required="true" :label-position="labelPosition" label="验证码" prop="code" label-width="150">
				<u-input :border="border" placeholder="请输入验证码" v-model="model.code" type="text"></u-input>
				<u-button slot="right"  type="primary" plain size="medium" @click="getCode">{{codeTips}}</u-button>
				<!-- <view class="codeType" slot="right" @click="getCode">{{codeTips}}</view> -->
			</u-form-item>
			<u-form-item :label-style="labelStyle" :required="false" right-icon="arrow-right" :label-position="labelPosition" label="所属公司(本选项普通用户可不选)" prop="companie" label-width="150">
				<u-input :border="border" :disabled="true" v-model="model.companie" placeholder="请选择公司" @click="selectShow = true"></u-input>
			</u-form-item>
		</u-form>
		<u-checkbox class="u-m-t-10 u-m-b-10" @change="checkboxChange" name="ceshi" v-model="isChecked" size="27rpx" label-size="27rpx" active-color="#0F58FB" shape="circle">
			<text class="text-gray">我已阅读并同意</text><text style="color: #0F58FB;" @click="toAgreement">《嗒嗒用户服务及隐私协议》</text>
		</u-checkbox>
		
		<u-button class="u-m-t-30" type="primary" :disabled="disabled" @click="submit">注册</u-button>
		
		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
		<u-toast ref="uToast"></u-toast>
		<u-select mode="single-column" confirm-color="#0F58FB" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				border:false,
				labelStyle:{fontSize: '28rpx',fontWeight: 'bold'},
				labelPosition: 'top',
				codeTips: '',
				errorType: ['message','border-bottom'],
				
				model:{
					name:'',
					phone:'',
					code:'',
					companie:''
				},
				rules: {
					name: [
						{
							required: true,
							message: '请输入姓名',
							trigger: 'blur' ,
						},
						{
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.chinese(value);
							},
							message: '姓名必须为中文',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						},
					],
					phone: [
						{
							required: true,
							message: '请输入手机号',
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						},
						// 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
						// {
						// 	trigger: ['blur'],
						// 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
						// 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
						// 	asyncValidator: (rule, value, callback) => {
						// 		this.$u.post('/ebapi/public_api/index').then(res => {
						// 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
						// 			if(res.error) {
						// 				callback(new Error('姓名重复'));
						// 			} else {
						// 				// 如果没有错误，也要执行callback()回调
						// 				callback();
						// 			}
						// 		})
						// 	},
						// }
					],
					code:[]
				},
				//选择所属公司
				selectShow:false,
				//公司列表
				selectList: [
					{
						value: '实体店铺',
						label: '实体店铺'
					},
					{
						value: '工作室',
						label: '工作室'
					},
					{
						value: '其他',
						label: '其他'
					}
				],
				isChecked:false
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		computed: {
			disabled: function() {
				let bool = true;
				if (this.model.name && this.model.phone && this.model.code) {
					bool = false;
				}
				return bool;
			}
		},
		methods: {
			codeChange(text) {
				this.codeTips = text;
			},
			// 获取验证码
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			// 选择公司回调
			selectConfirm(e) {
				this.model.companie = '';
				e.map((val, index) => {
					this.model.companie += this.model.companie == '' ? val.label : '-' + val.label;
				})
			},
			// 选中某个单选框时，由checkbox时触发
			checkboxChange(e) {
				console.log(e);
			},
			//跳转到协议
			toAgreement(){
				uni.navigateTo({url: 'agreement'});
			},
			submit(){
				uni.switchTab({
					url:'../home/home'
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

<style scoped>
	.codeType{
		/* padding: 20rpx 10rpx; */
		border: #0F58FB solid 1rpx;
		border-radius: 5rpx;
		margin-left: 10rpx;
		color: #0F58FB;
	}
</style>
