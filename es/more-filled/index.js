/*! Icons Vue v2.0.3 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as g,createElementBlock as v}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var h=_("path",{fill:"currentColor",d:"M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"},null,-1),w=[h],s=u({__name:"more-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return z(l,n=>{let{size:r,color:d,spin:p,width:i,fill:c}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:c};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(g(),v("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var O=f(s,[["__file","more-filled.vue"]]);export{O as default};
