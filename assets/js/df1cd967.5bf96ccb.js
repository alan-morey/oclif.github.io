"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,p(p({ref:t},l),{},{components:r})):o.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),p=["components"],i={title:"Topic Separators"},c=void 0,s={unversionedId:"topic_separator",id:"topic_separator",title:"Topic Separators",description:"By default, topics will be separated with colons, e.g. mycommand. However, you have the option to use spaces if you prefer, e.g. my awesome command.",source:"@site/../docs/topic_separator.md",sourceDirName:".",slug:"/topic_separator",permalink:"/docs/topic_separator",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/topic_separator.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691073347,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Topic Separators"},sidebar:"docs",previous:{title:"Topics",permalink:"/docs/topics"},next:{title:"Hooks",permalink:"/docs/hooks"}},l={},u=[],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,p);return(0,a.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, topics will be separated with colons, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"my:awesome:command"),". However, you have the option to use spaces if you prefer, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"my awesome command"),"."),(0,a.kt)("p",null,"To do this, simply set the ",(0,a.kt)("inlineCode",{parentName:"p"},"topicSeparator")," property in the oclif section of your package.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "oclif": {\n    "topicSeparator": " "\n  }\n}\n')),(0,a.kt)("p",null,"Currently colons (",(0,a.kt)("inlineCode",{parentName:"p"},'":"'),") and spaces (",(0,a.kt)("inlineCode",{parentName:"p"},'" "'),") are the only supported topic separators."))}f.isMDXComponent=!0}}]);