(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{21:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var a,o,i,r,c,s,p=t(0),l=t.n(p),d=t(6),b=t.n(d),u=(t(19),t(20),t(21),t(11)),x=t(5),g=t(12),f=t.n(g),j=t(8),h=t(2),m=t(3),O=m.a.header(a||(a=Object(h.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),v=m.a.form(o||(o=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=m.a.button(i||(i=Object(h.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),y=m.a.span(r||(r=Object(h.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),k=m.a.input(c||(c=Object(h.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &:placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),I=t(1);function S(n){var e=n.onSubmit,t=Object(p.useState)(""),a=Object(x.a)(t,2),o=a[0],i=a[1];return Object(I.jsx)(O,{children:Object(I.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(e(i),i("")):j.b.error("Please, enter something!")},children:[Object(I.jsx)(w,{type:"submit",children:Object(I.jsx)(y,{})}),Object(I.jsx)(k,{type:"text",name:"imageName",placeholder:"Search images and photos",autoComplete:"off",autoFocus:!0,value:o,onChange:function(n){i(n.currentTarget.value.toLowerCase())}})]})})}var L=m.a.div(s||(s=Object(h.a)(["\n  max-width: 100%;\n  /* display: flex;\n  flex-direction: column; */\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  padding: 15px 30px;\n  text-align: center;\n"])));var z,C,E,P=function(n){var e=n.children;return Object(I.jsx)(L,{children:e})},R=m.a.li(z||(z=Object(h.a)(["\n  border-radius: 3px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),U=m.a.img(C||(C=Object(h.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),F=function(n){var e=n.src,t=n.largeImageURL,a=n.tags,o=void 0===a?"":a,i=n.onSetImgInfo;return Object(I.jsx)(R,{children:Object(I.jsx)(U,{src:e,alt:o,onClick:function(){i({largeImageURL:t,tags:o})}})})},N=m.a.ul(E||(E=Object(h.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])));function q(n){var e=n.images,t=n.onSetImgInfo;return Object(I.jsx)(N,{children:e&&e.map((function(n){return Object(I.jsx)(F,{src:n.webformatURL,alt:n.tags,largeImageURL:n.largeImageURL,onSetImgInfo:t},n.id)}))})}var T,D,M,B,G={fetchImage:function(n,e){return fetch("".concat("https://pixabay.com/api/","?q=").concat(n,"&page=").concat(e,"&key=").concat("18992166-123806360f211761da038f5eb","&image_type=photo&orientation=horizontal&per_page=12")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Invalid request"))}))}},J=m.a.button(T||(T=Object(h.a)(["\n  padding: 8px 16px;\n  margin: 30px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover &:focus {\n    background-color: #303f9f;\n  }\n"])));function _(n){var e=n.onClickLoadMore;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(J,{type:"button",onClick:e,children:"Load more"})})}var A=m.a.div(D||(D=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),H=m.a.div(M||(M=Object(h.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),K=m.a.img(B||(B=Object(h.a)([""]))),Q=document.querySelector("#modal-root");function V(n){var e=n.onClose,t=n.largeImageURL,a=n.alt;Object(p.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return Object(d.createPortal)(Object(I.jsx)(A,{onClick:function(n){n.currentTarget===n.target&&e()},children:Object(I.jsx)(H,{children:Object(I.jsx)(K,{src:t,alt:a})})}),Q)}var W="idle",X="pending",Y="resolved",Z="rejected";function $(){var n=Object(p.useState)(""),e=Object(x.a)(n,2),t=e[0],a=e[1],o=Object(p.useState)([]),i=Object(x.a)(o,2),r=i[0],c=i[1],s=Object(p.useState)(W),l=Object(x.a)(s,2),d=l[0],b=l[1],g=Object(p.useState)(null),h=Object(x.a)(g,2),m=h[0],O=h[1],v=Object(p.useState)(""),w=Object(x.a)(v,2),y=w[0],k=w[1],L=Object(p.useState)(1),z=Object(x.a)(L,2),C=z[0],E=z[1],R=Object(p.useState)(!1),U=Object(x.a)(R,2),F=U[0],N=U[1],T=Object(p.useState)(""),D=Object(x.a)(T,2),M=D[0],B=D[1];Object(p.useEffect)((function(){t&&(b(d.PENDING),G.fetchImage(t,C).then((function(n){if(0===n.total)return j.b.dark("No images. Please try another query!"),void b(Z);c((function(e){return[].concat(Object(u.a)(e),Object(u.a)(n.hits))})),b(Y)})).catch((function(n){O(n),b(Z)})).finally((function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),500)})))}),[t,d.PENDING,C,m]);var J=function(){N(!F)};return Object(I.jsxs)(P,{children:[Object(I.jsx)(S,{onSubmit:function(n){a(n),c([]),E(1)}}),d===W&&Object(I.jsx)("div",{style:{margin:"20px auto",textAlign:"center",fontSize:"20px"},children:"Please, enter a query!"}),r.length>0&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(q,{images:r,onSetImgInfo:function(n){var e=n.target.dataset.source,t=n.target.alt;B(e),k(t),J()}}),Object(I.jsx)(_,{onClickLoadMore:function(){E((function(n){return n.currentPage+1}))}}),F&&Object(I.jsx)(V,{onClose:J,largeImageURL:M,alt:y})]}),d===X&&Object(I.jsx)("div",{children:Object(I.jsx)(f.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3})}),d===Z&&null,Object(I.jsx)(j.a,{autoClose:3e3})]})}b.a.render(Object(I.jsx)(l.a.StrictMode,{children:Object(I.jsx)($,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.49a05f24.chunk.js.map