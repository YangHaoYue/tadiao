<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<!-- 型号 -->
			<scroll-view scroll-x @scrolltolower="loadmore" style="height: 100rpx;" v-if="current == 1">
				<view class="u-flex u-p-l-20 u-p-r-20 u-p-t-20">
					<view class="idot" v-for="(item,i) in idotList" :class="idot == item.value?'selected':'nomal'" :key="i" @click="chooseIdot(item)">
						{{item.title}}
					</view>
				</view>
			</scroll-view>
			<!-- 当list为空时 -->
			<view style="margin: 139rpx 192rpx;" v-if="tabList[current].list.length === 0">
				<u-image width="365" height="365" src="../../../static/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<block v-for="(item,index) in tabList[current].list" :key="index">
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true"
				  @click="toDetail(item.id)" v-if="current == 0">
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">
							合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="http.resourceUrl()+item.handle_data.avatar"/>{{item.handle_data.name}}
						</view>
					</view>
				</u-card>
				
				<view class="u-m-25 u-p-15 bg-white" @click="toDetail(item.order_id,item.id)" v-else>
					<view class="u-flex">
						<u-image :src="http.resourceUrl() + item.tower_img" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
						<view class="u-p-l-10 u-p-r-12">
							<view class="u-font-26 text-bold text-black">{{item.tower_name}}({{item.tower_type}})</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{item.number}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">负责人:{{item.media_name}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">联系方式:{{item.media_tel_num}}</view>
							<view class="u-font-22 u-p-l-6 u-line-1" style="color: #666666;line-height: 1.5;">地区:{{item.address_info}}</view>
						</view>
					</view>
					<view class="u-border-top u-p-t-14 u-m-t-15 u-font-24" style="color: #666666;">下次维保时间:{{item.next_care_at}}</view>
				</view>
			</block>
			<!-- 加载更多 -->
			<view class="u-m-t-20 u-m-b-20" v-if="tabList[current].list.length >0">
				<u-loadmore :status="status"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getOrdersForScreen();
			this.getTypes();
			this.getTowersForMng();
		},
		onReachBottom() {
			if(this.tabList[this.current].page >= this.tabList[this.current].last_page) return ;
			this.status = 'loading';
			this.tabList[this.current].page = ++ this.tabList[this.current].page;
			setTimeout(() => {
				if(this.current == 0){
					this.getOrdersForScreen();
				}else{
					this.getTowersForMng();
				}
			}, 50)
		},
		data() {
			return {
				current: 0,
				tabList: [{
					name: '按项目',
					list:[],
					page:1,
					last_page:1
				}, {
					name: '按型号',
					list:[],
					page:1,
					last_page:1
				}],
				
				/* 加载更多 */
				status: 'loading',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				
				idot:0,
				idot_page:1,
				idot_last_page:1,
				idotList:[{title:'全部',value:0}]
			}
		},
		methods: {
			getOrdersForScreen(){
				this.http.get('FixCare/getOrdersForScreen',{
					page:this.tabList[0].page
				}).then(res=>{
					if(res.code == 1000){
						if(this.tabList[0].list.length == 0){
							this.tabList[0].list = res.data.order_data.map(v=>{
								return this._format(v)
							})
							this.tabList[0].last_page = res.data.last_page;
						}else{
							res.data.order_data.forEach(v=>{
								this.tabList[0].list.push(this._format(v))
							})
						}
						console.log(this.tabList[0].list);
						if(this.tabList[0].page >= this.tabList[0].last_page) this.status = 'nomore';
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
						subTitle = '进行中';
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
					id:e.order_id,
					subTitle:subTitle,
					subTitleColor:subTitleColor,
					project_name:e.project_name,
					title:"创建时间：" + e.created_at,
					handle_data:e.handle_data
				}
			},
			getTowersForMng(){
				this.http.get('FixCare/getTowersForMng',{
					order_id:this.order_id,
					type_id:this.idot,
					page:this.tabList[1].page
				}).then(res=>{
					if(res.code == 1000){
						if(this.tabList[1].list.length == 0){
							this.tabList[1].list = res.data.tower_data;
							this.tabList[1].last_page = res.data.last_page;
						}else{
							res.data.tower_data.forEach(v=>{
								this.tabList[1].list.push(v)
							})
						}
						
						if(this.tabList[1].page >= this.tabList[0].last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			//获取机型
			getTypes(){
				this.http.get('Index/getTypes',{
					page:this.idot_page
				},true).then(res=>{
					if(res.code == 1000){
						res.data.type_data.forEach(v=>{
							this.idotList.push({
								title:v.name,
								value:v.id
							})
						})
						this.typeLast_page = res.data.last_page;
					}
				})
			},
			loadmore(){
				if(this.idot_page >= this.idot_last_page) return ;
				this.status = 'loading';
				this.idot_page = ++ this.idot_page;
				setTimeout(() => {
					this.getTypes();
				}, 50)
			},
			change(index) {
				this.current = index;
			},
			clearData(){
				this.status = "loading";
				this.tabList[this.current].page = 1;
				this.tabList[this.current].last_page = 1;
				this.tabList[this.current].list = [];
				if(this.current == 0){
					this.getOrdersForScreen();
				}else{
					this.getTowersForMng();
				}
			},
			toDetail(order_id,id){
				if(this.current == 0){
					uni.navigateTo({url: 'projectDetail/projectDetail?order_id=' + order_id});
				}else{
					uni.navigateTo({url: 'detail/detail?order_id='+order_id+'&tower_id='+id});
				}
			},
			chooseIdot(item){
				this.idot = item.value;
				this.clearData();
			}
		}
	}
</script>

<style lang="scss" scoped>
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
	.idot{
		padding: 8rpx 16rpx;
		border: 1rpx solid #0F58FB;
		border-radius: 8rpx;
		margin: 10rpx ;
		min-width: 120rpx;
		text-align: center;
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
