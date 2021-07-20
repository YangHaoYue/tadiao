<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<u-card :title="'创建时间：'+item.created_at" title-size="24" title-color="#666666" :border="false" @click="toDetail()">
				<view class="" slot="body">
					<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
					<view class="u-flex u-row-right">
						<view class="u-font-24" style="color: #999999;">项目金额:<text style="color: #FE5E10;">￥{{item.amount}}</text></view>
					</view>
				</view>
				<view class="u-flex u-row-between" slot="foot">
					<view class="u-flex u-font-24" style="color: #666666;">合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="http.resourceUrl() + item.handle_data.avatar"/>{{item.handle_data.name}}</view>
				</view>
			</u-card>
		</block>
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.staff_id = e.staff_id
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
				staff_id:'',
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
				this.http.get('Manager/staffOrderList',{
					staff_id:this.staff_id,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.order_data
							this.last_page = res.data.last_page;
						}else{
							res.data.order_data.forEach(v=>{
								this.list.push(v)
							})
						}
						console.log(this.list);
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
			toDetail(){
				uni.navigateTo({url: 'detail/detail'});
			},
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
