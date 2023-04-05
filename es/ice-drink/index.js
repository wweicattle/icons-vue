/*! Icons Vue v1.1.37 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as y,createElementBlock as v}from"vue";import{ref as a,onMounted as w,watch as x}from"vue";var g=_("path",{fill:"currentColor",d:"M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"},null,-1),z=[g],s=u({__name:"ice-drink",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return x(l,n=>{let{size:r,color:c,spin:d,width:i,fill:p}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:c,fill:p};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(n,r)=>(y(),v("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var C=f(s,[["__file","ice-drink.vue"]]);export{C as default};
