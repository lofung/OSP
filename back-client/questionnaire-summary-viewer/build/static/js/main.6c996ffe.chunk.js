(this["webpackJsonpquestionnaire-summary-viewer"]=this["webpackJsonpquestionnaire-summary-viewer"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),c=n.n(i),o=n(5),a=n.n(o),s=n(2),d=n.n(s),j=n(4),u=n(6);n(13);var l=function(){var e=Object(i.useState)([{token:"abfs2357",questionnaire_name:"first_questionnaire",active:!0,create_date:"2021/1/25",modi_date:"2021/1/25",content_json:null},{token:"abfs2358",questionnaire_name:"first_questionnaire",active:!0,create_date:"2021/1/25",modi_date:"2021/01/26",content_json:[{question:"hello wold can json work?",type:"textbox",options:"",required:!1},{question:"gg it works!",type:"mc",options:" yes; no; i dunno;",required:!1},{question:"can edit API work?",type:"likert",options:"1-10",required:!1},{question:"does redirect work? try",type:"likert",options:"agree-disagree-5",required:!1}]},{token:"j6w2x1qi",questionnaire_name:"test create q",active:!0,create_date:"2021/01/26",modi_date:"2021/01/26",content_json:[{question:"are you fat?",type:"textbox",options:""}]},{token:"vr0f4djB",questionnaire_name:"test create q and server",active:!0,create_date:"2021/01/26",modi_date:"2021/01/26",content_json:[{question:"are you very fat?",type:"textbox",options:""}]},{token:"oLjLAXl1",questionnaire_name:"multi field input test",active:!0,create_date:"2021/01/26",modi_date:"2021/01/26",content_json:[{question:"textbox?",type:"textbox",options:""},{question:"mc?",type:"mc",options:"fat; very fat; not fat;"},{question:"agree?",type:"likert",options:"agree-disagree-5"},{question:"1-10 score?",type:"likert",options:"1-10"}]}]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete? You may deactivate the questionnaire first and delete when you are sure!")){e.next=13;break}return e.prev=1,e.next=4,fetch("/api/v1/editscheme/".concat(t),{method:"DELETE"});case 4:return n=e.sent,console.log(n),e.next=8,a();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/questionnairesummary");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.data),n.data||c([]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){a()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"View, activate/deactivate or delete questionnaires"}),Object(r.jsx)("br",{}),Object(r.jsxs)("table",{style:{border:"1px solid black"},children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Token"}),Object(r.jsx)("th",{children:"Questionnaire Name"}),Object(r.jsx)("th",{children:"Active"}),Object(r.jsx)("th",{children:"Creation Date"}),Object(r.jsx)("th",{children:"Last Modification"}),Object(r.jsx)("th",{}),Object(r.jsx)("th",{}),Object(r.jsx)("th",{})]})}),Object(r.jsx)("tbody",{children:n?n.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.token}),Object(r.jsx)("td",{children:e.questionnaire_name}),Object(r.jsxs)("td",{children:[Object(r.jsx)("span",{style:{display:"block",textAlign:"center"},children:!0===e.active?"active":!1===e.active?"deactived":"error!!"}),Object(r.jsx)("button",{disabled:!0,children:"Activate"}),Object(r.jsx)("button",{disabled:!0,children:"Deactivate"})]}),Object(r.jsx)("td",{children:e.create_date}),Object(r.jsx)("td",{children:e.modi_date}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{target:"_blank",href:"/front/qr/"+e.token,children:Object(r.jsx)("button",{children:"QR"})})}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{target:"_blank",href:"/front/"+e.token,children:Object(r.jsx)("button",{children:"Preview"})})}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{target:"_blank",href:"/bd/admin-config/view-result/"+e.token,children:Object(r.jsx)("button",{children:"Results"})})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){window.location.href="/bd/admin-config/build-edit/"},children:"Edit"})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){return o(e.token)},children:"DELETE"})})]},t+e.token)})):Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:"No records!"})})})]})]})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6c996ffe.chunk.js.map