(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-maintenance-maintenance"],{"0f0a":function(t,e,a){"use strict";a.r(e);var i=a("f2cd"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},1091:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uTabs:a("2c48").default,uImage:a("a883").default,uCard:a("f95a").default,uLoadmore:a("c8d8").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-tabs",{attrs:{list:t.tabList,"is-scroll":!1,current:t.current,"active-color":"#0F58FB"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"u-p-b-20"},[1==t.current?i("v-uni-scroll-view",{staticStyle:{height:"200rpx"},attrs:{"scroll-y":!0,"lower-threshold":"50"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"item-box u-row-center"},t._l(t.idotList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"idot u-line-1",class:t.idot==e.value?"selected":"nomal",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chooseIdot(e)}}},[t._v(t._s(e.title))])})),1)],1):t._e(),0===t.tabList[t.current].list.length?i("v-uni-view",{staticStyle:{margin:"139rpx 192rpx"}},[i("u-image",{attrs:{width:"365",height:"365",src:a("bc0d")}}),i("v-uni-view",{staticClass:"u-font-28 text-gray u-m-t-40 u-text-center"},[t._v("空空如也~")])],1):t._e(),t._l(t.tabList[t.current].list,(function(e,a){return[0==t.current?i("u-card",{key:a+"_0",attrs:{title:e.title,"title-size":"24","title-color":"#666666",border:!1,"sub-title":e.subTitle,"sub-title-size":"28","sub-title-color":e.subTitleColor,isBold:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e.id)}}},[i("v-uni-view",{staticClass:"u-flex u-row-between",attrs:{slot:"body"},slot:"body"},[i("v-uni-view",{staticClass:"text-bold u-font-28 text-black"},[t._v(t._s(e.project_name))])],1),i("v-uni-view",{staticClass:"u-flex u-row-between",attrs:{slot:"foot"},slot:"foot"},[i("v-uni-view",{staticClass:"u-flex u-font-24",staticStyle:{color:"#666666"}},[t._v("合同协调人："),i("u-image",{staticClass:"u-m-r-10",attrs:{shape:"circle",height:"56rpx",width:"56rpx",src:t.http.resourceUrl()+e.handle_data.avatar}}),t._v(t._s(e.handle_data.name))],1)],1)],1):i("v-uni-view",{staticClass:"u-m-25 u-p-15 bg-white",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e.order_id,e.id)}}},[i("v-uni-view",{staticClass:"u-flex"},[i("u-image",{attrs:{src:t.http.resourceUrl()+e.tower_img,width:"158",height:"158",fade:!1,mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"u-p-l-10 u-p-r-12"},[i("v-uni-view",{staticClass:"u-font-26 text-bold text-black"},[t._v(t._s(e.tower_name))]),i("v-uni-view",{staticClass:"u-font-22 u-p-l-6",staticStyle:{color:"#666666","line-height":"1.5"}},[t._v("设备出厂编码:"+t._s(e.number))]),i("v-uni-view",{staticClass:"u-font-22 u-p-l-6",staticStyle:{color:"#666666","line-height":"1.5"}},[t._v("负责人:"+t._s(e.media_name))]),i("v-uni-view",{staticClass:"u-font-22 u-p-l-6",staticStyle:{color:"#666666","line-height":"1.5"}},[t._v("联系方式:"+t._s(e.media_tel_num))]),i("v-uni-view",{staticClass:"u-font-22 u-p-l-6 u-line-1",staticStyle:{color:"#666666","line-height":"1.5"}},[t._v("地区:"+t._s(e.address_info))])],1)],1),i("v-uni-view",{staticClass:"u-border-top u-p-t-14 u-m-t-15 u-font-24",staticStyle:{color:"#666666"}},[t._v("下次维保时间:"+t._s(e.next_care_at))])],1)]})),t.tabList[t.current].list.length>0?i("v-uni-view",{staticClass:"u-m-t-20 u-m-b-20"},[i("u-loadmore",{attrs:{status:t.status}})],1):t._e()],2)],1)},r=[]},6438:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-page-body[data-v-2db93f0b]{background-color:#f8f8f8}.cNew[data-v-2db93f0b]{background:-webkit-linear-gradient(top,#1c95fa,#0f58fb);-webkit-box-shadow:0 15px 30px 0 rgba(0,0,0,.3);box-shadow:0 15px 30px 0 rgba(0,0,0,.3);height:%?112?%;width:%?112?%;color:#fff;font-size:%?24?%;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:fixed;bottom:%?80?%;right:%?38?%;z-index:9}.item-box[data-v-2db93f0b]{margin-bottom:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.idot[data-v-2db93f0b]{padding:%?8?% %?16?%;border:%?1?% solid #0f58fb;border-radius:%?8?%;margin:%?10?%;min-width:%?190?%;overflow:visible;text-align:center}.selected[data-v-2db93f0b]{color:#fff;background-color:#0f58fb}.nomal[data-v-2db93f0b]{color:#0f58fb;background-color:#f8f8f8}body.?%PAGE?%[data-v-2db93f0b]{background-color:#f8f8f8}',""]),t.exports=e},"783d":function(t,e,a){var i=a("85ec");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("18dbb289",i,!0,{sourceMap:!1,shadowMode:!1})},"85ec":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-card[data-v-62106277]{position:relative;overflow:hidden;font-size:%?28?%;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}.u-card-full[data-v-62106277]{margin-left:0!important;margin-right:0!important;width:100%}.u-card--border[data-v-62106277]:after{border-radius:%?16?%}.u-card__head--left[data-v-62106277]{color:#303133}.u-card__head--left__thumb[data-v-62106277]{margin-right:%?16?%}.u-card__head--left__title[data-v-62106277]{max-width:%?400?%}.u-card__head--right[data-v-62106277]{color:#909399;margin-left:%?6?%}.u-card__body[data-v-62106277]{color:#606266}.u-card__foot[data-v-62106277]{color:#909399}',""]),t.exports=e},"994e":function(t,e,a){"use strict";var i=a("cc69"),o=a.n(i);o.a},"9faf":function(t,e,a){"use strict";a.r(e);var i=a("1091"),o=a("a332");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("994e");var n,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2db93f0b",null,!1,i["a"],n);e["default"]=l.exports},a332:function(t,e,a){"use strict";a.r(e);var i=a("ce84"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},bc0d:function(t,e,a){t.exports=a.p+"static/img/empty.20a136a1.png"},cc69:function(t,e,a){var i=a("6438");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("51803ddb",i,!0,{sourceMap:!1,shadowMode:!1})},ce84:function(t,e,a){"use strict";a("4160"),a("d81d"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(){this.getOrdersForScreen(),this.getTypes(),this.getTowersForMng()},onReachBottom:function(){var t=this;this.tabList[this.current].page>=this.tabList[this.current].last_page||(this.status="loading",this.tabList[this.current].page=++this.tabList[this.current].page,setTimeout((function(){0==t.current?t.getOrdersForScreen():t.getTowersForMng()}),50))},data:function(){return{current:0,tabList:[{name:"按项目",list:[],page:1,last_page:1},{name:"按型号",list:[],page:1,last_page:1}],status:"loading",iconType:"flower",loadText:{loadmore:"轻轻上拉",loading:"努力加载中",nomore:"实在没有了"},idot:0,idot_page:1,idot_last_page:1,idotList:[{title:"全部",value:0}]}},methods:{getOrdersForScreen:function(){var t=this;this.http.get("FixCare/getOrdersForScreen",{page:this.tabList[0].page}).then((function(e){1e3==e.code&&(0==t.tabList[0].list.length?(t.tabList[0].list=e.data.order_data.map((function(e){return t._format(e)})),t.tabList[0].last_page=e.data.last_page):e.data.order_data.forEach((function(e){t.tabList[0].list.push(t._format(e))})),console.log(t.tabList[0].list),t.tabList[0].page>=t.tabList[0].last_page?t.status="nomore":t.status="loadmore")}))},_format:function(t){var e="",a="";switch(t.status){case 0:e="待审核",a="#105CFB";break;case 1:e="进行中",a="#2DA016";break;case 2:e="已拒绝",a="#FE5E10";break;case 3:e="已结束",a="#FE5E10";break}return{id:t.order_id,subTitle:e,subTitleColor:a,project_name:t.project_name,title:"创建时间："+t.created_at,handle_data:t.handle_data}},getTowersForMng:function(){var t=this;this.http.get("FixCare/getTowersForMng",{order_id:this.order_id,type_id:this.idot,page:this.tabList[1].page}).then((function(e){1e3==e.code&&(0==t.tabList[1].list.length?(t.tabList[1].list=e.data.tower_data,t.tabList[1].last_page=e.data.last_page):e.data.tower_data.forEach((function(e){t.tabList[1].list.push(e)})),t.tabList[1].page>=t.tabList[0].last_page?t.status="nomore":t.status="loadmore")}))},getTypes:function(){var t=this;this.http.get("Index/getTypes",{page:this.idot_page},!0).then((function(e){1e3==e.code&&(e.data.type_data.forEach((function(e){t.idotList.push({title:e.name,value:e.id})})),t.typeLast_page=e.data.last_page)}))},loadmore:function(){var t=this;this.idot_page>=this.idot_last_page||(this.status="loading",this.idot_page=++this.idot_page,setTimeout((function(){t.getTypes()}),50))},change:function(t){this.current=t},clearData:function(){this.status="loading",this.tabList[this.current].page=1,this.tabList[this.current].last_page=1,this.tabList[this.current].list=[],0==this.current?this.getOrdersForScreen():this.getTowersForMng()},toDetail:function(t,e){0==this.current?uni.navigateTo({url:"projectDetail/projectDetail?order_id="+t}):uni.navigateTo({url:"detail/detail?order_id="+t+"&tower_id="+e})},chooseIdot:function(t){this.idot=t.value,this.clearData()}}};e.default=i},d398:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-card",class:{"u-border":t.border,"u-card-full":t.full,"u-card--border":t.borderRadius>0},style:{borderRadius:t.borderRadius+"rpx",margin:t.margin,boxShadow:t.boxShadow},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.showHead?a("v-uni-view",{staticClass:"u-card__head",class:{"u-border-bottom":t.headBorderBottom},style:[{padding:t.padding+"rpx"},t.headStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.headClick.apply(void 0,arguments)}}},[t.$slots.head?t._t("head"):a("v-uni-view",{staticClass:"u-flex u-row-between"},[t.title?a("v-uni-view",{staticClass:"u-card__head--left u-flex u-line-1"},[t.thumb?a("v-uni-image",{staticClass:"u-card__head--left__thumb",style:{height:t.thumbWidth+"rpx",width:t.thumbWidth+"rpx",borderRadius:t.thumbCircle?"100rpx":"6rpx"},attrs:{src:t.thumb,mode:"aspectfull"}}):t._e(),a("v-uni-text",{staticClass:"u-card__head--left__title u-line-1",style:{fontSize:t.titleSize+"rpx",color:t.titleColor}},[t._v(t._s(t.title))])],1):t._e(),t.subTitle?a("v-uni-view",{staticClass:"u-card__head--right u-line-1"},[a("v-uni-text",{staticClass:"u-card__head__title__text",class:t.isBold?"text-bold":"",style:{fontSize:t.subTitleSize+"rpx",color:t.subTitleColor}},[t._v(t._s(t.subTitle))])],1):t._e()],1)],2):t._e(),a("v-uni-view",{staticClass:"u-card__body",style:[{padding:t.padding+"rpx"},t.bodyStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bodyClick.apply(void 0,arguments)}}},[t._t("body")],2),t.showFoot?a("v-uni-view",{staticClass:"u-card__foot",class:{"u-border-top":t.footBorderTop},style:[{padding:t.$slots.foot?t.padding+"rpx":0},t.footStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.footClick.apply(void 0,arguments)}}},[t._t("foot")],2):t._e()],1)},r=[]},d833:function(t,e,a){"use strict";var i=a("783d"),o=a.n(i);o.a},f2cd:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-card",props:{full:{type:Boolean,default:!1},title:{type:String,default:""},titleColor:{type:String,default:"#303133"},titleSize:{type:[Number,String],default:"30"},subTitle:{type:String,default:""},subTitleColor:{type:String,default:"#909399"},subTitleSize:{type:[Number,String],default:"26"},isBold:{type:Boolean,default:!1},border:{type:Boolean,default:!0},index:{type:[Number,String,Object],default:""},margin:{type:String,default:"30rpx"},borderRadius:{type:[Number,String],default:"16"},headStyle:{type:Object,default:function(){return{}}},bodyStyle:{type:Object,default:function(){return{}}},footStyle:{type:Object,default:function(){return{}}},headBorderBottom:{type:Boolean,default:!0},footBorderTop:{type:Boolean,default:!0},thumb:{type:String,default:""},thumbWidth:{type:[String,Number],default:"60"},thumbCircle:{type:Boolean,default:!1},padding:{type:[String,Number],default:"30"},showHead:{type:Boolean,default:!0},showFoot:{type:Boolean,default:!0},boxShadow:{type:String,default:"none"}},data:function(){return{}},methods:{click:function(){this.$emit("click",this.index)},headClick:function(){this.$emit("head-click",this.index)},bodyClick:function(){this.$emit("body-click",this.index)},footClick:function(){this.$emit("foot-click",this.index)}}};e.default=i},f95a:function(t,e,a){"use strict";a.r(e);var i=a("d398"),o=a("0f0a");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("d833");var n,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"62106277",null,!1,i["a"],n);e["default"]=l.exports}}]);