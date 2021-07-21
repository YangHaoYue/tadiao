<template>
	<view>
		<view class="text-bold u-flex u-row-center" style="color: #0F58FB;padding: 19rpx 0;font-size: 42rpx;">检查项目</view>
		<u-line color="#979797" length="700" border-style="dashed" margin="0rpx 25rpx"/>
		
		<block  v-for="(item,index) in questionList" :key="index">
			<view style="padding: 0 40rpx 0 30rpx;">
				<view class="u-font-28 text-bold u-m-t-24 u-m-b-24">{{index+1}}、{{item.title}}</view>
				<view class=" u-m-l-26">
					<u-radio-group v-model="item.value" @change="radioGroupChange" :wrap="true" size="32" :disabled="true">
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
		
		<view class="u-flex u-flex-wrap u-row-left" style="margin:20rpx 50rpx;">
			<block v-for="(item,i) in lists" :key="'i'+i">
				<u-image class="u-m-r-10" :src="item" width="150" height="150" mode="scaleToFill" @click="preview(i)"></u-image>
			</block>
		</view>
		
		<u-input class="u-m-l-40 u-m-r-40" v-model="remark" type="textarea" :border="true" height="188" :auto-height="true" :disabled="true" />
		<u-gap bg-color="#ffffff"></u-gap>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.care_id = e.care_id;
			this.getCareTitles();
		},
		data() {
			return {
				care_id:'',
				questionList:[],
				lists:[],
				remark:''
			}
		},
		methods: {
			getCareTitles(){
				this.http.get('FixCare/getCareTitlesAndAnswers',{
					care_id:this.care_id
				}).then(res=>{
					this.questionList = res.data.titles_answers.map(v=>{
						let value = '';
						v.ANSWERS.forEach(k=>{
							if(k.checked){
								value = k.text
							}
						})
						return{
							title:v.TITLE,
							answers:v.ANSWERS,
							value:value
						}
					});
					
					this.lists = res.data.imgs.map(v=>{
						return this.http.resourceUrl() + v;
					})
					
					this.remark = res.data.desc;
				})
			},
			preview(index){
				uni.previewImage({
					current:index,
					urls:this.lists
				})
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
