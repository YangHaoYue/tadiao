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
			<!-- <view class="u-flex u-row-between u-p-30">
				<view>所属分公司</view>
				<view>{{branch_name}}</view>
			</view>
			<view class="u-flex u-row-between u-p-30 u-border-bottom">
				<view>联系电话</view>
				<view>{{tel_num}}</view>
			</view> -->
			<view class="u-m-20">
				<u-button type="primary" @click="submit">保存</u-button>
			</view>
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
					avatar:this.tempFilePath
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

</style>
