(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-projectClues-relation-relation"],{"19ad":function(t,e,i){"use strict";var s=i("4ea4");i("99af"),i("4160"),i("d81d"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("2909")),a={onLoad:function(t){this.project_id=t.project_id,this.getInfo()},onReachBottom:function(){var t=this;this.tabList[this.current].page>=this.tabList[this.current].last_page||(this.status="loading",this.tabList[this.current].page=++this.tabList[this.current].page,setTimeout((function(){t.getInfo()}),50))},computed:{isSelectedAll:{get:function(){return this.tabList[this.current].list.length===this.tabList[this.current].selectedList.length&&this.tabList[this.current].selectedList.length>0},set:function(){}},count:function(){return this.tabList[0].selectedList.length+this.tabList[1].selectedList.length}},data:function(){return{project_id:"",current:0,tabList:[{name:"本公司",list:[],page:1,last_page:1,selectedList:[]},{name:"其他公司",list:[],page:1,last_page:1,selectedList:[]}],btnStyle:{fontSize:"28rpx"},status:"loading",iconType:"flower",loadText:{loadmore:"轻轻上拉",loading:"努力加载中",nomore:"实在没有了"}}},methods:{getInfo:function(){var t=this;this.http.get("project/getTowersForLock",{type:this.current,project_id:this.project_id,page:this.tabList[this.current].page}).then((function(e){if(1e3==e.code){if(0==t.tabList[t.current].list.length)t.tabList[t.current].list=e.data.tower_data,t.tabList[t.current].list.forEach((function(e){t.$set(e,"checked",!1)})),t.tabList[t.current].last_page=e.data.last_page;else e.data.tower_data.forEach((function(e){t.tabList[t.current].list.push(e)}));t.tabList[t.current].page>=t.tabList[t.current].last_page?t.status="nomore":t.status="loadmore"}}))},change:function(t){this.current=t,this.getInfo()},checkboxGroupChange:function(t){console.log(t),this.tabList[this.current].selectedList=t},doSelectedAll:function(){this.isSelectedAll?this.unCheckedAll():this.checkedAll()},checkedAll:function(){this.tabList[this.current].selectedList=this.tabList[this.current].list.map((function(t){return t.checked=!0,t.id}))},unCheckedAll:function(){this.tabList[this.current].list.forEach((function(t){t.checked=!1})),this.tabList[this.current].selectedList=[]},submit:function(){var t=this;if(0==this.count)return this.$u.toast("请选择您要关联的塔吊！");this.http.post("project/projectLockTower",{project_id:this.project_id,tower_ids:[].concat((0,n.default)(this.tabList[0].selectedList),(0,n.default)(this.tabList[1].selectedList))}).then((function(e){t.$u.toast(e.msg),1e3==e.code&&setTimeout((function(){uni.redirectTo({url:"associated?show_btn=1&project_id="+t.project_id})}),1500)}))}}};e.default=a},"2c68":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}));var s={uTabs:i("f98e").default,uCheckboxGroup:i("ca2c").default,uRow:i("2411").default,uCol:i("7491").default,uCheckbox:i("6885").default,uButton:i("ca7e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-tabs",{attrs:{list:t.tabList,"is-scroll":!1,current:t.current,"active-color":"#0F58FB"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}}),i("u-checkbox-group",{staticStyle:{width:"100%"},attrs:{shape:"circle","active-color":"#0F58FB"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxGroupChange.apply(void 0,arguments)}}},[i("u-row",{staticClass:"u-m-t-30",staticStyle:{width:"100%"},attrs:{gutter:"20",justify:"space-between"}},t._l(t.tabList[t.current].list,(function(e,s){return i("u-col",{key:s,staticClass:"u-m-b-20",attrs:{span:"6"}},[i("v-uni-label",{attrs:{for:"item"+e.id}},[i("equipmentItem",{attrs:{item:e,index:s}},[i("v-uni-view",{attrs:{slot:"footer"},slot:"footer"},[i("v-uni-view",{staticClass:"u-font-26 u-p-l-6 u-flex u-row-between u-p-b-20",staticStyle:{color:"#666666","line-height":"1.5"}},[i("v-uni-view",[t._v("年限："+t._s(e.age_limit))]),i("u-checkbox",{attrs:{shape:"circle","active-color":"#0F58FB",name:e.id},model:{value:e.checked,callback:function(i){t.$set(e,"checked",i)},expression:"item.checked"}})],1)],1)],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"cu-tabbar-height"}),i("v-uni-view",{staticClass:"saveBtn bg-white solid-top u-flex u-row-between",staticStyle:{height:"90rpx"}},[i("v-uni-label",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doSelectedAll.apply(void 0,arguments)}}},[i("u-checkbox",{staticClass:"u-flex u-m-l-40",attrs:{shape:"circle","active-color":"#0F58FB"},model:{value:t.isSelectedAll,callback:function(e){t.isSelectedAll=e},expression:"isSelectedAll"}},[t._v("全选")])],1),i("v-uni-view",{staticClass:"u-flex u-m-r-20"},[i("v-uni-view",{staticClass:"u-m-r-20 u-font-22",staticStyle:{color:"#666666"}},[t._v("已选择"+t._s(t.count)+"个")]),i("u-button",{attrs:{type:"primary",size:"medium","custom-style":t.btnStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("关联")])],1)],1)],1)},a=[]},"3f37":function(t,e,i){var s=i("5a66");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("12040298",s,!0,{sourceMap:!1,shadowMode:!1})},"5a66":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,"uni-page-body[data-v-bb45902a]{\n\t/* background: -webkit-linear-gradient(top,#FBFBFD,#F5F6FA); */background-color:#f5f6fa}body.?%PAGE?%[data-v-bb45902a]{background-color:#f5f6fa}",""]),t.exports=e},7546:function(t,e,i){"use strict";i.r(e);var s=i("19ad"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},"7f9f":function(t,e,i){"use strict";i.r(e);var s=i("2c68"),n=i("7546");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("9771");var c,o=i("f0c5"),r=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"bb45902a",null,!1,s["a"],c);e["default"]=r.exports},9771:function(t,e,i){"use strict";var s=i("3f37"),n=i.n(s);n.a}}]);