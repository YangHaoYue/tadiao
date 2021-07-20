<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<!-- 当list为空时 -->
			<view style="margin: 139rpx 192rpx;" v-if="list.length === 0">
				<u-image width="365" height="365" src="@/static/mine/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<block v-for="(item,index) in list" :key="index">
				<u-card :title="item.title" title-size="24" title-color="#666666"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :border="false"
				>
					<view class="u-flex u-col-top u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
						<view class="u-text-right">
							<view class="u-font-24 u-m-b-5" style="color: #999999;">月租金:<text style="color: #FE5E10;">¥{{item.month_rent}}/月</text></view>
							<view class="u-font-24 u-m-b-5" style="color: #999999;">进出场费:<text style="color: #FE5E10;">¥{{item.in_out_cost}}</text></view>
							<view class="u-font-24 u-m-b-5" style="color: #999999;">付款方式:<text style="color: #FE5E10;">{{item.type_pay_id}}</text></view>
						</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">合同协调人：
							<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src=" http.resourceUrl()+ item.handler_data.avatar"/>{{item.handler_data.name}}
						</view>
						<u-button class="u-m-r-0" type="primary" size="mini" @click="toDetail(item.order_id)">查看合同</u-button>
					</view>
				</u-card>
			</block>
		</view>
		
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" v-if="list.length != 0">
			<u-loadmore :status="status"/>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo();
		},
		data() {
			return {
				//0=>审核中(默认，可不传),1=>执行中,2=>历史项目
				tabList: [{
					name:'审核中',
					value:0
				},{
					name: '执行中项目',
					value:1
				}, {
					name: '历史项目',
					value:2
				}],
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
				this.http.get('Order/orderListsForUser',{
					status:this.tabList[this.current].value,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						res.data.order_data.map(v=>{
							this.list.push(this._formart(v))
						})
						console.log(res.data.order_data);
						console.log(this.list);
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			_formart(data){
				let subTitle = '已成交';
				let subTitleColor='#0F58FB';
				switch(data.status){
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
					title: '创建时间：'+data.created_at,
					subTitle: subTitle,//0=>审核中,1=>已通过,2=>审核被拒,3已结束
					subTitleColor:subTitleColor,
					project_name:data.project_name,
					month_rent:data.month_rent,
					in_out_cost:data.in_out_cost,
					project_id:data.project_id,
					order_id:data.order_id,
					show_edit_button:data.show_edit_button,
					show_pay_button:data.show_pay_button,
					show_fix_button:data.show_fix_button,
					show_contract_button:data.show_contract_button,
					show_resubmit_button:data.show_resubmit_button,
					handler_data:data.handler_data,
					cus_data:data.cus_data,
					type_pay_id:e.type_pay_id == 1?'季付':'月付'
				}
			},
			clearData(){
				this.page = 1;
				this.list = [];
				this.status = 'loading';
				this.getInfo();
			},
			change(index) {
				console.log(index);
				this.current = index;
				this.clearData();
			},
			toDetail(id){
				uni.navigateTo({url: 'detail/detail?order_id=' + id});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
