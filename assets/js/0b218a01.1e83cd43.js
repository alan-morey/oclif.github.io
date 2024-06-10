"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3454],{577:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(4848),i=n(8453);const o={title:"Aliases",description:"Define aliases for commands, flags, and bins"},t=void 0,l={id:"aliases",title:"Aliases",description:"Define aliases for commands, flags, and bins",source:"@site/../docs/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/docs/aliases",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/aliases.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1718050346e3,frontMatter:{title:"Aliases",description:"Define aliases for commands, flags, and bins"},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Custom Base Class",permalink:"/docs/base_class"}},c={},d=[{value:"Command Aliases",id:"command-aliases",level:2},{value:"Flag Aliases",id:"flag-aliases",level:2},{value:"Bin Aliases",id:"bin-aliases",level:2}];function r(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"command-aliases",children:"Command Aliases"}),"\n",(0,a.jsxs)(s.p,{children:["Aliases let you define a string that maps to a command. This command can be run as ",(0,a.jsx)(s.code,{children:"mycli config"}),", ",(0,a.jsx)(s.code,{children:"mycli config:index"}),", or ",(0,a.jsx)(s.code,{children:"mycli config:list"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"import {Command, Flags} from '@oclif/core'\n\nexport class ConfigIndex extends Command {\n  static aliases = ['config:index', 'config:list']\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:['By default, aliases find the "real" command and just work.  If you\'re providing command aliases for backward compatibility but prefer users to use the "real" command, set ',(0,a.jsx)(s.code,{children:"deprecateAliases"})," to ",(0,a.jsx)(s.code,{children:"true"})," to warn users about the correct name"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"export class ConfigIndex extends Command {\n  static aliases = ['config:index', 'config:list']\n  static deprecateAliases = true\n}\n"})}),"\n",(0,a.jsx)(s.h2,{id:"flag-aliases",children:"Flag Aliases"}),"\n",(0,a.jsx)(s.p,{children:"Like command aliases, but on an individual flag.  You can alias the name and short character, and optionally emit warnings when aliased names are used."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"export class ConfigIndex extends Command {\n  static flags = {\n    'new-name': Flags.boolean({\n      char: 'c',\n      aliases: ['old-name', 'o'],\n      deprecateAliases: true\n    })\n  }\n}\n\n"})}),"\n",(0,a.jsx)(s.h2,{id:"bin-aliases",children:"Bin Aliases"}),"\n",(0,a.jsxs)(s.p,{children:['Creating a CLI that responds to different names or "aliases" is easy, simply add a ',(0,a.jsx)(s.code,{children:"binAliases"})," property to your CLI's ",(0,a.jsx)(s.code,{children:"oclif"})," property in ",(0,a.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "name": "mycli",\n  "version": "0.0.0",\n  "description": "My CLI",\n  "main": "bin/run.js",\n  "bin": {\n    "mycli": "./bin/run.js",\n    "mycli-alias": "./bin/run.js"\n  },\n  "oclif": {\n    "binAliases": ["mycli", "mycli-alias"]\n  }\n}\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Adding this property allows your CLI to respond to either of those names, and is used during the bundling and building process when shipping your CLI. Note that the ",(0,a.jsx)(s.code,{children:"bin"})," section was also modified to include both aliases, which is how npm creates bin aliases. To create a unified experience, regardless of the installation method, a CLI author must change both to match. Bin aliases also play nicely with ",(0,a.jsx)(s.code,{children:"@oclif/plugin-autocomplete"}),", so typing an alias and using autocomplete is the same experience as using the original name."]})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var a=n(6540);const i={},o=a.createContext(i);function t(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);