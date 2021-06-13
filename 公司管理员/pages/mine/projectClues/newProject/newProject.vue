<template>
	<view>
		<view class="bg-white">
			<block v-for="(item,index) in equipmentList" :key="index">
				<view class="u-flex u-row-between" style="padding: 13rpx 30rpx;">
					<view class="u-flex">
						<u-image :src="item.src" width="116" height="116" :fade="false"></u-image>
						<view class="u-font-28 text-bold text-bold u-m-l-15">{{item.title}}</view>
					</view>
					<u-image src="../../../../static/shanchu@2x.png" width="35" height="35" :fade="false" @click="del(index)"></u-image>
				</view>
			</block>
		</view>
		<!-- 添加 -->
		<navigator open-type="navigate" url="chooseEquipment/chooseEquipment">
			<view class="bg-white u-flex u-row-center u-p-40">
				<view class="u-p-22" style="background-color: #F6F7FB;border-radius: 14rpx;">
					<u-icon name="plus" size="40" color="#9FA7BC"></u-icon>
				</view>
				<view class="u-font-28 u-m-l-28" style="color: #666666;">添加塔吊</view>
			</view>
		</navigator>
		
		<view class="u-p-25 u-p-l-30 bg-white u-m-t-20">
			<view class="u-font-28" style="color: #999999;">塔吊的月租金</view>
			<view class="u-flex u-col-center u-m-t-10">
				<view class="text-bold u-m-r-10" style="color: #151515;font-size: 62rpx;">￥</view>
				<u-input class="moneyInput" type="number" v-model="money" placeholder="请输入塔吊的月租金" placeholder-style="font-size:28rpx"></u-input>
			</view>
		</view>
		<block v-for="(item,i) in formList" :key="i">
			<form-list :item="item" :index="i" @change="dateChange" @input="input" @choose="choose"></form-list>
		</block>
		<!-- 首次付款 -->
		<view class="u-m-t-20">
			<view class="u-font-28 text-black u-p-30 bg-white text-bold">首次付款</view>
			<block v-for="(item,j) in firstPayList" :key="j">
				<form-list :item="item" :index="j" @change="dateChange" @input="input"></form-list>
			</block>
		</view>
		<!-- 下次付款 -->
		<view class="u-m-t-20">
			<view class="u-font-28 text-black u-p-30 bg-white text-bold">下次付款</view>
			<block v-for="(item,k) in lastPayList" :key="k">
				<form-list :item="item" :index="k" @timeChange="dateChange" @input="input"></form-list>
			</block>
		</view>
		<!-- 客户 -->
		<view class="u-m-t-20">
			<block v-for="(item,index) in customerList" :key="index">
				<form-list :item="item" :index="index" @input="input"></form-list>
			</block>
		</view>
		<!-- 合同 -->
		<view class="bg-white u-m-t-20 u-p-b-30">
			<view class="u-p-30 u-flex u-row-between solid-bottom">
				<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">合同编号</view>
				<u-input v-model="code" type="text" input-align="right" placeholder="请输入合同编号" placeholder-style="color:#999999;font-size:28rpx;"/>
			</view>
			<view class="u-m-t-20 u-m-l-30">
				<u-upload width="160" height="160" :action="http.interfaceUrl()+action" :header="header" :max-count="99" @on-list-change="onPayChange"></u-upload>
			</view>
		</view>
		
		<u-button type="primary" class="u-m-30">立即提交</u-button>
		<u-gap bg-color="F8F8F8" height="50"></u-gap>
	</view>
</template>

<script>
	import formList from '@/components/form-list.vue';
	import proCard from '@/components/pro-card.vue';
	export default {
		components:{
			formList,
			proCard
		},
		data() {
			return {
				equipmentList:[
					{src:'',title:'QTZ80(5512-6)'},
					{src:'',title:'QTZ80(5512-6)'},
					{src:'',title:'QTZ80(5512-6)'}
				],
				money:'',
				
				formList:[
					{type:'input',name:'进出场费',value:'',id:'',placeholder:'请输入进出场费',inputType:'digit',isImport:false},
					{type:'picker',name:'付款方式',value:'',id:'',placeholder:'月结',list:[],isImport:false},
					{type:'timePicker',name:'开始时间',value:'',id:'',placeholder:'请选择开始时间',isImport:false},
					{type:'timePicker',name:'预计到期时间',value:'',id:'',placeholder:'请选择预计到期时间',isImport:false},
				],
				firstPayList:[
					{type:'timePicker',name:'首次付款时间',value:'',id:'',placeholder:'请选择首次付款时间',isImport:false},
					{type:'input',name:'首次付款金额',value:'',id:'',placeholder:'请输入首次付款金额',inputType:'digit',isImport:false},
					{type:'textarea',name:'摘要',value:'',id:'',placeholder:'请输入摘要',isImport:false},
				],
				lastPayList:[
					{type:'timePicker',name:'下次付款时间',value:'',id:'',placeholder:'请选择下次付款时间',isImport:false},
					{type:'input',name:'下次付款金额',value:'',id:'',placeholder:'请输入下次付款金额',inputType:'digit',isImport:false},
					{type:'textarea',name:'摘要',value:'',id:'',placeholder:'请输入摘要',isImport:false},
				],
				customerList:[
					{type:'input',name:'客户单位名',value:'',id:'',placeholder:'请输入客户单位名',inputType:'text',isImport:false},
					{type:'input',name:'联系人姓名',value:'',id:'',placeholder:'请输入联系人姓名',inputType:'text',isImport:false},
					{type:'input',name:'联系人手机',value:'',id:'',placeholder:'请输入联系人手机',inputType:'number',isImport:false},
				],
				/* 合同 */
				code:'',
				action: '/api/v1/Common/fileUploader',
				header:{'Authorization':'Bearer '+ this.http.getToken()},
				contract:[]
			}
		},
		methods: {
			/* 删除塔吊 */
			del(index){
				this.equipmentList.splice(index,1)
			},
			/* 输入框 */
			input(e){
				this.$set(this.formList[e.index],'value',e.value);
			},
			/* 选择输入框 */
			choose(e){
				console.log(e);
				this.$set(this.formList[e.index],'value',e.value.label)
				this.$set(this.formList[e.index],'id',e.value.value)
			},
			//上传合同图片
			onPayChange(lists){
				console.log('onListChange', lists[0]);
				this.contract=lists
			},
		}
	}
</script>

<style>
	page{
		background-color: #F8F8F8;
	}
</style>
