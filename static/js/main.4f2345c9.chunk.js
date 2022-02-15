(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),a=n(1),i=n(16),s=n(3),l=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&l.a.initialize(o);var b=function(){var e=Object(s.f)().pathname;return Object(a.useEffect)((function(){"production"===j&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},h=n(5),d=n(22),u=[{index:!0,label:"Aditya Ramakrishnan",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return n.e(5).then(n.t.bind(null,170,7))})),m=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:u.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:u.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(h.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/pfp.jpeg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Aditya Ramakrishnan"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:aditya.ramakrishnan02@gmail.com",children:"aditya.ramakrishnan02@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Michael. I like building things. I am a ",Object(c.jsx)("a",{href:"https://icme.stanford.edu/",children:"Stanford ICME"})," graduate, YC Alumni, and the co-founder and CTO of ",Object(c.jsx)("a",{href:"https://arthena.com",children:"Arthena"}),". Before Arthena I was at ",Object(c.jsx)("a",{href:"https://matroid.com",children:"Matroid"}),", ",Object(c.jsx)("a",{href:"https://planet.com",children:"Planet"}),", ",Object(c.jsx)("a",{href:"https://planetaryresources.com",children:"Planetary Resources"}),", ",Object(c.jsx)("a",{href:"https://facebook.com",children:"Facebook"}),", and ",Object(c.jsx)("a",{href:"https://seds.org",children:"SEDS"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(h.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(h.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 Aditya Ramakrishnan "})]})]})},k=function(){var e=Object(s.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(k,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Aditya Ramakrishnan",defaultTitle:"Aditya Ramakrishnan",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Aditya Ramakrishnan's personal website."};t.a=g},25:function(e,t,n){"use strict";var c=n(0),a=(n(1),n(29)),i=n(30),s=n(31),l=n(32),r=n(33),j=n(34),o=[{link:"https://github.com/aditya-ramakrishnan",label:"Github",icon:i.faGithub},{link:"https://www.facebook.com/avr02/",label:"Facebook",icon:s.faFacebookF},{link:"https://www.instagram.com/aditya_ramakrishnan/",label:"Instagram",icon:l.faInstagram},{link:"https://www.linkedin.com/in/aramakri/",label:"LinkedIn",icon:r.faLinkedinIn},{link:"mailto:aditya.ramakrishnan02@gmail.com",label:"Email",icon:j.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(15),l=n(5),r=n(3),j=n(21),o=(n(47),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,167))}))),b=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,174))})),h=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,168))})),d=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,169))})),u=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,173))})),O=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,171))})),m=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,172))})),x=function(){return Object(c.jsx)(l.a,{basename:"/personal-site",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/projects",component:u}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(s.hydrate)(Object(c.jsx)(p,{}),f):Object(s.render)(Object(c.jsx)(p,{}),f)}},[[48,1,3]]]);
//# sourceMappingURL=main.4f2345c9.chunk.js.map