<template>
	<view class="wrap">
		<u-search class="u-p-10 u-p-b-20" placeholder="搜索关键字" input-align="left" :focus="true" v-model="keyward" :action-style="{fontWeight:'bold'}"></u-search>
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
				keyward:'',
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
