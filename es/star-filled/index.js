/*! Icons Vue v1.1.37 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as g,createElementBlock as v}from"vue";import{ref as a,onMounted as x,watch as E}from"vue";var h=_("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"},null,-1),w=[h],s=m({__name:"star-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let n=e,t=a(null),o=a({fill:"red",width:"100px"});return E(n,l=>{let{size:r,color:d,spin:p,width:i,fill:c}=l,u={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:d,fill:c};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(l,r)=>(g(),v("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,n)=>{let t=e.__vccOpts||e;for(let[o,l]of n)t[o]=l;return t};var N=f(s,[["__file","star-filled.vue"]]);export{N as default};
