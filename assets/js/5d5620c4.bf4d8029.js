"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1926],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={title:"ESM"},s=void 0,c={unversionedId:"esm",id:"esm",title:"ESM",description:"If you want to write your CLI or plugins using ESM you just need to make a few changes to your tsconfig.json and bin scripts.",source:"@site/../docs/esm.md",sourceDirName:".",slug:"/esm",permalink:"/docs/esm",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/esm.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691073347,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"ESM"},sidebar:"docs",previous:{title:"Single Command CLI",permalink:"/docs/single_command_cli"},next:{title:"Examples",permalink:"/docs/examples"}},p={},u=[],m={toc:u},d="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to write your CLI or plugins using ESM you just need to make a few changes to your tsconfig.json and bin scripts."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the following options to the ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," in your project:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "module": "ES2020",\n    "moduleResolution": "node",\n  },\n  "ts-node": {\n    "esm": true\n  }\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Rename ",(0,a.kt)("inlineCode",{parentName:"li"},"bin/dev")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"bin/dev.js")," and replace the contents with the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"#!/usr/bin/env ts-node\n\n/* eslint-disable node/shebang */\n\nimport oclif from '@oclif/core'\nimport path from 'node:path'\nimport url from 'node:url'\n// eslint-disable-next-line node/no-unpublished-import\nimport {register} from 'ts-node'\n\n// In dev mode -> use ts-node and dev plugins\nprocess.env.NODE_ENV = 'development'\n\nregister({\n  project: path.join(path.dirname(url.fileURLToPath(import.meta.url)), '..', 'tsconfig.json'),\n})\n\n// In dev mode, always show stack traces\noclif.settings.debug = true\n\n// Start the CLI\noclif\n.run(process.argv.slice(2), import.meta.url)\n.then(oclif.flush)\n.catch(oclif.Errors.handle)\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Rename ",(0,a.kt)("inlineCode",{parentName:"li"},"bin/run")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"bin/run.js")," and replace the contents with the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"#!/usr/bin/env node\n\nimport oclif from '@oclif/core'\n\noclif\n.run(process.argv.slice(2), import.meta.url)\n.then(oclif.flush)\n.catch(oclif.Errors.handle)\n")),(0,a.kt)("p",null,"Alternatively, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," function to abstract out the bin scripts. You will still need to modify your tsconfig.json as documented above."),(0,a.kt)("p",null,"Example for ESM dev.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"#!/usr/bin/env ts-node\n// eslint-disable-next-line node/shebang\n(async () => {\n  const oclif = await import('@oclif/core')\n  await oclif.execute({type: 'esm', development: true, dir: import.meta.url})\n})()\n")),(0,a.kt)("p",null,"Example for ESM run.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"#!/usr/bin/env node\n// eslint-disable-next-line node/shebang\n(async () => {\n  const oclif = await import('@oclif/core')\n  await oclif.execute({type: 'esm', dir: import.meta.url})\n})()\n")),(0,a.kt)("p",null,"Example for CJS dev.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"#!/usr/bin/env node\n// eslint-disable-next-line node/shebang\n(async () => {\n  const oclif = await import('@oclif/core')\n  await oclif.execute({type: 'cjs', development: true, dir: __dirname})\n})()\n")),(0,a.kt)("p",null,"Example for CJS run.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"#!/usr/bin/env node\n// eslint-disable-next-line node/shebang\n(async () => {\n  const oclif = await import('@oclif/core')\n  await oclif.execute({type: 'cjs', dir: import.meta.url})\n})()\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"bin")," property in the package.json")),(0,a.kt)("p",null,"Change"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "bin": {\n    "my-cli": "./bin/run"\n  },\n')),(0,a.kt)("p",null,"to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "bin": {\n    "my-cli": "./bin/run.js"\n  },\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Update any other references to ",(0,a.kt)("inlineCode",{parentName:"li"},"bin/dev")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"bin/run")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"bin/dev.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"bin/run.js"))),(0,a.kt)("p",null,"You may have references to the bin scripts in your ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/launch.json"),". You'll need to update these as well."))}f.isMDXComponent=!0}}]);