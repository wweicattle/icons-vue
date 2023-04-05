/*! Icons Vue v1.1.37 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as a,onMounted as z,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"},null,-1),w=s("path",{fill:"currentColor",d:"M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"},null,-1),x=[v,w],c=_({__name:"pie-chart",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return E(r,n=>{let{size:l,color:p,spin:d,width:i,fill:u}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:p,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(n,l)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var N=f(c,[["__file","pie-chart.vue"]]);export{N as default};
