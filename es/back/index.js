/*! Icons Vue v2.0.1 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as y,openBlock as g,createElementBlock as h}from"vue";import{ref as i,onMounted as k,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"},null,-1),w=s("path",{fill:"currentColor",d:"m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"},null,-1),x=[v,w],c=_({__name:"back",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:d,spin:p,width:a,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:d,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),k(()=>{}),(n,r)=>(g(),h("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var O=f(c,[["__file","back.vue"]]);export{O as default};
