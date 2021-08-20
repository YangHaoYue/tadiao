<template>
	<view>
		<view class="bg-white">
			<block v-for="(item,index) in equipmentList" :key="index">
				<view class="u-flex u-row-between" style="padding: 13rpx 30rpx;">
					<view class="u-flex">
						<u-image :src="http.resourceUrl() + item.tower_img" width="116" height="116" :fade="false"></u-image>
						<view class="u-m-l-15 u-font-28 text-bold">
							<view class="">{{item.tower_name}}</view>
							<view class="u-m-t-10">设备出厂编号:{{item.serial_num}}</view>
						</view>
					</view>
					<u-image src="../../../../static/shanchu@2x.png" width="35" height="35" :fade="false" @click="del(index)"></u-image>
				</view>
			</block>
		</view>
		<!-- 添加 -->
		<navigator open-type="navigate" :url="'chooseEquipment/chooseEquipment?project_id=' + project_id">
			<view class="bg-white u-flex u-row-center u-p-40">
				<view class="u-p-22" style="background-color: #F6F7FB;border-radius: 14rpx;">
					<u-icon name="plus" size="40" color="#9FA7BC"></u-icon>
				</view>
				<view class="u-font-28 u-m-l-28" style="color: #666666;">添加塔吊</view>
			</view>
		</navigator>
		
		<view class="u-p-25 u-p-l-30 bg-white u-m-t-20">
			<view class="u-font-28" style="color: #999999;">塔吊的月租金</view>
			<view class="u-flex u-col-center u-m-t-10">
				<view class="text-bold u-m-r-10" style="color: #151515;font-size: 62rpx;">￥</view>
				<u-input class="moneyInput" type="number" v-model="money" placeholder="请输入塔吊的月租金" placeholder-style="font-size:28rpx"></u-input>
			</view>
		</view>
		<block v-for="(item,i) in formList" :key="i">
			<form-list :item="item" :index="i"  @change="dateChange($event,formList)" @input="input($event,formList)" @choose="choose($event,formList)"></form-list>
		</block>
		<!-- 首次付款 -->
		<view class="u-m-t-20">
			<view class="u-font-28 text-black u-p-30 bg-white text-bold">首次付款</view>
			<block v-for="(item,j) in firstPayList" :key="j">
				<form-list :item="item" :index="j" @change="dateChange($event,firstPayList)" @input="input($event,firstPayList)"></form-list>
			</block>
		</view>
		<!-- 下次付款 -->
		<view class="u-m-t-20">
			<view class="u-font-28 text-black u-p-30 bg-white text-bold">下次付款</view>
			<block v-for="(item,k) in lastPayList" :key="k">
				<form-list :item="item" :index="k" @change="dateChange($event,lastPayList)" @input="input($event,lastPayList)"></form-list>
			</block>
		</view>
		<!-- 客户 -->
		<view class="u-m-t-20">
			<block v-for="(item,index) in customerList" :key="index">
				<form-list :item="item" :index="index" @input="input($event,customerList)"></form-list>
			</block>
		</view>
		<!-- 合同 -->
		<view class="bg-white u-m-t-20 u-p-b-30">
			<view class="u-p-30 u-flex u-row-between solid-bottom">
				<view class="u-flex u-font-28 u-m-b-10 u-m-r-20 text-black">合同编号</view>
				<u-input v-model="code" type="text" input-align="right" placeholder="请输入合同编号" placeholder-style="color:#999999;font-size:28rpx;"/>
			</view>
			<view class="u-m-t-20 u-m-l-30">
				<u-upload width="160" height="160" :action="http.interfaceUrl()+action" :header="header" :file-list="contract" :max-count="99" @on-list-change="onPayChange"></u-upload>
			</view>
		</view>
		
		<u-button type="primary" class="u-m-30" @click="editOrder" v-if="order_id&&show_submit_button">提交修改</u-button>
		<u-button type="primary" class="u-m-30" @click="addOrder" v-else>立即提交</u-button>
		<u-gap bg-color="F8F8F8" height="50"></u-gap>
	</view>
</template>

<script>
	import formList from '@/components/form-list.vue';
	import proCard from '@/components/pro-card.vue';
	export default {
		onLoad(e) {
			if(e.project_id){
				this.project_id = e.project_id;
				this.getOrderAddData()
			}else if(e.order_id){
				uni.setNavigationBarTitle({
					title:'编辑线索'
				})
				this.order_id = e.order_id;
				this.getOrderEditData()
			}
		},
		onShow() {
			uni.$on('townList',(data)=>{
				// console.log(data.data);
				data.data.map(v=>{
					let d = this.equipmentList.findIndex(k=>v.id === k.id)
					console.log(d);
					if(d == -1) this.equipmentList.push(v)
					
				})
				uni.$off('townList')
			})
		},
		components:{
			formList,
			proCard
		},
		data() {
			return {
				order_id:'',
				show_submit_button:false,
				project_id:'',
				
				equipmentList:[],
				money:'',
				
				formList:[
					{type:'input',name:'进出场费',value:'',id:'',placeholder:'请输入进出场费',inputType:'digit',isImport:false},
					{type:'picker',name:'付款方式',value:'',id:'',placeholder:'选择付款方式',list:[],isImport:false},
					{type:'datePicker',name:'开始时间',value:'',id:'',placeholder:'请选择开始时间',isImport:false},
					{type:'datePicker',name:'预计到期时间',value:'',id:'',placeholder:'请选择预计到期时间',isImport:false},
				],
				firstPayList:[
					{type:'datePicker',name:'首次付款时间',value:'',id:'',placeholder:'请选择首次付款时间',isImport:false},
					{type:'input',name:'首次付款金额',value:'',id:'',placeholder:'请输入首次付款金额',inputType:'digit',isImport:false},
					{type:'textarea',name:'摘要',value:'',id:'',placeholder:'请输入摘要',isImport:false},
				],
				lastPayList:[
					{type:'datePicker',name:'下次付款时间',value:'',id:'',placeholder:'请选择下次付款时间',isImport:false},
					{type:'input',name:'下次付款金额',value:'',id:'',placeholder:'请输入下次付款金额',inputType:'digit',isImport:false},
					{type:'textarea',name:'摘要',value:'',id:'',placeholder:'请输入摘要',isImport:false},
				],
				customerList:[
					{type:'input',name:'客户单位名',value:'',id:'',placeholder:'请输入客户单位名',inputType:'text',isImport:false},
					{type:'input',name:'联系人姓名',value:'',id:'',placeholder:'请输入联系人姓名',inputType:'text',isImport:false},
					{type:'input',name:'联系人手机',value:'',id:'',placeholder:'请输入联系人手机',inputType:'number',isImport:false},
				],
				/* 合同 */
				code:'',
				action: 'Common/fileUploader',
				header:{'Authorization':'Bearer '+ this.http.getToken()},
				contract:[]
			}
		},
		methods: {
			getOrderAddData(){
				this.http.get('Order/getOrderAddData',{
					project_id:this.project_id
				}).then(res=>{
					if(res.code == 1000){
						this.formList[1].list = res.data.type_pay;
						this.customerList[0].value = res.data.office_name;
						this.customerList[1].value = res.data.cus_name;
						this.customerList[2].value = res.data.cus_tel_num;
						this.getTowersByTowerIds(res.data.tower_ids);
					}
				})
			},
			getOrderEditData(){
				this.http.get('Order/getOrderEditData',{
					order_id:this.order_id
				}).then(res=>{
					if(res.code == 1000){
						this.money = res.data.month_rent;
						this.formList[1].list = res.data.type_pay;
						this.formList[1].list.map(v=>{
							if(v.id == res.data.id){
								this.formList[1].id = v.id;
								this.formList[1].value = v.val;
							}
						})
						this.formList[0].value = res.data.in_out_cost;
						this.formList[1].value = res.data.type_pay_id == 1?'季结':'月结';
						this.formList[1].id = res.data.type_pay_id;
						this.formList[2].value = res.data.lease_start_at;
						this.formList[3].value = res.data.lease_end_at;
						
						this.firstPayList[0].id = res.data.first_id;
						this.firstPayList[0].value = res.data.first_start_at;
						this.firstPayList[1].value = res.data.first_amount;
						this.firstPayList[2].value = res.data.first_remark;
						
						this.lastPayList[0].id = res.data.next_id;
						this.lastPayList[0].value = res.data.next_start_at;
						this.lastPayList[1].value = res.data.next_amount;
						this.lastPayList[2].value = res.data.next_remark;
						
						this.customerList[0].value = res.data.office_name;
						this.customerList[1].value = res.data.cus_name;
						this.customerList[2].value = res.data.cus_tel_num;
						
						this.show_submit_button = res.data.show_submit_button;
						
						this.code = res.data.contract_num;
						res.data.contract_imgs.map(v=>{
							this.contract.push({
								url:this.http.resourceUrl()+v
							})
						})
						this.getTowersByTowerIds(res.data.tower_ids);
					}
				})
			},
			addOrder(){
				let list = this.equipmentList.map(v=>{
					return v.id
				})
				let img=[]
				this.contract.map(item=>{
					if(item.response&&item.response.code==1000){
						img.push(item.response.data.path)
					}else if(!item.error&&item.progress==100){
						img.push(item.url)
					}
				});
				this.http.post('Order/addOrder',{
					project_id:this.project_id,
					tower_ids:list,
					month_rent:this.money,
					in_out_cost:this.formList[0].value,
					type_pay_id:this.formList[1].id,
					lease_start_at:this.formList[2].value,
					lease_end_at:this.formList[3].value,
					
					first_start_at:this.firstPayList[0].value,
					first_amount:this.firstPayList[1].value,
					first_remark:this.firstPayList[2].value,
					
					next_start_at:this.lastPayList[0].value,
					next_amount:this.lastPayList[1].value,
					next_remark:this.lastPayList[2].value,
					
					office_name:this.customerList[0].value,
					cus_name:this.customerList[1].value,
					cus_tel_num:this.customerList[2].value,
					
					contract_num:this.code,
					contract_imgs:img
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							});
						},1500)
					}
				})
			},
			editOrder(){
				let list = this.equipmentList.map(v=>{
					return v.id
				})
				let img=[]
				this.contract.map(item=>{
					if(item.response&&item.response.code==1000){
						img.push(item.response.data.path)
					}else if(!item.error&&item.progress==100){
						img.push(item.url)
					}
				});
				this.http.post('Order/editOrder',{
					order_id:this.order_id,
					tower_ids:list,
					month_rent:this.money,
					in_out_cost:this.formList[0].value,
					type_pay_id:this.formList[1].id,
					lease_start_at:this.formList[2].value,
					lease_end_at:this.formList[3].value,
					
					first_id:this.firstPayList[0].id,
					first_start_at:this.firstPayList[0].value,
					first_amount:this.firstPayList[1].value,
					first_remark:this.firstPayList[2].value,
					
					next_id:this.lastPayList[0].id,
					next_start_at:this.lastPayList[0].value,
					next_amount:this.lastPayList[1].value,
					next_remark:this.lastPayList[2].value,
					
					office_name:this.customerList[0].value,
					cus_name:this.customerList[1].value,
					cus_tel_num:this.customerList[2].value,
					
					contract_num:this.code,
					contract_imgs:img
				}).then(res=>{
					this.$u.toast(res.msg)
					if(res.code == 1000){
						setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							});
						},1500)
					}
				})
			},
			getTowersByTowerIds(tower_ids){
				this.http.post('Order/getTowersByTowerIds',{
					tower_ids:tower_ids
				}).then(res=>{
					if(res.code == 1000){
						res.data.map(v=>{
							this.equipmentList.push(v)
						})
					}
				})
			},
			/* 删除塔吊 */
			del(index){
				this.equipmentList.splice(index,1)
			},
			/* 输入框 */
			input(e,list){
				this.$set(list[e.index],'value',e.value);
			},
			/* 选择输入框 */
			choose(e,list){
				console.log(e);
				this.$set(list[e.index],'value',e.value.label)
				this.$set(list[e.index],'id',e.value.value)
				console.log(this.formList);
			},
			dateChange(e,list){
				this.$set(list[e.index],'value',e.value)
			},
			timeChange(e,list){
				this.$set(list[e.index],'value',e.value)
			},
			//上传合同图片
			onPayChange(lists){
				console.log('onListChange', lists[0]);
				this.contract = lists;
			},
			
		}
	}
</script>

<style>
	page{
		background-color: #F8F8F8;
	}
</style>
