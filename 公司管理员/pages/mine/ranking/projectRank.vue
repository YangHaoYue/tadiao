<template>
	<view>
		<view class="bg" :style="'min-height:'+$u.sys().windowHeight+'px;'">
			<view class="u-flex u-row-between" style="padding: 65rpx 67rpx 6rpx 27rpx;">
				<u-image src="../../../static/员工线索排名@2x.png" width="414" height="83" mode="scaleToFill"></u-image>
				<u-image src="../../../static/trophy.png" width="144" height="154"></u-image>
			</view>
			
			<view class="u-flex u-row-between" style="padding: 0 40rpx 0rpx 30rpx;">
				<view class="subsection u-flex" @click="changeSub">
					<view :class="current?'selected':'nomal'" style="border-radius: 8rpx 0 0 8rpx;">月</view>
					<view :class="current?'nomal':'selected'" style="border-radius: 0 8rpx 8rpx 0;">自定义</view>
				</view>
				<view class="u-p-10 u-flex u-row-between u-border text-white" style="border-radius: 10rpx;" @click="showCalender = true" v-if="current">
					<view>{{day}}</view>
					<u-icon name="calendar" class="u-m-l-10" size="28" color="#FFFFFF"></u-icon>
				</view>
				<view class="u-flex u-font-28 text-white" @click="show = true" v-else>
					<view class="u-p-10 u-flex u-row-between u-border" style="border-radius: 6rpx;">
						<view>{{start}}</view>
						<u-icon name="calendar" class="u-m-l-10" size="28" color="#FFFFFF"></u-icon>
					</view>
					<view class="u-m-l-10 u-m-r-10">-</view>
					<view class="u-p-10 u-flex u-row-between u-border" style="border-radius: 6rpx;">
						<view>{{end}}</view>
						<u-icon name="calendar" class="u-m-l-10" size="28" color="#FFFFFF"></u-icon>
					</view>
				</view>
			</view>
			
			<view class="card bg-white">
				<view class="u-flex u-row-around u-p-b-14">
					<view class="text-black u-font-26">排行</view>
					<view class="text-black u-font-26">员工</view>
					<view class="text-black u-font-26">线索数</view>
				</view>
				<scroll-view scroll-y @scrolltolower="loadMore" style="height: 750rpx;"> 
					<block v-for="(item,index) in list" :key="index">
						<view class="u-flex u-col-center u-border-bottom u-p-14">
							<view class="u-flex u-flex-1">
								<u-image src="../../../static/first.png" width="34" height="45" v-if="index == 0"></u-image>
								<u-image src="../../../static/second.png" width="34" height="45" v-else-if="index == 1"></u-image>
								<u-image src="../../../static/third.png" width="34" height="45" v-else-if="index == 2"></u-image>
								<view class="bg-white" style="width: 34rpx;height: 45rpx;" v-else></view>
								<view class="u-m-l-30 text-black u-font-28">{{index+1}}</view>
							</view>
							<view class="u-flex u-flex-1 u-col-center">
								<u-avatar :src="http.resourceUrl() + item.avatar" size="60"></u-avatar>
								<view class="u-font-26 text-black u-m-l-12">{{item.name}}</view>
							</view>
							<view class="u-font-28 u-flex-1 u-text-center" style="color: #FE5E10;">{{item.project_count}}</view>
						</view>
					</block>
				</scroll-view>
			</view>
			
			
			
			<!-- 日历/月 -->
			<u-calendar v-model="showCalender" @change="chooseDay" :safe-area-inset-bottom="true"></u-calendar>
			<!-- 日历/自定义 -->
			<u-calendar v-model="show" mode="range" @change="chooseDayRange" :safe-area-inset-bottom="true"></u-calendar>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo();
			this.day = this.http.getToday();
			this.start = this.http.getToday();
			this.end = this.http.getToday();
		},
		data() {
			return {
				//分段器
				current:true,
				//月
				day:'',
				showCalender:false,
				//自定义
				show:false,
				start:'',
				end:'',
				
				list:[],
				page:1,
				last_page:1
			}
		},
		methods: {
			getInfo(){
				let data = '';
				if(!this.current){
					data = {
						branch_id:uni.getStorageSync('branch_id'),
						page:this.page
					}
				}else{
					data = {
						branch_id:uni.getStorageSync('branch_id'),
						start_at:this.start,
						end_at:this.end,
						page:this.page
					}
				}
				this.http.get('Manager/projectRank',data).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.staff_data;
							this.last_page = res.data.last_page;
						}else{
							res.data.staff_data.forEach(v=>{
								this.list.push(v)
							})
						}
					}
				})
			},
			//分段器
			changeSub(){
				this.current = !this.current;
			},
			loadMore(){
				if(this.page >= this.last_page) return ;
				this.page = ++ this.page;
				setTimeout(() => {
					this.getInfo();
				}, 50)
			},
			clearData(){
				this.page = 1;
				this.last_page = 1;
				this.list = [];
				this.getInfo();
			},
			chooseDay(e){
				this.clearData();
			},
			chooseDayRange(e){
				console.log(e);
				this.start = e.startDate;
				this.end = e.endDate;
				this.clearData();
			}
		}
	}
</script>

<style scoped lang="scss">
	.bg{
		background-image: url(../../../static/6038f09c2fcce@2x.png);
		background-size: 100% 100%;
		width: 100vw;
	}
	.subsection{
		border: 1rpx solid #FFFFFF;
		border-radius: 8rpx;
		font-size: 24rpx;
		.selected{
			background-color: #FFFFFF;
			color: #0F58FB;
			padding: 10rpx 20rpx;
		}
		.nomal{
			background-color: rgba(0, 0, 0, 0.1);
			color: #FFFFFF;
			padding: 10rpx 20rpx;
		}
	}
	.card{
		padding: 24rpx 27rpx;
		margin: 28rpx 65rpx 48rpx 58rpx;
		border-radius: 30rpx;
		height: 27rem;
	}
</style>
