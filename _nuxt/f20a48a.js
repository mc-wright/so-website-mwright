(window.webpackJsonp=window.webpackJsonp||[]).push([[43,3,10,11,27,28,29,30,40],{196:function(t,e,n){"use strict";n.r(e);var l={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.alignment()},[t.showHeader?n("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"text-sm xs:text-lg"},[t._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,n){"use strict";n.r(e);n(92),n(199);var l={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",[t._v("\n        Button Text\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,n){"use strict";n(200)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},200:function(t,e,n){var l=n(4),o=n(9),r=n(35),c=/"/g,d=function(t,e,n,l){var o=String(r(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(l).replace(c,"&quot;")+'"'),d+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(d),l(l.P+l.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},201:function(t,e,n){var content=n(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("5b64a149",content,!0,{sourceMap:!1})},204:function(t,e,n){var content=n(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("5f3fab1a",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";n.r(e);var l={components:{SoButton:n(197).default},props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}}},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col xl:flex-row justify-between items-center xl:mx-12"},[n("div",{staticClass:"text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left"},[t._t("info")],2),t._v(" "),n("div",{staticClass:"block"},[n("so-button",{staticClass:"whitespace-no-wrap w-full",attrs:{alternate:t.alternate,link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SoButton:n(197).default})},206:function(t,e,n){"use strict";n.r(e);var l={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:t.alignment()},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},207:function(t,e,n){"use strict";n(201)},208:function(t,e,n){var l=n(26)(!1);l.push([t.i,".herobase[data-v-6318ec5c]{height:400px}",""]),t.exports=l},209:function(t,e,n){"use strict";n.r(e);n(207);var l=n(15),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[n("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[n("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"text-lg xl:text-2xl"},[t._t("body")],2)]),t._v(" "),n("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);e.default=component.exports},210:function(t,e,n){t.exports=n.p+"img/squares.a9b52f1.jpg"},211:function(t,e,n){"use strict";n.r(e);var l={props:{alternate:{type:Boolean,default:!1}}},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"90px"}}),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);e.default=component.exports},212:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},213:function(t,e,n){"use strict";n(204)},214:function(t,e,n){var l=n(26)(!1);l.push([t.i,".nav-style{border-bottom:1px solid #d3d3d3}",""]),t.exports=l},218:function(t,e,n){"use strict";n.r(e);var l={props:{pageName:{type:String,default:""},links:{type:Array,default:function(){return[{name:"",id:""}]}}}},o=(n(213),n(15)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:-mx-12"},[n("div",{staticClass:"w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100"},[n("div",{staticClass:"text-md xs:text-xl font-light pb-1"},[t._v("\n      "+t._s(t.pageName)+"\n      "),n("noscript",[t._v("\n        Test\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base"},t._l(t.links,(function(link,e){return n("div",{key:link.name,staticClass:"flex flex-row"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+link.id,expression:"`#${link.id}`"}],staticClass:"px-2 hover:text-gray-700",attrs:{href:"#"}},[t._v("\n          "+t._s(link.name)+"\n        ")]),t._v(" "),e!==t.links.length-1?n("div",{staticClass:"xs:px-1"},[t._v("\n          •\n        ")]):t._e()])})),0)])])}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){"use strict";n.r(e);var l={components:{DetailPara:n(196).default}},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"text-4xl mb-6"},[t._t("section-heading")],2),t._v(" "),n("div",{staticClass:"flex flex-wrap xs:-mx-12"},[n("detail-para",{staticClass:"xs:px-12 w-full md:w-1/2 mb-6 md:mb-0",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-left")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-left")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:"xs:px-12 w-full md:w-1/2",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-right")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-right")]},proxy:!0}],null,!0)})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(196).default})},345:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("a991a2aa",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n(345)},373:function(t,e,n){var l=n(26),o=n(212),r=n(210),c=l(!1),d=o(r);c.push([t.i,".hero-software[data-v-e7181aee]{background:100% 100% no-repeat url("+d+")}",""]),t.exports=c},414:function(t,e,n){"use strict";n.r(e);var l={scrollToTop:!0,components:{TwoPanelDetail:n(341).default},data:function(){return{links:[{name:"Overview",id:"overview"},{name:"Guidelines",id:"guidelines"}]}}},o=(n(372),n(15)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:px-12"},[n("PageNav",{attrs:{"page-name":"Security Onion",links:t.links}}),t._v(" "),n("SubHero",{staticClass:"hero-software",attrs:{id:"download-before"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n      Brand Guidelines\n    ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center"},[t._v("\n        Word Marks, Logos, and Usage Restrictions\n      ")])]},proxy:!0}])}),t._v(" "),n("ContentSection",{attrs:{id:"overview",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("two-panel-detail",{staticClass:"mx-3 xs:mx-24",scopedSlots:t._u([{key:"section-heading",fn:function(){return[t._v("\n          Overview\n        ")]},proxy:!0},{key:"header-left",fn:function(){return[t._v("\n          Word Marks\n        ")]},proxy:!0},{key:"body-left",fn:function(){return[t._v('\n          Both "Security Onion" and "Security Onion Solutions" are registered ® trademarks and service marks, respectively, of Security Onion Solutions, LLC. Usage of these word marks is prohibited without written authorization from an officer of Security Onion Solutions, LLC.\n        ')]},proxy:!0},{key:"header-right",fn:function(){return[t._v("\n          Logos\n        ")]},proxy:!0},{key:"body-right",fn:function(){return[t._v("\n          The Security Onion and Security Onion Solutions Logos are trademarks of Security Onion Solutions, LLC and may only be used when written consent is provided by an officer of Security Onion Solutions, LLC. Usage must adhere to the guidelines posted on this page.\n        ")]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"guidelines"}},[n("div",{staticClass:"xs:-mx-12 px-4"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Logos\n      ")]),t._v(" "),n("div",{staticClass:"w-2/3 text-left text-base xs:text-lg mx-auto"},[t._v("\n        Use of the following logos is bound by the terms described on this page. When authorization is granted, usage must abide by the following guidelines:\n        "),n("ol",{staticClass:"list-disc list-outside ml-4 mt-4"},[n("li",[t._v("\n            The logo must be clearly visible on all common media displays and printed material.\n          ")]),t._v(" "),n("li",[t._v("\n            The logo must be separated from all other nearby content or markings with at least 25% of whitespace relative to the height of the logo itself.\n          ")]),t._v(" "),n("li",[t._v("\n            The logo must be sized such that it is not diminished relative to other logos appearing on the same media.\n          ")]),t._v(" "),n("li",[t._v("\n            Colors of the logos must not be altered.\n          ")]),t._v(" "),n("li",[t._v("\n            Logos may only be presented on all white (#FFFFF) or all black backgrounds (#000000) unless a specific exception is granted via written consent.\n          ")])])]),t._v(" "),n("div",{staticClass:"flex flex-col justify-center w-full"},[n("div",{staticClass:"w-1/2 mx-auto mt-12"},[n("hr"),t._v(" "),n("div",{staticClass:"text-2xl mt-8"},[t._v("\n            Security Onion Logo\n          ")]),t._v(" "),n("div",{staticClass:"p-12 bg-white text-black"},[n("img",{staticClass:"m-8",attrs:{src:"/logo/logo-so-light.svg"}}),t._v("\n            Light ("),n("a",{attrs:{href:"/logo/logo-so-light.png"}},[t._v(".png")]),t._v(" | "),n("a",{attrs:{href:"/logo/logo-so-light.svg"}},[t._v(".svg")]),t._v(")\n          ")]),t._v(" "),n("div",{staticClass:"p-12 bg-black text-white"},[n("img",{staticClass:"m-8",attrs:{src:"/logo/logo-so-dark.svg"}}),t._v("\n            Dark ("),n("a",{attrs:{href:"/logo/logo-so-dark.png"}},[t._v(".png")]),t._v(" | "),n("a",{attrs:{href:"/logo/logo-so-dark.svg"}},[t._v(".svg")]),t._v(")\n          ")])]),t._v(" "),n("div",{staticClass:"w-1/2 mx-auto mt-12"},[n("hr"),t._v(" "),n("div",{staticClass:"text-2xl mt-8"},[t._v("\n            Security Onion Solutions Logo (Abbreviated)\n          ")]),t._v(" "),n("div",{staticClass:"p-12 bg-white text-black"},[n("img",{staticClass:"m-8",attrs:{src:"/logo/logo-sos-abbrev-light.svg"}}),t._v("\n            Light ("),n("a",{attrs:{href:"/logo/logo-sos-abbrev-light.png"}},[t._v(".png")]),t._v(" | "),n("a",{attrs:{href:"/logo/logo-sos-abbrev-light.svg"}},[t._v(".svg")]),t._v(")\n          ")]),t._v(" "),n("div",{staticClass:"p-12 bg-black text-white"},[n("img",{staticClass:"m-8",attrs:{src:"/logo/logo-sos-abbrev-dark.svg"}}),t._v("\n            Dark ("),n("a",{attrs:{href:"/logo/logo-sos-abbrev-dark.png"}},[t._v(".png")]),t._v(" | "),n("a",{attrs:{href:"/logo/logo-sos-abbrev-dark.svg"}},[t._v(".svg")]),t._v(")\n          ")])]),t._v(" "),n("div",{staticClass:"w-1/2 mx-auto mt-12"},[n("hr"),t._v(" "),n("div",{staticClass:"text-2xl mt-8"},[t._v("\n            Security Onion Solutions Logo (Extended)\n          ")]),t._v(" "),n("div",{staticClass:"p-12 bg-white text-black"},[n("img",{staticClass:"m-8",attrs:{src:"/logo/logo-sos-light.svg"}}),t._v("\n            Light ("),n("a",{attrs:{href:"/logo/logo-sos-light.png"}},[t._v(".png")]),t._v(" | "),n("a",{attrs:{href:"/logo/logo-sos-light.svg"}},[t._v(".svg")]),t._v(")\n          ")]),t._v(" "),n("div",{staticClass:"p-12 bg-black text-white"},[n("img",{staticClass:"m-8",attrs:{src:"/logo/logo-sos-dark.svg"}}),t._v("\n            Dark ("),n("a",{attrs:{href:"/logo/logo-sos-dark.png"}},[t._v(".png")]),t._v(" | "),n("a",{attrs:{href:"/logo/logo-sos-dark.svg"}},[t._v(".svg")]),t._v(")\n          ")])])])],1)]),t._v(" "),n("ContentSection",{attrs:{id:"contact",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("action-callout",{staticClass:"my-12",attrs:{alternate:!0},on:{"button-click":function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about branding authorization.",source:"branding_contact_us"})}},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",{staticClass:"text-2xl flex justify-center"},[n("div",[t._v("\n              Contact us for more information on branding requirements.\n            ")])])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n            Contact Us\n          ")])]},proxy:!0}])})],1)])],1)}),[],!1,null,"e7181aee",null);e.default=component.exports;installComponents(component,{PageNav:n(218).default,SubHero:n(209).default,TwoPanelDetail:n(341).default,ContentSection:n(211).default,SectionHeader:n(206).default,ActionCallout:n(205).default})}}]);