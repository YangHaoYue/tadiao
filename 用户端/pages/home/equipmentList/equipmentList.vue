<template>
	<view class="wrap">
		<u-dropdown ref="uDropdown" activeColor="#0F58FB">
			
			<u-dropdown-item :title="areaName">
				<city-select  @city-change="cityChange" @clearData="clearArea"></city-select>
				
			</u-dropdown-item>
			
			<u-dropdown-item @change="statusChange" v-model="listStatus" :title="statusTitle" :options="statusList"></u-dropdown-item>
			
			<u-dropdown-item title="价格区间">
				<view class="slot-content">
					<view>价格区间(元)</view>
					<view class="u-flex u-row-around u-m-t-20 u-m-b-30">
						<input class="priceInput round" v-model="min" placeholder="最低价"/>
						<u-line color="#979797" length="33rpx"/>
						<input class="priceInput round" v-model="max" placeholder="最高价"/>
					</view>
					<view class="u-flex u-row-right">
						<u-button class="u-m-10" type="primary" plain @click="priceReset" size="medium">重置</u-button>
						<u-button class="u-m-10" type="primary" @click="clearList" size="medium">确定</u-button>
					</view>
				</view>
			</u-dropdown-item>
			
			<u-dropdown-item @change="typeChange" v-model="type" :title="typeTitle" :options="typeList" height="400rpx" @onReachBottom="typeOnReachBottom"></u-dropdown-item>
			
			<u-dropdown-item :title="brand" style="z-index: 9999;">
				<view class="slot-content">
					<scroll-view scroll-y="true" style="height: 200rpx;" @scrolltolower="brandOnReachBottom" lower-threshold="50">
						<view class="item-box">
							<view class="item" :class="[item.value == brand_id ? 'active' : '']" @tap="tagClick(item)" v-for="(item, index) in brandList" :key="index">
								{{item.label}}
							</view>
						</view>
					</scroll-view>
					<view class="u-flex u-row-right">
						<u-button class="u-m-10" type="primary" plain @click="reset" size="medium">重置</u-button>
						<u-button class="u-m-10" type="primary" @click="clearList" size="medium">确定</u-button>
					</view>
				</view>
			</u-dropdown-item>
			
		</u-dropdown>
		
		<!-- 列表 -->
		<u-row class="u-p-20 u-m-t-26" gutter="20" justify="space-between">
			<view class="u-flex u-row-center" style="margin: 139rpx 192rpx;flex-direction: column;" v-if="list.length === 0">
				<u-image width="365" height="365" src="@/static/mine/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<u-col span="6" class="u-m-b-20" v-for="(item,index) in list" :key="index" @click="setPhone(item)">
				<equipmentItem :item="item" :index="index"></equipmentItem>
			</u-col>
		</u-row>
		<!-- 客服电话 -->
		<u-action-sheet :list="phone" v-model="show" :tips="tips" :cancel-btn="true" @click="makePhoneCall"></u-action-sheet>
	</view>
</template>

<script>
	import citySelect from '@/components/u-city-select.vue';
	export default {
		components:{
			citySelect
		},
		onLoad() {
			this.getTypes();
			this.getBrands();
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
				areaName:'地区',
				area_id:'',
				listStatus: -1,
				statusTitle:'状态',
				//价格区间
				min:0,
				max:0,
				type: '',
				typeTitle:'机型',
				//品牌
				brand:'品牌',
				brand_id:'',
				
				
				//0=>可用,1=>锁定中,2=>租赁中,(全部时不传或者-1)
				statusList: [{
						label: '全部',
						value: -1,
					},
					{
						label: '可用',
						value: 0,
					},
					{
						label: '租赁中',
						value: 2,
					},
					{
						label: '锁定中',
						value: 1,
					}
				],
				
				typePage:1,
				typeLast_page:1,
				typeList: [],
				
				brandPage:1,
				brandLast_page:1,
				brandList:[],
				
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
				let data = {
					status:this.listStatus,
					price_max:this.max,
					price_min:this.min,
					page:this.page
				}
				if(this.brand_id){
					this.$set(data,'brand_id',this.brand_id)
				}
				if(this.area_id){
					this.$set(data,'area_id',this.area_id)
				}
				if(this.type){
					this.$set(data,'type_id',this.type)
				}
				/* if(this.max&&this.min){
					this.$set(data,'price_max',this.max)
					this.$set(data,'price_min',this.min)
				} */
				this.http.get('Index/towerList',data).then(res=>{
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
			//获取机型
			getTypes(){
				this.http.get('Index/getTypes',{
					page:this.typePage
				},true).then(res=>{
					if(res.code == 1000){
						if(this.typeList.length == 0){
							this.typeList = res.data.type_data.map(v=>{
								return{
									label:v.name,
									value:v.id
								}
							})
							this.typeLast_page = res.data.last_page;
						}else{
							res.data.type_data.forEach(v=>{
								this.typeList.push({
									label:v.name,
									value:v.id
								})
							})
						}
					}
				})
			},
			typeOnReachBottom(){
				if(this.typePage >= this.typeLast_page) return ;
				this.typePage = ++ this.typePage;
				setTimeout(() => {
					this.getTypes();
				}, 50)
			},
			//获取品牌
			getBrands(){
				this.http.get('Index/getBrands',{
					page:this.brandPage
				},true).then(res=>{
					if(res.code == 1000){
						if(this.brandList.length == 0){
							this.brandList = res.data.brand_data.map(v=>{
								return{
									label:v.brand_name,
									value:v.id}
							})
							this.brandLast_page = res.data.last_page;
						}else{
							res.data.brand_data.forEach(v=>{
								this.brandList.push({
									label:v.brand_name,
									value:v.id})
							})
						}
					}
				})
			},
			brandOnReachBottom(){
				if(this.brandPage >= this.brandLast_page) return ;
				this.brandPage = ++ this.brandPage;
				setTimeout(() => {
					this.getBrands();
				}, 50)
			},
			//城市选择
			cityChange(e) {
				console.log(e);
				this.areaName = e.area.label || e.city.label || e.province.label;
				this.area_id = e.area.value || e.city.value || e.province.value;
				this.clearList();
			},
			clearArea(){
				this.areaName = '地区';
				this.area_id = '';
				this.clearList();
			},
			//状态选择
			statusChange(index) {
				console.log(index);
				this.listStatus = index;
				this.statusList.map(v=>{
					if(v.value === index){
						this.statusTitle = v.label;
					}
				})
				this.clearList();
			},
			//机型选择
			typeChange(value){
				this.type = value;
				this.typeList.map(v=>{
					if(v.value === value){
						this.typeTitle = v.label;
					}
				})
				this.clearList();
			},
			//关闭
			closeDropdown() {
				this.$refs.uDropdown.close();
			},
			tagClick(item) {
				this.brand = item.label;
				this.brand_id = item.value;
			},
			//重置
			reset(){
				this.brand = '';
				this.brand_id = '';
				this.clearList();
			},
			priceReset(){
				this.max = 0;
				this.min = 0;
				this.clearList();
			},
			/* 初始化数据 */
			clearList(){
				this.status='loading';
				this.closeDropdown();
				this.page=1;
				this.last_page=1;
				this.list=[];
				this.getInfo();
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

<style lang="scss" scoped>
	.wrap{
		background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA);
		min-height: 100vh;
	}
	.slot-content {
		background-color: #FFFFFF;
		padding: 24rpx;
		
		.item-box {
			margin-bottom: 50rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.item {
				border: 1px solid $u-type-primary;
				color: $u-type-primary;
				padding: 8rpx 40rpx;
				border-radius: 100rpx;
				margin-top: 30rpx;
			}
			
			.active {
				color: #FFFFFF;
				background-color: $u-type-primary;
			}
		}
	}
	.priceInput{
		/* border-radius: 100%; */
		background-color: #F4F4F4;
		width: 280rpx;
		height: 54rpx;
		padding: 0rpx 20rpx;
		text-align: center;
	}
</style>
