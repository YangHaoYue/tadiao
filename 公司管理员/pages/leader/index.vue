<template>
	<view>
		<home v-show="PageCur == 'home'"></home>
		<leader v-show="PageCur == 'mine'"></leader>
		
		
		<view class="cu-bar tabbar bg-white foot">
			<view class="action" @tap="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/index' + [PageCur=='home'?'-selected':''] + '.png'"></image>
				</view>
				<view class="u-font-24" :class="PageCur=='home'?'text-black':'text-gray'">首页</view>
			</view>
			<view class="action" @tap="NavChange" data-cur="mine">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/center' + [PageCur == 'mine'?'-selected':''] + '.png'"></image>
				</view>
				<view class="u-font-24" :class="PageCur=='mine'?'text-black':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onReachBottom(e) {
			uni.$emit('onReachBottom')
		},
		onPageScroll(e) {
			uni.$emit('onPageScroll',e.scrollTop)
		},
		data() {
			return {
				PageCur: 'home',
				scrollTop:0
			}
		},
		methods: {
			NavChange(e){
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
page{
	background-color: #F7F7F7;
}
</style>
