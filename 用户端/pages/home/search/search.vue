<template>
	<view class="wrap">
		<u-search class="u-p-10 u-p-b-20" placeholder="搜索关键字" input-align="left" :focus="true" v-model="keyward" :action-style="{fontWeight:'bold'}" @custom="clearData"></u-search>
		<u-row class="u-m-t-30" gutter="20" justify="space-between">
			<u-col span="6" class="u-m-b-20" v-for="(item,index) in list" :key="index">
				<equipmentItem :item="item" :index="index"></equipmentItem>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:'',
				page:1,
				last_page:1,
				list:[],
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
					}
				})
			},
			clearData(){
				this.page = 1;
				this.last_page = 1;
				this.status = "loading";
				this.list = [];
				this.getInfo();
			}
		}
	}
</script>

<style scoped>
	page{
		background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA);
	}
</style>
