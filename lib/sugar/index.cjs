/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},w=(t,e,l,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!v.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(a=y(e,o))||a.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var B={};z(B,{default:()=>k});module.exports=x(B);var c=require("vue"),n=require("vue"),r=require("vue"),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"},null,-1),S=[E],p=(0,c.defineComponent)({__name:"sugar",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,r.ref)(null),a=(0,r.ref)({fill:"red",width:"100px"});return(0,r.watch)(e,o=>{let{size:i,color:m,spin:u,width:f,fill:_}=o,g={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:m,fill:_};a.value=Object.assign({...g})},{deep:!0,immediate:!0}),(0,r.onMounted)(()=>{}),(o,i)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(a.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var d=(t,e)=>{let l=t.__vccOpts||t;for(let[a,o]of e)l[a]=o;return l};var k=d(p,[["__file","sugar.vue"]]);
