/*! Icons Vue v2.0.3 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as h,openBlock as g,createElementBlock as y}from"vue";import{ref as a,onMounted as x,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"},null,-1),w=s("path",{fill:"currentColor",d:"M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"},null,-1),z=[v,w],f=_({__name:"moon-night",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:d,spin:p,width:i,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(g(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var q=c(f,[["__file","moon-night.vue"]]);export{q as default};
