(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-StaffManagement-staffDetail-projectDetail"],{"0337":function(t,e,a){"use strict";a.r(e);var i=a("94f6"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"0e61":function(t,e,a){"use strict";var i=a("b843"),o=a.n(i);o.a},"19a3":function(t,e,a){"use strict";a.r(e);var i=a("de21"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"608c":function(t,e,a){var i=a("c90c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("49e14359",i,!0,{sourceMap:!1,shadowMode:!1})},8076:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-card[data-v-62106277]{position:relative;overflow:hidden;font-size:%?28?%;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}.u-card-full[data-v-62106277]{margin-left:0!important;margin-right:0!important;width:100%}.u-card--border[data-v-62106277]:after{border-radius:%?16?%}.u-card__head--left[data-v-62106277]{color:#303133}.u-card__head--left__thumb[data-v-62106277]{margin-right:%?16?%}.u-card__head--left__title[data-v-62106277]{max-width:%?400?%}.u-card__head--right[data-v-62106277]{color:#909399;margin-left:%?6?%}.u-card__body[data-v-62106277]{color:#606266}.u-card__foot[data-v-62106277]{color:#909399}',""]),t.exports=e},9329:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uCard:a("e99c").default,uImage:a("03f6").default,uLoadmore:a("0486").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t._l(t.list,(function(e,i){return[a("u-card",{key:i+"_0",attrs:{title:"创建时间："+e.created_at,"title-size":"24","title-color":"#666666",border:!1},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e.order_id)}}},[a("v-uni-view",{attrs:{slot:"body"},slot:"body"},[a("v-uni-view",{staticClass:"text-bold u-font-28 text-black"},[t._v(t._s(e.project_name))]),a("v-uni-view",{staticClass:"u-flex u-row-right"},[a("v-uni-view",{staticClass:"u-font-24",staticStyle:{color:"#999999"}},[t._v("项目金额:"),a("v-uni-text",{staticStyle:{color:"#FE5E10"}},[t._v("￥"+t._s(e.amount))])],1)],1)],1),a("v-uni-view",{staticClass:"u-flex u-row-between",attrs:{slot:"foot"},slot:"foot"},[a("v-uni-view",{staticClass:"u-flex u-font-24",staticStyle:{color:"#666666"}},[t._v("合同协调人："),a("u-image",{staticClass:"u-m-r-10",attrs:{shape:"circle",height:"56rpx",width:"56rpx",src:t.http.resourceUrl()+e.handle_data.avatar}}),t._v(t._s(e.handle_data.name))],1)],1)],1)]})),a("v-uni-view",{staticClass:"u-m-t-20 u-m-b-20"},[a("u-loadmore",{attrs:{status:t.status}})],1)],2)},r=[]},"94f6":function(t,e,a){"use strict";a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(t){this.staff_id=t.staff_id,this.getInfo()},onReachBottom:function(){var t=this;this.page>=this.last_page||(this.status="loading",this.page=++this.page,setTimeout((function(){t.getInfo()}),50))},data:function(){return{staff_id:"",page:1,last_page:1,list:[],status:"loading",iconType:"flower",loadText:{loadmore:"轻轻上拉",loading:"努力加载中",nomore:"实在没有了"}}},methods:{getInfo:function(){var t=this;this.http.get("Manager/staffOrderList",{staff_id:this.staff_id,page:this.page}).then((function(e){1e3==e.code&&(0==t.list.length?(t.list=e.data.order_data,t.last_page=e.data.last_page):e.data.order_data.forEach((function(e){t.list.push(e)})),console.log(t.list),t.page>=t.last_page?t.status="nomore":t.status="loadmore")}))},claerData:function(){this.page=1,this.last_page=1,this.list=[],this.status="loading",this.getInfo()},toDetail:function(t){uni.navigateTo({url:"/pages/mine/projectManagement/detail/detail?order_id="+t})}}};e.default=i},b843:function(t,e,a){var i=a("8076");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("0c8e7e8a",i,!0,{sourceMap:!1,shadowMode:!1})},c90c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-5b9d387c]{background-color:#f8f8f8}body.?%PAGE?%[data-v-5b9d387c]{background-color:#f8f8f8}",""]),t.exports=e},de21:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-card",props:{full:{type:Boolean,default:!1},title:{type:String,default:""},titleColor:{type:String,default:"#303133"},titleSize:{type:[Number,String],default:"30"},subTitle:{type:String,default:""},subTitleColor:{type:String,default:"#909399"},subTitleSize:{type:[Number,String],default:"26"},isBold:{type:Boolean,default:!1},border:{type:Boolean,default:!0},index:{type:[Number,String,Object],default:""},margin:{type:String,default:"30rpx"},borderRadius:{type:[Number,String],default:"16"},headStyle:{type:Object,default:function(){return{}}},bodyStyle:{type:Object,default:function(){return{}}},footStyle:{type:Object,default:function(){return{}}},headBorderBottom:{type:Boolean,default:!0},footBorderTop:{type:Boolean,default:!0},thumb:{type:String,default:""},thumbWidth:{type:[String,Number],default:"60"},thumbCircle:{type:Boolean,default:!1},padding:{type:[String,Number],default:"30"},showHead:{type:Boolean,default:!0},showFoot:{type:Boolean,default:!0},boxShadow:{type:String,default:"none"}},data:function(){return{}},methods:{click:function(){this.$emit("click",this.index)},headClick:function(){this.$emit("head-click",this.index)},bodyClick:function(){this.$emit("body-click",this.index)},footClick:function(){this.$emit("foot-click",this.index)}}};e.default=i},e99c:function(t,e,a){"use strict";a.r(e);var i=a("f63e"),o=a("19a3");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("0e61");var n,u=a("f0c5"),l=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"62106277",null,!1,i["a"],n);e["default"]=l.exports},f4b8:function(t,e,a){"use strict";a.r(e);var i=a("9329"),o=a("0337");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("f935");var n,u=a("f0c5"),l=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"5b9d387c",null,!1,i["a"],n);e["default"]=l.exports},f63e:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-card",class:{"u-border":t.border,"u-card-full":t.full,"u-card--border":t.borderRadius>0},style:{borderRadius:t.borderRadius+"rpx",margin:t.margin,boxShadow:t.boxShadow},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.showHead?a("v-uni-view",{staticClass:"u-card__head",class:{"u-border-bottom":t.headBorderBottom},style:[{padding:t.padding+"rpx"},t.headStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.headClick.apply(void 0,arguments)}}},[t.$slots.head?t._t("head"):a("v-uni-view",{staticClass:"u-flex u-row-between"},[t.title?a("v-uni-view",{staticClass:"u-card__head--left u-flex u-line-1"},[t.thumb?a("v-uni-image",{staticClass:"u-card__head--left__thumb",style:{height:t.thumbWidth+"rpx",width:t.thumbWidth+"rpx",borderRadius:t.thumbCircle?"100rpx":"6rpx"},attrs:{src:t.thumb,mode:"aspectfull"}}):t._e(),a("v-uni-text",{staticClass:"u-card__head--left__title u-line-1",style:{fontSize:t.titleSize+"rpx",color:t.titleColor}},[t._v(t._s(t.title))])],1):t._e(),t.subTitle?a("v-uni-view",{staticClass:"u-card__head--right u-line-1"},[a("v-uni-text",{staticClass:"u-card__head__title__text",class:t.isBold?"text-bold":"",style:{fontSize:t.subTitleSize+"rpx",color:t.subTitleColor}},[t._v(t._s(t.subTitle))])],1):t._e()],1)],2):t._e(),a("v-uni-view",{staticClass:"u-card__body",style:[{padding:t.padding+"rpx"},t.bodyStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bodyClick.apply(void 0,arguments)}}},[t._t("body")],2),t.showFoot?a("v-uni-view",{staticClass:"u-card__foot",class:{"u-border-top":t.footBorderTop},style:[{padding:t.$slots.foot?t.padding+"rpx":0},t.footStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.footClick.apply(void 0,arguments)}}},[t._t("foot")],2):t._e()],1)},r=[]},f935:function(t,e,a){"use strict";var i=a("608c"),o=a.n(i);o.a}}]);