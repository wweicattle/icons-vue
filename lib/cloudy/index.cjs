/*! Icons Vue v2.0.1 */

"use strict";var s=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},x=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!v.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(r=g(e,o))||r.enumerable});return t};var E=t=>x(s({},"__esModule",{value:!0}),t);var B={};w(B,{default:()=>k});module.exports=E(B);var c=require("vue"),l=require("vue"),i=require("vue"),S=(0,l.createElementVNode)("path",{fill:"currentColor",d:"M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"},null,-1),z=[S],d=(0,c.defineComponent)({__name:"cloudy",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:a,color:u,spin:m,width:f,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:a||void 0,width:f||void 0,color:u,fill:_};r.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,a)=>((0,l.openBlock)(),(0,l.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,l.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[r,o]of e)n[r]=o;return n};var k=p(d,[["__file","cloudy.vue"]]);
