(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(107),c=a(101),i=a(104),m=a(103);var s=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),l.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),l.a.createElement("h4",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var o=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:m}=e,s=decodeURIComponent(m.substring(m.indexOf("#")+1));i.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},d=a(88),E=a.n(d);function g({headings:e}){return o("contents__link","contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:E.a.tableOfContents},l.a.createElement(u,{headings:e})))}function u({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"contents contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:"contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(u,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(c.a)(),{url:a}=t,{content:n}=e,{metadata:m}=n,{description:o,title:d,permalink:u,image:v,editUrl:p,lastUpdatedAt:h,lastUpdatedBy:_,keywords:N,version:f}=m,{frontMatter:{hide_title:b,hide_table_of_contents:k}}=n,w=a+Object(i.a)(v);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,d&&l.a.createElement("title",null,d),o&&l.a.createElement("meta",{name:"description",content:o}),o&&l.a.createElement("meta",{property:"og:description",content:o}),N&&N.length&&l.a.createElement("meta",{name:"keywords",content:N.join(",")}),v&&l.a.createElement("meta",{property:"og:image",content:w}),v&&l.a.createElement("meta",{property:"twitter:image",content:w}),v&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${d}`}),u&&l.a.createElement("meta",{property:"og:url",content:a+u})),l.a.createElement("div",{className:"padding-vert--lg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:E.a.docItemContainer},l.a.createElement("article",null,f&&l.a.createElement("span",{style:{verticalAlign:"top"},className:"badge badge--info"},"Version: ",f),!b&&l.a.createElement("header",null,l.a.createElement("h1",{className:E.a.docTitle},d)),l.a.createElement("div",{className:"markdown"},l.a.createElement(n,null))),(p||h||_)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},p&&l.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(h||_)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",h&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*h).toISOString(),className:E.a.docLastUpdatedAt},new Date(1e3*h).toLocaleDateString()),_&&" "),_&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,_)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:m})))),!k&&n.rightToc&&l.a.createElement(g,{headings:n.rightToc})))))}}}]);