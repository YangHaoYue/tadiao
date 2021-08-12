<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="card bg-white" @tap="toBranch(item.id)">
				<view class="u-flex u-row-between u-border-bottom" style="padding: 20rpx 20rpx 13rpx 30rpx;">
					<view class="u-flex">
						<view class="u-font-32 text-bold text-black u-m-r-10">{{item.branch_name}}</view>
						<u-image src="@/static/setting.png" height="33rpx" width="34rpx" @tap.stop="toSetting(item.id)"></u-image>
					</view>
					<view class="u-flex u-row-right" style="color: #999999;"> 
						<u-icon name="arrow-right" size="28" color="#999999"></u-icon>
					</view>
				</view>
				<view class="u-flex u-row-around" style="padding: 25rpx 0;">
					<navigator open-type="navigate" :url="'staffDetail/projectDetail?staff_id='+item.id" hover-class="none"
					 class="u-flex u-row-center u-flex-1" style="flex-direction: column;">
						<view class="u-font-36 text-bold u-m-b-10" style="color: #333333;">{{item.staff_count}}</view>
						<view class="u-font-26" style="color: #999999;">员工</view>
					</navigator>
					<navigator open-type="navigate" :url="'staffDetail/clueDetail?staff_id='+item.id" hover-class="none"
					 class="u-flex u-row-center u-flex-1" style="flex-direction: column;">
						<view class="u-font-36 text-bold u-m-b-10" style="color: #333333;">{{item.project_count}}</view>
						<view class="u-font-26" style="color: #999999;">线索数</view>
					</navigator>
					<view class="u-flex u-row-center u-flex-1" style="flex-direction: column;">
						<view class="u-font-36 text-bold u-m-b-10" style="color: #333333;">{{item.order_count}}</view>
						<view class="u-font-26" style="color: #999999;">合同数</view>
					</view>
					<view class="u-flex u-row-center u-flex-1" style="flex-direction: column;">
						<view class="u-font-36 text-bold u-m-b-10" style="color: #333333;">￥{{item.order_amount}}</view>
						<view class="u-font-26" style="color: #999999;">合同金额</view>
					</view>
				</view>
			</view>
		</block>
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			/* this.getInfo(); */
		},
		onShow() {
			uni.removeStorage({
				key:'branch_id',
				success(res) {
					console.log(res);
				}
			})
			this.claerData();
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
				this.http.get('Manager/branches',{
					// branch_id:uni.getStorageSync('branch_id'),
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.branch_data;
							this.last_page = res.data.last_page;
						}else{
							res.data.branch_data.forEach(v=>{
								this.list.push(v)
							})
						}
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			claerData(){
				this.page = 1;
				this.last_page = 1;
				this.list = [];
				this.status = "loading"
				this.getInfo();
			},
			toSetting(id){
				uni.navigateTo({url: '../createC/createC?branch_id=' + id});
			},
			//去往分公司
			toBranch(id){
				uni.setStorageSync('branch_id',id)
				uni.navigateTo({
					url:'../../mine/mine'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #F8F8F8;
	}
	.card{
		border-radius: 10rpx;
		margin: 20rpx 25rpx;
	}
</style>
