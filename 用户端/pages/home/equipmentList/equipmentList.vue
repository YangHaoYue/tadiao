<template>
	<view class="wrap">
		<u-dropdown ref="uDropdown" activeColor="#0F58FB">
			
			<u-dropdown-item :title="areaName">
				<city-select  @city-change="cityChange"></city-select>
			</u-dropdown-item>
			
			<u-dropdown-item @change="change" v-model="status" title="状态" :options="options1"></u-dropdown-item>
			
			<u-dropdown-item title="价格区间">
				<view class="slot-content">
					<view>价格区间(元)</view>
					<view class="u-flex u-row-around u-m-t-20 u-m-b-30">
						<input class="priceInput round" v-model="min" placeholder="最低价"/>
						<u-line color="#979797" length="33rpx"/>
						<input class="priceInput round" v-model="max" placeholder="最高价"/>
					</view>
					<view class="u-flex u-row-right">
						<u-button class="u-m-10" type="primary" plain @click="closeDropdown" size="medium">重置</u-button>
						<u-button class="u-m-10" type="primary" @click="closeDropdown" size="medium">确定</u-button>
					</view>
				</view>
			</u-dropdown-item>
			
			<u-dropdown-item @change="change" v-model="type" title="机型" :options="options2"></u-dropdown-item>
			
			<u-dropdown-item :title="brand" style="z-index: 9999;">
				<view class="slot-content">
					<view class="item-box">
						<view class="item" :class="[item.active ? 'active' : '']" @tap="tagClick(index)" v-for="(item, index) in tagList" :key="index">
							{{item.label}}
						</view>
					</view>
					<view class="u-flex u-row-right">
						<u-button class="u-m-10" type="primary" plain @click="closeDropdown" size="medium">重置</u-button>
						<u-button class="u-m-10" type="primary" @click="closeDropdown" size="medium">确定</u-button>
					</view>
				</view>
			</u-dropdown-item>
			
		</u-dropdown>
		
		<!-- 列表 -->
		<u-row class="u-p-20 u-m-t-26" gutter="20" justify="space-between">
			<u-col span="6" class="u-m-b-20" v-for="(item,index) in list" :key="index" @click="show = true">
				<equipmentItem :item="item" :index="index"></equipmentItem>
			</u-col>
		</u-row>
		<u-button @click="show = true">ceshi </u-button>
		<!-- 客服电话 -->
		<u-action-sheet :list="phone" v-model="show" :tips="tips" :cancel-btn="true"></u-action-sheet>
	</view>
</template>

<script>
	import citySelect from '@/components/u-city-select.vue';
	export default {
		components:{
			citySelect
		},
		data() {
			return {
				areaName:'地区',
				status: '',
				//价格区间
				min:'',
				max:'',
				type: '2',
				//品牌
				brand:'品牌',
				
				
				
				options1: [{
						label: '全部',
						value: 1,
					},
					{
						label: '可用',
						value: 2,
					},
					{
						label: '租聘中',
						value: 3,
					},
					{
						label: '锁定中',
						value: 4,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
					{
						label: '正常温',
						value: 3,
					},
					{
						label: '加热',
						value: 4,
					},
					{
						label: '极寒风暴',
						value: 5,
					}
				],
				tagList: [{
						label: '琪花瑶草',
						active: true,
					},
					{
						label: '清词丽句',
						active: false,
					},
					{
						label: '宛转蛾眉',
						active: false,
					},
					{
						label: '煦色韶光',
						active: false,
					},
					{
						label: '鱼沉雁落',
						active: false,
					},
					{
						label: '章台杨柳',
						active: false,
					},
					{
						label: '霞光万道',
						active: false,
					}
				],
				list:[
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:0,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:1,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:2,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:0,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					},
					{
						img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
						name:'QTZ80(5512-6)',
						status:0,
						price:'3678.00',
						number:'WE225',
						brand:'马牌',
						time:'三年',
						location:'浙江省 杭州市 西湖区'
					}
				],
				
				
				//客服电话
				tips: {
					text: '19274874583',
					color: '#333333',
					fontSize: 28
				},
				phone: [{
					text: '呼叫',
					color: '#333333',
					fontSize: 28
				}],
				show: false
			}
		},
		methods: {
			//城市选择
			cityChange(e) {
				console.log(e);
				this.areaName = e.area.label;
				this.closeDropdown()
			},
			change(index) {
				this.$u.toast(`点击了第${index}项`);
			},
			//关闭
			closeDropdown() {
				this.$refs.uDropdown.close();
			},
			tagClick(index) {
				this.tagList[index].active = !this.tagList[index].active;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA);
	}
	.slot-content {
		background-color: #FFFFFF;
		padding: 24rpx;
		
		.item-box {
			margin-bottom: 50rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.item {
				border: 1px solid $u-type-primary;
				color: $u-type-primary;
				padding: 8rpx 40rpx;
				border-radius: 100rpx;
				margin-top: 30rpx;
			}
			
			.active {
				color: #FFFFFF;
				background-color: $u-type-primary;
			}
		}
	}
	.priceInput{
		/* border-radius: 100%; */
		background-color: #F4F4F4;
		width: 280rpx;
		height: 54rpx;
		padding: 0rpx 20rpx;
		text-align: center;
	}
</style>
