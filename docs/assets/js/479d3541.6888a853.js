"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8230],{949:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Search_product-268e3e11ea7d6c632142c490f5e24e8c.png"},1430:(e,t,s)=>{s.d(t,{W:()=>a});var n=s(6540),r=s(797);const i=["zero","one","two","few","many","other"];function c(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=s.select(t),i=s.pluralForms.indexOf(r);return n[Math.min(i,n.length-1)]}(s,t,e)}}},3650:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Discount-status-active-b2b99c9c69382e71fee6247a722490b0.png"},4009:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Discount-status-expired-08736433e93367e1ee33b8bc82153bb3.png"},4721:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Search_Option-e6f94a8b10c7b37ff7e280b7ad733b60.png"},6945:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Discount-status-a5bbdfb853542db67fcc095f169be05a.png"},8650:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Product/ManageDiscount/Filter","title":"Filter discount","description":"\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e0a\u0e48\u0e27\u0e22\u0e04\u0e49\u0e19\u0e2b\u0e32 Product \u0e08\u0e30\u0e41\u0e1a\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19 3 \u0e2a\u0e48\u0e27\u0e19\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49","source":"@site/versioned_docs/version-1.3.0/Product/ManageDiscount/Filter.mdx","sourceDirName":"Product/ManageDiscount","slug":"/Product/ManageDiscount/Filter","permalink":"/B2C-Manual/content/1.3.0/Product/ManageDiscount/Filter","draft":false,"unlisted":false,"tags":[],"version":"1.3.0","frontMatter":{"title":"Filter discount","hide_table_of_contents":true},"sidebar":"tutorialSidebar","previous":{"title":"Create Discount","permalink":"/B2C-Manual/content/1.3.0/Product/ManageDiscount/Creatediscount"},"next":{"title":"Button Action","permalink":"/B2C-Manual/content/1.3.0/Product/ManageDiscount/Action"}}');var r=s(4848),i=s(8453),c=(s(9563),s(1096),s(5537)),l=s(9329);const o={title:"Filter discount",hide_table_of_contents:!0},a=void 0,u={},d=[];function h(e){const t={em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(l.A,{value:"Filter",children:[(0,r.jsx)(t.p,{children:"\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e0a\u0e48\u0e27\u0e22\u0e04\u0e49\u0e19\u0e2b\u0e32 Product \u0e08\u0e30\u0e41\u0e1a\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19 3 \u0e2a\u0e48\u0e27\u0e19\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"}),(0,r.jsxs)(c.A,{children:[(0,r.jsxs)(l.A,{value:"Search Product",label:"Search Product",default:!0,children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Search Product"})," \u0e44\u0e27\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e01\u0e23\u0e2d\u0e01\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e0a\u0e37\u0e48\u0e2d Product \u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e1a\u0e42\u0e04\u0e49\u0e14\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(949).A+"",width:"1022",height:"619"})})]}),(0,r.jsxs)(l.A,{value:"Search options",label:"Search options",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Search Options"})," \u0e44\u0e27\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e01\u0e23\u0e2d\u0e01\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e0a\u0e37\u0e48\u0e2d Options \u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e1a\u0e42\u0e04\u0e49\u0e14\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(4721).A+"",width:"1027",height:"628"})})]}),(0,r.jsxs)(l.A,{value:"Filter by status",label:"Filter by status",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Filter by status"})," \u0e21\u0e35 Status \u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"All"})})," \u0e41\u0e2a\u0e14\u0e07 Status \u0e02\u0e2d\u0e07 Discount \u0e17\u0e35\u0e48\u0e21\u0e35\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"]}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(6945).A+"",width:"1014",height:"645"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Active"})})," \u0e41\u0e2a\u0e14\u0e07 Discount \u0e17\u0e35\u0e48\u0e21\u0e35 Status : Active \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"]}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(3650).A+"",width:"1038",height:"591"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Paused"})})," \u0e41\u0e2a\u0e14\u0e07 Discount \u0e17\u0e35\u0e48\u0e21\u0e35 Status : Paused \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"]}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(8878).A+"",width:"1002",height:"629"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Expired"})})," \u0e41\u0e2a\u0e14\u0e07 Discount \u0e17\u0e35\u0e48\u0e21\u0e35 Status : Expired \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"]}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:s(4009).A+"",width:"1031",height:"658"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8878:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Discount-status-paused-ad131bd06fd6ceb3348658e442997825.png"},9563:(e,t,s)=>{s.d(t,{A:()=>j});s(6540);var n=s(4164),r=s(3751),i=s(6289),c=s(1430),l=s(2887),o=s(539),a=s(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(4848);function h(e){let{href:t,children:s}=e;return(0,d.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:s})}function p(e){let{href:t,icon:s,title:r,description:i}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[s," ",r]}),i&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e;const s=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,d.jsx)(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function g(e){let{item:t}=e;const s=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const s=(0,r.$S)();return(0,d.jsx)(j,{items:s.items,className:t})}function j(e){const{items:t,className:s}=e;if(!t)return(0,d.jsx)(f,{...e});const i=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",s),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}}}]);