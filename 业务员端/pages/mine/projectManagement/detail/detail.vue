<template>
	<view>
		<pro-card title="合同信息">
			<view class="u-m-t-20 u-p-l-36" slot="content">
				<view class="text-bold u-font-28 text-black">合同编号:{{contract.contract_num}}</view>
				<view class="u-flex ">
					<block v-for="(item,index) in contract.contract_imgs" :key="'img'+index">
						<u-image :src="item" width="128" height="181" :fade="false" class="u-m-l-10" @click="showImg(index)"></u-image>
					</block>
				</view>
			</view>
		</pro-card>
		<block v-for="(item,i) in list" :key="'i'+i">
			<pro-card :title="item.title" :list="item.list"></pro-card>
		</block>
		<!-- 塔吊信息 -->
		<block v-for="(item,m) in equipList.tower_data" :key="'m'+m">
			<pro-card :title="`塔吊信息${Number(m)+1}:`">
				<view slot="content" class="">
					<view class="u-flex u-m-t-30">
						<u-image :src="http.resourceUrl() + item.tower_img" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
						<view class="u-p-l-10 u-p-r-12">
							<view class="u-font-26 text-bold text-black u-line-1">{{item.tower_name}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">维修师傅:{{item.fixer_name}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">品牌:{{item.brand_name}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{item.serial_num}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备备案编号:{{item.address_info}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">年限:{{item.age_limit}}</view>
						</view>
					</view>
					
					<!-- 保养记录 -->
					<view class="u-font-28 text-bold text-black u-m-t-20" v-if="item.maintainList.cares_data&&item.maintainList.cares_data.length != 0">保养记录</view>
					<view class="u-m-t-40" v-if="item.maintainList.cares_data&&item.maintainList.cares_data.length != 0">
						<scroll-view scroll-y @scrolltolower="towerCares(item.id,item)" style="height: 500rpx;">
							<view class="u-p-l-20">
								<u-time-line>
									<u-time-line-item v-for="(son,j) in item.maintainList.cares_data" :key="'j'+j">
										<!-- 此处自定义了左边内容，用一个图标替代 -->
										<template v-slot:node>
											<view class="u-node u-flex u-row-center"  :style="j===0?'background: #0F58FB;':'background: #D8D8D8;'" style="border-radius: 100%;width: 40rpx;height: 40rpx;">
												<!-- 此处为uView的icon组件 -->
												<u-icon name="file-text" color="#fff" size="24"></u-icon>
											</view>
										</template>
										<template v-slot:content>
											<view @click="toMDetail(son.id)">
												<view class="u-flex u-row-between u-font-28 u-m-t-10">
													<view class="text-black">{{son.cares_name}}</view>
													<view class="text-black">{{son.carer.name}}</view>
												</view>
												<!-- <view class="u-flex u-flex-wrap">
													<block class="u-p-10" v-for="(kid,k) in son.imgList" :key="k">
														<u-image :src="kid" width="115" height="115" :fade="false" class="u-m-r-10 u-m-b-10"></u-image>
													</block>
												</view> -->
												<view class="u-order-desc text-gray u-m-t-10 u-font-24">{{son.created_at}}</view>
											</view>
										</template>
									</u-time-line-item>
								</u-time-line>
							</view>
						</scroll-view>
					</view>
					
					<!-- 维修记录 -->
					<view class="u-font-28 text-bold text-black u-m-t-20" v-if="item.repairList.fixes_data&&item.repairList.fixes_data.length != 0">维修记录</view>
					<view class="u-m-t-40" v-if="item.repairList.fixes_data&&item.repairList.fixes_data.length != 0">
						<scroll-view scroll-y @scrolltolower="towerFixes(item.id,item)" style="height: 500rpx;">
							<view class="u-p-l-20">
								<u-time-line>
									<u-time-line-item v-for="(son,o) in item.repairList.fixes_data" :key="'o'+o">
										<!-- 此处自定义了左边内容，用一个图标替代 -->
										<template v-slot:node>
											<view class="u-node u-flex u-row-center"  :style="o===0?'background: #0F58FB;':'background: #D8D8D8;'" style="border-radius: 100%;width: 40rpx;height: 40rpx;">
												<!-- 此处为uView的icon组件 -->
												<u-icon name="file-text" color="#fff" size="24"></u-icon>
											</view>
										</template>
										<template v-slot:content>
											<view @click="toRDetail(son.id)">
												<view class="u-flex u-row-between u-font-28 u-m-t-10">
													<view class="text-black">{{son.fixes_name}}</view>
													<view class="text-black">{{son.fixer.name}}</view>
												</view>
												<view class="u-order-desc text-gray u-m-t-10 u-font-24">{{son.created_at}}</view>
											</view>
										</template>
									</u-time-line-item>
								</u-time-line>
							</view>
						</scroll-view>
					</view>
				</view>
			</pro-card>
		</block>
		
		<!-- 付款记录 -->
		
		<view class="bg-white u-m-t-20 u-p-25 u-p-t-15 u-p-b-15" style="border-radius: 10rpx;">
			<view class="u-flex u-row-between">
				<view class="text-bold u-font-28 u-p-10 text-black u-border-bottom">付款记录</view>
				<u-button v-if="show_order_pay_button" style="margin-right: 0;" type="primary" size="mini" @click="toAddRecord">增加付款时间</u-button>
			</view>
			<scroll-view scroll-y @scrolltolower="orderPays" style="height: 300rpx;">
				<view v-for="(item,v) in payList.order_pays_data" :key="'v'+v">
					<view class="u-flex u-row-between u-font-28 u-m-t-10">
						<view class="text-black">{{item.order_pays_name}}</view>
						<view class="text-black"   style="color: #FE5E10;">￥{{item.amount}}</view>
					</view>
					<view class="u-flex u-row-between u-font-28 u-m-t-10"><!-- 0=>显示收款按钮,1=>显示已支付 -->
						<view class="u-order-desc text-gray u-m-t-10 u-font-24">应付款时间:{{item.start_at}}</view>
						<view class="text-black" v-if="item.status == 1">审核中</view>
						<view class="text-black" v-else-if="item.status == 2">已支付</view>
						<view class="u-flex">
							<u-button style="margin-right: 10rpx;" v-if="item.show_edit_btn" type="primary" size="mini" @click="edit(item.id)">修改</u-button>
							<u-button style="margin-right: 0;" v-if="item.status == 0" type="primary" size="mini" @click="Collection(item.id)">收款</u-button>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 评价 -->
		<pro-card title="评价">
			<template v-slot:content >
				<view class="u-font-28 text-bold" style="color: #404E60;margin: 30rpx 0;">维修师傅</view>
				<view class="text-black" style="border-radius: 10rpx;background-color: #F8F9FD;height: 181rpx;width: 686rpx;padding: 25rpx 18rpx;">
					{{fix_comment}}
				</view>
				<view class="u-font-28 text-bold" style="color: #404E60;margin: 30rpx 0;">设备</view>
				<view class="text-black" style="border-radius: 10rpx;background-color: #F8F9FD;height: 181rpx;width: 686rpx;padding: 25rpx 18rpx;">
					{{tower_comment}}
				</view>
				<!-- <u-input type="textarea" :autoHeight="true" height="181"></u-input> -->
			</template>
		</pro-card>
		
		<!-- 订单信息 -->
		<pro-card title="订单信息">
			<template v-slot:content >
				<block v-for="(item,k) in orderList" :key="'k'+k">
					<view class="u-flex u-p-15">
						<view class="u-font-28 text-black u-m-r-32">{{item.title}}</view>
						<view class="u-font-28" style="color: #999999;">{{item.value}}</view>
					</view>
				</block>
			</template>
		</pro-card>
		
		<!-- 总金额 -->
		<view class="u-flex u-m-t-30 u-m-b-30 u-row-right u-p-30 u-p-r-15 bg-white">
			<view class="u-font-28 text-bold">订单总金额:<text style="color: #FE5E10;">￥{{totalPrice}}</text></view>
		</view>
		<!-- 结束 -->
		<view class="u-flex u-m-t-30 u-m-b-30 u-row-right u-p-30 u-p-r-15 bg-white" v-if="show_close_button ">
			<u-button type="primary" style="margin-right: 0;" size="medium" @click="end" >结束</u-button>
		</view>
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="546" height="405">
			<view class="u-p-60 u-p-b-40 u-flex" style="flex-direction: column;">
				<u-icon name="checkmark-circle-fill" size="100" color="#0F58FB" label="等待审核" label-color="#333333" label-size="30" label-pos="bottom" margin-top="20"></u-icon>
				<u-button class="u-m-t-50" style="width: 100%;" size="medium" type="primary" @click="showModal = false">关闭</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import proCard from '@/components/pro-card.vue';
	export default {
		components:{
			proCard
		},
		onLoad(e) {
			this.order_id = e.order_id;
			this.orderPays();
			this.getInfo();
			uni.$on('addRecordback',res=>{
				this.payList.order_pays_data = [];
				this.payList.current_page = 1;
				this.orderPays();
			});
		},
		onUnload() {
			uni.$off('addRecordback')
		},
		/* onReachBottom() {
			if(this.page >= this.last_page) return ;
			this.status = 'loading';
			this.page = ++ this.page;
			setTimeout(() => {
				this.getInfo();
			}, 50)
		}, */
		data() {
			return {
				order_id:'',
				contract:{
					contract_num:'',
					contract_imgs:''
				},
				list:[
					{
						title:'客户信息',
						list:[
							{title:'昵称',value:'顾家',avatar:'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'},
							{title:'姓名',value:'张三'},
							{title:'手机方式',value:'17283782323'},
							{title:'地址',value:'浙江省杭州市西湖区西溪园区'}
						]
					},
					{
						title:'合同执行人',
						list:[
							{title:'昵称',value:'顾家',avatar:'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'},
							{title:'姓名',value:'张三'},
							{title:'手机方式',value:'17283782323'}
						]
					},
					{
						title:'合同协调人',
						list:[
							{title:'昵称',value:'顾家',avatar:'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'},
							{title:'姓名',value:'张三'},
							{title:'手机方式',value:'17283782323'}
						]
					},
					{
						title:'信息员',
						list:[
							{title:'昵称',value:'顾家',avatar:'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'},
							{title:'姓名',value:'张三'},
							{title:'手机方式',value:'17283782323'}
						]
					}
				],
				/* 塔吊列表 */
				equipList:[],
				/* 付款记录 */
				payList:'',
				/* 订单详情 */
				orderList:[
					{title:'订单编号',value:''},
					{title:'创建时间',value:''},
					{title:'开始时间',value:''},
					{title:'到期时间',value:''},
					{title:'付款方式',value:''},
				],
				/* 评价 */
				fix_comment:'',
				tower_comment:'',
				/* 总金额 */
				totalPrice:'489832.00',
				showModal:false,
				
				//关闭
				show_close_button :'',
				//控制增加付款时间
				show_order_pay_button:false
			}
		},
		methods: {
			getInfo(){
				this.http.get('Order/orderDetail',{
					order_id:this.order_id
				}).then(res=>{
					if(res.code == 1000){
						this.contract.contract_imgs = res.data.contract_imgs.map(v=>{
							return this.http.resourceUrl() + v
						});
						this.contract.contract_num = res.data.contract_num;
						
						this.list[0].list[0].value = res.data.cus.name;
						this.list[0].list[0].avatar = this.http.resourceUrl() + res.data.cus.avatar;
						this.list[0].list[1].value = res.data.cus.real_name;
						this.list[0].list[2].value = res.data.cus.tel_num;
						this.list[0].list[3].value = res.data.cus.address;
						
						this.list[1].list[0].value = res.data.executor.name;
						this.list[1].list[0].avatar = this.http.resourceUrl() + res.data.executor.avatar;
						this.list[1].list[1].value = res.data.executor.real_name;
						this.list[1].list[2].value = res.data.executor.tel_num;
						
						this.list[2].list[0].value = res.data.handler.name;
						this.list[2].list[0].avatar = this.http.resourceUrl() + res.data.handler.avatar;
						this.list[2].list[1].value = res.data.handler.real_name;
						this.list[2].list[2].value = res.data.handler.tel_num;
						
						this.list[3].list[0].value = res.data.provider.name;
						this.list[3].list[0].avatar = this.http.resourceUrl() + res.data.provider.avatar;
						this.list[3].list[1].value = res.data.provider.real_name;
						this.list[3].list[2].value = res.data.provider.tel_num;
						
						this.equipList = res.data.towers;
						this.equipList.tower_data.forEach(v=>{
							this.$set(v,'maintainList','');
							this.$set(v,'repairList','');
							this.towerCares(v.id,v);
							this.towerFixes(v.id,v);
						})
						console.log(this.equipList);
						this.fix_comment = res.data.fix_comment;
						this.tower_comment = res.data.tower_comment;
						
						this.show_close_button  = res.data.show_close_button;
						this.show_order_pay_button  = res.data.show_order_pay_button;
						
						this.orderList[0].value = res.data.order_no;
						this.orderList[1].value = res.data.created_at;
						this.orderList[2].value = res.data.lease_start_at;
						this.orderList[3].value = res.data.lease_end_at;
						this.orderList[4].value = res.data.type_pay == 1?'季结':'月结';//0=>月结,1=>季结
						
						this.totalPrice = res.data.total_amount;
					}
				})
			},
			//保养记录
			towerCares(id,item){
				if(item.maintainList&&item.maintainList.current_page > item.maintainList.last_page) return ;
				this.http.get('Order/towerCares',{
					order_id:this.order_id,
					tower_id:id,
					page:item.maintainList.current_page||1},true).then(res=>{
						if(!item.maintainList){
							this.$set(item,'maintainList',res.data)
						}else{
							res.data.cares_data.forEach(v=>{
								item.maintainList.cares_data.push(v)
							})
						}
						item.maintainList.current_page ++
					})
			},
			//维修记录
			towerFixes(id,item){
				if(item.repairList&&item.repairList.current_page > item.repairList.last_page) return ;
				this.http.get('Order/towerFixes',{
					order_id:this.order_id,
					tower_id:id,
					page:item.repairList.current_page||1},true).then(res=>{
						if(!item.repairList){
							this.$set(item,'repairList',res.data)
						}else{
							res.data.fixes_data.forEach(v=>{
								item.repairList.fixes_data.push(v)
							})
						}
						item.repairList.current_page ++
					})
			},
			//获取收款记录
			orderPays(){
				if(this.payList.current_page > this.payList.last_page) return ;
				this.http.get('Order/orderPays',{
					order_id:this.order_id,
					page:this.payList.current_page||1},true).then(res=>{
						if(!this.payList.order_pays_data){
							this.$set(this,'payList',res.data)
						}else{
							res.data.order_pays_data.map(v=>{
								this.payList.order_pays_data.push(v)
							})
						}
						this.payList.current_page ++
					})
			},
			Collection(id){
				this.http.modal('','是否确认收款',true,(res) => {
					if(res){
						this.http.post('Order/orderPayCollect',{
							order_pay_id:id
						}).then(res=>{
							this.$u.toast(res.msg);
							if(res.code == 1000){
								this.payList.order_pays_data = [];
								this.payList.current_page = 1;
								this.orderPays();
							}
						})
					}
				},'#0F58FB')
			},
			//修改收款时间
			edit(id){
				uni.navigateTo({url: `/pages/mine/projectManagement/addRecord/addRecord?isEdit=1&order_id=${id}`});
			},
			end(){
				this.http.modal('','是否要结束该项目？',true,(res)=>{
					if(res){
						this.http.post('Order/closeOrder',{
							order_id:this.order_id
						}).then(res=>{
							this.$u.toast(res.msg);
							if(res.code == 1000){
								setTimeout(()=>{
									uni.navigateBack({
										delta: 1
									});
								},1500)
							}
						})
					}
				})
			},
			toMDetail(care_id){
				uni.navigateTo({url: '/pages/mine/equipmentList/detail/miantainDetail?care_id=' + care_id});
			},
			toRDetail(fix_id){
				uni.navigateTo({url: '/pages/mine/equipmentList/detail/repairDetail?fix_id=' + fix_id});
			},
			toAddRecord(id){
				uni.navigateTo({url: `../addRecord/addRecord?order_id=${this.order_id}`});
			},
			//预览图片
			showImg(index){
				uni.previewImage({
					current:index,
					urls:this.contract.contract_imgs
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
