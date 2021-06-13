<template>
	<view>
		<pro-card title="合同信息">
			<view class="u-flex u-m-t-20" slot="content">
				<u-image src="" width="128" height="181" :fade="false" class="u-m-r-36 u-m-l-10"></u-image>
				<view class="text-bold u-font-28 text-black">合同编号:12345566</view>
			</view>
		</pro-card>
		<block v-for="(item,i) in list" :key="i">
			<pro-card :title="item.title" :list="item.list"></pro-card>
		</block>
		<!-- 塔吊信息 -->
		<pro-card title="塔吊信息一:">
			<view slot="content" class="">
				<view class="u-flex u-m-t-30">
					<u-image src="" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
					<view class="u-p-l-10 u-p-r-12">
						<view class="u-font-26 text-bold text-black">{{equipmentInfo.name}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">品牌:{{equipmentInfo.brand}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{equipmentInfo.number}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备备案编号:{{equipmentInfo.code}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">年限:{{equipmentInfo.years}}</view>
					</view>
				</view>
				
				<!-- 保养记录 -->
				<view class="u-font-28 text-bold text-black u-m-t-20">保养记录</view>
				<view class="u-m-t-40 u-p-l-20">
					<u-time-line>
						<u-time-line-item v-for="(item,j) in maintainList" :key="j">
							<!-- 此处自定义了左边内容，用一个图标替代 -->
							<template v-slot:node>
								<view class="u-node u-flex u-row-center"  :style="j===0?'background: #0F58FB;':'background: #D8D8D8;'" style="border-radius: 100%;width: 40rpx;height: 40rpx;">
									<!-- 此处为uView的icon组件 -->
									<u-icon name="file-text" color="#fff" size="24"></u-icon>
								</view>
							</template>
							<template v-slot:content>
								<view>
									<view class="u-flex u-row-between u-font-28 u-m-t-10">
										<view class="text-black">{{item.title}}</view>
										<view class="text-black">{{item.people}}</view>
									</view>
									<view class="u-flex u-flex-wrap">
										<block class="u-p-10" v-for="(son,k) in item.imgList" :key="k">
											<u-image :src="son" width="115" height="115" :fade="false" class="u-m-r-10 u-m-b-10"></u-image>
										</block>
									</view>
									<view class="u-order-desc text-gray u-m-t-10 u-font-24">{{item.time}}</view>
								</view>
							</template>
						</u-time-line-item>
					</u-time-line>
				</view>
				
				<!-- 维修记录 -->
				<view class="u-font-28 text-bold text-black u-m-t-20">维修记录</view>
				<view class="u-m-t-40 u-p-l-20">
					<u-time-line>
						<u-time-line-item v-for="(item,j) in repairList" :key="j">
							<!-- 此处自定义了左边内容，用一个图标替代 -->
							<template v-slot:node>
								<view class="u-node u-flex u-row-center"  :style="j===0?'background: #0F58FB;':'background: #D8D8D8;'" style="border-radius: 100%;width: 40rpx;height: 40rpx;">
									<!-- 此处为uView的icon组件 -->
									<u-icon name="file-text" color="#fff" size="24"></u-icon>
								</view>
							</template>
							<template v-slot:content>
								<view>
									<view class="u-flex u-row-between u-font-28 u-m-t-10">
										<view class="text-black">{{item.title}}</view>
										<view class="text-black">{{item.people}}</view>
									</view>
									<view class="u-flex u-flex-wrap">
										<block class="u-p-10" v-for="(son,k) in item.imgList" :key="k">
											<u-image :src="son" width="115" height="115" :fade="false" class="u-m-r-10 u-m-b-10"></u-image>
										</block>
									</view>
									<view class="u-order-desc text-gray u-m-t-10 u-font-24">{{item.time}}</view>
								</view>
							</template>
						</u-time-line-item>
					</u-time-line>
				</view>
			</view>
		</pro-card>
		
		<!-- 付款记录 -->
		<pro-card title="付款记录">
			<template v-slot:content >
				<view v-for="(item,v) in payList" :key="v">
					<view class="u-flex u-row-between u-font-28 u-m-t-10">
						<view class="text-black">{{item.title}}</view>
						<view class="text-black"   style="color: #FE5E10;">￥{{item.price}}</view>
					</view>
					<view class="u-flex u-row-between u-font-28 u-m-t-10">
						<view class="u-order-desc text-gray u-m-t-10 u-font-24">应付款时间:{{item.time}}</view>
						<view class="text-black" v-if="item.price">已支付</view>
						<u-button style="margin-right: 0;" v-else type="primary" size="mini" @click="Collection">收款</u-button>
					</view>
				</view>
			</template>
		</pro-card>
		
		<!-- 评价 -->
		<pro-card title="评价">
			<template v-slot:content >
				<view class="u-font-28 text-bold" style="color: #404E60;margin: 30rpx 0;">维修师傅</view>
				<view class="text-black" style="border-radius: 10rpx;background-color: #F8F9FD;height: 181rpx;width: 686rpx;padding: 25rpx 18rpx;">
					这是对维修师傅的评价这是对维修师傅的评价这是对 维修师傅的评价维修师傅的评价维修师傅的评价维修 维修师傅的评价维修师傅的评价
				</view>
				<view class="u-font-28 text-bold" style="color: #404E60;margin: 30rpx 0;">设备</view>
				<view class="text-black" style="border-radius: 10rpx;background-color: #F8F9FD;height: 181rpx;width: 686rpx;padding: 25rpx 18rpx;">
					这是对设备的评价这是对设备的评价这是对设备的评价这是对设备的评价这是对设备的评价这是对设备的评价这是对设备的评价这是对设备的评价这是对设备的评价
				</view>
				<!-- <u-input type="textarea" :autoHeight="true" height="181"></u-input> -->
			</template>
		</pro-card>
		
		<!-- 订单信息 -->
		<pro-card title="订单信息">
			<template v-slot:content >
				<block v-for="(item,k) in orderList" :key="k">
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
		<view class="u-flex u-m-t-30 u-m-b-30 u-row-right u-p-30 u-p-r-15 bg-white">
			<u-button type="primary" style="margin-right: 0;" size="medium" @click="showModal = true">结束</u-button>
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
		data() {
			return {
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
				/* 塔吊详情 */
				equipmentInfo:{
					name:'QTZ80(5512-6)',
					brand:'品牌名称',
					number:'WE2245',
					code:'6737YT',
					years:'三年'
				},
				/* 保养记录 */
				maintainList:[
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'}
				],
				/* 维修记录 */
				repairList:[
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30'}
				],
				/* 付款记录 */
				payList:[
					{title:'6月28日保养记录',price:'34.00',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',price:'34.00',time:'2020-06-28 12:13:30'},
					{title:'6月28日保养记录',price:'',time:'2020-06-28 12:13:30'},
				],
				/* 评价 */
				evaluate:{
					
				},
				/* 订单详情 */
				orderList:[
					{title:'订单编号',value:'347657658439659386593'},
					{title:'创建时间',value:'2020-10-22 12:40:05'},
					{title:'开始时间',value:'2020-10-22 12:40:05'},
					{title:'到期时间',value:'2020-10-22 12:40:05'},
					{title:'付款方式',value:'月结'},
				],
				/* 总金额 */
				totalPrice:'489832.00',
				showModal:false
			}
		},
		methods: {
			Collection(收款){
				this.http.modal('','是否确认收款',true,(res) => {
					if(res){
						
					}
				},'#0F58FB')
				
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
