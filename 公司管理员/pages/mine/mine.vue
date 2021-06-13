<template>
	<view>
		<!-- 头像 -->
		<view class="u-flex u-col-top u-p-t-20 u-p-l-46 u-p-b-10 u-p-r-30">
			<view class="u-flex u-col-center" style="margin-right: auto;">
				<u-avatar :src="avaterSrc" size="120"></u-avatar>
				<view class="u-m-l-30">
					<view class="u-font-28 text-bold">李家</view>
					<view class="u-font-24" style="color: #999999;">嘉善分公司</view>
				</view>
			</view>
			<view class="u-flex u-col-top">
				<u-image class="u-m-r-24" src="../../static/shezhi-6@2x.png" width="44" height="44" :fade="false" @click="toSetting"></u-image>
				<u-image src="../../static/qrcode@2x.png" width="44" height="44" :fade="false" @click="showModal = true"></u-image>
			</view>
		</view>
		<!-- card -->
		<view class="card u-flex u-row-between u-col-top">
			<view class="text-white">
				<view class="u-font-28">项目奖金(元)</view>
				<view class="text-bold" style="font-size: 46rpx;margin: 10rpx 0 27rpx 0;">{{money}}</view>
				<view class="u-font-23">今日收益(元) {{profit}}</view>
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
					<view class="value u-m-t-20" style="margin-right: auto;">871</view>
				</u-grid-item>
				<u-grid-item class="u-border-bottom" style="padding-left: 100rpx;">
					<view class="grid-text" style="margin-right: auto;">订单量</view>
					<view class="value u-m-t-20" style="margin-right: auto;">871</view>
				</u-grid-item>
				<u-grid-item class="u-border-right u-p-l-30">
					<view class="grid-text" style="margin-right: auto;">订单金额</view>
					<view class="value u-m-t-20" style="margin-right: auto;">￥871.00</view>
				</u-grid-item>
				<u-grid-item style="padding-left: 100rpx;">
					<view class="grid-text" style="margin-right: auto;">订单金额</view>
					<view class="value u-m-t-20" style="margin-right: auto;">￥871.00</view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 项目 -->
		<view style="padding: 0 30rpx 30rpx 30rpx;">
			<view class="u-font-32 text-bold u-m-b-30" style="color: #404E60;">项目</view>
		</view>
		<view class="u-flex u-row-around u-p-l-20 u-p-r-20">
			<navigator open-type="navigate" :url="item.url"
			class="u-flex u-row-center u-col-center" style="flex-direction: column;" v-for="(item,index) in list" :key="index">
				<u-image :src="item.img" width="80" height="80"></u-image>
				<view class="u-font-28" style="color: #404E60;">{{item.name}}</view>
			</navigator>
		</view>
		
		<!-- 员工 -->
		<view style="padding: 0 30rpx 30rpx 30rpx;" class="u-m-t-30">
			<view class="u-font-32 text-bold u-m-b-30" style="color: #404E60;">员工</view>
		</view>
		<view class="u-flex u-row-around u-p-l-20 u-p-r-20">
			<navigator open-type="navigate" :url="item.url"
			class="u-flex u-row-center u-col-center" style="flex-direction: column;" v-for="(item,i) in staff" :key="i">
				<u-image :src="item.img" width="80" height="80"></u-image>
				<view class="u-font-28" style="color: #404E60;">{{item.name}}</view>
			</navigator>
		</view>
		<u-gap bg-color="#ffffff"></u-gap>
		
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
		data() {
			return {
				avaterSrc: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				//二维码弹窗
				showModal:false,
				money:'7500.00',
				profit:'0.00',
				//分段器
				current:true,
				//月
				day:'2020-11-22',
				showCalender:false,
				//自定义
				show:false,
				start:'2020-11-22',
				end:'2020-11-22',
				
				list:[
					{img:'../../static/xiangmuxiansuo@2x.png',name:'项目线索',url:'/pages/mine/projectClues/projectClues'},
					{img:'../../static/xiangmugaunli@2x.png',name:'项目管理',url:'/pages/mine/projectManagement/projectManagement'},
					{img:'../../static/weibaojilu@2x.png',name:'维保记录',url:'/pages/mine/maintenance/maintenance'},
					{img:'../../static/yinhangkaguanli@2x.png',name:'银行卡管理',url:'/pages/mine/bankCardManagement/bankCardManagement'}
				],
				staff:[
					{img:'../../static/yuangonggaunli@2x.png',name:'员工管理',url:'/pages/mine/projectClues/projectClues'},
					{img:'../../static/xiansuopaiming@2x.png',name:'线索排名',url:'/pages/mine/projectManagement/projectManagement'},
					{img:'../../static/dingdanjine@2x.png',name:'订单金额排名',url:'/pages/mine/maintenance/maintenance'},
					{img:'../../static/yingshoukuan@2x.png',name:'应收款排名',url:'/pages/mine/bankCardManagement/bankCardManagement'}
				]
			}
		},
		methods: {
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
	.card{
		background-image: url(../../static/bg_jiangjin@2x.png);
		background-size: 100% 100%;
		height: 256rpx;
		width: 750rpx;
		padding: 35rpx 45rpx;
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
		border-radius: 8rpx;
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
