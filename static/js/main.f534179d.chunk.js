(this["webpackJsonpsrw-co-test"]=this["webpackJsonpsrw-co-test"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(4),s=c.n(n),l=(c(9),c(2)),i=(c(10),c(0));var o=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),s=Object(l.a)(n,2),o=s[0],d=s[1],u=Object(a.useState)([]),j=Object(l.a)(u,2),b=j[0],m=j[1],p=Object(a.useState)(""),x=Object(l.a)(p,2),h=x[0],f=x[1],O=Object(a.useState)([]),g=Object(l.a)(O,2),y=g[0],v=g[1],N=Object(a.useState)(""),S=Object(l.a)(N,2),w=S[0],k=S[1],C=Object(a.useState)([]),D=Object(l.a)(C,2),E=D[0],I=D[1],T=[3,4,5,1,2],A=[1,2,3,4,5],P=[3,4,8,7],F=Object(a.useState)(""),B=Object(l.a)(F,2),L=B[0],$=B[1],J=Object(a.useState)(""),W=Object(l.a)(J,2),M=W[0],R=W[1],_=Object(a.useState)([]),q=Object(l.a)(_,2),z=q[0],G=q[1];function H(){var e=[],t=[],c=arguments[0],a=Array.prototype.slice.call(arguments,1);a.forEach((function(t){e.push(new Set(t))})),a.forEach((function(c,a){c.forEach((function(c){for(var r=!1,n=0;n<e.length;n++)if(n!==a&&e[n].has(c)){r=!0;break}r||t.push(c)}))})),c?G(t.sort((function(e,t){return e-t}))):I(t.sort((function(e,t){return e-t})))}return Object(i.jsxs)("div",{className:"bg-gray-600 text-white",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"p-12 text-white text-center font-bold text-4xl",children:"SRW&Co Technical Test"})}),Object(i.jsx)("main",{className:"justify-center",children:Object(i.jsxs)("div",{className:"grid lg:grid-cols-3 grid-rows-2 gap-3 mx-2 lg:pb-0 pb-28",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:"bg-red-900 py-6 lg:px-5 px-3 h-full w-full rounded-md",onSubmit:function(e){e.preventDefault();var t=c.toLowerCase().replace(/[\W_]/g,""),a=t.split("").reverse().join("");d(a===t?"It is a palindrome":"It is not a palindrome")},children:[Object(i.jsx)("h3",{className:"text-xl",children:"1. Palindrome Test"}),Object(i.jsxs)("div",{children:["Enter words:",Object(i.jsx)("input",{placeholder:"Example race car",className:"bg-gray-200 ml-3 rounded-md py-1 text-black mt-5 px-1",type:"text",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsx)("input",{className:"bg-gray-200 float-right rounded-md text-black mt-5 px-3 py-1",type:"submit",value:"Submit Palindrome"}),""!==o?Object(i.jsx)("div",{className:"mt-20 border border-white px-5 py-2 rounded-md text-l",children:o}):null]})}),Object(i.jsx)("div",{className:"flex flex-col justify-start ",children:Object(i.jsxs)("div",{className:"bg-gray-900 h-full lg:px-10 px-5 py-6 rounded-md",children:[Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=T.sort((function(e,t){return e-t}));m(t)},children:[Object(i.jsx)("h3",{className:"text-xl",children:"2. Sort Ascending"}),Object(i.jsx)("div",{className:"text-center mt-5",children:"[".concat(T,"] = [").concat(b,"]")}),Object(i.jsx)("input",{className:"bg-gray-200  float-right rounded-md text-black mt-5 px-5 py-1",type:"submit",value:"Sort"})]}),Object(i.jsxs)("form",{className:"border border-white p-3 mt-20 rounded-md",onSubmit:function(e){e.preventDefault();var t=/^[0-9,.]*$/.test(h);if(console.log("regex",t),t){var c=h.split(",").map((function(e){return parseInt(e,10)})).sort((function(e,t){return e-t}));v(c)}else k("Please only input number and comma")},children:[Object(i.jsx)("h5",{children:" Input your own number! (please seperate with comma)"}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{placeholder:"Example 7,3,4,5",className:"bg-gray-200 rounded-md py-1 text-black mt-5 px-1 lg:w-56 w-36",type:"text",value:h,onChange:function(e){return f(e.target.value)}})," = [".concat(y,"]")]})}),Object(i.jsx)("div",{className:"flex justify-end",children:Object(i.jsx)("input",{className:"bg-gray-200 mt-5 rounded-md text-black px-5 py-1",type:"submit",value:"Sort"})}),Object(i.jsx)("div",{style:{color:"red",marginTop:5},children:w})]})]})}),Object(i.jsx)("div",{className:" flex flex-col justify-start ",children:Object(i.jsxs)("div",{className:"bg-red-900 py-6 px-3 rounded-md",children:[Object(i.jsx)("h3",{className:"text-xl",children:"3. Symmetric Difference"}),Object(i.jsxs)("form",{style:{marginTop:10,marginBottom:20},onSubmit:function(e){e.preventDefault(),H(!1,A,P)},children:[Object(i.jsx)("div",{children:"Array 1: ".concat(A)}),Object(i.jsx)("div",{children:"Array 2: ".concat(P)}),Object(i.jsx)("div",{children:"Symmetric Difference: ".concat(E)}),Object(i.jsx)("input",{className:"bg-gray-200 float-right rounded-md text-black mt-5 px-5 py-1",type:"submit",value:"Calculate"})]}),Object(i.jsxs)("form",{className:"mt-20",onSubmit:function(e){e.preventDefault();var t=/^[0-9,.]*$/.test(L),c=/^[0-9,.]*$/.test(M);t&&c&&H(!0,L.split(",").map((function(e){return parseInt(e,10)})),M.split(",").map((function(e){return parseInt(e,10)})))},children:[Object(i.jsx)("h5",{children:" Input your own number! (please seperate with comma)"}),Object(i.jsxs)("div",{children:["Array 1: ",Object(i.jsx)("input",{placeholder:"Example 7,3,4,5",className:"bg-gray-200 ml-3 rounded-md py-1 text-black mt-5 px-1",type:"text",value:L,onChange:function(e){return $(e.target.value)}})]}),Object(i.jsxs)("div",{children:["Array 2: ",Object(i.jsx)("input",{placeholder:"Example 7,3,4,5",className:"bg-gray-200 ml-3 rounded-md py-1 text-black mt-5 px-1",type:"text",value:M,onChange:function(e){return R(e.target.value)}})]}),Object(i.jsx)("div",{style:{marginTop:10},children:"Symmetric Difference: ".concat(z)}),Object(i.jsx)("input",{className:"bg-gray-200 float-right rounded-md text-black mt-5 px-5 py-1",type:"submit",value:"Calculate"})]})]})})]})})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(o,{})}),document.getElementById("root")),d()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.f534179d.chunk.js.map