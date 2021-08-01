<template>
	<view>
		<!-- 项目信息 -->
		<view class="u-flex u-p-l-30 u-p-t-14 u-p-b-14 u-font-28" style="color: #666666;">
			<text class="cuIcon-album u-font-32 u-m-r-10"></text>项目信息
		</view>
		<view class="u-p-l-50 u-p-r-20 bg-white" style="border-radius: 10rpx;">
			<u-form :model="model" ref="uForm" :errorType="errorType">
				<u-form-item :label-style="labelStyle" :required="true" label-width="120" :label-position="labelPosition" label="项目名称" prop="project_name">
					<u-input :border="border" placeholder="请输入项目名称" v-model="model.project_name" type="text"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="true" right-icon="arrow-right" :label-position="labelPosition" label="地图定位" prop="location" label-width="150">
					<u-input :border="border" :disabled="true" v-model="model.address" placeholder="请选择定位" @click="chooseLocation"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="true" :label-position="labelPosition" label="施工单位" prop="construction_name">
					<u-input :border="border" type="text" v-model="model.construction_name" placeholder="请输入塔吊使用方单位名称"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="false" :label-position="labelPosition" label="项目的建设单位" prop="developer_name">
					<u-input :border="border" type="text" v-model="model.developer_name" placeholder="请输入项目的建设单位"></u-input>
				</u-form-item>
				<u-form-item :label-style="labelStyle" :required="true" :label-position="labelPosition" label="塔机型号及数量" prop="list">
					<view>
						<block v-for="(item,j) in model.list" :key="j">
							<view class="u-flex u-m-t-10 u-m-b-10">
								<view class="u-flex" style="border: 1rpx solid #DDDDDD;border-radius: 10rpx;line-height: 1;">
									<view class="u-p-10 u-p-l-15">塔机型号</view>
									<u-input class="u-border-right u-border-left u-p-l-10" v-model="item.type" placeholder="请输入塔机型号"/>
									<view class="u-p-10 u-p-l-15">数量</view>
									<u-input class="u-border-right u-p-l-10" v-model="item.count" placeholder="请输入数量"/>
								</view>
								<u-icon v-if="j != 0" class="u-m-l-10" name="minus-circle" color="#0F58FB" size="52rpx" @click="deleteEquipment(j)"></u-icon>
								<view v-else class="bg-white u-m-l-24" style="height: 52rpx;width: 52rpx;"></view>
							</view>
						</block>
						<view class="u-flex u-font-24 add u-row-center" @click="addNewEquipment">
							<u-icon class="u-m-8" name="plus" color="#0F58FB" size="24" label="添加型号" label-color="#0F58FB" label-size="22"></u-icon>
						</view>
					</view>
				</u-form-item>
			</u-form>
		</view>
		<!-- 备注 -->
		<view class="u-flex u-p-l-30 u-p-t-14 u-p-b-14 u-font-28" style="color: #666666;">
			<u-icon name="edit-pen" size="32" class="u-m-r-10"></u-icon>备注
		</view>
		<view class="u-p-l-50 u-p-40 bg-white" style="border-radius: 10rpx;">
			<u-input v-model="model.remark" type="textarea" :border="true" height="184" :auto-height="true" />
		</view>
		<!-- 联系人 -->
		<view class="u-flex u-p-l-30 u-p-t-14 u-p-b-14 u-font-28" style="color: #666666;">
			<text class="cuIcon-peoplelist u-font-32 u-m-r-10"></text>联系人
		</view>
		<view class="u-p-l-50 u-p-r-40 bg-white" style="border-radius: 10rpx;">
			<u-form :model="model" ref="uForm" :errorType="errorType">
				<block v-for="(item,i) in model.connectList" :key="i">
					<view class="u-flex u-row-between u-p-t-20 u-p-b-20 u-border-bottom">
						<view>联系人{{i+1}}</view>
						<u-icon name="trash" size="35" @click="deleteConnect(i)" v-if="i>0"></u-icon>
					</view>
					<u-form-item :label-style="labelStyle" :required="true" label-width="120" :label-position="labelPosition" label="联系人">
						<u-input :border="border" placeholder="请输入联系人的姓名" v-model="item.media_name" type="text"></u-input>
					</u-form-item>
					<u-form-item :label-style="labelStyle" :required="true" :label-position="labelPosition" label="联系电话">
						<u-input :border="border" type="number" v-model="item.media_tel_num" placeholder="请输入联系人的手机号码"></u-input>
					</u-form-item>
				</block>
			</u-form>
			<view class="u-p-20 u-flex u-row-center" @click="addConnect">
				<u-icon name="plus-circle" size="44" color="#0F58FB" label="添加联系人" label-color="#0F58FB" label-size="28"></u-icon>
			</view>
		</view>
		
		<u-button class="u-m-30 u-m-t-60" type="primary" @click="submit">立即提交</u-button>
		
		<u-gap height="60" bg-color="#F8F8F8"></u-gap>
		<!-- modal弹窗 -->
		<u-popup v-model="showModal" mode="center" :mask-close-able="false" border-radius="8" :closeable="false" width="546" height="530">
			<view class="u-p-60 u-p-b-40 u-flex" style="flex-direction: column;">
				<u-icon name="checkmark-circle-fill" size="100" color="#0F58FB" label="等待审核" label-color="#333333" label-size="30" label-pos="bottom" margin-top="20"></u-icon>
				<view class="u-m-t-40 u-font-24 text-gray">预计1-3个工作日，如经审核认定您为本项目的第一位信息提供者，则将有业务员联系您，并确认您为本项目的信息员。</view>
				<u-button class="u-m-t-50" style="width: 100%;" size="medium" type="primary" @click="back">关闭</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			if(e.project_id){
				this.project_id = e.project_id;
				this.getProjectEditInfo()
			}
		},
		onShow() {
			uni.$on('address',(data)=>{
				console.log(data);
				this.model.latitude = data.latitude;
				this.model.longitude = data.longitude;
				this.model.address = /* data.address + */data.location;
				this.model.area_code = data.area_code;
				this.model.location = data.location;
				uni.$off('addresss')
			})
		},
		data() {
			return {
				border:false,
				labelStyle:{fontSize: '28rpx',fontWeight: 'bold'},
				labelPosition: 'top',
				codeTips: '',
				errorType: ['message','border-bottom'],
				
				project_id:'',
				model:{
					project_name:'',
					address:'',
					location:'',
					area_code:'',
					longitude:'',
					latitude:'',
					construction_name:'',
					developer_name:'',
					list:[{
						type:'',
						count:''
					}],
					remark:'',
					connectList:[{
						media_name:'',
						media_tel_num:''
					}]
				},
				//选择地区
				selectMapShow:false,
				//modal弹窗
				showModal:false
			}
		},
		methods: {
			getProjectEditInfo(){
				this.http.get('project/getProjectEditInfo',{
					project_id:this.project_id
				}).then(res=>{
					if(res.code == 1000){
						this.model.project_name = res.data.project_name;
						this.model.construction_name = res.data.construction_name;
						this.model.developer_name = res.data.developer_name;
						this.model.list = res.data.tower_types;
						this.model.connectList = res.data.medias;
						this.model.remark = res.data.remark;
						
						
						this.model.address = res.data.address;
						this.model.longitude = res.data.longitude;
						this.model.latitude = res.data.latitude;
						this.model.location = res.data.address;
						this.model.area_code = res.data.area_code;
					}
				})
			},
			//地图定位
			chooseLocation(){
				uni.navigateTo({url: 'getaddress'});
			},
			//增加塔机机型
			addNewEquipment(){
				this.model.list.push({
						type:'',
						count:''
					})
			},
			//删除机型
			deleteEquipment(j){
				this.model.list.splice(j,1);
			},
			//增加联系人
			addConnect(){
				this.model.connectList.push({
						media_name:'',
						media_tel_num:''
					})
			},
			//删除联系人
			deleteConnect(i){
				this.model.connectList.splice(i,1);
			},
			addProject(){
				this.http.post('project/addProject',{
					project_name:this.model.project_name,
					area_code:this.model.area_code,
					longitude:this.model.longitude,
					latitude:this.model.latitude,
					address:this.model.location,
					construction_name:this.model.construction_name,
					developer_name:this.model.developer_name,
					remark:this.model.remark,
					tower_types:this.model.list,
					medias:this.model.connectList
				}).then(res=>{
					if(res.code == 1000){
						this.showModal = true;
					}else{
						this.$u.toast(res.msg);
					}
				})
			},
			editProject(){
				this.http.post('project/editProject',{
					project_id:this.project_id,
					area_code:this.model.area_code,
					longitude:this.model.longitude,
					latitude:this.model.latitude,
					address:this.model.location,
					project_name:this.model.project_name,
					construction_name:this.model.construction_name,
					developer_name:this.model.developer_name,
					remark:this.model.remark,
					tower_types:this.model.list,
					medias:this.model.connectList
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
				if(this.project_id){
					this.editProject();
				}else{
					this.addProject();
				}
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
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
