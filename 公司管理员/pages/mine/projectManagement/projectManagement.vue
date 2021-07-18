<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<view class="u-flex u-p-l-20 u-p-r-20 u-p-t-20">
				<view class="idot" v-for="(item,i) in idotList" :class="idot == item.value?'selected':'nomal'" :key="i" @click="chooseIdot(item)">
					{{item.title}}
				</view>
			</view>
			<!-- 当list为空时 -->
			<view style="margin: 139rpx 192rpx;" v-if="list.length === 0">
				<u-image width="365" height="365" src="../../../static/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<block v-for="(item,index) in list" :key="index">
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true" @click="toDetail(item.id)">
					<view class="u-flex u-col-top u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
						<view class="u-text-right">
							<view class="u-font-24 u-m-b-5" style="color: #999999;">月租金:<text style="color: #FE5E10;">¥{{item.month_rent}}/月</text></view>
							<view class="u-font-24 u-m-b-5" style="color: #999999;">进出场费:<text style="color: #FE5E10;">¥{{item.in_out_cost}}</text></view>
							<view class="u-font-24 u-m-b-5" style="color: #999999;">付款方式:<text style="color: #FE5E10;">月付</text></view>
						</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">
							合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="http.resourceUrl()+item.handler_data.avatar"/>{{item.handler_data.name}}
						</view>
						<view class="u-flex" v-if="idot != 1">
							<u-button class="u-m-r-10" type="primary" :plain="true" size="mini" v-if="current === 1" @tap.stop="toAddRecord(item.id)">增加付款时间</u-button>
							<u-button class="u-m-r-0" type="primary" size="mini" v-if="current === 1" @tap.stop="toMaintenance(item.id)">创建维保</u-button>
						</view>
					</view>
				</u-card>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
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
				tabList: [{
					name: '公司项目',
					value:0
				}, {
					name: '我的项目',
					value:1
				}],
				current: 0,
				idot:0,
				idotList:[{title:'执行中',value:0},{title:'历史',value:1}],
				
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
				this.http.get('Order/orderListsForMng',{
					type:this.tabList[this.current].value,
					status:this.idot,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.pages.order_data.map(v=>{
								return this._format(v)
							});
							this.last_page = res.data.pages.last_page;
						}else{
							res.data.pages.order_data.forEach(v=>{
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
					id:e.id,
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
				uni.navigateTo({url: 'detail/detail?order_id=' + id});
			},
			toAddRecord(id){
				uni.navigateTo({url: 'addRecord/addRecord?order_id=' + id});
			},
			//创建维保
			toMaintenance(id){
				uni.navigateTo({url: 'createMaintenance/createMaintenance?order_id=' + id});
			},
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
	.idot{
		padding: 8rpx 16rpx;
		border: 1rpx solid #0F58FB;
		border-radius: 8rpx;
		margin: 10rpx ;
	}
	.selected{
		color: #FFFFFF;
		background-color: #0F58FB;
	}
	.nomal{
		color: #0F58FB;
		background-color: #F8F8F8;
	}
</style>
