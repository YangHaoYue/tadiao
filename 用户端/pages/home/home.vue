<template>
	<view class="u-p-20 wrap">
		<!-- 搜索 -->
		<navigator open-type="navigate" hover-class="none" url="/pages/home/search/search">
			<u-search class="u-m-10 u-m-b-20" placeholder="搜索关键字" input-align="center" :disabled="true" :action-style="{fontWeight:'bold'}"></u-search>
		</navigator>
		<!-- 轮播图 -->
		<u-swiper class="u-p-10" :list="imgList" height="269"></u-swiper>
		<!-- 塔吊列表 -->
		<view class="u-p-10 u-p-t-13 u-flex u-row-between">
			<view class="u-font-34 text-bold">塔吊设备</view>
			<navigator open-type="navigate" url="/pages/home/equipmentList/equipmentList">
				<view class="u-font-26" style="color: #999999;">查看更多<u-icon name="arrow-right" size="26"></u-icon></view>
			</navigator>
		</view>
		<u-row class="u-m-t-30" gutter="20" justify="space-between">
			<u-col span="6" class="u-m-b-20" v-for="(item,index) in list" :key="index">
				<equipmentItem :item="item" :index="index"></equipmentItem>
			</u-col>
		</u-row>
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo()
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
				imgList: [],
				
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
				this.http.get('Index/index',{
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.towers.tower_data;
							this.last_page = res.data.towers.last_page;
						}else{
							res.data.towers.tower_data.forEach(v=>{
								this.list.push(v)
							})
						}
						
						this.imgList = res.data.banners.map(v=>{
							return {
								image:this.http.resourceUrl() + v.img
							}
						})
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			}
		}
	}
</script>

<style>
	.wrap{
		background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA);
	}
</style>
