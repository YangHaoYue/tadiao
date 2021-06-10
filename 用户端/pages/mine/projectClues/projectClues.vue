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
			<block v-for="(item,index) in list" :key="index" >
				<u-card :title="item.title" title-size="24" title-color="#666666"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :border="false"
				 @click="toDetail()">
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.desc}}</view>
						<view @tap.stop="openModal(index)">
							<u-image src="../../../static/mine/shanchu@2x.png" width="36" height="36" :fade="false" v-if="current == 3" ></u-image>
						</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="item.thumb"/>李维</view>
						<u-button type="primary" size="mini" style="margin-right: 0;">修改线索</u-button>
						<!-- <view>
							<view class="u-font-26" style="color: #FE5E10;">否决原因：</view>
							<view class="u-font-26 u-m-t-20" style="color: #666666;">{{item.desc}}</view>
						</view> -->
					</view>
				</u-card>
			</block>
		</view>
		
		<u-modal v-model="showModal" content="是否删除该条线索" :async-close="true" @confirm="del"
		 :show-cancel-button="true" :show-title="false" :content-style="{margin: '30rpx 0'}" width="500"></u-modal>
		
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
				tabList: [{
					name: '全部'
				}, {
					name: '更进中'
				}, {
					name: '已成交',
					count: 0
				},{
					name: '未通过',
					count: 0
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
				},],
				//删除哪一个线索
				whichone:'',
				showModal:false
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			toDetail(){
				uni.navigateTo({url: 'detail/detail'});
			},
			openModal(index){
				this.showModal = true;
				this.whichone = index;
			},
			del(index){
				this.showModal = false;
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
