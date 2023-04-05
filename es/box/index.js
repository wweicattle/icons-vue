/*! Icons Vue v1.1.37 */

import{defineComponent as _}from"vue";import{createElementVNode as i,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as s,onMounted as V,watch as E}from"vue";var v=i("path",{fill:"currentColor",d:"M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"},null,-1),x=i("path",{fill:"currentColor",d:"M64 320h896v64H64z"},null,-1),w=i("path",{fill:"currentColor",d:"M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"},null,-1),z=[v,x,w],f=_({__name:"box",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:d,spin:p,width:a,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),V(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var b=c(f,[["__file","box.vue"]]);export{b as default};
