(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-leader-detail-detail"],{"608cb":function(t,a,e){"use strict";e.r(a);var i=e("8ce1"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"6c6f":function(t,a,e){"use strict";e.r(a);var i=e("8796"),n=e("608cb");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("c5af");var s,c=e("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"d9714440",null,!1,i["a"],s);a["default"]=u.exports},"71c2":function(t,a,e){var i=e("a1c6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("9d92d4ba",i,!0,{sourceMap:!1,shadowMode:!1})},8796:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uImage:e("03f6").default,uIcon:e("f4ee").default,uLoadmore:e("0486").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[t._l(t.list,(function(a,n){return[i("v-uni-view",{key:n+"_0",staticClass:"card bg-white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBranch(a.id)}}},[i("v-uni-view",{staticClass:"u-flex u-row-between u-border-bottom",staticStyle:{padding:"20rpx 20rpx 13rpx 30rpx"}},[i("v-uni-view",{staticClass:"u-flex"},[i("v-uni-view",{staticClass:"u-font-32 text-bold text-black u-m-r-10"},[t._v(t._s(a.branch_name))]),i("u-image",{attrs:{src:e("b41a"),height:"33rpx",width:"34rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toSetting(a.id)}}})],1),i("v-uni-view",{staticClass:"u-flex u-row-right",staticStyle:{color:"#999999"}},[i("u-icon",{attrs:{name:"arrow-right",size:"28",color:"#999999"}})],1)],1),i("v-uni-view",{staticClass:"u-flex u-row-around",staticStyle:{padding:"25rpx 0"}},[i("v-uni-navigator",{staticClass:"u-flex u-row-center u-flex-1",staticStyle:{"flex-direction":"column"},attrs:{"open-type":"navigate",url:"staffDetail/projectDetail?staff_id="+a.id,"hover-class":"none"}},[i("v-uni-view",{staticClass:"u-font-36 text-bold u-m-b-10",staticStyle:{color:"#333333"}},[t._v(t._s(a.staff_count))]),i("v-uni-view",{staticClass:"u-font-26",staticStyle:{color:"#999999"}},[t._v("员工")])],1),i("v-uni-navigator",{staticClass:"u-flex u-row-center u-flex-1",staticStyle:{"flex-direction":"column"},attrs:{"open-type":"navigate",url:"staffDetail/clueDetail?staff_id="+a.id,"hover-class":"none"}},[i("v-uni-view",{staticClass:"u-font-36 text-bold u-m-b-10",staticStyle:{color:"#333333"}},[t._v(t._s(a.project_count))]),i("v-uni-view",{staticClass:"u-font-26",staticStyle:{color:"#999999"}},[t._v("线索数")])],1),i("v-uni-view",{staticClass:"u-flex u-row-center u-flex-1",staticStyle:{"flex-direction":"column"}},[i("v-uni-view",{staticClass:"u-font-36 text-bold u-m-b-10",staticStyle:{color:"#333333"}},[t._v(t._s(a.order_count))]),i("v-uni-view",{staticClass:"u-font-26",staticStyle:{color:"#999999"}},[t._v("合同数")])],1),i("v-uni-view",{staticClass:"u-flex u-row-center u-flex-1",staticStyle:{"flex-direction":"column"}},[i("v-uni-view",{staticClass:"u-font-36 text-bold u-m-b-10",staticStyle:{color:"#333333"}},[t._v("￥"+t._s(a.order_amount))]),i("v-uni-view",{staticClass:"u-font-26",staticStyle:{color:"#999999"}},[t._v("合同金额")])],1)],1)],1)]})),i("v-uni-view",{staticClass:"u-m-t-20 u-m-b-20"},[i("u-loadmore",{attrs:{status:t.status}})],1)],2)},o=[]},"8ce1":function(t,a,e){"use strict";e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={onLoad:function(){},onShow:function(){this.claerData()},onReachBottom:function(){var t=this;this.page>=this.last_page||(this.status="loading",this.page=++this.page,setTimeout((function(){t.getInfo()}),50))},data:function(){return{page:1,last_page:1,list:[],status:"loading",iconType:"flower",loadText:{loadmore:"轻轻上拉",loading:"努力加载中",nomore:"实在没有了"}}},methods:{getInfo:function(){var t=this;this.http.get("Manager/branches",{branch_id:uni.getStorageSync("branch_id"),page:this.page}).then((function(a){1e3==a.code&&(0==t.list.length?(t.list=a.data.branch_data,t.last_page=a.data.last_page):a.data.branch_data.forEach((function(a){t.list.push(a)})),t.page>=t.last_page?t.status="nomore":t.status="loadmore")}))},claerData:function(){this.page=1,this.last_page=1,this.list=[],this.status="loading",this.getInfo()},toSetting:function(t){uni.navigateTo({url:"../createC/createC?branch_id="+t})},toBranch:function(t){uni.setStorageSync("branch_id",t),uni.navigateTo({url:"../../mine/mine"})}}};a.default=i},a1c6:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-page-body[data-v-d9714440]{background-color:#f8f8f8}.card[data-v-d9714440]{border-radius:%?10?%;margin:%?20?% %?25?%}body.?%PAGE?%[data-v-d9714440]{background-color:#f8f8f8}',""]),t.exports=a},b41a:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAYAAAC803lsAAAEcUlEQVRYR7WXbYhUVRjH//9z587sOjt3ejEX+pKCW8K2SK2VWURfsmR1y9zZGRX9EtoLS2CUlbFoEphsRGiQvXwIZXVelI1VP1gEgYiWZaEtSBMofUhBepk7+zZz554nxvqwbzNz7ofu1/P7P8//Oeeec55DBPhiicl7YFkLitdD5/ENJ+eWCluS5XalZdLNNf1qGp4mYFNKFobF2w1wPYmQFvnZ03bXZI6/TdMnJO6wPEilukTgg3IMvn7LxFBdI/Guv2/V0ebXlVJ9AKJTkwp4TTReKmatYYDaSZaXg/yMQPs0c4JxLdivxsb2Fk7e8letwmsaifV6j1DxGCGt9WZNIJcpKAnZQUDVYkV4XUR6iln7zFxMTSNOyjtN4FGTpTNlBDjtpu3Hgho5R+Ah0yQmnABn3bS9IpiRXq+fCrtNEpgyonW/m428E8xIqrKBkEHTJCacaL3BzUaOBDPSW9pJpXaZJDBlRKPfzdoBZqRbYvF53kWAC02TGHEiVwoThaUYvqM4k5+1a2Jr3dsZjhwi1Sqj4MAEBADRbMILcBL++GY3F/9zKn/TiJOYXAxlbQC4CJTVBObXPTsEJUA+BbyDbqmcr7JxK7xYLHszFLcQaGqgv0HICYFchZbD1ZOX6BTbafNGCLYZVSS44UG6JzLhc3PxzYnyg7bF4wQWGMWD5N283c6WZOlei+qSkUjg+37lybGjzV/X41t6Jh5XVuir6r1kEtcX3cFYsvK0onxhItDAUDFtP2vCxnq9o0phnQmrRT9TvbKft8gDJgIfOjWajmRM2JZUqceCypmwvsgLdHrL26j4vonAE+kcz4QvmLDRZHlpiPzJhBXtv8JYb3mLUvzESABZ7qbD35qw8VR5GcDzJqzWla10EpNdtKwTJgJoebGQDRstY6ACfX81Y0m5m6hcJtGwWxPgOzcderjaCNU3vks5yR1nSC5vVKAIRBBaQiSylqPWniXxQCNRdVxEtrmZ8Af1WCdZ7iO53yhetTh/aMXNWYitceczGllJUYuEWD+r3ZsSUQQVULa7vr0POfrTkiXEcpTXB3KAgF3LiEBGKHJENK5IpXSqOOT8MXs5VuUjMeeufYrcWr8i+VGAQ77Wl6AssUSqreImkPfX02mRj4vafhk5lqdyc/8XiZFwXLV9D7LDZHoDMBcL+dAy/EBvpqZ285zyXlXAQIAkDVGt/deK2ab35gLrNM//Q4cGbnTTocOBjMSSpT2K6o2GZQYAtOh3i5nIm4GMxJPlCyDvC5CnMSq4UMjYnYGMOCnvSwJPNI5uTojglJuxnwpkJLautESFVBZEnZ0jV0U4CEgLwE0kbqtpS+SShu4pZpp+CWTkJvzvNn5OwJ0kpj09ReQjV9vbkeNoFY2uH221tH2QVCunJhLB70J5u+jnP0eufdrZ0fgcmWH5v8f4DkW1pTqkBXuLWXvPrMpWScRxvAMgN0IwDugPXR0eQI6FRgvY8KKbFmCNzAOuAcfvHK8XONo92jqG6DiGOevZUEv3D6VyzB0fctSeAAAAAElFTkSuQmCC"},c5af:function(t,a,e){"use strict";var i=e("71c2"),n=e.n(i);n.a}}]);