/*! Icons Vue v2.0.17 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as y,createElementBlock as h}from"vue";import{ref as a,onMounted as x,watch as E}from"vue";var g=_("path",{fill:"currentColor",d:"M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"},null,-1),w=[g],s=m({__name:"platform",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return E(r,n=>{let{size:l,color:p,spin:c,width:i,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),h("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var H=f(s,[["__file","platform.vue"]]);export{H as default};
