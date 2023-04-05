/*! Icons Vue v2.0.1 */

import{defineComponent as m}from"vue";import{createElementVNode as i,normalizeStyle as h,openBlock as y,createElementBlock as g}from"vue";import{ref as s,onMounted as C,watch as E}from"vue";var v=i("path",{fill:"currentColor",d:"M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),w=i("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),x=i("path",{fill:"currentColor",d:"M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"},null,-1),z=[v,w,x],c=m({__name:"delete-location",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:f,spin:p,width:a,fill:u}=n,_={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:f,fill:u};o.value=Object.assign({..._})},{deep:!0,immediate:!0}),C(()=>{}),(n,r)=>(y(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var d=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var O=d(c,[["__file","delete-location.vue"]]);export{O as default};
