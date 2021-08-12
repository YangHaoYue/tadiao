<template>
	<view>
		<view class="text-bold u-flex u-row-center" style="color: #0F58FB;padding: 19rpx 0;font-size: 42rpx;">检查项目</view>
		<u-line color="#979797" length="700" border-style="dashed" margin="0rpx 25rpx"/>
		
		<block  v-for="(item,index) in questionList" :key="index">
			<view style="padding: 0 40rpx 0 30rpx;">
				<view class="u-font-28 text-bold u-m-t-24 u-m-b-24">{{index+1}}、{{item.title}}</view>
				<view class=" u-m-l-26">
					<u-radio-group v-model="item.value" @change="radioGroupChange" :wrap="true" size="32">
						<u-radio 
							@change="radioChange" 
							v-for="(item, index) in item.answers" :key="index" 
							label-size="26"
							:name="item.text">
							{{item.text}}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</block>
		
		<u-upload style="margin:20rpx 50rpx;" width="160" height="160" :action="http.interfaceUrl()+action" :header="header" :max-count="9" :custom-btn="true" @on-list-change="onChange">
			<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
				<u-image src="../../../../static/paizhao@2x.png" width="74" height="65" :fade="false" mode="scaleToFill"></u-image>
			</view>
		</u-upload>
		
		<u-input class="u-m-l-40 u-m-r-40" v-model="remark" type="textarea" :border="true" height="188" :auto-height="true" />
		<u-button type="primary" class="u-m-20" @click="addCareLog">提交</u-button>
		<u-gap bg-color="#ffffff"></u-gap>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.tower_id = e.tower_id;
			this.getCareTitles();
		},
		data() {
			return {
				tower_id:'',
				questionList:[],
				action: 'Common/fileUploader',
				header:{'Authorization':'Bearer '+ this.http.getToken()},
				lists:[],
				remark:''
			}
		},
		methods: {
			getCareTitles(){
				this.http.get('FixCare/getCareTitles',{}).then(res=>{
					this.questionList = res.data.map(v=>{
						return{
							title:v.TITLE,
							answers:v.ANSWERS,
							value:''
						}
					});
					console.log(this.questionList);
				})
			},
			addCareLog(){
				let img=[]
				this.lists.map(item=>{
					if(item.response&&item.response.code==1000){
						img.push(item.response.data.path);
					}else if(!item.error&&item.progress==100){
						img.push(item.url);
					}
				});
				let answerList = this.questionList.map((v,index)=>{
					let answer = '';
					for (let i = 0; i < v.answers.length; i++) {
						if(v.value == v.answers[i].text) {
							answer = i;
						}
					}
					return{
						key:index,
						answer:answer
					}
				})
				this.http.post('FixCare/addCareLog',{
					tower_id:this.tower_id,
					desc:this.remark,
					imgs:img,
					answers:answerList
				}).then(res=>{
					this.$u.toast(res.msg);
					if(res.code == 1000){
						setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							});
						},1500)
					}
				})
			},
			//上传保养照片
			onChange(lists){
				console.log('onListChange', lists[0]);
				this.lists = lists
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
