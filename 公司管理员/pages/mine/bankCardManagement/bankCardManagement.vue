<template>
	<view class="u-m-31">
		<view class="u-flex u-row-between bankCard" :class="item.color" v-for="(item,index) in list" :key="index" @tap="edit(item.id)">
			<view class="text-white text-bold">
				<view class="u-font-28">{{item.bank_name}}</view>
				<view style="font-size: 42rpx;line-height: 1.5;">{{item.bankcard_num}}</view>
			</view>
			<view @tap.stop="del(item.id)">
				<u-icon name="trash" size="40" color="#ffffff" ></u-icon>
			</view>
		</view>
		<view class="u-flex u-row-center bankCard" :class="list.length>6?'u-m-t-30':'fixed'" style="border: 1rpx #979797 dashed;padding: 27rpx;" @click="addBankCard">
			<u-icon name="plus" color="#0F58FB" size="26" label="添加银行卡" label-color="#333333"></u-icon>
		</view>
		<u-gap bg-color="#ffffff"></u-gap>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			if(e.isSelect){
				this.isSelect = true;
			}
		},
		onShow() {
			this.getInfo();
		},
		/* onReachBottom() {
			if(this.page >= this.last_page) return ;
			this.status = 'loading';
			this.page = ++ this.page;
			setTimeout(() => {
				this.getInfo();
			}, 50)
		}, */
		data() {
			return {
				isSelect:false,
				
				list:[],
				page:1,
				last_page:1
			}
		},
		methods: {
			getInfo(){
				this.http.get('withdraw/bankcardLists',{},true).then(res=>{
					this.list = res.data;
					this.list.map(v=>{
						this.$set(v,'color',this.colorRandom())
					})
					/* if(this.list.length == 0){
						this.last_page = res.data.last_page;
					}else{
						res.data.forEach(v=>{
							this.list.push(v)
						})
					} */
					/* 
					if(this.page >= this.last_page) this.status = 'nomore';
					else this.status = 'loadmore'; */
				})
			},
			addBankCard(){
				uni.navigateTo({url: 'addBankCard/addBankCard'});
			},
			edit(id){
				if(this.isSelect){
					uni.$emit('brank_id',{brank_id:id})
					uni.navigateBack({
						delta: 1
					});
				}else{
					uni.navigateTo({url: 'addBankCard/addBankCard?bankcard_id=' + id});
				}
			},
			//删除
			del(id){
				this.http.post('withdraw/delBankcard',{
					bankcard_id:id
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							this.getInfo();
						},1000)
					}
				})
			},
			colorRandom() {
				let number = this.$u.random(1, 3);
				let color = ''
				switch(number){
					case 1: 
						color = 'success'
						break;
					case 2:
						color = 'primary'
						break;
					case 3:
						color = 'red'
						break;
				}
				console.log(color);
				console.log(number);
				return color
			}
		}
	}
</script>

<style scoped>
	.bankCard{
		padding: 29rpx 29rpx 21rpx 66rpx;
		border-radius: 17rpx;
		margin: 20rpx 31rpx;
	}
	.primary{
		background: -webkit-linear-gradient(left,#0F58FB,#1C96FA);
		box-shadow: 0 2px 4px 0 #0F58FB;
	}
	.red{
		background: -webkit-linear-gradient(left,#F73535,#FA5A31);
		box-shadow: 0 2px 4px 0 #F95331;
	}
	.success{
		background: -webkit-linear-gradient(left,#009F90,#0BBDBA);
		box-shadow: 0 2px 4px 0 #09B8B3;
	}
	.fixed{
		position: absolute;
		bottom: 30rpx;
		right: 0;
		left: 0;
	}
</style>
