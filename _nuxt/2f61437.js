(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{369:function(t,e,n){"use strict";n.r(e);n(21);var r={components:{},props:{scheduleList:{type:Array,default:function(){return[]}}},data:function(){return{dateTimeOptions:{day:"numeric",year:"numeric",month:"short",hour:"numeric",minute:"numeric",timeZoneName:"short"}}},methods:{recordRegisterClick:function(t){this.$gtag("event","register_click",{event_category:"engagement",event_label:t.name})}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-12"},[n("ul",t._l(t.scheduleList,(function(e,r){return n("li",{key:r,staticClass:"mb-6 hover:shadow-lg"},[n("a",{attrs:{href:e.register_link,target:"_blank"},on:{click:function(n){return t.recordRegisterClick(e)}}},[n("div",{staticClass:"bg-gray-200 bg-opacity-50 border rounded-md overflow-hidden"},[n("div",{staticClass:"flex h-auto p-2 bg-gray-400 bg-opacity-25"},[n("span",{staticClass:"font-semibold text-xl"},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"h-auto px-4 pt-2 pb-4"},[n("div",{staticClass:"mb-4"},[n("span",{staticClass:"font-normal text-lg"},[t._v(t._s(e.summary))])]),t._v(" "),n("div",{staticClass:"mb-1 font-light"},[t._v("\n              "+t._s(new Date(e.start).toLocaleString("en-US",t.dateTimeOptions))+" - "+t._s(new Date(e.end).toLocaleString("en-US",t.dateTimeOptions))+"\n            ")]),t._v(" "),n("div",{staticClass:"mb-1 font-light"},[t._v("\n              "+t._s(e.location)+"\n            ")])]),t._v(" "),n("div",{staticClass:"h-auto flex items-center justify-end bg-gray-400 bg-opacity-25 border-top border-dotted border-gray-800"},[n("div",{staticClass:"text-sm xs:text-xs text-so-blue xs:text-base px-4 py-2 flex items-center"},[n("div",{staticClass:"mr-2 font-semibold"},[t._v("Register")]),t._v(" "),n("fa",{attrs:{icon:["fas","external-link-alt"]}})],1)])])])])})),0)])}),[],!1,null,"c2d72c62",null);e.default=component.exports}}]);