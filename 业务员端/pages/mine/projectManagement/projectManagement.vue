<template>
	<view>
		<!-- 搜索 -->
		<u-search class="u-p-20 bg-white" placeholder="搜索关键字" input-align="center" :focus="true" v-model="keyword" @custom="clearData"></u-search>
		<!-- 日期 -->
		<view class="u-flex u-font-28 u-row-center bg-white" @click="show = true">
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
		
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<!-- 当list为空时 -->
			<view style="margin: 139rpx 192rpx;" v-if="list.length === 0">
				<u-image width="365" height="365" src="../../../static/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<block v-for="(item,index) in list" :key="index">
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true" @click="toDetail(item.order_id)">
					<view class="u-flex u-col-top u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
						<view class="u-text-right">
							<view class="u-font-24 u-m-b-5" style="color: #999999;">月租金:<text style="color: #FE5E10;">¥{{item.month_rent}}/月</text></view>
							<view class="u-font-24 u-m-b-5" style="color: #999999;">进出场费:<text style="color: #FE5E10;">¥{{item.in_out_cost}}</text></view>
							<view class="u-font-24 u-m-b-5" style="color: #999999;">付款方式:<text style="color: #FE5E10;">{{item.type_pay_str}}</text></view>
						</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">
							合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="http.resourceUrl()+item.handler_data.avatar"/>{{item.handler_data.name}}
						</view>
						<u-button class="u-m-r-0" type="primary" size="mini" v-if="current === 1" @click="toAddRecord(item.order_id)">增加付款时间</u-button>
					</view>
				</u-card>
			</block>
		</view>
		
		
		<!-- 日历 -->
		<u-calendar v-model="show" mode="range" @change="chooseDayRange" :safe-area-inset-bottom="true"></u-calendar>
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
				//搜索关键词
				keyword:'',
				//日历
				show:false,
				start:'2020-11-22',
				end:'2020-11-22',
				tabList: [
					{name: '审核中',value:0},
					{name: '执行中项目',value:1}, 
					{name: '历史项目',value:2},
				],
				current: 0,
				
				
				page:1,
				last_page:1,
				list:[],
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
				this.http.get('Order/orderListsForStaff',{
					keyword:this.keyword,
					start_at:this.start,
					end_at:this.end,
					status:this.tabList[this.current].value
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.order_data.map(v=>{
								return this._format(v)
							});
							this.last_page = res.data.last_page;
						}else{
							res.data.order_data.forEach(v=>{
								this.list.push(this._format(v))
							})
						}
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			_format(e){
				//0=>待审核,1=>已通过,2=>已拒绝,3已结束
				let subTitle = '';
				let subTitleColor = '';
				switch(e.status){
					case 0:
						subTitle = '待审核';
						subTitleColor = '#105CFB';
						break;
					case 1:
						subTitle = '已通过';
						subTitleColor = '#2DA016';
						break;
					case 2:
						subTitle = '已拒绝';
						subTitleColor = '#FE5E10';
						break;
					case 3:
						subTitle = '已结束';
						subTitleColor = '#FE5E10';
						break;
				}
				return{
					order_id:e.order_id,
					subTitle:subTitle,
					subTitleColor:subTitleColor,
					project_name:e.project_name,
					title:"创建时间：" + e.created_at,
					address:e.address,
					provider_data:e.provider_data,
					handler_data:e.handler_data,
					show_follow_button:e.show_follow_button,
					show_edit_button:e.show_edit_button,
					show_order_button:e.show_order_button,
					lock_arr:e.lock_arr,
					type_pay_str:e.type_pay_str,
					in_out_cost:e.in_out_cost
				}
			},
			chooseDayRange(e){
				console.log(e);
				this.start = e.startDate;
				this.end = e.endDate;
				this.clearData();
			},
			change(index) {
				this.current = index;
				this.clearData();
			},
			clearData(){
				this.page = 1;
				this.list = [];
				this.status = "loading";
				this.getInfo();
			},
			toDetail(id){
				console.log(id);
				uni.navigateTo({url: 'detail/detail?order_id=' + id});
			},
			toAddRecord(id){
				uni.navigateTo({url: 'addRecord/addRecord?order_id=' + id});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
