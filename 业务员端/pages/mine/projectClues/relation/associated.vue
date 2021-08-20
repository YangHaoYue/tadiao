<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="u-m-25 bg-white" style="padding: 37rpx 0 10rpx 22rpx;border-radius: 10rpx;">
				<view class="u-flex">
					<u-image :src="http.resourceUrl()+item.tower_img" width="153" height="153" mode="scaleToFill" :fade="false"></u-image>
					<view class="u-m-l-12">
						<view class="u-flex u-row-between">
							<view class="u-font-26 text-bold u-m-b-20">{{item.tower_name}}</view>
							<u-button v-if="item.show_del_btn" type="primary" size="mini" @click="unConnect(item.id)">解除关联</u-button>
						</view>
						<view class="text-gray u-font-22">设备出厂编号:{{item.serial_num}}</view>
						<view class="text-gray u-font-22">品牌:{{item.brand_name}}</view>
						<view class="text-gray u-font-22">年限:{{item.age_limit}}</view>
					</view>
				</view>
				<view class="text-gray u-font-26 u-m-t-20">关联失效时间:{{item.expired_at}}</view>
			</view>
		</block>
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
		<u-gap height="40" bg-color="#F8F8F8"></u-gap>
		<u-button class="u-m-30" type="primary" @click="toConnect" v-if="show_btn">继续关联</u-button>
		
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.project_id = e.project_id;
			this.show_btn = e.show_btn == 1
		},
		onShow() {
			this.clearData()
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
				project_id:'',
				show_btn:false,
				
				
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
				/* 
				 {
				 	img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
				 	name:'QTZ80(5512-6)',
				 	code:'WE2445',
				 	brand:'虎马',
				 	years:'三年',
				 	invalid:'2021-09-01'
				 }
				 */
			}
		},
		methods: {
			getInfo(){
				this.http.get('project/getLockedTowers',{
					project_id:this.project_id,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.lock_data;
							this.last_page = res.data.last_page;
						}else{
							res.data.lock_data.forEach(v=>{
								this.list.push(v)
							})
						}
						
						this.shows_lock_button = res.data.shows_lock_button;
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			clearData(){
				this.page = 1;
				this.list = [];
				this.status = "loading"
				this.getInfo();
			},
			toConnect(id){
				uni.redirectTo({url: 'relation?project_id=' + this.project_id});
			},
			//解除关联
			unConnect(id){
				this.http.post('project/cancelLock',{
					conn_id:id
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							this.clearData()
						},1500)
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F8F8F8;
	}
</style>
