/*! Icons Vue v2.0.1 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as v,openBlock as h,createElementBlock as g}from"vue";import{ref as a,onMounted as w,watch as x}from"vue";var y=_("path",{fill:"currentColor",d:"M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"},null,-1),z=[y],s=u({__name:"magic-stick",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=a(null),o=a({fill:"red",width:"100px"});return x(l,n=>{let{size:r,color:f,spin:p,width:i,fill:d}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:i||void 0,color:f,fill:d};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(n,r)=>(h(),g("svg",{ref_key:"svg",ref:t,style:v(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var c=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var L=c(s,[["__file","magic-stick.vue"]]);export{L as default};
