/*! Icons Vue v1.1.39 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as g,createElementBlock as v}from"vue";import{ref as a,onMounted as x,watch as z}from"vue";var h=_("path",{fill:"currentColor",d:"M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"},null,-1),w=[h],s=u({__name:"comment",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:c,spin:m,width:i,fill:p}=n,d={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:c,fill:p};o.value=Object.assign({...d})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(g(),v("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var N=f(s,[["__file","comment.vue"]]);export{N as default};
