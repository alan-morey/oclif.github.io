"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={title:"NSIS Installer Customization"},l=void 0,c={unversionedId:"nsis-installer_customization",id:"nsis-installer_customization",title:"NSIS Installer Customization",description:"Sometimes you need to verify some dependencies, ensure there are no conflicting CLIs installed, or do some other custom logic before installing your CLI. For npm-scenarios, simply specify a preinstall script. But Windows installers don't include this script. You must instead write your own nsis modification to do these checks. See where this custom script gets placed in the installer in the oclif/oclif repo.",source:"@site/../docs/nsis-installer_customization.md",sourceDirName:".",slug:"/nsis-installer_customization",permalink:"/docs/nsis-installer_customization",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/nsis-installer_customization.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1700511571,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{title:"NSIS Installer Customization"},sidebar:"docs",previous:{title:"Aliases",permalink:"/docs/aliases"},next:{title:"Custom Base Class",permalink:"/docs/base_class"}},p={},u=[],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you need to verify some dependencies, ensure there are no conflicting CLIs installed, or do some other custom logic before installing your CLI. For npm-scenarios, simply specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"preinstall")," script. But Windows installers don't include this script. You must instead write your own nsis modification to do these checks. See where this custom script gets placed in the installer in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oclif/oclif/blob/b8d76af9290716ef69d8d1026f98041268306dfd/src/commands/pack/win.ts#L60"},"oclif/oclif")," repo. "),(0,o.kt)("p",null,"See how ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/salesforcecli/cli"},"Salesforce CLI")," did this to prevent their new major version being installed on top of an older, and incompatible, version. In that ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", they specified an nsis installer like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "name": "mycli",\n  "version": "0.0.0",\n  "description": "My CLI",\n  "main": "bin/run",\n  "bin": "./bin/run",\n  "oclif": {\n    "nsisCustomization": "scripts/nsis.nsi"\n  }\n}\n')),(0,o.kt)("p",null,"And then their custom script was loaded into the installer during the packing phase of the CLI."))}f.isMDXComponent=!0}}]);