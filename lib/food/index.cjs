/*! Icons Vue v2.0.7 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},w=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of v(e))!g.call(t,o)&&o!==n&&s(t,o,{get:()=>e[o],enumerable:!(l=y(e,o))||l.enumerable});return t};var x=t=>w(s({},"__esModule",{value:!0}),t);var B={};z(B,{default:()=>k});module.exports=x(B);var c=require("vue"),r=require("vue"),a=require("vue"),E=(0,r.createElementVNode)("path",{fill:"currentColor",d:"M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"},null,-1),S=[E],d=(0,c.defineComponent)({__name:"food",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,n=(0,a.ref)(null),l=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:m,spin:u,width:f,fill:_}=o,h={animation:u?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:f||void 0,color:m,fill:_};l.value=Object.assign({...h})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,r.openBlock)(),(0,r.createElementBlock)("svg",{ref_key:"svg",ref:n,style:(0,r.normalizeStyle)(l.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var p=(t,e)=>{let n=t.__vccOpts||t;for(let[l,o]of e)n[l]=o;return n};var k=p(d,[["__file","food.vue"]]);
