<template>
	<view>
		<view class="bgImg">
			<!-- 头像 -->
			<view class="u-flex u-col-center u-p-l-14 u-p-t-60 u-p-b-40" @click="navgate('/pages/mine/setting/setting')">
				<u-avatar :src="avaterSrc" size="132"></u-avatar>
				<view class="u-m-l-30 u-font-36 text-white text-bold">{{name}}</view>
			</view>
			<!-- 项目奖金 -->
			<view class="bg-white" style="border-radius: 10rpx;height: 305rpx;padding: 70rpx 20rpx 40rpx 60rpx; background-image: url(../../static/mine/bg_jiangjin@2x.png);background-size: 100% 100%;">
				<view class="u-flex u-col-center u-row-between">
					<view class="text-bold" style="font-size: 52rpx;color: #FE9127;">{{total_reward}}</view>
					<view @click="toWithdrawal('withdrawal/withdrawal')" class="round u-font-28 u-text-center text-white" style="background-color: #FE9127;padding: 13rpx 26rpx;">
						申请提现
					</view>
				</view>
				<view class="u-font-28 u-m-t-12 u-m-b-30" style="color: #999999;">项目奖金(元)</view>
				<view @click="toWithdrawal('withdrawal/detailed')">
					<view class="u-font-24 u-m-l-4" style="color: #FD8F24;">查看明细</view>
				</view>
			</view>
		</view>
		<view class="u-p-22">
			<!-- 列表1 -->
			<view class="cu-list menu sm-border card-menu margin-top" style="margin-left: 0;margin-right: 0;">
				<block v-for="(item,index) in cellList1" :key="index">
					<view class="cu-item arrow" @click="navgate(item.url)">
						<view class="content u-flex">
							<u-image :src="item.img" width="44" height="44" :fade="false"></u-image>
							<text class="u-font-28 u-m-l-20" style="color: #404E60;">{{item.name}}</text>
						</view>
					</view>
				</block>
			</view>
			<!-- 列表2 -->
			<view class="cu-list menu sm-border card-menu margin-top" style="margin-left: 0;margin-right: 0;">
				<block v-for="(item,index) in cellList2" :key="index">
					<view class="cu-item arrow" @click="navgate(item.url)">
						<view class="content u-flex">
							<u-image :src="item.img" width="44" height="44" :fade="false"></u-image>
							<text class="u-font-28 u-m-l-20" style="color: #404E60;">{{item.name}}</text>
						</view>
					</view>
				</block>
			</view>
			
			<view class="u-m-20">
				<u-button type="primary" @click="exit">退出登录</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onShow() {
			let token = this.http.getToken();
			let identity = Number(uni.getStorageSync('identity'))
			if(token){
				if(identity === 2||identity === 3){
					window.location.href = 'https://dadazulin.cn/html/staff/#/pages/mine/mine'
				}else if(identity === 4||identity === 5){
					window.location.href = 'https://dadazulin.cn/html/manager/#/pages/mine/index?type=mine'
				}else if(identity === 6){
					window.location.href = 'https://dadazulin.cn/html/manager/#/pages/leader/index?type=mine&random'+this.$u.random(1,100)
				}
			}
			this.getUserInfo()
		},
		data() {
			return {
				avaterSrc: '',
				name:'',
				total_reward:'0',
				id_certified:'',
				refused_reason:'',
				cellList1:[{
					name:'项目线索',
					img:'../../static/mine/shezhi-2@2x.png',
					url:'/pages/mine/projectClues/projectClues'
				},{
					name:'项目管理',
					img:'../../static/mine/yjfk@2x.png',
					url:'/pages/mine/projectManagement/projectManagement'
				},{
					name:'银行卡管理',
					img:'../../static/mine/yinhangka@2x.png',
					url:'/pages/mine/bankCardManagement/bankCardManagement'
				},{
					name:'实名认证',
					img:'../../static/mine/yinhangka@2x.png',
					url:'/pages/mine/materialApply/materialApply'
				}],
				cellList2:[{
					name:'申请成为业务员',
					img:'../../static/mine/yewuyuan@2x.png',
					url:'/pages/mine/applicationSalesman/applicationSalesman'
				},{
					name:'申请成为维修师傅',
					img:'../../static/mine/weixiuyuan@2x.png',
					url:'/pages/mine/ApplyRepairman/ApplyRepairman'
				}],
			}
		},
		methods: {
			getUserInfo(){
				this.http.get('UserCenter/user',{},true).then(res=>{
					if(res.code == 1000){
						this.total_reward = res.data.total_reward;
						this.show_withdraw_button = res.data.show_withdraw_button;
						this.name = res.data.user_data.name;
						this.avaterSrc = this.http.resourceUrl() + res.data.user_data.avatar;
						//用户是否实名认证
						this.id_certified = res.data.id_certified;
						this.refused_reason = res.data.refused_reason;
					}
				})
			},
			applicationSalesman(){
				this.http.get('UserCenter/getStaffApplyEditPage',{
					type:0
				}).then(res=>{
					if(res.data.status == 1){
						this.http.modal("",res.data.refused_reason+"审核未通过，请重新提交！", false, () => {
							uni.navigateTo({								url:'applicationSalesman/applicationSalesman'							})
						})
					}else if(res.data.status == 2){
						this.http.modal("","审核中，请耐心等待！", false, () => {
						})
					}else if(res.data.status == 3){
						this.http.modal("","审核通过,请重新登录！", false, () => {
							uni.clearStorageSync();
							uni.reLaunch({
								url:'../../login/login'
							})
						})
					}
				})
			},
			ApplyRepairman(){
				this.http.get('UserCenter/getStaffApplyEditPage',{
					type:1
				}).then(res=>{
					if(res.data.status == 1){
						this.http.modal("",res.data.refused_reason+"审核未通过，请重新提交！", false, () => {
							uni.navigateTo({
								url:'ApplyRepairman/ApplyRepairman'
							})
						})
					}else if(res.data.status == 2){
						this.http.modal("","审核中，请耐心等待！", false, () => {
						})
					}else if(res.data.status == 3){
						this.http.modal("","审核通过,请重新登录！", false, () => {
							uni.clearStorageSync();
							uni.reLaunch({
								url:'../../login/login'
							})
						})
					}
				})
			},
			navgate(url){
				uni.navigateTo({
					url:url
				})
			},
			apply(index){
				if(index == 0){
					this.applicationSalesman()
				}else{
					this.ApplyRepairman();
				}
			},
			//提现
			toWithdrawal(url){
				if(this.id_certified == 2) return this.navgate(url);
				let modalTitle = '';
				switch(this.id_certified){
					case 0: modalTitle = '请先实名认证!'
							break;
					case 1: modalTitle = '审核中！'
							break;
					case 3: modalTitle = this.refused_reason
							break;
				}
				this.http.modal("",modalTitle, false, () => {
					if(this.id_certified == 1) return
					uni.navigateTo({
						url:'materialApply/materialApply'
					})
				})
			},
			//退出登录
			exit(){
				uni.clearStorageSync();
				uni.reLaunch({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
	.bgImg{
		width: 100%;
		height: 528rpx;
		padding: 0 22rpx;
		background-image: url(../../static/mine/bg_wode@2x.png);
		background-size: 100% 100%;
	}
</style>
