(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-perfection-perfection"],{1498:function(t,e,a){"use strict";a.r(e);var i=a("eba3"),o=a("8346");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("fc0b");var r,c=a("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"dc20cac0",null,!1,i["a"],r);e["default"]=l.exports},2267:function(t,e,a){"use strict";var i=a("2469"),o=a.n(i);o.a},2469:function(t,e,a){var i=a("928c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("5fc1d26f",i,!0,{sourceMap:!1,shadowMode:!1})},"2cac":function(t,e,a){"use strict";a.r(e);var i=a("98c5"),o=a("8134");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("2267");var r,c=a("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"7014cccf",null,!1,i["a"],r);e["default"]=l.exports},"3f4b":function(t,e,a){"use strict";a("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(){this.getInfo()},data:function(){return{status:0,border:!1,action:"Common/fileUploader",labelStyle:{fontSize:"28rpx",fontWeight:"bold"},model:{name:"",qualification:[],positive:[],back:[]}}},methods:{getInfo:function(){var t=this;this.http.get("UserCenter/getRealInfoEditPage").then((function(e){t.status=e.data.status,t.model.positive=[{url:t.http.resourceUrl()+e.data.id_card_img[0]}],t.model.back=[{url:t.http.resourceUrl()+e.data.id_card_img[1]}],e.data.staff_img.map((function(e){t.model.qualification.push({url:t.http.resourceUrl()+e})})),2==e.data.status?t.http.modal("","审核中，请耐心等待！",!1,(function(){uni.navigateBack({delta:1})})):3==e.data.status?t.http.modal("","审核未通过，请重新提交！",!1,(function(){t.model.qualification=e.data.staff_img.map((function(e){return{url:t.http.resourceUrl()+e}})),t.model.positive=[{url:t.http.resourceUrl()+e.data.id_card_img[0]}],t.model.back=[{url:t.http.resourceUrl()+e.data.id_card_img[1]}]})):4==e.data.status&&t.http.modal("","非法状态,禁止进入页面！",!1,(function(){uni.navigateBack({delta:1})}))}))},onQualificationChange:function(t){console.log("onListChange",t[0]),this.model.qualification=t},onPositiveChange:function(t){console.log("onListChange",t[0]),this.model.positive=t},onBackChange:function(t){console.log("onListChange",t[0]),this.model.back=t},submit:function(){var t=this,e=[];0!=this.model.qualification.length&&this.model.qualification.map((function(t){t.response&&1e3==t.response.code?e.push(t.response.data.path):t.error||100!=t.progress||e.push(t.url)}));var a=[this.model.positive[0].response.data.path||this.model.positive[0].url,this.model.back[0].response.data.path||this.model.back[0].url];this.http.post("UserCenter/realInfo",{name:this.model.name,staff_img:e,id_card_img:a}).then((function(e){t.$u.toast(e.msg),1e3==e.code&&setTimeout((function(){uni.navigateBack({delta:1})}),1500)}))}}};e.default=i},8134:function(t,e,a){"use strict";a.r(e);var i=a("db39"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},8346:function(t,e,a){"use strict";a.r(e);var i=a("3f4b"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"83e1":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".bg[data-v-dc20cac0]{background:-webkit-linear-gradient(right,#1b91fa,#0f58fb);width:100%;height:%?258?%;padding:%?0?% %?70?% %?60?% %?50?%;font-size:%?43?%}.slot-btn[data-v-dc20cac0]{width:%?200?%;height:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f4f5f6;border-radius:%?22?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.slot-btn__hover[data-v-dc20cac0]{background-color:#ebecee}",""]),t.exports=e},8906:function(t,e,a){t.exports=a.p+"static/img/off.5df0a97d.png"},"8b41":function(t,e,a){t.exports=a.p+"static/img/shield.29196bd0.png"},"928c":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-btn[data-v-7014cccf]::after{border:none}.u-btn[data-v-7014cccf]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-7014cccf]{border:1px solid #fff}.u-btn--default[data-v-7014cccf]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-7014cccf]{color:#fff;border-color:#0f58fb;background-color:#0f58fb}.u-btn--success[data-v-7014cccf]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-7014cccf]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-7014cccf]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-7014cccf]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-7014cccf]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-7014cccf]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-7014cccf]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-7014cccf]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-7014cccf]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-7014cccf]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-7014cccf]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-7014cccf]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-7014cccf]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-7014cccf]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-7014cccf]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-7014cccf]{border-radius:%?100?%}.u-round-circle[data-v-7014cccf]::after{border-radius:%?100?%}.u-loading[data-v-7014cccf]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-7014cccf]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-7014cccf]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-7014cccf]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-7014cccf]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-7014cccf]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-7014cccf]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-7014cccf]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-7014cccf]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-7014cccf]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-7014cccf]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-7014cccf]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-7014cccf]{background:#18b566!important;color:#fff}.u-info-hover[data-v-7014cccf]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-7014cccf]{background:#f29100!important;color:#fff}.u-error-hover[data-v-7014cccf]{background:#dd6161!important;color:#fff}',""]),t.exports=e},"98c5":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},n=[]},a7ad:function(t,e,a){t.exports=a.p+"static/img/on.f918528d.png"},b5f8:function(t,e,a){var i=a("83e1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("4866bc01",i,!0,{sourceMap:!1,shadowMode:!1})},db39:function(t,e,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var i=a[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){e.fields=i;var o="",n="";o=t.touches[0].clientX,n=t.touches[0].clientY,e.rippleTop=n-i.top-i.targetWidth/2,e.rippleLeft=o-i.left-i.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=i},eba3:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uImage:a("a883").default,uForm:a("62fa").default,uFormItem:a("536c").default,uInput:a("a9c3").default,uUpload:a("8c08").default,uIcon:a("a9a8").default,uButton:a("2cac").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"bg u-flex u-row-between"},[i("v-uni-view",{staticClass:"text-bold u-font-43 text-white"},[t._v("资料完善")]),i("u-image",{attrs:{src:a("8b41"),width:"160",height:"180",fade:!1}})],1),i("v-uni-view",{staticClass:"bg-white",staticStyle:{"border-radius":"53rpx 53rpx 0 0",padding:"37rpx 57rpx 0 35rpx",transform:"translateY(-50rpx)"}},[i("u-form",[i("u-form-item",{attrs:{"label-style":t.labelStyle,required:!0,leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"account","label-width":"150",label:"姓名",prop:"name"}},[i("u-input",{attrs:{placeholder:"请输入姓名",type:"text",disabled:1==t.status},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("u-form-item",{attrs:{"label-style":t.labelStyle,required:!1,"label-position":"top",label:"上传资格证书","label-width":"150","border-bottom":!1}},[i("u-upload",{attrs:{width:"200",height:"200",action:t.http.interfaceUrl()+t.action,"file-list":t.model.qualification,"max-count":9,"custom-btn":!0,disabled:1===t.status},on:{"on-list-change":function(e){arguments[0]=e=t.$handleEvent(e),t.onQualificationChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[i("u-icon",{attrs:{name:"plus",size:"60",color:t.$u.color["lightColor"]}})],1)],1),1===t.status?i("v-uni-view",{staticClass:"u-flex"},[t._l(t.model.qualification,(function(t,e){return[i("u-image",{key:e+"_0",staticClass:"u-m-r-20",attrs:{src:t,height:"200",width:"200"}})]}))],2):t._e()],1),i("u-form-item",{attrs:{"label-style":t.labelStyle,required:!1,"label-position":"top",label:"上传身份证正反面","label-width":"150","border-bottom":!1}},[i("u-upload",{attrs:{width:"200",height:"200",action:t.http.interfaceUrl()+t.action,"file-list":t.model.positive,"upload-text":"身份证正面","max-count":1,"custom-btn":!0,disabled:1===t.status},on:{"on-list-change":function(e){arguments[0]=e=t.$handleEvent(e),t.onPositiveChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[i("u-image",{attrs:{src:a("a7ad"),width:"80",height:"60"}}),i("v-uni-view",{staticClass:"u-font-22 u-m-t-15",staticStyle:{color:"#9FA7BC","line-height":"1"}},[t._v("身份证正面")])],1)],1),i("u-upload",{staticClass:"u-m-l-20",attrs:{width:"200",height:"200",action:t.http.interfaceUrl()+t.action,"file-list":t.model.back,"upload-text":"身份证反面","max-count":1,"custom-btn":!0,disabled:1===t.status},on:{"on-list-change":function(e){arguments[0]=e=t.$handleEvent(e),t.onBackChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[i("u-image",{attrs:{src:a("8906"),width:"80",height:"60"}}),i("v-uni-view",{staticClass:"u-font-22 u-m-t-15",staticStyle:{color:"#9FA7BC","line-height":"1"}},[t._v("身份证反面")])],1)],1),1===t.status?i("v-uni-view",{staticClass:"u-flex"},[i("u-image",{attrs:{src:t.model.positive[0].url||"",height:"200",width:"200"}}),i("u-image",{staticClass:"u-m-l-20",attrs:{src:t.model.back[0].url||"",height:"200",width:"200"}})],1):t._e()],1)],1)],1),i("u-button",{staticClass:"u-m-30",staticStyle:{"margin-bottom":"0",transform:"translateY(-50rpx)"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)},n=[]},fc0b:function(t,e,a){"use strict";var i=a("b5f8"),o=a.n(i);o.a}}]);