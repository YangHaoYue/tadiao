<template>
	<view class="container">
		<view class="header-box">
			<view class="result-box">
				<view class="u-flex u-row-between">
					<view class="info list-item">
						<view class="badge"></view>
						<view class="ellipsis">{{recommend}}</view>
					</view>
					<u-button type="primary" size="mini" style="margin: 0;" @click="back" :disabled="area_code!=''?false:true">确认</u-button>
				</view>
				<!-- <view class="info">
					<view class="badge orange"></view>
					<view class="ellipsis"> {{current_long + "," + current_lat}}</view>
				</view> -->
			</view>
		</view>

		<map id="maps" class="tui-maps" :longitude="longitude" :latitude="latitude" :scale="16" show-location @regionchange="regionchange"
		 :style="{height:winHeight}">
			<!-- #ifndef MP-ALIPAY -->
			<cover-image class="cover-image" src="/static/images/maps/location.png" />
			<!-- #endif -->
		</map>
		<!-- #ifdef MP-ALIPAY -->
		<cover-image class="cover-image" src="/static/images/maps/location.png" />
		<!-- #endif -->
		<!-- #ifndef APP-PLUS -->
		<cover-view class="current-location">
			<cover-image src="/static/images/maps/current.png" class="current-img" @tap="currentLocation"></cover-image>
		</cover-view>
		<!-- #endif -->
	</view>
</template>

<script>
	const QQMapWX = require('@/common/qqmap-wx-jssdk.min.js');
	export default {
		data() {
			return {
				address: "正在获取地址...",
				recommend:'正在获取地址...',
				longitude: 114.010857,
				latitude: 22.63137,
				area_code:'',
				current_long: 114.010857,
				current_lat: 22.63137,
				key: 'NW7BZ-BVXC2-AFYUX-C57BF-PZED6-WTBY4',
				mapCtx: null,
				location: false,
				qqmapsdk: null,
				mapObj: null,
				winHeight: "100%" //窗口高度
			}
		},
		onLoad() {
			setTimeout(()=>{
				this.qqmapsdk = new QQMapWX({
					key: this.key
				});
				this.currentLocation()
			},100)
			this.winHeight = this.$u.sys().windowHeight - uni.upx2px(90) +'px'
			
		},
		methods: {
			regionchange(e) {
				// 地图发生变化的时候，获取中间点，也就是cover-image指定的位置
				let isEnd = e.type == 'end'
				// #ifdef APP-PLUS || MP-WEIXIN
				isEnd = e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')
				// #endif
				if (isEnd) {
					this.address = "正在获取地址...";
					this.recommend = "正在获取地址...";
					if (!this.mapCtx) {
						this.mapCtx = uni.createMapContext("maps");
					}
					this.mapCtx.getCenterLocation({
						type: 'gcj02',
						success: (res) => {
							this.latitude = res.latitude;
							this.longitude = res.longitude;
							this.current_long = res.latitude;
							this.current_lat = res.longitude;
							// #ifdef H5
							this.getAddressH5(res.longitude, res.latitude);
							// #endif

							// #ifndef H5
							this.getAddress(res.longitude, res.latitude);
							// #endif
						}
					})
				}
			},
			getAddress: function(lng, lat) {
				//根据经纬度获取地址信息
				this.qqmapsdk.reverseGeocoder({
					location: {
						latitude: lat,
						longitude: lng
					},
					success: (res) => {
						console.log(res);
						this.address = res.result.formatted_addresses.recommend
						console.log(JSON.stringify(res))
					},
					fail: (res) => {
						this.address = "获取位置信息失败"
					}
				})

			},
			//根据经纬度对象获取位置详细信息
			getAddressH5: function(lng, lat) {
				
				let url =`https://apis.map.qq.com/ws/geocoder/v1/?location=${lat + "," + lng}&key=${this.key}&get_poi=0&callbackName=QQmap&output=jsonp&coord_type=5`;
				this.http.tuiJsonp(url, (res) => {
					console.log(res);
					if (res.status === 0) {
						console.log(res);
						this.address = res.result.address_component.province + res.result.address_component.city + res.result.address_component.district;
						this.area_code = res.result.ad_info.adcode;
						this.recommend = res.result.formatted_addresses.recommend;
					}
				}, "QQmap")
			},
			currentLocation() {
				console.log('2313213');
				//当前位置
				uni.getLocation({
					type:'wgs84',
					success:(res)=> {
						console.log(res);
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						this.getAddressH5(res.longitude, res.latitude)
					},
					fail:(res)=> {
						console.log('fail');
						this.getAddressH5(this.longitude, this.latitude)
					}
				})
			},
			back(){
				uni.$emit('address',{longitude:this.longitude,latitude:this.latitude,address:this.address,area_code:this.area_code,location:this.recommend})
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		display: flex;
		justify-content: center;
	}

	.container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.tui-maps {
		width: 100%;
		height: 100%;
	}

	.cover-image {
		height: 60rpx;
		width: 60rpx;
		position: fixed;
		/* #ifdef APP-PLUS */
		position: absolute;
		/* #endif */
		top: 50%;
		left: 50%;
		margin-top: -30rpx;
		margin-left: -30rpx;
	}

	.header-box {
		width: 100%;
		padding-top: 8rpx;
		box-sizing: border-box;
		border-radius: 24rpx;
	}

	.result-box {
		width: 100%;
		padding: 12rpx 30rpx;
		box-sizing: border-box;
		color: #555;
		font-size: 28rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #fff;
		border-radius: 24rpx;
	}

	.list-item::after {
		left: 0;
	}

	.badge {
		height: 16rpx;
		width: 16rpx;
		border-radius: 8rpx;
		background: #5677fc;
		margin-right: 20rpx;
		flex-shrink: 0;
	}

	.orange {
		background: #ff7900 !important;
	}

	.info {
		display: flex;
		align-items: center;
		padding: 20rpx 0;
	}

	.ellipsis {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.current-location {
		position: fixed;
		height: 76rpx;
		width: 76rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: 80rpx;
		right: 60rpx;
		background: rgba(255, 255, 255, 0.94);
		border-radius: 38rpx;
		z-index: 999999;
	}

	.current-img {
		width: 42rpx;
		height: 42rpx;
	}
</style>
