"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Features"},s=void 0,u={unversionedId:"features",id:"features",title:"Features",description:"Flag/Argument parsing",source:"@site/../docs/features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/features.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1695753856,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{title:"Features"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"FAQs",permalink:"/docs/faqs"}},p={},c=[{value:"Flag/Argument parsing",id:"flagargument-parsing",level:3},{value:"Configurable Topic Separators",id:"configurable-topic-separators",level:3},{value:"Super Speed",id:"super-speed",level:3},{value:"CLI Generator",id:"cli-generator",level:3},{value:"Testing Helpers",id:"testing-helpers",level:3},{value:"Auto-documentation",id:"auto-documentation",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Hooks",id:"hooks",level:3},{value:"JSON Output",id:"json-output",level:3},{value:"TypeScript (or not)",id:"typescript-or-not",level:3},{value:"Auto-updating Installers",id:"auto-updating-installers",level:3},{value:"Autocomplete",id:"autocomplete",level:3}],d={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"flagargument-parsing"},"Flag/Argument parsing"),(0,r.kt)("p",null,"No CLI framework would be complete without a flag parser. We've built a custom one from years of experimentation that we feel consistently handles user input flexible enough for the user to be able to easily use the CLI in ways they expect, but without compromising strictness guarantees to the developer."),(0,r.kt)("h3",{id:"configurable-topic-separators"},"Configurable Topic Separators"),(0,r.kt)("p",null,"By default topics will be separated with colons, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"my:awesome:command"),". However, you have the option to use spaces if you prefer, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"my awesome command"),"."),(0,r.kt)("h3",{id:"super-speed"},"Super Speed"),(0,r.kt)("p",null,"The overhead for running an oclif CLI command is almost nothing. ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@oclif/core?activeTab=dependencies"},"It requires very few dependencies")," (only 28 dependencies in a minimal setup\u2014including all transitive dependencies). Also, only the command to be executed will be required with node. So large CLIs with many commands will load just as fast as a small one with a single command."),(0,r.kt)("h3",{id:"cli-generator"},"CLI Generator"),(0,r.kt)("p",null,"Run a single command to scaffold out a fully functional CLI and get started quickly. See ",(0,r.kt)("a",{parentName:"p",href:"https://oclif.io/docs/generator_commands"},"Generator Commands"),"."),(0,r.kt)("h3",{id:"testing-helpers"},"Testing Helpers"),(0,r.kt)("p",null,"We've put a lot of work into making commands easily testable and easy to mock out stdout/stderr. The generator will automatically create ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oclif/hello-world/blob/main/test/commands/hello/world.test.ts"},"scaffolded tests"),"."),(0,r.kt)("h3",{id:"auto-documentation"},"Auto-documentation"),(0,r.kt)("p",null,"By default you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to the CLI to get help such as flag options and argument information. This information is also automatically placed in the README whenever the npm package of the CLI is published. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oclif/hello-world"},"hello-world CLI example")),(0,r.kt)("h3",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"Using plugins, users of the CLI can extend it with new functionality, a CLI can be split into modular components, and functionality can be shared amongst multiple CLIs. See ",(0,r.kt)("a",{parentName:"p",href:"https://oclif.io/docs/plugins#building-your-own-plugin"},"Building your own plugin"),"."),(0,r.kt)("h3",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"Use lifecycle hooks to run functionality any time a CLI starts, or on custom triggers. Use this whenever custom functionality needs to be shared between various components of the CLI. See ",(0,r.kt)("a",{parentName:"p",href:"https://oclif.io/docs/hooks"},"Hooks"),"."),(0,r.kt)("h3",{id:"json-output"},"JSON Output"),(0,r.kt)("p",null,"You can opt-in to using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag which will automatically suppress console logs and display the final result of the command as valid JSON output. This is very useful if you want your CLI to be used for scripting in CI/CD environments. See ",(0,r.kt)("a",{parentName:"p",href:"https://oclif.io/docs/json"},"JSON"),"."),(0,r.kt)("h3",{id:"typescript-or-not"},"TypeScript (or not)"),(0,r.kt)("p",null,"Everything in the core of oclif is written in TypeScript and the generator can build fully configured TypeScript CLIs or just plain JavaScript CLIs. By virtue of static properties in TypeScript the syntax is a bit cleaner in TypeScript \u2014 but everything will work no matter which language you choose. If you use plugins support, the CLI will automatically use ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," to run the plugins making it easy and fast to use TypeScript with minimal-to-no boilerplate needed for any oclif CLI."),(0,r.kt)("h3",{id:"auto-updating-installers"},"Auto-updating Installers"),(0,r.kt)("p",null,"oclif can package your CLI into ",(0,r.kt)("a",{parentName:"p",href:"/docs/releasing"},"different installers")," that will not require the user to already have node installed on the machine. These can be made auto-updatable by using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oclif/plugin-update"},"plugin-update"),"."),(0,r.kt)("h3",{id:"autocomplete"},"Autocomplete"),(0,r.kt)("p",null,"Include terminal autocompletion for your CLI via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oclif/plugin-autocomplete"},"plugin-autocomplete"),". Once installed, users can complete command names and flag names."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ my-cli p<tab><tab> # will list all commands starting with 'p' for completion\n")))}f.isMDXComponent=!0}}]);