/*! Icons Vue v1.1.41 */

import*as icons from"./component";const instal={install:(app,{prefix=""}={})=>{for(const[key,component]of Object.entries(icons))app.component(prefix+key,component);return app},icons};var src_default=instal;export*from"./component";export{src_default as default};
