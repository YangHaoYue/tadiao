<template>
	<view>
		<pro-card title="设备信息">
			<view class="u-flex" slot="content">
				<u-image src="" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
				<view class="u-p-l-10 u-p-r-12">
					<view class="u-font-26 text-bold text-black">{{equipment.name}}</view>
					<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{equipment.number}}</view>
					<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备备案编号:{{equipment.code}}</view>
					<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">项目名称:{{equipment.brand}}</view>
					<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">施工企业名称:{{equipment.years}}</view>
				</view>
			</view>
		</pro-card>
		<block v-for="(item,i) in list" :key="i">
			<pro-card :title="item.title" :list="item.list"></pro-card>
		</block>
		<!-- 保养记录 -->
		<pro-card title="保养记录">
			<view class="u-m-t-20 u-p-l-20" slot="content">
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
		</pro-card>
		<!-- 维修记录 -->
		<pro-card title="维修记录">
			<view class="u-m-t-20 u-p-l-20" slot="content">
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
		</pro-card>
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
				/* 塔吊详情 */
				equipment:{
					name:'QTZ80(5512-6)',
					brand:'这是项目名称',
					number:'WE2245',
					code:'6737YT',
					years:'这是施工企业名称',
					time:'2021-04-21'
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
						title:'合同时间',
						list:[
							{title:'开始时间',value:'2020-06-28 12:13:30'},
							{title:'到期时间',value:'2020-06-28 12:13:30'}
						]
					}
				],
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
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
