"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1427],{4693:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=s(4848),o=s(8453);const n={title:"Topics"},c=void 0,r={id:"topics",title:"Topics",description:"As CLIs grow it can be useful to nest commands within topics. This is supported simply by placing command files in subdirectories. For example, with the Salesforce CLI we have a topic sf config with commands like sf config set and sf config get. The directory structure looks like this:",source:"@site/../docs/topics.md",sourceDirName:".",slug:"/topics",permalink:"/docs/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/topics.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1721856187e3,frontMatter:{title:"Topics"},sidebar:"docs",previous:{title:"Command Discovery Strategies",permalink:"/docs/command_discovery_strategies"},next:{title:"Topic Separators",permalink:"/docs/topic_separator"}},a={},d=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["As CLIs grow it can be useful to nest commands within topics. This is supported simply by placing command files in subdirectories. For example, with the Salesforce CLI we have a topic ",(0,i.jsx)(t.code,{children:"sf config"})," with commands like ",(0,i.jsx)(t.code,{children:"sf config set"})," and ",(0,i.jsx)(t.code,{children:"sf config get"}),". The directory structure looks like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"package.json\nsrc/\n\u2514\u2500\u2500 commands/\n    \u2514\u2500\u2500 config/\n      \xa0 \u251c\u2500\u2500 index.ts\n      \xa0\xa0\u251c\u2500\u2500 set.ts\n     \xa0\xa0 \u2514\u2500\u2500 get.ts\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The help descriptions will be the description of the first command within a directory. If you'd like to customize the help description, add it to the ",(0,i.jsx)(t.code,{children:"package.json"})," like so:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'{\n  "oclif": {\n    "topics": {\n      "apps:favorites": { "description": "manage favorite apps" },\n      "config": { "description": "manage heroku config variables" },\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Subtopics can be created by making subdirectories within topic directories, but for UX reasons we generally discourage going more than 1 or 2 levels deep even for the largest CLIs."})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>r});var i=s(6540);const o={},n=i.createContext(o);function c(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);