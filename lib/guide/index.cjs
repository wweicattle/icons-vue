/*! Icons Vue v1.1.38 */

"use strict";var s=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!y.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=v(e,o))||r.enumerable});return t};var V=t=>w(s({},"__esModule",{value:!0}),t);var k={};z(k,{default:()=>S});module.exports=V(k);var f=require("vue"),l=require("vue"),a=require("vue"),x=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"},null,-1),E=(0,l.createElementVNode)("path",{fill:"currentColor",d:"m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"},null,-1),H=[x,E],c=(0,f.defineComponent)({__name:"guide",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),r=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:u,spin:m,width:d,fill:h}=o,_={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:d||void 0,color:u,fill:h};r.value=Object.assign({..._})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},H,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var S=p(c,[["__file","guide.vue"]]);
