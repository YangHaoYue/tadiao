(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-StaffManagement-staffInfo-staffInfo"],{"2b29":function(t,e,a){"use strict";a.r(e);var i=a("87b7"),n=a("550e");for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"02388858",null,!1,i["a"],r);e["default"]=c.exports},"550e":function(t,e,a){"use strict";a.r(e);var i=a("6a64"),n=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},"6a64":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(t){this.user_id=t.user_id,this.getInfo()},data:function(){return{user_id:"",avatarSrc:"",tempFilePath:"",identity:"业务员",real_name:"李四",branch_name:"江西分公司",tel_num:"15168308762",staff_img:[],id_card_img:[]}},methods:{getInfo:function(){var t=this;this.http.get("UserCenter/getRealInfo",{user_id:this.user_id}).then((function(e){t.avatarSrc=t.http.resourceUrl()+e.data.avatar,t.identity=e.data.identity,t.real_name=e.data.real_name,t.branch_name=e.data.branch_name,t.tel_num=e.data.tel_num,t.staff_img=e.data.staff_img,t.id_card_img=e.data.id_card_img}))},preView:function(t){uni.previewImage({urls:[t]})}}};e.default=i},"87b7":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return i}));var i={uAvatar:a("5674").default,uImage:a("03f6").default,uGap:a("a236").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"u-flex u-row-center u-p-t-36",staticStyle:{"flex-direction":"column"}},[a("u-avatar",{attrs:{size:"150",src:t.avatarSrc,"show-level":!0,"level-icon":"../../../static/camera.png","level-bg-color":"#ffffff"}}),a("v-uni-view",{staticClass:"u-m-t-30 u-font-28 text-black"},[t._v(t._s(t.identity))])],1),a("v-uni-view",[a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30 u-border-bottom"},[a("v-uni-view",[t._v("姓名")]),a("v-uni-view",[t._v(t._s(t.real_name))])],1),a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30"},[a("v-uni-view",[t._v("所属分公司")]),a("v-uni-view",[t._v(t._s(t.branch_name))])],1),a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30 u-border-bottom"},[a("v-uni-view",[t._v("联系电话")]),a("v-uni-view",[t._v(t._s(t.tel_num))])],1),t.staff_img.length>0?a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30"},[a("v-uni-view",{staticClass:"text-bold u-m-b-30"},[t._v("资格证书")]),a("v-uni-view",{staticClass:"u-flex"},[t._l(t.staff_img,(function(e,i){return[a("u-image",{key:i+"_0",staticClass:"u-m-r-20",attrs:{src:t.http.resourceUrl()+e,height:"199",width:"199",mode:"aspectFit"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.preView(t.http.resourceUrl()+e)}}})]}))],2)],1):t._e(),t.id_card_img.length>0?a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30"},[a("v-uni-view",{staticClass:"text-bold u-m-b-30"},[t._v("身份证正反面")]),a("v-uni-view",{staticClass:"u-flex"},[t._l(t.id_card_img,(function(e,i){return[a("u-image",{key:i+"_0",staticClass:"u-m-r-20",attrs:{src:t.http.resourceUrl()+e,height:"199",width:"199",mode:"aspectFit"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.preView(t.http.resourceUrl()+e)}}})]}))],2)],1):t._e(),a("u-gap",{attrs:{"bg-color":"#fff"}})],1)],1)},u=[]}}]);