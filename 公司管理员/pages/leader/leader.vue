<template>
	<view>
		<view class="u-p-30 u-font-32 text-bold" style="color: #404E60;padding-left: 27rpx;background-color: #F3F3F3;">
			数据统计
		</view>
		<view class="u-p-30" style="padding-top: 0 !important;">
			<u-grid :col="2" :border="false" align="left">
				<u-grid-item class="u-border-right u-border-bottom u-p-l-30">
					<view class="grid-text" style="margin-right: auto;">应跟踪线索数(个)</view>
					<view class="value u-m-t-20" style="margin-right: auto;">{{business_data.project_count}}</view>
				</u-grid-item>
				<u-grid-item class="u-border-bottom" style="padding-left: 20rpx;">
					<view class="grid-text" style="margin-right: auto;">当前执行项目数(个)</view>
					<view class="value u-m-t-20" style="margin-right: auto;">{{business_data.order_count}}</view>
				</u-grid-item>
				<u-grid-item class="u-border-right u-p-l-30 u-border-bottom">
					<view class="grid-text" style="margin-right: auto;">分公司数(个)</view>
					<view class="u-flex u-row-between u-m-t-10 u-m-b-10" style="width: 100%;margin-right: 20rpx;">
						<view class="value" style="margin-right: auto;">{{business_data.branch_count}}</view>
						<view class="u-font-24" style="color: #0F58FB;" @click="todetail">查看详情</view>
					</view>
					<u-button type="primary" size="mini" style="margin-left: 0;" @click="toNew">新增分公司</u-button>
				</u-grid-item>
				<u-grid-item class="u-border-bottom" style="padding-left: 20rpx;">
					<view class="grid-text u-font-28" style="margin-right: auto;">当月订单月租金总金额(元)</view>
					<view class="value u-m-t-20" style="margin-right: auto;">￥{{business_data.month_total_amount}}</view>
				</u-grid-item>
				<u-grid-item class="u-border-right u-border-bottom u-p-l-30">
					<view class="grid-text" style="margin-right: auto;">当月收款总额(元)</view>
					<view class="value u-m-t-20" style="margin-right: auto;">{{business_data.month_paid_amount}}</view>
				</u-grid-item>
				<u-grid-item class="u-border-bottom" style="padding-left: 20rpx;">
					<view class="grid-text" style="margin-right: auto;">上月收款总额(元)</view>
					<view class="value u-m-t-20" style="margin-right: auto;">{{business_data.last_month_paid_amount}}</view>
				</u-grid-item>
				<u-grid-item class="u-border-right u-p-l-30">
					<view class="grid-text" style="margin-right: auto;">未付款总额(元)</view>
					<view class="value u-m-t-20" style="margin-right: auto;">￥{{business_data.unpaid_amount}}</view>
				</u-grid-item>
				<u-grid-item style="padding-left: 20rpx;">
					<view class="grid-text" style="margin-right: auto;">本年收款总额(元)</view>
					<view class="value u-m-t-20" style="margin-right: auto;">￥{{business_data.paid_amount}}</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getInfo()
		},
		data() {
			return {
				business_data:{
					project_count:0,
					order_count:0,
					branch_count:0,
					month_total_amount:"0",
					month_paid_amount:0,
					last_month_paid_amount:0,
					unpaid_amount:"0",
					paid_amount:0
				}
			}
		},
		methods: {
			getInfo(){
				this.http.get('Manager/statistics').then(res=>{
					this.business_data = res.data
				})
			},
			toNew(){
				uni.navigateTo({url: 'createC/createC'});
			},
			todetail(){
				uni.navigateTo({url: 'detail/detail'});
			}
		}
	}
</script>

<style>
	.grid-text{
		color: #838383;
		line-height: 1.5;
	}
	.value{
		font-size: 42rpx;
		font-weight: bold;
	}
</style>
