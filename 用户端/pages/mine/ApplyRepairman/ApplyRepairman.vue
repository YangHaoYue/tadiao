<template>
	<view>
		<view class="bg u-flex u-row-between">
			<view class="text-bold u-font-43 text-white">申请成为维修员</view>
			<u-image src="" width="160" height="180" :fade="false"></u-image>
		</view>
		<view class="bg-white" style="border-radius: 53rpx 53rpx 0 0 ;padding: 37rpx 57rpx 0 35rpx;transform: translateY(-50rpx);">
			<u-form>
				<u-form-item :label-style="labelStyle" :required="false" right-icon="arrow-right" label-position="top" label="所属公司(本选项普通用户可不选)" label-width="150">
					<u-input :border="border" :disabled="true" v-model="model.companie" placeholder="请选择公司" @click="selectShow = true"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" label-position="top" label="上传资格证书" label-width="150">
					<u-upload width="160" height="160" :action="http.interfaceUrl()+action" @on-list-change="onQualificationChange" :max-count="9"></u-upload>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" label-position="top" label="上传身份证正反面" label-width="150">
					<u-upload width="160" height="160" :action="http.interfaceUrl()+action" upload-text="身份证正面" @on-list-change="onPositiveChange" :max-count="1"></u-upload>
					<u-upload width="160" height="160" :action="http.interfaceUrl()+action" upload-text="身份证反面" @on-list-change="onBackChange" :max-count="1"></u-upload>
				</u-form-item>
			</u-form>
		</view>
		<u-button type="primary" class="u-m-30" style="margin-bottom: 0;transform: translateY(-50rpx);" :disabled="applyBtn">提交</u-button>
		<u-select mode="single-column" confirm-color="#0F58FB" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
	</view>
</template>

<script>
	export default {
		computed: {
			applyBtn() {
				let bool = true;
				if(this.model.companie && this.model.qualification && this.model.positive && this.model.back){
					bool = false;
				}
				return bool
			}
		},
		data() {
			return {
				border:false,
				action: '/api/v1/Common/fileUploader',
				labelStyle:{fontSize: '28rpx',fontWeight: 'bold'},
				
				model:{
					companie:'',
					qualification:'',
					positive:'',
					back:''
				},
				//选择所属公司
				selectShow:false,
				//公司列表
				selectList: [
					{
						value: '实体店铺',
						label: '实体店铺'
					},
					{
						value: '工作室',
						label: '工作室'
					},
					{
						value: '其他',
						label: '其他'
					}
				],
			}
		},
		methods: {
			// 选择商公司回调
			selectConfirm(e) {
				this.model.companie = '';
				e.map((val, index) => {
					this.model.companie += this.model.companie == '' ? val.label : '-' + val.label;
				})
			},
			//上传资格证书
			onQualificationChange(lists){
				console.log('onListChange', lists[0]);
				this.model.qualification=lists;
			},
			//上传身份证正反面
			onPositiveChange(lists){
				console.log('onListChange', lists[0]);
				this.model.positive=lists
			},
			onBackChange(lists){
				console.log('onListChange', lists[0]);
				this.model.back=lists
			},
		}
	}
</script>

<style>
	.bg{
		background: -webkit-linear-gradient(right,#1B91FA,#0F58FB);
		width: 100%;
		height: 258rpx;
		padding: 0rpx 70rpx 60rpx 50rpx;
		font-size: 43rpx;
	}
</style>
