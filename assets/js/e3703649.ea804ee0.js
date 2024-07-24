"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9036],{5505:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var s=o(4848),t=o(8453);const l={title:"Help Classes"},i=void 0,a={id:"help_classes",title:"Help Classes",description:"Out of the box oclif provides a great help experience for CLIs. Users can invoke help with the --help flag.",source:"@site/../docs/help_classes.md",sourceDirName:".",slug:"/help_classes",permalink:"/docs/help_classes",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/help_classes.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1721856187e3,frontMatter:{title:"Help Classes"},sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/plugins"},next:{title:"Performance",permalink:"/docs/performance"}},c={},r=[{value:"Custom Help",id:"custom-help",level:2},{value:"Extending the <code>HelpBase</code> class",id:"extending-the-helpbase-class",level:2},{value:"Extending the default <code>Help</code> class",id:"extending-the-default-help-class",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Out of the box oclif provides a great help experience for CLIs. Users can invoke help with the ",(0,s.jsx)(n.code,{children:"--help"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ my-cli login --help\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want your CLI to have an explicit ",(0,s.jsx)(n.code,{children:"help"})," command, add ",(0,s.jsx)(n.code,{children:"@oclif/plugin-help"})," as an ",(0,s.jsx)(n.a,{href:"/docs/plugins",children:"oclif plugin in your config"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ my-cli help\n"})}),"\n",(0,s.jsx)(n.h2,{id:"custom-help",children:"Custom Help"}),"\n",(0,s.jsx)(n.p,{children:"To get started, first define the filepath to your help class in oclif's config in package.json. This is a relative path to the help class, without a file extension."}),"\n",(0,s.jsx)(n.p,{children:'For this example, the help class will be created in a file at "[project root]/src/help.ts".'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "oclif": {\n    "helpClass": "./dist/help"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["From here there are two paths, implement the ",(0,s.jsx)(n.code,{children:"HelpBase"})," abstract class yourself or overwrite the parts of the default ",(0,s.jsx)(n.code,{children:"Help"})," class you want to customize (ex: how command usage is displayed). We recommend the latter approach but cover both below."]}),"\n",(0,s.jsxs)(n.h2,{id:"extending-the-helpbase-class",children:["Extending the ",(0,s.jsx)(n.code,{children:"HelpBase"})," class"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"HelpBase"})," abstract class provides a starting point requiring the minimum needed methods implemented to be compatible with oclif."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-TypeScript",children:"import {Command, HelpBase} from '@oclif/core';\n\nexport default class CustomHelp extends HelpBase {\n  showHelp(args: string[]) {\n    console.log('This will be displayed in multi-command CLIs')\n  }\n\n  showCommandHelp(command: Command.Loadable) {\n    console.log('This will be displayed in single-command CLIs')\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"showHelp"})," method is called by oclif to display help in multi-command CLIs, while ",(0,s.jsx)(n.code,{children:"showCommandHelp"})," is called directly for single-command CLIs."]}),"\n",(0,s.jsxs)(n.p,{children:["The class is instantiated with a ",(0,s.jsx)(n.code,{children:"config"})," property that provides helpful context for constructing your custom output."]}),"\n",(0,s.jsxs)(n.p,{children:["To see an example of what is possible take a look at the source code for the ",(0,s.jsxs)(n.a,{href:"https://github.com/oclif/core/blob/main/src/help/index.ts",children:["default ",(0,s.jsx)(n.code,{children:"Help"})," class exported from @oclif/core"]}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"extending-the-default-help-class",children:["Extending the default ",(0,s.jsx)(n.code,{children:"Help"})," class"]}),"\n",(0,s.jsxs)(n.p,{children:["The default ",(0,s.jsx)(n.code,{children:"Help"})," class provides many method \u201chooks\u201d that make it easy to override the particular parts of help's output you want to customize."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-TypeScript",children:"import {Command, Help, Interfaces} from '@oclif/core'\n\nexport default class MyHelpClass extends Help {\n  // acts as a \"router\"\n  // and based on the args it receives\n  // calls one of showRootHelp, showTopicHelp,\n  // the formatting for an individual command\n  formatCommand(command: Command.Loadable): string {}\n\n  // the formatting for a list of commands\n  formatCommands(commands: Command.Loadable[]): string {}\n\n  // displayed for the root help\n  formatRoot(): string {}\n\n  // the formatting for an individual topic\n  formatTopic(topic: Interfaces.Topic): string {}\n\n  // the default implementations of showRootHelp\n  // showTopicHelp and showCommandHelp\n  // will call various format methods that\n  // provide the formatting for their corresponding\n  // help sections;\n  // these can be overwritten as well\n\n  // the formatting responsible for the header\n  // the formatting for a list of topics\n  protected formatTopics(topics: Interfaces.Topic[]): string {}\n\n  // display help for a command\n  showCommandHelp(command: Command.Loadable): void {}\n\n  // or showCommandHelp\n  showHelp(args: string[]): void {}\n\n  // display the root help of a CLI\n  showRootHelp(): void {}\n\n  // display help for a topic\n  showTopicHelp(topic: Interfaces.Topic): void {}\n}\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To see the default implementation of these methods take a look at the ",(0,s.jsxs)(n.a,{href:"https://github.com/oclif/core/blob/main/src/help/index.ts",children:["default ",(0,s.jsx)(n.code,{children:"Help"})," class exported from @oclif/core"]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To start experimenting, define ",(0,s.jsx)(n.code,{children:"showCommandHelp"})," in your custom help class and change the output."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-TypeScript",children:"import {Command, Help} from '@oclif/core';\n\nexport default class MyHelpClass extends Help {\n  public showCommandHelp(command: Command.Loadable) {\n    console.log('Display my custom command help!')\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then run help for any command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ my-cli login --help\nDisplay my custom command help!\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var s=o(6540);const t={},l=s.createContext(t);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);