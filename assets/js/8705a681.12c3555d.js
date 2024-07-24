"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[125],{3489:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(4848),s=a(8453);const o={title:"Running Commands Programmatically"},i=void 0,r={id:"running_programmatically",title:"Running Commands Programmatically",description:"If you need to run a command from another, or programmatically run a command in another codebase, there are a couple options.",source:"@site/../docs/running_programmatically.md",sourceDirName:".",slug:"/running_programmatically",permalink:"/docs/running_programmatically",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/running_programmatically.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1721856187e3,frontMatter:{title:"Running Commands Programmatically"},sidebar:"docs",previous:{title:"Release",permalink:"/docs/releasing"},next:{title:"Single Command CLI",permalink:"/docs/single_command_cli"}},c={},l=[{value:"Sharing code with modules",id:"sharing-code-with-modules",level:2},{value:"Calling commands directly",id:"calling-commands-directly",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"If you need to run a command from another, or programmatically run a command in another codebase, there are a couple options."}),"\n",(0,t.jsx)(e.p,{children:"First, it is generally a bad idea to run a command directly as the command exports a user interface, not a code interface. It's a design smell that should rarely (if ever) be used. Generally speaking, it's better to break up the code so that it can be called directly rather than as a command. We'll show this better method first."}),"\n",(0,t.jsx)(e.h2,{id:"sharing-code-with-modules",children:"Sharing code with modules"}),"\n",(0,t.jsxs)(e.p,{children:["For example, suppose you have a ",(0,t.jsx)(e.code,{children:"config list"})," command that outputs config vars of an app to the terminal."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"./src/commands/config/list.ts"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"export class ConfigList extends Command {\n  static flags = {\n    app: Flags.string({required: true})\n  }\n\n  async run() {\n    const {flags} = await this.parse(ConfigList)\n    const config = await api.get(`/apps/${flags.app}/config-vars`)\n    for (let [key, value] of Object.entries(config)) {\n      this.log(`${key}=${value}`)\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Then suppose you have another command, ",(0,t.jsx)(e.code,{children:"config update"}),", that updates the app's configuration and finally displays the new config vars to the terminal."]}),"\n",(0,t.jsxs)(e.p,{children:["Since both ",(0,t.jsx)(e.code,{children:"config list"})," and ",(0,t.jsx)(e.code,{children:"config update"})," need to display the config vars in the exact same way, you should create a new module, function, or class that's responsible for creating the display."]}),"\n",(0,t.jsx)(e.p,{children:"For example:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"./src/commands/config/update.ts"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"import {displayConfigVars} from '../displayConfigVars'\n\nexport class ConfigUpdate extends Command {\n  static flags = {\n    app: Flags.string({required: true})\n  }\n\n  async run() {\n    const {flags} = await this.parse(ConfigUpdate)\n    await this.doUpdate(flags.app)\n    await displayConfigVars(flags.app)\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"./src/displayConfigVars.ts"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"export async function displayConfigVars(app: string) {\n  const config = await api.get(`/apps/${app}config-vars`)\n  for (let [key, value] of Object.entries(config)) {\n    this.log(`${key}=${value}`)\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"This is the recommended way to share code. This can be extended further by putting shared code into its own npm package."}),"\n",(0,t.jsx)(e.h2,{id:"calling-commands-directly",children:"Calling commands directly"}),"\n",(0,t.jsxs)(e.p,{children:["Still, if you ",(0,t.jsx)(e.em,{children:"really"})," want to call a command directly, it's easy to do. You have a couple of options."]}),"\n",(0,t.jsxs)(e.p,{children:["If you know that the command you want to run is installed in the CLI, you can use ",(0,t.jsx)(e.code,{children:"this.config.runCommand"}),". For this, we could write our ",(0,t.jsx)(e.code,{children:"config update"})," command like so:"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"./src/commands/config/update.ts"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"export class ConfigUpdate extends Command {\n  static flags = {\n    app: Flags.string({required: true})\n  }\n\n  async run() {\n    const {flags} = await this.parse(ConfigUpdate)\n    await this.doUpdate(flags.app)\n    await this.config.runCommand('config:list', ['--global'])\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"The second option is to import the command directly and execute it directly like so:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"./src/commands/config/update.ts"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"import {ConfigList} from './config/list'\n\nexport class ConfigUpdate extends Command {\n  static flags = {\n    app: Flags.string({required: true})\n  }\n\n  async run() {\n    const {flags} = await this.parse(ConfigUpdate)\n    await this.doUpdate(flags.app)\n    await ConfigList.run(['--global'])\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["This works because commands have a static ",(0,t.jsx)(e.code,{children:".run()"})," ",(0,t.jsx)(e.a,{href:"https://github.com/oclif/core/blob/main/src/command.ts",children:"method on them"})," that can be used to instantiate the command and run the instance ",(0,t.jsx)(e.code,{children:".run()"})," method. It takes in the argv as input to the command."]}),"\n",(0,t.jsxs)(e.p,{children:["But, again, we ",(0,t.jsx)(e.strong,{children:"strongly encourage"})," you to avoid these options. It's far better to extract any shared logic out of a ",(0,t.jsx)(e.code,{children:"Command"})," class."]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>r});var t=a(6540);const s={},o=t.createContext(s);function i(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);