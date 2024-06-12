"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4711],{5878:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=o(4848),a=o(8453);const s={title:"Features"},i=void 0,r={id:"features",title:"Features",description:"Here are some key features that set oclif apart from other CLI frameworks.",source:"@site/../docs/features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/features.md",tags:[],version:"current",lastUpdatedBy:"Steve Hetzel",lastUpdatedAt:1718227094e3,frontMatter:{title:"Features"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"FAQs",permalink:"/docs/faqs"}},l={},c=[{value:"Flag and Argument Parsing",id:"flag-and-argument-parsing",level:3},{value:"Configurable Topic Separators",id:"configurable-topic-separators",level:3},{value:"Super Speed",id:"super-speed",level:3},{value:"CLI Generator",id:"cli-generator",level:3},{value:"Testing Helpers",id:"testing-helpers",level:3},{value:"Auto-documentation",id:"auto-documentation",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Hooks",id:"hooks",level:3},{value:"JSON Output",id:"json-output",level:3},{value:"Flexible Taxonomy",id:"flexible-taxonomy",level:3},{value:"TypeScript (or not)",id:"typescript-or-not",level:3},{value:"Auto-Updating Installers",id:"auto-updating-installers",level:3},{value:"Autocomplete",id:"autocomplete",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Here are some key features that set oclif apart from other CLI frameworks."}),"\n",(0,n.jsx)(t.h3,{id:"flag-and-argument-parsing",children:"Flag and Argument Parsing"}),"\n",(0,n.jsx)(t.p,{children:"No CLI framework is complete without a flag parser. We've built a custom flag parser from years of experimentation that we feel is flexible enough to make an easy, predictable user experience but without compromising type safety for the developer."}),"\n",(0,n.jsx)(t.h3,{id:"configurable-topic-separators",children:"Configurable Topic Separators"}),"\n",(0,n.jsxs)(t.p,{children:["By default, topics are separated with colons, such as ",(0,n.jsx)(t.code,{children:"my:awesome:command"}),". However, you can use spaces if you prefer, such as ",(0,n.jsx)(t.code,{children:"my awesome command"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"super-speed",children:"Super Speed"}),"\n",(0,n.jsxs)(t.p,{children:["The overhead for running an oclif CLI command is almost nothing. ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@oclif/core?activeTab=dependencies",children:"The command requires few dependencies"}),"; for example, only 17 dependencies are required for a minimal setup. Also, only the command to be executed requires Node.js. Which means that a large CLI with many commands loads as fast as a small CLI with just a single command."]}),"\n",(0,n.jsx)(t.h3,{id:"cli-generator",children:"CLI Generator"}),"\n",(0,n.jsxs)(t.p,{children:["You can get started from scratch quickly; all you need is a single command to scaffold out a fully functional CLI. See ",(0,n.jsx)(t.a,{href:"https://oclif.io/docs/generator_commands",children:"Generator Commands"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"testing-helpers",children:"Testing Helpers"}),"\n",(0,n.jsx)(t.p,{children:"We've worked hard to make commands easily testable and easy to mock out stdout and stderr. The CLI generator automatically creates scaffolded tests."}),"\n",(0,n.jsx)(t.h3,{id:"auto-documentation",children:"Auto-documentation"}),"\n",(0,n.jsxs)(t.p,{children:["By default, you pass ",(0,n.jsx)(t.code,{children:"--help"})," to a CLI command to get help, such as the flag options and argument information. This information is also automatically added to the README whenever the CLI's npm package is published. See the ",(0,n.jsx)(t.a,{href:"https://github.com/oclif/plugin-plugins",children:"plugin-plugins"})," as an example."]}),"\n",(0,n.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,n.jsxs)(t.p,{children:["Using plugins, you can extend a CLI with new functionality, split it into modular components, and share its functionality among multiple CLIs. See ",(0,n.jsx)(t.a,{href:"https://oclif.io/docs/plugins#building-your-own-plugin",children:"Building your own plugin"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"hooks",children:"Hooks"}),"\n",(0,n.jsxs)(t.p,{children:["Use lifecycle hooks to run functionality anytime a CLI starts, or on custom triggers. Use hooks whenever you want to share custom functionality between various components of the CLI. See ",(0,n.jsx)(t.a,{href:"https://oclif.io/docs/hooks",children:"Hooks"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"json-output",children:"JSON Output"}),"\n",(0,n.jsxs)(t.p,{children:["Your CLI can opt in to using the ",(0,n.jsx)(t.code,{children:"--json"})," flag, which causes commands to automatically suppress console logs and display their final results as valid JSON output. The ",(0,n.jsx)(t.code,{children:"--json"})," flag is useful if you want to use your CLI for scripting in CI/CD environments. See ",(0,n.jsx)(t.a,{href:"https://oclif.io/docs/json",children:"JSON"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"flexible-taxonomy",children:"Flexible Taxonomy"}),"\n",(0,n.jsxs)(t.p,{children:["You can opt in to what we call ",(0,n.jsx)(t.a,{href:"/docs/flexible_taxonomy",children:"flexible taxonomy"}),". When enabled, this feature allows users to execute commands without adhering to your defined command taxonomy."]}),"\n",(0,n.jsxs)(t.p,{children:["This feature makes your CLI more user-friendly, especially if you have long command names which users find difficult to remember. For example, users can find it hard to remember if a command is called ",(0,n.jsx)(t.code,{children:"project deploy metadata start"})," or ",(0,n.jsx)(t.code,{children:"project start deploy metadata"})," - with flexible taxonomy, it doesn't matter because both are valid!"]}),"\n",(0,n.jsx)(t.h3,{id:"typescript-or-not",children:"TypeScript (or not)"}),"\n",(0,n.jsxs)(t.p,{children:["Everything in the core of oclif is written in TypeScript, and the CLI generator can build both fully configured TypeScript or plain JavaScript CLIs. Because of TypeScript static properties, the syntax is a bit cleaner in TypeScript \u2014 but everything works, no matter which language you choose. If you use plugins support, the CLI automatically uses ",(0,n.jsx)(t.code,{children:"ts-node"})," to run the plugins, which makes it easy and fast to use TypeScript with minimal-to-no boilerplate needed for any oclif CLI."]}),"\n",(0,n.jsx)(t.h3,{id:"auto-updating-installers",children:"Auto-Updating Installers"}),"\n",(0,n.jsxs)(t.p,{children:["oclif can package your CLI into ",(0,n.jsx)(t.a,{href:"/docs/releasing",children:"different installers"})," that don't require the user to already have Node.js installed on their computer. You can make these installers auto-updatable by using ",(0,n.jsx)(t.a,{href:"https://github.com/oclif/plugin-update",children:"plugin-update"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"autocomplete",children:"Autocomplete"}),"\n",(0,n.jsxs)(t.p,{children:["Include terminal autocompletion for your CLI with the ",(0,n.jsx)(t.a,{href:"https://github.com/oclif/plugin-autocomplete",children:"plugin-autocomplete"}),". After the autocomplete feature is configured, users can complete command names and flag names by pressing the ",(0,n.jsx)(t.code,{children:"tab"})," key."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ my-cli p<tab><tab> # lists all commands starting with 'p' for completion\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var n=o(6540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);