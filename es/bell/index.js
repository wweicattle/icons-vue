/*! Icons Vue v1.1.39 */

import{defineComponent as _}from"vue";import{createElementVNode as i,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as s,onMounted as E,watch as S}from"vue";var g=i("path",{fill:"currentColor",d:"M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"},null,-1),w=i("path",{fill:"currentColor",d:"M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"},null,-1),z=i("path",{fill:"currentColor",d:"M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"},null,-1),x=[g,w,z],f=_({__name:"bell",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=s(null),o=s({fill:"red",width:"100px"});return S(l,n=>{let{size:r,color:d,spin:p,width:a,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(n,r)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var q=c(f,[["__file","bell.vue"]]);export{q as default};
