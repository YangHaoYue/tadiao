(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-ranking-moneyRank"],{"0257":function(t,e,a){var i=a("96b3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("4ec37d12",i,!0,{sourceMap:!1,shadowMode:!1})},"22c4":function(t,e,a){"use strict";a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(){this.getInfo(),this.day=this.http.getToday(),this.start=this.http.getToday(),this.end=this.http.getToday()},data:function(){return{current:!0,day:"",showCalender:!1,show:!1,start:"",end:"",list:[],page:1,last_page:1}},methods:{getInfo:function(){var t=this,e="";e=this.current?{branch_id:uni.getStorageSync("branch_id"),start_at:this.start,end_at:this.end,page:this.page}:{branch_id:uni.getStorageSync("branch_id"),page:this.page},this.http.get("Manager/orderRank",e).then((function(e){1e3==e.code&&(0==t.list.length?(t.list=e.data.staff_data,t.last_page=e.data.last_page):e.data.staff_data.forEach((function(e){t.list.push(e)})))}))},changeSub:function(){this.current=!this.current},loadMore:function(){var t=this;this.page>=this.last_page||(this.page=++this.page,setTimeout((function(){t.getInfo()}),50))},clearData:function(){this.page=1,this.last_page=1,this.list=[],this.getInfo()},chooseDay:function(t){this.clearData()},chooseDayRange:function(t){console.log(t),this.start=t.startDate,this.end=t.endDate,this.clearData()}}};e.default=i},2573:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uImage:a("03f6").default,uIcon:a("f4ee").default,uAvatar:a("5674").default,uCalendar:a("33f2").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"bg",style:"min-height:"+t.$u.sys().windowHeight+"px;"},[i("v-uni-view",{staticClass:"u-flex u-row-between",staticStyle:{padding:"65rpx 67rpx 6rpx 27rpx"}},[i("u-image",{attrs:{src:a("c2fd"),width:"414",height:"83",mode:"scaleToFill"}}),i("u-image",{attrs:{src:a("1456"),width:"144",height:"154"}})],1),i("v-uni-view",{staticClass:"u-flex u-row-between",staticStyle:{padding:"0 40rpx 0rpx 30rpx"}},[i("v-uni-view",{staticClass:"subsection u-flex",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSub.apply(void 0,arguments)}}},[i("v-uni-view",{class:t.current?"selected":"nomal",staticStyle:{"border-radius":"8rpx 0 0 8rpx"}},[t._v("月")]),i("v-uni-view",{class:t.current?"nomal":"selected",staticStyle:{"border-radius":"0 8rpx 8rpx 0"}},[t._v("自定义")])],1),t.current?i("v-uni-view",{staticClass:"u-p-10 u-flex u-row-between u-border text-white",staticStyle:{"border-radius":"10rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCalender=!0}}},[i("v-uni-view",[t._v(t._s(t.day))]),i("u-icon",{staticClass:"u-m-l-10",attrs:{name:"calendar",size:"28",color:"#FFFFFF"}})],1):i("v-uni-view",{staticClass:"u-flex u-font-28 text-white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}},[i("v-uni-view",{staticClass:"u-p-10 u-flex u-row-between u-border",staticStyle:{"border-radius":"6rpx"}},[i("v-uni-view",[t._v(t._s(t.start))]),i("u-icon",{staticClass:"u-m-l-10",attrs:{name:"calendar",size:"28",color:"#FFFFFF"}})],1),i("v-uni-view",{staticClass:"u-m-l-10 u-m-r-10"},[t._v("-")]),i("v-uni-view",{staticClass:"u-p-10 u-flex u-row-between u-border",staticStyle:{"border-radius":"6rpx"}},[i("v-uni-view",[t._v(t._s(t.end))]),i("u-icon",{staticClass:"u-m-l-10",attrs:{name:"calendar",size:"28",color:"#FFFFFF"}})],1)],1)],1),i("v-uni-view",{staticClass:"card bg-white"},[i("v-uni-view",{staticClass:"u-flex u-row-around u-p-b-14"},[i("v-uni-view",{staticClass:"text-black u-font-26"},[t._v("排行")]),i("v-uni-view",{staticClass:"text-black u-font-26"},[t._v("员工")]),i("v-uni-view",{staticClass:"text-black u-font-26"},[t._v("订单金额")])],1),i("v-uni-scroll-view",{staticStyle:{height:"750rpx"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._l(t.list,(function(e,s){return[i("v-uni-view",{key:s+"_0",staticClass:"u-flex u-col-center u-border-bottom u-p-14"},[i("v-uni-view",{staticClass:"u-flex u-flex-1"},[0==s?i("u-image",{attrs:{src:a("f9c3"),width:"34",height:"45"}}):1==s?i("u-image",{attrs:{src:a("6d21"),width:"34",height:"45"}}):2==s?i("u-image",{attrs:{src:a("9184"),width:"34",height:"45"}}):i("v-uni-view",{staticClass:"bg-white",staticStyle:{width:"34rpx",height:"45rpx"}}),i("v-uni-view",{staticClass:"u-m-l-30 text-black u-font-28"},[t._v(t._s(s+1))])],1),i("v-uni-view",{staticClass:"u-flex u-flex-1 u-col-center"},[i("u-avatar",{attrs:{src:t.http.resourceUrl()+e.avatar,size:"60"}}),i("v-uni-view",{staticClass:"u-font-26 text-black u-m-l-12"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"u-font-28 u-flex-1 u-text-center",staticStyle:{color:"#FE5E10"}},[t._v(t._s(e.order_amount))])],1)]}))],2)],1),i("u-calendar",{attrs:{"safe-area-inset-bottom":!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseDay.apply(void 0,arguments)}},model:{value:t.showCalender,callback:function(e){t.showCalender=e},expression:"showCalender"}}),i("u-calendar",{attrs:{mode:"range","safe-area-inset-bottom":!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseDayRange.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)],1)},n=[]},"87d1":function(t,e,a){"use strict";var i=a("0257"),s=a.n(i);s.a},"96b3":function(t,e,a){var i=a("24fb"),s=a("1de5"),n=a("18a6");e=i(!1);var r=s(n);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.bg[data-v-35ac6764]{background-image:url('+r+");background-size:100% 100%;width:100vw}.subsection[data-v-35ac6764]{border:%?1?% solid #fff;border-radius:%?8?%;font-size:%?24?%}.subsection .selected[data-v-35ac6764]{background-color:#fff;color:#0f58fb;padding:%?10?% %?20?%}.subsection .nomal[data-v-35ac6764]{background-color:rgba(0,0,0,.1);color:#fff;padding:%?10?% %?20?%}.card[data-v-35ac6764]{padding:%?24?% %?27?%;margin:%?28?% %?65?% %?48?% %?58?%;border-radius:%?30?%;height:27rem}",""]),t.exports=e},c2fd:function(t,e,a){t.exports=a.p+"static/img/订单金额排名@2x.fb211720.png"},cb61:function(t,e,a){"use strict";a.r(e);var i=a("2573"),s=a("ee85");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("87d1");var r,u=a("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"35ac6764",null,!1,i["a"],r);e["default"]=c.exports},ee85:function(t,e,a){"use strict";a.r(e);var i=a("22c4"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a}}]);