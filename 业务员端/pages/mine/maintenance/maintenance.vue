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
			<!-- 型号 -->
			<view class="u-flex u-p-l-20 u-p-r-20 u-p-t-20" v-if="current == 1">
				<view class="idot" v-for="(item,i) in idotList" :class="idot == item.value?'selected':'nomal'" :key="i" @click="chooseIdot(item)">
					{{item.title}}
				</view>
			</view>
			<block v-for="(item,index) in tabList[current].list" :key="index">
				<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
				 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true"
				  @click="toDetail()" v-if="current == 0">
					<view class="u-flex u-row-between" slot="body">
						<view class="text-bold u-font-28 text-black">{{item.desc}}</view>
					</view>
					<view class="u-flex u-row-between" slot="foot">
						<view class="u-flex u-font-24" style="color: #666666;">合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="item.thumb"/>李维</view>
					</view>
				</u-card>
				
				<view class="u-m-25 u-p-15 bg-white" v-else  @click="toDetail()">
					<view class="u-flex">
						<u-image src="" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
						<view class="u-p-l-10 u-p-r-12">
							<view class="u-font-26 text-bold text-black">{{item.name}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">品牌:{{item.brand}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{item.number}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备备案编号:{{item.code}}</view>
							<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">年限:{{item.years}}</view>
						</view>
					</view>
					<view class="u-border-top u-p-t-14 u-m-t-15 u-font-24" style="color: #666666;">下次维保时间:{{item.time}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabList: [{
					name: '按项目',
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
					name: '按型号',
					list:[{
						name:'QTZ80(5512-6)',
						brand:'品牌名称',
						number:'WE2245',
						code:'6737YT',
						years:'三年',
						time:'2021-04-21'
					},{
						name:'QTZ80(5512-6)',
						brand:'品牌名称',
						number:'WE2245',
						code:'6737YT',
						years:'三年',
						time:'2021-04-21'
					},]
				}],
				
				idot:0,
				idotList:[{title:'全部',value:0},{title:'6021',value:6021},{title:'6022',value:6022},{title:'6023',value:6023},{title:'6024',value:6024},{title:'6025',value:6025},]
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			toDetail(){
				if(this.current == 0){
					uni.navigateTo({url: 'projectDetail/projectDetail'});
				}else{
					uni.navigateTo({url: 'detail/detail'});
				}
			},
			chooseIdot(item){
				this.idot = item.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
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
