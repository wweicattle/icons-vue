/*! Icons Vue v2.0.1 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as g,openBlock as h,createElementBlock as y}from"vue";import{ref as a,onMounted as E,watch as S}from"vue";var v=s("path",{fill:"currentColor",d:"M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"},null,-1),w=s("path",{fill:"currentColor",d:"M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"},null,-1),x=[v,w],f=_({__name:"bottom-right",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return S(l,n=>{let{size:r,color:d,spin:p,width:i,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(n,r)=>(h(),y("svg",{ref_key:"svg",ref:t,style:g(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=c(f,[["__file","bottom-right.vue"]]);export{N as default};
