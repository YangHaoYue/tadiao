<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<u-card :title="item.title" title-size="24" title-color="#666666" :border="false"
			 :sub-title="item.subTitle" sub-title-size="28" :sub-title-color="item.subTitleColor" :isBold="true"
			 @click="toDetail(item.id)">
				<view class="u-flex u-row-between" slot="body">
					<view class="text-bold u-font-28 text-black">{{item.project_name}}</view>
				</view>
				<view class="u-flex u-row-between" slot="foot">
					<view class="u-flex u-font-24" style="color: #666666;">
						合同协调人：<u-image class="u-m-r-10" shape="circle" height="56rpx" width="56rpx" :src="http.resourceUrl()+item.handler_data.avatar"/>{{item.handler_data.name}}
					</view>
				</view>
			</u-card>
		</block>
		<!-- 加载更多 -->
		<view class="u-m-t-20 u-m-b-20" >
			<u-loadmore :status="status"/>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.staff_id = e.staff_id
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
		data() {
			return {
				staff_id:'',
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
			}
		},
		methods: {
			getInfo(){
				this.http.get('Manager/staffProjectList',{
					staff_id:this.staff_id,
					page:this.page
				}).then(res=>{
					if(res.code == 1000){
						if(this.list.length == 0){
							this.list = res.data.project_data.map(v=>{
								return this._format(v)
							});
							this.last_page = res.data.last_page;
						}else{
							res.data.project_data.forEach(v=>{
								this.list.push(this._format(v))
							})
						}
						
						if(this.page >= this.last_page) this.status = 'nomore';
						else this.status = 'loadmore';
					}
				})
			},
			claerData(){
				this.page = 1;
				this.last_page = 1;
				this.list = [];
				this.status = "loading"
				this.getInfo();
			},
			_format(e){
				//1=>待跟进,2=>跟进中,3=>已成交,6=>已结束.
				let subTitle = '';
				let subTitleColor = '';
				switch(e.status){
					case 0:
						subTitle = '审核中';
						subTitleColor = '#105CFB';
						break;
					case 1:
						subTitle = '待跟进';
						subTitleColor = '#FE5E10';
						break;
					case 2:
						subTitle = '跟进中';
						subTitleColor = '#2DA016';
						break;
					case 3:
						subTitle = '已成交';
						subTitleColor = '#2DA016';
						break;
					case 6:
						subTitle = '已结束';
						subTitleColor = '#FE5E10';
						break;
				}
				return{
					id:e.id,
					subTitle:subTitle,
					subTitleColor:subTitleColor,
					project_name:e.project_name,
					title:"创建时间：" + e.created_at,
					address:e.address,
					provider_data:e.provider_data,
					handler_data:e.handler_data,
					lock_arr:e.lock_arr,
				}
			},
			toDetail(project_id){
				uni.navigateTo({url: '/pages/mine/projectClues/detail/detail?project_id='+project_id});
			},
		}
	}
</script>

<style scoped>
	page{
		background-color: #F8F8F8;
	}
</style>
