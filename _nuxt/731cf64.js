(window.webpackJsonp=window.webpackJsonp||[]).push([[23,22,29],{197:function(t,e,n){"use strict";n.r(e);n(92),n(199);var l={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},r=n(15),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",[t._v("\n        Button Text\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,n){"use strict";n(200)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},200:function(t,e,n){var l=n(4),r=n(9),o=n(35),c=/"/g,f=function(t,e,n,l){var r=String(o(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(l).replace(c,"&quot;")+'"'),f+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(f),l(l.P+l.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},219:function(t,e,n){"use strict";n.r(e);var l={props:{showText:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},isButton:{type:Boolean,default:!1}}},r=n(15),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex content-center justify-center text-gray-700 bg-gray-400",class:[t.shadow?"shadow-xl":""]},[n("div",{staticClass:"m-auto px-4 text-center text-4xl",class:[t.isButton?"cursor-pointer":"cursor-default"]},[t.showText?n("div",[t._t("default",[t._v("\n        Graphic\n      ")])],2):t._e()])])}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("410de9c6",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(363)},411:function(t,e,n){var l=n(26)(!1);l.push([t.i,"#hero[data-v-b9b58a62]{height:480px}",""]),t.exports=l},433:function(t,e,n){"use strict";n.r(e);var l=n(197),r=n(219),o={components:{SoButton:l.default,GraphicPlaceholder:r.default},props:{link:{type:String,default:""}}},c=(n(410),n(15)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row flex-wrap justify-center content-center mx-4 xs:mx-0 my-16"},[n("div",{staticClass:"xs:w-4/6 xs:pr-10"},[t._t("graphic",[n("graphic-placeholder")])],2),t._v(" "),n("div",{staticClass:"flex flex-col justify-center content-center xs:w-2/6 my-4"},[n("div",{staticClass:"text-3xl xs:text-5xl my-8 text-center"},[t._t("blurb")],2),t._v(" "),n("div",{staticClass:"flex justify-center mb-8"},[n("so-button",{staticClass:"block",attrs:{link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])])}),[],!1,null,"b9b58a62",null);e.default=component.exports;installComponents(component,{GraphicPlaceholder:n(219).default,SoButton:n(197).default})}}]);