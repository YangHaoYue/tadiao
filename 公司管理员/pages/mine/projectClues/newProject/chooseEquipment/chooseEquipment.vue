<template>
	<view>
		<!-- 顶部选项卡 -->
		<u-tabs :list="tabList" :is-scroll="false" :current="current" active-color="#0F58FB" @change="change" ></u-tabs>
		
		<u-checkbox-group @change="checkboxGroupChange" shape="circle" active-color="#0F58FB">
			<u-row class="u-m-t-30" gutter="20" justify="space-between">
				<u-col span="6" class="u-m-b-20" v-for="(item,i) in tabList[current].list" :key="i">
					<label :for="item.id">
						<equipmentItem :item="item" :index="i">
							<view slot="footer">
								<view class="u-font-26 u-p-l-6 u-flex u-row-between u-p-b-20" style="color: #666666;line-height: 1.5;">
									<view>年限：{{item.time}}</view>
									<u-checkbox v-model="item.checked"  shape="circle" active-color="#0F58FB"></u-checkbox>
								</view>
							</view>
						</equipmentItem>
					</label>
				</u-col>
			</u-row>
		</u-checkbox-group>
		
		
		<!-- 底部Tab -->
		<view class="cu-tabbar-height"></view>
		<view class="saveBtn bg-white solid-top u-flex u-row-between" style="height: 90rpx;">
			<label @click="doSelectedAll">
				<u-checkbox class="u-flex u-m-l-40" v-model="isSelectedAll" shape="circle" active-color="#0F58FB">全选</u-checkbox>
			</label>
			<view class="u-flex u-m-r-20">
				<view class="u-m-r-20 u-font-22" style="color: #666666;">已选择{{count}}个</view>
				<u-button  type="primary" size="medium" :custom-style="btnStyle">匹配</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			isSelectedAll:{
				get:function(){
					return this.tabList[this.current].list.length === this.selectedList.length
				},
				set:function(){
				}
			},
			count(){
				return this.selectedList.length
			}
		},
		data() {
			return {
				current:0,
				tabList: [{
					name: '本公司',
					list:[
						{
							id:'0',
							img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
							name:'QTZ80(5512-6)',
							status:0,
							price:'3678.00',
							number:'WE225',
							brand:'马牌',
							time:'三年',
							checked:false,
						},
						{
							id:'2',
							img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
							name:'QTZ80(5512-6)',
							status:1,
							price:'3678.00',
							number:'WE225',
							brand:'马牌',
							time:'三年',
							checked:false,
						},
						{
							id:'1',
							img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
							name:'QTZ80(5512-6)',
							status:2,
							price:'3678.00',
							number:'WE225',
							brand:'马牌',
							time:'三年',
							checked:false,
						},
						{
							id:'3',
							img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
							name:'QTZ80(5512-6)',
							status:0,
							price:'3678.00',
							number:'WE225',
							brand:'马牌',
							time:'三年',
							checked:false,
						},
						{
							id:'4',
							img:'https://cdn.uviewui.com/uview/swiper/1.jpg',
							name:'QTZ80(5512-6)',
							status:0,
							price:'3678.00',
							number:'WE225',
							brand:'马牌',
							time:'三年',
							checked:false,
						}
					]
				}, {
					name: '其他公司',
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
					]
				}],
				/* 是否全选 */
				selectedList:[],
				btnStyle:{
					fontSize:'28rpx'
				}
			}
		},
		methods: {
			change(index) {
				this.selectedList = [];
				this.unCheckedAll()
				this.current = index;
			},
			// 选中某个复选框时，由checkbox时触发
			checkboxGroupChange(e) {
				console.log(e);
				this.selectedList=e;
			},
			doSelectedAll(){
				this.isSelectedAll ? this.unCheckedAll() :this.checkedAll()
			},
			// 全选
			checkedAll() {
				this.selectedList=this.tabList[this.current].list.map(val => {
					val.checked = true;
					return val.id;
				})
			},
			//取消全选
			unCheckedAll(){
				this.tabList[this.current].list.forEach(v=>{
					v.checked=false;
				});
				this.selectedList=[];
			},
		}
	}
</script>

<style scoped>
	page{
		/* background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA); */
		background-color: #F5F6FA;
	}
</style>
