/*! Icons Vue v1.1.37 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as y,createElementBlock as v}from"vue";import{ref as i,onMounted as x,watch as E}from"vue";var g=_("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"},null,-1),w=[g],s=m({__name:"refresh",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return E(r,n=>{let{size:l,color:p,spin:c,width:a,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),v("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var A=f(s,[["__file","refresh.vue"]]);export{A as default};
