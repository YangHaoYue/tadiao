<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="u-m-25 bg-white" style="border-radius: 10rpx;">
				<view style="padding: 37rpx 14rpx 10rpx 22rpx;">
					<view class="u-flex">
						<u-image :src="http.resourceUrl() + item.tower_img" width="153" height="153" mode="scaleToFill" :fade="false"></u-image>
						<view class="u-m-l-12 u-flex-1" style="height: 153rpx;">
							<view class="u-flex u-row-between u-m-b-20 u-font-26 text-bold">
								<view >{{item.tower_name}}({{item.tower_type}})</view>
								<view style="color: #FE5E10;">租金:¥{{item.month_rent}}/月</view>
							</view>
							<view class="text-gray u-font-22">设备出厂编号:{{item.serial_num}}</view>
							<view class="text-gray u-font-22">品牌:{{item.brand_name}}</view>
							<view class="text-gray u-font-22">年限:{{item.age_limit}}</view>
						</view>
					</view>
				</view>
				<view class="u-border-top u-p-20 u-flex u-row-right">
					<u-button type="primary" size="mini" style="margin-right: 0;" @click="modify(item.month_rent,item.id)">修改价格</u-button>
				</view>
			</view>
		</block>
		
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" border-radius="8" :closeable="true" width="546" height="405">
			<view class="u-p-20 u-p-b-20 u-flex" style="flex-direction: column;">
				<view class="text-black u-font-28 u-m-t-30 u-m-b-20">修改价格</view>
				<view class="u-m-t-30 u-m-b-30">
					<view class="u-font-28 text-bold u-m-b-30" style="color: #FE5E10;">当前租金:¥{{oldPrice}}/月</view>
					<view class="u-flex">
						<text class="text-black u-m-r-20 u-font-26 text-bold">租金</text>
						<view class="u-border u-flex" style="width: 424;padding: 6rp 11rpx;border-radius: 4rpx;">
							<text class="u-m-r-10 text-black text-bold">￥</text>
							<u-input v-model="newPrice" type="number" placeholder="请输入租金" height="50" style="width: 360rpx;"></u-input>
						</view>
					</view>
				</view>
				<u-button class="u-m-t-20" style="width: 100%;" :disabled="isInput" size="medium" type="primary" @click="showModal = false">提交</u-button>
			</view>
		</u-popup>
		
		<u-gap height="40" bg-color="#F8F8F8"></u-gap>
	</view>
</template>

<script>
	export default {
		onLoad() {
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
		computed: {
			isInput() {
				let bool = true;
				if(this.newPrice){
					bool = false;
				}
				return bool
			}
		},
		data() {
			return {
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
				//修改价格
				showModal:false,
				oldPrice:'',
				tower_id:'',
				newPrice:''
			}
		},
		methods: {
			getInfo(){
				this.http.get('Manager/towerRentList',{
					branch_id:uni.getStorageSync('branch_id'),
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
			modify(price,tower_id){
				this.oldPrice = price;
				this.tower_id = tower_id
				this.showModal = true;
			},
			editTowerRent(){
				this.http.post('Manager/editTowerRent',{
					tower_id:this.tower_id,
					month_rent:this.newPrice
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							this.clearData()
						},1500)
					}
				})
			},
			claerData(){
				this.page = 1;
				this.last_page = 1;
				this.list = [];
				this.status = "loading"
				this.getInfo();
			}
		}
	}
</script>

<style>
	page{
		background-color: #F8F8F8;
	}
</style>
