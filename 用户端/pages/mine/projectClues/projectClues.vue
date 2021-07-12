<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<!-- 当list为空时 -->
			<view class="u-flex u-row-center" style="margin: 139rpx 192rpx;" v-if="list.length === 0">
				<u-image width="365" height="365" src="@/static/mine/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<block v-for="(item,index) in list" :key="index" >
				<u-card :title="item.title" title-size="24" title-color="#666666"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :border="false"
				 @click="toDetail()">
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
						<view @tap.stop="openModal(item.id)">
							<u-image src="@/static/mine/shanchu@2x.png" width="36" height="36" :fade="false" v-if="current == 3&&item.show_del_button" ></u-image>
						</view>
					</view>
					<view slot="foot">
						<view v-if="current == 3">
							<view class="u-font-26" style="color: #FE5E10;">否决原因：</view>
							<view class="u-font-26 u-m-t-20" style="color: #666666;">{{item.refused_reason}}</view>
						</view>
						<view class="u-flex u-row-between" v-else>
							<view class="u-flex u-font-24" style="color: #666666;">合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="item.thumb"/>李维</view>
							<u-button type="primary" size="mini" style="margin-right: 0;">修改线索</u-button>
						</view>
					</view>
				</u-card>
			</block>
		</view>
		
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" v-if="list.length != 0">
			<u-loadmore :status="status"/>
		</view>
		
		<u-modal v-model="deletModal" content="是否删除该条线索" :async-close="true" @confirm="delProject"
		 :show-cancel-button="true" :show-title="false" :content-style="{margin: '30rpx 0'}" width="500"></u-modal>
		
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="546" height="478">
			<view class="u-p-l-60 u-p-r-60 u-p-b-30 u-p-t-30 u-flex" style="flex-direction: column;">
				<view class="u-font-34 text-bold" style="color: #0F58FB;">恭喜您!</view>
				<view class="u-font-30 text-gray u-m-b-10">成为{{project_name}}项目信息员</view>
				<u-image src="@/static/successicon@2x.png" width="220" height="191"></u-image>
				<u-button class="u-m-t-50" style="width: 100%;" size="medium" type="primary" @click="showModal = false">我知道了</u-button>
			</view>
		</u-popup>
		
		<navigator open-type="navigate" url="/pages/mine/projectClues/createNew/createNew" hover-class="none" class="u-flex cNew round u-p-22">
			<view class="u-flex-1">新增</view>
			<view class="u-flex-1">线索</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.projectLists();
		},
		onBackPress() {
			this.clearData();
		},
		onReachBottom() {
			if(this.page >= this.last_page) return ;
			this.status = 'loading';
			this.page = ++ this.page;
			setTimeout(() => {
				this.projectLists();
			}, 50)
		},
		data() {
			return {
				//-1=>全部(或不传),2=>跟进中,3=>已成交,5=>未通过,
				tabList: [{
					name: '全部',
					value:-1
				}, {
					name: '跟进中',
					value:2
				}, {
					name: '已成交',
					value:3
				},{
					name: '未通过',
					value: 5
				}],
				current: 0,
				page:1,
				last_page:1,
				list:[],
				//删除哪一个线索
				whichone:'',
				deletModal:false,
				
				project_name:'',
				showModal:false,
				
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
			projectLists(){
				this.http.get('project/projectLists',{
					status:this.tabList[this.current].value,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.pages.project_data;
							this.last_page = res.data.pages.last_page;
							this.showModal = res.data.show_modal.is_show;
						}else{
							res.data.pages.project_data.forEach(v=>{
								this.list.push(v)
							})
						}
						
						this.project_name = res.data.show_modal.project_name;
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			clearData(){
				this.page = 1;
				this.list = [];
				this.status = 'loading';
				this.projectLists();
			},
			change(index) {
				console.log(index);
				this.current = index;
				this.clearData();
			},
			//删除
			delProject(){
				this.showModal = false;
				this.http.post('project/editProject',{
					project_id:this.whichone
				}).then(res=>{
					this.$u.toast(res.msg);
					if(res.code == 1000){
						setTimeout(()=>{
							this.clearData();
						},1500)
					}
				})
			},
			toDetail(){
				uni.navigateTo({url: 'detail/detail'});
			},
			openModal(id){
				this.showModal = true;
				this.whichone = id;
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
	.cNew{
		background: -webkit-linear-gradient(top,#1C95FA,#0F58FB);
		box-shadow: 0 15px 30px 0 rgba(0,0,0,0.3);
		height: 112rpx;
		width: 112rpx;
		color: #FFFFFF;
		font-size: 24rpx;
		text-align: center;
		flex-direction: column;
		
		position: fixed;
		bottom: 80rpx;
		right: 38rpx;
		z-index: 9;
		
	}
</style>
