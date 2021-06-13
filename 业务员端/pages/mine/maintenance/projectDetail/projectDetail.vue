<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="u-m-25 u-p-15 bg-white">
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
</template>

<script>
	export default {
		data() {
			return {
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
				},{
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
				}]
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
