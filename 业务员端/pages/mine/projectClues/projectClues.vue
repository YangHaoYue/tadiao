<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		<!-- <u-tabs-swiper ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper> -->
		
		<!-- 列表 -->
		<view class="u-p-b-20">
			<!-- 当list为空时 -->
			<view style="margin: 139rpx 192rpx;" v-if="tabList[current].list.length === 0">
				<u-image width="365" height="365" src="../../../static/empty.png"></u-image>
				<view class="u-font-28 text-gray u-m-t-40 u-text-center">空空如也~</view>
			</view>
			<block v-for="(item,index) in tabList[current].list" :key="index">
				<!-- 我的线索 -->
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true"
				 @click="toDetail()" v-if="current == 0">
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.desc}}</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="item.thumb"/>李维</view>
						<view>
							<u-button type="primary" size="mini" :plain="true" class="u-m-r-10" @click="toRelation">关联塔吊</u-button>
							<u-button type="primary" size="mini" style="margin-right: 0;">创建项目</u-button>
						</view>
					</view>
				</u-card>
				<!-- 公海池 -->
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true"
				 @click="toDetail()" v-else-if="current == 1">
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.desc}}</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<u-icon name="map" size="33" :label="item.desc" label-color="#666666" label-size="24"></u-icon>
						<u-button type="primary" size="mini" style="margin-right: 0;">申请认领</u-button>
					</view>
				</u-card>
				<!-- 别人的线索 -->
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true"
				 @click="toDetail()" v-else>
				 <view slot="head" class="u-flex u-font-24" style="color: #666666;">合同协调人：
				 <u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="item.thumb"/>李维</view>
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.desc}}</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<u-icon name="map" size="33" :label="item.desc" label-color="#666666" label-size="24"></u-icon>
					</view>
				</u-card>
			</block>
		</view>
		
		<navigator open-type="navigate" url="/pages/mine/projectClues/createNew/createNew" hover-class="none" class="u-flex cNew round u-p-22">
			<view class="u-flex-1">新增</view>
			<view class="u-flex-1">线索</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabList: [{
					name: '我的线索',
					list:[{
						title: '创建时间：2021-04-21 13:0',
						subTitle: '待跟进',
						subTitleColor:'#FE5E10',
						desc:'湘东滨河新区未来城项目',
						thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},{
						title: '创建时间：2021-04-21 13:0',
						subTitle: '跟进中',
						subTitleColor:'#2DA016',
						desc:'湘东滨河新区未来城项目',
						thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},{
						title: '创建时间：2021-04-21 13:0',
						subTitle: '审核中',
						subTitleColor:'#0F58FB',
						desc:'湘东滨河新区未来城项目',
						thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					}]
				}, {
					name: '公海池',
					list:[{
						title: '创建时间：2021-04-21 13:0',
						subTitle: '审核中',
						subTitleColor:'#0F58FB',
						desc:'湘东滨河新区未来城项目',
						thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},{
						title: '创建时间：2021-04-21 13:0',
						subTitle: '审核中',
						subTitleColor:'#0F58FB',
						desc:'湘东滨河新区未来城项目',
						thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					}]
				}, {
					name: '别人的线索',
					list:[]
				}]
				
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			toDetail(){
				uni.navigateTo({url: 'detail/detail'});
			},
			toRelation(){
				uni.navigateTo({url: 'relation/associated'});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
	.cNew{
		background: -webkit-linear-gradient(top,#1C95FA,#0F58FB);
		box-shadow: 0 15px 30px 0 rgba(0,0,0,0.3);
		height: 112rpx;
		width: 112rpx;
		color: #FFFFFF;
		font-size: 24rpx;
		text-align: center;
		flex-direction: column;
		
		position: fixed;
		bottom: 80rpx;
		right: 38rpx;
		z-index: 9;
		
	}
</style>
