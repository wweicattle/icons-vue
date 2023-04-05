/*! Icons Vue v1.1.38 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as v,createElementBlock as g}from"vue";import{ref as a,onMounted as w,watch as z}from"vue";var h=_("path",{fill:"currentColor",d:"M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"},null,-1),x=[h],s=u({__name:"expand",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:p,spin:d,width:i,fill:c}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:p,fill:c};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(n,l)=>(v(),g("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","expand.vue"]]);export{M as default};
