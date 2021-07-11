<template>
	<view>
		<view class="bg u-flex u-row-between">
			<view class="text-bold u-font-43 text-white">申请成为业务员</view>
			<u-image src="@/static/shield.png" width="160" height="180" :fade="false"></u-image>
		</view>
		<view class="bg-white" style="border-radius: 53rpx 53rpx 0 0 ;padding: 37rpx 57rpx 0 35rpx;transform: translateY(-50rpx);">
			<u-form>
				<u-form-item :label-style="labelStyle" :required="false" right-icon="arrow-right" label-position="top" label="所属公司(本选项普通用户可不选)" label-width="150">
					<u-input :border="border" :disabled="true" v-model="model.companie" placeholder="请选择公司" @click="selectShow = true"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" label-position="top" label="上传资格证书" label-width="150" :border-bottom="false">
					<u-upload width="200" height="200" :action="http.interfaceUrl()+action" @on-list-change="onQualificationChange" :max-count="9" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
								<u-icon name="plus" size="60" :color="$u.color['lightColor']"></u-icon>
							</view>
					</u-upload>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" label-position="top" label="上传身份证正反面" label-width="150"  :border-bottom="false">
					<u-upload width="200" height="200" :action="http.interfaceUrl()+action" upload-text="身份证正面" @on-list-change="onPositiveChange" :max-count="1" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<u-image src="@/static/on.png" width="80" height="60"></u-image>
							<view class="u-font-22 u-m-t-15" style="color: #9FA7BC;line-height: 1;">身份证正面</view>
						</view>
					</u-upload>
					<u-upload class="u-m-l-20" width="200" height="200" :action="http.interfaceUrl()+action" upload-text="身份证反面" @on-list-change="onBackChange" :max-count="1" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<u-image src="@/static/off.png" width="80" height="60"></u-image>
							<view class="u-font-22 u-m-t-15" style="color: #9FA7BC;line-height: 1;">身份证反面</view>
						</view>
					</u-upload>
				</u-form-item>
			</u-form>
		</view>
		<u-button type="primary" class="u-m-30" style="margin-bottom: 0;transform: translateY(-50rpx);" :disabled="applyBtn">提交</u-button>
		
		<u-select mode="single-column" confirm-color="#0F58FB" :list="selectList" value-name="id" label-name="branch_name" v-model="selectShow" @confirm="selectConfirm"></u-select>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getBranches();
		},
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
				action: 'Common/fileUploader',
				
				labelStyle:{fontSize: '28rpx',fontWeight: 'bold'},
				
				model:{
					companie:'',
					branch_id:'',
					qualification:'',
					positive:'',
					back:''
				},
				//选择所属公司
				selectShow:false,
				//公司列表
				selectList: [],
			}
		},
		methods: {
			//获取公司列表
			getBranches(){
				this.http.get('auth/getBranches',{},true).then(res=>{
					if(this.selectList.length == 0){
						this.selectList = res.branch_data;
						this.last_page = res.last_page
					}else{
						res.branch_data.map(v=>{
							this.selectList.push(v)
						})
					}
				})
			},
			// 选择公司回调
			selectConfirm(e) {
				this.model.companie = e[0].label;
				this.model.branch_id = e[0].value;
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
			submit(){
				let img=[]
				this.qualification.map(item=>{
					if(item.response&&item.response.code==1000){
						img.push(item.response.data.path);
					}else if(!item.error&&item.progress==100){
						img.push(item.url);
					}
				});
				let scimg=[this.model.positive.response.data.path,this.model.back.response.data.path]
				
				this.http.post('UserCenter/staffApply',{
					type:0,//0=>业务员(默认),1维修员
					branch_id:this.model.branch_id,
					staff_img:img,
					id_card_img:scimg,
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							});
						},1500)
					}
				})
			}
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
	.slot-btn {
		width: 200rpx;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(244, 245, 246);
		border-radius: 22rpx;
		flex-direction: column;
	}
	
	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}
</style>
