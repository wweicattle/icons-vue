/*! Icons Vue v1.1.37 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as g,createElementBlock as h}from"vue";import{ref as a,onMounted as x,watch as E}from"vue";var v=_("path",{fill:"currentColor",d:"M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"},null,-1),w=[v],s=m({__name:"mostly-cloudy",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:c,spin:d,width:i,fill:p}=n,u={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:c,fill:p};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(g(),h("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=f(s,[["__file","mostly-cloudy.vue"]]);export{N as default};
