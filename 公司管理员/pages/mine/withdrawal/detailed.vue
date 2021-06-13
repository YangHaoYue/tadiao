<template>
	<view>
		<view class="u-flex u-font-28 u-p-20" style="background-color: #F8F8F8;" @click="show = true">
			<view class="u-p-10 u-flex u-row-between bg-white">
				<view>{{start}}</view>
				<u-icon name="calendar" class="u-m-l-35" size="28" color="#999999"></u-icon>
			</view>
			<view class="u-m-l-10 u-m-r-10">-</view>
			<view class="u-p-10 u-flex u-row-between bg-white">
				<view>{{end}}</view>
				<u-icon name="calendar" class="u-m-l-35" size="28" color="#999999"></u-icon>
			</view>
		</view>
		<!-- 列表 -->
		<view>
			<block v-for="(item,index) in list" :key="index">
				<view class="u-flex u-row-between bg-white u-p-30 u-p-r-20 u-border-bottom">
					<view>
						<view class="u-font-28 text-black u-m-b-10">{{item.name}}</view>
						<view class="u-font-24" style="color: #999999;">{{item.time}}</view>
					</view>
					<view class="u-text-right">
						<view class="u-font-28 u-m-b-10" style="color: #FC5739;">收入:+¥{{item.income}}</view>
						<!-- <view class="u-font-28" style="color: #FC5739;">支出:-¥{{item.income}}</view> -->
						<view class="u-font-24" style="color: #999999;">余额：¥{{item.balance}}</view>
					</view>
				</view>
			</block>
		</view>
		
		<!-- 日历 -->
		<u-calendar v-model="show" mode="range" @change="chooseDay" :safe-area-inset-bottom="true"></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				start:'2020-11-22',
				end:'2020-11-22',
				
				list:[
					{name:'奖金：XXXXX项目',time:'2020-02-23 13:52:01',income:'100.00',balance:'¥2919.80'},
					{name:'奖金：XXXXX项目',time:'2020-02-23 13:52:01',income:'100.00',balance:'¥2919.80'},
					{name:'奖金：XXXXX项目',time:'2020-02-23 13:52:01',income:'100.00',balance:'¥2919.80'},
					{name:'奖金：XXXXX项目',time:'2020-02-23 13:52:01',income:'100.00',balance:'¥2919.80'},
					{name:'奖金：XXXXX项目',time:'2020-02-23 13:52:01',income:'100.00',balance:'¥2919.80'},
					{name:'奖金：XXXXX项目',time:'2020-02-23 13:52:01',income:'100.00',balance:'¥2919.80'},
				]
			}
		},
		methods: {
			chooseDay(e){
				console.log(e);
				this.start = e.startDate;
				this.end = e.endDate;
			}
		}
	}
</script>

<style>

</style>
