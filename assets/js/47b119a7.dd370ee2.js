/*! For license information please see 47b119a7.dd370ee2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40048],{74812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var s=t(85893),r=t(11151);const o={sidebar_label:"Mouse.wheel"},i="Mouse.wheel() method",l={id:"api/puppeteer.mouse.wheel",title:"Mouse.wheel() method",description:"Dispatches a mousewheel event.",source:"@site/versioned_docs/version-22.12.1/api/puppeteer.mouse.wheel.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.wheel",permalink:"/api/puppeteer.mouse.wheel",draft:!1,unlisted:!1,tags:[],version:"22.12.1",frontMatter:{sidebar_label:"Mouse.wheel"},sidebar:"api",previous:{title:"Mouse.up",permalink:"/api/puppeteer.mouse.up"},next:{title:"Touchscreen",permalink:"/api/puppeteer.touchscreen"}},a={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mousewheel-method",children:"Mouse.wheel() method"}),"\n",(0,s.jsxs)(n.p,{children:["Dispatches a ",(0,s.jsx)(n.code,{children:"mousewheel"})," event."]}),"\n",(0,s.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Mouse {\n  abstract wheel(options?: Readonly<MouseWheelOptions>): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Readonly<",(0,s.jsx)(n.a,{href:"/api/puppeteer.mousewheeloptions",children:"MouseWheelOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"(Optional)"})," Optional: ",(0,s.jsx)(n.code,{children:"MouseWheelOptions"}),"."]})})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"An example of zooming into an element:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page.goto(\n  'https://mdn.mozillademos.org/en-US/docs/Web/API/Element/wheel_event$samples/Scaling_an_element_via_the_wheel?revision=1587366'\n);\n\nconst elem = await page.$('div');\nconst boundingBox = await elem.boundingBox();\nawait page.mouse.move(\n  boundingBox.x + boundingBox.width / 2,\n  boundingBox.y + boundingBox.height / 2\n);\n\nawait page.mouse.wheel({deltaY: -100});\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var s=t(67294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var s,o={},p=null,d=null;for(s in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:p,ref:d,props:o,_owner:l.current}}n.Fragment=o,n.jsx=p,n.jsxs=p},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);