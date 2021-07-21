<template>
	<view>
		
		
		
		<u-checkbox-group @change="checkboxGroupChange" shape="circle" active-color="#0F58FB" style="width: 100%;">
			<u-row class="u-m-t-30" gutter="20" justify="space-between" style="width: 100%;">
				<u-col span="6" class="u-m-b-20" v-for="(item,i) in list" :key="i">
					<equipmentItem :item="item" :index="i">
						<view slot="footer">
							<view class="u-font-26 u-p-l-6 u-flex u-row-between u-p-b-20" style="color: #666666;line-height: 1.5;">
								<view>年限：{{item.age_limit}}</view>
								<u-checkbox v-model="item.checked"  shape="circle" active-color="#0F58FB" :name="item.id"></u-checkbox>
							</view>
						</view>
					</equipmentItem>
				</u-col>
			</u-row>
		</u-checkbox-group>
		
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
		<!-- 底部Tab -->
		<view class="cu-tabbar-height"></view>
		<view class="saveBtn bg-white solid-top u-flex u-row-between" style="height: 90rpx;">
			<label @click="doSelectedAll">
				<u-checkbox class="u-flex u-m-l-40" v-model="isSelectedAll" shape="circle" active-color="#0F58FB">全选</u-checkbox>
			</label>
			<view class="u-flex u-m-r-20">
				<view class="u-m-r-20 u-font-22" style="color: #666666;">已选择{{count}}个</view>
				<u-button  type="primary" size="medium" :custom-style="btnStyle" @click="make">创建维保</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.order_id = e.order_id;
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
			isSelectedAll:{
				get:function(){
					return this.list.length === this.selectedList.length
				},
				set:function(){
				}
			},
			count(){
				return this.selectedList.length
			}
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
				/* 是否全选 */
				selectedList:[],
				btnStyle:{
					fontSize:'28rpx'
				}
			}
		},
		methods: {
			getInfo(){
				this.http.get('Order/getOrderTowersForFix',{
					order_id:this.order_id,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.tower_data;
							this.list.forEach(v=>{
								this.$set(v,'checked',false)
							})
							this.last_page = res.data.last_page;
						}else{
							let list = res.data.tower_data.forEach(v=>{
								this.$set(v,'checked',false)
							})
							this.list.concat(list)
						}
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			// 选中某个复选框时，由checkbox时触发
			checkboxGroupChange(e) {
				console.log(e);
				this.selectedList = e
			},
			doSelectedAll(){
				this.isSelectedAll ? this.unCheckedAll() :this.checkedAll()
			},
			// 全选
			checkedAll() {
				this.selectedList = this.list.map(val => {
					val.checked = true;
					return val.id;
				})
			},
			//取消全选
			unCheckedAll(){
				this.list.forEach(v=>{
					v.checked=false;
				});
				this.selectedList=[];
			},
			make(){
				uni.navigateTo({url: 'apply?selectedList='+ encodeURIComponent(JSON.stringify(this.selectedList)) + '&order_id=' +this.order_id});
			}
		}
	}
</script>

<style scoped>
	page{
		/* background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA); */
		background-color: #F5F6FA;
	}
</style>
