(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-maintenance-detail-detail"],{"0add":function(t,e,i){"use strict";i.r(e);var a=i("4b70"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"0e1a":function(t,e,i){var a=i("d113");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("08be1510",a,!0,{sourceMap:!1,shadowMode:!1})},1150:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-time-line",data:function(){return{}}};e.default=a},2074:function(t,e,i){"use strict";var a=i("74ea"),n=i.n(a);n.a},"2d0a":function(t,e,i){"use strict";var a=i("0e1a"),n=i.n(a);n.a},"3dc0":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-time-axis-item"},[t._t("content"),i("v-uni-view",{staticClass:"u-time-axis-node",style:[t.nodeStyle]},[t._t("node",[i("v-uni-view",{staticClass:"u-dot"})])],2)],2)},r=[]},4934:function(t,e,i){var a=i("c37c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5eefcf80",a,!0,{sourceMap:!1,shadowMode:!1})},"4b70":function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("d7c0")),r={components:{proCard:n.default},onLoad:function(t){this.tower_id=t.tower_id,this.order_id=t.order_id,this.getInfo()},data:function(){return{order_id:"",tower_id:"",project_name:"",equipment:"",list:[{title:"客户信息",list:[{title:"昵称",value:"顾家",avatar:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"},{title:"姓名",value:"张三"},{title:"手机方式",value:"17283782323"},{title:"地址",value:"浙江省杭州市西湖区西溪园区"}]},{title:"合同执行人",list:[{title:"昵称",value:"顾家",avatar:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"},{title:"姓名",value:"张三"},{title:"手机方式",value:"17283782323"}]},{title:"合同时间",list:[{title:"开始时间",value:"2020-06-28 12:13:30"},{title:"到期时间",value:"2020-06-28 12:13:30"}]}],maintainList:[],repairList:[],show_transfer_button:!1,people:"",selected:"",peopleList:[],people_page:1,people_lastpage:1,showModal:!1,modal:!1}},methods:{getInfo:function(){var t=this;this.http.get("FixCare/getTowerFixDetail",{tower_id:this.tower_id,order_id:this.order_id}).then((function(e){t.project_name=e.data.project_name,t.equipment=e.data.tower_info,t.list[0].list[0].value=e.data.cus.name,t.list[0].list[0].avatar=e.data.cus.avatar,t.list[0].list[1].value=e.data.cus.real_name,t.list[0].list[2].value=e.data.cus.tel_num,t.list[0].list[3].value=e.data.cus.address,t.list[1].list[0].value=e.data.executor.name,t.list[1].list[0].avatar=e.data.executor.avatar,t.list[1].list[1].value=e.data.executor.real_name,t.list[1].list[2].value=e.data.executor.tel_num,t.list[2].list[0].value=e.data.lease_start_at,t.list[2].list[1].value=e.data.lease_end_at,t.order_id=e.data.order_id,t.towerCares(),t.towerFixes()}))},towerCares:function(t){var e=this;this.maintainList&&this.maintainList.current_page>this.maintainList.last_page||this.http.get("Order/towerCares",{order_id:this.order_id,tower_id:this.equipment.id,page:this.maintainList.current_page||1},!0).then((function(t){e.maintainList.cares_data?t.data.cares_data.forEach((function(t){e.maintainList.cares_data.push(t)})):e.$set(e,"maintainList",t.data),e.maintainList.current_page++}))},towerFixes:function(){var t=this;this.repairList&&this.repairList.current_page>this.repairList.last_page||this.http.get("Order/towerFixes",{order_id:this.order_id,tower_id:this.equipment.id,page:this.repairList.current_page||1},!0).then((function(e){t.repairList.fixes_data?e.data.fixes_data.forEach((function(e){t.repairList.fixes_data.push(e)})):t.$set(t,"repairList",e.data),t.repairList.current_page++}))},getFixerForFix:function(){var t=this;this.http.get("Order/getFixerForFix",{keyward:this.people}).then((function(e){1e3==e.code&&(0==t.peopleList.length?(t.peopleList=e.data.fixer_data,t.people_page=e.data.last_page):e.data.fixer_data.forEach((function(e){t.peopleList.push(e)})))}))},loadMore:function(){var t=this;this.people_page>=this.people_lastpage||(this.people_page=++this.people_page,setTimeout((function(){t.getFixerForFix()}),50))},claerFixerData:function(){this.people_page=1,this.people_lastpage=1,this.peopleList=[],this.getFixerForFix()},toMDetail:function(t){uni.navigateTo({url:"/pages/mine/projectManagement/detail/miantainDetail?care_id="+t})},toRDetail:function(t){uni.navigateTo({url:"/pages/mine/projectManagement/detail/repairDetail?fix_id="+t})}}};e.default=r},"4c6b":function(t,e,i){"use strict";var a=i("4934"),n=i.n(a);n.a},"6b37":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-time-axis[data-v-7b7e6576]{padding-left:%?40?%;position:relative}.u-time-axis[data-v-7b7e6576]::before{content:" ";position:absolute;left:0;top:%?12?%;width:1px;bottom:0;border-left:1px solid #ddd;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}',""]),t.exports=e},"6f81":function(t,e,i){"use strict";i.r(e);var a=i("fa39"),n=i("c1be");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("2074");var s,o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"7b7e6576",null,!1,a["a"],s);e["default"]=u.exports},"74ea":function(t,e,i){var a=i("6b37");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("36c3d7f4",a,!0,{sourceMap:!1,shadowMode:!1})},"79c4":function(t,e,i){"use strict";i.r(e);var a=i("7f7e"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"7e90":function(t,e,i){"use strict";i.r(e);var a=i("c942"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"7f7e":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-time-line-item",props:{bgColor:{type:String,default:"#ffffff"},nodeTop:{type:[String,Number],default:""}},data:function(){return{}},computed:{nodeStyle:function(){var t={backgroundColor:this.bgColor};return""!=this.nodeTop&&(t.top=this.nodeTop+"rpx"),t}}};e.default=a},"98bf":function(t,e,i){"use strict";i.r(e);var a=i("d7b0"),n=i("0add");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("4c6b");var s,o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"130a91fa",null,!1,a["a"],s);e["default"]=u.exports},c1be:function(t,e,i){"use strict";i.r(e);var a=i("1150"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},c37c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-130a91fa]{background-color:#f8f8f8}body.?%PAGE?%[data-v-130a91fa]{background-color:#f8f8f8}",""]),t.exports=e},c942:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"pro-card",props:{title:{type:String,default:"标题"},list:{type:Array,default:function(){return[{title:"合同执行人",avatar:"",value:""}]}}},data:function(){return{}}};e.default=a},d113:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-time-axis-item[data-v-8399878c]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nflex-direction:column;width:100%;position:relative;margin-bottom:%?32?%}.u-time-axis-node[data-v-8399878c]{position:absolute;top:%?12?%;left:%?-40?%;-webkit-transform-origin:0;transform-origin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:1;font-size:%?24?%}.u-dot[data-v-8399878c]{height:%?16?%;width:%?16?%;border-radius:%?100?%;background:#ddd}',""]),t.exports=e},d7b0:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uImage:i("03f6").default,uTimeLine:i("6f81").default,uTimeLineItem:i("ea8b").default,uIcon:i("f4ee").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"u-flex bg-white u-m-t-20 u-p-25 u-p-t-15 u-p-b-15"},[i("v-uni-view",{staticClass:"text-bold u-font-28 u-p-10 text-black u-border-bottom"},[t._v("项目名称")]),i("v-uni-view",{staticClass:"u-font-28"},[t._v(t._s(t.project_name))])],1),i("pro-card",{attrs:{title:"设备信息"}},[i("v-uni-view",{staticClass:"u-flex u-m-t-20",attrs:{slot:"content"},slot:"content"},[i("u-image",{attrs:{src:t.http.resourceUrl()+t.equipment.tower_img,width:"158",height:"158",fade:!1,mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"u-p-l-10 u-p-r-12"},[i("v-uni-view",{staticClass:"u-font-26 text-bold text-black"},[t._v(t._s(t.equipment.tower_name)+"("+t._s(t.equipment.tower_type_name)+")")]),i("v-uni-view",{staticClass:"u-font-22 u-p-l-6",staticStyle:{color:"#666666","line-height":"1.5"}},[t._v("设备出厂编码:"+t._s(t.equipment.serial_num))]),i("v-uni-view",{staticClass:"u-font-22 u-p-l-6",staticStyle:{color:"#666666","line-height":"1.5"}},[t._v("设备备案编号:"+t._s(t.equipment.record_num))]),i("v-uni-view",{staticClass:"u-font-22 u-p-l-6",staticStyle:{color:"#666666","line-height":"1.5"}},[t._v("项目名称:"+t._s(t.equipment.project_name))]),i("v-uni-view",{staticClass:"u-font-22 u-p-l-6",staticStyle:{color:"#666666","line-height":"1.5"}},[t._v("施工企业名称:"+t._s(t.equipment.construction_name))])],1)],1)],1),t._l(t.list,(function(t,e){return[i("pro-card",{key:e+"_0",attrs:{title:t.title,list:t.list}})]})),i("pro-card",{attrs:{title:"保养记录"}},[i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[i("v-uni-scroll-view",{staticStyle:{height:"500rpx"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.towerCares.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-m-t-20 u-p-l-20"},[i("u-time-line",t._l(t.maintainList.cares_data,(function(e,a){return i("u-time-line-item",{key:a,scopedSlots:t._u([{key:"node",fn:function(){return[i("v-uni-view",{staticClass:"u-node u-flex u-row-center",staticStyle:{"border-radius":"100%",width:"40rpx",height:"40rpx"},style:0===a?"background: #0F58FB;":"background: #D8D8D8;"},[i("u-icon",{attrs:{name:"file-text",color:"#fff",size:"24"}})],1)]},proxy:!0},{key:"content",fn:function(){return[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toMDetail(e.id)}}},[i("v-uni-view",{staticClass:"u-flex u-row-between u-font-28 u-m-t-10"},[i("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.cares_name))]),i("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.carer.name))])],1),i("v-uni-view",{staticClass:"u-order-desc text-gray u-m-t-10 u-font-24"},[t._v(t._s(e.created_at))])],1)]},proxy:!0}],null,!0)})})),1)],1)],1)],1)],1),i("pro-card",{attrs:{title:"维修记录"}},[i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[i("v-uni-scroll-view",{staticStyle:{height:"500rpx"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.towerFixes.fixes_data.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-m-t-20 u-p-l-20"},[i("u-time-line",t._l(t.repairList.fixes_data,(function(e,a){return i("u-time-line-item",{key:a,scopedSlots:t._u([{key:"node",fn:function(){return[i("v-uni-view",{staticClass:"u-node u-flex u-row-center",staticStyle:{"border-radius":"100%",width:"40rpx",height:"40rpx"},style:0===a?"background: #0F58FB;":"background: #D8D8D8;"},[i("u-icon",{attrs:{name:"file-text",color:"#fff",size:"24"}})],1)]},proxy:!0},{key:"content",fn:function(){return[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toRDetail(e.id)}}},[i("v-uni-view",{staticClass:"u-flex u-row-between u-font-28 u-m-t-10"},[i("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.fixes_name))]),i("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.fixer.name))])],1),i("v-uni-view",{staticClass:"u-order-desc text-gray u-m-t-10 u-font-24"},[t._v(t._s(e.created_at))])],1)]},proxy:!0}],null,!0)})})),1)],1)],1)],1)],1)],2)},r=[]},d7c0:function(t,e,i){"use strict";i.r(e);var a=i("f40c"),n=i("7e90");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var s,o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"6b3aae20",null,!1,a["a"],s);e["default"]=u.exports},ea8b:function(t,e,i){"use strict";i.r(e);var a=i("3dc0"),n=i("79c4");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("2d0a");var s,o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"8399878c",null,!1,a["a"],s);e["default"]=u.exports},f40c:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uAvatar:i("5674").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"bg-white u-m-t-20 u-p-25 u-p-t-15 u-p-b-15",staticStyle:{"border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"text-bold u-font-28 u-p-10 text-black u-border-bottom"},[t._v(t._s(t.title))]),t._t("content",[i("v-uni-view",{},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-flex u-p-l-25 u-p-t-25 u-row-between"},[i("v-uni-view",{staticClass:"text-black u-font-28"},[t._v(t._s(e.title))]),e.avater?i("v-uni-view",{staticClass:"u-flex u-row-right"},[i("u-avatar",{attrs:{src:"",size:"52"}}),i("v-uni-view",{staticClass:"text-black u-font-28 u-m-l-15"},[t._v(t._s(e.value))])],1):i("v-uni-view",{staticClass:"text-black u-font-28"},[t._v(t._s(e.value))])],1)})),1)])],2)],1)},r=[]},fa39:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-time-axis"},[t._t("default")],2)},r=[]}}]);