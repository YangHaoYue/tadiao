(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-StaffManagement-staffDetail-clueDetail"],{2398:function(t,e,a){"use strict";a("4160"),a("d81d"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(t){this.staff_id=t.staff_id,this.getInfo()},onReachBottom:function(){var t=this;this.page>=this.last_page||(this.status="loading",this.page=++this.page,setTimeout((function(){t.getInfo()}),50))},data:function(){return{staff_id:"",page:1,last_page:1,list:[],status:"loading",iconType:"flower",loadText:{loadmore:"轻轻上拉",loading:"努力加载中",nomore:"实在没有了"}}},methods:{getInfo:function(){var t=this;this.http.get("Manager/staffProjectList",{staff_id:this.staff_id,page:this.page}).then((function(e){1e3==e.code&&(0==t.list.length?(t.list=e.data.project_data.map((function(e){return t._format(e)})),t.last_page=e.data.last_page):e.data.project_data.forEach((function(e){t.list.push(t._format(e))})),t.page>=t.last_page?t.status="nomore":t.status="loadmore")}))},claerData:function(){this.page=1,this.last_page=1,this.list=[],this.status="loading",this.getInfo()},_format:function(t){var e="",a="";switch(t.status){case 0:e="审核中",a="#105CFB";break;case 1:e="待跟进",a="#FE5E10";break;case 2:e="跟进中",a="#2DA016";break;case 3:e="已成交",a="#2DA016";break;case 6:e="已结束",a="#FE5E10";break}return{id:t.id,subTitle:e,subTitleColor:a,project_name:t.project_name,title:"创建时间："+t.created_at,address:t.address,provider_data:t.provider_data,handler_data:t.handler_data,lock_arr:t.lock_arr}},toDetail:function(t){uni.navigateTo({url:"/pages/mine/projectClues/detail/detail?project_id="+t})}}};e.default=i},"2aa7":function(t,e,a){"use strict";var i=a("dacb"),o=a.n(i);o.a},"2dbe":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-card",props:{full:{type:Boolean,default:!1},title:{type:String,default:""},titleColor:{type:String,default:"#303133"},titleSize:{type:[Number,String],default:"30"},subTitle:{type:String,default:""},subTitleColor:{type:String,default:"#909399"},subTitleSize:{type:[Number,String],default:"26"},isBold:{type:Boolean,default:!1},border:{type:Boolean,default:!0},index:{type:[Number,String,Object],default:""},margin:{type:String,default:"30rpx"},borderRadius:{type:[Number,String],default:"16"},headStyle:{type:Object,default:function(){return{}}},bodyStyle:{type:Object,default:function(){return{}}},footStyle:{type:Object,default:function(){return{}}},headBorderBottom:{type:Boolean,default:!0},footBorderTop:{type:Boolean,default:!0},thumb:{type:String,default:""},thumbWidth:{type:[String,Number],default:"60"},thumbCircle:{type:Boolean,default:!1},padding:{type:[String,Number],default:"30"},showHead:{type:Boolean,default:!0},showFoot:{type:Boolean,default:!0},boxShadow:{type:String,default:"none"}},data:function(){return{}},methods:{click:function(){this.$emit("click",this.index)},headClick:function(){this.$emit("head-click",this.index)},bodyClick:function(){this.$emit("body-click",this.index)},footClick:function(){this.$emit("foot-click",this.index)}}};e.default=i},"6df2":function(t,e,a){"use strict";var i=a("8d6b"),o=a.n(i);o.a},"704c":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-card",class:{"u-border":t.border,"u-card-full":t.full,"u-card--border":t.borderRadius>0},style:{borderRadius:t.borderRadius+"rpx",margin:t.margin,boxShadow:t.boxShadow},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.showHead?a("v-uni-view",{staticClass:"u-card__head",class:{"u-border-bottom":t.headBorderBottom},style:[{padding:t.padding+"rpx"},t.headStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.headClick.apply(void 0,arguments)}}},[t.$slots.head?t._t("head"):a("v-uni-view",{staticClass:"u-flex u-row-between"},[t.title?a("v-uni-view",{staticClass:"u-card__head--left u-flex u-line-1"},[t.thumb?a("v-uni-image",{staticClass:"u-card__head--left__thumb",style:{height:t.thumbWidth+"rpx",width:t.thumbWidth+"rpx",borderRadius:t.thumbCircle?"100rpx":"6rpx"},attrs:{src:t.thumb,mode:"aspectfull"}}):t._e(),a("v-uni-text",{staticClass:"u-card__head--left__title u-line-1",style:{fontSize:t.titleSize+"rpx",color:t.titleColor}},[t._v(t._s(t.title))])],1):t._e(),t.subTitle?a("v-uni-view",{staticClass:"u-card__head--right u-line-1"},[a("v-uni-text",{staticClass:"u-card__head__title__text",class:t.isBold?"text-bold":"",style:{fontSize:t.subTitleSize+"rpx",color:t.subTitleColor}},[t._v(t._s(t.subTitle))])],1):t._e()],1)],2):t._e(),a("v-uni-view",{staticClass:"u-card__body",style:[{padding:t.padding+"rpx"},t.bodyStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bodyClick.apply(void 0,arguments)}}},[t._t("body")],2),t.showFoot?a("v-uni-view",{staticClass:"u-card__foot",class:{"u-border-top":t.footBorderTop},style:[{padding:t.$slots.foot?t.padding+"rpx":0},t.footStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.footClick.apply(void 0,arguments)}}},[t._t("foot")],2):t._e()],1)},r=[]},"755a":function(t,e,a){"use strict";a.r(e);var i=a("e8fe"),o=a("a9c5");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("2aa7");var n,d=a("f0c5"),u=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"c38b7288",null,!1,i["a"],n);e["default"]=u.exports},"790a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-card[data-v-62106277]{position:relative;overflow:hidden;font-size:%?28?%;background-color:#fff;box-sizing:border-box}.u-card-full[data-v-62106277]{margin-left:0!important;margin-right:0!important;width:100%}.u-card--border[data-v-62106277]:after{border-radius:%?16?%}.u-card__head--left[data-v-62106277]{color:#303133}.u-card__head--left__thumb[data-v-62106277]{margin-right:%?16?%}.u-card__head--left__title[data-v-62106277]{max-width:%?400?%}.u-card__head--right[data-v-62106277]{color:#909399;margin-left:%?6?%}.u-card__body[data-v-62106277]{color:#606266}.u-card__foot[data-v-62106277]{color:#909399}',""]),t.exports=e},"7ef6":function(t,e,a){"use strict";a.r(e);var i=a("704c"),o=a("d540");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("6df2");var n,d=a("f0c5"),u=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"62106277",null,!1,i["a"],n);e["default"]=u.exports},"8d6b":function(t,e,a){var i=a("790a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("8a8fcb7c",i,!0,{sourceMap:!1,shadowMode:!1})},a9c5:function(t,e,a){"use strict";a.r(e);var i=a("2398"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},c97c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-c38b7288]{background-color:#f8f8f8}body.?%PAGE?%[data-v-c38b7288]{background-color:#f8f8f8}",""]),t.exports=e},d540:function(t,e,a){"use strict";a.r(e);var i=a("2dbe"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},dacb:function(t,e,a){var i=a("c97c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("791d4036",i,!0,{sourceMap:!1,shadowMode:!1})},e8fe:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uCard:a("7ef6").default,uImage:a("0ebb").default,uLoadmore:a("607d").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t._l(t.list,(function(e,i){return[a("u-card",{key:i+"_0",attrs:{title:e.title,"title-size":"24","title-color":"#666666",border:!1,"sub-title":e.subTitle,"sub-title-size":"28","sub-title-color":e.subTitleColor,isBold:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e.id)}}},[a("v-uni-view",{staticClass:"u-flex u-row-between",attrs:{slot:"body"},slot:"body"},[a("v-uni-view",{staticClass:"text-bold u-font-28 text-black"},[t._v(t._s(e.project_name))])],1),a("v-uni-view",{staticClass:"u-flex u-row-between",attrs:{slot:"foot"},slot:"foot"},[a("v-uni-view",{staticClass:"u-flex u-font-24",staticStyle:{color:"#666666"}},[t._v("合同协调人："),a("u-image",{staticClass:"u-m-r-10",attrs:{shape:"circle",height:"56rpx",width:"56rpx",src:t.http.resourceUrl()+e.handler_data.avatar}}),t._v(t._s(e.handler_data.name))],1)],1)],1)]})),a("v-uni-view",{staticClass:"u-m-t-20 u-m-b-20"},[a("u-loadmore",{attrs:{status:t.status}})],1)],2)},r=[]}}]);