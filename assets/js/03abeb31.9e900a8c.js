"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,f=p["".concat(u,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Debugging"},u=void 0,c={unversionedId:"debugging",id:"debugging",title:"Debugging",description:"Use the debug for debugging. The CLI uses this module for all of its debugging. If you set the environment variable DEBUG=* it will print all the debug output to the screen.",source:"@site/../docs/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/debugging",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/debugging.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691073347,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Debugging"},sidebar:"docs",previous:{title:"Notifications",permalink:"/docs/notifications"},next:{title:"Flexible Taxonomy",permalink:"/docs/flexible_taxonomy"}},s={},p=[],d={toc:p},g="wrapper";function f(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)(g,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/debug"},"debug")," for debugging. The CLI uses this module for all of its debugging. If you set the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG=*")," it will print all the debug output to the screen."),(0,i.kt)("p",null,"Depending on your shell you may need to escape this with ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG=\\*"),". On Windows you can't set environment variables in line, so you'll need to run ",(0,i.kt)("inlineCode",{parentName:"p"},"set DEBUG=*")," before running the command."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"debug demo",src:n(4924).Z,width:"2658",height:"1250"})))}f.isMDXComponent=!0},4924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug_demo-efc07abda59d2b82da3fc695b96596c8.png"}}]);