/*! Icons Vue v2.0.3 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},x=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!h.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(r=g(e,o))||r.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>z});module.exports=E(B);var d=require("vue"),n=require("vue"),i=require("vue"),S=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"},null,-1),k=[S],p=(0,d.defineComponent)({__name:"star-filled",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var c=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var z=c(p,[["__file","star-filled.vue"]]);
