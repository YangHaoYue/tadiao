(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-perfection-perfection"],{"21ef":function(t,e,a){"use strict";a("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(){this.getInfo()},computed:{applyBtn:function(){var t=!0;return this.model.qualification&&this.model.positive&&this.model.back&&(t=!1),t},disabled:function(){return 1===this.status}},data:function(){return{status:0,border:!1,action:"Common/fileUploader",labelStyle:{fontSize:"28rpx",fontWeight:"bold"},model:{name:"",qualification:[],positive:[],back:[]}}},methods:{getInfo:function(){var t=this;this.http.get("UserCenter/getRealInfoEditPage").then((function(e){t.status=e.data.status,t.model.name=e.data.name,t.model.positive=e.data.id_card_img[0]?[{url:t.http.resourceUrl()+e.data.id_card_img[0]}]:[],t.model.back=e.data.id_card_img[1]?[{url:t.http.resourceUrl()+e.data.id_card_img[1]}]:[],2==e.data.status?t.http.modal("","审核中，请耐心等待！",!1,(function(){uni.navigateBack({delta:1})})):3==e.data.status?t.http.modal("","审核未通过，请重新提交！",!1,(function(){t.model.qualification=e.data.staff_img.map((function(e){return{url:t.http.resourceUrl()+e}}))})):4==e.data.status&&t.http.modal("","非法状态,禁止进入页面！",!1,(function(){uni.navigateBack({delta:1})}))}))},onQualificationChange:function(t){console.log("onListChange",t[0]),this.model.qualification=t},onPositiveChange:function(t){console.log("onListChange",t[0]),this.model.positive=t},onBackChange:function(t){console.log("onListChange",t[0]),this.model.back=t},submit:function(){var t=this,e=[];0!=this.model.qualification.length&&this.model.qualification.map((function(t){t.response&&1e3==t.response.code?e.push(t.response.data.path):t.error||100!=t.progress||e.push(t.url)}));var a=[this.model.positive[0].response&&this.model.positive[0].response.data.path||this.model.positive[0].url,this.model.back[0].response&&this.model.back[0].response.data.path||this.model.back[0].url];this.http.post("UserCenter/realInfo",{name:this.model.name,id_card_img:a}).then((function(e){t.$u.toast(e.msg),1e3==e.code&&setTimeout((function(){uni.navigateBack({delta:1})}),1500)}))}}};e.default=i},"34ab":function(t,e,a){"use strict";a.r(e);var i=a("21ef"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"35d8":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".bg[data-v-1616e98a]{background:-webkit-linear-gradient(right,#1b91fa,#0f58fb);width:100%;height:%?258?%;padding:%?0?% %?70?% %?60?% %?50?%;font-size:%?43?%}.slot-btn[data-v-1616e98a]{width:%?200?%;height:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f4f5f6;border-radius:%?22?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.slot-btn__hover[data-v-1616e98a]{background-color:#ebecee}",""]),t.exports=e},39317:function(t,e,a){t.exports=a.p+"static/img/on.f918528d.png"},"39e8":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uImage:a("03f6").default,uForm:a("6e1a").default,uFormItem:a("febc").default,uInput:a("9131").default,uUpload:a("f8b8").default,uButton:a("64a3").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"bg u-flex u-row-between"},[i("v-uni-view",{staticClass:"text-bold u-font-43 text-white"},[t._v("资料完善")]),i("u-image",{attrs:{src:a("da13"),width:"160",height:"180",fade:!1}})],1),i("v-uni-view",{staticClass:"bg-white",staticStyle:{"border-radius":"53rpx 53rpx 0 0",padding:"37rpx 57rpx 0 35rpx",transform:"translateY(-50rpx)"}},[i("u-form",[i("u-form-item",{attrs:{"label-style":t.labelStyle,required:!0,leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"account","label-width":"150",label:"姓名",prop:"name"}},[i("u-input",{attrs:{placeholder:"请输入姓名",type:"text",disabled:1==t.status},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("u-form-item",{attrs:{"label-style":t.labelStyle,required:!1,"label-position":"top",label:"上传身份证正反面","label-width":"150","border-bottom":!1}},[i("u-upload",{attrs:{width:"200",height:"200",action:t.http.interfaceUrl()+t.action,"file-list":t.model.positive,"upload-text":"身份证正面","max-count":1,"custom-btn":!0,disabled:1===t.status},on:{"on-list-change":function(e){arguments[0]=e=t.$handleEvent(e),t.onPositiveChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[i("u-image",{attrs:{src:a("39317"),width:"80",height:"60"}}),i("v-uni-view",{staticClass:"u-font-22 u-m-t-15",staticStyle:{color:"#9FA7BC","line-height":"1"}},[t._v("身份证正面")])],1)],1),i("u-upload",{staticClass:"u-m-l-20",attrs:{width:"200",height:"200",action:t.http.interfaceUrl()+t.action,"file-list":t.model.back,"upload-text":"身份证反面","max-count":1,"custom-btn":!0,disabled:1===t.status},on:{"on-list-change":function(e){arguments[0]=e=t.$handleEvent(e),t.onBackChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"slot-btn",attrs:{slot:"addBtn","hover-class":"slot-btn__hover","hover-stay-time":"150"},slot:"addBtn"},[i("u-image",{attrs:{src:a("c93b"),width:"80",height:"60"}}),i("v-uni-view",{staticClass:"u-font-22 u-m-t-15",staticStyle:{color:"#9FA7BC","line-height":"1"}},[t._v("身份证反面")])],1)],1),1===t.status?i("v-uni-view",{staticClass:"u-flex"},[i("u-image",{attrs:{src:t.model.positive[0].url||"",height:"200",width:"200"}}),i("u-image",{staticClass:"u-m-l-20",attrs:{src:t.model.back[0].url||"",height:"200",width:"200"}})],1):t._e()],1)],1)],1),i("u-button",{staticClass:"u-m-30",staticStyle:{"margin-bottom":"0",transform:"translateY(-50rpx)"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)},o=[]},5469:function(t,e,a){"use strict";var i=a("713b"),n=a.n(i);n.a},"713b":function(t,e,a){var i=a("35d8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("65b613a5",i,!0,{sourceMap:!1,shadowMode:!1})},"859c":function(t,e,a){"use strict";a.r(e);var i=a("39e8"),n=a("34ab");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("5469");var s,l=a("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"1616e98a",null,!1,i["a"],s);e["default"]=r.exports},c93b:function(t,e,a){t.exports=a.p+"static/img/off.5df0a97d.png"},da13:function(t,e,a){t.exports=a.p+"static/img/shield.29196bd0.png"}}]);