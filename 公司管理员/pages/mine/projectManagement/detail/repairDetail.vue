<template>
	<view>
		<view class="u-p-40">
			<view class="u-font-28 text-bold u-m-b-24" style="color: #404E60;">维修记录</view>
			<view style="border-radius: 10rpx;background-color: #F8F9FD;padding: 22rpx 16rpx;">
				<u-input type="textarea" v-model="value" height="319" placeholder="请填写维修记录描述" :disabled="true"></u-input>
			</view>
			
			<view class="u-flex u-flex-wrap u-row-left">
				<block v-for="(item,i) in lists" :key="'i'+i">
					<u-image class="u-m-r-10" :src="item" width="150" height="150" mode="scaleToFill" @click="preview(i)"></u-image>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.fix_id = e.fix_id;
			this.getInfo()
		},
		data() {
			return {
				fix_id:'',
				value:'',
				lists:[]
			}
		},
		methods: {
			getInfo(){
				this.http.get('FixCare/getFixLogDetail',{
					fix_id:this.fix_id
				}).then(res=>{
					this.lists = res.data.imgs.map(v=>{
						return this.http.resourceUrl() + v;
					})
					
					this.value = res.data.desc;
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

</style>
