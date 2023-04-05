/*! Icons Vue v1.1.37 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as v,createElementBlock as g}from"vue";import{ref as a,onMounted as w,watch as x}from"vue";var y=_("path",{fill:"currentColor",d:"M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"},null,-1),z=[y],s=u({__name:"no-smoking",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return x(l,n=>{let{size:r,color:p,spin:c,width:i,fill:d}=n,m={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:p,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(n,r)=>(v(),g("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var V=f(s,[["__file","no-smoking.vue"]]);export{V as default};
