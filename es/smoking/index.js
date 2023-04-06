/*! Icons Vue v2.0.3 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as h,openBlock as v,createElementBlock as g}from"vue";import{ref as a,onMounted as x,watch as k}from"vue";var y=s("path",{fill:"currentColor",d:"M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"},null,-1),z=s("path",{fill:"currentColor",d:"M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"},null,-1),w=[y,z],f=_({__name:"smoking",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return k(l,n=>{let{size:r,color:d,spin:p,width:i,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(v(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=c(f,[["__file","smoking.vue"]]);export{N as default};
