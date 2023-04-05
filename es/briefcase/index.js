/*! Icons Vue v1.1.37 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var g=_("path",{fill:"currentColor",d:"M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"},null,-1),w=[g],s=m({__name:"briefcase",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:c,spin:p,width:i,fill:d}=n,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:c,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var H=f(s,[["__file","briefcase.vue"]]);export{H as default};
