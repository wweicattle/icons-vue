/*! Icons Vue v1.1.39 */

import{defineComponent as _}from"vue";import{createElementVNode as s,normalizeStyle as y,openBlock as g,createElementBlock as h}from"vue";import{ref as i,onMounted as z,watch as E}from"vue";var v=s("path",{fill:"currentColor",d:"M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"},null,-1),w=s("path",{fill:"currentColor",d:"M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"},null,-1),x=[v,w],c=_({__name:"partly-cloudy",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let l=e,t=i(null),o=i({fill:"red",width:"100px"});return E(l,n=>{let{size:r,color:f,spin:p,width:a,fill:u}=n,m={animation:p?"loadingCircle 1s infinite linear":void 0,fontSize:r||void 0,width:a||void 0,color:f,fill:u};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),z(()=>{}),(n,r)=>(g(),h("svg",{ref_key:"svg",ref:t,style:y(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},x,4))}});var d=(e,l)=>{let t=e.__vccOpts||e;for(let[o,n]of l)t[o]=n;return t};var O=d(c,[["__file","partly-cloudy.vue"]]);export{O as default};
