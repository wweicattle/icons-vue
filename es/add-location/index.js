/*! Icons Vue v1.1.39 */

import{defineComponent as m}from"vue";import{createElementVNode as a,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as s,onMounted as C,watch as E}from"vue";var g=a("path",{fill:"currentColor",d:"M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),w=a("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),x=a("path",{fill:"currentColor",d:"M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"},null,-1),z=[g,w,x],c=m({__name:"add-location",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:f,spin:p,width:i,fill:u}=n,_={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:f,fill:u};o.value=Object.assign({..._})},{deep:!0,immediate:!0}),C(()=>{}),(n,r)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var d=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var V=d(c,[["__file","add-location.vue"]]);export{V as default};
