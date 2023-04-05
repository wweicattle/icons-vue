/*! Icons Vue v1.1.39 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as y,createElementBlock as v}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var g=_("path",{fill:"currentColor",d:"M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"},null,-1),w=[g],s=u({__name:"iphone",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:p,spin:c,width:a,fill:d}=n,m={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:p,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),v("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","iphone.vue"]]);export{M as default};
