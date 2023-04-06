/*! Icons Vue v2.0.7 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as y,openBlock as g,createElementBlock as v}from"vue";import{ref as i,onMounted as x,watch as z}from"vue";var h=_("path",{fill:"currentColor",d:"M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"},null,-1),w=[h],s=u({__name:"camera-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return z(l,n=>{let{size:r,color:c,spin:d,width:a,fill:p}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:c,fill:p};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),x(()=>{}),(n,r)=>(g(),v("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},w,4))}});var f=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var M=f(s,[["__file","camera-filled.vue"]]);export{M as default};
