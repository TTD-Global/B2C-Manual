"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2890],{1430:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(6540),s=r(797);const c=["zero","one","two","few","many","other"];function o(e){return c.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),c=r.pluralForms.indexOf(s);return n[Math.min(c,n.length-1)]}(r,t,e)}}},6806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"Product/Product/Product_list","title":"Product list","description":"\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e46\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49","source":"@site/versioned_docs/version-1.1.0/Product/Product/Product_list.mdx","sourceDirName":"Product/Product","slug":"/Product/Product/Product_list","permalink":"/B2C-Manual/content/1.1.0/Product/Product/Product_list","draft":false,"unlisted":false,"tags":[],"version":"1.1.0","frontMatter":{"title":"Product list","hide_table_of_contents":true},"sidebar":"tutorialSidebar","previous":{"title":"Home","permalink":"/B2C-Manual/content/1.1.0/Home"},"next":{"title":"Create new Product","permalink":"/B2C-Manual/content/1.1.0/Product/Product/"}}');var s=r(4848),c=r(8453),o=r(9563);r(1096),r(5537),r(9329);const i={title:"Product list",hide_table_of_contents:!0},l=void 0,a={},u=[];function d(e){const t={img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e46\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Create new product"})," \u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Product"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Filter"})," \u0e23\u0e30\u0e1a\u0e1a\u0e01\u0e32\u0e23\u0e0a\u0e48\u0e27\u0e22\u0e04\u0e49\u0e19\u0e2b\u0e32 Product"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Action"})," \u0e44\u0e27\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 Product"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:r(7470).A+"",width:"1240",height:"336"}),"\r\n",(0,s.jsx)(t.img,{src:r(7227).A+"",width:"1112",height:"819"})]}),"\n",(0,s.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7227:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/Product-list-fbc76167436f658d77c467a6dedf3cfa.png"},7470:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/Product-menu-cd694267c2e6d3972fa55151d9f2f94d.png"},9563:(e,t,r)=>{r.d(t,{A:()=>j});r(6540);var n=r(4164),s=r(3751),c=r(6289),o=r(1430),i=r(2887),l=r(539),a=r(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(4848);function m(e){let{href:t,children:r}=e;return(0,d.jsx)(c.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:s,description:c}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),c&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:c,children:c})]})}function f(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function p(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const c=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}}}]);