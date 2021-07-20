<template>
	<view>
		<view class="u-flex u-font-28 u-p-20" style="background-color: #F8F8F8;" @click="show = true">
			<view class="u-p-10 u-flex u-row-between bg-white">
				<view>{{start}}</view>
				<u-icon name="calendar" class="u-m-l-35" size="28" color="#999999"></u-icon>
			</view>
			<view class="u-m-l-10 u-m-r-10">-</view>
			<view class="u-p-10 u-flex u-row-between bg-white">
				<view>{{end}}</view>
				<u-icon name="calendar" class="u-m-l-35" size="28" color="#999999"></u-icon>
			</view>
		</view>
		<!-- 列表 -->
		<view>
			<block v-for="(item,index) in list" :key="index">
				<view class="u-flex u-row-between bg-white u-p-30 u-p-r-20 u-border-bottom">
					<view>
						<view class="u-font-28 text-black u-m-b-10">{{item.left_str}}</view>
						<view class="u-font-24" style="color: #999999;">{{item.created_at}}</view>
					</view>
					<view class="u-text-right">
						<view class="u-font-28 u-m-b-10" style="color: #FC5739;">{{item.right_str}}</view>
						<view class="u-font-24" style="color: #999999;">余额：¥{{item.balance}}</view>
					</view>
				</view>
			</block>
		</view>
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
		
		<!-- 日历 -->
		<u-calendar v-model="show" mode="range" @change="chooseDay" :safe-area-inset-bottom="true"></u-calendar>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.start = this.http.getToday();
			this.end = this.http.getToday();
			this.getInfo();
		},
		onReachBottom() {
			if(this.page >= this.last_page) return ;
			this.status = 'loading';
			this.page = ++ this.page;
			setTimeout(() => {
				this.getInfo();
			}, 50)
		},
		data() {
			return {
				show:false,
				start:'2021-7-1',
				end:'2021-7-10',
				
				list:[],
				page:1,
				last_page:1,
				
				/* 加载更多 */
				status: 'loading',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
			}
		},
		methods: {
			getInfo(){
				this.http.get('withdraw/getAmountLogs',{
					start_at:this.start,
					end_at:this.end,
					page:this.page
				}).then(res=>{
					if(this.list.length == 0){
						this.list = res.data.amount_log_data;
						this.last_page = res.data.last_page;
					}else{
						res.data.amount_log_data.forEach(v=>{
							this.list.push(v)
						})
					}
					
					if(this.page >= this.last_page) this.status = 'nomore';
					else this.status = 'loadmore';
				})
			},
			chooseDay(e){
				console.log(e);
				this.start = e.startDate;
				this.end = e.endDate;
				this.clearData()
			},
			clearData(){
				this.list = []
				this.page = 1;
				this.last_page = 1;
				this.status = 'loading'
				this.getInfo();
			}
		}
	}
</script>

<style>

</style>
