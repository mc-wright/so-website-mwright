(window.webpackJsonp=window.webpackJsonp||[]).push([[5,28,29],{276:function(t,e,n){"use strict";n.r(e);n(93),n(278);var r={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",(function(){return[t._v("\n        Button Text\n      ")]}))],2)])])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n(279)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},279:function(t,e,n){var r=n(4),l=n(10),o=n(35),c=/"/g,f=function(t,e,n,r){var l=String(o(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),f+">"+l+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(f),r(r.P+r.F*l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},286:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:t.alignment()},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("df6d6cf2",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";n(367)},412:function(t,e,n){var r=n(22)(!1);r.push([t.i,".graphic[data-v-39dc664a]{height:300px;width:600px}",""]),t.exports=r},435:function(t,e,n){"use strict";n.r(e);var r={components:{SectionHeader:n(286).default},props:{link:{type:String,default:""},button:{type:Boolean,default:!0}}},l=(n(411),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row justify-center h-auto"},[n("div",{staticClass:"flex flex-col items-center"},[n("section-header",{staticClass:"mb-4 order-1"},[t._t("callout")],2),t._v(" "),n("div",{staticClass:"order-3 lg:order-2"},[t._t("graphic")],2),t._v(" "),t.button?n("div",{staticClass:"block order-2 lg:order-3 mt-2 lg:mt-0"},[n("so-button",{attrs:{link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1):t._e()],1)])}),[],!1,null,"39dc664a",null);e.default=component.exports;installComponents(component,{SectionHeader:n(286).default,SoButton:n(276).default})}}]);