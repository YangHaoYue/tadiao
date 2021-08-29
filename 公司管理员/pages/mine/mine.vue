<template>
	<view>
		<!-- 头像 -->
		<view class="u-flex u-col-top u-p-t-20 u-p-l-46 u-p-b-10 u-p-r-30" style="background-color: #F8F8F8;">
			<view class="u-flex u-col-center" style="margin-right: auto;" @click="toSetting">
				<u-avatar :src="http.resourceUrl() +user_data.avatar" size="120"></u-avatar>
				<view class="u-m-l-30">
					<view class="u-font-28 text-bold u-line-1">{{user_data.name}}</view>
					<view class="u-font-24 u-line-1" style="color: #999999;">{{user_data.branch_name}}</view>
				</view>
			</view>
			<view class="u-flex u-col-center u-row-right" v-if="branch_id == ''">
				<u-image class="u-m-r-24" src="../../static/shezhi-6@2x.png" width="44" height="44" :fade="false" @click="toPerfection"></u-image>
				<u-image src="../../static/qrcode@2x.png" width="44" height="44" :fade="false" @click="showModal = true"></u-image>
			</view>
		</view>
		
		<!-- card -->
		<view class="card u-flex u-row-between u-col-top" v-if="branch_id == ''">
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
					<view :class="!current?'selected':'nomal'" style="border-radius: 0 8rpx 8rpx 0;">自定义</view>
				</view>
				<view class="u-p-10 u-flex u-row-between u-border" style="border-radius: 4rpx;" @click="showCalender = true" v-if="current">
					<view>{{month}}</view>
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
				<u-grid-item class="u-border-right u-border-bottom u-p-l-30" @click="toProjectClues">
					<view class="grid-text" style="margin-right: auto;">线索量</view>
					<view class="value u-m-t-20" style="margin-right: auto;">{{business_data.project_count}}</view>
				</u-grid-item>
				<u-grid-item class="u-border-bottom" style="padding-left: 100rpx;">
					<view class="grid-text" style="margin-right: auto;">订单量</view>
					<view class="value u-m-t-20" style="margin-right: auto;">{{business_data.order_count}}</view>
				</u-grid-item>
				<u-grid-item class="u-border-right u-p-l-30" @click="toRecList">
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
		<u-row gutter="10" justify="between">
			<u-col span="3" v-for="(item,index) in list" :key="index">
				<navigator open-type="navigate" :url="item.url" hover-class="none"
				class="u-flex u-row-center u-col-center u-m-b-20" style="flex-direction: column;">
					<u-image :src="item.img" width="80" height="80"></u-image>
					<view class="u-font-28" style="color: #404E60;">{{item.name}}</view>
				</navigator>
			</u-col>
		</u-row>
		<!-- 员工 -->
		<view style="padding: 0 30rpx 30rpx 30rpx;" class="u-m-t-30">
			<view class="u-font-32 text-bold u-m-b-30" style="color: #404E60;">员工</view>
		</view>
		<u-row gutter="10" justify="between">
			<u-col span="3"  v-for="(item,i) in staff" :key="i">
				<navigator open-type="navigate" :url="item.url" hover-class="none"
				class="u-flex u-row-center u-col-center u-m-t-20" style="flex-direction: column;">
					<u-image :src="item.img" width="80" height="80"></u-image>
					<view class="u-font-28" style="color: #404E60;">{{item.name}}</view>
				</navigator>
			</u-col>
		</u-row>
		<u-gap bg-color="#ffffff"></u-gap>
		
		
		<!-- 日历/月 -->
		<!-- <u-calendar v-model="showCalender" @change="chooseMonth" :safe-area-inset-bottom="true"></u-calendar> -->
		<u-picker mode="time" v-model="showCalender" :params="params" @confirm="chooseMonth"></u-picker>
		<!-- 日历/自定义 -->
		<u-calendar v-model="show" mode="range" @change="chooseDayRange" :safe-area-inset-bottom="true"></u-calendar>
		<!-- 二维码弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="546" height="681">
			<view class="u-p-60 u-p-b-40 u-flex" style="flex-direction: column;">
				<u-image :src="codeImg" width="363" height="363"></u-image>
				<view class="u-m-t-20 u-font-24 text-gray">长按保存相册</view>
				<u-button style="width: 100%;margin-top: 80rpx;" size="medium" type="primary" @click="showModal = false">关闭</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		onLoad() {
			let now = new Date();
			this.month = `${now.getFullYear()}-${now.getMonth() + 1}`;
			this.start = this.http.getToday();
			this.end = this.http.getToday();
			
			this.branch_id = uni.getStorageSync('branch_id')
			if(!this.branch_id){
				this.staff.push({img:'../../static/yinhangkaguanli@2x.png',name:'银行卡管理',url:'/pages/mine/bankCardManagement/bankCardManagement'})
			}
		},
		onShow() {
			this.getUserInfo();
			this.getInviteCode();
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				this.getUserInfo();
				this.getInviteCode();
				uni.stopPullDownRefresh();
			},1000)
		},
		data() {
			return {
				//总经理查看分公司信息
				branch_id:'',
				
				user_data:{
					id:6,
					name:"维修师傅老王",
					avatar:"images\/85e29bb4783cf12363a8fce9237df14.png",
					branch_name:"测试分公司"
				},
				
				//二维码弹窗
				showModal:false,
				codeImg:'',
				
				total_reward:'',
				today_reward:'',
				
				//分段器
				current:true,
				//月
				month:'',
				showCalender:false,
				params: {
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false
				},
				//自定义
				show:false,
				start:'',
				end:'',
				
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
					{img:'../../static/shebeibaojia@2x.png',name:'设备报价',url:'/pages/mine/offer/offer'}
				],
				staff:[
					{img:'../../static/yuangonggaunli@2x.png',name:'员工管理',url:'/pages/mine/StaffManagement/StaffManagement'},
					{img:'../../static/xiansuopaiming@2x.png',name:'线索排名',url:'/pages/mine/ranking/projectRank'},
					{img:'../../static/dingdanjine@2x.png',name:'订单金额排名',url:'/pages/mine/ranking/moneyRank'},
					{img:'../../static/yingshoukuan@2x.png',name:'应收款排名',url:'/pages/mine/ranking/cluesRank'}
				]
			}
		},
		methods: {
			getUserInfo(){
				let data = ''
				if(!this.current){
					data = {
						branch_id:uni.getStorageSync('branch_id'),
						start_at:this.start,
						end_at:this.end
					}
				}else{
					data = {
						month:this.month,
						branch_id:uni.getStorageSync('branch_id')
					}
				}
				this.http.get('UserCenter/manager',data).then(res=>{
					if(res.code == 1000){
						this.user_data = res.data.user_data;
						this.total_reward = res.data.total_reward;
						this.today_reward = res.data.today_reward;
						this.business_data = res.data.business_data;
					}else{
						this.$u.toast(res.msg)
					}
				})
			},
			getInviteCode(){
				this.http.get('UserCenter/getInviteCode',{},true).then(res=>{
					this.codeImg = this.http.resourceUrl() + res.data
				})
			},
			toSetting(){
				uni.navigateTo({url: 'setting/setting'});
			},
			//完善信息
			toPerfection(){
				uni.navigateTo({url: '/pages/mine/perfection/perfection'});
			},
			//分段器
			changeSub(){
				this.current = !this.current;
			},
			chooseMonth(e){
				console.log(e);
				this.month = `${e.year}-${e.month}`;
				this.getUserInfo();
			},
			chooseDayRange(e){
				console.log(e);
				this.start = e.startDate;
				this.end = e.endDate;
				this.getUserInfo();
			},
			toLeader(){
				uni.navigateTo({url: '../leader/leader'});
			},
			//跳转线索列表
			toProjectClues(){
				uni.navigateTo({url: '/pages/mine/projectClues/projectClues'});
			},
			//应收款列表
			toRecList(){
				uni.navigateTo({url: '/pages/mine/recList/recList'});
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
