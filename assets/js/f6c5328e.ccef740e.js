"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9181],{5925:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=o(4848),t=o(8453);const i={title:"Hooks"},l=void 0,c={id:"hooks",title:"Hooks",description:"oclif exposes lifecycle event hooks such as init and commandnotfound. See below for a list of all the lifecycle events. In addition to these built-in events, you can create your own events and allow commands/plugins to watch for these custom events. It's a great way to allow multiple plugins to interact with each other.",source:"@site/../docs/hooks.md",sourceDirName:".",slug:"/hooks",permalink:"/docs/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/hooks.md",tags:[],version:"current",lastUpdatedBy:"Steve Hetzel",lastUpdatedAt:1718227094e3,frontMatter:{title:"Hooks"},sidebar:"docs",previous:{title:"Topic Separators",permalink:"/docs/topic_separator"},next:{title:"Plugins",permalink:"/docs/plugins"}},a={},r=[{value:"Lifecycle Events",id:"lifecycle-events",level:2},{value:"Custom Events",id:"custom-events",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["oclif exposes lifecycle event hooks such as ",(0,s.jsx)(n.code,{children:"init"})," and ",(0,s.jsx)(n.code,{children:"command_not_found"}),". ",(0,s.jsx)(n.a,{href:"#lifecycle-events",children:"See below for a list of all the lifecycle events"}),". In addition to these built-in events, you can create your own events and allow commands/plugins to watch for these custom events. It's a great way to allow multiple plugins to interact with each other."]}),"\n",(0,s.jsxs)(n.p,{children:["Multiple hooks are run in parallel. ",(0,s.jsx)(n.strong,{children:"This behavior may change in a future release."})]}),"\n",(0,s.jsx)(n.p,{children:"A basic hook looks like the following in TypeScript:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import {Hook} from '@oclif/core'\n\nconst hook: Hook<'init'> = async function (options) {\n  console.log(`example init hook running before ${options.id}`)\n}\n\nexport default hook\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The hook must also be declared with the event's name and hook's file path under oclif's settings in ",(0,s.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"oclif": {\n  "commands": "./lib/commands",\n  "hooks": {\n    "init": "./lib/hooks/init/example"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Multiple hooks of the same event type can be declared with an array."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"oclif": {\n  "commands": "./lib/commands",\n  "hooks": {\n    "init": [\n      "./lib/hooks/init/example",\n      "./lib/hooks/init/another_hook"\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can create hooks with ",(0,s.jsx)(n.code,{children:"oclif generate hook myhook --event=init"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"lifecycle-events",children:"Lifecycle Events"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"init"})," - runs when the CLI is initialized before a command is found to run"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prerun"})," - runs after ",(0,s.jsx)(n.code,{children:"init"})," and after the command is found, but just before running the command itself"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"command_not_found"})," - runs if a command is not found before the error is displayed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"command_incomplete"})," - runs if a command is not found but it is a partial of an existing command. Only works if ",(0,s.jsx)(n.a,{href:"/docs/flexible_taxonomy",children:"flexible taxonomy"})," is enabled. Useful for instances where you'd like to present a prompt with all the matching commands. See Salesforce CLI's ",(0,s.jsx)(n.a,{href:"https://github.com/salesforcecli/cli/blob/main/src/hooks/incomplete.ts",children:"implementation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jit_plugin_not_installed"})," - runs if a command from a ",(0,s.jsx)(n.a,{href:"/docs/jit_plugins",children:"JIT plugin"})," is executed but the plugin isn't installed yet. See Salesforce CLI's ",(0,s.jsx)(n.a,{href:"https://github.com/salesforcecli/plugin-trust/blob/main/src/hooks/jitPluginInstall.ts",children:"implementation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"preparse"})," - runs before flags and args are parsed and validated. Useful if you need to manipulate the input. See Salesforce CLI's ",(0,s.jsx)(n.a,{href:"https://github.com/salesforcecli/cli/blob/main/src/hooks/preparse.ts",children:"implementation"}),". This can only be implemented by the root CLI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"postrun"})," - runs after the command only if the command finishes with no error"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"custom-events",children:"Custom Events"}),"\n",(0,s.jsxs)(n.p,{children:["Custom events are just like lifecycle events, but you need to call ",(0,s.jsx)(n.code,{children:"this.config.runHook()"})," to fire the event."]}),"\n",(0,s.jsx)(n.p,{children:"For example, you could define an analytics post function that you will run in your command after submitting analytics telemetry. First define:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"src/hooks/analytics/post.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const hook = async function (options: {id: string}) {\n  // code to post options.id to analytics server\n}\n\nexport default hook\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"package.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'  "oclif": {\n    "commands": "./lib/commands",\n    "hooks": {\n      "analytics": "./lib/hooks/analytics/post"\n    },\n  },\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then in any command you want to trigger the event:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export class extends Command {\n  async run() {\n    // emit analytics\n    await this.config.runHook('analytics', {id: 'my_command'})\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to exit during a hook, use ",(0,s.jsx)(n.code,{children:"options.context.error()"})," or ",(0,s.jsx)(n.code,{children:"options.context.exit()"}),". Throwing an ",(0,s.jsx)(n.code,{children:"Error"})," will not cause the CLI to exit - this is to prevent an issues such a single plugin's ",(0,s.jsx)(n.code,{children:"init"})," hook causing a CLI to immediately fail on every command execution."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>c});var s=o(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);