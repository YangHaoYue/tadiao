(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-projectClues-createNew-map"],{2267:function(e,t,i){"use strict";var o=i("2469"),a=i.n(o);a.a},2469:function(e,t,i){var o=i("928c");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("5fc1d26f",o,!0,{sourceMap:!1,shadowMode:!1})},"2cac":function(e,t,i){"use strict";i.r(t);var o=i("98c5"),a=i("8134");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("2267");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"7014cccf",null,!1,o["a"],r);t["default"]=l.exports},"2ec2":function(e,t,i){"use strict";i.r(t);var o=i("e53e"),a=i("c9a5");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("33d1");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"b24fa1ba",null,!1,o["a"],r);t["default"]=l.exports},"33d1":function(e,t,i){"use strict";var o=i("6ff3"),a=i.n(o);a.a},"5bc3":function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e}e.exports=o},"6ff3":function(e,t,i){var o=i("da42");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("45ecd262",o,!0,{sourceMap:!1,shadowMode:!1})},8017:function(e,t,i){"use strict";i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("fadb"),a={data:function(){return{address:"正在获取地址...",longitude:114.010857,latitude:22.63137,current_long:114.010857,current_lat:22.63137,key:"NW7BZ-BVXC2-AFYUX-C57BF-PZED6-WTBY4",mapCtx:null,location:!1,qqmapsdk:null,mapObj:null,winHeight:"100%"}},onLoad:function(){var e=this;setTimeout((function(){e.qqmapsdk=new o({key:e.key}),e.currentLocation()}),100),this.winHeight=this.$u.sys().windowHeight-uni.upx2px(90)+"px"},methods:{regionchange:function(e){var t=this,i="end"==e.type;i&&(this.address="正在获取地址...",this.mapCtx||(this.mapCtx=uni.createMapContext("maps")),this.mapCtx.getCenterLocation({type:"gcj02",success:function(e){t.latitude=e.latitude,t.longitude=e.longitude,t.current_long=e.latitude,t.current_lat=e.longitude,t.getAddressH5(e.longitude,e.latitude)}}))},getAddress:function(e,t){var i=this;this.qqmapsdk.reverseGeocoder({location:{latitude:t,longitude:e},success:function(e){console.log(e),i.address=e.result.formatted_addresses.recommend,console.log(JSON.stringify(e))},fail:function(e){i.address="获取位置信息失败"}})},getAddressH5:function(e,t){var i=this,o="https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(t+","+e,"&key=").concat(this.key,"&get_poi=0&callbackName=QQmap&output=jsonp&coord_type=5");this.http.tuiJsonp(o,(function(e){0===e.status&&(console.log(e),i.address=e.result.formatted_addresses.recommend)}),"QQmap")},currentLocation:function(){var e=this;console.log("2313213"),uni.getLocation({type:"wgs84",success:function(t){console.log(t),e.latitude=t.latitude,e.longitude=t.longitude,e.getAddressH5(t.longitude,t.latitude)},fail:function(t){console.log("fail"),e.getAddressH5(e.longitude,e.latitude)}})},back:function(){uni.$emit("address",{longitude:this.longitude,latitude:this.latitude,address:this.address}),uni.navigateBack({delta:1})}}};t.default=a},8134:function(e,t,i){"use strict";i.r(t);var o=i("db39"),a=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},"928c":function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-btn[data-v-7014cccf]::after{border:none}.u-btn[data-v-7014cccf]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-7014cccf]{border:1px solid #fff}.u-btn--default[data-v-7014cccf]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-7014cccf]{color:#fff;border-color:#0f58fb;background-color:#0f58fb}.u-btn--success[data-v-7014cccf]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-7014cccf]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-7014cccf]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-7014cccf]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-7014cccf]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-7014cccf]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-7014cccf]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-7014cccf]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-7014cccf]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-7014cccf]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-7014cccf]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-7014cccf]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-7014cccf]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-7014cccf]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-7014cccf]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-7014cccf]{border-radius:%?100?%}.u-round-circle[data-v-7014cccf]::after{border-radius:%?100?%}.u-loading[data-v-7014cccf]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-7014cccf]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-7014cccf]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-7014cccf]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-7014cccf]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-7014cccf]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-7014cccf]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-7014cccf]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-7014cccf]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-7014cccf]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-7014cccf]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-7014cccf]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-7014cccf]{background:#18b566!important;color:#fff}.u-info-hover[data-v-7014cccf]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-7014cccf]{background:#f29100!important;color:#fff}.u-error-hover[data-v-7014cccf]{background:#dd6161!important;color:#fff}',""]),e.exports=t},"970b":function(e,t){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=i},"98c5":function(e,t,i){"use strict";var o;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+e.size,e.plain?"u-btn--"+e.type+"--plain":"",e.loading?"u-loading":"","circle"==e.shape?"u-round-circle":"",e.hairLine?e.showHairLineBorder:"u-btn--bold-border","u-btn--"+e.type,e.disabled?"u-btn--"+e.type+"--disabled":""],style:[e.customStyle,{overflow:e.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),disabled:e.disabled,"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":"sendMessagePath",lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"hover-class":e.getHoverClass,loading:e.loading},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.launchapp.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.click(t)}}},[e._t("default"),e.ripple?i("v-uni-view",{staticClass:"u-wave-ripple",class:[e.waveActive?"u-wave-active":""],style:{top:e.rippleTop+"px",left:e.rippleLeft+"px",width:e.fields.targetWidth+"px",height:e.fields.targetWidth+"px","background-color":e.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):e._e()],2)},n=[]},c9a5:function(e,t,i){"use strict";i.r(t);var o=i("8017"),a=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},da42:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,"uni-page-body[data-v-b24fa1ba]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.container[data-v-b24fa1ba]{width:100%;height:100%;position:relative}.tui-maps[data-v-b24fa1ba]{width:100%;height:100%}.cover-image[data-v-b24fa1ba]{height:%?60?%;width:%?60?%;position:fixed;\n\ntop:50%;left:50%;margin-top:%?-30?%;margin-left:%?-30?%}.header-box[data-v-b24fa1ba]{width:100%;padding-top:%?8?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?24?%}.result-box[data-v-b24fa1ba]{width:100%;padding:%?12?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#555;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background:#fff;border-radius:%?24?%}.list-item[data-v-b24fa1ba]::after{left:0}.badge[data-v-b24fa1ba]{height:%?16?%;width:%?16?%;border-radius:%?8?%;background:#5677fc;margin-right:%?20?%;-webkit-flex-shrink:0;flex-shrink:0}.orange[data-v-b24fa1ba]{background:#ff7900!important}.info[data-v-b24fa1ba]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% 0}.ellipsis[data-v-b24fa1ba]{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.current-location[data-v-b24fa1ba]{position:fixed;height:%?76?%;width:%?76?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;bottom:%?80?%;right:%?60?%;background:hsla(0,0%,100%,.94);border-radius:%?38?%;z-index:999999}.current-img[data-v-b24fa1ba]{width:%?42?%;height:%?42?%}",""]),e.exports=t},db39:function(e,t,i){"use strict";i("c975"),i("a9e3"),i("d3b7"),i("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var e="";return e=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",e},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(e){var t=this;this.$u.throttle((function(){!0!==t.loading&&!0!==t.disabled&&(t.ripple&&(t.waveActive=!1,t.$nextTick((function(){this.getWaveQuery(e)}))),t.$emit("click",e))}),this.throttleTime)},getWaveQuery:function(e){var t=this;this.getElQuery().then((function(i){var o=i[0];if(o.width&&o.width&&(o.targetWidth=o.height>o.width?o.height:o.width,o.targetWidth)){t.fields=o;var a="",n="";a=e.touches[0].clientX,n=e.touches[0].clientY,t.rippleTop=n-o.top-o.targetWidth/2,t.rippleLeft=a-o.left-o.targetWidth/2,t.$nextTick((function(){t.waveActive=!0}))}}))},getElQuery:function(){var e=this;return new Promise((function(t){var i="";i=uni.createSelectorQuery().in(e),i.select(".u-btn").boundingClientRect(),i.exec((function(e){t(e)}))}))},getphonenumber:function(e){this.$emit("getphonenumber",e)},getuserinfo:function(e){this.$emit("getuserinfo",e)},error:function(e){this.$emit("error",e)},opensetting:function(e){this.$emit("opensetting",e)},launchapp:function(e){this.$emit("launchapp",e)}}};t.default=o},e53e:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}));var o={uButton:i("2cac").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header-box"},[i("v-uni-view",{staticClass:"result-box"},[i("v-uni-view",{staticClass:"u-flex u-row-between"},[i("v-uni-view",{staticClass:"info list-item"},[i("v-uni-view",{staticClass:"badge"}),i("v-uni-view",{staticClass:"ellipsis"},[e._v(e._s(e.address))])],1),i("u-button",{staticStyle:{margin:"0"},attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[e._v("确认")])],1)],1)],1),i("v-uni-map",{staticClass:"tui-maps",style:{height:e.winHeight},attrs:{id:"maps",longitude:e.longitude,latitude:e.latitude,scale:16,"show-location":!0},on:{regionchange:function(t){arguments[0]=t=e.$handleEvent(t),e.regionchange.apply(void 0,arguments)}}},[i("v-uni-cover-image",{staticClass:"cover-image",attrs:{src:"/static/images/maps/location.png"}})],1),i("v-uni-cover-view",{staticClass:"current-location"},[i("v-uni-cover-image",{staticClass:"current-img",attrs:{src:"/static/images/maps/current.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.currentLocation.apply(void 0,arguments)}}})],1)],1)},n=[]},fadb:function(e,t,i){i("4de4"),i("b680"),i("acd8"),i("ac1f"),i("1276");var o=i("970b"),a=i("5bc3"),n={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},r="https://apis.map.qq.com/ws/",s=r+"place/v1/search",l=r+"place/v1/suggestion",c=r+"geocoder/v1/",d=r+"district/v1/list",u=r+"district/v1/getchildren",f=r+"distance/v1/",p=6378136.49,g={location2query:function(e){if("string"==typeof e)return e;for(var t="",i=0;i<e.length;i++){var o=e[i];t&&(t+=";"),o.location&&(t=t+o.location.lat+","+o.location.lng),o.latitude&&o.longitude&&(t=t+o.latitude+","+o.longitude)}return t},rad:function(e){return e*Math.PI/180},getEndLocation:function(e){for(var t=e.split(";"),i=[],o=0;o<t.length;o++)i.push({lat:parseFloat(t[o].split(",")[0]),lng:parseFloat(t[o].split(",")[1])});return i},getDistance:function(e,t,i,o){var a=this.rad(e),n=this.rad(i),r=a-n,s=this.rad(t)-this.rad(o),l=2*Math.asin(Math.sqrt(Math.pow(Math.sin(r/2),2)+Math.cos(a)*Math.cos(n)*Math.pow(Math.sin(s/2),2)));return l*=p,l=Math.round(1e4*l)/1e4,parseFloat(l.toFixed(0))},getWXLocation:function(e,t,i){wx.getLocation({type:"gcj02",success:e,fail:t,complete:i})},getLocationParam:function(e){if("string"==typeof e){var t=e.split(",");e=2===t.length?{latitude:e.split(",")[0],longitude:e.split(",")[1]}:{}}return e},polyfillParam:function(e){e.success=e.success||function(){},e.fail=e.fail||function(){},e.complete=e.complete||function(){}},checkParamKeyEmpty:function(e,t){if(!e[t]){var i=this.buildErrorConfig(n.PARAM_ERR,n.PARAM_ERR_MSG+t+"参数格式有误");return e.fail(i),e.complete(i),!0}return!1},checkKeyword:function(e){return!this.checkParamKeyEmpty(e,"keyword")},checkLocation:function(e){var t=this.getLocationParam(e.location);if(!t||!t.latitude||!t.longitude){var i=this.buildErrorConfig(n.PARAM_ERR,n.PARAM_ERR_MSG+" location参数格式有误");return e.fail(i),e.complete(i),!1}return!0},buildErrorConfig:function(e,t){return{status:e,message:t}},handleData:function(e,t,i){if("search"===i){for(var o=t.data,a=[],n=0;n<o.length;n++)a.push({id:o[n].id||null,title:o[n].title||null,latitude:o[n].location&&o[n].location.lat||null,longitude:o[n].location&&o[n].location.lng||null,address:o[n].address||null,category:o[n].category||null,tel:o[n].tel||null,adcode:o[n].ad_info&&o[n].ad_info.adcode||null,city:o[n].ad_info&&o[n].ad_info.city||null,district:o[n].ad_info&&o[n].ad_info.district||null,province:o[n].ad_info&&o[n].ad_info.province||null});e.success(t,{searchResult:o,searchSimplify:a})}else if("suggest"===i){var r=t.data,s=[];for(n=0;n<r.length;n++)s.push({adcode:r[n].adcode||null,address:r[n].address||null,category:r[n].category||null,city:r[n].city||null,district:r[n].district||null,id:r[n].id||null,latitude:r[n].location&&r[n].location.lat||null,longitude:r[n].location&&r[n].location.lng||null,province:r[n].province||null,title:r[n].title||null,type:r[n].type||null});e.success(t,{suggestResult:r,suggestSimplify:s})}else if("reverseGeocoder"===i){var l=t.result,c={address:l.address||null,latitude:l.location&&l.location.lat||null,longitude:l.location&&l.location.lng||null,adcode:l.ad_info&&l.ad_info.adcode||null,city:l.address_component&&l.address_component.city||null,district:l.address_component&&l.address_component.district||null,nation:l.address_component&&l.address_component.nation||null,province:l.address_component&&l.address_component.province||null,street:l.address_component&&l.address_component.street||null,street_number:l.address_component&&l.address_component.street_number||null,recommend:l.formatted_addresses&&l.formatted_addresses.recommend||null,rough:l.formatted_addresses&&l.formatted_addresses.rough||null};if(l.pois){var d=l.pois,u=[];for(n=0;n<d.length;n++)u.push({id:d[n].id||null,title:d[n].title||null,latitude:d[n].location&&d[n].location.lat||null,longitude:d[n].location&&d[n].location.lng||null,address:d[n].address||null,category:d[n].category||null,adcode:d[n].ad_info&&d[n].ad_info.adcode||null,city:d[n].ad_info&&d[n].ad_info.city||null,district:d[n].ad_info&&d[n].ad_info.district||null,province:d[n].ad_info&&d[n].ad_info.province||null});e.success(t,{reverseGeocoderResult:l,reverseGeocoderSimplify:c,pois:d,poisSimplify:u})}else e.success(t,{reverseGeocoderResult:l,reverseGeocoderSimplify:c})}else if("geocoder"===i){var f=t.result,p={title:f.title||null,latitude:f.location&&f.location.lat||null,longitude:f.location&&f.location.lng||null,adcode:f.ad_info&&f.ad_info.adcode||null,province:f.address_components&&f.address_components.province||null,city:f.address_components&&f.address_components.city||null,district:f.address_components&&f.address_components.district||null,street:f.address_components&&f.address_components.street||null,street_number:f.address_components&&f.address_components.street_number||null,level:f.level||null};e.success(t,{geocoderResult:f,geocoderSimplify:p})}else if("getCityList"===i){var g=t.result[0],b=t.result[1],v=t.result[2];e.success(t,{provinceResult:g,cityResult:b,districtResult:v})}else if("getDistrictByCityId"===i){var m=t.result[0];e.success(t,m)}else if("calculateDistance"===i){var h=t.result.elements,y=[];for(n=0;n<h.length;n++)y.push(h[n].distance);e.success(t,{calculateDistanceResult:h,distance:y})}else e.success(t)},buildWxRequestConfig:function(e,t,i){var o=this;return t.header={"content-type":"application/json"},t.method="GET",t.success=function(t){var a=t.data;0===a.status?o.handleData(e,a,i):e.fail(a)},t.fail=function(t){t.statusCode=n.WX_ERR_CODE,e.fail(o.buildErrorConfig(n.WX_ERR_CODE,t.errMsg))},t.complete=function(t){var i=+t.statusCode;switch(i){case n.WX_ERR_CODE:e.complete(o.buildErrorConfig(n.WX_ERR_CODE,t.errMsg));break;case n.WX_OK_CODE:var a=t.data;0===a.status?e.complete(a):e.complete(o.buildErrorConfig(a.status,a.message));break;default:e.complete(o.buildErrorConfig(n.SYSTEM_ERR,n.SYSTEM_ERR_MSG))}},t},locationProcess:function(e,t,i,o){var a=this;if(i=i||function(t){t.statusCode=n.WX_ERR_CODE,e.fail(a.buildErrorConfig(n.WX_ERR_CODE,t.errMsg))},o=o||function(t){t.statusCode==n.WX_ERR_CODE&&e.complete(a.buildErrorConfig(n.WX_ERR_CODE,t.errMsg))},e.location){if(a.checkLocation(e)){var r=g.getLocationParam(e.location);t(r)}}else a.getWXLocation(t,i,o)}},b=function(){"use strict";function e(t){if(o(this,e),!t.key)throw Error("key值不能为空");this.key=t.key}return a(e,[{key:"search",value:function(e){var t=this;if(e=e||{},g.polyfillParam(e),g.checkKeyword(e)){var i={keyword:e.keyword,orderby:e.orderby||"_distance",page_size:e.page_size||10,page_index:e.page_index||1,output:"json",key:t.key};e.address_format&&(i.address_format=e.address_format),e.filter&&(i.filter=e.filter);var o=e.distance||"1000",a=e.auto_extend||1,n=null,r=null;e.region&&(n=e.region),e.rectangle&&(r=e.rectangle);var l=function(t){i.boundary=n&&!r?"region("+n+","+a+","+t.latitude+","+t.longitude+")":r&&!n?"rectangle("+r+")":"nearby("+t.latitude+","+t.longitude+","+o+","+a+")",wx.request(g.buildWxRequestConfig(e,{url:s,data:i},"search"))};g.locationProcess(e,l)}}},{key:"getSuggestion",value:function(e){var t=this;if(e=e||{},g.polyfillParam(e),g.checkKeyword(e)){var i={keyword:e.keyword,region:e.region||"全国",region_fix:e.region_fix||0,policy:e.policy||0,page_size:e.page_size||10,page_index:e.page_index||1,get_subpois:e.get_subpois||0,output:"json",key:t.key};if(e.address_format&&(i.address_format=e.address_format),e.filter&&(i.filter=e.filter),e.location){var o=function(t){i.location=t.latitude+","+t.longitude,wx.request(g.buildWxRequestConfig(e,{url:l,data:i},"suggest"))};g.locationProcess(e,o)}else wx.request(g.buildWxRequestConfig(e,{url:l,data:i},"suggest"))}}},{key:"reverseGeocoder",value:function(e){var t=this;e=e||{},g.polyfillParam(e);var i={coord_type:e.coord_type||5,get_poi:e.get_poi||0,output:"json",key:t.key};e.poi_options&&(i.poi_options=e.poi_options);var o=function(t){i.location=t.latitude+","+t.longitude,wx.request(g.buildWxRequestConfig(e,{url:c,data:i},"reverseGeocoder"))};g.locationProcess(e,o)}},{key:"geocoder",value:function(e){var t=this;if(e=e||{},g.polyfillParam(e),!g.checkParamKeyEmpty(e,"address")){var i={address:e.address,output:"json",key:t.key};e.region&&(i.region=e.region),wx.request(g.buildWxRequestConfig(e,{url:c,data:i},"geocoder"))}}},{key:"getCityList",value:function(e){var t=this;e=e||{},g.polyfillParam(e);var i={output:"json",key:t.key};wx.request(g.buildWxRequestConfig(e,{url:d,data:i},"getCityList"))}},{key:"getDistrictByCityId",value:function(e){var t=this;if(e=e||{},g.polyfillParam(e),!g.checkParamKeyEmpty(e,"id")){var i={id:e.id||"",output:"json",key:t.key};wx.request(g.buildWxRequestConfig(e,{url:u,data:i},"getDistrictByCityId"))}}},{key:"calculateDistance",value:function(e){var t=this;if(e=e||{},g.polyfillParam(e),!g.checkParamKeyEmpty(e,"to")){var i={mode:e.mode||"walking",to:g.location2query(e.to),output:"json",key:t.key};if(e.from&&(e.location=e.from),"straight"==i.mode){var o=function(t){for(var o=g.getEndLocation(i.to),a={message:"query ok",result:{elements:[]},status:0},n=0;n<o.length;n++)a.result.elements.push({distance:g.getDistance(t.latitude,t.longitude,o[n].lat,o[n].lng),duration:0,from:{lat:t.latitude,lng:t.longitude},to:{lat:o[n].lat,lng:o[n].lng}});var r=a.result.elements,s=[];for(n=0;n<r.length;n++)s.push(r[n].distance);return e.success(a,{calculateResult:r,distanceResult:s})};g.locationProcess(e,o)}else{o=function(t){i.from=t.latitude+","+t.longitude,wx.request(g.buildWxRequestConfig(e,{url:f,data:i},"calculateDistance"))};g.locationProcess(e,o)}}}}]),e}();e.exports=b}}]);