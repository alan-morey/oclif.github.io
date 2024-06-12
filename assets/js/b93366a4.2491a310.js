"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6769],{876:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=a(4848),s=a(8453);const o={title:"Flag Inheritance",description:"How to share flags"},r=void 0,c={id:"flag_inheritance",title:"Flag Inheritance",description:"How to share flags",source:"@site/../docs/flag_inheritance.md",sourceDirName:".",slug:"/flag_inheritance",permalink:"/docs/flag_inheritance",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/flag_inheritance.md",tags:[],version:"current",lastUpdatedBy:"Steve Hetzel",lastUpdatedAt:1718227094e3,frontMatter:{title:"Flag Inheritance",description:"How to share flags"},sidebar:"docs",previous:{title:"ESM",permalink:"/docs/esm"},next:{title:"Flexible Taxonomy",permalink:"/docs/flexible_taxonomy"}},i={},l=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["There are some instances where you might want to define a flag once for all of your commands. In this case you can add a base flag to an abstract base ",(0,t.jsx)(n.code,{children:"Command"})," class. For example,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Command, Flags } from '@oclif/core';\n\nexport abstract class BaseCommand extends Command {\n  static baseFlags = {\n    interactive: Flags.boolean({\n      char: 'i',\n      description: 'Run command in interactive mode',\n      // Show this flag under a separate GLOBAL section in help.\n      helpGroup: 'GLOBAL',\n    }),\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Any command that extends ",(0,t.jsx)(n.code,{children:"BaseCommand"})," will now have an ",(0,t.jsx)(n.code,{children:"--interactive"})," flag on it."]}),"\n",(0,t.jsxs)(n.p,{children:["If you are going to stack multiple layers of abstract ",(0,t.jsx)(n.code,{children:"Command"})," classes, then you must spread the ",(0,t.jsx)(n.code,{children:"baseFlags"})," to ensure that the flags are properly inherited. For example,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Command, Flags } from '@oclif/core';\n\nexport abstract class FirstBaseCommand extends Command {\n  static baseFlags = {\n    interactive: Flags.boolean({\n      char: 'i',\n      description: 'Run command in interactive mode',\n      // Show this flag under a separate GLOBAL section in help.\n      helpGroup: 'GLOBAL',\n    }),\n  };\n}\n\nexport abstract class SecondBaseCommand extends FirstBaseCommand {\n  static baseFlags = {\n    ...FirstBaseCommand.baseFlags,\n    'log-level': Flags.option({\n      default: 'info',\n      description: 'Specify log level',\n      helpGroup: 'GLOBAL',\n      options: ['debug', 'warn', 'error', 'info', 'trace'] as const,\n      summary: 'Specify level for logging.',\n      char: 'l',\n    })(),\n  };\n}\n\nexport abstract class ThirdBaseCommand extends SecondBaseCommand {\n  static baseFlags = {\n    ...SecondBaseCommand.baseFlags,\n    verbose: Flags.boolean({\n      description: 'Show verbose output.',\n      char: 'v'\n    })\n  };\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);