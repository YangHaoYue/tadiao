<template>
	<view>
		<view class="u-p-30">
			<block v-for="(item,index) in list" :key="index">
				<view class="bg-white u-p-30 u-m-b-20" style="border-radius: 20rpx;">
					<view class="">
						<view class="u-flex u-row-between u-font-28 u-m-t-10">
							<view class="text-black">{{item.order_pays_name}}</view>
							<view class="text-black" style="color: #FE5E10;">￥{{item.amount}}</view>
						</view>
						<view class="u-font-28 u-m-t-10">所属项目：{{item.project_name}}</view>
						<view class="u-flex u-row-between u-font-28 u-m-t-10">
							<view class="u-order-desc text-gray u-m-t-10 u-font-24">应付款时间:{{item.start_at}}</view>
							<u-button style="margin-right: 0;" type="primary" size="mini" @click="Collection(item.id)">修改</u-button>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="u-flex u-row-center u-col-center" style="height: 90vh;flex-direction: column;" v-if="list.length == 0">
			<view class="u-font-30 u-m-t-30 text-gray u-text-center u-m-l-26">您还没有任何记录哦</view>
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
			this.page = ++ this.page;
			setTimeout(() => {
				this.getInfo();
			}, 50)
		},
		data() {
			return {
				page:1,
				last_page:1,
				list:[]
			}
		},
		methods: {
			getInfo(){
				this.http.get('UserCenter/orderPayLists',{
					page:this.page
				}).then((res)=>{
					if(res.code == 1000){
						if(this.list.length==0){
							this.list=res.data.order_pays_data;
							this.last_page=res.data.last_page;
						}else{
							res.data.data.map(v=>{
								this.list.push(v)
							})
						}
					}
				})
			},
			Collection(id){
				uni.navigateTo({url: `/pages/mine/projectManagement/addRecord/addRecord?order_id=${id}&isEdit=1`});
			}
		}
	}
</script>

<style>
	page{
		background-color: #F7F7F7 !important;
	}
	.card{
		background-color: #FFFFFF;
		width: 690rpx;
		height: 126rpx;
		border-radius: 20rpx;
		margin: 20rpx 30rpx;
		padding: 30rpx;
	}
</style>
