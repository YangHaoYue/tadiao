<template>
	<view>
		<view class="u-flex u-p-l-30 u-p-t-14 u-p-b-14 u-font-28" style="color: #666666;">
			可提现金额:¥{{totalMoney}}
		</view>
		<view class="u-p-25 u-p-l-40 bg-white">
			<view class="u-font-28" style="color: #999999;">提现金额</view>
			<view class="u-flex u-col-center">
				<view class="text-bold u-m-r-10" style="color: #151515;font-size: 62rpx;">￥</view>
				<u-input class="moneyInput" type="number" v-model="money" placeholder="请输入提现金额" placeholder-style="font-size:28rpx"></u-input>
			</view>
		</view>
		
		<view class="u-p-l-30 u-p-r-30 u-m-t-20 bg-white">
			<u-form :model="model">
				<u-form-item :label-style="labelStyle" right-icon="arrow-right" :label-position="labelPosition" label="提现方式" prop="companie" label-width="200" >
					<u-input :border="border" :disabled="true" v-model="model.way" placeholder="请选择公司" @click="selectShow = true"></u-input>
				</u-form-item>
				<!-- wx -->
				<block v-if="model.wayId == 2">
					<u-form-item :label-style="labelStyle" label-width="200" :label-position="labelPosition" label="微信号">
						<u-input :border="border" placeholder="请输入微信号" v-model="model.wx.acount" type="text"></u-input>
					</u-form-item>
					<u-form-item :label-style="labelStyle" label-width="200" :label-position="labelPosition" label="姓名">
						<u-input :border="border" type="text" v-model="model.wx.name" placeholder="请输入姓名"></u-input>
					</u-form-item>
				</block>
				<!-- 支付宝 -->
				<block v-if="model.wayId == 1">
					<u-form-item :label-style="labelStyle" label-width="200" :label-position="labelPosition" label="账号">
						<u-input :border="border" placeholder="请输入支付宝账号" v-model="model.zfb.acount" type="number"></u-input>
					</u-form-item>
					<u-form-item :label-style="labelStyle" label-width="200" :label-position="labelPosition" label="姓名">
						<u-input :border="border" type="text" v-model="model.zfb.name" placeholder="请输入姓名"></u-input>
					</u-form-item>
				</block>
				<!-- 银行 -->
				<block v-if="model.wayId == 0" >
					<u-form-item :label-style="labelStyle" right-icon="arrow-right" :label-position="labelPosition" label="银行卡" label-width="200" >
						<u-input :border="border" :disabled="true" v-model="model.band.bandName" placeholder="请选择银行" @click="toManagment" disabled></u-input>
					</u-form-item>
					<u-form-item :label-style="labelStyle" label-width="200" :label-position="labelPosition" label="银行卡号">
						<u-input :border="border" type="number" v-model="model.band.code" placeholder="请输入银行卡号" disabled @click="toManagment"></u-input>
					</u-form-item>
				</block>
			</u-form>
		</view>
		
		<u-icon class="u-m-20 u-m-l-30" name="error-circle-fill" size="38" color="#999999" label="佣金个税按国家规定执行" label-color="#999999" label-size="26"></u-icon>
		
		<u-button class="u-m-30" type="primary" @click="submit">申请提现</u-button>
		
		<!-- 提现方式 -->
		<u-select mode="single-column" confirm-color="#0F58FB" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
		
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="546" height="478">
			<view class="u-p-60 u-p-b-40 u-flex" style="flex-direction: column;">
				<u-icon name="checkmark-circle-fill" size="100" color="#0F58FB" :label="'本次提现￥'+money" label-color="#333333" label-size="30" label-pos="bottom" margin-top="20"></u-icon>
				<view class="u-m-t-40 u-font-24 text-gray u-m-b-20">审核中,1-3日内到账</view>
				<u-button class="u-m-t-50" style="width: 100%;" size="medium" type="primary" @click="back">我知道了</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo()
		},
		onShow() {
			uni.$on('brank_id',(res)=>{
				this.model.band.bankcard_id = res.brank_id
				this.getBankcardById()
				uni.$off('brank_id')
			})
		},
		data() {
			return {
				//可提现金额
				totalMoney:'',
				//输入金额
				money:0,
				
				border:false,
				labelStyle:{fontSize: '28rpx',fontWeight: 'bold',color:'#151515'},
				labelPosition: 'left',
				codeTips: '',
				errorType: ['message','border-bottom'],
				
				model:{
					way:'银行卡提现',
					wayId:0,
					wx:{
						acount:'',
						name:''
					},
					zfb:{
						acount:'',
						name:''
					},
					band:{
						bankcard_id:'',
						bandName:'',
						code:''
					}
				},
				//选择提现方式
				selectShow:false,
				//提现方式列表
				selectList: [
					{
						value: 0,
						label: '银行卡提现'
					},
					{
						value: 1,
						label: '支付宝'
					},
					{
						value: 2,
						label: '微信'
					}
				],
				showModal:false
			}
		},
		methods: {
			getInfo(){
				this.http.get('withdraw/getUserBalance').then(res=>{
					this.totalMoney = res.data.balance
				})
			},
			getBankcardById(){
				this.http.post('withdraw/getBankcardById',{
					bankcard_id:this.model.band.bankcard_id
				}).then(res=>{
					if(res.code == 1000){
						this.model.band.bandName = res.data.bankcard.bank_name;
						this.model.band.code = res.data.bankcard.bankcard_num;
					}
				})
			},
			toManagment(){
				uni.navigateTo({url: '../bankCardManagement/bankCardManagement?isSelect=true'});
			},
			//选择提现方式
			selectConfirm(e) {
				console.log(e);
				this.model.way = '';
				this.model.wayId = '';
				e.map((val, index) => {
					this.model.way += this.model.way == '' ? val.label : '-' + val.label;
					this.model.wayId = val.value
				})
			},
			back(){
				this.showModal = false
				uni.navigateBack({
					delta: 1
				});
			},
			submit(){
				let data = ''
				if(this.model.wayId == 0){
					data = {
						type:this.model.wayId,
						amount:this.money,
						bankcard_id:this.model.band.bankcard_id,
					}
				}else if(this.model.wayId == 1){
					data = {
						type:this.model.wayId,
						amount:this.money,
						name:this.model.zfb.name,
						account:this.model.zfb.acount
					}
				}else{
					data = {
						type:this.model.wayId,
						amount:this.money,
						name:this.model.wx.name,
						account:this.model.wx.acount
					}
				}
				this.http.post('withdraw/withdraw',data).then(res=>{
					if(res.code == 1000){
						this.showModal = true
					}else{
						this.$u.toast(res.msg);
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #F8F8F8;
	}
	.moneyInput{
		/deep/ .u-input__input{
			font-size: 56rpx;
			color: #333333;
		}
	}
</style>
