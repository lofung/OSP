(this["webpackJsonpresult-viewer"]=this["webpackJsonpresult-viewer"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),c=n(5),i=n.n(c),o=(n(12),n(4)),u=n.n(o),j=n(6),b=n(2);n(14);var l=function(){var e=Object(s.useState)([{name:"kelvin",create_date:"2021/01/26",answer:[{question:"textbox?",answer:"yes"},{question:"mc?",answer:[" very fat"," not fat"]},{question:"agree?",answer:"Agree"},{question:"1-10 score?",answer:"2"}]},{name:"john",create_date:"2021/01/26",answer:[{question:"textbox?",answer:"hello"},{question:"mc?",answer:["fat"]},{question:"agree?",answer:"Disagree"},{question:"1-10 score?",answer:"3"}]},{name:"sanny",create_date:"2021/01/26",answer:[{question:"textbox?",answer:"gg"},{question:"mc?",answer:[" not fat"]},{question:"agree?",answer:"Strongly Disagree"},{question:"1-10 score?",answer:"4"}]}]),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)("oLjLAXl1"),i=Object(b.a)(c,2),o=i[0],l=i[1],d=Object(s.useState)("Q-name"),h=Object(b.a)(d,2),x=h[0],w=h[1],O=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r,s,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,n=t.split("/"),r=n[n.length-1],l(r),e.prev=4,e.next=7,fetch("/api/v1/questionnaire-live/"+r);case 7:return s=e.sent,e.next=10,s.json();case 10:c=e.sent,w(c.data.questionnaire_name),l(c.data.token),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0);case 18:return e.prev=18,e.next=21,fetch("/api/v1/viewanswers/"+r);case 21:return i=e.sent,e.next=24,i.json();case 24:o=e.sent,a(o.data),e.next=31;break;case 28:e.prev=28,e.t1=e.catch(18),console.error(e.t1);case 31:case"end":return e.stop()}}),e,null,[[4,15],[18,28]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){O(),console.log(n)}),[]),Object(r.jsxs)("div",{className:"container",style:{margin:"15px"},children:[Object(r.jsxs)("h1",{children:["Results of ",x," (",o,")"]}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"/bd/admin-config/",children:"Return to main page"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("table",{style:{border:"1px solid black"},children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Date"}),n[0].answer.map((function(e,t){return Object(r.jsx)("th",{children:e.question},t+e.question)}))]})}),Object(r.jsx)("tbody",{children:n.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.create_date}),e.answer.map((function(t,n){return Object(r.jsx)("td",{children:!0===Array.isArray(t.answer)?t.answer.map((function(e,t){return Object(r.jsx)("div",{children:e},"a"+t)})):t.answer},e.name+n+t.answer)}))]},t+e.name)}))})]})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fec19d58.chunk.js.map