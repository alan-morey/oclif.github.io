"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1807],{7751:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=s(4848),t=s(8453);const i={title:"Templates"},r=void 0,c={id:"templates",title:"Templates",description:"When you run oclif generate, it will ask if you'd like to use either CommonJS or ESM for your CLI. Both options produce the same CLI (same tsconfig, bin scripts, example commands, etc).",source:"@site/../docs/templates.md",sourceDirName:".",slug:"/templates",permalink:"/docs/templates",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/templates.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1714600753e3,frontMatter:{title:"Templates"},sidebar:"docs",previous:{title:"Generator Commands",permalink:"/docs/generator_commands"},next:{title:"Guides",permalink:"/docs/guides"}},l={},d=[{value:"Bin Scripts",id:"bin-scripts",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example Commands",id:"example-commands",level:2},{value:"Example Tests",id:"example-tests",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["When you run ",(0,o.jsx)(n.code,{children:"oclif generate"}),", it will ask if you'd like to use either CommonJS or ESM for your CLI. Both options produce the same CLI (same tsconfig, bin scripts, example commands, etc)."]}),"\n",(0,o.jsx)(n.p,{children:"We'll give you a brief rundown of everything that's included in your newly generated CLI:"}),"\n",(0,o.jsx)(n.h2,{id:"bin-scripts",children:"Bin Scripts"}),"\n",(0,o.jsx)(n.p,{children:"The templates contains 4 bin scripts that are used for either production or development."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bin/run.js"})," - Run the CLI in production (macos and linux)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bin/dev.js"})," - Run the CLI in development (macos and linux)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bin/run.cmd"})," - Run the CLI in production (windows)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bin/dev.cmd"})," - Run the CLI in development (windows)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"bin"})," entry in your ",(0,o.jsx)(n.code,{children:"package.json"})," will point to the ",(0,o.jsx)(n.code,{children:"bin/run.js"})," file - this tells ",(0,o.jsx)(n.code,{children:"npm"})," to use that file when installing the CLI. If you create os-specific installers using ",(0,o.jsx)(n.code,{children:"oclif pack"}),", then the appropriate ",(0,o.jsx)(n.code,{children:"run"})," script will be added to the final installer based on the target operating system."]}),"\n",(0,o.jsxs)(n.p,{children:["We encourage you to use the ",(0,o.jsx)(n.code,{children:"dev"})," scripts for your local development. Doing so will oclif to auto-transpile your typescript at runtime so you don't have to worry about compiling your code before every command execution. The dev scripts will also produce more verbose warnings and errors to make it easier to figure out what went wrong."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"dev.js"})," that comes with the templates uses ",(0,o.jsx)(n.code,{children:"ts-node"})," as the node runtime. You, however, have options here. You can use any of the following"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/tsx",children:"tsx"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://bun.sh/",children:"bun"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"node"})," - if you use node and ESM, please ensure that you're using a loader that will allow it to use ESM modules (e.g. ",(0,o.jsx)(n.code,{children:"--loader ts-node/esm"}),"). See ",(0,o.jsx)(n.a,{href:"/docs/esm",children:"ESM"})," for more."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For any of these you can point the hashbang in the file to a global install (e.g. ",(0,o.jsx)(n.code,{children:"ts-node"}),") or to a locally installed one (",(0,o.jsx)(n.code,{children:"node_modules/.bin/ts-node"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"The template also comes with several configuration files that can be easily modified (or removed) to suit your needs."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".eslintrc.json"})," - Our recommended plugins and settings for ",(0,o.jsx)(n.code,{children:"eslint"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".eslintignore"})," - Our recommended ",(0,o.jsx)(n.code,{children:".eslintignore"})," to go with our recommend eslint configuration."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".mocharc.json"})," - Our recommended settings for ",(0,o.jsx)(n.code,{children:"mocha"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".prettierrc.json"})," - Our recommended ",(0,o.jsx)(n.code,{children:"prettier"})," settings - uses ",(0,o.jsx)(n.a,{href:"https://github.com/oclif/prettier-config",children:(0,o.jsx)(n.code,{children:"@oclif/prettier-config"})})," as the base."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"tsconfig.json"})," - Our recommended compiler options for typescript projects."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"package.json"})," - Our recommended scripts, dependencies, and ",(0,o.jsx)(n.code,{children:"oclif"})," settings."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example-commands",children:"Example Commands"}),"\n",(0,o.jsx)(n.p,{children:"The templates come with two commands that you can build off of."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hello"})," - ",(0,o.jsx)(n.code,{children:"src/commands/hello/index.ts"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hello world"})," - ",(0,o.jsx)(n.code,{children:"src/commands/hello/world.ts"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example-tests",children:"Example Tests"}),"\n",(0,o.jsxs)(n.p,{children:["Lastly, there are test files for each of those commands under the ",(0,o.jsx)(n.code,{children:"tests"})," folder."]}),"\n",(0,o.jsxs)(n.p,{children:["These tests use ",(0,o.jsx)(n.a,{href:"https://github.com/oclif/test",children:(0,o.jsx)(n.code,{children:"@oclif/test"})})," and ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/mocha",children:(0,o.jsx)(n.code,{children:"mocha"})}),". You are, however, free to setup your tests with any testing utilities that best suit your needs."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var o=s(6540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);