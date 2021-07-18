<template>
	<view>
		<view class="bg-white u-flex u-row-between solid-bottom u-p-30" @click="showDate = true">
			<view class="u-flex">
				<view class="u-flex u-font-28 u-m-r-20 text-black" style="width: 175rpx;">首次维保时间</view>
				<view class="u-m-r-15" :class="time?'text-black':'text-gray'">{{time||'请选择首次维保时间'}}</view>
			</view>
			<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
		</view>
		<view class="bg-white u-flex u-row-between solid-bottom u-p-30" @click="toChoose">
			<view class="u-flex">
				<view class="u-flex u-font-28 u-m-r-20 text-black" style="width: 175rpx;">维保员</view>
				<view class="u-m-r-15" :class="fixer_id?'text-black':'text-gray'">{{fixer_name||'请选择维保员'}}</view>
			</view>
			<u-icon name="arrow-right" size="32rpx" color="#999999"></u-icon>
		</view>
		
		<u-button type="primary" class="u-m-30" style="margin-top: 117rpx;">提交</u-button>
		
		<u-calendar v-model="showDate" btn-type="primary" active-bg-color="#0F58FB" mode="date" @change="dateChange" max-date="2050-12-31"></u-calendar>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.tower_ids = e.selectedList;
			this.order_id = e.order_id;
		},
		onShow() {
			uni.$on('fixer',(data)=>{
				this.fixer_id = data.data.id;
				this.fixer_name = data.data.name;
				uni.$off('fixer')
			})
		},
		data() {
			return {
				tower_ids:'',
				showDate:false,
				fixer_id:'',
				fixer_name:'',
				time:''
			}
		},
		methods: {
			dateChange(e){
				console.log(e);
				this.time = e.result
			},
			toChoose(){
				uni.navigateTo({url: 'chooseRepairman'});
			},
			addFix(){
				this.http.post('Order/addFix',{
					tower_ids:this.tower_ids,
					order_id:this.order_id,
					fixer_id:this.fixer_id,
					next_care_at:this.time
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							uni.navigateBack({
								delta: 2
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
