/*! Icons Vue v2.0.1 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as h,createElementBlock as g}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var v=_("path",{fill:"currentColor",d:"M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"},null,-1),w=[v],s=m({__name:"wallet-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=a(null),o=a({fill:"red",width:"100px"});return z(n,l=>{let{size:r,color:d,spin:p,width:i,fill:c}=l,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:c};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(l,r)=>(h(),g("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,n)=>{let t=e.__vccOpts||e;for(let[o,l]of n)t[o]=l;return t};var M=f(s,[["__file","wallet-filled.vue"]]);export{M as default};
