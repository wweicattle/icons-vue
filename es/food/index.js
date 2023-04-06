/*! Icons Vue v2.0.3 */

import{defineComponent as u}from"vue";import{createElementVNode as _,normalizeStyle as h,openBlock as y,createElementBlock as v}from"vue";import{ref as i,onMounted as w,watch as x}from"vue";var g=_("path",{fill:"currentColor",d:"M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"},null,-1),z=[g],s=u({__name:"food",props:{size:{type:String,default:""},width:{type:String,default:""},color:{type:String,defualt:""},spin:{type:Boolean,default:!1},fill:{type:String,default:""}},setup(e){let r=e,t=i(null),o=i({fill:"red",width:"100px"});return x(r,n=>{let{size:l,color:c,spin:d,width:a,fill:p}=n,m={animation:d?"loadingCircle 1s infinite linear":void 0,fontSize:l||void 0,width:a||void 0,color:c,fill:p};o.value=Object.assign({...m})},{deep:!0,immediate:!0}),w(()=>{}),(n,l)=>(y(),v("svg",{ref_key:"svg",ref:t,style:h(o.value),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z,4))}});var f=(e,r)=>{let t=e.__vccOpts||e;for(let[o,n]of r)t[o]=n;return t};var H=f(s,[["__file","food.vue"]]);export{H as default};
