/*! Icons Vue v1.1.39 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as h,createElementBlock as y}from"vue";import{ref as a,onMounted as w,watch as x}from"vue";var g=_("path",{fill:"currentColor",d:"M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"},null,-1),z=[g],s=u({__name:"document",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return x(r,n=>{let{size:l,color:c,spin:d,width:i,fill:m}=n,p={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:c,fill:m};o.value=Object.assign({...p})},{deep:!0,immediate:!0}),w(()=>{}),(n,l)=>(h(),y("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var M=f(s,[["__file","document.vue"]]);export{M as default};
