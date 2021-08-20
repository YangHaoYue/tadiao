<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<!-- 当list为空时 -->
			<view style="margin: 139rpx 192rpx;" v-if="list.length === 0">
				<u-image width="365" height="365" src="../../../static/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<block v-for="(item,index) in list" :key="index">
				<!-- 我的线索 -->
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true"
				 @click="toDetail(item.id)" v-if="current == 0">
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">
							合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="http.resourceUrl()+item.handler_data.avatar"/>{{item.handler_data.name}}
						</view>
						<view class="u-flex">
							<u-button type="primary" size="mini" :plain="true" class="u-m-r-10" @click="toRelation(item.id)" v-if="!item.lock_arr.has_lock&&item.lock_arr.show_lock_button">关联塔吊</u-button>
							<u-button type="primary" size="mini" :plain="true" class="u-m-r-10" @click="toAssociated(item.id)" v-if="item.lock_arr.has_lock&&item.lock_arr.show_lock_button">已关联塔吊</u-button>
							<u-button type="primary" size="mini" style="margin-right: 0;" @click="toCreate(item.id)" v-if="item.show_order_button">创建项目</u-button>
							<u-button type="primary" size="mini" style="margin-right: 0;" @click="toEdit(item.id)" v-if="item.show_edit_button">修改线索</u-button>
							<u-button type="primary" size="mini" style="margin-right: 0;" @click="toEdit(item.id)" v-if="item.show_re_sub_button">重新提交</u-button>
						</view>
					</view>
				</u-card>
				<!-- 公海池 -->
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 @click="toDetail(item.id)" v-else-if="current == 1">
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<u-icon name="map" size="33" :label="item.address" label-color="#666666" label-size="24"></u-icon>
						<!-- <u-button type="primary" size="mini" style="margin-right: 0;" v-if="item.show_apply_button" @click="toApply">申请认领</u-button> -->
					</view>
				</u-card>
				<!-- 公司线索/别人的线索 -->
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true"
				 @click="toDetail(item.id)" v-else>
				 <view slot="head" class="u-flex u-font-24" style="color: #666666;">合同协调人：
				 <u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="http.resourceUrl()+item.handler_data.avatar"/>{{item.handler_data.name}}</view>
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<u-icon name="map" size="33" :label="item.address" label-color="#666666" label-size="24"></u-icon>
					</view>
				</u-card>
			</block>
		</view>
		
		<!-- 加载更多 -->
		<view class=" u-m-b-20" v-if="list.length != 0">
			<u-loadmore :status="status"/>
		</view>
		
		<u-modal v-model="deletModal" content="是否删除该条线索" :async-close="true" @confirm="delProject"
		 :show-cancel-button="true" :show-title="false" :content-style="{margin: '30rpx 0'}" width="500"></u-modal>
		
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="546" height="478">
			<view class="u-p-l-60 u-p-r-60 u-p-b-30 u-p-t-30 u-flex" style="flex-direction: column;">
				<view class="u-font-34 text-bold" style="color: #0F58FB;">恭喜您!</view>
				<view class="u-font-30 text-gray u-m-b-10">成为{{project_name}}项目合同协调人</view>
				<u-image src="@/static/successicon@2x.png" width="220" height="191"></u-image>
				<u-button class="u-m-t-50" style="width: 100%;" size="medium" type="primary" @click="showModal = false">我知道了</u-button>
			</view>
		</u-popup>
		
		<navigator open-type="navigate" url="createNew/createNew" hover-class="none" class="u-flex cNew round u-p-22">
			<view class="u-flex-1">新增</view>
			<view class="u-flex-1">线索</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		onShow() {
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
				current: 1,
				tabList: [{
					name: '我的线索',
					value:0
				},{
					name: '公司线索',
					value:1
				}, {
					name: '公海池',
					value:2
				}, {
					name: '别人的线索',
					value:3
				}],
				
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
				this.http.get('project/projectListsForMng',{
					branch_id:uni.getStorageSync('branch_id'),
					type:this.tabList[this.current].value,//0=>我的(默认，可不传),1=>公司线索,2=>公海池,3=>别人的线索
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.pages.project_data.map(v=>{
								return this._format(v)
							});
							this.last_page = res.data.pages.last_page;
							this.showModal = res.data.show_modal.is_show;
						}else{
							res.data.pages.project_data.forEach(v=>{
								this.list.push(this._format(v))
							})
						}
						this.project_name = res.data.show_modal.project_name;
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			_format(e){
				//0=>审核中,1=>待跟进,2=>跟进中,5=>未通过,6=>已结束，10=>空闲中,11=>本人申请中,12本人申请被拒,13=>已被预约
				let data = e;
				let subTitle = '';
				let subTitleColor = '';
				switch(e.status){
					case 0:
						subTitle = '审核中';
						subTitleColor = '#105CFB';
						break;
					case 1:
						subTitle = '待跟进';
						subTitleColor = '#FE5E10';
						break;
					case 2:
						subTitle = '跟进中';
						subTitleColor = '#2DA016';
						break;
					case 5:
						subTitle = '已拒绝';
						subTitleColor = '#FE5E10';
						break;
					case 6:
						subTitle = '已结束';
						subTitleColor = '#FE5E10';
						break;
					case 10:
						subTitle = '空闲中';
						subTitleColor = '#105CFB';
						break;
					case 11:
						subTitle = '本人申请中';
						subTitleColor = '#2DA016';
						break;
					case 12:
						subTitle = '本人申请被拒';
						subTitleColor = '#FE5E10';
						break;
					case 13:
						subTitle = '已被预约';
						subTitleColor = '#FE5E10';
						break;
				}
				this.$set(data,'subTitle',subTitle)
				this.$set(data,'subTitleColor',subTitleColor)
				this.$set(data,'title',"创建时间：" + e.created_at)
				return data
			},
			clearData(){
				this.page = 1;
				this.list = [];
				this.status = 'loading';
				this.projectLists();
			},
			change(index) {
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
			toDetail(id){
				uni.navigateTo({url: 'detail/detail?project_id=' + id});
			},
			//关联塔吊
			toRelation(id){
				uni.navigateTo({url: 'relation/relation?project_id='+id});
			},
			//已关联的塔吊
			toAssociated(id){
				uni.navigateTo({url: 'relation/associated?project_id='+id});
			},
			//申请认领
			toApply(id){
				this.http.post('project/projectLockTower',{
					project_id:id
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							this.clearData();
						},1500)
					}
				})
			},
			//修改线索
			toEdit(id){
				uni.navigateTo({url: 'createNew/createNew?project_id=' + id});
			},
			/* 新建项目 */
			toCreate(id){
				uni.navigateTo({url: 'newProject/newProject?project_id=' + id});
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
		bottom: 160rpx;
		right: 38rpx;
		z-index: 9;
		
	}
</style>
