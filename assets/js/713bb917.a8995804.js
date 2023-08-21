"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[187],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),o=["components"],r={title:"Release"},s=void 0,p={unversionedId:"releasing",id:"releasing",title:"Release",description:"There are 2 main strategies for releasing oclif CLIs: npm and standalone tarballs. You can publish to one or both.",source:"@site/../docs/releasing.md",sourceDirName:".",slug:"/releasing",permalink:"/docs/releasing",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/releasing.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1692630658,formattedLastUpdatedAt:"Aug 21, 2023",frontMatter:{title:"Release"},sidebar:"docs",previous:{title:"JSON",permalink:"/docs/json"},next:{title:"Testing",permalink:"/docs/testing"}},d={},u=[{value:"npm",id:"npm",level:2},{value:"Standalone tarballs",id:"standalone-tarballs",level:2},{value:"Brew",id:"brew",level:2},{value:"Autoupdater",id:"autoupdater",level:2},{value:"Autoupdate Channels",id:"autoupdate-channels",level:2},{value:"Windows installer",id:"windows-installer",level:2},{value:"macOS installer",id:"macos-installer",level:2},{value:"Ubuntu/Debian packages",id:"ubuntudebian-packages",level:2},{value:"Snapcraft",id:"snapcraft",level:2}],c={toc:u},h="wrapper";function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are 2 main strategies for releasing oclif CLIs: npm and standalone tarballs. You can publish to one or both."),(0,l.kt)("h2",{id:"npm"},"npm"),(0,l.kt)("p",null,"Just use ",(0,l.kt)("inlineCode",{parentName:"p"},"npm publish")," like any other npm project. This includes a ",(0,l.kt)("inlineCode",{parentName:"p"},"run.cmd")," script that will automatically be used for Windows users."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ npm version (major|minor|patch) # bumps version, updates README, adds git tag\n$ npm publish\n$ npm install -g mynewcli\n$ mynewcli\n# OR\n$ npx mynewcli\n")),(0,l.kt)("p",null,"You'll need to ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/signup"},"register with npm")," and have verified your email address in order to publish."),(0,l.kt)("p",null,"This workflow can be improved slightly by running ",(0,l.kt)("inlineCode",{parentName:"p"},"npm version major|minor|patch")," before publishing which will create a git tag and bump the version automatically."),(0,l.kt)("h2",{id:"standalone-tarballs"},"Standalone tarballs"),(0,l.kt)("p",null,"Build standalone tarballs with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif pack tarballs")," from the root of your CLI. These include the node binary so the user does not have to already have node installed to use the CLI. It won't put this node binary on the PATH so the binary will not conflict with any node installation on the machine."),(0,l.kt)("p",null,"To publish, you can copy the files from ",(0,l.kt)("inlineCode",{parentName:"p"},"./dist")," or use ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif upload tarballs")," to copy the files to S3. You'll need to set ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif.update.s3.bucket")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," to a valid S3 bucket and have credentials set in ",(0,l.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," environment vars."),(0,l.kt)("p",null,"After you've uploaded the tarballs to S3, you can promote the tarballs to a release channel within S3 using ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif promote"),". This allows you to quickly promote and demote a specific version between release channels. For example, the Salesforce CLI has separate ",(0,l.kt)("inlineCode",{parentName:"p"},"stable")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stable-rc")," channels that are updated weekly."),(0,l.kt)("h2",{id:"brew"},"Brew"),(0,l.kt)("p",null,"Your formula can be distributed through Brew. The main caveat is you must set the ",(0,l.kt)("inlineCode",{parentName:"p"},"CLIENT_HOME")," variable when you ship, otherwise it will break the update cycle. An example of this can be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/heroku/homebrew-brew/blob/master/Formula/heroku.rb#L9"},"heroku cli formula"),". By exporting a variable of the form ",(0,l.kt)("inlineCode",{parentName:"p"},"CLI_NAME_OCLIF_CLIENT_HOME")," (where ",(0,l.kt)("inlineCode",{parentName:"p"},"CLI_NAME")," is the name of your CLI), you force the update mechanism to look at the brew install location instead of the default (which is ",(0,l.kt)("inlineCode",{parentName:"p"},"$XDG_DATA_HOME/.local/share/package_name/client"),")."),(0,l.kt)("h2",{id:"autoupdater"},"Autoupdater"),(0,l.kt)("p",null,"These tarballs as well as the installers below can be made autoupdatable by adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"@oclif/plugin-update")," plugin. Just add this plugin and the CLI will autoupdate in the background or when ",(0,l.kt)("inlineCode",{parentName:"p"},"mycli update")," is run."),(0,l.kt)("p",null,"If you don't want to use S3, you can still run ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif pack")," and it will build tarballs. To get the updater to work, set ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif.update.s3.host")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," to a host that has the files built in ",(0,l.kt)("inlineCode",{parentName:"p"},"./dist")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif pack"),". This host does not need to be an S3 host. To customize the URL paths, see the S3 templates in ",(0,l.kt)("inlineCode",{parentName:"p"},"@oclif/core"),"."),(0,l.kt)("h2",{id:"autoupdate-channels"},"Autoupdate Channels"),(0,l.kt)("p",null,"You can have separate channels for releases that work like Google Chrome Channels (such as beta, dev, canary). To create a channel, just change the version in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0-beta"),' (where "beta" is any string you like). Then when you pack with ',(0,l.kt)("inlineCode",{parentName:"p"},"oclif pack"),", it will create beta tarballs. The user can change their channel with ",(0,l.kt)("inlineCode",{parentName:"p"},"mycli update beta")," and will receive all the future releases on that channel."),(0,l.kt)("p",null,"In the Heroku CLI, we have it automatically build and release the beta channel on every commit to the master branch. Then we have it build and release stable channel whenever a git tag is created in our CI."),(0,l.kt)("h2",{id:"windows-installer"},"Windows installer"),(0,l.kt)("p",null,"Build a windows installer with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif pack win"),". It will build into ",(0,l.kt)("inlineCode",{parentName:"p"},"./dist/win"),". This can be uploaded to S3 with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif upload win")," and promoted within S3 with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif promote --win"),"."),(0,l.kt)("h2",{id:"macos-installer"},"macOS installer"),(0,l.kt)("p",null,"Build a macOS .pkg installer with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif pack macos"),". It will build into ",(0,l.kt)("inlineCode",{parentName:"p"},"./dist/macos"),". This can be uploaded to S3 with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif upload macos")," and promoted within S3 with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif promote --macos"),". You need to set the macOS identifier at ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif.macos.identifier")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),' (we use "com.heroku.cli" and "com.salesforce.cli" as the identifiers for the Heroku CLI and the Salesforce CLI, respectively).'),(0,l.kt)("p",null,"To ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/developer-id/"},"sign the installer"),", set ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif.macos.sign")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),' to a certificate (For the Heroku CLI this is "Developer ID Installer: Heroku INC"). And optionally set the keychain with ',(0,l.kt)("inlineCode",{parentName:"p"},"OSX_KEYCHAIN"),"."),(0,l.kt)("h2",{id:"ubuntudebian-packages"},"Ubuntu/Debian packages"),(0,l.kt)("p",null,"Build a deb package with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif pack deb"),". Set the ",(0,l.kt)("inlineCode",{parentName:"p"},"MYCLI_DEB_KEY")," to a gpg key id to create the gpg files. This will include all the files needed for an apt repository in ",(0,l.kt)("inlineCode",{parentName:"p"},"./dist/deb"),". They can be uploaded to S3 with ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif upload deb")," and promoted within S3 using ",(0,l.kt)("inlineCode",{parentName:"p"},"oclif promote --deb"),"."),(0,l.kt)("p",null,"Once it's published to S3, users can install with the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh-session"},'$ wget -qO- https://mys3bucket.s3.amazonaws.com/apt/release.key | apt-key add - # you will need to upload this file manually\n$ sudo echo "deb https://mys3bucket.s3.amazonaws.com/apt ./" > /etc/apt/sources.list.d/mycli.list\n$ sudo apt update\n$ sudo apt install -y mycli\n')),(0,l.kt)("p",null,"This can be placed in a ",(0,l.kt)("a",{parentName:"p",href:"https://cli-assets.heroku.com/install-ubuntu.sh"},"script")," for users to install with ",(0,l.kt)("inlineCode",{parentName:"p"},"curl https://pathto/myscript | sh"),"."),(0,l.kt)("p",null,"These will not autoupdate as Ubuntu already has a reliable way for users to update their package."),(0,l.kt)("h2",{id:"snapcraft"},"Snapcraft"),(0,l.kt)("p",null,"Snap is a great way to distribute Linux CLIs and comes built into Ubuntu 16+. The Heroku CLI's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/heroku/cli/blob/master/snap/snapcraft.yaml"},"snapcraft.yml")," file can be easily modified to work with any oclif CLI."))}m.isMDXComponent=!0}}]);