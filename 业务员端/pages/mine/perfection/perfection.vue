<template>
	<view>
		<view class="bg u-flex u-row-between">
			<view class="text-bold u-font-43 text-white">资料完善</view>
			<u-image src="@/static/shield.png" width="160" height="180" :fade="false"></u-image>
		</view>
		<view class="bg-white" style="border-radius: 53rpx 53rpx 0 0 ;padding: 37rpx 57rpx 0 35rpx;transform: translateY(-50rpx);">
			<u-form>
				<u-form-item :label-style="labelStyle" :required="true" :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="150" label="姓名" prop="name">
					<u-input placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" label-position="top" label="上传资格证书" label-width="150" :border-bottom="false">
					<u-upload width="200" height="200" :action="http.interfaceUrl()+action" @on-list-change="onQualificationChange" :max-count="9" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
								<u-icon name="plus" size="60" :color="$u.color['lightColor']"></u-icon>
							</view>
					</u-upload>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" label-position="top" label="上传身份证正反面" label-width="150" :border-bottom="false">
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
		<u-button type="primary" class="u-m-30" style="margin-bottom: 0;transform: translateY(-50rpx);"  @click="submit">提交</u-button>
		
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo()
		},
		computed: {
			applyBtn() {
				let bool = true;
				if(this.model.qualification && this.model.positive && this.model.back){
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
					name:'',
					qualification:'',
					positive:'',
					back:''
				}
			}
		},
		methods: {
			getInfo(){
				this.http.get('UserCenter/getRealInfoEditPage').then(res=>{
					if(res.data.status == 1){
						this.http.modal("","审核通过！", false, () => {
							uni.navigateBack({
								delta:1
							})
						})
					}else if(res.data.status == 2){
						this.http.modal("","审核中，请耐心等待！", false, () => {
							uni.navigateBack({
								delta:1
							})
						})
					}else if(res.data.status == 3){
						this.http.modal("","审核未通过，请重新提交！", false, () => {
							this.model.qualification = res.data.staff_img.map(v=>{
								return{
									url:this.http.resourceUrl() + v
								}
							})
							this.model.positive = [{url:this.http.resourceUrl() + res.data.id_card_img[0]}];
							this.model.back = [{url:this.http.resourceUrl() +res.data.id_card_img[1]}];
						})
					}else if(res.data.status == 4){
						this.http.modal("","非法状态,禁止进入页面！", false, () => {
							uni.navigateBack({
								delta:1
							})
						})
					}
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
			submit(){
				let img=[]
				if(this.model.qualification.length != 0){
					this.model.qualification.map(item=>{
						if(item.response&&item.response.code==1000){
							img.push(item.response.data.path);
						}else if(!item.error&&item.progress==100){
							img.push(item.url);
						}
					});
				}
				let scimg=[this.model.positive[0].response.data.path||this.model.positive[0].url,this.model.back[0].response.data.path||this.model.back[0].url]
				
				this.http.post('UserCenter/realInfo',{
					name:this.model.name,
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
