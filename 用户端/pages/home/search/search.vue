<template>
	<view class="wrap">
		<view>
			<!-- 搜索 -->
			<u-sticky :enable="sticky" :h5-nav-height="0">
				<u-search class="u-p-10 u-p-b-20 bg-white" placeholder="搜索关键字" input-align="left" :focus="true" v-model="keyword" :action-style="{fontWeight:'bold'}" @custom="clearData" @search="clearData"></u-search>
			</u-sticky>
		</view>
		<u-row class="u-m-t-30" gutter="20" justify="space-between">
			<u-col span="6" class="u-m-b-20" v-for="(item,index) in list" :key="index" @click="setPhone(item)">
				<equipmentItem :item="item" :index="index"></equipmentItem>
			</u-col>
		</u-row>
		<!-- 客服电话 -->
		<u-action-sheet :list="phone" v-model="show" :tips="tips" :cancel-btn="true" @click="makePhoneCall"></u-action-sheet>
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo();
		},
		onReachBottom() {
			if(this.page >= this.last_page) return ;
			this.status = 'loading';
			this.page = ++ this.page;
			setTimeout(() => {
				this.getInfo();
			}, 50)
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		watch: {
			scrollTop(newValue, oldValue) {
				if(newValue>20){
					this.sticky = true
				}else{
					this.sticky = false
				}
			}
		},
		data() {
			return {
				scrollTop:0,
				sticky:false,
				
				
				keyword:'',
				page:1,
				last_page:1,
				list:[],
				/* 加载更多 */
				status: 'loading',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				
				//客服电话
				tips: {
					text: '联系人姓名',
					color: '#333333',
					fontSize: 28
				},
				phone: [{
					text: '19274874583',
					color: '#333333',
					fontSize: 28
				},{
					text: '呼叫客服',
					color: '#333333',
					fontSize: 28
				}],
				show: false
			}
		},
		methods: {
			getInfo(){
				this.http.get('Index/index',{
					keyword:this.keyword,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.towers.tower_data;
							this.last_page = res.data.towers.last_page;
						}else{
							res.data.towers.tower_data.forEach(v=>{
								this.list.push(v)
							})
						}
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			clearData(){
				this.page = 1;
				this.last_page = 1;
				this.status = "loading";
				this.list = [];
				this.getInfo();
			},
			setPhone(item){
				this.phone[0].text = item.media_tel_num;
				this.tips.text = item.media_name;
				this.show = true;
			},
			makePhoneCall(e){
				uni.makePhoneCall({
					phoneNumber:this.phone[0].text
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA);
		min-height: 100vh;
	}
</style>
