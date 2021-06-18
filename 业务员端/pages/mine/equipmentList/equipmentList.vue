<template>
	<view class="wrap">
		<!-- 搜索 -->
		<u-search class="u-p-30 u-p-t-20" style="padding-bottom: 0 !important;" bg-color="#ffffff" placeholder="搜索关键字" 
		input-align="left" :focus="true" v-model="keyward" :action-style="{fontWeight:'bold'}"></u-search>
		
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">
			<view class="u-m-25 u-p-15 bg-white"  @click="toDetail()">
				<view class="u-border-bottom u-p-t-14 u-font-24 u-p-b-20" style="color: #666666;">合同时间:{{item.time}}</view>
				<view class="u-flex u-p-t-20">
					<u-image src="" width="158" height="158" :fade="false" mode="scaleToFill"></u-image>
					<view class="u-p-l-10 u-p-r-12">
						<view class="u-font-26 text-bold text-black">{{item.name}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">品牌:{{item.brand}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备出厂编码:{{item.number}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">设备备案编号:{{item.code}}</view>
						<view class="u-font-22 u-p-l-6" style="color: #666666;line-height: 1.5;">年限:{{item.years}}</view>
					</view>
				</view>
				<view class="u-border-top u-p-t-14 u-m-t-15 u-font-24 u-flex u-row-between">
					<view  style="color: #666666;">下次维保时间:{{item.time}}</view>
					<u-button type="primary" size="mini" style="margin-right: 0;" @click="modal = true">保养任务转移</u-button>
				</view>
			</view>
		</block>
		
		
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="569" height="448">
			<view class="u-p-30 u-p-b-20 u-flex" style="flex-direction: column;">
				<view class="u-font-28 text-black u-m-t-26 u-m-b-40">任务转移</view>
				<view class="u-flex u-row-center u-col-top">
					<view class="u-font-26 text-black u-m-r-16 u-m-t-14">维保员</view>
					<view class="u-flex-1">
						<u-search shape="square" placeholder="搜索关键字" input-align="left" bg-color="#ffffff" border-color="#DDDDDD"
						v-model="people" :action-style="{color:'#666666'}"></u-search>
						<view class="u-flex u-m-t-20">
							<u-avatar src="" size="60"></u-avatar>
							<view class="u-font-24 u-m-l-10" style="color: #666666;">张三</view>
						</view>
					</view>
				</view>
				<u-button class="u-m-t-70" style="width: 100%;" size="medium" type="primary" @click="showModal = false">确认转移</u-button>
			</view>
		</u-popup>
		<!-- 提示成功modal -->
		<u-popup v-model="modal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="569" height="337">
			<view class="u-p-30 u-p-b-20 u-flex" style="flex-direction: column;">
				<view class="u-font-28 text-black u-m-t-60 u-m-b-30">请耐心等待,等待对方同意转入</view>
				<u-button class="u-m-t-70" style="width: 100%;" size="medium" type="primary" @click="modal = false">关闭</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyward:'',
				people:'',
				list:[
					{
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
					}
				],
				showModal:false,
				modal:false
			}
		},
		methods: {
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
