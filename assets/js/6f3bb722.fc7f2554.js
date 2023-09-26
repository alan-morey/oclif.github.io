"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,h=c["".concat(l,".").concat(u)]||c[u]||p[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Commands"},l=void 0,m={unversionedId:"commands",id:"commands",title:"Commands",description:"A basic command looks like the following in TypeScript:",source:"@site/../docs/commands.md",sourceDirName:".",slug:"/commands",permalink:"/docs/commands",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/commands.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1695753856,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{title:"Commands"},sidebar:"docs",previous:{title:"Plugin Loading",permalink:"/docs/plugin_loading"},next:{title:"Command Arguments",permalink:"/docs/args"}},d={},c=[{value:"Avoiding Timeouts",id:"avoiding-timeouts",level:3},{value:"Other Command Options",id:"other-command-options",level:3},{value:"Command Methods",id:"command-methods",level:2},{value:"<code>this.log(message: string)</code>",id:"thislogmessage-string",level:3},{value:"<code>this.warn(message: string | Error)</code>",id:"thiswarnmessage-string--error",level:3},{value:"<code>this.error(message: string | Error, options?: {code?: string, exit?: number, ref?: string; suggestions?: string[];})</code>",id:"thiserrormessage-string--error-options-code-string-exit-number-ref-string-suggestions-string",level:3},{value:"<code>this.exit(code: number = 0)</code>",id:"thisexitcode-number--0",level:3},{value:"<code>this.logToStderr(message: string)</code>",id:"thislogtostderrmessage-string",level:3},{value:"<code>this.jsonEnabled()</code>",id:"thisjsonenabled",level:3},{value:"<code>this.toSuccessJson(result: unknown)</code>",id:"thistosuccessjsonresult-unknown",level:3},{value:"<code>this.toErrorJson(result: unknown)</code>",id:"thistoerrorjsonresult-unknown",level:3}],p={toc:c},u="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A basic command looks like the following in TypeScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Command} from '@oclif/core'\n\nexport class MyCommand extends Command {\n  static description = 'description of this example command'\n\n  async run(): Promise<void> {\n    console.log('running my command')\n  }\n}\n")),(0,a.kt)("p",null,"The only part that is required is the run function. Accept user input with ",(0,a.kt)("a",{parentName:"p",href:"/docs/args"},"arguments")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/flags"},"flags"),"."),(0,a.kt)("p",null,"In JavaScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const {Command} = require('@oclif/core')\n\nclass MyCommand extends Command {\n  async run() {\n    console.log('running my command')\n  }\n}\n\nMyCommand.description = 'description of this example command'\n\nmodule.exports = MyCommand\n")),(0,a.kt)("p",null,"Note that the following examples will be in TypeScript. As JavaScript does not yet have static class properties, you will have to add them to the class after it is declared like we did with the description above."),(0,a.kt)("h3",{id:"avoiding-timeouts"},"Avoiding Timeouts"),(0,a.kt)("p",null,"In order to avoid command executions running indefinitely, oclif will terminate the node process 10 seconds after ",(0,a.kt)("inlineCode",{parentName:"p"},"Command.run")," resolves. This means that all command logic inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method should either run synchronously or should return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),". This will allow the entire command to run before the 10 second timeout starts."),(0,a.kt)("p",null,"In other words, ",(0,a.kt)("strong",{parentName:"p"},"if you execute a promise in ",(0,a.kt)("inlineCode",{parentName:"strong"},"Command.run")," without a awaiting it, then the command will likely timeout before it's completed.")),(0,a.kt)("h3",{id:"other-command-options"},"Other Command Options"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/core/blob/main/src/command.ts"},"See the base class to get an idea of what methods can be called on a command"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Command, Flags} from '@oclif/core'\n\nexport class MyCommand extends Command {\n  static summary = 'A brief overview of your command.'\n  static description = `\nAn in-depth description of the command.\nIt can be multiline.\n`\n\n  // hide the command from help\n  static hidden = false\n\n  // custom usage string for help\n  // this overrides the default usage\n  static usage = 'mycommand --myflag'\n\n  // examples to add to help\n  // <%= config.bin %> resolves to the executable name\n  // <%= command.id %> resolves to the command name\n  static examples = [\n    // Examples can be simple strings\n    '<%= config.bin %> <%= command.id %> --help',\n    // Or objects that provide a description of the example command\n    {\n      description: 'Force the command to execute',\n      command: '<%= config.bin %> <%= command.id %> --force',\n    }\n  ]\n\n  // this makes the parser not fail when it receives invalid arguments\n  // defaults to true\n  // set it to false if you need to accept a variable number of arguments\n  static strict = false\n\n  // define aliases that can execute this command.\n  static aliases = ['alternate:name:for:this:command']\n\n  // Set to true if you want to add the --json flag to your command.\n  // oclif will automatically suppress logs (if you use this.log, this.warn, or this.error) and\n  // display the JSON returned by the command's run method.\n  static enableJsonFlag = true\n\n  async run() {\n    // show a warning\n    this.warn('uh oh!')\n    // exit with an error message\n    this.error('uh oh!!!')\n    // exit with status code\n    this.exit(1)\n  }\n}\n")),(0,a.kt)("h2",{id:"command-methods"},"Command Methods"),(0,a.kt)("p",null,"<AUTOGENERATED_TABLE_OF_CONTENTS>"),(0,a.kt)("p",null,"The following assumes you are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"run()")," method of an oclif ",(0,a.kt)("a",{parentName:"p",href:"/docs/commands"},"command"),"."),(0,a.kt)("h3",{id:"thislogmessage-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"this.log(message: string)")),(0,a.kt)("p",null,"Output message to stdout (non-blocking). ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," works fine too, but that is a blocking call and won't be automatically suppressed when the ",(0,a.kt)("inlineCode",{parentName:"p"},"--json")," flag is present. This uses ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/util.html#util_util_format_format_args"},"util.format()")," which behaves the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"this.log('hello, world!')\n")),(0,a.kt)("h3",{id:"thiswarnmessage-string--error"},(0,a.kt)("inlineCode",{parentName:"h3"},"this.warn(message: string | Error)")),(0,a.kt)("p",null,"Display an error or message as a warning"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"this.warn('uh oh!')\nthis.warn(new Error('uh oh!'))\n")),(0,a.kt)("h3",{id:"thiserrormessage-string--error-options-code-string-exit-number-ref-string-suggestions-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"this.error(message: string | Error, options?: {code?: string, exit?: number, ref?: string; suggestions?: string[];})")),(0,a.kt)("p",null,"Display error and exit. Also add a code to error object or exit status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"this.error('uh oh!', {exit: 2})\nthis.error(new Error('uh oh!'))\n")),(0,a.kt)("p",null,"The options object has the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exit")," \u2014 exit code to use"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"code")," \u2014 a unique error code for the type of error"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"suggestions")," \u2014  an array of suggestions for a user to try next that may be useful or provide additional context"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ref")," \u2014 a url to documentation related to this error or fixing it")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"suggestions"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," properties will be displayed when an error is shown. Reusable ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," classes can be created that display the optional outputs above by implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrettyPrintableError")," interface from @oclif/errors and ",(0,a.kt)("inlineCode",{parentName:"p"},"this.error")," will handle them appropriately."),(0,a.kt)("p",null,"Note: You may need to install the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"@oclif/core")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@oclif/errors")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"suggestions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," to be displayed."),(0,a.kt)("p",null,"These errors are friendly and won't show a traceback unless debugging is enabled with ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG=*")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"CLI_NAME_DEBUG=1"),". If you want to raise errors like this outside of a command, use ",(0,a.kt)("inlineCode",{parentName:"p"},"@oclif/errors"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {CLIError} from '@oclif/errors'\n\nthrow new CLIError('my friendly error')\n")),(0,a.kt)("p",null,"Any error caught by the command of this ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIError")," type will be shown without traceback."),(0,a.kt)("h3",{id:"thisexitcode-number--0"},(0,a.kt)("inlineCode",{parentName:"h3"},"this.exit(code: number = 0)")),(0,a.kt)("p",null,"Exit process. Defaults to status 0."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"this.exit()\nthis.exit(1)\n")),(0,a.kt)("h3",{id:"thislogtostderrmessage-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"this.logToStderr(message: string)")),(0,a.kt)("p",null,"Log a message to the terminal's ",(0,a.kt)("inlineCode",{parentName:"p"},"stderr"),"."),(0,a.kt)("h3",{id:"thisjsonenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"this.jsonEnabled()")),(0,a.kt)("p",null,"Returns to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,a.kt)("inlineCode",{parentName:"p"},"--json")," flag is present and ",(0,a.kt)("inlineCode",{parentName:"p"},"enableJsonFlag")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("h3",{id:"thistosuccessjsonresult-unknown"},(0,a.kt)("inlineCode",{parentName:"h3"},"this.toSuccessJson(result: unknown)")),(0,a.kt)("p",null,"Modify the command's success JSON output before it's displayed to the user."),(0,a.kt)("h3",{id:"thistoerrorjsonresult-unknown"},(0,a.kt)("inlineCode",{parentName:"h3"},"this.toErrorJson(result: unknown)")),(0,a.kt)("p",null,"Modify the command's error JSON output before it's displayed to the user."))}h.isMDXComponent=!0}}]);