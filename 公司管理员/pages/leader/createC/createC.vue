<template>
	<view>
		<view class="u-p-l-50 u-p-r-20 bg-white" style="border-radius: 10rpx;">
			<u-form :model="model" ref="uForm" :errorType="errorType">
				<u-form-item :label-style="labelStyle" :required="true" label-width="120" :label-position="labelPosition" label="分公司名称" prop="project_name">
					<u-input :border="border" placeholder="请输入分公司名称" v-model="model.branch_name" type="text"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" right-icon="arrow-right" :label-position="labelPosition" label="分公司地址" prop="location" label-width="150">
					<u-input :border="border" :disabled="true" v-model="model.address" placeholder="请选择定位" @click="chooseLocation"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" :label-position="labelPosition" label="详细地址" prop="construction_name">
					<u-input :border="border" type="text" v-model="model.location" placeholder="请输入详细地址"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" :label-position="labelPosition" label="联系人" prop="developer_name">
					<u-input :border="border" type="text" v-model="model.media_name" placeholder="请输入联系人名称"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" :label-position="labelPosition" label="联系电话" prop="developer_name">
					<u-input :border="border" type="text" v-model="model.media_tel_num" placeholder="请输入联系电话"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" right-icon="arrow-right"
					:label-position="labelPosition" label="分公司负责人微信" label-width="150">
					<u-input :border="border" :disabled="true" v-model="model.head" placeholder="请选择分公司负责人" @click="toChoice"></u-input>
				</u-form-item>
			</u-form>
		</view>
		
		<view class="u-flex u-m-l-28 u-m-t-15">
			<u-icon name="info-circle-fill" size="38" color="#0F58FB"></u-icon>
			<view class="u-font-26 u-m-l-10" style="color: #0F58FB;">分公司负责人需提前关注公众号</view>
		</view>
		<view class="u-flex u-m-l-36 u-m-t-15">
			<u-avatar :src=" http.resourceUrl()+ model.avatar" size="82"></u-avatar>
			<view class="u-font-28 u-m-l-20">{{model.head}}</view>
		</view>
		<!-- 分公司负责人列表 -->
		<u-select mode="single-column" confirm-color="#0F58FB" :list="typeList" v-model="typeShow" @confirm="typeConfirm"></u-select>
		
		<u-button class="u-m-30 u-m-t-60" type="primary" @click="submit">立即提交</u-button>
		
		<u-gap height="60" bg-color="#F8F8F8"></u-gap>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			if(e.branch_id){
				uni.setNavigationBarTitle({
					title:'编辑分公司'
				})
				this.branch_id = e.branch_id;
				this.getBranchEditData()
			}
		},
		onShow() {
			uni.$on('address',(data)=>{
				console.log(data);
				this.model.latitude = data.latitude;
				this.model.longitude = data.longitude;
				this.model.address = data.address;
				this.model.area_code = data.area_code
				uni.$off('addresss')
			})
			uni.$on('leader',(data)=>{
				this.model.mng_id = data.data.user_id;
				this.model.avatar = data.data.avatar;
				this.model.head = data.data.name;
				console.log(this.model);
				uni.$off('leader')
			})
		},
		data() {
			return {
				border:false,
				labelStyle:{fontSize: '28rpx',fontWeight: 'bold'},
				labelPosition: 'top',
				codeTips: '',
				errorType: ['message','border-bottom'],
				
				branch_id:'',
				model:{
					branch_name:'',
					address:'',
					longitude:'',
					latitude:'',
					location:'',
					area_code:'',
					
					media_name:'',
					media_tel_num:'',
					wx:'',
					mng_id:"",
					avatar:'',
					head:''
				},
				
				typeShow:false,
				page:1,
				last_page:1,
				typeList:[]
			}
		},
		methods: {
			getBranchEditData(){
				this.http.get('Manager/getBranchEditData',{
					branch_id:this.branch_id
				}).then(res=>{
					if(res.code == 1000){
						this.model.branch_name = res.data.branch_name;
						this.model.media_tel_num = res.data.media_tel_num;
						this.model.media_name = res.data.media_name;
						
						this.model.address = res.data.area_arr.province + res.data.area_arr.city + res.data.area_arr.district
						this.model.location = res.data.address;
						this.model.latitude = res.data.latitude;
						this.model.longitude = res.data.longitude;
						this.model.area_code = res.data.area_code;
						
						this.model.head = res.data.mng_data.name;
						this.model.avatar = res.data.mng_data.avatar;
						this.model.mng_id = res.data.mng_data.id;
					}
				})
			},
			getMngCandi(){
				this.http.get('Manager/getMngCandi',{
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.typeList.length == 0){
							this.typeList = res.data.user_data.map(v=>{
								return{
									value:v.user_id,
									label:v.name,
									extra:v.avatar
								}
							});
							this.last_page = res.data.last_page
						}else{
							res.data.user_data.map(v=>{
								this.typeList.push({
									value:v.user_id,
									label:v.name,
									extra:v.avatar
								})
							})
						}
					}
				})
			},
			//地图定位
			chooseLocation(){
				uni.navigateTo({url: '/pages/mine/projectClues/createNew/map'});
			},
			addProject(){
				this.http.post('Manager/addBranch',{
					branch_name:this.model.branch_name,
					longitude:this.model.longitude,
					latitude:this.model.latitude,
					area_code:this.model.area_code,
					address:this.model.location,
					media_name:this.model.media_name,
					media_tel_num:this.model.media_tel_num,
					mng_id:this.model.mng_id,
				}).then(res=>{
					this.$u.toast(res.msg);
					if(res.code == 1000){
						setTimeout(()=>{
							this.back()
						},1500)
					}
				})
			},
			editProject(){
				this.http.post('Manager/editBranch',{
					branch_id:this.branch_id,
					branch_name:this.model.branch_name,
					longitude:this.model.longitude,
					latitude:this.model.latitude,
					area_code:this.model.area_code,
					address:this.model.location,
					media_name:this.model.media_name,
					media_tel_num:this.model.media_tel_num,
					mng_id:this.model.mng_id,
				}).then(res=>{
					this.$u.toast(res.msg);
					if(res.code == 1000){
						setTimeout(()=>{
							this.back()
						},1500)
					}
				})
			},
			submit(){
				if(this.branch_id){
					this.editProject();
				}else{
					this.addProject();
				}
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			toChoice(){
				uni.navigateTo({url: 'chooseLeader'});
			},
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
	
	.add{
		border: 1rpx solid #0F58FB;
		border-radius: 10rpx;
		line-height: 1;
		padding: 10rpx 15rpx;
		width: 180rpx;
		height: 50rpx;
	}
</style>
