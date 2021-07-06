<template>
	<view>
		<view class="bgImg">
			<!-- 头像 -->
			<view class="u-flex u-col-center u-p-l-14 u-p-t-60 u-p-b-40" >
				<u-avatar :src="avaterSrc" size="132"></u-avatar>
				<view class="u-m-l-30 u-font-36 text-white text-bold">{{name}}</view>
			</view>
			<!-- 项目奖金 -->
			<view class="bg-white" style="border-radius: 10rpx;height: 305rpx;padding: 70rpx 20rpx 40rpx 60rpx; background-image: url(../../static/mine/bg_jiangjin@2x.png);background-size: 100% 100%;">
				<view class="u-flex u-col-center u-row-between">
					<view class="text-bold" style="font-size: 52rpx;color: #FE9127;">{{total_reward}}</view>
					<navigator open-type="navigate" url="/pages/mine/withdrawal/withdrawal"
					class="round u-font-28 u-text-center text-white" style="background-color: #FE9127;padding: 13rpx 26rpx;">
						申请提现
					</navigator>
				</view>
				<view class="u-font-28 u-m-t-12 u-m-b-30" style="color: #999999;">项目奖金(元)</view>
				<navigator open-type="navigate" hover-class="none" url="/pages/mine/withdrawal/detailed">
					<view class="u-font-24 u-m-l-4" style="color: #FD8F24;">查看明细</view>
				</navigator>
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
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getUserInfo()
		},
		data() {
			return {
				avaterSrc: '',
				name:'',
				total_reward:'0',
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
					name:'资料审核',
					img:'../../static/mine/yinhangka@2x.png',
					url:'/pages/mine/bankCardManagement/bankCardManagement'
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
						this.avaterSrc = this.http.resourceUrl() + res.data.user_data.avatar
					}
				})
			},
			getRealInfo(){
				this.http.get('UserCenter/getRealInfo',{},true).then(res=>{
					
				})
			},
			navgate(url){
				uni.navigateTo({
					url:url
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
