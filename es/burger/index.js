/*! Icons Vue v2.0.17 */

import{defineComponent as m}from"vue";import{createElementVNode as _,normalizeStyle as g,openBlock as v,createElementBlock as y}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var h=_("path",{fill:"currentColor",d:"M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"},null,-1),w=[h],s=m({__name:"burger",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return z(r,n=>{let{size:l,color:p,spin:c,width:a,fill:d}=n,u={animation:c?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:p,fill:d};o.value=Object.assign({...u})},{deep:!0,immediate:!0}),x(()=>{}),(n,l)=>(v(),y("svg",{ref_key:"svg",ref:t,style:g(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var b=f(s,[["__file","burger.vue"]]);export{b as default};
