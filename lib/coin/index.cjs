/*! Icons Vue v1.1.37 */

"use strict";var c=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var v=(t,e)=>{for(var l in e)c(t,l,{get:e[l],enumerable:!0})},C=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of g(e))!S.call(t,o)&&o!==l&&c(t,o,{get:()=>e[o],enumerable:!(r=h(e,o))||r.enumerable});return t};var w=t=>C(c({},"__esModule",{value:!0}),t);var M={};v(M,{default:()=>B});module.exports=w(M);var f=require("vue"),n=require("vue"),i=require("vue"),x=(0,n.createElementVNode)("path",{fill:"currentColor",d:"m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"},null,-1),z=(0,n.createElementVNode)("path",{fill:"currentColor",d:"m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"},null,-1),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"},null,-1),k=[x,z,E],d=(0,f.defineComponent)({__name:"coin",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,i.ref)(null),r=(0,i.ref)({fill:"red",width:"100px"});return(0,i.watch)(e,o=>{let{size:s,color:u,spin:m,width:a,fill:_}=o,y={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:s||void 0,width:a||void 0,color:u,fill:_};r.value=Object.assign({...y})},{deep:!0,immediate:!0}),(0,i.onMounted)(()=>{}),(o,s)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},k,4))}});var p=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var B=p(d,[["__file","coin.vue"]]);
