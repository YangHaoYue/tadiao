<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<!-- 当list为空时 -->
			<view style="margin: 139rpx 192rpx;" v-if="list.length === 0">
				<u-image width="365" height="365" src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"></u-image>
			</view>
			<block v-for="(item,index) in list" :key="index">
				<u-card :title="item.title" title-size="24" title-color="#666666"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :border="false"
				>
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
						<u-button class="u-m-r-0" type="primary" size="mini" @click="toDetail()">查看合同</u-button>
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
					name: '执行中项目'
				}, {
					name: '历史项目'
				}],
				current: 0,
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
			toDetail(){
				uni.navigateTo({url: 'detail/detail'});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
