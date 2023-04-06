/*! Icons Vue v2.0.7 */

import{defineComponent as _}from"vue";import{createElementVNode as i,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as s,onMounted as E,watch as S}from"vue";var v=i("path",{fill:"currentColor",d:"M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"},null,-1),w=i("path",{fill:"currentColor",d:"M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"},null,-1),x=i("path",{fill:"currentColor",d:"M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"},null,-1),z=[v,w,x],f=_({__name:"female",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return S(l,n=>{let{size:r,color:d,spin:p,width:a,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var O=c(f,[["__file","female.vue"]]);export{O as default};
