/*! Icons Vue v2.0.1 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as y,createElementBlock as g}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var h=_("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"},null,-1),w=[h],s=m({__name:"video-pause",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:p,spin:d,width:i,fill:c}=n,u={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:p,fill:c};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),g("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","video-pause.vue"]]);export{M as default};
