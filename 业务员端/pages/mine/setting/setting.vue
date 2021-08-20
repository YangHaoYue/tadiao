<template>
	<view>
		<!-- 头像名称 -->
		<view class="u-flex u-row-center u-p-t-36" style="flex-direction: column;">
			<u-avatar size="150" :src="avatarSrc" :show-level="true" level-icon="../../../static/camera.png" level-bg-color="#ffffff" @click="chooseImg"></u-avatar>
			<view class="u-m-t-30 u-font-28 text-black">{{identity}}</view>
		</view>
		<!-- 个人信息 -->
		<view>
			<view class="u-flex u-row-between u-p-30 u-border-bottom">
				<view>姓名</view>
				<view>{{real_name}}</view>
			</view>
			<view class="u-flex u-row-between u-p-30">
				<view>所属分公司</view>
				<view>{{branch_name}}</view>
			</view>
			<view class="u-flex u-row-between u-p-30 u-border-bottom">
				<view>联系电话</view>
				<view>{{tel_num}}</view>
			</view>
			<!-- 资格证书 -->
			<view class=" u-p-30" v-if="staff_img.length != 0">
				<view class="text-bold u-m-b-30">资格证书</view>
				<view class="u-flex">
					<block v-for="(item,i) in staff_img" :key="i">
						<u-image class="u-m-r-20" :src="http.resourceUrl() + item" height="199" width="199" mode="aspectFit"></u-image>
					</block>
				</view>
			</view>
			<view class=" u-p-30" v-if="id_card_img.length != 0"> 
				<view class="text-bold u-m-b-30">身份证正反面</view>
				<view class="u-flex">
					<block v-for="(item,i) in id_card_img" :key="i">
						<u-image class="u-m-r-20" :src="http.resourceUrl() + item" height="199" width="199" mode="aspectFit"></u-image>
					</block>
				</view>
			</view>
			<view class="u-m-20">
				<u-button type="primary" @click="submit">保存</u-button>
				<u-button class="u-m-t-20" type="primary" @click="exit">退出登录</u-button>
			</view>
			<u-gap bg-color="#fff"></u-gap>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo();
		},
		data() {
			return {
				avatarSrc:'',
				tempFilePath:'',
				identity:'业务员',
				real_name:'李四',
				branch_name:'江西分公司',
				tel_num:'15168308762',
				staff_img:[],
				id_card_img:[]
			}
		},
		methods: {
			getInfo(){
				this.http.get('UserCenter/getRealInfo').then(res=>{
					this.avatarSrc = this.http.resourceUrl() + res.data.avatar;
					this.identity = res.data.identity;
					this.real_name = res.data.real_name;
					this.branch_name = res.data.branch_name;
					this.tel_num = res.data.tel_num;
					this.staff_img = res.data.staff_img;
					this.id_card_img = res.data.id_card_img;
				})
			},
			chooseImg(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log(res);
						this.avatarSrc = res.tempFilePaths[0]
						this.http.uploadFile('Common/fileUploader',res.tempFilePaths[0]).then(res=>{
							this.tempFilePath = res.data.path;
						})
					}
				});
			},
			submit(){
				this.http.post('UserCenter/editAvatar',{
					avatar:this.tempFilePath,
					real_name:this.real_name
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							this.getInfo();
						},1000)
					}
				})
			},
			exit(){
				uni.clearStorageSync();
				window.location.href = 'http://tower.0831.run/html/user'
			}
		}
	}
</script>

<style>

</style>
