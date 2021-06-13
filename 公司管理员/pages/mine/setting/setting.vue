<template>
	<view>
		<!-- 头像名称 -->
		<view class="u-flex u-row-center u-p-t-36" style="flex-direction: column;">
			<u-avatar size="150" :src="avatarSrc" :show-level="true" level-icon="../../../static/camera.png" level-bg-color="#ffffff"></u-avatar>
			<view class="u-m-t-30 u-font-28 text-black">{{position}}</view>
		</view>
		<!-- 个人信息 -->
		<view>
			<view class="u-flex u-row-between u-p-30 u-border-bottom">
				<view>姓名</view>
				<view>{{name}}</view>
			</view>
			<view class="u-flex u-row-between u-p-30">
				<view>所属分公司</view>
				<view>{{companie}}</view>
			</view>
			<view class="u-flex u-row-between u-p-30 u-border-bottom">
				<view>联系电话</view>
				<view>{{phone}}</view>
			</view>
			<!-- 资格证书 -->
			<view class="u-flex u-row-between u-p-30">
				<view class="text-bold u-m-b-30">资格证书</view>
				<view></view>
			</view>
			<view class="u-flex u-row-between u-p-30">
				<view class="text-bold u-m-b-30">身份证正反面</view>
				<view></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarSrc:'',
				position:'业务员',
				name:'李四',
				companie:'江西分公司',
				phone:'15168308762'
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
