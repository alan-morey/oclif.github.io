"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[218],{9829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(4848),s=n(8453);const i={title:"Testing",description:"How to test your CLI"},c=void 0,r={id:"testing",title:"Testing",description:"How to test your CLI",source:"@site/../docs/testing.md",sourceDirName:".",slug:"/testing",permalink:"/docs/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/testing.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1721856187e3,frontMatter:{title:"Testing",description:"How to test your CLI"},sidebar:"docs",previous:{title:"Single Command CLI",permalink:"/docs/single_command_cli"},next:{title:"Themes",permalink:"/docs/themes"}},a={},l=[{value:"Code Coverage",id:"code-coverage",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Testing in oclif can be done with any testing framework. You can run commands with ",(0,o.jsx)(t.code,{children:"MyCommand.run()"})," which returns a promise you can wait on."]}),"\n",(0,o.jsxs)(t.p,{children:["There are common tasks however when writing CLI tools. For this, we have ",(0,o.jsx)(t.a,{href:"https://github.com/oclif/test",children:"@oclif/test"}),", which provides a ",(0,o.jsx)(t.a,{href:"https://github.com/oclif/test?tab=readme-ov-file#usage",children:"conventional set of utilities"})," that we find useful for testing oclif CLIs."]}),"\n",(0,o.jsxs)(t.p,{children:["Any CLI built with oclif will come preloaded with ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/mocha",children:"mocha"})," (our preferred testing framework but you're free to use whatever you prefer) and ",(0,o.jsx)(t.a,{href:"https://github.com/oclif/test",children:"@oclif/test"})," as well as an example test that should work out of the box with ",(0,o.jsx)(t.code,{children:"npm test"})," or ",(0,o.jsx)(t.code,{children:"yarn test"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["As an example, let's look at this ",(0,o.jsx)(t.code,{children:"whoami"})," command which makes an API call to get the current logged in user. If the user is not logged in, it exits with status 100."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"src/commands/whoami.ts"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import {Command} from '@oclif/core'\n\nexport class Whoami extends Command {\n  async run() {\n    try {\n      let {body: account} = await this.api.get('/account')\n      this.log(account.email)\n    } catch (err) {\n      if (err.statusCode === 401) {\n        this.error('not logged in', {exit: 100})\n      }\n      throw err\n    }\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Another common tool we like to use in testing oclif CLIs is ",(0,o.jsx)(t.a,{href:"https://github.com/node-nock/nock",children:"nock"}),". Install the ",(0,o.jsx)(t.code,{children:"nock"})," package as a devDependency."]}),"\n",(0,o.jsx)(t.p,{children:"Here is the test code"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"test/commands/whoami.test.ts"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"import {runCommand} from '@oclif/test'\nimport {expect} from 'chai'\nimport nock from 'nock'\n\ndescribe('whoami', () => {\n  it('shows user email when logged in', async () => {\n    nock('https://api.example.com')\n      .get('/account')\n      // user is logged in, return their name\n      .reply(200, {email: 'jeff@example.com'})\n\n    const {stdout} = await runCommand('whoami')\n    expect(stdout).to.equal('jeff@example.com')\n  })\n\n  it('exits with status 100 when not logged in', async () => {\n    nock('https://api.example.com')\n      .get('/account')\n      // HTTP 401 means the user is not logged in with valid credentials\n      .reply(401)\n\n    const {error} = await runCommand('whoami')\n    expect(error?.oclif?.exit).to.equal(100)\n  })\n})\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For more on how to test with oclif, check out the docs for ",(0,o.jsx)(t.a,{href:"https://github.com/oclif/test",children:"@oclif/test"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"code-coverage",children:"Code Coverage"}),"\n",(0,o.jsxs)(t.p,{children:["Code coverage is provided automatically for JavaScript and TypeScript projects via ",(0,o.jsx)(t.a,{href:"https://npm.im/nyc",children:"nyc"}),". Just run ",(0,o.jsx)(t.code,{children:"yarn test"})," and it will show the code coverage. The coverage can optionally be sent to ",(0,o.jsx)(t.a,{href:"https://codecov.io",children:"codecov"})," in the CI scripts as well."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var o=n(6540);const s={},i=o.createContext(s);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);