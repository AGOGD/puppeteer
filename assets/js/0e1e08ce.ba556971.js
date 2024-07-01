/*! For license information please see 0e1e08ce.ba556971.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53225],{14169:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=t(85893),n=t(11151);const o={sidebar_label:"HTTPResponse.buffer"},p="HTTPResponse.buffer() method",i={id:"api/puppeteer.httpresponse.buffer",title:"HTTPResponse.buffer() method",description:"Promise which resolves to a buffer with response body.",source:"@site/versioned_docs/version-22.12.1/api/puppeteer.httpresponse.buffer.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.buffer",permalink:"/api/puppeteer.httpresponse.buffer",draft:!1,unlisted:!1,tags:[],version:"22.12.1",frontMatter:{sidebar_label:"HTTPResponse.buffer"},sidebar:"api",previous:{title:"HTTPResponse",permalink:"/api/puppeteer.httpresponse"},next:{title:"HTTPResponse.frame",permalink:"/api/puppeteer.httpresponse.frame"}},a={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"httpresponsebuffer-method",children:"HTTPResponse.buffer() method"}),"\n",(0,s.jsx)(r.p,{children:"Promise which resolves to a buffer with response body."}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class HTTPResponse {\n  abstract buffer(): Promise<Buffer>;\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<Buffer>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["The buffer might be re-encoded by the browser based on HTTP-headers or other heuristics. If the browser failed to detect the correct encoding, the buffer might be encoded incorrectly. See ",(0,s.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues/6478",children:"https://github.com/puppeteer/puppeteer/issues/6478"}),"."]})]})}function f(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var s,o={},u=null,c=null;for(s in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)p.call(r,s)&&!a.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:u,ref:c,props:o,_owner:i.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>p});var s=t(67294);const n={},o=s.createContext(n);function p(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:p(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);