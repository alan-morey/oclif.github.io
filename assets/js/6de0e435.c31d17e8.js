"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Customizing Help in oclif"},p=void 0,s={permalink:"/blog/2020/05/05/introducing-custom-help-classes",source:"@site/blog/2020-05-05-introducing-custom-help-classes.md",title:"Customizing Help in oclif",description:"Out of the box oclif provides a great help experience for CLIs.",date:"2020-05-05T00:00:00.000Z",formattedDate:"May 5, 2020",tags:[],readingTime:1.67,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Customizing Help in oclif"},prevItem:{title:"Pretty Printable Errors",permalink:"/blog/2020/07/01/pretty-printable-errors"},nextItem:{title:"oclif TSLint to ESLint Migration",permalink:"/blog/2019/12/05/oclif-eslint-migration"}},c={authorsImageUrls:[]},u=[{value:"Getting started with custom help",id:"getting-started-with-custom-help",level:2},{value:"Separating TOPICS &amp; COMMANDS in the new deafult <code>Help</code> class",id:"separating-topics--commands-in-the-new-deafult-help-class",level:2}],h={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Out of the box oclif provides a great help experience for CLIs."),(0,o.kt)("p",null,"But what if, as an oclif developer, you want to customize some or all of the output?"),(0,o.kt)("p",null,"You can now customize your CLI's help output by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"HelpBase")," abstract class."),(0,o.kt)("h2",{id:"getting-started-with-custom-help"},"Getting started with custom help"),(0,o.kt)("p",null,"If you have not done so yet, update ",(0,o.kt)("inlineCode",{parentName:"p"},"@oclif/core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn add --latest @oclif/core\n")),(0,o.kt)("p",null,"To get started, first define the filepath to your help class in oclif's config in package.json. This is a relative path to the help class, without a file extension."),(0,o.kt)("p",null,'For this example, the help class will be created in a file at "',"[project root]",'/src/help.ts".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  // ...\n  "oclif": {\n    "helpClass": "./lib/help"\n    // ...\n  }\n  // ...\n}\n')),(0,o.kt)("p",null,"From here there are two paths, implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"HelpBase")," abstract class yourself or overwrite the parts of the default ",(0,o.kt)("inlineCode",{parentName:"p"},"Help")," class you want to customize (ex: how command usage is displayed). We recommend the latter approach but cover both in the new ",(0,o.kt)("a",{parentName:"p",href:"../../../../docs/help_classes"},"Help Classes docs"),"."),(0,o.kt)("h2",{id:"separating-topics--commands-in-the-new-deafult-help-class"},"Separating TOPICS & COMMANDS in the new deafult ",(0,o.kt)("inlineCode",{parentName:"h2"},"Help")," class"),(0,o.kt)("p",null,'Previously, topics and child commands were listed in help output under a single list heading called "COMMANDS". But we found this can be slightly confusing. Some topics are commands also (a.k.a. topic-commands) while others are simply organizational namespacing (and when ran just show their help).'),(0,o.kt)("p",null,"The new default ",(0,o.kt)("inlineCode",{parentName:"p"},"Help"),' class splits the list of children into distinct lists of "TOPICS" and "COMMANDS", with the possibility of an item appearing in both if it a topic-command. This makes it clearer what is expected to be ran - "COMMANDS" - and what is providing structure - "TOPICS" - when looking at the help output.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"VERSION\n  plugin-help-example/0.0.0 darwin-x64 node-v12.12.0\n\nUSAGE\n  $ plugin-help-example [COMMAND]\n\nTOPICS\n  topic  this is a topic and has child topics or commands\n\nCOMMANDS\n  hello  describe the command here\n  help   display help for plugin-help-example\n")),(0,o.kt)("p",null,"We look forward to seeing what custom help features you implement in your oclif CLIs with this new feature!"))}d.isMDXComponent=!0}}]);