<template>
	<view>
		<view class="bg"></view>
		<view class="u-m-25 card">
			<view class="u-flex u-p-40 u-p-l-60 u-p-t-60">
				<u-image width="42" height="41" src="../../../../static/mine/cluesicon@2x.png"></u-image>
				<view class="u-font-32 text-bold text-black">{{entryName}}</view>
			</view>
			<u-line color="#ECECEE" border-style="dashed" length="625rpx" margin="30rpx 40rpx"></u-line>
			<view class="u-p-20">
				<view class="u-flex u-row-between u-col-top u-p-10" v-for="(item,index) in list1" :key="'index'+index">
					<view class="u-font-28" style="color: #999999;min-width: 100rpx;">{{item.name}}</view>
					<view class="u-font-28 text-bold u-text-right" style="color: #333333;" v-if="!item.isArray">{{item.value}}</view>
					<view class="u-font-28 text-bold" style="color: #333333;" v-else>
						<view v-for="(son,i) in item.value" :key="'s'+i" >{{son.type}}({{son.count}}台)</view>
					</view>
				</view>
				<block v-for="(item,q) in medias" :key="'item'+q">
					<view class="u-flex u-row-between u-col-top u-p-10" >
						<view class="u-font-28" style="color: #999999;">联系人{{q+1}}</view>
						<view class="u-font-28 text-bold" style="color: #333333;">{{item.media_name}}</view>
					</view>
					<view class="u-flex u-row-between u-col-top u-p-10" >
						<view class="u-font-28" style="color: #999999;">联系电话{{q+1}}</view>
						<view class="u-font-28 text-bold" style="color: #333333;">{{item.media_tel_num}}</view>
					</view>
				</block>
				<view class="u-flex u-row-between u-col-top u-p-10" v-for="(item,w) in list2" :key="'w'+w">
					<view class="u-font-28" style="color: #999999;">{{item.name}}</view>
					<view class="u-font-28 text-bold" style="color: #333333;">{{item.value}}</view>
				</view>
			</view>
		</view>
		<view class="bg-white u-m-20" style="padding: 30rpx 25rpx;border-radius: 10rpx;transform: translateY(-120rpx);" v-if="maintainList.length > 0">
			<!-- 跟进记录 -->
			<view class="u-font-28 text-bold text-black u-m-t-20">跟进记录</view>
			<view class="u-m-t-40 u-p-l-20">
				<u-time-line>
					<u-time-line-item v-for="(item,j) in maintainList" :key="'j'+j">
						<!-- 此处自定义了左边内容，用一个图标替代 -->
						<template v-slot:node>
							<view class="u-node u-flex u-row-center"  :style="j===0?'background: #0F58FB;':'background: #D8D8D8;'" style="border-radius: 100%;width: 40rpx;height: 40rpx;">
								<!-- 此处为uView的icon组件 -->
								<u-icon name="file-text" color="#fff" size="24"></u-icon>
							</view>
						</template>
						<template v-slot:content>
							<view>
								<view class="u-flex u-row-between u-font-28 u-m-t-10">
									<view class="text-black">{{item.content}}</view>
									<!-- <view class="text-black">{{item.people}}</view> -->
								</view>
								<view class="u-flex u-flex-wrap">
									<block class="u-p-10" v-for="(son,k) in item.img" :key="k">
										<u-image @click="preview(item.img,k)" :src="http.resourceUrl()+son" width="115" height="115" :fade="false" class="u-m-r-10 u-m-b-10"></u-image>
									</block>
								</view>
								<view class="u-order-desc text-gray u-m-t-10 u-font-24">{{item.created_at}}</view>
							</view>
						</template>
					</u-time-line-item>
				</u-time-line>
			</view>
		</view>
		<u-button class="u-m-25" type="primary" style="transform: translateY(-120rpx);" @click="toAdd" v-if="show_follow_button">添加跟进记录</u-button>
		<u-button class="u-m-25" type="primary" style="transform: translateY(-120rpx);" @click="setting" v-if="show_edit_button">修改线索</u-button>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.project_id = e.project_id
			this.getInfo()
		},
		data() {
			return {
				project_id:'',
				entryName:'湘东滨河新区未来城项目',
				list1:[
					{name:'施工单位',value:'黄龙体育馆',isArray:false},
					{name:'地址',value:'浙江省杭州市西湖区黄龙中心',isArray:false},
					{name:'塔机型号及数量',value:[{type:'6273477',count:'(10台)'},{type:'6273477',count:'(10台)'}],isArray:true},
					{name:'项目建设单位',value:'XXXX建设单位有限公司',isArray:false},
					{name:'备注',value:'这是备注这是备注这是备注',isArray:false},
				],
				medias:[],
				list2:[
					{name:'线索信息员',value:'李四'},
					{name:'合同协调员',value:'张三'},
					{name:'创建时间',value:'2021-04-21 13:00:00'},
					{name:'审核通过时间',value:'2021-04-21 13:00:00'},
				],
				
				maintainList:[],
				
				show_follow_button:false,
				show_edit_button:false
			}
		},
		methods: {
			getInfo(){
				this.http.get('project/projectDetail',{
					project_id:this.project_id
				}).then(res=>{
					if(res.code == 1000){
						this.project_id = res.data.project_id;
						this.entryName = res.data.project_name;
						this.list1[0].value = res.data.construction_name;
						this.list1[1].value = res.data.address;
						this.list1[2].value = res.data.tower_types;
						this.list1[3].value = res.data.developer_name;
						this.list1[4].value = res.data.remark;
						
						this.medias = res.data.medias
						
						this.list2[0].value = res.data.provider;
						this.list2[1].value = res.data.handler;
						this.list2[2].value = res.data.created_at;
						this.list2[3].value = res.data.verified_at;
						
						this.maintainList = res.data.follow_up_logs;
						
						this.show_follow_button = res.data.show_follow_button;
						this.show_edit_button = res.data.show_edit_button;
					}
				})
			},
			//预览图片
			preview(imgs,index){
				let list = imgs.map(v=>{
					return this.http.resourceUrl() + v
				})
				uni.previewImage({
					count:index,
					urls:list
				})
			},
			setting(){
				uni.navigateTo({url: '../createNew/createNew?project_id='+this.project_id});
			},
			toAdd(){
				uni.navigateTo({url: 'addRecord?project_id='+this.project_id});
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F3F3F3;
	}
	.bg{
		background-color: #0F58FB;
		height: 198rpx;
		width: 100%;
	}
	.card{
		background-image: url(../../../../static/mine/cluesImg.png); 
		height: 1057rpx;
		width: 700rpx;
		background-size: 100% 100%;
		margin-top: 0;
		transform: translateY(-120rpx);
	}
</style>
