<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<!-- 当list为空时 -->
			<view style="margin: 139rpx 192rpx;" v-if="list.length === 0">
				<u-image width="365" height="365" src="../../../static/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<view class="u-flex u-p-l-20 u-p-r-20 u-p-t-20">
				<view class="idot" v-for="(item,i) in idotList" :class="idot == item.value?'selected':'nomal'" :key="i" @click="chooseIdot(item)">
					{{item.title}}
				</view>
			</view>
			<block v-for="(item,index) in list" :key="index">
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false" @tap="toDetail()">
					<view class="u-flex u-col-top u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.desc}}</view>
						<view class="u-text-right">
							<view class="u-font-24 u-m-b-5" style="color: #999999;">月租金:<text style="color: #FE5E10;">¥845.00/月</text></view>
							<view class="u-font-24 u-m-b-5" style="color: #999999;">进出场费:<text style="color: #FE5E10;">¥8456.00</text></view>
							<view class="u-font-24 u-m-b-5" style="color: #999999;">付款方式:<text style="color: #FE5E10;">月付</text></view>
						</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="item.thumb"/>李维</view>
						<view class="u-flex" v-if="idot != 1">
							<u-button class="u-m-r-10" type="primary" :plain="true" size="mini" v-if="current === 1" @tap.stop="toAddTime()">增加付款时间</u-button>
							<u-button class="u-m-r-0" type="primary" size="mini"  @tap.stop="toMaintenance()">创建维保</u-button>
						</view>
					</view>
				</u-card>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					name: '公司项目'
				}, {
					name: '我的项目'
				}],
				current: 0,
				idot:0,
				idotList:[{title:'执行中',value:0},{title:'历史',value:1}],
				
				
				list:[{
					title: '创建时间：2021-04-21 13:0',
					subTitle: '审核中',
					subTitleColor:'#FE5E10',
					desc:'湘东滨河新区未来城项目',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				},{
					title: '创建时间：2021-04-21 13:0',
					subTitle: '已成交',
					subTitleColor:'#333333',
					desc:'湘东滨河新区未来城项目',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				},{
					title: '创建时间：2021-04-21 13:0',
					subTitle: '已成交',
					subTitleColor:'#0F58FB',
					desc:'湘东滨河新区未来城项目',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				},{
					title: '创建时间：2021-04-21 13:0',
					subTitle: '未通过',
					subTitleColor:'#999999',
					desc:'湘东滨河新区未来城项目',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				},{
					title: '创建时间：2021-04-21 13:0',
					subTitle: '已成交',
					subTitleColor:'#0F58FB',
					desc:'湘东滨河新区未来城项目',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				},{
					title: '创建时间：2021-04-21 13:0',
					subTitle: '已成交',
					subTitleColor:'#0F58FB',
					desc:'湘东滨河新区未来城项目',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				},{
					title: '创建时间：2021-04-21 13:0',
					subTitle: '已成交',
					subTitleColor:'#0F58FB',
					desc:'湘东滨河新区未来城项目',
					thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				},]
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			chooseIdot(item){
				this.idot = item.value;
			},
			toDetail(){
				uni.navigateTo({url: 'detail/detail'});
			},
			toMaintenance(){
				uni.navigateTo({url: 'createMaintenance/createMaintenance'});
			},
			toAddTime(){
				uni.navigateTo({url: 'addRecord/addRecord'});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
	.idot{
		padding: 8rpx 16rpx;
		border: 1rpx solid #0F58FB;
		border-radius: 8rpx;
		margin: 10rpx ;
	}
	.selected{
		color: #FFFFFF;
		background-color: #0F58FB;
	}
	.nomal{
		color: #0F58FB;
		background-color: #F8F8F8;
	}
</style>
