(this["webpackJsonpquestionnaire-reader"]=this["webpackJsonpquestionnaire-reader"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),i=n(9),c=n.n(i),o=(n(15),n(8)),u=n(3),l=n.n(u),d=n(7),p=n(5);n(17);var j=function(){var e=Object(a.useState)("Ordinary Questionnaire (Cannot fetch db - demo)"),t=Object(p.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)("vkkU2MmK"),c=Object(p.a)(i,2),u=c[0],j=c[1],b=Object(a.useState)([{question:"day?",type:"textbox",options:"",required:!1,answer:""},{question:"drinking?",type:"mc",options:"yes; no; i dunno;",required:!1,answer:""},{question:"like parents?",type:"likert",options:"1-10",required:!1,answer:""},{question:"like hk?",type:"likert",options:"agree-disagree-5",required:!1,answer:""}]),h=Object(p.a)(b,2),f=h[0],g=h[1];function x(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"/"+n+"/"+t}var m=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],f.forEach((function(e,n){t.push({question:e.question,answer:e.answer})})),n={name:document.getElementById("name").value,date:x(),answers:t},e.prev=3,e.next=6,fetch("/api/v1/postanswers/"+u.substring(0,8),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:e.sent,alert("input success, thank you for answering!!"),window.location.href="/",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),v=function(e,t,n){return e.split(";").filter((function(e){return""!==e})).map((function(e,n){return Object(r.jsxs)("div",{style:{margin:"5px"},children:[Object(r.jsx)("input",{type:"checkbox",value:e,name:"q"+t,onChange:function(e){return function(e,t){var n=document.querySelectorAll("input[name=q".concat(e,"]:checked")),r=[];n.forEach((function(e){r.push(e.value)}));var a=Object(o.a)(f);a[e].answer=r,g(a)}(t)}}),Object(r.jsx)("label",{htmlFor:e,children:e})]},e+"-"+n)}))},O=function(e,t){var n=Object(o.a)(f);n[t].answer=e.target.value,g(n)},k=function(e,t,n){var r=document.getElementById("q"+t+"line"),a=document.getElementsByClassName("q"+t),s=e.target.value;if("likert-agree"===n){switch(e.target.value){case"Strongly Disagree":s=1;break;case"Disagree":s=2;break;case"Neutral":s=3;break;case"Agree":s=4;break;case"Strongly Agree":s=5;break;default:s=0}r.style.width="".concat(77*(s-1)/4,"%")}"likert"===n&&(r.style.width="".concat(90*(s-1)/a.length,"%")),O(e,t)},y=function(e,t,n,a){var s="";switch(e){case"textbox":s=Object(r.jsx)("input",{type:"text",id:"q"+n,onChange:function(e){return O(e,n)}});break;case"mc":s=Object(r.jsx)("div",{id:"q"+n,children:v(t,n)});break;case"likert":if("1-10"===t){for(var i=t.split("-"),c=parseInt(i[0]),o=parseInt(i[1]),u=[],l=c;l<o+1;l++)u.push(l);s=Object(r.jsxs)("ul",{className:"likert",children:[Object(r.jsx)("div",{className:"line",id:"q"+n+"line"},"q"+n+"line"),u.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("input",{type:"radio",className:"q"+n,name:"q"+n,id:"q"+n,onChange:function(e){return k(e,n,"likert")},value:e}),Object(r.jsx)("label",{children:e})]},e+"likert"+n+"score")}))]})}if("agree-disagree-5"===t){s=Object(r.jsxs)("ul",{className:"likert-agree",children:[Object(r.jsx)("div",{className:"line-agree",id:"q"+n+"line"},"q"+n+"line"),["Strongly Disagree","Disagree","Neutral","Agree","Strongly Agree"].map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("input",{type:"radio",className:"q"+n,name:"q"+n,id:"q"+n,onChange:function(e){return k(e,n,"likert-agree")},value:e}),Object(r.jsx)("label",{className:"likert-agree-label",children:e})]},e+"agree"+n+"score")}))]})}break;default:s="caught in default, contact developer"}return s},q=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,r,a,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,n=t.split("/"),r=n[n.length-1],j(r),e.prev=4,e.next=7,fetch("/api/v1/questionnaire-live/"+r);case 7:return a=e.sent,e.next=10,a.json();case 10:i=e.sent,c=i.data.content_json,s(i.data.questionnaire_name),j(i.data.token+" - load success"),g(c),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){q()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:n}),"Token: ",Object(r.jsx)("input",{type:"text",value:u,disabled:!0}),Object(r.jsxs)("div",{className:"questionnaire-container",style:{border:"1px solid"},children:[Object(r.jsx)("br",{}),Object(r.jsxs)("span",{style:{margin:"10px"},children:["Nickname/alias: ",Object(r.jsx)("input",{type:"text",id:"name",placeholder:"No real name please!"})]}),f.map((function(e,t){return Object(r.jsxs)("div",{className:"question-"+t+"-box",style:{margin:"10px"},children:[Object(r.jsxs)("div",{className:"statement",children:[t+1,". ",e.question]}),y(e.type,e.options,t,e.question)]},t+"box")}))]}),Object(r.jsx)("button",{onClick:function(){return m()},children:"Submit"}),Object(r.jsx)("br",{}),JSON.stringify(f)]})};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a7d54ec1.chunk.js.map