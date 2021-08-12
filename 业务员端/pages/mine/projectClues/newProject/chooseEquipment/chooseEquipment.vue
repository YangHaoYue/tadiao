<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		
		<u-checkbox-group @change="checkboxGroupChange" shape="circle" active-color="#0F58FB" style="width: 100%;">
			<u-row class="u-m-t-30" gutter="20" justify="space-between" style="width: 100%;">
				<u-col span="6" class="u-m-b-20" v-for="(item,i) in tabList[current].list" :key="i">
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
		
		
		<!-- 底部Tab -->
		<view class="cu-tabbar-height"></view>
		<view class="saveBtn bg-white solid-top u-flex u-row-between" style="height: 90rpx;">
			<label @click="doSelectedAll">
				<u-checkbox class="u-flex u-m-l-40" v-model="isSelectedAll" shape="circle" active-color="#0F58FB">全选</u-checkbox>
			</label>
			<view class="u-flex u-m-r-20">
				<view class="u-m-r-20 u-font-22" style="color: #666666;">已选择{{count}}个</view>
				<u-button  type="primary" size="medium" :custom-style="btnStyle" @click="submit">匹配</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.project_id = e.project_id;
			this.order_id = e.order_id;
			this.getInfo();
		},
		onReachBottom() {
			if(this.tabList[this.current].page >= this.tabList[this.current].last_page) return ;
			this.status = 'loading';
			this.tabList[this.current].page = ++ this.tabList[this.current].page;
			setTimeout(() => {
				this.getInfo();
			}, 50)
		},
		computed: {
			isSelectedAll:{
				get:function(){
					return this.tabList[this.current].list.length === this.tabList[this.current].selectedList.length && this.tabList[this.current].selectedList.length > 0
				},
				set:function(){
				}
			},
			count(){
				return this.tabList[0].selectedList.length + this.tabList[1].selectedList.length
			}
		},
		data() {
			return {
				order_id:'',
				project_id:'',
				
				current:0,
				tabList: [{
					name: '本公司',
					list:[],
					page:1,
					last_page:1,
					selectedList:[]
				}, {
					name: '其他公司',
					list:[],
					page:1,
					last_page:1,
					selectedList:[]
				}],
				btnStyle:{
					fontSize:'28rpx'
				},
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
				//0=>本公司(默认,可不传),1=>其他公司
				let data = ''
				if(this.project_id){
					data = {
						type:this.current,
						project_id:this.project_id,
						page:this.tabList[this.current].page
					}
				}else{
					data = {
						type:this.current,
						order_id:this.order_id,
						page:this.tabList[this.current].page
					}
				}
				
				this.http.get('Order/getTowersForOrder',data).then(res=>{
					if(res.code == 1000){
						if(this.tabList[this.current].list.length == 0){
							this.tabList[this.current].list = res.data.tower_data;
							this.tabList[this.current].list.forEach(v=>{
								this.$set(v,'checked',false)
							})
							this.tabList[this.current].last_page = res.data.last_page;
						}else{
							if(this.tabList[this.current].page >= this.tabList[this.current].last_page) return
							let list = res.data.tower_data.forEach(v=>{
								this.$set(v,'checked',false)
							})
							this.tabList[this.current].list.concat(list)
						}
						
						if(this.tabList[this.current].page >= this.tabList[this.current].last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			change(index) {
				/* this.selectedList = []; */
				this.current = index;
				this.getInfo()
			},
			// 选中某个复选框时，由checkbox时触发
			checkboxGroupChange(e) {
				console.log(e);
				this.tabList[this.current].selectedList = this.tabList[this.current].list.filter(v=>{
					return v.checked
				});
			},
			doSelectedAll(){
				this.isSelectedAll ? this.unCheckedAll() :this.checkedAll()
			},
			// 全选
			checkedAll() {
				this.tabList[this.current].selectedList = this.tabList[this.current].list.map(val => {
					val.checked = true;
					return val;
				})
			},
			//取消全选
			unCheckedAll(){
				this.tabList[this.current].list.forEach(v=>{
					v.checked=false;
				});
				this.tabList[this.current].selectedList = [];
			},
			submit(){
				uni.$emit('townList',{data:[...this.tabList[0].selectedList,...this.tabList[1].selectedList]});
				uni.navigateBack({
					delta: 1
				});
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
