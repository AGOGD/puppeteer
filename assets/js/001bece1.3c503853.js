/*! For license information please see 001bece1.3c503853.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47663],{11683:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=t(85893),o=t(11151);const s={sidebar_label:"Browser.wsEndpoint"},i="Browser.wsEndpoint() method",p={id:"api/puppeteer.browser.wsendpoint",title:"Browser.wsEndpoint() method",description:"Gets the WebSocket URL to connect to this browser.",source:"@site/versioned_docs/version-22.12.1/api/puppeteer.browser.wsendpoint.md",sourceDirName:"api",slug:"/api/puppeteer.browser.wsendpoint",permalink:"/api/puppeteer.browser.wsendpoint",draft:!1,unlisted:!1,tags:[],version:"22.12.1",frontMatter:{sidebar_label:"Browser.wsEndpoint"},sidebar:"api",previous:{title:"Browser.waitForTarget",permalink:"/api/puppeteer.browser.waitfortarget"},next:{title:"BrowserContext",permalink:"/api/puppeteer.browsercontext"}},a={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"browserwsendpoint-method",children:"Browser.wsEndpoint() method"}),"\n",(0,n.jsxs)(r.p,{children:["Gets the WebSocket URL to connect to this ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["This is usually used with ",(0,n.jsx)(r.a,{href:"/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["You can find the debugger URL (",(0,n.jsx)(r.code,{children:"webSocketDebuggerUrl"}),") from ",(0,n.jsx)(r.code,{children:"http://HOST:PORT/json/version"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target",children:"browser endpoint"})," for more information."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Browser {\n  abstract wsEndpoint(): string;\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"string"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["The format is always ",(0,n.jsx)(r.code,{children:"ws://HOST:PORT/devtools/browser/<id>"}),"."]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var n=t(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,s={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:p.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>i});var n=t(67294);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);