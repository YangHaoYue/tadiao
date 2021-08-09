<template>
	<view class="wrap">
		<view class="u-p-l-20 u-p-r-20 bg-white">
			<!-- 搜索 -->
			<u-sticky :enable="sticky" :h5-nav-height="0">
				<u-search class="u-p-10 u-m-b-20 bg-white" @click="toSearch" @custom="toSearch" placeholder="搜索关键字" input-align="center" :disabled="true" :action-style="{fontWeight:'bold'}"></u-search>
			</u-sticky>
		</view>
		<view class="u-p-20" style="padding-top: 0 !important;">
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
				<u-col span="6" class="u-m-b-20" v-for="(item,index) in list" :key="index" @click="setPhone(item)">
					<equipmentItem :item="item" :index="index"></equipmentItem>
				</u-col>
			</u-row>
			<!-- 加载更多 -->
			<view class="u-m-t-20 u-m-b-20" >
				<u-loadmore :status="status"/>
			</view>
			<!-- 客服电话 -->
			<u-action-sheet :list="phone" v-model="show" :tips="tips" :cancel-btn="true" @click="makePhoneCall"></u-action-sheet>
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
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		watch: {
			scrollTop(newValue, oldValue) {
				if(newValue>20){
					this.sticky = true
				}else{
					this.sticky = false
				}
			}
		},
		data() {
			return {
				scrollTop:0,
				sticky:false,
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
				
				//客服电话
				tips: {
					text: '联系人姓名',
					color: '#333333',
					fontSize: 28
				},
				phone: [{
					text: '19274874583',
					color: '#333333',
					fontSize: 28
				},{
					text: '呼叫客服',
					color: '#333333',
					fontSize: 28
				}],
				show: false
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
			},
			toSearch(){
				uni.navigateTo({url: 'search/search'});
			},
			setPhone(item){
				this.phone[0].text = item.media_tel_num;
				this.tips.text = item.media_name;
				this.show = true;
			},
			makePhoneCall(e){
				uni.makePhoneCall({
					phoneNumber:this.phone[0].text
				})
			}
		}
	}
</script>

<style>
	.wrap{
		background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA);
		min-height: 100vh;
	}
</style>
