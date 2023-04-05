/*! Icons Vue v2.0.1 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as h,openBlock as y,createElementBlock as v}from"vue";import{ref as a,onMounted as z,watch as S}from"vue";var g=s("path",{fill:"currentColor",d:"M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"},null,-1),w=s("path",{fill:"currentColor",d:"M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"},null,-1),x=[g,w],c=_({__name:"toilet-paper",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return S(l,n=>{let{size:r,color:f,spin:d,width:i,fill:u}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:f,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(n,r)=>(y(),v("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var p=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var N=p(c,[["__file","toilet-paper.vue"]]);export{N as default};
