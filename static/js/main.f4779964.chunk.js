(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(8),a=c.n(i),r=c(5),j=(c(13),c(3)),o=(c(14),c(1)),l=(c(15),c(2)),u=function(){var e=Object(o.g)().id,t=s.a.useState(null),c=Object(j.a)(t,2),n=c[0],i=c[1];return s.a.useEffect((function(){fetch("https://api.github.com/repositories/".concat(e,"}"),{}).then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})).catch((function(e){console.log(e)}))}),[e]),Object(l.jsx)("div",{className:"newPage",children:n?Object(l.jsxs)("div",{className:"asd",children:[Object(l.jsx)("h1",{children:n.name}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:n.url}),Object(l.jsx)("li",{children:n.visibility}),Object(l.jsx)("li",{children:n.node_id}),Object(l.jsx)("li",{children:n.watchers})]})]}):console.log(e)})};var h=function(){var e=s.a.useState(""),t=Object(j.a)(e,2),c=t[0],n=t[1],i=s.a.useState([]),a=Object(j.a)(i,2),o=a[0],u=a[1],h=s.a.useState(!1),b=Object(j.a)(h,2),d=b[0],O=b[1],f=s.a.useState(!1),x=Object(j.a)(f,2),p=(x[0],x[1]),m=s.a.useState(null),g=Object(j.a)(m,2),v=g[0],S=g[1];function N(){fetch("https://api.github.com/search/repositories?q=".concat(c).concat(v?" user:"+v:""),{}).then((function(e){return e.json()})).then((function(e){console.log(e),O(!1),u(e.items)})).catch((function(e){console.log(e),O(!1),p(!0)}))}return s.a.useEffect((function(){c&&(O(!0),N())}),[c]),s.a.useEffect((function(){N()}),[v]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{align:"center",children:"GitHub Search"}),Object(l.jsx)("form",{onChange:function(e){n(e.target.value)},children:Object(l.jsx)("input",{className:"form__input",type:"text",name:"query",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f"})}),Object(l.jsx)("h2",{align:"center",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(l.jsx)("input",{className:"form__input2",onChange:function(e){S(e.target.value)},type:"text",name:"query",placeholder:"\u0412\u0432\u0435\u0434\u0435\u0442\u0438 \u043f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),d?Object(l.jsx)("div",{className:"loading",children:"Loading"}):Object(l.jsx)("ul",{children:o?o.map((function(e){return Object(l.jsx)("div",{className:"newli",children:Object(l.jsxs)(r.b,{to:"/".concat(e.id),children:[Object(l.jsxs)("a",{children:[" ",e.name]}),Object(l.jsx)("p",{children:e.description}),Object(l.jsxs)("p",{children:[" \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e forks  = ",e.forks_count]})]},e.id)})})):null})]})};var b=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(h,{})}),Object(l.jsx)(o.a,{path:"/:id",element:Object(l.jsx)(u,{})})]})})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(b,{})})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f4779964.chunk.js.map