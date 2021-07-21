<template>
	<view>
		<view class="u-flex bg-white u-m-t-20 u-p-25 u-p-t-15 u-p-b-15">
			<view class="text-bold u-font-28 u-p-10 text-black u-border-bottom">项目名称</view>
			<view class="u-font-28">{{project_name}}</view>
		</view>
		<pro-card title="设备信息">
			<view class="u-flex u-m-t-20" slot="content">
				<u-image :src="http.resourceUrl() + equipment.tower_img" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
				<view class="u-p-l-10 u-p-r-12">
					<view class="u-font-26 text-bold text-black">{{equipment.tower_name}}({{equipment.tower_type_name}})</view>
					<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{equipment.serial_num}}
					</view>
					<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备备案编号:{{equipment.record_num}}
					</view>
					<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">项目名称:{{equipment.project_name}}
					</view>
					<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">施工企业名称:{{equipment.construction_name}}
					</view>
				</view>
			</view>
		</pro-card>
		<block v-for="(item,i) in list" :key="i">
			<pro-card :title="item.title" :list="item.list"></pro-card>
		</block>
		<!-- 保养记录 -->
		<pro-card title="保养记录" >
			<view slot="content">
				<scroll-view  scroll-y @scrolltolower="towerCares" style="height: 500rpx;">
					<view class="u-p-t-20 u-p-l-20">
						<u-time-line>
							<u-time-line-item v-for="(son,j) in maintainList.cares_data" :key="j">
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
				<view class="u-flex u-row-center">
					<u-button type="primary" size="medium" :plain="true" @click="toMaintain">添加保养记录</u-button>
				</view>
			</view>
		</pro-card>
		<!-- 维修记录 -->
		<pro-card title="维修记录">
			<view slot="content">
				<scroll-view scroll-y @scrolltolower="towerFixes" style="height: 500rpx;">
					<view class="u-m-t-20 u-p-l-20">
						<u-time-line>
							<u-time-line-item v-for="(son,j) in repairList.fixes_data" :key="j">
								<template v-slot:node>
									<view class="u-node u-flex u-row-center"  :style="j===0?'background: #0F58FB;':'background: #D8D8D8;'" style="border-radius: 100%;width: 40rpx;height: 40rpx;">
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
				<view class="u-flex u-row-center">
					<u-button type="primary" size="medium" :plain="true" @click="toRepair">添加维修记录</u-button>
				</view>
			</view>
		</pro-card>

		<view class="u-flex u-row-right bg-white u-p-t-20 u-p-b-20 u-m-t-20">
			<u-button type="primary" style="margin-right: 20rpx;" size="mini" @click="showModal = true" v-if="show_transfer_button">保养任务转移</u-button>
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
	import proCard from '@/components/pro-card.vue';
	export default {
		components: {
			proCard
		},
		onLoad(e) {
			this.tower_id = e.tower_id;
			this.getFixerForFix()
		},
		onShow() {
			this.maintainList = '';
			this.repairList = '';
			this.getInfo();
		},
		data() {
			return {
				order_id:'',
				tower_id: '',
				project_name:'',
				/* 塔吊详情 */
				equipment: '',
				list: [{
						title: '客户信息',
						list: [{
								title: '昵称',
								value: '顾家',
								avatar: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
							},
							{
								title: '姓名',
								value: '张三'
							},
							{
								title: '手机方式',
								value: '17283782323'
							},
							{
								title: '地址',
								value: '浙江省杭州市西湖区西溪园区'
							}
						]
					},
					{
						title: '合同执行人',
						list: [{
								title: '昵称',
								value: '顾家',
								avatar: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
							},
							{
								title: '姓名',
								value: '张三'
							},
							{
								title: '手机方式',
								value: '17283782323'
							}
						]
					},
					{
						title: '合同时间',
						list: [{
								title: '开始时间',
								value: '2020-06-28 12:13:30'
							},
							{
								title: '到期时间',
								value: '2020-06-28 12:13:30'
							}
						]
					}
				],
				/* 保养记录 */
				maintainList:'',
				/* 维修记录 */
				repairList: '',

				show_transfer_button:false,
				people:'',
				selected:'',
				peopleList:[],
				people_page:1,
				people_lastpage:1,
				
				showModal: false,
				modal: false
			}
		},
		methods: {
			getInfo() {
				this.http.get('FixCare/getTowerTrackDetail', {
					tower_id: this.tower_id
				}).then(res => {
					this.project_name = res.data.project_name
					this.equipment = res.data.tower_info;
					
					this.list[0].list[0].value = res.data.cus.name;
					this.list[0].list[0].avatar = res.data.cus.avatar;
					this.list[0].list[1].value = res.data.cus.real_name;
					this.list[0].list[2].value = res.data.cus.tel_num;
					this.list[0].list[3].value = res.data.cus.address;
					
					this.list[1].list[0].value = res.data.executor.name;
					this.list[1].list[0].avatar = res.data.executor.avatar;
					this.list[1].list[1].value = res.data.executor.real_name;
					this.list[1].list[2].value = res.data.executor.tel_num;
					
					this.list[2].list[0].value = res.data.lease_start_at;
					this.list[2].list[1].value = res.data.lease_end_at;
					
					this.show_transfer_button = res.data.show_transfer_button;
					
					this.order_id = res.data.order_id;
					this.towerCares();
					this.towerFixes();
				})
			},
			//保养记录
			towerCares(id){
				if(this.maintainList&&this.maintainList.current_page > this.maintainList.last_page) return ;
				this.http.get('Order/towerCares',{
					order_id:this.order_id,
					tower_id:this.equipment.id,
					page:this.maintainList.current_page||1},true).then(res=>{
						if(!this.maintainList){
							this.$set(this,'maintainList',res.data)
						}else{
							res.data.cares_data.forEach(v=>{
								this.maintainList.cares_data.push(v)
							})
						}
						this.maintainList.current_page ++
					})
			},
			//维修记录
			towerFixes(){
				if(this.repairList&&this.repairList.current_page > this.repairList.last_page) return ;
				this.http.get('Order/towerFixes',{
					order_id:this.order_id,
					tower_id:this.equipment.id,
					page:this.repairList.current_page||1},true).then(res=>{
						if(!this.repairList){
							this.$set(this,'repairList',res.data)
						}else{
							res.data.fixes_data.forEach(v=>{
								this.repairList.fixes_data.push(v)
							})
						}
						this.repairList.current_page ++
					})
			},
			getFixerForFix() {
				this.http.get('Order/getFixerForFix', {
					keyward: this.people
				}).then(res => {
					if (res.code == 1000) {
						if (this.peopleList.length == 0) {
							this.peopleList = res.data.fixer_data;
							this.people_page = res.data.last_page;
						} else {
							res.data.fixer_data.forEach(v => {
								this.peopleList.push(v)
							})
						}
					}
				})
			},
			loadMore() {
				if (this.people_page >= this.people_lastpage) return;
				this.people_page = ++this.people_page;
				setTimeout(() => {
					this.getFixerForFix();
				}, 50)
			},
			claerFixerData() {
				this.people_page = 1;
				this.people_lastpage = 1;
				this.peopleList = [];
				this.getFixerForFix();
			},
			//选择维修师傅
			selectedFixer(id) {
				this.selected = id;
			},
			//任务转移
			fixTransfer() {
				this.showModal = false
				this.http.post('FixCare/fixTransfer', {
					tower_id: this.tower_id,
					accept_id: this.selected
				}).then(res => {
					if (res.code == 1000) {
						this.modal = true;
						setTimeout(() => {
							this.maintainList = '';
							this.repairList = '';
							this.getInfo();
						}, 1500)
					} else {
						this.$u.toast(res.msg);
					}
				})
			},
			toRepair() {
				uni.navigateTo({
					url: 'repair?tower_id=' + this.equipment.id
				});
			},
			toMaintain() {
				uni.navigateTo({
					url: 'maintain?tower_id=' + this.equipment.id
				});
			},
			toMDetail(care_id){
				uni.navigateTo({url: '/pages/mine/equipmentList/detail/miantainDetail?care_id=' + care_id});
			},
			toRDetail(fix_id){
				uni.navigateTo({url: '/pages/mine/equipmentList/detail/repairDetail?fix_id=' + fix_id});
			}
		}
	}
</script>

<style scoped>
	page {
		background-color: #F8F8F8;
	}
</style>
