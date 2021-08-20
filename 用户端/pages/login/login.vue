<template>
	<view class="u-p-50">
		<view class="text-bold" style="font-size: 60rpx;">登录</view>
		<view class="text-gray u-font-36 u-m-b-20">登录后体验更精彩</view>
		<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
			<u-form-item :label-style="labelStyle" :required="true" :label-position="labelPosition" label="手机"
				prop="phone">
				<u-input :border="border" type="number" v-model="model.phone" placeholder="请输入手机号"></u-input>
			</u-form-item>
			<u-form-item :label-style="labelStyle" :required="true" :label-position="labelPosition" label="验证码"
				prop="code" label-width="150">
				<u-input :border="border" placeholder="请输入验证码" v-model="model.code" type="number"></u-input>
				<u-button slot="right" type="primary" plain size="medium" @click="getCode">{{codeTips}}</u-button>
				<!-- <view class="codeType" slot="right" @click="getCode">{{codeTips}}</view> -->
			</u-form-item>
		</u-form>
		<navigator open-type="navigate" url="register" hover-class="none" class="u-m-b-60 u-text-center u-m-t-60 u-text-right">还没有账号?
			<text class="u-m-l-10" style="color: #0F58FB;">前去注册</text>
		</navigator>

		<u-button class="u-m-t-30" type="primary" :disabled="disabled" @click="submit">登录</u-button>

		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			let token = this.http.getToken();
			let identity = uni.getStorageSync('identity');
			if(token){
				if(identity == 1){
					uni.switchTab({
						url:'../home/home'
					})
				}else if(identity == 2||identity == 3){
					window.location.href = 'http://tower.0831.run/html/staff'
				}else if(identity == 4||identity == 5){
					window.location.href = 'http://tower.0831.run/html/manager'
				}else if(identity == 6){
					window.location.href = 'http://tower.0831.run/html/manager/#/pages/leader/leader'
				}
			}
		},
		onShow() {
			let code = this.GetQueryString("openid");
			let userid = this.GetQueryString('userid')
			if(code == null){
				this.getOpenid();
			}else{
				this.openid = code
				uni.setStorageSync('openid',code)
			}
		},
		data() {
			return {
				openid:'',
				inviter_id:'',
				
				border: false,
				labelStyle: {
					fontSize: '28rpx',
					fontWeight: 'bold'
				},
				labelPosition: 'top',
				codeTips: '',
				errorType: ['message', 'border-bottom'],

				model: {
					phone: '',
					code: '',
				},
				rules: {
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
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
					code: []
				}
				
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		computed: {
			disabled: function() {
				let bool = true;
				if (this.model.phone && this.model.code) {
					bool = false;
				}
				return bool;
			}
		},
		methods: {
			getOpenid(){
				console.log('eee');
				window.location.href = this.http.interfaceUrl() + 'auth/oauth?action=0'
			},
			codeChange(text) {
				this.codeTips = text;
			},
			// 获取验证码s
			getCode() {
				if(!this.model.phone) return this.$u.toast('请先输入手机号码!')
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					this.http.post('auth/sendMsgCode',{
						tel_num:this.model.phone
					}).then(res=>{
						if(res.code == 1000){
							uni.hideLoading();
							// 这里此提示会被this.start()方法中的提示覆盖
							this.$u.toast('验证码已发送');
							// 通知验证码组件内部开始倒计时
							this.$refs.uCode.start();
						}else{
							this.$u.toast(res.msg);
						}
					})
				}else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.http.post('auth/login',{
							tel_num:this.model.phone,
							msg_code:this.model.code,
						}).then((res)=>{
							if(res.code==1000){
								this.http.setUserInfo(res.data.token,res.data.identity,'',this.model.phone);
								//	1=>普通用户,2=>业务员,3=>维修师傅,4=>分公司副经理,5=>分公司经理,6=>总公司经理
								if(res.data.identity == 1){
									this.$refs.uToast.show({
										title:res.msg,
										type:"success",
										isTab:true,
										url:'/pages/home/home'
									})
								}else if(res.data.identity == 2||res.data.identity == 3){
									window.location.href = 'http://tower.0831.run/html/staff'
								}else if(res.data.identity == 4||res.data.identity == 5){
									window.location.href = 'http://tower.0831.run/html/manager'
								}else if(res.data.identity == 6){
									window.location.href = 'http://tower.0831.run/html/manager/#/pages/leader/leader'
								}
							}else{
								this.$refs.uToast.show({
									title:res.msg,
									type:'error'
								})
								if(res.msg == '用户不存在'){
									setTimeout(()=>{
										uni.navigateTo({url: 'register'});
									},1000)
								}
							}
						})
					} else {
						this.$refs.uToast.show({
							title:"请填写完带*号的选项再提交",
							type:'error'
						})
					}
				});
			},
			//获取当前url地址上的值
			GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);
			     if(r!=null)return  unescape(r[2]); return null;
			},
		}
	}
</script>

<style scoped>
	.codeType {
		/* padding: 20rpx 10rpx; */
		border: #0F58FB solid 1rpx;
		border-radius: 5rpx;
		margin-left: 10rpx;
		color: #0F58FB;
	}
</style>
