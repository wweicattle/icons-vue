/*! Icons Vue v2.0.7 */

"use strict";var s=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var l in e)s(t,l,{get:e[l],enumerable:!0})},x=(t,e,l,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of h(e))!v.call(t,o)&&o!==l&&s(t,o,{get:()=>e[o],enumerable:!(r=y(e,o))||r.enumerable});return t};var z=t=>x(s({},"__esModule",{value:!0}),t);var k={};w(k,{default:()=>C});module.exports=z(k);var f=require("vue"),n=require("vue"),a=require("vue"),E=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"},null,-1),S=[E],u=(0,f.defineComponent)({__name:"goblet-square-full",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(t){let e=t,l=(0,a.ref)(null),r=(0,a.ref)({fill:"red",width:"100px"});return(0,a.watch)(e,o=>{let{size:i,color:d,spin:m,width:c,fill:_}=o,g={animation:m?"loadingCircle 1s infinite linear":void 0,fontSize:i||void 0,width:c||void 0,color:d,fill:_};r.value=Object.assign({...g})},{deep:!0,immediate:!0}),(0,a.onMounted)(()=>{}),(o,i)=>((0,n.openBlock)(),(0,n.createElementBlock)("svg",{ref_key:"svg",ref:l,style:(0,n.normalizeStyle)(r.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},S,4))}});var p=(t,e)=>{let l=t.__vccOpts||t;for(let[r,o]of e)l[r]=o;return l};var C=p(u,[["__file","goblet-square-full.vue"]]);
