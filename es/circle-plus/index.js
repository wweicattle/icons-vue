/*! Icons Vue v1.1.39 */

import{defineComponent as _}from"vue";import{createElementVNode as i,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as s,onMounted as E,watch as S}from"vue";var v=i("path",{fill:"currentColor",d:"M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"},null,-1),w=i("path",{fill:"currentColor",d:"M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"},null,-1),x=i("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),z=[v,w,x],c=_({__name:"circle-plus",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return S(l,n=>{let{size:r,color:p,spin:d,width:a,fill:u}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:p,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var b=f(c,[["__file","circle-plus.vue"]]);export{b as default};
