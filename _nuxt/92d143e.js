(window.webpackJsonp=window.webpackJsonp||[]).push([[49,3,8,10,11,13,15,25,26,27,28,29,30,31,34,35,36,37,38],Array(196).concat([function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.alignment()},[t.showHeader?n("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"text-sm xs:text-lg"},[t._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(92),n(199);var r={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",[t._v("\n        Button Text\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";var r=n(5),o=n(28),l=n(29),c=n(132),d=n(74),f=n(9),m=n(54).f,x=n(55).f,v=n(13).f,h=n(202).trim,_="Number",y=r.Number,w=y,j=y.prototype,C=l(n(93)(j))==_,k="trim"in String.prototype,S=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(C?f((function(){j.valueOf.call(n)})):l(n)!=_)?c(new w(S(e)),n,y):S(e)};for(var E,O=n(8)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;O.length>N;N++)o(w,E=O[N])&&!o(y,E)&&v(y,E,x(w,E));y.prototype=j,j.constructor=y,n(16)(r,_,y)}},function(t,e,n){"use strict";n(200)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){var r=n(4),o=n(9),l=n(35),c=/"/g,d=function(t,e,n,r){var o=String(l(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),d+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(d),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){var content=n(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("5b64a149",content,!0,{sourceMap:!1})},function(t,e,n){var r=n(4),o=n(35),l=n(9),c=n(203),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),x=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(v):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},v=x.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=x},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var content=n(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("5f3fab1a",content,!0,{sourceMap:!1})},function(t,e,n){"use strict";n.r(e);var r={components:{SoButton:n(197).default},props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col xl:flex-row justify-between items-center xl:mx-12"},[n("div",{staticClass:"text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left"},[t._t("info")],2),t._v(" "),n("div",{staticClass:"block"},[n("so-button",{staticClass:"whitespace-no-wrap w-full",attrs:{alternate:t.alternate,link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SoButton:n(197).default})},function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:t.alignment()},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n(201)},function(t,e,n){var r=n(26)(!1);r.push([t.i,".herobase[data-v-6318ec5c]{height:400px}",""]),t.exports=r},function(t,e,n){"use strict";n.r(e);n(207);var r=n(15),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[n("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[n("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"text-lg xl:text-2xl"},[t._t("body")],2)]),t._v(" "),n("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);e.default=component.exports},function(t,e,n){t.exports=n.p+"img/squares.a9b52f1.jpg"},function(t,e,n){"use strict";n.r(e);var r={props:{alternate:{type:Boolean,default:!1}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"90px"}}),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){"use strict";n(204)},function(t,e,n){var r=n(26)(!1);r.push([t.i,".nav-style{border-bottom:1px solid #d3d3d3}",""]),t.exports=r},function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("4589e76e",content,!0,{sourceMap:!1})},function(t,e,n){t.exports=n.p+"img/terms.2708c23.jpg"},function(t,e,n){t.exports=n.p+"img/world.0042a50.jpg"},function(t,e,n){"use strict";n.r(e);var r={props:{pageName:{type:String,default:""},links:{type:Array,default:function(){return[{name:"",id:""}]}}}},o=(n(213),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:-mx-12"},[n("div",{staticClass:"w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100"},[n("div",{staticClass:"text-md xs:text-xl font-light pb-1"},[t._v("\n      "+t._s(t.pageName)+"\n      "),n("noscript",[t._v("\n        Test\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base"},t._l(t.links,(function(link,e){return n("div",{key:link.name,staticClass:"flex flex-row"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+link.id,expression:"`#${link.id}`"}],staticClass:"px-2 hover:text-gray-700",attrs:{href:"#"}},[t._v("\n          "+t._s(link.name)+"\n        ")]),t._v(" "),e!==t.links.length-1?n("div",{staticClass:"xs:px-1"},[t._v("\n          •\n        ")]):t._e()])})),0)])])}),[],!1,null,null,null);e.default=component.exports},,function(t,e,n){t.exports=n.p+"img/conference.e984dd6.jpg"},function(t,e,n){t.exports=n.p+"img/graph.e06aad7.jpg"},function(t,e,n){t.exports=n.p+"img/hardware.71eb4d6.jpg"},function(t,e,n){t.exports=n.p+"img/peelback-half.3476289.jpg"},function(t,e,n){t.exports=n.p+"img/training.3bb87ee.jpg"},function(t,e,n){t.exports=n.p+"img/1mil+_downloads.cd77797.jpg"},function(t,e,n){t.exports=n.p+"img/appliance.b14ab3a.jpg"},function(t,e,n){t.exports=n.p+"img/copper.f04a0c5.jpg"},function(t,e,n){t.exports=n.p+"img/course.97f5711.jpg"},function(t,e,n){t.exports=n.p+"img/dots.5e8c31e.jpg"},function(t,e,n){t.exports=n.p+"img/github_sos.f40a74c.jpg"},function(t,e,n){t.exports=n.p+"img/grid_list.82c1da7.jpg"},function(t,e,n){t.exports=n.p+"img/install.78b5f24.jpg"},function(t,e,n){t.exports=n.p+"img/instructor.2278e54.jpg"},function(t,e,n){t.exports=n.p+"img/live.7648d64.jpg"},function(t,e,n){t.exports=n.p+"img/mike-speaking.54a2033.jpg"},function(t,e,n){t.exports=n.p+"img/new-team.10cffe2.jpg"},function(t,e,n){t.exports=n.p+"img/old-server-mockup.2437dd9.jpg"},function(t,e,n){t.exports=n.p+"img/security_onion_solutions_rings.ac15da2.jpg"},function(t,e,n){t.exports=n.p+"img/soc.aab908d.jpg"},function(t,e,n){t.exports=n.p+"img/sos-site-header-2-square.536f56b.jpg"},function(t,e,n){t.exports=n.p+"img/training1.334ffb4.jpg"},function(t,e,n){t.exports=n.p+"img/training2.da87a40.jpg"},function(t,e,n){t.exports=n.p+"img/workbook.813ee35.jpg"},function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(196).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("div",{staticClass:"mb-4 lg:mb-0"},[t._t("graphic")],2),t._v(" "),n("detail-para",{class:[t.textMargin?"lg:ml-12":"xs:pl-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(196).default})},function(t,e,n){var map={"./1mil+_downloads.jpg":225,"./appliance.jpg":226,"./conference.jpg":220,"./copper.jpg":227,"./course.jpg":228,"./dots.jpg":229,"./github_sos.jpg":230,"./graph.jpg":221,"./grid_list.jpg":231,"./hardware.jpg":222,"./install.jpg":232,"./instructor.jpg":233,"./live.jpg":234,"./mike-speaking.jpg":235,"./new-team.jpg":236,"./old-server-mockup.jpg":237,"./peelback-half.jpg":223,"./security_onion_solutions_rings.jpg":238,"./soc.jpg":239,"./sos-site-header-2-square.jpg":240,"./squares.jpg":210,"./terms.jpg":216,"./training.jpg":224,"./training1.jpg":241,"./training2.jpg":242,"./workbook.jpg":243,"./world.jpg":217};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=245},function(t,e,n){"use strict";n(215)},function(t,e,n){var r=n(26)(!1);r.push([t.i,".size[data-v-744daca7]{height:15rem;width:15rem;min-width:15rem}@media (min-width:480px){.size[data-v-744daca7]{height:var(--size);width:var(--size);min-width:var(--size)}}",""]),t.exports=r},function(t,e,n){"use strict";n.r(e);n(198);var r={props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0}},computed:{sizeVar:function(){return{"--size":"".concat(this.size,"rem")}}},methods:{importImage:function(){return n(245)("./".concat(this.fileName))}}},o=(n(246),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center items-center m-auto size",class:[t.padding?"bg-white rounded-full overflow-hidden":"xs:p-0"],style:t.sizeVar},[n("img",{attrs:{src:t.importImage()}})])}),[],!1,null,"744daca7",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(196).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("detail-para",{staticClass:"order-2 lg:order-1",class:[t.textMargin?"lg:mr-12":"xs:pr-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticClass:"order-1 lg:order-2 mb-4 lg:mb-0"},[t._t("graphic")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(196).default})},,function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("3be04dea",content,!0,{sourceMap:!1})},,,,,,,,,,,,function(t,e,n){t.exports=n.p+"img/bryant_treacle.2f95b88.jpg"},function(t,e,n){t.exports=n.p+"img/chris_morgret.7a2a718.jpg"},function(t,e,n){t.exports=n.p+"img/doug_burks.8c19ef0.jpg"},function(t,e,n){t.exports=n.p+"img/dustin_lee.26efa3e.jpg"},function(t,e,n){t.exports=n.p+"img/jason_ertel.ae7a1d5.jpg"},function(t,e,n){t.exports=n.p+"img/john_bernal.f17fe85.jpg"},function(t,e,n){t.exports=n.p+"img/josh_brower.824ac4a.jpg"},function(t,e,n){t.exports=n.p+"img/josh_patterson.cb90e75.jpg"},function(t,e,n){t.exports=n.p+"img/karen_henegar_long.4a4be25.jpg"},function(t,e,n){t.exports=n.p+"img/mike_byrd.ebda5ae.jpg"},function(t,e,n){t.exports=n.p+"img/mike_reeves.b81c124.jpg"},function(t,e,n){t.exports=n.p+"img/pete_di_giorgio.c51da79.jpg"},function(t,e,n){t.exports=n.p+"img/phil_plantamura.a15a061.jpg"},function(t,e,n){t.exports=n.p+"img/wes_lambert.1a655f9.jpg"},function(t,e,n){t.exports=n.p+"img/william_wernert.96bc744.jpg"},,,,,function(t,e,n){t.exports=n.p+"img/credence-logo.fe4f3e5.jpg"},function(t,e,n){t.exports=n.p+"img/elastic-logo.df6975e.png"},function(t,e,n){t.exports=n.p+"img/fireeye-logo.d86d7e3.png"},function(t,e,n){t.exports=n.p+"img/gigamon-logo.69272c6.png"},function(t,e,n){t.exports=n.p+"img/intelligenesis-logo.aaf4ff8.png"},function(t,e,n){t.exports=n.p+"img/profitap-logo.d7341c4.png"},,,,,,,,function(t,e,n){"use strict";n(251)},function(t,e,n){var r=n(26)(!1);r.push([t.i,".circle[data-v-c0180156]{border-radius:9999px;border-width:4px;--border-opacity:1;border-color:#212121;border-color:rgba(33,33,33,var(--border-opacity));position:absolute;top:50%;margin-top:-6px;height:18px;width:18px;margin-left:-7px}",""]),t.exports=r},function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0817ff06",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("1fbe075e",content,!0,{sourceMap:!1})},,,function(t,e,n){"use strict";n.r(e);n(198);var r={props:{index:{type:Number,default:0},focused:{type:Boolean,default:!1}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center grow",on:{click:function(e){return t.$emit("event-click",t.index)}}},[n("div",{staticClass:"flex flex-col items-center"},[n("div",{staticClass:"text-xl"},[t._t("event")],2),t._v(" "),n("div",{staticClass:"text-2xl font-bold mb-2"},[t._t("year")],2),t._v(" "),n("div",{staticClass:"rounded-full h-6 w-6 border-4 border-gray-900 grow-child",class:[t.focused?"bg-so-blue":"bg-white"]})]),t._v(" "),n("div",{staticClass:"vertical-line h-6"})])}),[],!1,null,"155f25bc",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(198);var r={props:{index:{type:Number,default:0},focused:{type:Boolean,default:!1}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center grow",on:{click:function(e){return t.$emit("event-click",t.index)}}},[n("div",{staticClass:"vertical-line h-6"}),t._v(" "),n("div",{staticClass:"flex flex-col items-center"},[n("div",{staticClass:"rounded-full h-6 w-6 border-4 border-gray-900 grow-child",class:[t.focused?"bg-so-blue":"bg-white"]}),t._v(" "),n("div",{staticClass:"text-2xl font-bold mb-1 mt-2"},[t._t("year")],2),t._v(" "),n("div",{staticClass:"text-xl"},[t._t("event")],2)])])}),[],!1,null,"74aaedbc",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(198);var r={props:{index:{type:Number,default:0}},data:function(){return{focused:!1}},methods:{handleClick:function(){this.focused=!0,this.$emit("event-click",this.index)}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center"},[n("div",{staticClass:"mr-3 flex-1 text-right font-bold"},[t._t("year")],2),t._v(" "),n("div",{staticClass:"vertical-line h-16"}),t._v(" "),n("div",{staticClass:"ml-3 flex-1"},[t._t("event")],2)])}),[],!1,null,"026502fb",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(198);var r={props:{index:{type:Number,default:0}},data:function(){return{focused:!1}},methods:{handleClick:function(){this.focused=!0,this.$emit("event-click",this.index)}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center"},[n("div",{staticClass:"mr-3 flex-1 text-right"},[t._t("event")],2),t._v(" "),n("div",{staticClass:"vertical-line h-16"}),t._v(" "),n("div",{staticClass:"ml-3 flex-1"},[t._t("year")],2)])}),[],!1,null,"7108a43d",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(198);var r={props:{index:{type:Number,default:0},focused:{type:Boolean,default:!1}}},o=(n(295),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center grow",on:{click:function(e){return t.$emit("event-click",t.index)}}},[n("div",{staticClass:"mr-4 flex-1 font-bold text-right text-2xl mt-1"},[t._t("year")],2),t._v(" "),n("div",{staticClass:"flex-none"},[n("div",{staticClass:"vertical-line h-32 relative"},[n("div",{staticClass:"circle grow-child",class:[t.focused?"bg-so-blue":"bg-white"]})])]),t._v(" "),n("div",{staticClass:"ml-4 flex-1 mt-1"},[t._t("event")],2)])}),[],!1,null,"c0180156",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(198);var r={props:{index:{type:Number,default:0},focused:{type:Boolean,default:!1}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center grow",on:{click:function(e){return t.$emit("event-click",t.index)}}},[n("div",{staticClass:"mr-4 flex-1 text-right mt-1"},[t._t("event")],2),t._v(" "),n("div",{staticClass:"flex-none"},[n("div",{staticClass:"vertical-line h-24"},[n("div",{staticClass:"rounded-full h-4 w-4 -ml-1 mt-10 border-4 border-gray-900 grow-child",class:[t.focused?"bg-so-blue":"bg-white"]})])]),t._v(" "),n("div",{staticClass:"ml-4 flex-1 font-bold text-2xl mt-1"},[t._t("year")],2)])}),[],!1,null,null,null);e.default=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(297)},function(t,e,n){var r=n(26)(!1);r.push([t.i,".grow .grow-child{transition:all .1s linear}.grow:hover{cursor:pointer}.focus,.grow:hover .grow-child{transform:scale(1.25);background-color:#bbdefb}.focus,.grow:active .grow-child{transform:scale(1);--bg-opacity:1;background-color:#1976d2;background-color:rgba(25,118,210,var(--bg-opacity))}",""]),t.exports=r},function(t,e,n){var map={"./bryant_treacle.jpg":263,"./chris_morgret.jpg":264,"./doug_burks.jpg":265,"./dustin_lee.jpg":266,"./jason_ertel.jpg":267,"./john_bernal.jpg":268,"./josh_brower.jpg":269,"./josh_patterson.jpg":270,"./karen_henegar_long.jpg":271,"./mike_byrd.jpg":272,"./mike_reeves.jpg":273,"./pete_di_giorgio.jpg":274,"./phil_plantamura.jpg":275,"./wes_lambert.jpg":276,"./william_wernert.jpg":277};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=338},function(t,e,n){"use strict";n(298)},function(t,e,n){var r=n(26)(!1);r.push([t.i,".card[data-v-1b9a69df]{height:21.5rem;max-width:16rem;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity));overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.img[data-v-1b9a69df]{height:16rem;width:16rem}",""]),t.exports=r},,,function(t,e,n){"use strict";n.r(e);var r=n(301),o=n(302),l=n(303),c=n(304),d=n(305),f=n(306),m={components:{TimelineStart:r.default,TimelineEnd:o.default,TimelineEventRight:l.default,TimelineEventLeft:c.default,ImportantTimelineEventRight:d.default,ImportantTimelineEventLeft:f.default},data:function(){return{timelineEvents:[{year:"2008",event:"Our humble beginnings"},{year:"2009",event:"First release",important:!1},{year:"2012",event:"Big Distro Rebuild (BDR)",important:!1},{year:"2014",event:"Security Onion Solutions, LLC",important:!0},{year:"2016",event:"Company expansion",important:!1},{year:"2018",event:"Custom hardware",important:!0},{year:"2019",event:"Five new members",important:!0},{year:"2020",event:"Over 1 million downloads!"}],focusedEventIndex:0}},methods:{timelineComponent:function(t){var e=this.timelineEvents.indexOf(t);if(0===e)return"timeline-start";if(e===this.timelineEvents.length-1)return"timeline-end";var n="";return n="right",t.important?"important-timeline-event-".concat(n):"timeline-event-".concat(n)},handleClick:function(t){this.focusedEventIndex=t,this.$emit("timeline-click",t)}}},x=(n(336),n(15)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.timelineEvents,(function(e,r){return n("div",{key:r},[n(t.timelineComponent(e),{tag:"component",attrs:{index:r,focused:t.focusedEventIndex===r},on:{"event-click":function(e){return t.handleClick(e)}},scopedSlots:t._u([{key:"year",fn:function(){return[t._v("\n        "+t._s(e.year)+"\n      ")]},proxy:!0},{key:"event",fn:function(){return[n("div",{staticClass:"text-sm lg:text-base"},[t._v("\n          "+t._s(e.event)+"\n        ")])]},proxy:!0}],null,!0)})],1)})),0)}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r={props:{name:{type:String,default:""},image:{type:String,default:""},role:{type:String,default:""},linkedin:{type:String,default:""},twitter:{type:String,default:""}},computed:{showSocialLinks:function(){return""!==this.linkedin||""!==this.twitter}},methods:{importImage:function(){return n(338)("./".concat(this.image))}}},o=(n(339),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"flex flex-col items-left"},[n("div",{staticClass:"img pt-3 px-3"},[n("img",{attrs:{src:t.importImage()}})]),t._v(" "),n("div",{staticClass:"flex flex-row justify-between gap-0 ml-4 mr-3"},[n("div",{staticClass:"text-xl font-bold"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row justify-left items-center"},[""!==t.twitter?n("a",{staticClass:"hover:text-so-blue",attrs:{href:t.twitter,target:"_blank"}},[n("fa",{class:[""!==t.linkedin?"mr-3":""],attrs:{icon:["fab","twitter"],size:"lg"}})],1):t._e(),t._v(" "),""!==t.linkedin?n("a",{staticClass:"hover:text-so-blue",attrs:{href:t.linkedin,target:"_blank"}},[n("fa",{attrs:{icon:["fab","linkedin"],size:"lg"}})],1):t._e()])]),t._v(" "),n("div",{staticClass:"text-md mx-4"},[t._v("\n      "+t._s(t.role)+"\n    ")])])])}),[],!1,null,"1b9a69df",null);e.default=component.exports},,,,,,,,,,,,,function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("7f61895a",content,!0,{sourceMap:!1})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t){t.exports=JSON.parse('{"team":[{"name":"Doug Burks","role":"Founder and CEO","image":"doug_burks.jpg","linkedin":"https://www.linkedin.com/in/dougburks","twitter":"https://twitter.com/dougburks"},{"name":"Phil Plantamura","role":"Chief Operating Officer","image":"phil_plantamura.jpg","linkedin":"https://www.linkedin.com/in/philplantamura","twitter":"https://twitter.com/philplantamura"},{"name":"Mike Byrd","role":"Chief Financial Officer","image":"mike_byrd.jpg"},{"name":"Mike Reeves","role":"Product Manager","image":"mike_reeves.jpg","linkedin":"https://www.linkedin.com/in/mike-reeves-948b131/","twitter":"https://twitter.com/toosmooth"},{"name":"Wes Lambert","role":"Director of Support and Professional Services","image":"wes_lambert.jpg","linkedin":"https://www.linkedin.com/in/wlambertcissp/","twitter":"https://twitter.com/therealwlambert"},{"name":"William Wernert","role":"Software Developer","image":"william_wernert.jpg","linkedin":"https://www.linkedin.com/in/rwwiv/","twitter":"https://twitter.com/rwwiv"},{"name":"Josh Brower","role":"Senior Engineer","image":"josh_brower.jpg","linkedin":"https://www.linkedin.com/in/joshbrower","twitter":"https://twitter.com/defensivedepth"},{"name":"Josh Patterson","role":"Senior Engineer","image":"josh_patterson.jpg","twitter":"https://twitter.com/m0duspwnens"},{"name":"Karen Henegar Long","role":"Sales Assistant","image":"karen_henegar_long.jpg"},{"name":"Bryant Treacle","role":"Senior Engineer","image":"bryant_treacle.jpg","linkedin":"https://www.linkedin.com/in/bryant-treacle-40ab88113/"},{"name":"John Bernal","role":"Senior Engineer","image":"john_bernal.jpg"},{"name":"Jason Ertel","role":"Director of Software Engineering","image":"jason_ertel.jpg"},{"name":"Chris Morgret","role":"Support Engineer","image":"chris_morgret.jpg"},{"name":"Pete Di Giorgio","role":"Federal Account Executive","image":"pete_di_giorgio.jpg"}]}')},function(t){t.exports=JSON.parse('{"events":[{"text":"","img":"undraw_conceptual_idea_xw7k.svg"},{"text":"In 2008, Doug Burks started working on Security Onion, a Linux distribution for intrusion detection, network security monitoring, and log management.","img":"sos-site-header-2-square.jpg"},{},{},{"text":"As the worldwide Security Onion community grew, Doug Burks began receiving more and more requests for training and professional services. In 2014, Doug started Security Onion Solutions LLC to help Security Onion users peel back the layers of their networks.","img":"security_onion_solutions_rings.jpg"},{},{"text":"In 2018 we celebrated 10 years of Security Onion by announcing custom hardware appliances!","img":"old-server-mockup.jpg"},{"text":"Security Onion Solutions continued to grow in 2019, adding five new team members.","img":"new-team.jpg"},{"text":"We currently sit at over 1 million ISO image downloads!","img":"1mil+_downloads.jpg"}]}')},function(t,e,n){"use strict";n(357)},function(t,e,n){var r=n(26),o=n(212),l=n(221),c=r(!1),d=o(l);c.push([t.i,".hero[data-v-6e118ad4]{background:100% no-repeat url("+d+")}",""]),t.exports=c},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(343),o=n(344),l=n(206),c=n(205),d=n(244),f=n(249),m=[n(282),n(283),n(284),n(285),n(286),n(287)],x={components:{Timeline:r.default,TeamCard:o.default,SectionHeader:l.default,ActionCallout:c.default,FeatureRight:d.default,FeatureLeft:f.default},data:function(){return{links:[{name:"Portfolio",id:"portfolio"},{name:"Partners",id:"partners"},{name:"About",id:"about"},{name:"History",id:"timeline"},{name:"Team",id:"members"}],eventText:"Default Graphic",teamArr:n(396).team,eventList:n(397).events,currentEvent:1,logos:m}},methods:{setEventGraphic:function(t){this.currentEvent=t+1,window.innerWidth<1024&&this.$scrollTo("#timeline")},eventObj:function(){this.eventList.length<this.currentEvent&&(this.currentEvent=0);var t=this.eventList[this.currentEvent].img;return""!==t&&void 0!==t||(this.currentEvent=0,t=this.eventList[this.currentEvent].img),{text:this.eventList[this.currentEvent].text,img:n(245)("./".concat(t))}}}},v=(n(398),n(15)),component=Object(v.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:px-12"},[n("PageNav",{attrs:{"page-name":"Home",links:t.links}}),t._v(" "),n("SubHero",{staticClass:"hero text-center",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n      Security Onion 2 is now Generally Available!\n    ")]},proxy:!0},{key:"body",fn:function(){return[t._v("\n      Peel back the layers of your enterprise with our newest and most powerful release yet.\n      "),n("div",{staticClass:"flex justify-center"},[n("ActionCallout",{staticClass:"mt-4",attrs:{link:"/software"},scopedSlots:t._u([{key:"button-text",fn:function(){return[t._v("\n            Learn More\n          ")]},proxy:!0}])})],1)]},proxy:!0}])}),t._v(" "),n("ContentSection",{attrs:{id:"portfolio",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("feature-left",{staticClass:"my-12",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Products\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("CircleGraphic",{staticClass:"shadow-xl rounded-md overflow-hidden",attrs:{"file-name":"soc.jpg",padding:!1,size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-left"},[t._v("\n            Our products include both the Security Onion software and specialized hardware appliances that are built and tested to run Security Onion. Our appliances will save you and your team time and resources, allowing you to focus on keeping your organization secure.\n          ")])]},proxy:!0}])}),t._v(" "),n("feature-right",{staticClass:"my-12",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Services\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("CircleGraphic",{staticClass:"shadow-xl rounded-md overflow-hidden",attrs:{"file-name":"course.jpg",padding:!1,size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-left"},[t._v("\n            We offer both training and support for Security Onion. Our instructors are the only Security Onion Certified Instructors in the world and our course material is the only authorized training material for Security Onion. We've been teaching Security Onion classes and providing Professional Services since 2014.\n          ")])]},proxy:!0}])}),t._v(" "),n("action-callout",{staticClass:"my-12",attrs:{alternate:!0},on:{"button-click":function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about Security Onion Solutions' offerings.",source:"main_general_contact_us"})}},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",{staticClass:"text-2xl flex justify-center"},[n("div",[t._v("\n              Interested in discussing how our products and services can help your organization?\n            ")])])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n            Contact Us\n          ")])]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"partners"}},[n("div",{staticClass:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Our Partners\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row lg:flex-wrap justify-center content-center md:-mx-2 mt-4"},t._l(t.logos,(function(image,t){return n("img",{key:t,staticClass:"partner-logo m-auto lg:px-6 py-10 lg:py-2 w-1/2 lg:w-1/6",attrs:{src:image}})})),0)],1)]),t._v(" "),n("ContentSection",{attrs:{id:"about",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        About Us\n      ")]),t._v(" "),n("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:t._u([{key:"graphic",fn:function(){return[n("div",{staticClass:"rounded-full shadow-lg overflow-hidden"},[n("CircleGraphic",{attrs:{padding:!1,"file-name":"mike-speaking.jpg",size:20}})],1)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion Solutions, LLC is the creator and maintainer of Security Onion, a free and open source platform for threat hunting, network security monitoring, and log management. Security Onion includes best-of-breed open source tools such as Suricata, Zeek, Wazuh, the Elastic Stack, among many others.\n          ")]),t._v(" "),n("div",{staticClass:"text-center xs:text-left mt-4"},[t._v("\n            We created and maintain Security Onion, so we know it better than anybody else.\n            When you purchase products and services from us, you're helping to fund development of Security Onion!\n          ")])]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"timeline"}},[n("div",{staticClass:"xs:-mx-12"},[n("section-header",{staticClass:"sm:mx-40 mb-8"},[t._v("\n        Our History\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row flex-wrap justify-center content-center mb-4"},[n("div",{staticClass:"flex flex-col justify-center items-center md:w-1/2 lg:w-2/3 lg:pr-8 xl:pl-4 pb-12 lg:pb-0"},[n("img",{staticClass:"object-contain mb-8 overflow-hidden rounded-md w-5/6",class:[0!=t.currentEvent?"shadow-xl":""],attrs:{src:t.eventObj().img}}),t._v(" "),n("div",{staticClass:"text-xl text-center w-4/5"},[t._v("\n            "+t._s(t.eventObj().text)+"\n          ")])]),t._v(" "),n("div",{staticClass:"md:w-1/2 lg:w-1/3 pr-12"},[n("Timeline",{on:{"timeline-click":function(e){return t.setEventGraphic(e)}}})],1)])],1)]),t._v(" "),n("ContentSection",{attrs:{id:"members",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12"},[n("section-header",{staticClass:"sm:mx-40 mb-8"},[t._v("\n        Our Team\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row flex-wrap justify-center content-center mb-4"},t._l(t.teamArr,(function(t,e){return n("div",{key:e,staticClass:"px-1 py-3"},[n("team-card",{attrs:{name:t.name,role:t.role,image:t.image,linkedin:t.linkedin,twitter:t.twitter}})],1)})),0)],1)])],1)}),[],!1,null,"6e118ad4",null);e.default=component.exports;installComponents(component,{PageNav:n(218).default,ActionCallout:n(205).default,SubHero:n(209).default,CircleGraphic:n(248).default,FeatureLeft:n(249).default,FeatureRight:n(244).default,ActionCallout:n(205).default,ContentSection:n(211).default,SectionHeader:n(206).default,Timeline:n(343).default,TeamCard:n(344).default})}])]);