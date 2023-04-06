/*! Icons Vue v2.0.3 */

import{defineComponent as _}from"vue";import{createElementVNode as l,normalizeStyle as h,openBlock as v,createElementBlock as y}from"vue";import{ref as s,onMounted as E,watch as S}from"vue";var g=l("path",{fill:"currentColor",d:"M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"},null,-1),z=l("path",{fill:"currentColor",d:"M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"},null,-1),w=l("path",{fill:"currentColor",d:"M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),x=l("path",{fill:"currentColor",d:"M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"},null,-1),C=[g,z,w,x],c=_({__name:"present",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=s(null),o=s({fill:"red",width:"100px"});return S(r,n=>{let{size:i,color:f,spin:p,width:a,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:a||void 0,color:f,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),E(()=>{}),(n,i)=>(v(),y("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},C,4))}});var d=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var O=d(c,[["__file","present.vue"]]);export{O as default};
