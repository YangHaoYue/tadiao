<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="u-m-25 u-p-15 bg-white" @click="todetail(item.id)">
				<view class="u-flex">
					<u-image :src="http.resourceUrl() + item.tower_img" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
					<view class="u-p-l-10 u-p-r-12">
						<view class="u-font-26 text-bold text-black">{{item.tower_name}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{item.number}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">负责人:{{item.media_name}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">联系方式:{{item.media_tel_num}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">地区:{{item.address_arr.province}} {{item.address_arr.city}} {{item.address_arr.district}}</view>
					</view>
				</view>
				<view class="u-border-top u-p-t-14 u-m-t-15 u-font-24" style="color: #666666;">下次维保时间:{{item.next_care_at}}</view>
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
		onLoad(e) {
			this.order_id = e.order_id
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
				order_id:'',
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
				this.http.get('FixCare/getTowersForMng',{
					order_id:this.order_id,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.tower_data;
							this.last_page = res.data.last_page;
						}else{
							res.data.tower_data.forEach(v=>{
								this.list.push(v)
							})
						}
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			todetail(id){
				uni.navigateTo({url: '../detail/detail?order_id='+this.order_id+'&tower_id='+id});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
