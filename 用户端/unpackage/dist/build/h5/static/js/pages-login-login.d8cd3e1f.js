(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0b93":function(t,e,n){"use strict";var i=n("ed8c"),o=n.n(i);o.a},"0ba7":function(t,e,n){"use strict";n.r(e);var i=n("0fa8"),o=n("af48");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0b93");var r,u=n("f0c5"),l=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"5c361d36",null,!1,i["a"],r);e["default"]=l.exports},"0fa8":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("5a99").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},a=[]},1970:function(t,e,n){var i=n("62b2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("a0c2d7aa",i,!0,{sourceMap:!1,shadowMode:!1})},"62b2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".codeType[data-v-6c1f8a3d]{\n\t/* padding: 20rpx 10rpx; */border:#0f58fb solid %?1?%;border-radius:%?5?%;margin-left:%?10?%;color:#0f58fb}",""]),t.exports=e},6511:function(t,e,n){"use strict";n.r(e);var i=n("a31f"),o=n("9372");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("6c7f");var r,u=n("f0c5"),l=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"6c1f8a3d",null,!1,i["a"],r);e["default"]=l.exports},"6c7f":function(t,e,n){"use strict";var i=n("1970"),o=n.n(i);o.a},"6e96":function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("f45c")),a={name:"u-input",mixins:[o.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=a},"6f37":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-input[data-v-5c361d36]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-5c361d36]{font-size:%?28?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-5c361d36]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-5c361d36]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-5c361d36]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-5c361d36]{margin-left:%?10?%}.u-input__right-icon--select[data-v-5c361d36]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-5c361d36]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},9372:function(t,e,n){"use strict";n.r(e);var i=n("a04b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},a04b:function(t,e,n){"use strict";n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLoad:function(t){var e=this.http.getToken(),n=uni.getStorageSync("identity");e&&(1==n?uni.switchTab({url:"../home/home"}):2==n||3==n?window.location.href="http://tower.0831.run/html/staff":4==n||5==n?window.location.href="http://tower.0831.run/html/manager":6==n&&(window.location.href="http://tower.0831.run/html/manager/#/pages/leader/leader"))},onShow:function(){var t=this.GetQueryString("openid");this.GetQueryString("userid");null==t?this.getOpenid():(this.openid=t,uni.setStorageSync("openid",t))},data:function(){var t=this;return{openid:"",inviter_id:"",border:!1,labelStyle:{fontSize:"28rpx",fontWeight:"bold"},labelPosition:"top",codeTips:"",errorType:["message","border-bottom"],model:{phone:"",code:""},rules:{phone:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{validator:function(e,n,i){return t.$u.test.mobile(n)},message:"手机号码不正确",trigger:["change","blur"]}],code:[]}}},onReady:function(){this.$refs.uForm.setRules(this.rules)},computed:{disabled:function(){var t=!0;return this.model.phone&&this.model.code&&(t=!1),t}},methods:{getOpenid:function(){console.log("eee"),window.location.href=this.http.interfaceUrl()+"auth/oauth?action=0"},codeChange:function(t){this.codeTips=t},getCode:function(){var t=this;if(!this.model.phone)return this.$u.toast("请先输入手机号码!");this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码",mask:!0}),this.http.post("auth/sendMsgCode",{tel_num:this.model.phone}).then((function(e){1e3==e.code?(uni.hideLoading(),t.$u.toast("验证码已发送"),t.$refs.uCode.start()):t.$u.toast(e.msg)}))):this.$u.toast("倒计时结束后再发送")},submit:function(){var t=this;this.$refs.uForm.validate((function(e){e?t.http.post("auth/login",{tel_num:t.model.phone,msg_code:t.model.code}).then((function(e){1e3==e.code?(t.http.setUserInfo(e.data.token,e.data.identity,"",t.model.phone),1==e.data.identity?t.$refs.uToast.show({title:e.msg,type:"success",isTab:!0,url:"/pages/home/home"}):2==e.data.identity||3==e.data.identity?window.location.href="http://tower.0831.run/html/staff":4==e.data.identity||5==e.data.identity?window.location.href="http://tower.0831.run/html/manager":6==e.data.identity&&(window.location.href="http://tower.0831.run/html/manager/#/pages/leader/leader")):(t.$refs.uToast.show({title:e.msg,type:"error"}),"用户不存在"==e.msg&&setTimeout((function(){uni.navigateTo({url:"register"})}),1e3))})):t.$refs.uToast.show({title:"请填写完带*号的选项再提交",type:"error"})}))},GetQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null}}};e.default=i},a31f:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uForm:n("2704").default,uFormItem:n("ffe9").default,uInput:n("0ba7").default,uButton:n("05ab").default,uVerificationCode:n("7130").default,uToast:n("b3bf").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-p-50"},[n("v-uni-view",{staticClass:"text-bold",staticStyle:{"font-size":"60rpx"}},[t._v("登录")]),n("v-uni-view",{staticClass:"text-gray u-font-36 u-m-b-20"},[t._v("登录后体验更精彩")]),n("u-form",{ref:"uForm",attrs:{model:t.model,rules:t.rules,errorType:t.errorType}},[n("u-form-item",{attrs:{"label-style":t.labelStyle,required:!0,"label-position":t.labelPosition,label:"手机",prop:"phone"}},[n("u-input",{attrs:{border:t.border,type:"number",placeholder:"请输入手机号"},model:{value:t.model.phone,callback:function(e){t.$set(t.model,"phone",e)},expression:"model.phone"}})],1),n("u-form-item",{attrs:{"label-style":t.labelStyle,required:!0,"label-position":t.labelPosition,label:"验证码",prop:"code","label-width":"150"}},[n("u-input",{attrs:{border:t.border,placeholder:"请输入验证码",type:"number"},model:{value:t.model.code,callback:function(e){t.$set(t.model,"code",e)},expression:"model.code"}}),n("u-button",{attrs:{slot:"right",type:"primary",plain:!0,size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}},slot:"right"},[t._v(t._s(t.codeTips))])],1)],1),n("v-uni-navigator",{staticClass:"u-m-b-60 u-text-center u-m-t-60 u-text-right",attrs:{"open-type":"navigate",url:"register","hover-class":"none"}},[t._v("还没有账号?"),n("v-uni-text",{staticClass:"u-m-l-10",staticStyle:{color:"#0F58FB"}},[t._v("前去注册")])],1),n("u-button",{staticClass:"u-m-t-30",attrs:{type:"primary",disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("登录")]),n("u-verification-code",{ref:"uCode",attrs:{seconds:"60"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}}),n("u-toast",{ref:"uToast"})],1)},a=[]},af48:function(t,e,n){"use strict";n.r(e);var i=n("6e96"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},ed8c:function(t,e,n){var i=n("6f37");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("012a7bdf",i,!0,{sourceMap:!1,shadowMode:!1})}}]);