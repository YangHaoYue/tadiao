<template>
	<view>
		<view class="bg-white u-m-t-20 u-p-25 u-p-t-15 u-p-b-15" style="border-radius: 10rpx;">
			<view class="text-bold u-font-28 u-p-10 text-black u-border-bottom">{{title}}</view>
			<slot name="content">
				<view class="">
					<view class="u-flex u-p-l-25 u-p-t-25 u-row-between" v-for="(item,index) in list" :key="index">
						<view class="text-black u-font-28">{{item.title}}</view>
						<view class="u-flex u-row-right" v-if="item.avatar">
							<u-avatar src="" size="52"></u-avatar>
							<view class="text-black u-font-28 u-m-l-15">{{item.value}}</view>
						</view>
						<view v-else class="text-black u-font-28">{{item.value}}</view>
					</view>
				</view>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"pro-card",
		props:{
			title:{
				type:String,
				default:'标题'
			},
			list:{
				type:Array,
				default () {
					return [{
						title:'合同执行人',
						avatar:'',
						value:''
					}];
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
