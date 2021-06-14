<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<u-card :title="item.title" title-size="24" title-color="#666666" :border="false" @click="toDetail()">
				<view class="" slot="body">
					<view class="text-bold u-font-28 text-black">{{item.desc}}</view>
					<view class="u-flex u-row-right">
						<view class="u-font-24" style="color: #999999;">项目金额:<text style="color: #FE5E10;">￥{{item.totalPrice}}</text></view>
					</view>
				</view>
				<view class="u-flex u-row-between" slot="foot">
					<view class="u-flex u-font-24" style="color: #666666;">合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="item.thumb"/>李维</view>
				</view>
			</u-card>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
						title: '创建时间：2021-04-21 13:0',
						subTitle: '待跟进',
						subTitleColor:'#FE5E10',
						desc:'湘东滨河新区未来城项目',
						totalPrice:'8456.00',
						thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},{
						title: '创建时间：2021-04-21 13:0',
						subTitle: '跟进中',
						subTitleColor:'#2DA016',
						desc:'湘东滨河新区未来城项目',
						totalPrice:'8456.00',
						thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},{
						title: '创建时间：2021-04-21 13:0',
						subTitle: '审核中',
						subTitleColor:'#0F58FB',
						desc:'湘东滨河新区未来城项目',
						totalPrice:'8456.00',
						thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					}]
			}
		},
		methods: {
			toDetail(){
				uni.navigateTo({url: 'detail/detail'});
			},
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
