"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],l={title:"oclif TSLint to ESLint Migration"},s=void 0,p={permalink:"/blog/2019/12/05/oclif-eslint-migration",source:"@site/blog/2019-12-05-oclif-eslint-migration.md",title:"oclif TSLint to ESLint Migration",description:"Back in February of this year, plans were announced to deprecate TSLint in favor of ESLint. TSLint's goal has become to work toward a \u201cunified developer experience\u201d by supporting ESLint development going forward.",date:"2019-12-05T00:00:00.000Z",formattedDate:"December 5, 2019",tags:[],readingTime:2.18,hasTruncateMarker:!1,authors:[],frontMatter:{title:"oclif TSLint to ESLint Migration"},prevItem:{title:"Customizing Help in oclif",permalink:"/blog/2020/05/05/introducing-custom-help-classes"},nextItem:{title:"oclif's Current Node Support",permalink:"/blog/2019/10/31/oclif-node-updates"}},c={authorsImageUrls:[]},u=[{value:"What has changed in oclif",id:"what-has-changed-in-oclif",level:2},{value:"How does this affect you",id:"how-does-this-affect-you",level:2},{value:"When will this take effect",id:"when-will-this-take-effect",level:2}],f={toc:u},d="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)(d,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Back in February of this year, plans were announced to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/palantir/tslint/issues/4534"},"deprecate TSLint")," in favor of ESLint. TSLint's goal has become to work toward a \u201cunified developer experience\u201d by supporting ESLint development going forward."),(0,a.kt)("h2",{id:"what-has-changed-in-oclif"},"What has changed in oclif"),(0,a.kt)("p",null,"To keep inline with the community, oclif has transitioned to ESLint for all our core libraries as well as all our official plugins."),(0,a.kt)("p",null,"Starting in v1.15.x, oclif will now optionally generate projects with ESLint for both TypeScript and JavaScript CLI\u2019s."),(0,a.kt)("p",null,"ESLint does require Node to be on stable LTS version, at the time of writing, Node 8.10.x, Node 10.13.x & Node 12.x.x."),(0,a.kt)("h2",{id:"how-does-this-affect-you"},"How does this affect you"),(0,a.kt)("p",null,"Existing CLI\u2019s are unchanged, but any newly generated CLI's will only give the option of using ESLint. If you are running tslint in your CLI, we recommend you switch to ESLint as well."),(0,a.kt)("p",null,"In migrating our projects we took the following steps (for an example of these changes see this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/githubcli/pull/10"},"pull request"),")."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install eslint"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$ yarn add eslint eslint-config-oclif eslint-config-oclif-typescript --dev"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add eslint related files"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ echo \'{\n  "extends": [\n    "oclif",\n    "oclif-typescript"\n  ],\n  "rules": {\n  }\n}\' > .eslintrc\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove tslint and related packages"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$ yarn remove @oclif/tslint tslint"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove tslint related configuration files"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"$ rm tslint.json"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change lint script in our package.json from something like:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'"lint": "tsc -p test --noEmit && tslint -p test -t stylish"')),(0,a.kt)("p",{parentName:"li"},"to"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'"lint": "eslint . --ext .ts --config .eslintrc"')))),(0,a.kt)("p",null,"To preserve the test compile (tsc -p test --noEmit) we also made the following updates to our scripts:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"pretest": "tsc -p test --noEmit"')),(0,a.kt)("p",null,"In some cases we had our posttest duplicating the same steps as our lint script so it\u2019s cleaner to have it reference the lint job directly with:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"posttest": "yarn lint"')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn lint --fix"),". This attempts to auto-fix any linting violations automatically. In the case an auto-fix isn\u2019t available it should be fixed manually or ignored (see the ",(0,a.kt)("a",{parentName:"li",href:"https://eslint.org/docs/user-guide/configuring"},"eslint configuration doc")," for more information) "),(0,a.kt)("li",{parentName:"ol"},"Do a search in the codebase for ",(0,a.kt)("inlineCode",{parentName:"li"},"tslint")," and remove any unnecessary tslint disabling comments, like: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/* tslint:disable:object-literal-sort-keys */\n")),(0,a.kt)("p",null,"If you are on a version of Node that is not supported by ESLint, you will also need to update your Node engine. ESLint supports Node 8, 10, and 12 so you should upgrade to the most recent Node version compatible with your CLI and also supported by ESLint (see ESLint's ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint#installation-and-usage"},"Installation and Usage")," instructions)."),(0,a.kt)("h2",{id:"when-will-this-take-effect"},"When will this take effect"),(0,a.kt)("p",null,"These changes have taken effect in oclif v1.15.1. When you generate a new CLI or plugin it will now contain configuration for ESLint instead of TSLint."))}m.isMDXComponent=!0}}]);