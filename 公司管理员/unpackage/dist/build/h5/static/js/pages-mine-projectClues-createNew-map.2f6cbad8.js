(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-projectClues-createNew-map"],{"023a":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var o={uButton:i("64a3").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header-box"},[i("v-uni-view",{staticClass:"result-box"},[i("v-uni-view",{staticClass:"u-flex u-row-between"},[i("v-uni-view",{staticClass:"info list-item"},[i("v-uni-view",{staticClass:"badge"}),i("v-uni-view",{staticClass:"ellipsis"},[e._v(e._s(e.recommend))])],1),i("u-button",{staticStyle:{margin:"0"},attrs:{type:"primary",size:"mini",disabled:""==e.area_code},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[e._v("确认")])],1)],1)],1),i("v-uni-map",{staticClass:"tui-maps",style:{height:e.winHeight},attrs:{id:"maps",longitude:e.longitude,latitude:e.latitude,scale:16,"show-location":!0},on:{regionchange:function(t){arguments[0]=t=e.$handleEvent(t),e.regionchange.apply(void 0,arguments)}}},[i("v-uni-cover-image",{staticClass:"cover-image",attrs:{src:"/static/images/maps/location.png"}})],1),i("v-uni-cover-view",{staticClass:"current-location"},[i("v-uni-cover-image",{staticClass:"current-img",attrs:{src:"/static/images/maps/current.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.currentLocation.apply(void 0,arguments)}}})],1)],1)},a=[]},"5bc3":function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e}e.exports=o},"5cd4":function(e,t,i){"use strict";i.r(t);var o=i("fffd"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},"692fb":function(e,t,i){"use strict";var o=i("cfe0"),n=i.n(o);n.a},"970b":function(e,t){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=i},b39aa:function(e,t,i){"use strict";i.r(t);var o=i("023a"),n=i("5cd4");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("692fb");var s,r=i("f0c5"),l=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"0e108efa",null,!1,o["a"],s);t["default"]=l.exports},cfe0:function(e,t,i){var o=i("efdb");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("6c86a47b",o,!0,{sourceMap:!1,shadowMode:!1})},d7a6:function(e,t,i){i("4de4"),i("b680"),i("acd8"),i("ac1f"),i("1276");var o=i("970b"),n=i("5bc3"),a={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},s="https://apis.map.qq.com/ws/",r=s+"place/v1/search",l=s+"place/v1/suggestion",c=s+"geocoder/v1/",d=s+"district/v1/list",u=s+"district/v1/getchildren",f=s+"distance/v1/",g=6378136.49,p={location2query:function(e){if("string"==typeof e)return e;for(var t="",i=0;i<e.length;i++){var o=e[i];t&&(t+=";"),o.location&&(t=t+o.location.lat+","+o.location.lng),o.latitude&&o.longitude&&(t=t+o.latitude+","+o.longitude)}return t},rad:function(e){return e*Math.PI/180},getEndLocation:function(e){for(var t=e.split(";"),i=[],o=0;o<t.length;o++)i.push({lat:parseFloat(t[o].split(",")[0]),lng:parseFloat(t[o].split(",")[1])});return i},getDistance:function(e,t,i,o){var n=this.rad(e),a=this.rad(i),s=n-a,r=this.rad(t)-this.rad(o),l=2*Math.asin(Math.sqrt(Math.pow(Math.sin(s/2),2)+Math.cos(n)*Math.cos(a)*Math.pow(Math.sin(r/2),2)));return l*=g,l=Math.round(1e4*l)/1e4,parseFloat(l.toFixed(0))},getWXLocation:function(e,t,i){wx.getLocation({type:"gcj02",success:e,fail:t,complete:i})},getLocationParam:function(e){if("string"==typeof e){var t=e.split(",");e=2===t.length?{latitude:e.split(",")[0],longitude:e.split(",")[1]}:{}}return e},polyfillParam:function(e){e.success=e.success||function(){},e.fail=e.fail||function(){},e.complete=e.complete||function(){}},checkParamKeyEmpty:function(e,t){if(!e[t]){var i=this.buildErrorConfig(a.PARAM_ERR,a.PARAM_ERR_MSG+t+"参数格式有误");return e.fail(i),e.complete(i),!0}return!1},checkKeyword:function(e){return!this.checkParamKeyEmpty(e,"keyword")},checkLocation:function(e){var t=this.getLocationParam(e.location);if(!t||!t.latitude||!t.longitude){var i=this.buildErrorConfig(a.PARAM_ERR,a.PARAM_ERR_MSG+" location参数格式有误");return e.fail(i),e.complete(i),!1}return!0},buildErrorConfig:function(e,t){return{status:e,message:t}},handleData:function(e,t,i){if("search"===i){for(var o=t.data,n=[],a=0;a<o.length;a++)n.push({id:o[a].id||null,title:o[a].title||null,latitude:o[a].location&&o[a].location.lat||null,longitude:o[a].location&&o[a].location.lng||null,address:o[a].address||null,category:o[a].category||null,tel:o[a].tel||null,adcode:o[a].ad_info&&o[a].ad_info.adcode||null,city:o[a].ad_info&&o[a].ad_info.city||null,district:o[a].ad_info&&o[a].ad_info.district||null,province:o[a].ad_info&&o[a].ad_info.province||null});e.success(t,{searchResult:o,searchSimplify:n})}else if("suggest"===i){var s=t.data,r=[];for(a=0;a<s.length;a++)r.push({adcode:s[a].adcode||null,address:s[a].address||null,category:s[a].category||null,city:s[a].city||null,district:s[a].district||null,id:s[a].id||null,latitude:s[a].location&&s[a].location.lat||null,longitude:s[a].location&&s[a].location.lng||null,province:s[a].province||null,title:s[a].title||null,type:s[a].type||null});e.success(t,{suggestResult:s,suggestSimplify:r})}else if("reverseGeocoder"===i){var l=t.result,c={address:l.address||null,latitude:l.location&&l.location.lat||null,longitude:l.location&&l.location.lng||null,adcode:l.ad_info&&l.ad_info.adcode||null,city:l.address_component&&l.address_component.city||null,district:l.address_component&&l.address_component.district||null,nation:l.address_component&&l.address_component.nation||null,province:l.address_component&&l.address_component.province||null,street:l.address_component&&l.address_component.street||null,street_number:l.address_component&&l.address_component.street_number||null,recommend:l.formatted_addresses&&l.formatted_addresses.recommend||null,rough:l.formatted_addresses&&l.formatted_addresses.rough||null};if(l.pois){var d=l.pois,u=[];for(a=0;a<d.length;a++)u.push({id:d[a].id||null,title:d[a].title||null,latitude:d[a].location&&d[a].location.lat||null,longitude:d[a].location&&d[a].location.lng||null,address:d[a].address||null,category:d[a].category||null,adcode:d[a].ad_info&&d[a].ad_info.adcode||null,city:d[a].ad_info&&d[a].ad_info.city||null,district:d[a].ad_info&&d[a].ad_info.district||null,province:d[a].ad_info&&d[a].ad_info.province||null});e.success(t,{reverseGeocoderResult:l,reverseGeocoderSimplify:c,pois:d,poisSimplify:u})}else e.success(t,{reverseGeocoderResult:l,reverseGeocoderSimplify:c})}else if("geocoder"===i){var f=t.result,g={title:f.title||null,latitude:f.location&&f.location.lat||null,longitude:f.location&&f.location.lng||null,adcode:f.ad_info&&f.ad_info.adcode||null,province:f.address_components&&f.address_components.province||null,city:f.address_components&&f.address_components.city||null,district:f.address_components&&f.address_components.district||null,street:f.address_components&&f.address_components.street||null,street_number:f.address_components&&f.address_components.street_number||null,level:f.level||null};e.success(t,{geocoderResult:f,geocoderSimplify:g})}else if("getCityList"===i){var p=t.result[0],m=t.result[1],v=t.result[2];e.success(t,{provinceResult:p,cityResult:m,districtResult:v})}else if("getDistrictByCityId"===i){var h=t.result[0];e.success(t,h)}else if("calculateDistance"===i){var y=t.result.elements,_=[];for(a=0;a<y.length;a++)_.push(y[a].distance);e.success(t,{calculateDistanceResult:y,distance:_})}else e.success(t)},buildWxRequestConfig:function(e,t,i){var o=this;return t.header={"content-type":"application/json"},t.method="GET",t.success=function(t){var n=t.data;0===n.status?o.handleData(e,n,i):e.fail(n)},t.fail=function(t){t.statusCode=a.WX_ERR_CODE,e.fail(o.buildErrorConfig(a.WX_ERR_CODE,t.errMsg))},t.complete=function(t){var i=+t.statusCode;switch(i){case a.WX_ERR_CODE:e.complete(o.buildErrorConfig(a.WX_ERR_CODE,t.errMsg));break;case a.WX_OK_CODE:var n=t.data;0===n.status?e.complete(n):e.complete(o.buildErrorConfig(n.status,n.message));break;default:e.complete(o.buildErrorConfig(a.SYSTEM_ERR,a.SYSTEM_ERR_MSG))}},t},locationProcess:function(e,t,i,o){var n=this;if(i=i||function(t){t.statusCode=a.WX_ERR_CODE,e.fail(n.buildErrorConfig(a.WX_ERR_CODE,t.errMsg))},o=o||function(t){t.statusCode==a.WX_ERR_CODE&&e.complete(n.buildErrorConfig(a.WX_ERR_CODE,t.errMsg))},e.location){if(n.checkLocation(e)){var s=p.getLocationParam(e.location);t(s)}}else n.getWXLocation(t,i,o)}},m=function(){"use strict";function e(t){if(o(this,e),!t.key)throw Error("key值不能为空");this.key=t.key}return n(e,[{key:"search",value:function(e){var t=this;if(e=e||{},p.polyfillParam(e),p.checkKeyword(e)){var i={keyword:e.keyword,orderby:e.orderby||"_distance",page_size:e.page_size||10,page_index:e.page_index||1,output:"json",key:t.key};e.address_format&&(i.address_format=e.address_format),e.filter&&(i.filter=e.filter);var o=e.distance||"1000",n=e.auto_extend||1,a=null,s=null;e.region&&(a=e.region),e.rectangle&&(s=e.rectangle);var l=function(t){i.boundary=a&&!s?"region("+a+","+n+","+t.latitude+","+t.longitude+")":s&&!a?"rectangle("+s+")":"nearby("+t.latitude+","+t.longitude+","+o+","+n+")",wx.request(p.buildWxRequestConfig(e,{url:r,data:i},"search"))};p.locationProcess(e,l)}}},{key:"getSuggestion",value:function(e){var t=this;if(e=e||{},p.polyfillParam(e),p.checkKeyword(e)){var i={keyword:e.keyword,region:e.region||"全国",region_fix:e.region_fix||0,policy:e.policy||0,page_size:e.page_size||10,page_index:e.page_index||1,get_subpois:e.get_subpois||0,output:"json",key:t.key};if(e.address_format&&(i.address_format=e.address_format),e.filter&&(i.filter=e.filter),e.location){var o=function(t){i.location=t.latitude+","+t.longitude,wx.request(p.buildWxRequestConfig(e,{url:l,data:i},"suggest"))};p.locationProcess(e,o)}else wx.request(p.buildWxRequestConfig(e,{url:l,data:i},"suggest"))}}},{key:"reverseGeocoder",value:function(e){var t=this;e=e||{},p.polyfillParam(e);var i={coord_type:e.coord_type||5,get_poi:e.get_poi||0,output:"json",key:t.key};e.poi_options&&(i.poi_options=e.poi_options);var o=function(t){i.location=t.latitude+","+t.longitude,wx.request(p.buildWxRequestConfig(e,{url:c,data:i},"reverseGeocoder"))};p.locationProcess(e,o)}},{key:"geocoder",value:function(e){var t=this;if(e=e||{},p.polyfillParam(e),!p.checkParamKeyEmpty(e,"address")){var i={address:e.address,output:"json",key:t.key};e.region&&(i.region=e.region),wx.request(p.buildWxRequestConfig(e,{url:c,data:i},"geocoder"))}}},{key:"getCityList",value:function(e){var t=this;e=e||{},p.polyfillParam(e);var i={output:"json",key:t.key};wx.request(p.buildWxRequestConfig(e,{url:d,data:i},"getCityList"))}},{key:"getDistrictByCityId",value:function(e){var t=this;if(e=e||{},p.polyfillParam(e),!p.checkParamKeyEmpty(e,"id")){var i={id:e.id||"",output:"json",key:t.key};wx.request(p.buildWxRequestConfig(e,{url:u,data:i},"getDistrictByCityId"))}}},{key:"calculateDistance",value:function(e){var t=this;if(e=e||{},p.polyfillParam(e),!p.checkParamKeyEmpty(e,"to")){var i={mode:e.mode||"walking",to:p.location2query(e.to),output:"json",key:t.key};if(e.from&&(e.location=e.from),"straight"==i.mode){var o=function(t){for(var o=p.getEndLocation(i.to),n={message:"query ok",result:{elements:[]},status:0},a=0;a<o.length;a++)n.result.elements.push({distance:p.getDistance(t.latitude,t.longitude,o[a].lat,o[a].lng),duration:0,from:{lat:t.latitude,lng:t.longitude},to:{lat:o[a].lat,lng:o[a].lng}});var s=n.result.elements,r=[];for(a=0;a<s.length;a++)r.push(s[a].distance);return e.success(n,{calculateResult:s,distanceResult:r})};p.locationProcess(e,o)}else{o=function(t){i.from=t.latitude+","+t.longitude,wx.request(p.buildWxRequestConfig(e,{url:f,data:i},"calculateDistance"))};p.locationProcess(e,o)}}}}]),e}();e.exports=m},efdb:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,"uni-page-body[data-v-0e108efa]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.container[data-v-0e108efa]{width:100%;height:100%;position:relative}.tui-maps[data-v-0e108efa]{width:100%;height:100%}.cover-image[data-v-0e108efa]{height:%?60?%;width:%?60?%;position:fixed;\n\ntop:50%;left:50%;margin-top:%?-30?%;margin-left:%?-30?%}.header-box[data-v-0e108efa]{width:100%;padding-top:%?8?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?24?%}.result-box[data-v-0e108efa]{width:100%;padding:%?12?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#555;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background:#fff;border-radius:%?24?%}.list-item[data-v-0e108efa]::after{left:0}.badge[data-v-0e108efa]{height:%?16?%;width:%?16?%;border-radius:%?8?%;background:#5677fc;margin-right:%?20?%;-webkit-flex-shrink:0;flex-shrink:0}.orange[data-v-0e108efa]{background:#ff7900!important}.info[data-v-0e108efa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% 0}.ellipsis[data-v-0e108efa]{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.current-location[data-v-0e108efa]{position:fixed;height:%?76?%;width:%?76?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;bottom:%?80?%;right:%?60?%;background:hsla(0,0%,100%,.94);border-radius:%?38?%;z-index:999999}.current-img[data-v-0e108efa]{width:%?42?%;height:%?42?%}",""]),e.exports=t},fffd:function(e,t,i){"use strict";i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("d7a6"),n={data:function(){return{address:"正在获取地址...",recommend:"正在获取地址...",longitude:114.010857,latitude:22.63137,area_code:"",current_long:114.010857,current_lat:22.63137,key:"NW7BZ-BVXC2-AFYUX-C57BF-PZED6-WTBY4",mapCtx:null,location:!1,qqmapsdk:null,mapObj:null,winHeight:"100%"}},onLoad:function(){var e=this;setTimeout((function(){e.qqmapsdk=new o({key:e.key}),e.currentLocation()}),100),this.winHeight=this.$u.sys().windowHeight-uni.upx2px(90)+"px"},methods:{regionchange:function(e){var t=this,i="end"==e.type;i&&(this.address="正在获取地址...",this.recommend="正在获取地址...",this.mapCtx||(this.mapCtx=uni.createMapContext("maps")),this.mapCtx.getCenterLocation({type:"gcj02",success:function(e){t.latitude=e.latitude,t.longitude=e.longitude,t.current_long=e.latitude,t.current_lat=e.longitude,t.getAddressH5(e.longitude,e.latitude)}}))},getAddress:function(e,t){var i=this;this.qqmapsdk.reverseGeocoder({location:{latitude:t,longitude:e},success:function(e){console.log(e),i.address=e.result.formatted_addresses.recommend,console.log(JSON.stringify(e))},fail:function(e){i.address="获取位置信息失败"}})},getAddressH5:function(e,t){var i=this,o="https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(t+","+e,"&key=").concat(this.key,"&get_poi=0&callbackName=QQmap&output=jsonp&coord_type=5");this.http.tuiJsonp(o,(function(e){0===e.status&&(console.log(e),i.address=e.result.address_component.province+e.result.address_component.city+e.result.address_component.district,i.area_code=e.result.ad_info.adcode,i.recommend=e.result.formatted_addresses.recommend)}),"QQmap")},currentLocation:function(){var e=this;console.log("2313213"),uni.getLocation({type:"wgs84",success:function(t){console.log(t),e.latitude=t.latitude,e.longitude=t.longitude,e.getAddressH5(t.longitude,t.latitude)},fail:function(t){console.log("fail"),e.getAddressH5(e.longitude,e.latitude)}})},back:function(){uni.$emit("address",{longitude:this.longitude,latitude:this.latitude,address:this.address,area_code:this.area_code,location:this.recommend}),uni.navigateBack({delta:1})}}};t.default=n}}]);