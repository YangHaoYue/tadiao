<template>
	<view>
		<!-- 头像 -->
		<view class="u-flex u-col-top u-p-t-20 u-p-l-46 u-p-b-10 u-p-r-30" style="background-color: #F8F8F8;">
			<view class="u-flex u-col-center" style="margin-right: auto;">
				<u-avatar :src="http.resourceUrl() +user_data.avatar" size="120"></u-avatar>
				<view class="u-m-l-30">
					<view class="u-font-28 text-bold">{{user_data.name}}</view>
					<view class="u-font-24" style="color: #999999;">{{user_data.branch_name}}</view>
				</view>
			</view>
			<view class="u-flex u-col-center u-row-right" v-if="show_fixer_button">
				<view class="role u-m-r-10" @click="change">{{changeRole}}</view>
				<u-image class="u-m-r-24" src="../../static/shezhi-6@2x.png" width="44" height="44" :fade="false" @click="toSetting"></u-image>
				<u-image v-if="!role" src="../../static/qrcode@2x.png" width="44" height="44" :fade="false" @click="showModal = true"></u-image>
			</view>
		</view>
		
		<block v-if="!role">
			<!-- card -->
			<view class="card u-flex u-row-between u-col-top">
				<view class="text-white">
					<view class="u-font-28">项目奖金(元)</view>
					<view class="text-bold" style="font-size: 46rpx;margin: 10rpx 0 27rpx 0;">{{total_reward}}</view>
					<view class="u-font-23">今日收益(元) <text class="u-m-l-20">{{today_reward}}</text></view>
				</view>
				<view class="u-text-right">
					<navigator open-type="navigate" url="withdrawal/withdrawal">
						<view class="applyBtn">申请提现</view>
					</navigator>
					<navigator open-type="navigate" url="withdrawal/detailed" hover-class="none">
						<view class="text-white u-font-23 u-m-r-16">查看明细</view>
					</navigator>
				</view>
			</view>
			<!-- 数据统计 -->
			<view style="padding: 0 30rpx 30rpx 30rpx;">
				<view class="u-font-32 text-bold u-m-b-30" style="color: #404E60;">数据统计</view>
				<view class="u-flex u-row-between">
					<view class="subsection u-flex" @click="changeSub">
						<view :class="current?'selected':'nomal'" style="border-radius: 8rpx 0 0 8rpx;">月</view>
						<view :class="current?'nomal':'selected'" style="border-radius: 0 8rpx 8rpx 0;">自定义</view>
					</view>
					<view class="u-p-10 u-flex u-row-between u-border" style="border-radius: 4rpx;" @click="showCalender = true" v-if="current">
						<view>{{day}}</view>
						<u-icon name="calendar" class="u-m-l-35" size="28" color="#999999"></u-icon>
					</view>
					<view class="u-flex u-font-28" @click="show = true" v-else>
						<view class="u-p-10 u-flex u-row-between u-border" style="border-radius: 4rpx;">
							<view>{{start}}</view>
							<u-icon name="calendar" class="u-m-l-35" size="28" color="#999999"></u-icon>
						</view>
						<view class="u-m-l-10 u-m-r-10">-</view>
						<view class="u-p-10 u-flex u-row-between u-border" style="border-radius: 4rpx;">
							<view>{{end}}</view>
							<u-icon name="calendar" class="u-m-l-35" size="28" color="#999999"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<!-- 宫格 -->
			<view class="u-p-30" style="padding-top: 0 !important;">
				<u-grid :col="2" :border="false" align="left">
					<u-grid-item class="u-border-right u-border-bottom u-p-l-30">
						<view class="grid-text" style="margin-right: auto;">线索量</view>
						<view class="value u-m-t-20" style="margin-right: auto;">{{business_data.project_count}}</view>
					</u-grid-item>
					<u-grid-item class="u-border-bottom" style="padding-left: 100rpx;">
						<view class="grid-text" style="margin-right: auto;">订单量</view>
						<view class="value u-m-t-20" style="margin-right: auto;">{{business_data.order_count}}</view>
					</u-grid-item>
					<u-grid-item class="u-border-right u-p-l-30">
						<view class="grid-text" style="margin-right: auto;">应收款</view>
						<view class="value u-m-t-20" style="margin-right: auto;">￥{{business_data.order_pay_amount}}</view>
					</u-grid-item>
					<u-grid-item style="padding-left: 100rpx;">
						<view class="grid-text" style="margin-right: auto;">订单金额</view>
						<view class="value u-m-t-20" style="margin-right: auto;">￥{{business_data.order_amount}}</view>
					</u-grid-item>
				</u-grid>
			</view>
			<!-- 项目 -->
			<view style="padding: 0 30rpx 30rpx 30rpx;">
				<view class="u-font-32 text-bold u-m-b-30" style="color: #404E60;">项目</view>
			</view>
			<view class="u-flex u-row-around u-p-l-20 u-p-r-20">
				<navigator open-type="navigate" :url="item.url" hover-class="none"
				class="u-flex u-row-center u-col-center" style="flex-direction: column;" v-for="(item,index) in list" :key="index">
					<u-image :src="item.img" width="80" height="80"></u-image>
					<view class="u-font-28" style="color: #404E60;">{{item.name}}</view>
				</navigator>
			</view>
		</block>
		
		<block v-else>
			<view class="cardTwo" style="padding-bottom: 59rpx;">
				<view class="u-font-32 text-bold u-m-b-30" style="color: #404E60;">设备管理</view>
				<view class="subsection u-flex u-line-1" style="width: 322rpx;">
					<view class="border-right" :class="curNow == 0?'selected':'nomal'" @click="changeCur(0)" style="border-radius: 8rpx 0 0 8rpx;">3日内</view>
					<view class="border-right" :class="curNow == 1?'selected':'nomal'" @click="changeCur(1)">7日内</view>
					<view :class="curNow == 2?'selected':'nomal'" @click="changeCur(2)" style="border-radius: 0 8rpx 8rpx 0;">1个月内</view>
				</view>
				<view class="u-font-28 u-m-t-42" style="color: #838383;">管理设备数</view>
				<view class="u-flex u-row-between u-m-t-10">
					<view class="text-black text-bold" style="font-size: 61rpx;">534</view>
					<navigator open-type="navigate" url="/pages/mine/equipmentList/equipmentList" hover-class="none">
						<view class="u-flex u-font-28 u-col-center" style="color: #838383;">
							<text>设备清单</text>
							<text class="cuIcon-right u-m-l-10 u-m-t-5"></text>
						</view>
					</navigator>
				</view>
			</view>
			
			<u-gap height="20" bg-color="#F8F8F8"></u-gap>
			
			<view class="cardTwo flex" style="flex-direction: column;">
				<view class="u-font-32 text-bold u-p-b-30 u-border-bottom" style="color: #404E60;">转入提醒</view>
				<view class="u-flex u-row-between u-col-top u-p-t-20 u-flex-1">
					<view class="u-flex-3">
						<view class="u-flex u-row-between u-m-b-10">
							<view class="u-font-28">项目名称</view>
							<view class="u-font-26">这是项目名称</view>
						</view>
						<view class="u-flex u-row-between u-m-b-10">
							<view class="u-font-28">设备出厂编号</view>
							<view class="u-font-26">WE2445</view>
						</view>
						<view class="u-flex u-row-between">
							<view class="u-font-28">转交人</view>
							<view class="u-font-26 u-flex">
								<u-avatar src="" size="60"></u-avatar>
								<view>张三</view>
							</view>
						</view>
						<view class="u-font-24" style="color: #838383;margin-top: 44rpx;">下次维保时间:2021-04-08</view>
					</view>
					<view class="u-flex-2 u-flex u-row-right">
						<u-button type="primary" size="mini" style="margin-right: 0;" @click="handle">处理</u-button>
					</view>
				</view>
			</view>
			
			<u-gap height="20" bg-color="#F8F8F8"></u-gap>
			
			<view class="cardTwo flex" style="flex-direction: column;">
				<view class="u-font-32 text-bold u-p-b-30 solid-bottom" style="color: #404E60;">跟踪提醒</view>
				<view class="u-flex u-row-between u-col-top u-p-t-20 u-p-b-20 u-flex-1 u-border-bottom" v-for="i in 3" :key="i">
					<view class="u-flex-3">
						<view class="u-flex u-row-between u-m-b-10">
							<view class="u-font-28">项目名称</view>
							<view class="u-font-26">这是项目名称</view>
						</view>
						<view class="u-flex u-row-between">
							<view class="u-font-28">设备出厂编号</view>
							<view class="u-font-26">WE2445</view>
						</view>
						<view class="u-font-24" style="color: #838383;margin-top: 31rpx;">下次维保时间:2021-04-08</view>
					</view>
					<view class="u-flex-2 u-flex u-row-right">
						<u-button type="primary" size="mini" style="margin-right: 0;">详情</u-button>
					</view>
				</view>
			</view>
		</block>
		
		
		<!-- 处理维保单的modal -->
		<u-modal v-model="modal" content="是否同意接受该维保单" :show-title="false" :show-cancel-button="true" confirm-text="同意" cancel-text="不同意"></u-modal>
		<!-- 日历/月 -->
		<u-calendar v-model="showCalender" @change="chooseDay" :safe-area-inset-bottom="true"></u-calendar>
		<!-- 日历/自定义 -->
		<u-calendar v-model="show" mode="range" @change="chooseDayRange" :safe-area-inset-bottom="true"></u-calendar>
		<!-- 二维码弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="546" height="681">
			<view class="u-p-60 u-p-b-40 u-flex" style="flex-direction: column;">
				<u-image :src="avaterSrc" width="363" height="363"></u-image>
				<view class="u-m-t-20 u-font-24 text-gray">长按保存相册</view>
				<u-button style="width: 100%;margin-top: 80rpx;" size="medium" type="primary" @click="showModal = false">关闭</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getUserInfo();
		},
		onBackPress() {
			this.fixerMain();
		},
		data() {
			return {
				show_fixer_button:false,
				role:true,
				changeRole:'进入业务员中心',//进入维修中心
				
				user_data:{
					id:6,
					name:"维修师傅老王",
					avatar:"images\/85e29bb4783cf12363a8fce9237df14.png",
					branch_name:"测试分公司"
				},
				
				//二维码弹窗
				showModal:false,
				
				total_reward:'7500.00',
				today_reward:'0.00',
				
				//分段器
				current:true,
				//月
				day:'2020-11-22',
				showCalender:false,
				//自定义
				show:false,
				start:'2020-11-22',
				end:'2020-11-22',
				
				business_data:{
					project_count:0,
					order_count:0,
					order_pay_amount:0,
					order_amount:0
				},
				
				list:[
					{img:'../../static/xiangmuxiansuo@2x.png',name:'项目线索',url:'/pages/mine/projectClues/projectClues'},
					{img:'../../static/xiangmugaunli@2x.png',name:'项目管理',url:'/pages/mine/projectManagement/projectManagement'},
					{img:'../../static/weibaojilu@2x.png',name:'维保记录',url:'/pages/mine/maintenance/maintenance'},
					{img:'../../static/yinhangkaguanli@2x.png',name:'银行卡管理',url:'/pages/mine/bankCardManagement/bankCardManagement'}
				],
				
				
				//维修师傅分段器
				curNow:0,
				modal:false,
				tower_count:0,
				is_certified:false
			}
		},
		methods: {
			//业务员
			getUserInfo(){
				let data = ''
				if(!this.current){
					data = {
						start_at:this.start,
						end_at:this.end
					}
				}
				this.http.get('UserCenter/staff',data).then(res=>{
					if(res.code == 1000){
						this.user_data = res.data.user_data;
						this.total_reward = res.data.total_reward;
						this.today_reward = res.data.today_reward;
						this.business_data = res.data.business_data;
						this.show_fixer_button = res.data.show_fixer_button;//true显示进入维修中心按钮
					}else{
						this.$u.toast(res.msg)
					}
				})
			},
			//维修师傅
			fixerMain(){
				this.http.get('UserCenter/fixerMain',{
					time_limit:this.curNow //0=>三日内(默认),1=>七日内,2=>一个月内,
				},true).then(res=>{
					if(res.code == 1000){
						this.user_data = res.data.user_data;
						this.tower_count = res.data.tower_count;
						this.is_certified = res.data.is_certified
						if(!this.is_certified){
							this.http.modal("","未认证，请先完善信息！", false, () => {
								uni.navigateTo({url: 'perfection/perfection'});
							},'#FE8702')
						}
					}
				})
			},
			//切换role
			change(){
				if(this.role){
					this.role = false;
					this.changeRole = '进入维修中心'
				}else{
					this.role = true;
					this.changeRole = '进入业务员中心'
				}
			},
			//维修师傅分段器
			changeCur(index){
				this.curNow = index;
			},
			//处理
			handle(){
				this.modal = true;
			},
			toSetting(){
				uni.navigateTo({url: 'setting/setting'});
			},
			//分段器
			changeSub(){
				this.current = !this.current;
			},
			chooseDay(e){
				console.log(e);
				this.day = e.result;
			},
			chooseDayRange(e){
				console.log(e);
				this.start = e.startDate;
				this.end = e.endDate;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.role{
		padding: 10rpx 20rpx;
		background-color: #0F58FB;
		border-radius: 12rpx;
		color: #FFFFFF;
		text-align: center;
		font-size: 28rpx;
	}
	.cardTwo{
		padding: 22rpx 30rpx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
	}
	.card{
		height: 256rpx;
		width: 750rpx;
		padding: 35rpx 45rpx;
		background-image: url(../../static/bg_jiangjin@2x.png);
		background-size: 100% 100%;
		.applyBtn{
			background-color: #FFFFFF;
			border-radius: 16rpx;
			color: #0F58FB;
			font-size: 23rpx;
			padding: 20rpx 46rpx;
			font-weight: bold;
			margin-bottom: 58rpx;
		}
	}
	.subsection{
		border: 1rpx solid #0F58FB;
		border-radius: 10rpx;
		font-size: 24rpx;
		.selected{
			background-color: #0F58FB;
			color: #FFFFFF;
			padding: 10rpx 20rpx;
		}
		.nomal{
			background-color: #FFFFFF;
			color: #0F58FB;
			padding: 10rpx 20rpx;
		}
		.border-right{
			border-right: 1rpx solid #0F58FB;
		}
	}
	.grid-text{
		color: #838383;
		font-size: 28rpx;
	}
	.value{
		font-size: 42rpx;
		font-weight: bold;
		color: #333330;
	}
</style>
