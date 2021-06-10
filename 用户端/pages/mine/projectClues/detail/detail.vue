<template>
	<view>
		<view class="bg"></view>
		<view class="u-m-25 card">
			<view class="u-flex u-p-40 u-p-l-60 u-p-t-60">
				<u-image width="42" height="41" src="../../../../static/mine/cluesicon@2x.png"></u-image>
				<view class="u-font-32 text-bold text-black">{{entryName}}</view>
			</view>
			<u-line color="#ECECEE" border-style="dashed" length="625rpx" margin="30rpx 40rpx"></u-line>
			<view class="u-p-20">
				<view class="u-flex u-row-between u-col-top u-p-10" v-for="(item,index) in list" :key="index">
					<view class="u-font-28" style="color: #999999;">{{item.name}}</view>
					<view class="u-font-28 text-bold" style="color: #333333;" v-if="item.value.constructor == String">{{item.value}}</view>
					<view class="u-font-28 text-bold" style="color: #333333;" v-else>
						<view v-for="(son,i) in item.value" :key="i" >{{son.name}}{{son.number}}</view>
					</view>
				</view>
			</view>
		</view>
		<u-button class="u-m-25" type="primary" style="transform: translateY(-120rpx);">修改线索</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				entryName:'湘东滨河新区未来城项目',
				list:[
					{name:'施工单位',value:'黄龙体育馆'},
					{name:'地址',value:'浙江省杭州市西湖区黄龙中心'},
					{name:'塔机型号及数量',value:[{name:'6273477',number:'(10台)'},{name:'6273477',number:'(10台)'}]},
					{name:'项目建设单位',value:'XXXX建设单位有限公司'},
					{name:'备注',value:'这是备注这是备注这是备注'},
					{name:'联系人',value:'张三'},
					{name:'联系电话',value:'16273734223'},
					{name:'联系人1',value:'三三'},
					{name:'联系电话1',value:'16273734223'},
					{name:'线索信息员',value:'李四'},
					{name:'合同协调员',value:'张三'},
					{name:'创建时间',value:'2021-04-21 13:00:00'},
					{name:'审核通过时间',value:'2021-04-21 13:00:00'},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{
		background-color: #F3F3F3;
	}
	.bg{
		background-color: #0F58FB;
		height: 198rpx;
		width: 100%;
	}
	.card{
		background-image: url(../../../../static/mine/cluesImg.png); 
		height: 1057rpx;
		width: 700rpx;
		background-size: 100% 100%;
		margin-top: 0;
		transform: translateY(-120rpx);
	}
</style>
