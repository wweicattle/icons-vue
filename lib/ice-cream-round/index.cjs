/*! Icons Vue v2.0.17 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},z=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!h.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=g(e,o))||l.enumerable});return t};var x=t=>z(s({},"__esModule",{value:!0}),t);var k={};w(k,{default:()=>S});module.exports=x(k);var f=require("vue"),r=require("vue"),a=require("vue"),E=(0,r.createElementVNode)("path",{fill:"currentColor",d:"m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"},null,-1),L=[E],d=(0,f.defineComponent)({__name:"ice-cream-round",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),l=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:p,spin:u,width:c,fill:_}=o,y={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:p,fill:_};l.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},L,4))}});var m=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var S=m(d,[["__file","ice-cream-round.vue"]]);
