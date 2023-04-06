/*! Icons Vue v2.0.3 */

import{defineComponent as u}from"vue";import{createElementVNode as h,normalizeStyle as _,openBlock as v,createElementBlock as z}from"vue";import{ref as a,onMounted as w,watch as x}from"vue";var g=h("path",{fill:"currentColor",d:"m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"},null,-1),y=[g],s=u({__name:"drizzling",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=a(null),o=a({fill:"red",width:"100px"});return x(r,n=>{let{size:l,color:d,spin:c,width:i,fill:p}=n,m={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:i||void 0,color:d,fill:p};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(n,l)=>(v(),z("svg",{ref_key:"svg",ref:t,style:_(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},y,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var N=f(s,[["__file","drizzling.vue"]]);export{N as default};
