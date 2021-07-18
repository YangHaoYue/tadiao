(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"02b3":function(e,t,i){"use strict";i("d81d"),i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("841c"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLoad:function(){this.getBranches(),this.getRegisterInfo()},onShow:function(){},data:function(){var e=this;return{inviter_id:0,border:!1,labelStyle:{fontSize:"28rpx",fontWeight:"bold"},labelPosition:"top",codeTips:"",errorType:["message","border-bottom"],model:{name:"",phone:"",code:"",companie:"",branch_id:"",position:"",identity:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{validator:function(t,i,n){return e.$u.test.chinese(i)},message:"姓名必须为中文",trigger:["change","blur"]}],phone:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{validator:function(t,i,n){return e.$u.test.mobile(i)},message:"手机号码不正确",trigger:["change","blur"]}],code:[]},selectShow:!1,selectList:[],typeShow:!1,typeList:[],isChecked:!1}},onReady:function(){this.$refs.uForm.setRules(this.rules)},computed:{disabled:function(){var e=!0;return this.model.name&&this.model.phone&&this.model.code&&this.isChecked&&(e=!1),e}},methods:{codeChange:function(e){this.codeTips=e},getCode:function(){var e=this;if(!this.model.phone)return this.$u.toast("请先输入手机号码!");this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码",mask:!0}),this.http.post("auth/sendMsgCode",{tel_num:this.model.phone}).then((function(t){1e3==t.code?(uni.hideLoading(),e.$u.toast("验证码已发送"),e.$refs.uCode.start()):e.$u.toast(t.msg)}))):this.$u.toast("倒计时结束后再发送")},getBranches:function(){var e=this;this.http.get("auth/getBranches",{},!0).then((function(t){0==e.selectList.length?(e.selectList=t.branch_data,e.last_page=t.last_page):t.branch_data.map((function(t){e.selectList.push(t)}))}))},selectConfirm:function(e){this.model.companie=e[0].label,this.model.branch_id=e[0].value},getRegisterInfo:function(){var e=this;this.http.get("auth/getRegisterInfo",{},!0).then((function(t){e.typeList=t.data.identity_option}))},typeConfirm:function(e){this.model.position=e[0].label,this.model.identity=e[0].value},checkboxChange:function(e){console.log(e)},toAgreement:function(){uni.navigateTo({url:"agreement"})},submit:function(){var e=this;this.$refs.uForm.validate((function(t){t?e.http.post("auth/register",{openid:uni.getStorageSync("openid"),name:e.model.name,tel_num:e.model.phone,msg_code:e.model.code,inviter_id:e.inviter_id,branch_id:e.model.branch_id,identity:e.model.identity}).then((function(t){1e3==t.code?(uni.reLaunch({url:"../mine/mine"}),e.$refs.uToast.show({title:t.msg,type:"success",back:!0})):e.$refs.uToast.show({title:t.msg,type:"error"})})):e.$refs.uToast.show({title:"请填写完带*号的选项再提交",type:"error"})}))},GetQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(t);return null!=i?unescape(i[2]):null}}};t.default=n},"1dd3":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uIcon:i("5a99").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-checkbox",style:[e.checkboxStyle]},[i("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[e.iconClass],style:[e.iconStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.checkboxIconSize,color:e.iconColor}})],1),i("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:e.$u.addUnit(e.labelSize)},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2)],1)},a=[]},"1e7c":function(e,t,i){"use strict";i.r(t);var n=i("b7cb"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"53e3":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uForm:i("2704").default,uFormItem:i("ffe9").default,uInput:i("0ba7").default,uButton:i("05ab").default,uCheckbox:i("7ccf").default,uVerificationCode:i("7130").default,uToast:i("b3bf").default,uSelect:i("9fb7").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-p-50"},[i("v-uni-view",{staticClass:"text-bold",staticStyle:{"font-size":"60rpx"}},[e._v("注册")]),i("v-uni-view",{staticClass:"text-gray u-font-36 u-m-b-20"},[e._v("注册登录后体验更精彩")]),i("u-form",{ref:"uForm",attrs:{model:e.model,rules:e.rules,errorType:e.errorType}},[i("u-form-item",{attrs:{"label-style":e.labelStyle,required:!0,"label-width":"120","label-position":e.labelPosition,label:"姓名",prop:"name"}},[i("u-input",{attrs:{border:e.border,placeholder:"请输入姓名",type:"text"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),i("u-form-item",{attrs:{"label-style":e.labelStyle,required:!0,"label-position":e.labelPosition,label:"手机",prop:"phone"}},[i("u-input",{attrs:{border:e.border,type:"text",placeholder:"请输入手机号"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),i("u-form-item",{attrs:{"label-style":e.labelStyle,required:!0,"label-position":e.labelPosition,label:"验证码",prop:"code","label-width":"150"}},[i("u-input",{attrs:{border:e.border,placeholder:"请输入验证码",type:"text"},model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}}),i("u-button",{attrs:{slot:"right",type:"primary",plain:!0,size:"medium"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}},slot:"right"},[e._v(e._s(e.codeTips))])],1),i("u-form-item",{attrs:{"label-style":e.labelStyle,required:!1,"right-icon":"arrow-right","label-position":e.labelPosition,label:"所属公司(本选项普通用户可不选)",prop:"companie","label-width":"150"}},[i("u-input",{attrs:{border:e.border,disabled:!0,placeholder:"请选择公司"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectShow=!0}},model:{value:e.model.companie,callback:function(t){e.$set(e.model,"companie",t)},expression:"model.companie"}})],1),i("u-form-item",{attrs:{"label-style":e.labelStyle,required:!1,"right-icon":"arrow-right","label-position":e.labelPosition,label:"所属岗位","label-width":"150"}},[i("u-input",{attrs:{border:e.border,disabled:!0,placeholder:"请选择所属岗位"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.typeShow=!0}},model:{value:e.model.position,callback:function(t){e.$set(e.model,"position",t)},expression:"model.position"}})],1)],1),i("u-checkbox",{staticClass:"u-m-t-10 u-m-b-10",attrs:{name:"ceshi",size:"27rpx","label-size":"27rpx","active-color":"#0F58FB",shape:"circle"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}},model:{value:e.isChecked,callback:function(t){e.isChecked=t},expression:"isChecked"}},[i("v-uni-text",{staticClass:"text-gray"},[e._v("我已阅读并同意")]),i("v-uni-text",{staticStyle:{color:"#0F58FB"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toAgreement.apply(void 0,arguments)}}},[e._v("《嗒嗒用户服务及隐私协议》")])],1),i("u-button",{staticClass:"u-m-t-30",attrs:{type:"primary",disabled:e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("注册")]),i("u-verification-code",{ref:"uCode",attrs:{seconds:"60"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}}),i("u-toast",{ref:"uToast"}),i("u-select",{attrs:{mode:"single-column","confirm-color":"#0F58FB",list:e.selectList,"value-name":"id","label-name":"branch_name"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.selectConfirm.apply(void 0,arguments)}},model:{value:e.selectShow,callback:function(t){e.selectShow=t},expression:"selectShow"}}),i("u-select",{attrs:{mode:"single-column","confirm-color":"#0F58FB",list:e.typeList,"value-name":"id","label-name":"val"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.typeConfirm.apply(void 0,arguments)}},model:{value:e.typeShow,callback:function(t){e.typeShow=t},expression:"typeShow"}})],1)},a=[]},6100:function(e,t,i){"use strict";i.r(t);var n=i("53e3"),o=i("a4d39");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("a725");var r,l=i("f0c5"),s=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"93a53ede",null,!1,n["a"],r);t["default"]=s.exports},6139:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-checkbox[data-v-e356a272]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-e356a272]{color:#606266;-webkit-box-flex:0;-webkit-flex:none;flex:none;display:-webkit-flex;\r\ndisplay:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-e356a272]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-e356a272]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-e356a272]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-e356a272]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-e356a272]{color:#c8c9cc!important}.u-checkbox__label[data-v-e356a272]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-e356a272]{color:#c8c9cc}',""]),e.exports=t},"6c45":function(e,t,i){"use strict";var n=i("ac5c"),o=i.n(n);o.a},"7ccf":function(e,t,i){"use strict";i.r(t);var n=i("1dd3"),o=i("1e7c");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("6c45");var r,l=i("f0c5"),s=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"e356a272",null,!1,n["a"],r);t["default"]=s.exports},a4d39:function(e,t,i){"use strict";i.r(t);var n=i("02b3"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},a725:function(e,t,i){"use strict";var n=i("f2a6"),o=i.n(n);o.a},ac5c:function(e,t,i){var n=i("6139");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("08617f52",n,!0,{sourceMap:!1,shadowMode:!1})},b7cb:function(e,t,i){"use strict";i("a15b"),i("d81d"),i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var e={};return this.elActiveColor&&this.value&&!this.isDisabled&&(e.borderColor=this.elActiveColor,e.backgroundColor=this.elActiveColor),e.width=this.$u.addUnit(this.checkboxSize),e.height=this.$u.addUnit(this.checkboxSize),e},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&e.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e.join(" ")},checkboxStyle:function(){var e={};return this.parent&&this.parent.width&&(e.width=this.parent.width,e.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(e.width="100%",e.flex="0 0 100%"),e}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var e=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){e.parent&&e.parent.emitEvent&&e.parent.emitEvent()}),80)},setValue:function(){var e=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(t){t.value&&e++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&e>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};t.default=n},f1a3:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".codeType[data-v-93a53ede]{\n\t/* padding: 20rpx 10rpx; */border:#0f58fb solid %?1?%;border-radius:%?5?%;margin-left:%?10?%;color:#0f58fb}",""]),e.exports=t},f2a6:function(e,t,i){var n=i("f1a3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("3138d4b0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);