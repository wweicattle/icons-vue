/*! Icons Vue v2.0.3 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as g,openBlock as h,createElementBlock as y}from"vue";import{ref as i,onMounted as z,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"},null,-1),w=s("path",{fill:"currentColor",d:"M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"},null,-1),x=[v,w],f=_({__name:"message",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:d,spin:p,width:a,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(n,r)=>(h(),y("svg",{ref_key:"svg",ref:t,style:g(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var L=c(f,[["__file","message.vue"]]);export{L as default};
