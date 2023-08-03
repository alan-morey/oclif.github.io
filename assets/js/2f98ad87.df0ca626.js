"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2048],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=m(t),s=o,u=d["".concat(l,".").concat(s)]||d[s]||f[s]||a;return t?r.createElement(u,i(i({ref:n},p),{},{components:t})):r.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:"Generator Commands"},l=void 0,m={unversionedId:"generator_commands",id:"generator_commands",title:"Generator Commands",description:"- oclif generate NAME",source:"@site/../docs/generator_commands.md",sourceDirName:".",slug:"/generator_commands",permalink:"/docs/generator_commands",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/generator_commands.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691073347,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Generator Commands"},sidebar:"docs",previous:{title:"FAQs",permalink:"/docs/faqs"},next:{title:"Command Execution",permalink:"/docs/command_execution"}},p={},d=[{value:"<code>oclif generate NAME</code>",id:"oclif-generate-name",level:2},{value:"<code>oclif generate command NAME</code>",id:"oclif-generate-command-name",level:2},{value:"<code>oclif generate hook NAME</code>",id:"oclif-generate-hook-name",level:2}],f={toc:d},s="wrapper";function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(s,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#oclif-generate-name"},(0,a.kt)("inlineCode",{parentName:"a"},"oclif generate NAME"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#oclif-generate-command-name"},(0,a.kt)("inlineCode",{parentName:"a"},"oclif generate command NAME"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#oclif-generate-hook-name"},(0,a.kt)("inlineCode",{parentName:"a"},"oclif generate hook NAME")))),(0,a.kt)("h2",{id:"oclif-generate-name"},(0,a.kt)("inlineCode",{parentName:"h2"},"oclif generate NAME")),(0,a.kt)("p",null,"generate a new CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ oclif generate [NAME]\n\nARGUMENTS\n  NAME  directory name of new project\n\nDESCRIPTION\n  generate a new CLI\n\n  This will clone the template repo 'oclif/hello-world' and update package properties\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"See code: ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/oclif/oclif/blob/v2.2.0/src/commands/generate.ts"},"src/commands/generate.ts"))),(0,a.kt)("h2",{id:"oclif-generate-command-name"},(0,a.kt)("inlineCode",{parentName:"h2"},"oclif generate command NAME")),(0,a.kt)("p",null,"add a command to an existing CLI or plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ oclif generate command [NAME] [--force]\n\nARGUMENTS\n  NAME  name of command\n\nFLAGS\n  --force  overwrite existing files\n\nDESCRIPTION\n  add a command to an existing CLI or plugin\n")),(0,a.kt)("h2",{id:"oclif-generate-hook-name"},(0,a.kt)("inlineCode",{parentName:"h2"},"oclif generate hook NAME")),(0,a.kt)("p",null,"add a hook to an existing CLI or plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"USAGE\n  $ oclif generate hook [NAME] [--force] [--event <value>]\n\nARGUMENTS\n  NAME  name of hook (snake_case)\n\nFLAGS\n  --event=<value>  [default: init] event to run hook on\n  --force          overwrite existing files\n\nDESCRIPTION\n  add a hook to an existing CLI or plugin\n")))}u.isMDXComponent=!0}}]);