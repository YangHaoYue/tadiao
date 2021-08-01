<template>
	<view>
		<web-view :src="url"></web-view>
		<!-- <well-tencent-map :selectedValue="selectedValue" @selected-change="mapSelectedChange"></well-tencent-map> -->
	</view>
</template>

<script>
	const QQMapWX = require('@/common/qqmap-wx-jssdk.min.js');
	const gcoord = require('@/common/gcoord.js'); //坐标转换
	export default {
		data() {
			return {
				qqmapsdk:'',
				
				url:"",
				latitude:'',
				longitude:'',
				address:'',
				area_code:'',
				recommend:''
			}
		},
		onLoad() {
			this.qqmapsdk = new QQMapWX({
				key: this.http.addressKey()
			});
			this.getLocation()
		},
		onHide() {
			window.removeEventListener();
		},
		methods: {
			getLocation(){
				uni.getLocation({
					type:'gcj02',
					altitude: true,
					success:(res)=> {
						console.log(res);
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						this.getInfo();
					},
					fail:(res)=> {
					}
				})
			},
			getInfo(){
				var result = gcoord.transform(
				  [this.longitude, this.latitude],    // 经纬度坐标
				  gcoord.WGS84,               // 当前坐标系
				  gcoord.GCJ02                 // 目标坐标系
				);
				console.log(gcoord);
				console.log(result);
				this.url = "https://apis.map.qq.com/tools/locpicker?coord="+result[1]+","+result[0]+"&search=1&type=1&key="+'NW7BZ-BVXC2-AFYUX-C57BF-PZED6-WTBY4'+"&referer=didiTower"
				window.addEventListener('message', event=> {
				  // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
				    var loc = event.data;
					if (loc && loc.module == 'locationPicker') {
				        //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
				        console.log('location', loc);
						this.getAddressH5(loc.latlng.lng,loc.latlng.lat)
					}
				}, false);
			},
			//根据经纬度对象获取位置详细信息
			getAddressH5(lng, lat) {
				console.log('eee');
				let url =`https://apis.map.qq.com/ws/geocoder/v1/?location=${lat + "," + lng}&key=${this.http.addressKey()}&get_poi=0&callbackName=QQmap&output=jsonp&coord_type=5`;
				this.http.tuiJsonp(url, (res) => {
					if (res.status === 0) {
						console.log(res);
						this.address = res.result.address_component.province + res.result.address_component.city + res.result.address_component.district;
						this.area_code = res.result.ad_info.adcode;
						this.recommend = res.result.formatted_addresses.recommend;
						this.back();
					}
				}, "QQmap")
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

</style>