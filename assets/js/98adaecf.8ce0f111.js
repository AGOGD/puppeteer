/*! For license information please see 98adaecf.8ce0f111.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54871],{28411:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=r(85893),i=r(11151);const t={sidebar_label:"Page.metrics"},a="Page.metrics() method",c={id:"api/puppeteer.page.metrics",title:"Page.metrics() method",description:"Object containing metrics as key/value pairs.",source:"@site/../docs/api/puppeteer.page.metrics.md",sourceDirName:"api",slug:"/api/puppeteer.page.metrics",permalink:"/next/api/puppeteer.page.metrics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.metrics"},sidebar:"api",previous:{title:"Page.mainFrame",permalink:"/next/api/puppeteer.page.mainframe"},next:{title:"Page.pdf",permalink:"/next/api/puppeteer.page.pdf"}},l={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pagemetrics-method",children:"Page.metrics() method"}),"\n",(0,s.jsx)(n.p,{children:"Object containing metrics as key/value pairs."}),"\n",(0,s.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract metrics(): Promise<Metrics>;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.p,{children:["Promise<",(0,s.jsx)(n.a,{href:"/next/api/puppeteer.metrics",children:"Metrics"}),">"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Timestamp"})," : The timestamp when the metrics sample was taken."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Documents"})," : Number of documents in the page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Frames"})," : Number of frames in the page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"JSEventListeners"})," : Number of events in the page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Nodes"})," : Number of DOM nodes in the page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LayoutCount"})," : Total number of full or partial page layout."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RecalcStyleCount"})," : Total number of page style recalculations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LayoutDuration"})," : Combined durations of all page layouts."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RecalcStyleDuration"})," : Combined duration of all page style recalculations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ScriptDuration"})," : Combined duration of JavaScript execution."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"TaskDuration"})," : Combined duration of all tasks performed by the browser."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"JSHeapUsedSize"})," : Used JavaScript heap size."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"JSHeapTotalSize"})," : Total JavaScript heap size."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"All timestamps are in monotonic time: monotonically increasing time in seconds since an arbitrary point in the past."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},75251:(e,n,r)=>{var s=r(67294),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var s,t={},o=null,p=null;for(s in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(p=n.ref),n)a.call(n,s)&&!l.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:i,type:e,key:o,ref:p,props:t,_owner:c.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var s=r(67294);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);