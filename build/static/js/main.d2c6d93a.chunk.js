(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),i=n.n(r),s=(n(11),n(2)),o=n(0);var j=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Walid Khan"})})};var l=function(e){var t=e.pages,n=void 0===t?[]:t,c=e.setCurrentPage,a=e.currentPage;return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row",children:n.map((function(e){return Object(o.jsx)("li",{className:"mx-1 ".concat(a.name===e.name&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){c(e)},children:(t=e.name,t.charAt(0).toUpperCase()+t.slice(1))})},e.name);var t}))})})};var u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"A little bit about myself..."}),Object(o.jsx)("p",{children:" I am an aspiring web developer who started my coding journey in June 2021 with University of Arizona's online full-stack web development bootcamp program. I love learning about and working with new technologies. "})]})};var b=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Content"})})},d=n(3),m=n(5);var h=function(){var e=i.name,t=i.email,n=i.message,a=Object(c.useState)({name:"",email:"",message:""}),r=Object(s.a)(a,2),i=r[0],j=r[1];function l(e){j(Object(m.a)(Object(m.a)({},i),{},Object(d.a)({},e.target.name,e.target.value)))}return console.log(i),Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:"Contact me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(i)},children:["// name input",Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",defaultValue:e,onChange:l,name:"name"})]}),"// email input",Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",defaultValue:t,onChange:l,name:"email"})]}),"// message text area",Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",defaultValue:n,onChange:l,rows:"5"})]}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})]})};var O=function(e){return Object(o.jsx)("div",{children:e.children})};var x=function(e){var t=e.currentPage;return Object(o.jsx)("div",{children:Object(o.jsx)(O,{children:function(){switch(t.name){default:return Object(o.jsx)(u,{});case"Portfolio":return Object(o.jsx)(b,{});case"Contact":return Object(o.jsx)(h,{})}}()})})};var f=function(){var e=Object(c.useState)([{name:"About Me",description:"Short description about myself"},{name:"Portfolio",description:"Project List"},{name:"Contact",description:"Let's get in touch"},{name:"Resume",description:"Official resume"}]),t=Object(s.a)(e,1)[0],n=Object(c.useState)(t[0]),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"flex-row",id:"header-background",children:[Object(o.jsx)(j,{}),Object(o.jsx)(l,{pages:t,setCurrentPage:i,currentPage:r})]}),Object(o.jsx)("div",{children:Object(o.jsx)(x,{currentPage:r})}),Object(o.jsx)("main",{children:Object(o.jsx)(h,{})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),g()}},[[13,1,2]]]);
//# sourceMappingURL=main.d2c6d93a.chunk.js.map