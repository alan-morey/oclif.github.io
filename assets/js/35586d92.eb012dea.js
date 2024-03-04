"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"Plugin Loading"},p=void 0,s={unversionedId:"plugin_loading",id:"plugin_loading",title:"Plugin Loading",description:"Below is a diagram that outlines how a plugin is loaded into the CLI.",source:"@site/../docs/plugin_loading.md",sourceDirName:".",slug:"/plugin_loading",permalink:"/docs/plugin_loading",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/plugin_loading.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1709583362,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{title:"Plugin Loading"},sidebar:"docs",previous:{title:"Command Execution",permalink:"/docs/command_execution"},next:{title:"Command Discovery Strategies",permalink:"/docs/command_discovery_strategies"}},d={},u=[{value:"Plugin Resolution Order",id:"plugin-resolution-order",level:3},{value:"Manifests Improve Performance",id:"manifests-improve-performance",level:3},{value:"Plugin Loading Diagram",id:"plugin-loading-diagram",level:2}],c={toc:u},m="wrapper";function g(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below is a diagram that outlines how a plugin is loaded into the CLI."),(0,o.kt)("p",null,"There are a couple of important takeaways from this diagram:"),(0,o.kt)("h3",{id:"plugin-resolution-order"},"Plugin Resolution Order"),(0,o.kt)("p",null,"Plugins are resolved in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User plugins (i.e. plugins installed by the users)"),(0,o.kt)("li",{parentName:"ol"},"Dev plugins (i.e. plugins listed under ",(0,o.kt)("inlineCode",{parentName:"li"},"devPlugins"),")"),(0,o.kt)("li",{parentName:"ol"},"Core plugins (i.e. plugins listed under ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins"),")")),(0,o.kt)("h3",{id:"manifests-improve-performance"},"Manifests Improve Performance"),(0,o.kt)("p",null,"When loading a plugin, oclif needs to require each command file in order to get the static properties of the command - the ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"examples"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"flags"),", etc..."),(0,o.kt)("p",null,"However, oclif can skip this step if the plugin has an ",(0,o.kt)("inlineCode",{parentName:"p"},"oclif.manifest.json")," (generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"oclif manifest"),"). The manifest caches all of these properties so that there's no need to require every single command on every command execution."),(0,o.kt)("h2",{id:"plugin-loading-diagram"},"Plugin Loading Diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"plugin loading",src:n(1944).Z,width:"8787",height:"5576"})))}g.isMDXComponent=!0},1944:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/plugin-loading-63d248baba4db7ba0a9340ef6b0c0856.jpg"}}]);