(this["webpackJsonppreviewmark-react-typescript"]=this["webpackJsonppreviewmark-react-typescript"]||[]).push([[0],{21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(14),s=a.n(n),l=(a(21),a(5)),i=a(2),o=a(11),d=a(9),x=a.n(d),m={heading:function(e,t){e.toLowerCase().replace(/[^\w]+/g,"-");var a="base",r=1===t?'<hr class="p-3"/>':"";switch(t){case 1:a="3xl py-2";break;case 2:a="2xl";break;case 3:a="xl";break;case 4:a="lg";break;case 5:a="base"}return"\n\t\t\t<h".concat(t,' class="text-').concat(a,'">\n\t\t\t').concat(e,"\n\t\t\t</h").concat(t,">\n\t\t\t").concat(r,"\n\t\t\t")},list:function(e,t){return'\n\t\t<ul class="list-'.concat(t?"decimal":"disc",' px-4">\n\t\t').concat(e,"\n\t\t</ul>\n\t\t")}},j=a(0),b={editorMarkdown:"",setEditorMarkdownHandle:function(){},previewMarkdown:"This is the preview side",setPreviewMarkdownHandle:function(){}},h=Object(r.createContext)(b),u=function(e){var t=e.children,a=Object(r.useState)(""),c=Object(o.a)(a,2),n=c[0],s=c[1],l=Object(r.useState)("This is preview side"),i=Object(o.a)(l,2),d=i[0],b=i[1];Object(r.useEffect)((function(){var e=localStorage.getItem("editorMarkdown");e&&s(e);var t=localStorage.getItem("previewMarkdown");t&&b(t)}),[]);return Object(j.jsx)(h.Provider,{value:{editorMarkdown:n,setEditorMarkdownHandle:function(e){localStorage.setItem("editorMarkdown",e.target.value),s(e.target.value)},previewMarkdown:d,setPreviewMarkdownHandle:function(e){localStorage.setItem("editorMarkdown",e),x.a.use({renderer:m});var t=x()(e);localStorage.setItem("previewMarkdown",t),b(t)}},children:t})},w=function(){return Object(j.jsx)("header",{className:"text-gray-100 body-font",children:Object(j.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(j.jsxs)(l.b,{className:"flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0",to:"/",children:[Object(j.jsx)("img",{src:"../assets/img/logo.png",alt:"",className:"w-8"}),Object(j.jsx)("span",{className:"ml-3 text-2xl",children:"Preview"}),Object(j.jsx)("span",{className:"text-2xl text-green-300 bg-black px-1",children:"Mark"})]}),Object(j.jsx)("nav",{className:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:Object(j.jsxs)("ul",{className:"flex flex-col md:flex-row list-none ml-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("a",{href:"https://ctt.ac/5vKHr",target:"_blank",rel:"noreferrer",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75",children:[Object(j.jsx)("i",{className:"fab fa-twitter text-lg leading-lg opacity-75",children:" "}),Object(j.jsx)("span",{className:"ml-2",children:"Tweet"})]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("a",{href:"https://github.com/bonniesimon/preview-mark",target:"_blank",rel:"noreferrer",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75",children:[Object(j.jsx)("i",{className:"fab fa-github text-lg leading-lg opacity-75",children:" "}),Object(j.jsx)("span",{className:"ml-2",children:"Star"})]})})]})})]})})},p=function(){var e=Object(r.useContext)(h),t=e.setEditorMarkdownHandle,a=e.editorMarkdown;return Object(j.jsxs)("div",{className:"min-h-screen lg:w-full md:w-3/4 mx-5",children:[Object(j.jsx)("label",{className:"block text-gray-300 text-center font-bold my-10",htmlFor:"message",children:"Enter Markdown"}),Object(j.jsx)("textarea",{value:a,onChange:t,name:"feedback",id:"feedback",className:"border-0 px-3 py-3 w-full  h-96 bg-gray-600 placeholder-black text-gray-50 rounded shadow focus:outline-none",placeholder:"",required:!0})]})},f=function(){var e=Object(r.useContext)(h).previewMarkdown;return Object(j.jsxs)("div",{className:"lg:w-full md:w-3/4 min-h-screen mx-5",children:[Object(j.jsx)("h1",{className:"text-gray-300 text-center font-bold my-10",children:"Preview"}),Object(j.jsx)("div",{className:"bg-gray-600 h-96 p-3 text-gray-100 overflow-y-scroll",dangerouslySetInnerHTML:{__html:e}}),Object(j.jsxs)(l.b,{to:"/fullscreen-preview",className:"p-1 my-4 bg-gray-300 hover:bg-gray-400 cursor-pointer w-1/2 mx-auto text-center flex justify-center items-center",children:["Fullscreen",Object(j.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z",clipRule:"evenodd"})})]})]})},g=function(){var e=Object(r.useContext)(h),t=e.editorMarkdown,a=e.setPreviewMarkdownHandle;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("button",{onClick:function(){return a(t)},className:"px-6 py-3 my-6 self-center bg-green-300 flex flex-row items-center",children:["Preview",Object(j.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"})})]})})},v=function(){return Object(j.jsxs)("div",{className:"flex flex-col lg:flex-row items-stretch md:mx-5 lg:mx-20 mt-32 pb-1",children:[Object(j.jsx)(p,{}),Object(j.jsx)(g,{}),Object(j.jsx)(f,{})]})},O=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{className:"footer bg-gray-700 relative pt-1 border-b-2 border-gray-700",children:Object(j.jsx)("div",{className:"container mx-auto px-6",children:Object(j.jsx)("div",{className:"mt-16 border-t-2 border-gray-300 flex flex-col items-center",children:Object(j.jsx)("div",{className:"sm:w-2/3 text-center py-6",children:Object(j.jsx)("p",{className:"text-sm text-gray-300 font-bold mb-2",children:"\xa9 2021 by Bonnie Simon"})})})})})})},y=function(){var e=Object(r.useContext)(h).previewMarkdown;return Object(j.jsxs)("div",{className:"mx-auto max-w-screen-xl w-3/4 min-h-screen",children:[Object(j.jsx)("h1",{className:"text-gray-300 text-center font-bold my-10",children:"Preview"}),Object(j.jsx)("div",{className:"bg-gray-600 min-h-screen p-5 text-gray-100",dangerouslySetInnerHTML:{__html:e}})]})},k=function(){return Object(j.jsx)(l.a,{basename:"/preview-mark",children:Object(j.jsxs)("div",{className:"App min-h-screen bg-gray-700",children:[Object(j.jsx)(w,{}),Object(j.jsx)(i.c,{children:Object(j.jsxs)(u,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,component:v}),Object(j.jsx)(i.a,{path:"/fullscreen-preview",exact:!0,component:y})]})}),Object(j.jsx)(O,{})]})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2674a21d.chunk.js.map