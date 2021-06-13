<template>
	<view class="u-p-20 wrap">
		<!-- 搜索 -->
		<navigator open-type="navigate" hover-class="none" url="/pages/home/search/search">
			<u-search class="u-m-10 u-m-b-20" placeholder="搜索关键字" input-align="center" :disabled="true" :action-style="{fontWeight:'bold'}"></u-search>
		</navigator>
		<!-- 轮播图 -->
		<u-swiper class="u-p-10" :list="imgList" height="269"></u-swiper>
		<!-- 塔吊列表 -->
		<view class="u-p-10 u-p-t-13 u-flex u-row-between">
			<view class="u-font-34 text-bold">塔吊设备</view>
			<navigator open-type="navigate" url="/pages/home/equipmentList/equipmentList">
				<view class="u-font-26" style="color: #999999;">查看更多<u-icon name="arrow-right" size="26"></u-icon></view>
			</navigator>
		</view>
		<u-row class="u-m-t-30" gutter="20" justify="space-between">
			<u-col span="6" class="u-m-b-20" v-for="(item,index) in list" :key="index">
				<equipmentItem :item="item" :index="index"></equipmentItem>
			</u-col>
		</u-row>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				list:[
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:0,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:1,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:2,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:0,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:0,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.wrap{
		background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA);
	}
</style>
