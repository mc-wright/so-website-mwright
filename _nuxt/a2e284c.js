(window.webpackJsonp=window.webpackJsonp||[]).push([[46,3,10,11,28,29,30],{196:function(t,e,n){"use strict";n.r(e);var o={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.alignment()},[t.showHeader?n("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"text-sm xs:text-lg"},[t._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,n){"use strict";n.r(e);n(92),n(199);var o={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",[t._v("\n        Button Text\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,n){"use strict";n(200)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},200:function(t,e,n){var o=n(4),l=n(9),r=n(35),c=/"/g,d=function(t,e,n,o){var l=String(r(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(o).replace(c,"&quot;")+'"'),d+">"+l+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(d),o(o.P+o.F*l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},201:function(t,e,n){var content=n(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("5b64a149",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";n.r(e);var o={components:{SoButton:n(197).default},props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}}},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col xl:flex-row justify-between items-center xl:mx-12"},[n("div",{staticClass:"text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left"},[t._t("info")],2),t._v(" "),n("div",{staticClass:"block"},[n("so-button",{staticClass:"whitespace-no-wrap w-full",attrs:{alternate:t.alternate,link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SoButton:n(197).default})},206:function(t,e,n){"use strict";n.r(e);var o={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:t.alignment()},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},207:function(t,e,n){"use strict";n(201)},208:function(t,e,n){var o=n(26)(!1);o.push([t.i,".herobase[data-v-6318ec5c]{height:400px}",""]),t.exports=o},209:function(t,e,n){"use strict";n.r(e);n(207);var o=n(15),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[n("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[n("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"text-lg xl:text-2xl"},[t._t("body")],2)]),t._v(" "),n("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);e.default=component.exports},210:function(t,e,n){t.exports=n.p+"img/squares.a9b52f1.jpg"},211:function(t,e,n){"use strict";n.r(e);var o={props:{alternate:{type:Boolean,default:!1}}},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"90px"}}),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);e.default=component.exports},212:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},348:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6722b225",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n(348)},377:function(t,e,n){var o=n(26),l=n(212),r=n(210),c=o(!1),d=l(r);c.push([t.i,".hero[data-v-5f24d102]{background:100% 100% no-repeat url("+d+")}",""]),t.exports=c},416:function(t,e,n){"use strict";n.r(e);var o={methods:{handleContactClick:function(t,e){e&&e.preventDefault(),"discount"===t?this.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about academic discounts on official Security Onion training.",source:"education_discount_contact_us"}):"talk"===t&&this.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about Security Onion Solutions speaking to my classroom.",source:"education_speaking_contact_us"})}}},l=(n(376),n(15)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:px-12"},[n("SubHero",{staticClass:"hero",attrs:{id:"download-before"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",[t._v("\n        Security Onion\n      ")]),t._v(" "),n("div",[t._v("\n        For Education\n      ")])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center"},[t._v("\n        Use the leading free and open threat hunting tool in your classroom\n      ")])]},proxy:!0}])}),t._v(" "),n("ContentSection",{attrs:{id:"overview",alternate:!0}},[n("div",{staticClass:"flex flex-col items-center bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32 pb-4"},[n("SectionHeader",{staticClass:"mb-6"},[t._v("\n        Using Security Onion in the Classroom\n      ")]),t._v(" "),n("div",{staticClass:"text-lg text-center w-2/3"},[n("p",{staticClass:"mb-4"},[t._v("\n          Join the ranks of universities and institutions for higher education around the world\n          that use Security Onion to educate the next generation of cybersecurity professionals!\n        ")]),t._v(" "),n("p",[t._v("\n          The Security Onion free and open license is perfectly suited for classroom use.\n          No need to purchase or apply for special educational licenses for educators or students.\n          The version of Security Onion used in the classroom is the same one used to defend enterprise networks around the world!\n        ")])])],1)]),t._v(" "),n("ContentSection",[n("div",[n("SectionHeader",{staticClass:"mb-6"},[n("div",{staticClass:"text-5xl"},[t._v("\n          FAQ\n        ")])]),t._v(" "),n("div",{staticClass:"flex flex-col items-center"},[n("DetailPara",{staticClass:"md:w-2/3 lg:w-1/2 mb-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2"},[n("div",[t._v("Q:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                What resources are available to help me learn about Security Onion?\n              ")])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2 ml-2"},[n("div",[t._v("A:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                YouTube: "),n("a",{staticClass:"text-so-blue cursor-pointer hover:underline",attrs:{href:"https://securityonion.net/youtube"}},[t._v("securityonion.net/youtube")]),t._v(" "),n("br"),t._v("\n                Official Training: "),n("nuxt-link",{staticClass:"text-so-blue cursor-pointer hover:underline",attrs:{to:"/training"}},[t._v("securityonionsolutions.com/training")])],1)])]},proxy:!0}])}),t._v(" "),n("DetailPara",{staticClass:"md:w-2/3 lg:w-1/2 mb-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2"},[n("div",[t._v("Q:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                Do you offer academic discounts on training?\n              ")])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2 ml-2"},[n("div",[t._v("A:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                Our Essentials course is "),n("span",{staticClass:"font-bold"},[t._v("FREE")]),t._v("! For those looking to further their understanding of the Security Onion platform\n                we do offer academic discounts"),n("span",{staticClass:"font-bold"},[t._v("*")]),t._v(" on our on-demand training. "),n("span",{staticClass:"link text-so-blue hover:underline cursor-pointer",on:{click:function(e){return t.handleContactClick("discount",e)}}},[t._v("Contact us")]),t._v(" for more information.\n              ")])])]},proxy:!0}])}),t._v(" "),n("DetailPara",{staticClass:"md:w-2/3 lg:w-1/2 mb-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2"},[n("div",[t._v("Q:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                I'm having trouble with Security Onion. How do I get help?\n              ")])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2 ml-2"},[n("div",[t._v("A:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                We have excellent documentation available "),n("a",{staticClass:"text-so-blue cursor-pointer hover:underline",attrs:{href:"https://docs.securityonion.net/"}},[t._v("here")]),t._v(",\n                with its own FAQ "),n("a",{staticClass:"text-so-blue cursor-pointer hover:underline",attrs:{href:"https://docs.securityonion.net/en/2.3/faq.html"}},[t._v("here")]),t._v(".\n                For more information about support options, "),n("nuxt-link",{staticClass:"text-so-blue cursor-pointer hover:underline",attrs:{to:"/support"}},[t._v("click here")]),t._v(".\n              ")],1)])]},proxy:!0}])}),t._v(" "),n("DetailPara",{staticClass:"md:w-2/3 lg:w-1/2 mb-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2"},[n("div",[t._v("Q:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                May I use Security Onion's documentation as part of my course?\n              ")])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2 ml-2"},[n("div",[t._v("A:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                You are free to reference our documentation while teaching your course, but please check the\n                "),n("a",{staticClass:"text-so-blue cursor-pointer hover:underline",attrs:{href:"https://docs.securityonion.net/en/2.3/about.html#license"}},[t._v("documentation's license")]),t._v("\n                for further details.\n              ")])])]},proxy:!0}])}),t._v(" "),n("DetailPara",{staticClass:"md:w-2/3 lg:w-1/2 mb-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2"},[n("div",[t._v("Q:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                May I use Security Onion Solutions' paid course material as part of my course?\n              ")])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2 ml-2"},[n("div",[t._v("A:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                Security Onion Solutions' paid course material is copyrighted and should not be re-used in any way without express written permission.\n              ")])])]},proxy:!0}])}),t._v(" "),n("DetailPara",{staticClass:"md:w-2/3 lg:w-1/2",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2"},[n("div",[t._v("Q:")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n                How do I get someone to talk to my class about Security Onion?\n              ")])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-row space-x-2 ml-2"},[n("div",[t._v("A:")]),t._v(" "),n("div",{staticClass:"text-left"},[n("span",{staticClass:"link text-so-blue hover:underline cursor-pointer",on:{click:function(e){return t.handleContactClick("talk",e)}}},[t._v("Contact us")]),t._v(" for more details.\n              ")])])]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"md:w-1/2 lg:w-1/3 mt-16"},[n("div",{staticClass:"flex flex-row space-x-2 ml-2"},[n("div",[t._v("*")]),t._v(" "),n("div",{staticClass:"text-left"},[t._v("\n              Discounts are available to students and faculty of accredited institutions, subject to limitations.\n            ")])])])],1)],1)]),t._v(" "),n("ContentSection",{attrs:{id:"education_info",alternate:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("action-callout",{staticClass:"-mt-4",attrs:{alternate:!0},on:{"button-click":function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about using Security Onion in my classroom.",source:"education_general_contact_us"})}},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",{staticClass:"text-2xl flex justify-center"},[n("div",[t._v("\n              Have more questions about teaching using Security Onion?\n            ")])])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n            Contact Us\n          ")])]},proxy:!0}])})],1)])],1)}),[],!1,null,"5f24d102",null);e.default=component.exports;installComponents(component,{SubHero:n(209).default,SectionHeader:n(206).default,ContentSection:n(211).default,DetailPara:n(196).default,ActionCallout:n(205).default})}}]);