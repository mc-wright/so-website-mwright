(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{195:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.alignment()},[this.showHeader?e("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[this._t("header")],2):this._e(),this._v(" "),e("div",{staticClass:"text-sm xs:text-lg"},[this._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},196:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5f3fab1a",content,!0,{sourceMap:!1})},197:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5b64a149",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";n.r(e);var r={components:{SoButton:n(199).default},props:{alt:{type:Boolean,default:!1},link:{type:String,default:""}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col xl:flex-row justify-between items-center xl:mx-12"},[n("div",{staticClass:"text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left"},[t._t("info")],2),t._v(" "),n("div",{staticClass:"block"},[n("so-button",{staticClass:"whitespace-no-wrap w-full",attrs:{alt:t.alt,link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SoButton:n(199).default})},199:function(t,e,n){"use strict";n.r(e);n(209),n(72);var r={props:{alt:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alt?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",[t._v("\n        Button Text\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports},200:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:this.alignment()},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,n){"use strict";n.r(e);n(207);var r=n(7),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[e("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[e("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[this._t("header")],2),this._v(" "),e("div",{staticClass:"text-lg xl:text-2xl"},[this._t("body")],2)]),this._v(" "),e("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);e.default=component.exports},203:function(t,e,n){"use strict";n.r(e);var r={props:{pageName:{type:String,default:""},links:{type:Array,default:function(){return[{name:"",id:""}]}}}},o=(n(205),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:-mx-12"},[n("div",{staticClass:"w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100"},[n("div",{staticClass:"text-md xs:text-xl font-light pb-1"},[t._v("\n      "+t._s(t.pageName)+"\n      "),n("noscript",[t._v("\n        Test\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base"},t._l(t.links,(function(link,e){return n("div",{key:link.name,staticClass:"flex flex-row"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+link.id,expression:"`#${link.id}`"}],staticClass:"px-2 hover:text-gray-700",attrs:{href:"#"}},[t._v("\n          "+t._s(link.name)+"\n        ")]),t._v(" "),e!==t.links.length-1?n("div",{staticClass:"xs:px-1"},[t._v("\n          •\n        ")]):t._e()])})),0)])])}),[],!1,null,null,null);e.default=component.exports},204:function(t,e,n){"use strict";n.r(e);var r={props:{alt:{type:Boolean,default:!1}}},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[this.alt?"bg-so-blue":""],staticStyle:{height:"90px"}}),this._v(" "),this._t("default"),this._v(" "),e("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[this.alt?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);e.default=component.exports},205:function(t,e,n){"use strict";n(196)},206:function(t,e,n){(e=n(16)(!1)).push([t.i,".nav-style{border-bottom:1px solid #d3d3d3}",""]),t.exports=e},207:function(t,e,n){"use strict";n(197)},208:function(t,e,n){(e=n(16)(!1)).push([t.i,".herobase[data-v-6318ec5c]{height:400px}",""]),t.exports=e},211:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(195).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("div",{staticClass:"mb-4 lg:mb-0"},[t._t("graphic")],2),t._v(" "),n("detail-para",{class:[t.textMargin?"lg:ml-12":"xs:pl-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(195).default})},212:function(t,e,n){var content=n(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4589e76e",content,!0,{sourceMap:!1})},213:function(t,e,n){t.exports=n.p+"img/squares.6463b0b.jpg"},214:function(t,e,n){t.exports=n.p+"img/terms.93431e8.jpg"},215:function(t,e,n){t.exports=n.p+"img/world.d880d30.jpg"},216:function(t,e,n){t.exports=n.p+"img/conference.1032341.jpg"},217:function(t,e,n){t.exports=n.p+"img/graph.8400772.jpg"},218:function(t,e,n){t.exports=n.p+"img/hardware.7fda609.jpg"},219:function(t,e,n){t.exports=n.p+"img/peelback-half.fe9d1f5.jpg"},220:function(t,e,n){t.exports=n.p+"img/training.a31889d.jpg"},221:function(t,e,n){var map={"./1mil+_downloads.jpg":222,"./appliance.jpg":223,"./conference.jpg":216,"./copper.jpg":224,"./course.jpg":225,"./dots.jpg":226,"./github_sos.jpg":227,"./graph.jpg":217,"./grid_list.jpg":228,"./hardware.jpg":218,"./install.jpg":229,"./instructor.jpg":230,"./live.jpg":231,"./mike-speaking.jpg":232,"./new-team.jpg":233,"./old-server-mockup.jpg":234,"./peelback-half.jpg":219,"./security_onion_solutions_rings.jpg":235,"./soc.jpg":236,"./sos-site-header-2-square.jpg":237,"./squares.jpg":213,"./terms.jpg":214,"./training.jpg":220,"./training1.jpg":238,"./training2.jpg":239,"./workbook.jpg":240,"./world.jpg":215};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=221},222:function(t,e,n){t.exports=n.p+"img/1mil+_downloads.654f98c.jpg"},223:function(t,e,n){t.exports=n.p+"img/appliance.db240df.jpg"},224:function(t,e,n){t.exports=n.p+"img/copper.415548c.jpg"},225:function(t,e,n){t.exports=n.p+"img/course.ac88f3f.jpg"},226:function(t,e,n){t.exports=n.p+"img/dots.d8b6c08.jpg"},227:function(t,e,n){t.exports=n.p+"img/github_sos.4262a2b.jpg"},228:function(t,e,n){t.exports=n.p+"img/grid_list.508b07c.jpg"},229:function(t,e,n){t.exports=n.p+"img/install.f806511.jpg"},230:function(t,e,n){t.exports=n.p+"img/instructor.add9a02.jpg"},231:function(t,e,n){t.exports=n.p+"img/live.59ca1f6.jpg"},232:function(t,e,n){t.exports=n.p+"img/mike-speaking.f3c8d70.jpg"},233:function(t,e,n){t.exports=n.p+"img/new-team.8451bbf.jpg"},234:function(t,e,n){t.exports=n.p+"img/old-server-mockup.d2de404.jpg"},235:function(t,e,n){t.exports=n.p+"img/security_onion_solutions_rings.28912c4.jpg"},236:function(t,e,n){t.exports=n.p+"img/soc.2e05e17.jpg"},237:function(t,e,n){t.exports=n.p+"img/sos-site-header-2-square.e29d2e0.jpg"},238:function(t,e,n){t.exports=n.p+"img/training1.cf612b0.jpg"},239:function(t,e,n){t.exports=n.p+"img/training2.f6ce0c4.jpg"},240:function(t,e,n){t.exports=n.p+"img/workbook.ec0a6d8.jpg"},241:function(t,e,n){"use strict";n.r(e);n(128);var r={props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0}},computed:{sizeVar:function(){return{"--size":"".concat(this.size,"rem")}}},methods:{importImage:function(){return n(221)("./".concat(this.fileName))}}},o=(n(243),n(7)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center items-center m-auto size",class:[this.padding?"bg-white rounded-full overflow-hidden":"xs:p-0"],style:this.sizeVar},[e("img",{attrs:{src:this.importImage()}})])}),[],!1,null,"744daca7",null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(195).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("detail-para",{staticClass:"order-2 lg:order-1",class:[t.textMargin?"lg:mr-12":"xs:pr-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticClass:"order-1 lg:order-2 mb-4 lg:mb-0"},[t._t("graphic")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(195).default})},243:function(t,e,n){"use strict";n(212)},244:function(t,e,n){(e=n(16)(!1)).push([t.i,".size[data-v-744daca7]{height:15rem;width:15rem;min-width:15rem}@media (min-width:480px){.size[data-v-744daca7]{height:var(--size);width:var(--size);min-width:var(--size)}}",""]),t.exports=e},290:function(t,e,n){var content=n(343);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0378d3f4",content,!0,{sourceMap:!1})},291:function(t,e,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("99eb1886",content,!0,{sourceMap:!1})},292:function(t,e,n){var content=n(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("dc6bb736",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n.r(e);var r={props:{alt:{type:Boolean,default:!1}}},o=(n(349),n(7)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"shadow-sm border font-bold p-4 xs:p-6 xl:py-4 xl:px-4 rounded-xl m-1 relative mx-2 lg:mx-12",class:[this.alt?"bg-so-blue text-white":"bg-white text-black"]},[e("div",{staticClass:"mx-4 text-sm xs:text-base"},[this._t("text")],2)])])}),[],!1,null,"386252c0",null);e.default=component.exports},341:function(t){t.exports=JSON.parse('{"events":[{"name":"Security Onion 2 Fundamentals for Analysts & Admins - Virtual Feb 2021","summary":"Learn how to architect, manage, deploy, and effectively use Security Onion 2 in this 4-day course delivered virtually, February 2-5, 2021.","start":"2021-02-02T08:00:00","end":"2021-02-05T17:00:00","location":"Virtual","register_link":"https://www.eventbrite.com/e/security-onion-2-fundamentals-for-analysts-admins-virtual-feb-2021-registration-130261081401"}]}')},342:function(t,e,n){"use strict";n(290)},343:function(t,e,n){var r=n(16),o=n(202),l=n(220);e=r(!1);var c=o(l);e.push([t.i,'.graphic[data-v-7ddda9f0]{height:25rem;min-width:25rem}.video-container[data-v-7ddda9f0]{overflow:hidden;position:relative}.video-container[data-v-7ddda9f0]:after{padding-top:56.25%;display:block;content:""}.video-container iframe[data-v-7ddda9f0]{position:absolute;top:0;left:0;width:100%;height:100%}.hero-training[data-v-7ddda9f0]{background:100% 100% no-repeat url('+c+")}",""]),t.exports=e},347:function(t,e,n){"use strict";n(291)},348:function(t,e,n){(e=n(16)(!1)).push([t.i,".hooper{height:auto}",""]),t.exports=e},349:function(t,e,n){"use strict";n(292)},350:function(t,e,n){(e=n(16)(!1)).push([t.i,".name[data-v-386252c0]{right:-2%;bottom:-40%}",""]),t.exports=e},372:function(t,e,n){"use strict";n.r(e);n(27);var r={components:{},props:{scheduleList:{type:Array,default:function(){return[]}}},data:function(){return{dateTimeOptions:{day:"numeric",year:"numeric",month:"short",hour:"numeric",minute:"numeric",timeZoneName:"short"}}},methods:{recordRegisterClick:function(t){this.$gtag("event","register_click",{event_category:"engagement",event_label:t.name})}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-12"},[n("ul",t._l(t.scheduleList,(function(e,r){return n("li",{key:r,staticClass:"mb-6 hover:shadow-lg"},[n("a",{attrs:{href:e.register_link,target:"_blank"},on:{click:function(n){return t.recordRegisterClick(e)}}},[n("div",{staticClass:"bg-gray-200 bg-opacity-50 border rounded-md overflow-hidden"},[n("div",{staticClass:"flex h-auto p-2 bg-gray-400 bg-opacity-25"},[n("span",{staticClass:"font-semibold text-xl"},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"h-auto px-4 pt-2 pb-4"},[n("div",{staticClass:"mb-4"},[n("span",{staticClass:"font-normal text-lg"},[t._v(t._s(e.summary))])]),t._v(" "),n("div",{staticClass:"mb-1 font-light"},[t._v("\n              "+t._s(new Date(e.start).toLocaleString("en-US",t.dateTimeOptions))+" - "+t._s(new Date(e.end).toLocaleString("en-US",t.dateTimeOptions))+"\n            ")]),t._v(" "),n("div",{staticClass:"mb-1 font-light"},[t._v("\n              "+t._s(e.location)+"\n            ")])]),t._v(" "),n("div",{staticClass:"h-auto flex items-center justify-end bg-gray-400 bg-opacity-25 border-top border-dotted border-gray-800"},[n("div",{staticClass:"text-sm xs:text-xs text-so-blue xs:text-base px-4 py-2 flex items-center"},[n("div",{staticClass:"mr-2 font-semibold"},[t._v("Register")]),t._v(" "),n("fa",{attrs:{icon:["fas","external-link-alt"]}})],1)])])])])})),0)])}),[],!1,null,"c2d72c62",null);e.default=component.exports},373:function(t,e,n){"use strict";n.r(e);var r=n(344),o=(n(345),{components:{Hooper:r.a,Slide:r.b},props:{list:{type:Array,default:function(){return[]}},alt:{type:Boolean,default:!1}},data:function(){return{settings:{mouseDrag:!1,touchDrag:!1,wheelControl:!1,keysControl:!1,autoPlay:!0,playSpeed:8e3,transition:800,trimWhiteSpace:!0,itemsToShow:1}}}}),l=(n(347),n(7)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hooper",{staticClass:"focus:outline-none",attrs:{tabindex:"-1",settings:t.settings}},t._l(t.list,(function(e,r){return n("slide",{key:r},[n("Testimonial",{attrs:{alt:t.alt},scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n          "+t._s(e)+"\n        ")]},proxy:!0}],null,!0)})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Testimonial:n(301).default})},382:function(t,e,n){"use strict";n.r(e);var r={scrollToTop:!0,components:{SectionHeader:n(200).default},data:function(){return{scheduleList:n(341).events,links:[{name:"Free",id:"free-training"},{name:"Premium",id:"premium-on-demand"},{name:"Instructor Led",id:"instructor-training"}],testimonialList:["I needed this class. This is the best instruction of SO and dedicated time to it that I have ever had.","One can tell they're not just instructors. They know the subject at an engineering level.","I've really been impressed by how this training event went. Outstanding job","It's very very rare that I get to be in a class with practitioners that are as awesome and knowledgeable as Security Onion Solutions.",'The labs were absolutely necessary and going through the case studies to "find evil" was the best.']}},head:function(){return{title:"Security Onion Solutions - Training"}}},o=(n(342),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:px-12"},[n("PageNav",{attrs:{"page-name":"Training",links:t.links}}),t._v(" "),n("SubHero",{staticClass:"hero-training text-center",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n      Official Training\n    ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"justify-center"},[n("div",{staticClass:"flex flex-row text-2xl justify-center"},[t._v("\n          Security Onion Solutions is the only official training provider of the Security Onion software.\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-row text-xl font-light justify-center mt-8"},[t._v("\n          Choose from On-Demand (Free and Premium) or Instructor Led training.\n        ")])])]},proxy:!0}])}),t._v(" "),n("ContentSection",{attrs:{id:"free-training",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Free On-Demand\n      ")]),t._v(" "),n("div",{staticClass:"text-center text-base xs:text-lg mb-16"},[n("p",[t._v("\n          Get started by taking the "),n("span",{staticClass:"italic"},[t._v("free")]),t._v(" "),n("span",{staticClass:"font-semibold"},[t._v("Security Onion 2 Essentials")]),t._v(" training.\n        ")]),t._v(" "),n("p",[t._v("\n          This course is a prerequisite to the premium on-demand courses.\n        ")])]),t._v(" "),n("div",{staticClass:"flex justify-center video-container"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/videoseries?list=PLljFlTO9rB155aYBjHw2InKkSMLuhWpxH",frameborder:"0",allowfullscreen:""}})])],1)]),t._v(" "),n("ContentSection",{attrs:{id:"premium-on-demand"}},[n("div",{staticClass:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Premium On-Demand\n      ")]),t._v(" "),n("div",{staticClass:"text-left text-xl"},[t._v("\n        We offer online training via on-demand training modules.\n        They are a cost-effective alternative to instructor led training, but do not include the in-depth, hands-on labs that our instructor led classes offer.\n      ")]),t._v(" "),n("div",{staticClass:"text-left text-xl mt-6"},[t._v("\n        We currently provide training for both the new Security Onion 2, and existing Security Onion 16.04.\n      ")]),t._v(" "),n("feature-left",{staticClass:"my-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion 2\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("CircleGraphic",{staticClass:"shadow-xl",attrs:{padding:!1,"file-name":"training1.jpg",size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-left"},[t._v("\n            Courses include:\n            "),n("ul",{staticClass:"list-disc ml-6 mb-6"},[n("li",{staticClass:"my-2"},[t._v("\n                Security Onion 2 in Production "),n("span",{staticClass:"bg-gray-200  text-sm text-blue-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},[n("a",{attrs:{href:"https://onlinetraining.securityonionsolutions.com/p/security-onion-in-production/"}},[t._v("\n                    Enroll\n                    "),n("fa",{attrs:{icon:"external-link-alt"}})],1)])]),t._v(" "),n("li",{staticClass:"my-2"},[t._v("\n                Developing Your Detection Playbook With Security Onion 2 "),n("span",{staticClass:"bg-gray-200 text-sm text-blue-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},[n("a",{attrs:{href:"https://onlinetraining.securityonionsolutions.com/p/developing-your-detection-playbook-with-security-onion-2/"}},[t._v("\n                    Enroll\n                    "),n("fa",{attrs:{icon:"external-link-alt"}})],1)])])])]),t._v(" "),n("div",{staticClass:"align-center hidden"},[n("action-callout",{staticClass:"my-12",attrs:{link:"https://onlinetraining.securityonionsolutions.com/"},scopedSlots:t._u([{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n                  Get Started\n                ")])]},proxy:!0}])})],1)]},proxy:!0}])}),t._v(" "),n("feature-right",{staticClass:"my-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion 16.04 (legacy)\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("CircleGraphic",{staticClass:"shadow-xl",attrs:{"file-name":"training2.jpg",padding:!1,size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-left"},[t._v("\n            Courses include:\n            "),n("ul",{staticClass:"list-disc ml-6"},[n("li",{staticClass:"my-1"},[t._v("\n                Security Onion 101: Introduction to Security Onion\n              ")]),t._v(" "),n("li",{staticClass:"my-1"},[t._v("\n                Security Onion 201: Best Practices for Production Deployments\n              ")]),t._v(" "),n("li",{staticClass:"my-1"},[t._v("\n                Security Onion 301: Best Practices for Distributed Deployments\n              ")])])]),t._v(" "),n("div",{staticClass:"text-left mt-4"},[n("strong",[t._v("Best value!")]),t._v(" Purchase all three classes in a discounted bundle and get 30 days additional access!\n          ")])]},proxy:!0}])}),t._v(" "),n("action-callout",{staticClass:"my-12",attrs:{link:"https://onlinetraining.securityonionsolutions.com/"},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",[t._v("\n            Ready to check out the course details?\n          ")])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n            Get Started\n          ")])]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"instructor-training",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Instructor Led Training\n      ")]),t._v(" "),n("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:t._u([{key:"graphic",fn:function(){return[n("CircleGraphic",{attrs:{"file-name":"live.jpg",size:20,padding:!1}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            We offer multi-day comprehensive training classes with hands-on labs and real-world case studies for reinforcement!\n            Students receive printed course materials and a Certificate of Completion ready to make their adversaries cry!\n          ")]),t._v(" "),n("action-callout",{staticClass:"my-6",attrs:{alt:!0},on:{"button-click":function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about private training classes.",source:"training_private_contact_us"})}},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",{staticClass:"text-xl"},[t._v("\n                Have at least 8 students and want private instructor-led training?\n              ")])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n                Find Out How\n              ")])]},proxy:!0}])})]},proxy:!0}])}),t._v(" "),n("DetailPara",{staticClass:"mb-16 mt-10",scopedSlots:t._u([{key:"body",fn:function(){return[t._v("\n          We are proud to offer GSA pricing through our partner IntelliGenesis!\n          Eligible organizations, please\n          "),n("span",{staticClass:"hover:text-gray-900 cursor-pointer underline",on:{click:function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about GSA pricing.",source:"GSA_pricing_info"})}}},[t._v("contact us")]),t._v("\n          for more information.\n        ")]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"public-training"}},[n("div",{staticClass:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Upcoming Instructor Led Training Events\n      ")]),t._v(" "),n("div",{staticClass:"flex justify-center"},[0!==t.scheduleList.length?n("training-table",{staticClass:"mx-2 xs:mx-12 lg:mx-24 xl:mx-32 w-full",attrs:{"schedule-list":t.scheduleList}}):t._e(),t._v(" "),0==t.scheduleList.length?n("div",{staticClass:"text-xl"},[t._v("\n          No classes are currently scheduled.\n        ")]):t._e()],1)],1)]),t._v(" "),n("ContentSection",{attrs:{id:"testimonials",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("SectionHeader",{staticClass:"mb-6"},[t._v("\n        Student Feedback\n      ")]),t._v(" "),n("client-only",[n("TestimonialList",{attrs:{list:t.testimonialList}})],1),t._v(" "),n("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("Testimonial",{scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n        "+t._s(t.testimonialList[1])+"\n        ")]},proxy:!0}])})},staticRenderFns:[]}})],1)])],1)}),[],!1,null,"7ddda9f0",null);e.default=component.exports;installComponents(component,{PageNav:n(203).default,SubHero:n(201).default,SectionHeader:n(200).default,ContentSection:n(204).default,CircleGraphic:n(241).default,ActionCallout:n(198).default,FeatureLeft:n(242).default,FeatureRight:n(211).default,DetailPara:n(195).default,TrainingTable:n(372).default,SectionHeader:n(200).default,TestimonialList:n(373).default,Testimonial:n(301).default})}}]);