import{C as p,_ as m,s as u,o as f,c as x,a as e,D as l,E as r,p as b,G as _,B as h,x as y,y as g,v as i}from"./entry.9131387d.js";const v=p(),w={props:{text:{type:String,default:""},source:{type:String,default:""}},data(){return{oid:"00D1U000000DI9i",lead_source:"Website",first_name:"",last_name:"",email:"",company:"",description:this.text,captchaPassed:!1,sitekey:v.sitekey,t:"",captchaSettings:""}},computed:{retUrl(){return typeof window>"u"?"":window.location.origin+"/thank_you"}},beforeMount(){this.captchaSettings={keyname:"reCAPTCHA",fallback:"true",orgId:"00D1U000000DI9i",ts:""}},mounted(){this.t=setInterval(this.timestamp,500)},beforeDestroy(){clearInterval(this.t)},methods:{buttonEnabled(){var n=this.captchaPassed&&this.first_name!==""&&this.last_name!==""&&this.company!==""&&this.email!==""&&this.description!=="";return n},recordSubmit(){this.$gtag("event","contact_form_submit",{event_category:"engagement",event_label:window.location.pathname+", "+this.source})},timestamp(){const n=document.getElementById("g-recaptcha-response");(n==null||n!==void 0&&n.value.trim()==="")&&(this.captchaSettings.ts=JSON.stringify(new Date().getTime()))}}},a=n=>(y("data-v-2caeba7c"),n=n(),g(),n),k={id:"contact_form",class:"bg-white rounded-lg pt-2 form-wrapper flex flex-col items-center"},S=a(()=>e("div",{class:"text-2xl xs:text-3xl"}," Contact Us ",-1)),U=a(()=>e("div",{class:"flex text-center px-2 xs:px-0 xs:w-2/3 justify-center my-4"},[e("p",null,[i(" Looking for free support of Security Onion or reporting an issue? "),e("span",{class:"text-so-blue cursor-pointer"},[e("a",{href:"https://securityonion.net/discuss"},"Click here")]),i(". ")])],-1)),V={id:"contact_form",action:"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST",class:"flex flex-col items-center px-2 xs:px-10 pt-3 xs:pt-2 pb-5 mb-4 w-full"},C={class:"block w-full"},D=["value"],I=a(()=>e("input",{type:"hidden",name:"oid",value:"00D1U000000DI9i"},null,-1)),E={class:"flex flex-row"},N={class:"w-1/2 block mr-3"},P=a(()=>e("label",{for:"first_name",class:"block text-gray-800 text-sm font-bold mb-2"},[i("First Name"),e("span",{class:"text-red-500"}," *")],-1)),T={class:"w-1/2 block"},z=a(()=>e("label",{for:"last_name",class:"block text-gray-800 text-sm font-bold mb-2"},[i("Last Name"),e("span",{class:"text-red-500"}," *")],-1)),B=a(()=>e("label",{for:"email",class:"block text-gray-800 text-sm font-bold mb-2"},[i("Email"),e("span",{class:"text-red-500"}," *")],-1)),R=a(()=>e("label",{for:"company",class:"block text-gray-800 text-sm font-bold mb-2"},[i("Company"),e("span",{class:"text-red-500"}," *")],-1)),L=a(()=>e("label",{for:"description",class:"block text-gray-800 text-sm font-bold mb-2"},[i("Description"),e("span",{class:"text-red-500"}," *")],-1)),M=a(()=>e("div",{class:"block text-red-500 text-sm font-bold mb-4 mt-1 ml-auto"}," * Required ",-1)),O=a(()=>e("option",{value:"Website"}," Website ",-1)),W=[O],F=["disabled"];function A(n,t,J,j,s,d){const c=u("VueRecaptcha");return f(),x("div",k,[S,U,e("form",V,[e("div",C,[e("input",{type:"hidden",name:"captcha_settings",value:JSON.stringify(s.captchaSettings)},null,8,D),I,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>d.retUrl=o),type:"hidden",name:"retURL"},null,512),[[r,d.retUrl]]),e("div",E,[e("div",N,[P,l(e("input",{id:"first_name","onUpdate:modelValue":t[1]||(t[1]=o=>s.first_name=o),class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2",maxlength:"40",name:"first_name",size:"20",type:"text"},null,512),[[r,s.first_name]])]),e("div",T,[z,l(e("input",{id:"last_name","onUpdate:modelValue":t[2]||(t[2]=o=>s.last_name=o),class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2",maxlength:"80",name:"last_name",size:"20",type:"text"},null,512),[[r,s.last_name]])])]),B,l(e("input",{id:"email","onUpdate:modelValue":t[3]||(t[3]=o=>s.email=o),class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2",maxlength:"80",name:"email",size:"20",type:"text"},null,512),[[r,s.email]]),R,l(e("input",{id:"company","onUpdate:modelValue":t[4]||(t[4]=o=>s.company=o),class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2",maxlength:"40",name:"company",size:"20",type:"text"},null,512),[[r,s.company]]),L,l(e("textarea",{"onUpdate:modelValue":t[5]||(t[5]=o=>s.description=o),name:"description",placeholder:"...",rows:"5",class:"shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base"},null,512),[[r,s.description]])]),M,b(c,{sitekey:s.sitekey,class:"mb-4",onVerify:t[6]||(t[6]=o=>s.captchaPassed=!0),onError:t[7]||(t[7]=o=>s.captchaPassed=!1),onExpired:t[8]||(t[8]=o=>s.captchaPassed=!1)},null,8,["sitekey"]),l(e("select",{id:"lead_source","onUpdate:modelValue":t[9]||(t[9]=o=>s.lead_source=o),class:"hidden",name:"lead_source"},W,512),[[_,s.lead_source]]),e("button",{id:"form_submit",class:h([d.buttonEnabled()?"enabled":"disabled"]),disabled:!d.buttonEnabled(),type:"submit",onClick:t[10]||(t[10]=o=>d.recordSubmit())}," Send Message ",10,F)])])}const G=m(w,[["render",A],["__scopeId","data-v-2caeba7c"]]);export{G as default};
