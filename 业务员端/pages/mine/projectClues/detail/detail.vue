<template>
	<view>
		<view class="bg"></view>
		<view class="u-m-25 card">
			<view class="u-flex u-p-40 u-p-l-60 u-p-t-60"> 
				<u-image width="42" height="41" src="../../../../static/cluesicon@2x.png"></u-image>
				<view class="u-font-32 text-bold text-black">{{entryName}}</view>
			</view>
			<u-line color="#ECECEE" border-style="dashed" length="625rpx" margin="30rpx 40rpx"></u-line>
			<view class="u-p-20">
				<view class="u-flex u-row-between u-col-top u-p-10" v-for="(item,index) in list" :key="index">
					<view class="u-font-28" style="color: #999999;">{{item.name}}</view>
					<view class="u-font-28 text-bold" style="color: #333333;" v-if="item.value.constructor == String">{{item.value}}</view>
					<view class="u-font-28 text-bold" style="color: #333333;" v-else>
						<view v-for="(son,i) in item.value" :key="i" >{{son.name}}{{son.number}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white u-m-20" style="padding: 30rpx 25rpx;border-radius: 10rpx;transform: translateY(-120rpx);">
			<!-- 跟进记录 -->
			<view class="u-font-28 text-bold text-black u-m-t-20">跟进记录</view>
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
		</view>
		<u-button class="u-m-25" type="primary" style="transform: translateY(-120rpx);" @click="toAdd">添加跟进记录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				entryName:'湘东滨河新区未来城项目',
				list:[
					{name:'施工单位',value:'黄龙体育馆'},
					{name:'地址',value:'浙江省杭州市西湖区黄龙中心'},
					{name:'塔机型号及数量',value:[{name:'6273477',number:'(10台)'},{name:'6273477',number:'(10台)'}]},
					{name:'项目建设单位',value:'XXXX建设单位有限公司'},
					{name:'备注',value:'这是备注这是备注这是备注'},
					{name:'联系人',value:'张三'},
					{name:'联系电话',value:'16273734223'},
					{name:'联系人1',value:'三三'},
					{name:'联系电话1',value:'16273734223'},
					{name:'线索信息员',value:'李四'},
					{name:'合同协调员',value:'张三'},
					{name:'创建时间',value:'2021-04-21 13:00:00'},
					{name:'审核通过时间',value:'2021-04-21 13:00:00'},
				],
				maintainList:[
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30',
					imgList:['http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg','http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',]},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30',imgList:[]},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30',imgList:[]},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30',imgList:[]},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30',imgList:[]},
					{title:'6月28日保养记录',people:'维修员1',time:'2020-06-28 12:13:30',imgList:[]},
					]
			}
		},
		methods: {
			toAdd(){
				uni.navigateTo({
					url: 'addRecord',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F3F3F3;
	}
	.bg{
		background-color: #0F58FB;
		height: 198rpx;
		width: 100%;
	}
	.card{
		background-image: url(../../../../static/cluesImg.png); 
		height: 1057rpx;
		width: 700rpx;
		background-size: 100% 100%;
		margin-top: 0;
		transform: translateY(-120rpx);
	}
</style>
