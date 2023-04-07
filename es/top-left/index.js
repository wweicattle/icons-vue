/*! Icons Vue v2.0.17 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as y,openBlock as g,createElementBlock as h}from"vue";import{ref as a,onMounted as E,watch as S}from"vue";var v=s("path",{fill:"currentColor",d:"M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"},null,-1),w=s("path",{fill:"currentColor",d:"M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"},null,-1),x=[v,w],f=_({__name:"top-left",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return S(l,n=>{let{size:r,color:c,spin:d,width:i,fill:u}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:c,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(n,r)=>(g(),h("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var p=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var O=p(f,[["__file","top-left.vue"]]);export{O as default};
