<template>
	<view class="u-flex u-col-top" style="flex-direction: column;padding-bottom: 78rpx;width: 100%;" :style="'min-height:'+$u.sys().windowHeight+'px;'">
		<view class="u-p-40 u-flex-1" style="margin-bottom: auto;width: 100%;">
			<view class="u-font-28 text-bold u-m-b-24" style="color: #404E60;">跟进记录</view>
			<view style="border-radius: 10rpx;background-color: #F8F9FD;padding: 22rpx 16rpx;">
				<u-input type="textarea" v-model="value" height="319" placeholder="请填写跟进记录描述"></u-input>
			</view>
			<u-upload class="u-m-t-30" width="160" height="160" :action="http.interfaceUrl()+action" :header="header" :max-count="99" @on-list-change="onChange"></u-upload>
		</view>
		<u-button class="u-m-25" style="width: 700rpx;" type="primary" @click="followUp">提交记录</u-button>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.project_id = e.project_id
		},
		data() {
			return {
				project_id:'',
				value:'',
				action: 'Common/fileUploader',
				header:{'Authorization':'Bearer '+ this.http.getToken()},
				lists:[]
			}
		},
		methods: {
			followUp(){
				let img=[]
				this.lists.map(item=>{
					if(item.response&&item.response.code==1000){
						img.push(item.response.data.path);
					}else if(!item.error&&item.progress==100){
						img.push(item.url);
					}
				});
				this.http.post('project/followUp',{
					project_id:this.project_id,
					content:this.value,
					img:img
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
			},
			//上传合同图片
			onChange(lists){
				console.log('onListChange', lists[0]);
				this.lists=lists
			},
		}
	}
</script>

<style>

</style>
