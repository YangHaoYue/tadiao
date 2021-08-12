<template>
	<view class="wrap">
		<!-- 搜索 -->
		<u-search class="u-p-30 u-p-t-20 bg-white u-border-bottom u-m-b-20" style="padding-bottom: 0 !important;" bg-color="#ffffff" placeholder="请输入用户名" 
		input-align="left" :focus="true" v-model="keyward" :action-style="{fontWeight:'bold'}" @custom="claerData" @search="claerData"></u-search>
		
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">
			<view class="u-m-25 u-p-15 bg-white"  @click="toDetail(item.id,item.order_id)">
				<view class="u-flex u-row-between u-border-bottom u-p-t-14 u-font-24 u-p-b-20">
					<view class="" style="color: #666666;">合同时间:{{item.fix_contract_at}}</view>
					<view class="" style="color: #666666;" v-if="item.acceptor_str">待转移给:{{item.acceptor_str}}</view>
				</view>
				<view class="u-flex u-p-t-20">
					<u-image :src="http.resourceUrl() + item.tower_img" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
					<view class="u-p-l-10 u-p-r-12">
						<view class="u-font-26 text-bold text-black">{{item.tower_name}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{item.serial_num}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">负责人:{{item.media_name}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">联系方式:{{item.media_tel_num}}</view>
						<view class="u-font-22 u-p-l-6 u-line-1" style="color: #666666;line-height: 1.5;">地区:{{item.address_arr.province}} {{item.address_arr.city}} {{item.address_arr.district}}</view>
					</view>
				</view>
				<view class="u-border-top u-p-t-14 u-m-t-15 u-font-24 u-flex u-row-between" v-if="current == 0">
					<view  style="color: #666666;">下次维保时间:{{item.next_care_at}}</view>
					<u-button type="primary" size="mini" style="margin-right: 0;" @click="transfer(item.id)" v-if="item.show_transfer_button">保养任务转移</u-button>
				</view>
			</view>
		</block>
		
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
		
		
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="true" width="569" height="448">
			<view class="u-p-30 u-p-b-20 u-flex" style="flex-direction: column;">
				<view class="u-font-28 text-black u-m-t-26 u-m-b-40">任务转移</view>
				<view class="u-flex u-row-center u-col-top">
					<view class="u-font-26 text-black u-m-r-16 u-m-t-14">维保员</view>
					<view class="u-flex-1">
						<u-search shape="square" placeholder="搜索关键字" input-align="left" bg-color="#ffffff" border-color="#DDDDDD"
						v-model="people" :action-style="{color:'#666666'}" @custom="claerFixerData"></u-search>
						<scroll-view scroll-y="true" @scrolltolower="loadMore" style="height: 150rpx;">
							<view class="u-flex u-row-between u-m-t-20" v-for="(item,k) in peopleList" :key="k" @click="selectedFixer(item.id)">
								<view class="u-flex">
									<u-avatar :src="http.resourceUrl() + item.avatar" size="60"></u-avatar>
									<view class="u-font-24 u-m-l-10" style="color: #666666;">{{item.name}}</view>
								</view>
								<u-icon name="checkbox-mark" color="#0F58FB" size="24" v-if="selected == item.id"></u-icon>
							</view>
						</scroll-view>
					</view>
				</view>
				<u-button class="u-m-t-10" style="width: 100%;" size="medium" type="primary" @click="fixTransfer">确认转移</u-button>
			</view>
		</u-popup>
		<!-- 提示成功modal -->
		<u-popup v-model="modal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="569" height="337">
			<view class="u-p-30 u-p-b-20 u-flex" style="flex-direction: column;">
				<view class="u-font-28 text-black u-m-t-60 u-m-b-30">请耐心等待,等待对方同意转入</view>
				<u-button class="u-m-t-70" style="width: 100%;" size="medium" type="primary" @click="modal = false">关闭</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo();
			this.getFixerForFix()
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
				keyward:'',
				current:0,//页面类型(0=>维护中设备，1=>历史设备)
				tabList: [{
					name: '维护中设备',
					value:0
				}, {
					name: '历史设备',
					value:1
				}],
				
				
				people:'',
				selected:'',
				peopleList:[],
				people_page:1,
				people_lastpage:1,
				//任务转移选取的任务id
				tower_id:'',
				
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
				showModal:false,
				modal:false
			}
		},
		methods: {
			change(index) {
				this.current = index;
				this.claerData()
			},
			getInfo(){
				this.http.get('FixCare/getTowersForFixer',{
					keyword:this.keyward,
					type:this.tabList[this.current].value,
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
			claerData(){
				this.page = 1;
				this.last_page = 1;
				this.list = [];
				this.status = "loading"
				this.getInfo();
			},
			getFixerForFix(){
				this.http.get('Order/getFixerForFix',{
					keyward:this.people
				}).then(res=>{
					if(res.code == 1000){
						if(this.peopleList.length == 0){
							this.peopleList = res.data.fixer_data;
							this.people_page = res.data.last_page;
						}else{
							res.data.fixer_data.forEach(v=>{
								this.peopleList.push(v)
							})
						}
					}
				})
			},
			loadMore(){
				if(this.people_page >= this.people_lastpage) return ;
				this.people_page = ++ this.people_page;
				setTimeout(() => {
					this.getFixerForFix();
				}, 50)
			},
			claerFixerData(){
				this.people_page = 1;
				this.people_lastpage = 1;
				this.peopleList = [];
				this.selected = '';
				this.getFixerForFix();
			},
			transfer(id){
				this.showModal = true;
				this.tower_id = id;
			},
			//选择维修师傅
			selectedFixer(id){
				this.selected = id;
			},
			//任务转移
			fixTransfer(){
				this.showModal = false
				this.http.post('FixCare/fixTransfer',{
					tower_id:this.tower_id,
					accept_id:this.selected
				}).then(res=>{
					if(res.code == 1000){
						this.modal = true;
						setTimeout(()=>{
							this.claerData();
						},1500)
					}else{
						this.$u.toast(res.msg);
					}
				})
			},
			toDetail(tower_id,order_id){
				uni.navigateTo({url: 'detail/detail?tower_id=' + tower_id +'&order_id=' +order_id});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
