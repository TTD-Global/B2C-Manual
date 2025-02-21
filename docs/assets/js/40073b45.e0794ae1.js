"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2006],{1430:(t,e,r)=>{r.d(e,{W:()=>a});var n=r(6540),s=r(797);const c=["zero","one","two","few","many","other"];function o(t){return c.filter((e=>t.includes(e)))}const i={locale:"en",pluralForms:o(["one","other"]),select:t=>1===t?"one":"other"};function l(){const{i18n:{currentLocale:t}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:o(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),i}}),[t])}function a(){const t=l();return{selectMessage:(e,r)=>function(t,e,r){const n=t.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${t}`);const s=r.select(e),c=r.pluralForms.indexOf(s);return n[Math.min(c,n.length-1)]}(r,e,t)}}},3790:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Product/Product/Product_list","title":"Product list","description":"\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e46\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49","source":"@site/versioned_docs/version-1.3.0/Product/Product/Product_list.mdx","sourceDirName":"Product/Product","slug":"/Product/Product/Product_list","permalink":"/B2C-Manual/content/1.3.0/Product/Product/Product_list","draft":false,"unlisted":false,"tags":[],"version":"1.3.0","frontMatter":{"title":"Product list","hide_table_of_contents":true},"sidebar":"tutorialSidebar","next":{"title":"Create new Product","permalink":"/B2C-Manual/content/1.3.0/Product/Product/"}}');var s=r(4848),c=r(8453),o=r(9563);r(1096),r(5537),r(9329);const i={title:"Product list",hide_table_of_contents:!0},l=void 0,a={},d=[];function u(t){const e={img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e46\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Create new product"})," \u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Product"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Filter"})," \u0e23\u0e30\u0e1a\u0e1a\u0e01\u0e32\u0e23\u0e0a\u0e48\u0e27\u0e22\u0e04\u0e49\u0e19\u0e2b\u0e32 Product"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Action"})," \u0e44\u0e27\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 Product"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{src:r(7470).A+"",width:"1240",height:"336"}),"\r\n",(0,s.jsx)(e.img,{src:r(7227).A+"",width:"1112",height:"819"})]}),"\n",(0,s.jsx)(o.A,{})]})}function m(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},7227:(t,e,r)=>{r.d(e,{A:()=>n});const n=r.p+"assets/images/Product-list-fbc76167436f658d77c467a6dedf3cfa.png"},7470:(t,e,r)=>{r.d(e,{A:()=>n});const n=r.p+"assets/images/Product-menu-cd694267c2e6d3972fa55151d9f2f94d.png"},9563:(t,e,r)=>{r.d(e,{A:()=>j});r(6540);var n=r(4164),s=r(3751),c=r(6289),o=r(1430),i=r(2887),l=r(539),a=r(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(4848);function m(t){let{href:e,children:r}=t;return(0,u.jsx)(c.A,{href:e,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function h(t){let{href:e,icon:r,title:s,description:c}=t;return(0,u.jsxs)(m,{href:e,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),c&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:c,children:c})]})}function f(t){let{item:e}=t;const r=(0,s.Nr)(e),n=function(){const{selectMessage:t}=(0,o.W)();return e=>t(e,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return r?(0,u.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??n(e.items.length)}):null}function p(t){let{item:e}=t;const r=(0,i.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(e.docId??void 0);return(0,u.jsx)(h,{href:e.href,icon:r,title:e.label,description:e.description??n?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,u.jsx)(p,{item:e});case"category":return(0,u.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const r=(0,s.$S)();return(0,u.jsx)(j,{items:r.items,className:e})}function j(t){const{items:e,className:r}=t;if(!e)return(0,u.jsx)(x,{...t});const c=(0,s.d1)(e);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:c.map(((t,e)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:t})},e)))})}}}]);