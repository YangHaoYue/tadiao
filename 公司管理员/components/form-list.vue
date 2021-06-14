<template>
	<view>
		<view :class="formPadding" class="bg-white u-flex u-row-between solid-bottom" v-if="item.type=='input'">
			<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">{{item.name}}<text class="u-type-error" v-if="item.isImport">*</text></view>
			<u-input v-model="item.value" type="text" input-align="right" :auto-height="true" @input="handleInput" :type="item.inputType" :placeholder="item.placeholder" placeholder-style="color:#999999;font-size:28rpx;"/>
			<!-- <input adjust-position="true" class="u-text-right" :value="item.value" @input="handleInput" :maxlength="item.length||140" :type="item.inputType" :placeholder="item.placeholder" /> -->
		</view>
		<view :class="formPadding" class="bg-white u-flex u-row-between solid-bottom" v-if="item.type=='input2'">
			<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">{{item.name}}<text class="u-type-error" v-if="item.isImport">*</text></view>
			<u-input v-model="item.value" type="text" input-align="right" :auto-height="true" @blur="handleInput" :placeholder="item.placeholder" placeholder-style="color:#999999;font-size:28rpx;"/>
			<!-- <input adjust-position="true" class="u-text-right" :value="item.value" @blur="handleInput" :maxlength="item.length||140" :type="item.inputType" :placeholder="item.placeholder" /> -->
		</view>
		<view :class="formPadding" class="bg-white solid-bottom" v-else-if="item.type=='textarea'">
			<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">{{item.name}}<text class="u-type-error" v-if="item.isImport">*</text></view>
			<u-input v-model="item.value" type="textarea" :height="210" :auto-height="true" @input="handleInput" :placeholder="item.placeholder" placeholder-style="color:#999999;font-size:28rpx;"/>
			<!-- <input adjust-position="true" style="height: 210rpx;" :value="item.value" @input="handleInput" :maxlength="item.length||140" type="textarea" :placeholder="item.placeholder" /> -->
		</view>
		<view v-else-if="item.type=='navPicker'" @click="navigator(item.url,item.disable)" :class="formPadding" class="bg-white u-flex u-row-between solid-bottom">
			<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">{{item.name}}<text class="u-type-error" v-if="item.isImport">*</text></view>
			<view class="u-flex">
				<view class="u-m-r-15" :class="item.value?'text-black':'text-gray'">{{item.value||item.placeholder}}</view>
				<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
			</view>
		</view>
		<block v-else-if="item.type=='datePicker'">
			<view :class="formPadding" class="bg-white u-flex u-row-between solid-bottom" @click="showDate=true">
				<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">{{item.name}}<text class="u-type-error" v-if="item.isImport">*</text></view>
				<view class="u-flex">
					<view class="u-m-r-15" :class="item.value?'text-black':'text-gray'">{{item.value||item.placeholder}}</view>
					<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
				</view>
			</view>
			<u-calendar v-model="showDate" btn-type="warning" active-bg-color="#0F58FB" mode="date" @change="dateChange" :min-date="toDay" max-date="2050-12-31"></u-calendar>
		</block>
		<block v-else-if="item.type=='picker'">
			<view :class="formPadding" class="bg-white u-flex u-row-between solid-bottom" @click="showList=true">
				<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">{{item.name}}<text class="u-type-error" v-if="item.isImport">*</text></view>
				<view class="u-flex">
					<view class="u-m-r-15" :class="item.value?'text-black':'text-gray'">{{item.value||item.placeholder}}</view>
					<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
				</view>
			</view>
			<u-select v-model="showList" confirmColor="#0F58FB" mode="single-column" :list="item.list" @confirm="choosePay"></u-select>
		</block>
		<block v-else-if="item.type=='switch'">
			<view :class="formPadding" class="bg-white u-flex u-row-between solid-bottom">
				<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">{{item.name}}<text class="u-type-error" v-if="item.isImport">*</text></view>
				<u-switch v-model="item.value" active-color="#0F58FB" active-value="1" inactive-value="0" size="40"></u-switch>
			</view>
		</block>
		<block v-else-if="item.type=='timePicker'">
			<view :class="formPadding" class="bg-white u-flex u-row-between solid-bottom u-col-center" @click="showTime=true">
				<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">{{item.name}}<text class="u-type-error" v-if="item.isImport">*</text></view>
				<view class="u-flex">
					<view class="u-m-r-15" :class="item.value?'text-black':'text-gray'">{{item.value||item.placeholder}}</view>
					<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
				</view>
			</view>
			<u-picker mode="time" v-model="showTime" start-year="2021" :default-time="item.value" :params="params" confirm-color="#0F58FB" @confirm="timeChange"></u-picker>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			item:Object,
			index:Number,
			toDay:String,
			formPadding:{
				type:String,
				default:"u-p-20 u-p-l-30"
			}
		},
		data() {
			return {
				showDate: false,
				showList:false,
				showTime:false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},
				text:''
			};
		},
		methods:{
			/* 日期 */
			dateChange(e){
				this.$emit('change',{value:e.result,index:this.index})
			},
			/* 时间 */
			timeChange(e){
				console.log(e);
				this.$emit('timeChange',{value:e.year+'-'+e.month+'-'+e.day+'  '+e.hour+':'+e.minute+':'+e.second,index:this.index})
			},
			/* picker选择器 */
			choose(e){
				this.$emit('choose',{value:e[0],index:this.index})
			},
			/* 输入框 */
			handleInput(e){
				console.log(e);
				this.$emit('input',{value:e,index:this.index})
			},
			navigator(Link,disable){
				if(disable) return;
				uni.navigateTo({url: Link});
			}
		}
	}
</script>

<style>
</style>
