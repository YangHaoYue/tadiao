<template>
	<view>
		<view class="text-bold u-flex u-row-center" style="color: #0F58FB;padding: 19rpx 0;font-size: 42rpx;">检查项目</view>
		<u-line color="#979797" length="700" border-style="dashed" margin="0rpx 25rpx"/>
		
		<block  v-for="(item,index) in questionList" :key="index">
			<view style="padding: 0 40rpx 0 30rpx;">
				<view class="u-font-28 text-bold u-m-t-24 u-m-b-24">{{item.title}}</view>
				<view class=" u-m-l-26">
					<u-radio-group v-model="item.value" @change="radioGroupChange" :wrap="true" size="32">
						<u-radio 
							@change="radioChange" 
							v-for="(item, index) in item.list" :key="index" 
							label-size="26"
							:name="item.name"
							:disabled="item.disabled"
						>
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</block>
		
		<u-upload style="margin:20rpx 50rpx;" width="160" height="160" :action="http.interfaceUrl()+action" :header="header" :max-count="3" :custom-btn="true" @on-list-change="onChange">
			<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
				<u-image src="../../../../static/paizhao@2x.png" width="74" height="65" :fade="false" mode="scaleToFill"></u-image>
			</view>
		</u-upload>
		
		<u-input class="u-m-l-60 u-m-r-40" v-model="reamrk" type="textarea" :border="true" height="188" :auto-height="true" />
		<u-button type="primary" class="u-m-20">提交</u-button>
		<u-gap bg-color="#ffffff"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				questionList:[
					{title:'1、行程限位器是否灵活有效',list: [{name: '同意'},{name: '不同意'}],value: '同意'},
					{title:'2、高度限位器是否灵活有效',list: [{name: '同意'},{name: '不同意'}],value: '同意'},
					{title:'3、力矩限位器是否灵活有效',list: [{name: '同意'},{name: '不同意'}],value: '同意'},
					{title:'4、各减速机注油润滑及部件磨损情况',list: [{name: '同意'},{name: '不同意'}],value: '同意'},
					{title:'5、大小钢丝绳润滑和断丝情况,神卡是否结实紧固',list: [{name: '同意'},{name: '不同意'}],value: '同意'},
					{title:'6、电箱内电器接线柱是否有烧毁现象,断错相保护器时 候正常',list: [{name: '同意'},{name: '不同意'}],value: '同意'},
					{title:'7、刹车是否正常开合,刹车片磨损情况',list: [{name: '同意'},{name: '不同意'}],value: '同意'},
				],
				action: '/api/v1/Common/fileUploader',
				header:{'Authorization':'Bearer '+ this.http.getToken()},
				lists:[]
			}
		},
		methods: {
			//上传保养照片
			onChange(lists){
				console.log('onListChange', lists[0]);
				this.lists=lists
			},
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				console.log(e);
			}
			
		}
	}
</script>

<style>
	.slot-btn {
		width: 178rpx;
		height: 178rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(244, 245, 246);
		border-radius: 10rpx;
	}
	
	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}
</style>
