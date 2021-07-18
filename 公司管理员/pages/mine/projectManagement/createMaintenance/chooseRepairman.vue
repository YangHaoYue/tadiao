<template>
	<view>
		<view class="bg-white u-p-10 u-p-l-30">
			<u-search class="u-p-10" placeholder="搜索关键字" input-align="left" :focus="true" v-model="keyward" :action-style="{fontWeight:'bold'}"></u-search>
		</view>
		<block v-for="(item,index) in list" :key="index">
			<view class="u-flex u-row-between u-col-center bg-white u-m-t-20" style="padding: 20rpx 30rpx;">
				<view class="u-flex">
					<u-avatar :src="http.resourceUrl() + item.avatar" size="98"></u-avatar>
					<view class="u-m-l-16 u-font-24" style="color: #666666;">{{item.name}}</view>
				</view>
				<view class="u-font-24" style="color: #1058FB;" @click="back(item)">选择</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		onLoad() {
			
		},
		data() {
			return {
				keyward:'',
				page:1,
				last_page:1,
				list:[]
			}
		},
		methods: {
			getFixerForFix() {
				this.http.get('Order/getFixerForFix', {
					keyward: this.keyward
				}).then(res => {
					if (res.code == 1000) {
						if (this.list.length == 0) {
							this.list = res.data.fixer_data;
							this.last_page = res.data.last_page;
						} else {
							res.data.fixer_data.forEach(v => {
								this.list.push(v)
							})
						}
					}
				})
			},
			back(item){
				uni.$emit('fixer',{data:item})
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F5F6FA;
	}
</style>
