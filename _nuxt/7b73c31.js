(window.webpackJsonp=window.webpackJsonp||[]).push([[3,29],{197:function(t,e,n){"use strict";n.r(e);n(92),n(199);var l={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},r=n(15),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",[t._v("\n        Button Text\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,n){"use strict";n(200)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},200:function(t,e,n){var l=n(4),r=n(9),o=n(35),c=/"/g,f=function(t,e,n,l){var r=String(o(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(l).replace(c,"&quot;")+'"'),f+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(f),l(l.P+l.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},205:function(t,e,n){"use strict";n.r(e);var l={components:{SoButton:n(197).default},props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}}},r=n(15),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col xl:flex-row justify-between items-center xl:mx-12"},[n("div",{staticClass:"text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left"},[t._t("info")],2),t._v(" "),n("div",{staticClass:"block"},[n("so-button",{staticClass:"whitespace-no-wrap w-full",attrs:{alternate:t.alternate,link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SoButton:n(197).default})}}]);