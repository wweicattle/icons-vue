/*! Icons Vue v1.1.37 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as y,openBlock as h,createElementBlock as g}from"vue";import{ref as a,onMounted as E,watch as S}from"vue";var v=s("path",{fill:"currentColor",d:"M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"},null,-1),w=s("path",{fill:"currentColor",d:"M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"},null,-1),x=[v,w],c=_({__name:"crop",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return S(r,n=>{let{size:l,color:p,spin:d,width:i,fill:u}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:p,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(n,l)=>(h(),g("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var N=f(c,[["__file","crop.vue"]]);export{N as default};
