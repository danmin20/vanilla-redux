(this["webpackJsonpvanilla-redux"]=this["webpackJsonpvanilla-redux"]||[]).push([[0],{25:function(n,t,e){n.exports=e.p+"static/media/bg.33ad4440.jpg"},32:function(n,t,e){n.exports=e(43)},43:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(13),u=e.n(o),i=e(27),c=e(9),l=e(30),f=e(6),d=e(5),p=e(12),s=e(29),b=e(14),m=[],x=function(){localStorage.setItem("ToDo",JSON.stringify(m))},g=function(){var n=localStorage.getItem("ToDo");if(null!==n){var t=JSON.parse(n);m=t}},v=Object(b.b)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(g(),n=m,t.type){case"ADD":return m=[{text:t.text,id:Date.now()}].concat(Object(s.a)(n)),x(),m;case"DELETE":return m=n.filter((function(n){return n.id!==t.id})),x(),m;default:return n}})),E=function(n){return{type:"ADD",text:n}},j=function(n){return{type:"DELETE",id:n}},h=v;function y(){var n=Object(f.a)(["\n  margin: 10px;\n  text-align: center;\n  font-family: 'Song Myung', serif;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  opacity: 0.8;\n"]);return y=function(){return n},n}function O(){var n=Object(f.a)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 10px;\n"]);return O=function(){return n},n}var D=d.default.button(O()),k=d.default.div(y());var w=Object(p.b)(null,(function(n,t){return{onBtnClick:function(){return n(j(t.id))}}}))((function(n){var t=n.text,e=n.onBtnClick;return a.a.createElement(k,null,t,a.a.createElement(D,{onClick:e},"X"))})),S=e(25),T=e.n(S);function z(){var n=Object(f.a)(["\n  margin-top: 30px;\n  padding: 10px;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.3);\n"]);return z=function(){return n},n}function C(){var n=Object(f.a)(["\n  margin-top: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return C=function(){return n},n}function J(){var n=Object(f.a)(['\n  margin-top: 100px;\n  font-family: "Lobster", cursive;\n  font-size: 70px;\n  color: white;\n']);return J=function(){return n},n}function B(){var n=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return B=function(){return n},n}var I=d.default.div(B(),T.a),L=d.default.div(J()),A=d.default.form(C()),N=d.default.div(z());var F=Object(p.b)((function(n){return{toDos:n}}),(function(n){return{addToDo:function(t){return n(E(t))}}}))((function(n){var t=n.toDos,e=n.addToDo,o=Object(r.useState)(""),u=Object(l.a)(o,2),i=u[0],c=u[1];return a.a.createElement(I,null,a.a.createElement(L,null,"ToDo"),a.a.createElement(A,{onSubmit:function(n){n.preventDefault(),e(i),c("")}},a.a.createElement("input",{type:"text",value:i,onChange:function(n){c(n.target.value)}}),a.a.createElement("button",null,"+")),a.a.createElement(N,null,a.a.createElement("ul",null,t.map((function(n){return a.a.createElement(w,Object.assign({},n,{key:n.id}))})))))})),G=e(26),M=e.n(G);function X(){var n=Object(f.a)(["\n    ",";\n    input{\n        border: 0px;\n        padding: 5px 10px;\n        margin-top: 3px;\n        border-radius: 10px;\n        :focus{\n            outline: none;\n        }\n    }\n    button{\n        cursor: pointer;\n        border: 0px;\n        margin-left: 10px;\n        background-color: white;\n        width: 25px;\n        height: 25px;\n        border-radius: 12.5px;\n        font-size: 20px;\n    }\n"]);return X=function(){return n},n}var q=Object(d.createGlobalStyle)(X(),M.a);var H=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,null),a.a.createElement(i.a,null,a.a.createElement(c.a,{path:"/",exact:!0,component:F})))};u.a.render(a.a.createElement(p.a,{store:h},a.a.createElement(H,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.139ee442.chunk.js.map