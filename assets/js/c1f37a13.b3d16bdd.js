"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"ES2022"},l=void 0,c={unversionedId:"ES2022",id:"ES2022",title:"ES2022",description:"If your tsconfig.json targets ES2022 or newer there are some changes you will need to make to your commands to ensure that flags are properly set. See this comment on github for more context on why these changes are necessary.",source:"@site/../docs/ES2022.md",sourceDirName:".",slug:"/ES2022",permalink:"/docs/ES2022",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/ES2022.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1695753856,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{title:"ES2022"},sidebar:"docs",previous:{title:"ESM",permalink:"/docs/esm"},next:{title:"Examples",permalink:"/docs/examples"}},p={},m=[{value:"Use static initialization blocks",id:"use-static-initialization-blocks",level:2}],u={toc:m},f="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If your tsconfig.json targets ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2022")," or newer there are some changes you will need to make to your commands to ensure that flags are properly set. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oclif/oclif/issues/1100#issuecomment-1454910926"},"this comment")," on github for more context on why these changes are necessary."),(0,o.kt)("h2",{id:"use-static-initialization-blocks"},"Use static initialization blocks"),(0,o.kt)("p",null,"All static properties on ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," classes need to be set inside of a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks"},"static initialization block"),"."),(0,o.kt)("p",null,"For instance your command may look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command, Flags} from '@oclif/core'\n\nexport default class Hello extends Command {\n  static summary = 'Say hello!'\n  static aliases = ['howdy']\n  static enableJsonFlag = true\n  static flags = {\n    name: Flags.string({\n      summary: 'person to say hello to',\n      required: true,\n      char: 'n',\n    })\n  }\n\n  public async run(): Promise<{name: string}> {\n    const {flags} = await this.parse(Hello)\n    this.log(`hello ${flags.name}`)\n    return {\n      name: flags.name\n    }\n  }\n}\n")),(0,o.kt)("p",null,"To target ES2022 you'll need to update the command to look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command, Flags} from '@oclif/core'\n\nexport default class Hello extends Command {\n  static summary\n  static aliases\n  static enableJsonFlag\n  // It's very important to declare the static flags prop here.\n  // Otherwise, you'll loose all type safety on flags.\n  static flags\n\n  static {\n    this.summary = 'Say hello!'\n    this.aliases = ['howdy']\n    this.enableJsonFlag = true\n    this.flags = {\n      name: Flags.string({\n        summary: 'person to say hello to',\n        required: true,\n        char: 'n',\n      }),\n    }\n  }\n\n  public async run(): Promise<{name: string}> {\n    const {flags} = await this.parse(Hello)\n    this.log(`hello ${flags.name}`)\n    return {\n      name: flags.name\n    }\n  }\n}\n\n")))}d.isMDXComponent=!0}}]);