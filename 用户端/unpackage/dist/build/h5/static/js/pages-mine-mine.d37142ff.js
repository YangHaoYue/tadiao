(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine"],{1439:function(t,a,e){var n=e("24fb"),i=e("1de5"),r=e("c95a");a=n(!1);var u=i(r);a.push([t.i,"uni-page-body[data-v-3f5ed6d6]{background-color:#f8f8f8}.bgImg[data-v-3f5ed6d6]{width:100%;height:%?528?%;padding:0 %?22?%;background-image:url("+u+");background-size:100% 100%}body.?%PAGE?%[data-v-3f5ed6d6]{background-color:#f8f8f8}",""]),t.exports=a},"1de5":function(t,a,e){"use strict";t.exports=function(t,a){return a||(a={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},7743:function(t,a,e){"use strict";e.r(a);var n=e("790b"),i=e("a6fc");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("87ff");var u,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"3f5ed6d6",null,!1,n["a"],u);a["default"]=c.exports},"790b":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={uAvatar:e("391d").default,uImage:e("1146").default,uButton:e("05ab").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"bgImg"},[e("v-uni-view",{staticClass:"u-flex u-col-center u-p-l-14 u-p-t-60 u-p-b-40",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navgate("/pages/mine/setting/setting")}}},[e("u-avatar",{attrs:{src:t.avaterSrc,size:"132"}}),e("v-uni-view",{staticClass:"u-m-l-30 u-font-36 text-white text-bold"},[t._v(t._s(t.name))])],1),e("v-uni-view",{staticClass:"bg-white",staticStyle:{"border-radius":"10rpx",height:"305rpx",padding:"70rpx 20rpx 40rpx 60rpx","background-image":"url(../../static/mine/bg_jiangjin@2x.png)","background-size":"100% 100%"}},[e("v-uni-view",{staticClass:"u-flex u-col-center u-row-between"},[e("v-uni-view",{staticClass:"text-bold",staticStyle:{"font-size":"52rpx",color:"#FE9127"}},[t._v(t._s(t.total_reward))]),e("v-uni-view",{staticClass:"round u-font-28 u-text-center text-white",staticStyle:{"background-color":"#FE9127",padding:"13rpx 26rpx"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toWithdrawal("withdrawal/withdrawal")}}},[t._v("申请提现")])],1),e("v-uni-view",{staticClass:"u-font-28 u-m-t-12 u-m-b-30",staticStyle:{color:"#999999"}},[t._v("项目奖金(元)")]),e("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toWithdrawal("withdrawal/detailed")}}},[e("v-uni-view",{staticClass:"u-font-24 u-m-l-4",staticStyle:{color:"#FD8F24"}},[t._v("查看明细")])],1)],1)],1),e("v-uni-view",{staticClass:"u-p-22"},[e("v-uni-view",{staticClass:"cu-list menu sm-border card-menu margin-top",staticStyle:{"margin-left":"0","margin-right":"0"}},[t._l(t.cellList1,(function(a,n){return[e("v-uni-view",{key:n+"_0",staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navgate(a.url)}}},[e("v-uni-view",{staticClass:"content u-flex"},[e("u-image",{attrs:{src:a.img,width:"44",height:"44",fade:!1}}),e("v-uni-text",{staticClass:"u-font-28 u-m-l-20",staticStyle:{color:"#404E60"}},[t._v(t._s(a.name))])],1)],1)]}))],2),e("v-uni-view",{staticClass:"cu-list menu sm-border card-menu margin-top",staticStyle:{"margin-left":"0","margin-right":"0"}},[t._l(t.cellList2,(function(a,n){return[e("v-uni-view",{key:n+"_0",staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navgate(a.url)}}},[e("v-uni-view",{staticClass:"content u-flex"},[e("u-image",{attrs:{src:a.img,width:"44",height:"44",fade:!1}}),e("v-uni-text",{staticClass:"u-font-28 u-m-l-20",staticStyle:{color:"#404E60"}},[t._v(t._s(a.name))])],1)],1)]}))],2),e("v-uni-view",{staticClass:"u-m-20"},[e("u-button",{attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.exit.apply(void 0,arguments)}}},[t._v("退出登录")])],1)],1)],1)},r=[]},"87ff":function(t,a,e){"use strict";var n=e("e4ce"),i=e.n(n);i.a},a6fc:function(t,a,e){"use strict";e.r(a);var n=e("c578"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},c578:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={onShow:function(){this.getUserInfo()},data:function(){return{avaterSrc:"",name:"",total_reward:"0",id_certified:"",refused_reason:"",cellList1:[{name:"项目线索",img:"../../static/mine/shezhi-2@2x.png",url:"/pages/mine/projectClues/projectClues"},{name:"项目管理",img:"../../static/mine/yjfk@2x.png",url:"/pages/mine/projectManagement/projectManagement"},{name:"银行卡管理",img:"../../static/mine/yinhangka@2x.png",url:"/pages/mine/bankCardManagement/bankCardManagement"},{name:"实名认证",img:"../../static/mine/yinhangka@2x.png",url:"/pages/mine/materialApply/materialApply"}],cellList2:[{name:"申请成为业务员",img:"../../static/mine/yewuyuan@2x.png",url:"/pages/mine/applicationSalesman/applicationSalesman"},{name:"申请成为维修师傅",img:"../../static/mine/weixiuyuan@2x.png",url:"/pages/mine/ApplyRepairman/ApplyRepairman"}]}},methods:{getUserInfo:function(){var t=this;this.http.get("UserCenter/user",{},!0).then((function(a){1e3==a.code&&(t.total_reward=a.data.total_reward,t.show_withdraw_button=a.data.show_withdraw_button,t.name=a.data.user_data.name,t.avaterSrc=t.http.resourceUrl()+a.data.user_data.avatar,t.id_certified=a.data.id_certified,t.refused_reason=a.data.refused_reason)}))},applicationSalesman:function(){var t=this;this.http.get("UserCenter/getStaffApplyEditPage",{type:0}).then((function(a){1==a.data.status?t.http.modal("",a.data.refused_reason+"审核未通过，请重新提交！",!1,(function(){uni.navigateTo({url:"applicationSalesman/applicationSalesman"})})):2==a.data.status?t.http.modal("","审核中，请耐心等待！",!1,(function(){})):3==a.data.status&&t.http.modal("","审核通过,请重新登录！",!1,(function(){uni.clearStorageSync(),uni.reLaunch({url:"../../login/login"})}))}))},ApplyRepairman:function(){var t=this;this.http.get("UserCenter/getStaffApplyEditPage",{type:1}).then((function(a){1==a.data.status?t.http.modal("",a.data.refused_reason+"审核未通过，请重新提交！",!1,(function(){uni.navigateTo({url:"ApplyRepairman/ApplyRepairman"})})):2==a.data.status?t.http.modal("","审核中，请耐心等待！",!1,(function(){})):3==a.data.status&&t.http.modal("","审核通过,请重新登录！",!1,(function(){uni.clearStorageSync(),uni.reLaunch({url:"../../login/login"})}))}))},navgate:function(t){uni.navigateTo({url:t})},apply:function(t){0==t?this.applicationSalesman():this.ApplyRepairman()},toWithdrawal:function(t){var a=this;if(2==this.id_certified)return this.navgate(t);var e="";switch(this.id_certified){case 0:e="请先实名认证!";break;case 1:e="审核中！";break;case 3:e=this.refused_reason;break}this.http.modal("",e,!1,(function(){1!=a.id_certified&&uni.navigateTo({url:"materialApply/materialApply"})}))},exit:function(){uni.clearStorageSync(),uni.reLaunch({url:"../login/login"})}}};a.default=n},c95a:function(t,a,e){t.exports=e.p+"static/img/bg_wode@2x.1f2c02f1.png"},e4ce:function(t,a,e){var n=e("1439");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("def600a4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);