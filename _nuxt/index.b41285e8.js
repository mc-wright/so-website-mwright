import{_ as D}from"./PageNav.5daa622b.js";import{_ as w}from"./SectionHeader.6a0cc052.js";import{S as F,_ as j}from"./SubHero.26791579.js";import{_ as I}from"./Graphic.6e1cdb08.js";import S from"./Icon.6aa1d489.js";import{_ as k,o as l,c as _,a as e,F as E,g as A,t as u,d as t,r as m,w as n,e as s,i as W,h as v,p as z,f as B}from"./entry.60ecb0c7.js";import{s as G}from"./sos.736040ce.js";import{A as H}from"./ActionCallout.7ba1bdb5.js";import{D as N}from"./DetailPara.386a3153.js";import{F as R}from"./FeatureLeft.9a824152.js";import{F as U}from"./FeatureRight.8a02f58a.js";import{d as V}from"./cert_domains.56d8c0ff.js";import"./config.a17e92b9.js";import"./SoButton.070759bc.js";const M={components:{},props:{scheduleList:{type:Array,default:()=>[]}},data:()=>({dateTimeOptions:{day:"numeric",year:"numeric",month:"short",hour:"numeric",minute:"numeric",timeZoneName:"short"}}),methods:{recordRegisterClick(o){this.$gtag("event","register_click",{event_category:"engagement",event_label:o.name})}}},Y={class:"mb-12"},q=["href","onClick"],Z={class:"bg-gray-200 bg-opacity-50 border rounded-md overflow-hidden"},J={class:"flex h-auto p-2 bg-gray-400 bg-opacity-25"},K={class:"font-semibold text-xl"},Q={class:"h-auto px-4 pt-2 pb-4"},X={class:"mb-4"},ee={class:"font-normal text-lg"},te={class:"mb-1 font-light"},ne={class:"mb-1 font-light"},se={class:"h-auto flex items-center justify-end bg-gray-400 bg-opacity-25 border-top border-dotted border-gray-800"},oe={class:"text-sm xs:text-xs text-so-blue xs:text-base px-4 py-2 flex items-center"},ie=e("div",{class:"mr-2 font-semibold"},"Register",-1);function ae(o,c,g,$,O,x){const h=S;return l(),_("div",Y,[e("ul",null,[(l(!0),_(E,null,A(g.scheduleList,(a,r)=>(l(),_("li",{key:r,class:"mb-6 hover:shadow-lg"},[e("a",{href:a.register_link,target:"_blank",onClick:d=>x.recordRegisterClick(a)},[e("div",Z,[e("div",J,[e("span",K,u(a.name),1)]),e("div",Q,[e("div",X,[e("span",ee,u(a.summary),1)]),e("div",te,u(new Date(a.start).toLocaleString("en-US",o.dateTimeOptions))+" - "+u(new Date(a.end).toLocaleString("en-US",o.dateTimeOptions)),1),e("div",ne,u(a.location),1)]),e("div",se,[e("div",oe,[ie,t(h,{name:"fa-solid:external-link-alt"})])])])],8,q)]))),128))])])}const re=k(M,[["render",ae]]),le=[],ce={events:le};const de={scrollToTop:!0,components:{ActionCallout:H,DetailPara:N,FeatureRight:U,FeatureLeft:R,SectionHeader:w,SubHero:F},data:()=>({sos:G,scheduleList:ce.events,domainArr:V.domains,links:[{name:"Free",id:"free-training"},{name:"Premium",id:"premium-on-demand"},{name:"Instructor Led",id:"instructor-training"},{name:"Public Courses",id:"public-training"}]}),head(){return{title:"Security Onion Solutions - Training"}}},i=o=>(z("data-v-d88554e8"),o=o(),B(),o),ue={class:"xs:px-12"},me=i(()=>e("div",{class:"justify-center"},[e("div",{class:"flex flex-row text-2xl justify-center"}," Security Onion Solutions is the only official training provider of the Security Onion software. "),e("div",{class:"flex flex-row text-xl font-light justify-center mt-8"}," Choose from On-Demand (Free and Premium) or Instructor Led training. ")],-1)),_e={class:"px-6 xs:px-12 lg:px-32"},pe=i(()=>e("div",{class:"text-center text-base xs:text-lg mb-16"},[e("p",null,[s(" Get started by taking the "),e("span",{class:"italic"},"free"),s(),e("span",{class:"font-semibold"},"Security Onion 2 Essentials"),s(" training. ")]),e("p",null," This course is a prerequisite to the premium on-demand courses. ")],-1)),he=i(()=>e("div",{class:"flex justify-center video-container"},[e("iframe",{src:"https://www.youtube.com/embed/watch?list=PLljFlTO9rB17azL-HwV4BUWUv7Egmcx3T",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1)),fe={class:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},ge=i(()=>e("div",{class:"text-left text-xl"}," We offer online training via on-demand training modules. They are a cost-effective alternative to instructor led training, but do not include the in-depth, hands-on labs that our instructor led classes offer. ",-1)),xe=i(()=>e("div",{class:"text-center xs:text-left"}," Security Onion 2.3 (2.4 is coming soon!) ",-1)),ye={class:"text-left"},be={class:"list-disc ml-6 mb-6"},ve={class:"my-2"},we={class:"bg-gray-200 text-sm text-blue-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},Se={target:"enroll",href:"https://onlinetraining.securityonionsolutions.com/p/security-onion-in-production/"},ke={class:"my-2"},$e={class:"bg-gray-200 text-sm text-blue-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},Oe={target:"enroll",href:"https://onlinetraining.securityonionsolutions.com/p/developing-your-detection-playbook-with-security-onion-2/"},Ce={class:"my-2"},Le={class:"bg-gray-200 text-sm text-blue-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},Te={target:"enroll",href:"https://onlinetraining.securityonionsolutions.com/p/practical-analysis-with-security-onion/"},Pe=i(()=>e("p",null,null,-1)),De={class:"bg-gray-200 text-sm text-blue-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},Fe={target:"enroll",href:"https://onlinetraining.securityonionsolutions.com/p/security-onion-2-three-course-bundle/"},je=i(()=>e("div",{class:"text-center md:text-left"}," Ready to check out the course details? ",-1)),Ie=i(()=>e("div",{class:"text-lg my-1"}," Get Started ",-1)),Ee={class:"px-6 xs:px-12 lg:px-32"},Ae=i(()=>e("div",{class:"text-center xs:text-left"}," We offer multi-day comprehensive training classes with hands-on labs and real-world case studies for reinforcement! Students receive printed course materials and a Certificate of Completion ready to make their adversaries cry! ",-1)),We=i(()=>e("div",{class:"text-xl"}," Have at least 8 students and want private instructor-led training? ",-1)),ze=i(()=>e("div",{class:"text-lg my-1"}," Find Out How ",-1)),Be=i(()=>e("div",{class:"text-center xs:text-left"},[e("div",{class:"my-2"}," Why choose Security Onion Solutions for training? "),e("ul",{class:"list-disc list-inside pl-1 -mr-1"},[e("li",null,"Learn directly from the creators of Security Onion."),e("li",null,"We are the only official authorized training provider."),e("li",null,"Our instructors are the only Security Onion Certified Instructors."),e("li",null,"Official, authorized training material included."),e("li",null,"We've been teaching Security Onion classes since 2014."),e("li",null,"Your purchase helps to fund development of the platform.")])],-1)),Ge={class:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},He={class:"flex justify-center"},Ne={key:1,class:"text-xl"};function Re(o,c,g,$,O,x){const h=D,a=m("SubHero"),r=w,d=j,f=I,p=S,y=m("feature-left"),b=m("action-callout"),C=m("feature-right"),L=m("DetailPara"),T=re;return l(),_("div",ue,[t(h,{"page-name":"Training",links:o.links},null,8,["links"]),t(a,{class:"hero-training text-center"},{header:n(()=>[s(" Official Training ")]),body:n(()=>[me]),_:1}),t(d,{id:"free-training",alternate:!0},{default:n(()=>[e("div",_e,[t(r,{class:"mb-6"},{default:n(()=>[s(" Free On-Demand ")]),_:1}),pe,he])]),_:1}),t(d,{id:"premium-on-demand"},{default:n(()=>[e("div",fe,[t(r,{class:"mb-6"},{default:n(()=>[s(" Premium On-Demand ")]),_:1}),ge,t(y,{class:"my-12"},{header:n(()=>[xe]),graphic:n(()=>[t(f,{class:"shadow-xl",padding:!1,"file-name":"training1.jpg",size:20})]),body:n(()=>[e("div",ye,[s(" Courses include: "),e("ul",be,[e("li",ve,[s(" Security Onion 2 in Production "),e("span",we,[e("a",Se,[s(" Enroll "),t(p,{name:"fa-solid:external-link-alt"})])])]),e("li",ke,[s(" Developing Your Detection Playbook With Security Onion 2 "),e("span",$e,[e("a",Oe,[s(" Enroll "),t(p,{name:"fa-solid:external-link-alt"})])])]),e("li",Ce,[s(" Practical Analysis with Security Onion 2 "),e("span",Le,[e("a",Te,[s(" Enroll "),t(p,{name:"fa-solid:external-link-alt"})])])])]),Pe,s(" Save over 15% by enrolling in the three course bundle "),e("span",De,[e("a",Fe,[s(" Enroll "),t(p,{name:"fa-solid:external-link-alt"})])])])]),_:1}),t(b,{class:"my-12",link:"https://onlinetraining.securityonionsolutions.com/"},{info:n(()=>[je]),"button-text":n(()=>[Ie]),_:1})])]),_:1}),t(d,{id:"instructor-training",alternate:!0},{default:n(()=>[e("div",Ee,[t(r,{class:"mb-6"},{default:n(()=>[s(" Instructor Led Training ")]),_:1}),t(C,{class:"xs:mb-12","text-margin":!0},{graphic:n(()=>[t(f,{"file-name":"live.jpg",size:20,padding:!1})]),body:n(()=>[Ae,t(b,{alternate:!0,class:"my-6",onButtonClick:c[0]||(c[0]=P=>o.sos.showContactModal({text:"Please contact me with more information about private training classes.",source:"training_private_contact_us"}))},{info:n(()=>[We]),"button-text":n(()=>[ze]),_:1})]),_:1}),t(y,{class:"xs:mb-12","text-margin":!0},{graphic:n(()=>[t(f,{"file-name":"bryant.jpg",size:20,padding:!1})]),body:n(()=>[Be]),_:1}),t(L,{class:"mb-16 mt-10"},{body:n(()=>[s(" We are proud to offer GSA pricing through our partner IntelliGenesis! Eligible organizations, please "),e("span",{class:"hover:text-gray-900 cursor-pointer underline",onClick:c[1]||(c[1]=P=>o.sos.showContactModal({text:"Please contact me with more information about GSA pricing on live training classes.",source:"GSA_pricing_info"}))},"contact us"),s(" for more information. ")]),_:1})])]),_:1}),t(d,{id:"public-training"},{default:n(()=>[e("div",Ge,[t(r,{class:"mb-6"},{default:n(()=>[s(" Upcoming Instructor Led Training Events ")]),_:1}),e("div",He,[o.scheduleList.length!==0?(l(),W(T,{key:0,class:"mx-2 xs:mx-12 lg:mx-24 xl:mx-32 w-full","schedule-list":o.scheduleList},null,8,["schedule-list"])):v("",!0),o.scheduleList.length==0?(l(),_("div",Ne," No classes are currently scheduled. ")):v("",!0)])])]),_:1})])}const ot=k(de,[["render",Re],["__scopeId","data-v-d88554e8"]]);export{ot as default};
