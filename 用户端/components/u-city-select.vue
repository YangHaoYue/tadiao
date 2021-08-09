<template>
	<view>
		<u-tabs v-if="value" :list="genTabsList" :is-scroll="true" :current="tabsIndex" @change="tabsChange" ref="tabs"></u-tabs>
		<view class="area-box">
			<view class="u-flex">
				<view class="area-item u-flex-1 ">
					<view class="u-bg-gray u-border-right" style="height: 100%;">
						<view class="topTitle">省份</view>
						<scroll-view :scroll-y="true" style="height: 100%">
							<u-cell-group class="u-bor" :border="false">
								<u-cell-item v-for="(item,index) in provinces" :key="index" :border-top="false"
								 :border-bottom="false" :title="item.label" :arrow="false" :index="index"
								 :title-style="isChooseP&&province===index?{color:'#0F58FB','fontsize':'28rpx'}:{'fontsize':'28rpx'}"
								 @click="provinceChange" :size="true">
									<u-icon v-if="isChooseP&&province===index" color="blue" slot="right-icon" size="34" name="arrow-right"></u-icon>
								</u-cell-item>
							</u-cell-group>
						</scroll-view>
					</view>
				</view>
				<view class="area-item u-flex-1">
					<view class="u-bg-gray u-border-right" style="height: 100%;">
						<view class="topTitle">城市</view>
						<scroll-view :scroll-y="true" style="height: 100%">
							<u-cell-group v-if="isChooseP" :border="false">
								<u-cell-item v-for="(item,index) in citys" :key="index"
								 :border-bottom="false" :title="item.label" :arrow="false" :index="index"
								 :title-style="isChooseC&&city===index?{color:'#0F58FB','fontsize':'28rpx'}:{'fontsize':'28rpx'}"
								 @click="cityChange" :size="true">
									<u-icon v-if="isChooseC&&city===index" color="blue" slot="right-icon" size="34" name="checkbox-mark"></u-icon>
									<!-- <u-icon v-if="isChooseC&&city===index" color="blue" slot="right-icon" size="34" name="arrow-right"></u-icon> -->
								</u-cell-item>
							</u-cell-group>
						</scroll-view>
					</view>
				</view>
		
				<!-- <view class="area-item u-flex-1">
					<view class="u-bg-gray" style="height: 100%;">
						<view class="topTitle">区域</view>
						<scroll-view :scroll-y="true" style="height: 100%">
							<u-cell-group v-if="isChooseC" :border="false">
								<u-cell-item v-for="(item,index) in areas" :key="index"
								 :border-bottom="false" :title="item.label" :arrow="false" :index="index"
								 :title-style="isChooseA&&area===index?{color:'#0F58FB','fontsize':'28rpx'}:{'fontsize':'28rpx'}"
								 @click="areaChange" :size="true">
									<u-icon v-if="isChooseA&&area===index" color="blue" slot="right-icon" size="34" name="checkbox-mark"></u-icon>
								</u-cell-item>
							</u-cell-group>
						</scroll-view>
					</view>
				</view> -->
			</view>
		</view>
		<view class="u-flex u-row-right bg-white u-p-t-10 u-p-b-20">
			<u-button class="u-m-10" type="primary" plain @click="clearData" size="medium">重置</u-button>
			<u-button class="u-m-10" type="primary" @click="change" size="medium">确定</u-button>
		</view>
	</view>
</template>

<script>
	import provinces from "uview-ui/libs/util/province.js";
	import citys from "uview-ui/libs/util/city.js";
	import areas from "uview-ui/libs/util/area.js";
	/**
	 * city-select 省市区级联选择器
	 * @property {String Number} z-index 弹出时的z-index值（默认1075）
	 * @property {Boolean} mask-close-able 是否允许通过点击遮罩关闭Picker（默认true）
	 * @property {String} default-region 默认选中的地区，中文形式
	 * @property {String} default-code 默认选中的地区，编号形式
	 */
	export default {
		name: 'u-city-select',
		props: {
			// 通过双向绑定控制组件的弹出与收起
			value: {
				type: Boolean,
				default: false
			},
			// 默认显示的地区，可传类似["河北省", "秦皇岛市", "北戴河区"]
			defaultRegion: {
				type: Array,
				default () {
					return [];
				}
			},
			// 默认显示地区的编码，defaultRegion和areaCode同时存在，areaCode优先，可传类似["13", "1303", "130304"]
			areaCode: {
				type: Array,
				default () {
					return [];
				}
			},
			// 是否允许通过点击遮罩关闭Picker
			maskCloseAble: {
				type: Boolean,
				default: true
			},
			// 弹出的z-index值
			zIndex: {
				type: [String, Number],
				default: 0
			}
		},
		data() {
			return {
				cityValue: "",
				isChooseP: false, //是否已经选择了省
				province: '', //省级下标
				provinces: provinces,
				isChooseC: false, //是否已经选择了市
				city: '', //市级下标
				citys: citys[0],
				isChooseA: false, //是否已经选择了区
				area: '', //区级下标
				areas: areas[0][0],
				tabsIndex: 0,
				titleStyle:{
					'fontsize':'28rpx',
				}
			}
		},
		mounted() {
			/* this.init(); */
		},
		computed: {
			isChange() {
				return this.tabsIndex > 1;
			},
			genTabsList() {
				let tabsList = [{
					name: "请选择"
				}];
				if (this.isChooseP) {
					tabsList[0]['name'] = this.provinces[this.province]['label'];
					tabsList[1] = {
						name: "请选择"
					};
				}
				if (this.isChooseC) {
					tabsList[1]['name'] = this.citys[this.city]['label'];
					tabsList[2] = {
						name: "请选择"
					};
				}
				if (this.isChooseA) {
					tabsList[2]['name'] = this.areas[this.area]['label'];
				}
				return tabsList;
			},
			uZIndex() {
				// 如果用户有传递z-index值，优先使用
				return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
			}
		},
		methods: {
			init() {
				if (this.areaCode.length == 3) {
					this.setProvince("", this.areaCode[0]);
					this.setCity("", this.areaCode[1]);
					this.setArea("", this.areaCode[2]);
				} else if (this.defaultRegion.length == 3) {
					this.setProvince(this.defaultRegion[0], "");
					this.setCity(this.defaultRegion[1], "");
					this.setArea(this.defaultRegion[2], "");
				};
			},
			setProvince(label = "", value = "") {
				this.provinces.map((v, k) => {
					if (value ? v.value == value : v.label == label) {
						this.provinceChange(k);
					}
				})
			},
			setCity(label = "", value = "") {
				this.citys.map((v, k) => {
					if (value ? v.value == value : v.label == label) {
						this.cityChange(k);
					}
				})
			},
			setArea(label = "", value = "") {
				this.areas.map((v, k) => {
					if (value ? v.value == value : v.label == label) {
						this.isChooseA = true;
						this.area = k;
					}
				})
			},
			close() {
				this.$emit('input', false);
			},
			tabsChange(index) {
				this.tabsIndex = index;
			},
			provinceChange(index) {
				this.isChooseP = true;
				this.isChooseC = false;
				this.isChooseA = false;
				this.province = index;
				this.claerCity();
				this.clearArea();
				this.citys = citys[index];
				this.tabsIndex = 1;
			},
			cityChange(index) {
				this.isChooseC = true;
				this.isChooseA = false;
				this.city = index;
				this.clearArea();
				this.areas = areas[this.province][index];
				this.tabsIndex = 2;
			},
			areaChange(index) {
				this.isChooseA = true;
				this.area = index;
				this.change();
			},
			claerCity(){
				this.city = '';
				this.isChooseC = false;
			},
			clearArea(){
				this.area = '';
				this.isChooseA = false;
			},
			clearData() {
				this.province = '';
				this.isChooseP = false;
				this.clearArea();
				this.claerCity();				this.$emit('clearData', true);
				this.close();
			},
			change(){
				if(this.province === '') return;
				let result = {};
				result.province = this.provinces[this.province];
				result.city = this.citys[this.city] || '';
				result.area = this.areas[this.area] || '';
				this.$emit('city-change', result);
				this.close();
			}
		}

	}
</script>
<style lang="scss">
	.topTitle{
		padding: 12rpx 22rpx;
		text-align: center;
		color: #999999;
		font-size: 26rpx;
	}
	.area-box {
		width: 100%;
		overflow: hidden;
		height: 500rpx;
		background-color: #FFFFFF;
		
		>view {
			width: 100%;
			transition: transform 0.3s ease-in-out 0s;
			transform: translateX(0);
			height: 500rpx;
			&.change {
				transform: translateX(-33.3333333%);
			}
		}

		.area-item {
			width: 33.3333333%;
			height: 500rpx;
		}
	}
</style>
