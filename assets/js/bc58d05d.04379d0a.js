/*! For license information please see bc58d05d.04379d0a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62283],{78117:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(85893),t=n(11151);const s={sidebar_label:"Frame.evaluateHandle"},l="Frame.evaluateHandle() method",i={id:"api/puppeteer.frame.evaluatehandle",title:"Frame.evaluateHandle() method",description:"Behaves identically to Page.evaluateHandle() except it's run within the context of this frame.",source:"@site/versioned_docs/version-22.12.1/api/puppeteer.frame.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.frame.evaluatehandle",permalink:"/api/puppeteer.frame.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"22.12.1",frontMatter:{sidebar_label:"Frame.evaluateHandle"},sidebar:"api",previous:{title:"Frame.evaluate",permalink:"/api/puppeteer.frame.evaluate"},next:{title:"Frame.focus",permalink:"/api/puppeteer.frame.focus"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"frameevaluatehandle-method",children:"Frame.evaluateHandle() method"}),"\n",(0,r.jsxs)(a.p,{children:["Behaves identically to ",(0,r.jsx)(a.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," except it's run within the context of this frame."]}),"\n",(0,r.jsxs)(a.p,{children:["See ",(0,r.jsx)(a.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," for details."]}),"\n",(0,r.jsx)(a.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-typescript",children:"class Frame {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(a.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(a.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(a.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(a.p,{children:"pageFunction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(a.p,{children:"Func | string"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(a.p,{children:"args"})}),(0,r.jsx)("td",{children:(0,r.jsx)(a.p,{children:"Params"})}),(0,r.jsx)("td",{})]})]})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(a.p,{children:["Promise<",(0,r.jsx)(a.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]})]})}function o(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,a,n)=>{var r=n(67294),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,n){var r,s={},c=null,p=null;for(r in void 0!==n&&(c=""+n),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(p=a.ref),a)l.call(a,r)&&!d.hasOwnProperty(r)&&(s[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:t,type:e,key:c,ref:p,props:s,_owner:i.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},85893:(e,a,n)=>{e.exports=n(75251)},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>l});var r=n(67294);const t={},s=r.createContext(t);function l(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);