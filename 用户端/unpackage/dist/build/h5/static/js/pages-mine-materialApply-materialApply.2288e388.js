(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-materialApply-materialApply"],{"000a":function(t,e,a){"use strict";a("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(){this.getInfo()},computed:{applyBtn:function(){var t=!0;return this.model.qualification&&this.model.positive&&this.model.back&&(t=!1),t}},data:function(){return{stats:"",border:!1,action:"Common/fileUploader",labelStyle:{fontSize:"28rpx",fontWeight:"bold"},model:{name:"",qualification:"",positive:"",back:""}}},methods:{getInfo:function(){var t=this;this.http.get("UserCenter/getRealInfoEditPage").then((function(e){t.stats=e.data.status,t.model.positive=[{url:e.data.id_card_img[0]}],t.model.back=[{url:e.data.id_card_img[1]}],1==e.data.status?t.http.modal("","审核成功!",!1,(function(){uni.navigateBack({delta:1})})):2==e.data.status?t.http.modal("","审核中，请耐心等待！",!1,(function(){uni.navigateBack({delta:1})})):3==e.data.status?t.http.modal("","审核未通过，请重新提交！",!1,(function(){t.model.qualification=e.data.staff_img.map((function(e){return{url:t.http.resourceUrl()+e}})),t.model.positive=[{url:t.http.resourceUrl()+e.data.id_card_img[0]}],t.model.back=[{url:t.http.resourceUrl()+e.data.id_card_img[1]}]})):4==e.data.status&&t.http.modal("","非法状态,禁止进入页面！",!1,(function(){uni.navigateBack({delta:1})}))}))},onQualificationChange:function(t){console.log("onListChange",t[0]),this.model.qualification=t},onPositiveChange:function(t){console.log("onListChange",t[0]),this.model.positive=t},onBackChange:function(t){console.log("onListChange",t[0]),this.model.back=t},submit:function(){var t=this,e=[];0!=this.model.qualification.length&&this.model.qualification.map((function(t){t.response&&1e3==t.response.code?e.push(t.response.data.path):t.error||100!=t.progress||e.push(t.url)}));var a=[this.model.positive[0].response.data.path||this.model.positive[0].url,this.model.back[0].response.data.path||this.model.back[0].url];this.http.post("UserCenter/realInfo",{name:this.model.name,id_card_img:a}).then((function(e){t.$u.toast(e.msg),1e3==e.code&&setTimeout((function(){uni.navigateBack({delta:1})}),1500)}))}}};e.default=i},2234:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".bg[data-v-ab0557de]{background:-webkit-linear-gradient(right,#1b91fa,#0f58fb);width:100%;height:%?258?%;padding:%?0?% %?70?% %?60?% %?50?%;font-size:%?43?%}.slot-btn[data-v-ab0557de]{width:%?200?%;height:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f4f5f6;border-radius:%?22?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.slot-btn__hover[data-v-ab0557de]{background-color:#ebecee}",""]),t.exports=e},"3f0f":function(t,e,a){var i=a("2234");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("52290188",i,!0,{sourceMap:!1,shadowMode:!1})},7578:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uImage:a("1146").default,uForm:a("2704").default,uFormItem:a("ffe9").default,uInput:a("0ba7").default,uUpload:a("14f6").default,uButton:a("05ab").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"bg u-flex u-row-between"},[i("v-uni-view",{staticClass:"text-bold u-font-43 text-white"},[t._v("资料完善")]),i("u-image",{attrs:{src:a("4873"),width:"160",height:"180",fade:!1}})],1),i("v-uni-view",{staticClass:"bg-white",staticStyle:{"border-radius":"53rpx 53rpx 0 0",padding:"37rpx 57rpx 0 35rpx",transform:"translateY(-50rpx)"}},[i("u-form",[i("u-form-item",{attrs:{"label-style":t.labelStyle,required:!0,leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"account","label-width":"150",label:"姓名",prop:"name"}},[i("u-input",{attrs:{placeholder:"请输入姓名",type:"text"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("u-form-item",{attrs:{"label-style":t.labelStyle,required:!1,"label-position":"top",label:"上传身份证正反面","label-width":"150","border-bottom":!1}},[i("u-upload",{attrs:{width:"200",height:"200",disabled:1==t.status,action:t.http.interfaceUrl()+t.action,"upload-text":"身份证正面","max-count":1,"custom-btn":!0},on:{"on-list-change":function(e){arguments[0]=e=t.$handleEvent(e),t.onPositiveChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[i("u-image",{attrs:{src:a("6c82"),width:"80",height:"60"}}),i("v-uni-view",{staticClass:"u-font-22 u-m-t-15",staticStyle:{color:"#9FA7BC","line-height":"1"}},[t._v("身份证正面")])],1)],1),i("u-upload",{staticClass:"u-m-l-20",attrs:{width:"200",height:"200",disabled:1==t.status,action:t.http.interfaceUrl()+t.action,"upload-text":"身份证反面","max-count":1,"custom-btn":!0},on:{"on-list-change":function(e){arguments[0]=e=t.$handleEvent(e),t.onBackChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[i("u-image",{attrs:{src:a("2c9e"),width:"80",height:"60"}}),i("v-uni-view",{staticClass:"u-font-22 u-m-t-15",staticStyle:{color:"#9FA7BC","line-height":"1"}},[t._v("身份证反面")])],1)],1)],1)],1)],1),i("u-button",{staticClass:"u-m-30",staticStyle:{"margin-bottom":"0",transform:"translateY(-50rpx)"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)},o=[]},"81aa":function(t,e,a){"use strict";a.r(e);var i=a("000a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},b605:function(t,e,a){"use strict";a.r(e);var i=a("7578"),n=a("81aa");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("f246");var l,s=a("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"ab0557de",null,!1,i["a"],l);e["default"]=r.exports},f246:function(t,e,a){"use strict";var i=a("3f0f"),n=a.n(i);n.a}}]);