(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-setting-setting"],{"08df":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var r={uAvatar:a("5674").default,uImage:a("03f6").default,uButton:a("64a3").default,uGap:a("a236").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"u-flex u-row-center u-p-t-36",staticStyle:{"flex-direction":"column"}},[a("u-avatar",{attrs:{size:"150",src:t.avatarSrc,"show-level":!0,"level-icon":"../../../static/camera.png","level-bg-color":"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"u-m-t-30 u-font-28 text-black"},[t._v(t._s(t.identity))])],1),a("v-uni-view",[a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30 u-border-bottom"},[a("v-uni-view",[t._v("姓名")]),a("v-uni-view",[t._v(t._s(t.real_name))])],1),a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30"},[a("v-uni-view",[t._v("所属分公司")]),a("v-uni-view",[t._v(t._s(t.branch_name))])],1),a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30 u-border-bottom"},[a("v-uni-view",[t._v("联系电话")]),a("v-uni-view",[t._v(t._s(t.tel_num))])],1),t.staff_img.length>0?a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30"},[a("v-uni-view",{staticClass:"text-bold u-m-b-30"},[t._v("资格证书")]),a("v-uni-view",{staticClass:"u-flex"},[t._l(t.staff_img,(function(e,r){return[a("u-image",{key:r+"_0",staticClass:"u-m-r-20",attrs:{src:t.http.resourceUrl()+e,height:"199",width:"199",mode:"aspectFit"}})]}))],2)],1):t._e(),t.id_card_img.length>0?a("v-uni-view",{staticClass:"u-flex u-row-between u-p-30"},[a("v-uni-view",{staticClass:"text-bold u-m-b-30"},[t._v("身份证正反面")]),a("v-uni-view",{staticClass:"u-flex"},[t._l(t.id_card_img,(function(e,r){return[a("u-image",{key:r+"_0",staticClass:"u-m-r-20",attrs:{src:t.http.resourceUrl()+e,height:"199",width:"199",mode:"aspectFit"}})]}))],2)],1):t._e(),a("v-uni-view",{staticClass:"u-m-20"},[a("u-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("保存")]),a("u-button",{staticClass:"u-m-t-20",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.exit.apply(void 0,arguments)}}},[t._v("退出登录")])],1),a("u-gap",{attrs:{"bg-color":"#fff"}})],1)],1)},n=[]},"0d29":function(t,e,a){"use strict";a.r(e);var r=a("a7ae"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"17b9":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};e.default=r},"1fde":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var r={uIcon:a("f4ee").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-avatar",style:[t.wrapStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[!t.uText&&t.avatar?a("v-uni-image",{staticClass:"u-avatar__img",style:[t.imgStyle],attrs:{src:t.avatar,mode:t.imgMode},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.loadError.apply(void 0,arguments)}}}):t.uText?a("v-uni-text",{staticClass:"u-line-1",style:{fontSize:"38rpx"}},[t._v(t._s(t.uText))]):t._t("default"),t.showSex?a("v-uni-view",{staticClass:"u-avatar__sex",class:["u-avatar__sex--"+t.sexIcon],style:[t.uSexStyle]},[a("u-icon",{attrs:{name:t.sexIcon,size:"20"}})],1):t._e(),t.showLevel?a("v-uni-view",{staticClass:"u-avatar__level",style:[t.uLevelStyle]},[a("u-icon",{attrs:{name:t.levelIcon,size:"20"}})],1):t._e()],2)},n=[]},2701:function(t,e,a){"use strict";var r=a("ce2d"),i=a.n(r);i.a},2749:function(t,e,a){"use strict";var r=a("6171"),i=a.n(r);i.a},"2da9":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",i={name:"u-avatar",props:{bgColor:{type:String,default:"transparent"},src:{type:String,default:""},size:{type:[String,Number],default:"default"},mode:{type:String,default:"circle"},text:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},index:{type:[String,Number],default:""},sexIcon:{type:String,default:"man"},levelIcon:{type:String,default:"level"},levelBgColor:{type:String,default:""},sexBgColor:{type:String,default:""},showSex:{type:Boolean,default:!1},showLevel:{type:Boolean,default:!1}},data:function(){return{error:!1,avatar:this.src?this.src:r}},watch:{src:function(t){t?(this.avatar=t,this.error=!1):(this.avatar=r,this.error=!0)}},computed:{wrapStyle:function(){var t={};return t.height="large"==this.size?"120rpx":"default"==this.size?"90rpx":"mini"==this.size?"70rpx":this.size+"rpx",t.width=t.height,t.flex="0 0 ".concat(t.height),t.backgroundColor=this.bgColor,t.borderRadius="circle"==this.mode?"500px":"5px",this.text&&(t.padding="0 6rpx"),t},imgStyle:function(){var t={};return t.borderRadius="circle"==this.mode?"500px":"5px",t},uText:function(){return String(this.text)[0]},uSexStyle:function(){var t={};return this.sexBgColor&&(t.backgroundColor=this.sexBgColor),t},uLevelStyle:function(){var t={};return this.levelBgColor&&(t.backgroundColor=this.levelBgColor),t}},methods:{loadError:function(){this.error=!0,this.avatar=r},click:function(){this.$emit("click",this.index)}}};e.default=i},"418e":function(t,e,a){"use strict";a.r(e);var r=a("17b9"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},4504:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-btn[data-v-7014cccf]::after{border:none}.u-btn[data-v-7014cccf]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-7014cccf]{border:1px solid #fff}.u-btn--default[data-v-7014cccf]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-7014cccf]{color:#fff;border-color:#0f58fb;background-color:#0f58fb}.u-btn--success[data-v-7014cccf]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-7014cccf]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-7014cccf]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-7014cccf]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-7014cccf]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-7014cccf]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-7014cccf]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-7014cccf]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-7014cccf]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-7014cccf]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-7014cccf]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-7014cccf]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-7014cccf]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-7014cccf]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-7014cccf]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-7014cccf]{border-radius:%?100?%}.u-round-circle[data-v-7014cccf]::after{border-radius:%?100?%}.u-loading[data-v-7014cccf]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-7014cccf]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-7014cccf]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-7014cccf]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-7014cccf]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-7014cccf]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-7014cccf]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-7014cccf]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-7014cccf]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-7014cccf]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-7014cccf]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-7014cccf]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-7014cccf]{background:#18b566!important;color:#fff}.u-info-hover[data-v-7014cccf]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-7014cccf]{background:#f29100!important;color:#fff}.u-error-hover[data-v-7014cccf]{background:#dd6161!important;color:#fff}',""]),t.exports=e},5674:function(t,e,a){"use strict";a.r(e);var r=a("1fde"),i=a("7b32");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("efc1");var o,A=a("f0c5"),c=Object(A["a"])(i["default"],r["b"],r["c"],!1,null,"3827d775",null,!1,r["a"],o);e["default"]=c.exports},6171:function(t,e,a){var r=a("c249");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("2f95803b",r,!0,{sourceMap:!1,shadowMode:!1})},6431:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},n=[]},"64a3":function(t,e,a){"use strict";a.r(e);var r=a("6431"),i=a("dfdb");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("2701");var o,A=a("f0c5"),c=Object(A["a"])(i["default"],r["b"],r["c"],!1,null,"7014cccf",null,!1,r["a"],o);e["default"]=c.exports},"673e":function(t,e,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var r=a[0];if(r.width&&r.width&&(r.targetWidth=r.height>r.width?r.height:r.width,r.targetWidth)){e.fields=r;var i="",n="";i=t.touches[0].clientX,n=t.touches[0].clientY,e.rippleTop=n-r.top-r.targetWidth/2,e.rippleLeft=i-r.left-r.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=r},"7b32":function(t,e,a){"use strict";a.r(e);var r=a("2da9"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"7c1f":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-avatar[data-v-3827d775]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#606266;border-radius:10px;position:relative}.u-avatar__img[data-v-3827d775]{width:100%;height:100%}.u-avatar__sex[data-v-3827d775]{position:absolute;width:%?32?%;color:#fff;height:%?32?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?100?%;top:5%;z-index:1;right:-7%;border:1px #fff solid}.u-avatar__sex--man[data-v-3827d775]{background-color:#2979ff}.u-avatar__sex--woman[data-v-3827d775]{background-color:#fa3534}.u-avatar__sex--none[data-v-3827d775]{background-color:#f90}.u-avatar__level[data-v-3827d775]{position:absolute;width:%?32?%;color:#fff;height:%?32?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?100?%;bottom:5%;z-index:1;right:-7%;border:1px #fff solid;background-color:#f90}',""]),t.exports=e},"9f7a":function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-gap",style:[t.gapStyle]})},n=[]},a236:function(t,e,a){"use strict";a.r(e);var r=a("9f7a"),i=a("418e");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("2749");var o,A=a("f0c5"),c=Object(A["a"])(i["default"],r["b"],r["c"],!1,null,"0c45c33e",null,!1,r["a"],o);e["default"]=c.exports},a788:function(t,e,a){"use strict";a.r(e);var r=a("08df"),i=a("0d29");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);var o,A=a("f0c5"),c=Object(A["a"])(i["default"],r["b"],r["c"],!1,null,"197d8cdc",null,!1,r["a"],o);e["default"]=c.exports},a7ae:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={onLoad:function(){this.getInfo()},data:function(){return{avatarSrc:"",tempFilePath:"",identity:"业务员",real_name:"李四",branch_name:"江西分公司",tel_num:"15168308762",staff_img:[],id_card_img:[]}},methods:{getInfo:function(){var t=this;this.http.get("UserCenter/getRealInfo").then((function(e){t.avatarSrc=t.http.resourceUrl()+e.data.avatar,t.identity=e.data.identity,t.real_name=e.data.real_name,t.branch_name=e.data.branch_name,t.tel_num=e.data.tel_num,t.staff_img=e.data.staff_img,t.id_card_img=e.data.id_card_img}))},chooseImg:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){console.log(e),t.avatarSrc=e.tempFilePaths[0],t.http.uploadFile("Common/fileUploader",e.tempFilePaths[0]).then((function(e){t.tempFilePath=e.data.path}))}})},submit:function(){var t=this;this.http.post("UserCenter/editAvatar",{avatar:this.tempFilePath}).then((function(e){t.$u.toast(e.msg),1e3==e.code&&setTimeout((function(){uni.navigateBack({delta:1})}),1500)}))},exit:function(){uni.clearStorageSync(),window.location.href="http://tower.0831.run/html/user"}}};e.default=r},c249:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */',""]),t.exports=e},ce2d:function(t,e,a){var r=a("4504");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("30493c38",r,!0,{sourceMap:!1,shadowMode:!1})},dfdb:function(t,e,a){"use strict";a.r(e);var r=a("673e"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},e634:function(t,e,a){var r=a("7c1f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("864700e2",r,!0,{sourceMap:!1,shadowMode:!1})},efc1:function(t,e,a){"use strict";var r=a("e634"),i=a.n(r);i.a}}]);