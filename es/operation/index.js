/*! Icons Vue v1.1.37 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as y,createElementBlock as g}from"vue";import{ref as i,onMounted as x,watch as H}from"vue";var h=_("path",{fill:"currentColor",d:"M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"},null,-1),w=[h],s=m({__name:"operation",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return H(r,n=>{let{size:l,color:p,spin:c,width:a,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(y(),g("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var N=f(s,[["__file","operation.vue"]]);export{N as default};
