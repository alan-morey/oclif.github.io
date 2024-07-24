"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8908],{1447:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var t=o(4848),s=o(8453);const l={title:"JSON",description:"Native support for `--json` flag"},r=void 0,i={id:"json",title:"JSON",description:"Native support for `--json` flag",source:"@site/../docs/json.md",sourceDirName:".",slug:"/json",permalink:"/docs/json",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/json.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1721856187e3,frontMatter:{title:"JSON",description:"Native support for `--json` flag"},sidebar:"docs",previous:{title:"Just-in-Time Plugin Installation",permalink:"/docs/jit_plugins"},next:{title:"Logging",permalink:"/docs/logging"}},c={},a=[];function d(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["If you want to use the ",(0,t.jsx)(n.code,{children:"--json"})," flag to return JSON output to the user, then you can set the ",(0,t.jsx)(n.code,{children:"enableJsonFlag"})," property on the ",(0,t.jsx)(n.code,{children:"Command"})," class."]}),"\n",(0,t.jsxs)(n.p,{children:["When this property is set and the user supplies the ",(0,t.jsx)(n.code,{children:"--json"})," flag, the command will suppress all logs and instead log the return value to the console in JSON format. ",(0,t.jsx)(n.strong,{children:"Note"})," log suppression will only work if you use the logging methods on the ",(0,t.jsx)(n.code,{children:"Command"})," class instance. In other words, ",(0,t.jsx)(n.code,{children:"this.log"})," will be automatically suppressed but ",(0,t.jsx)(n.code,{children:"console.log"})," will not be."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import {Command} from '@oclif/core'\nexport class HelloCommand extends Command {\n  public static enableJsonFlag = true\n  public async run(): Promise<{ message: string }> {\n    this.log('hello, world!')\n    return { message: 'hello, world!' }\n  }\n}\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ my-cli hello\nhello, world!\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ my-cli hello --json\n{\n  "message": "hello, world!"\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var t=o(6540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);