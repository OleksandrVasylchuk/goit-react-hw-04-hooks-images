(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{22:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var a,r,o,i,c,s,l,p,u,d,h,g=t(0),m=t.n(g),b=t(9),x=t.n(b),f=(t(20),t(21),t(22),t(5)),j=t(6),v=t(8),O=t(7),y=t(10),w=t(2),k=t(3),C=k.a.header(a||(a=Object(w.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),S=k.a.form(r||(r=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),N=k.a.button(o||(o=Object(w.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),M=k.a.span(i||(i=Object(w.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),P=k.a.input(c||(c=Object(w.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &:placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),z=t(1),L=function(e){Object(v.a)(t,e);var n=Object(O.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={imageName:""},e.handleNameChange=function(n){e.setState({imageName:n.currentTarget.value.toLowerCase()})},e.handleSubmit=function(n){n.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):y.b.error("Please, enter something!")},e}return Object(j.a)(t,[{key:"render",value:function(){return Object(z.jsx)(C,{children:Object(z.jsxs)(S,{onSubmit:this.handleSubmit,children:[Object(z.jsx)(N,{type:"submit",children:Object(z.jsx)(M,{})}),Object(z.jsx)(P,{type:"text",name:"imageName",placeholder:"Search images and photos",autoComplete:"off",autoFocus:!0,value:this.state.imageName,onChange:this.handleNameChange})]})})}}]),t}(g.Component),F=t(12),I=t(14),A=t.n(I),D=k.a.div(s||(s=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),E=k.a.div(l||(l=Object(w.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),U=k.a.img(p||(p=Object(w.a)([""]))),q=document.querySelector("#modal-root"),R=function(e){Object(v.a)(t,e);var n=Object(O.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).handleKeyDown=function(n){"Escape"===n.code&&e.props.onClose()},e.handleOverlayClick=function(n){n.currentTarget===n.target&&e.props.onClose()},e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,n=e.src,t=e.alt;return Object(b.createPortal)(Object(z.jsx)(D,{onClick:this.handleOverlayClick,children:Object(z.jsx)(E,{children:Object(z.jsx)(U,{src:n,alt:t})})}),q)}}]),t}(g.Component),T=k.a.li(u||(u=Object(w.a)(["\n  border-radius: 3px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),K=k.a.img(d||(d=Object(w.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),B=function(e){Object(v.a)(t,e);var n=Object(O.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props,n=e.src,t=e.alt,a=e.largeImageURL,r=this.state.showModal;return Object(z.jsxs)(T,{children:[Object(z.jsx)(K,{src:n,alt:t,onClick:this.toggleModal}),r&&Object(z.jsx)(R,{onClose:this.toggleModal,src:a,alt:t})]})}}]),t}(g.Component),J=k.a.ul(h||(h=Object(w.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])));function _(e){var n=e.images;return Object(z.jsx)(J,{children:n&&n.map((function(e){return Object(z.jsx)(B,{src:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},e.id)}))})}var H,W={fetchImage:function(e,n){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(n,"&key=").concat("18992166-123806360f211761da038f5eb","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Invalid request"))}))}},G=k.a.button(H||(H=Object(w.a)(["\n  padding: 8px 16px;\n  margin: 30px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover &:focus {\n    background-color: #303f9f;\n  }\n"])));function Q(e){var n=e.onClickLoadMore;return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(G,{type:"button",onClick:n,children:"Load more"})})}var V,X="idle",Y="pending",Z="resolved",$="rejected",ee=function(e){Object(v.a)(t,e);var n=Object(O.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={images:[],status:X,error:null,currentPage:1},e.onClickLoadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e}return Object(j.a)(t,[{key:"componentDidUpdate",value:function(e,n){var t=e.imageName,a=this.props.imageName,r=n.currentPage,o=this.state.currentPage;t!==a&&this.setState({images:[],currentPage:1}),t===a&&r===o||this.searchMoreImages(a,o)}},{key:"searchMoreImages",value:function(e,n){var t=this;this.setState({status:Y}),W.fetchImage(e,n).then((function(e){if(0===e.total)return y.b.dark("No images. Please try another query!"),void t.setState({status:$});t.setState((function(n){return{images:[].concat(Object(F.a)(n.images),Object(F.a)(e.hits)),status:Z}}))})).catch((function(e){return t.setState({error:e,status:$})})).finally((function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),500)}))}},{key:"render",value:function(){var e=this.state,n=e.images,t=e.status;return Object(z.jsxs)(z.Fragment,{children:[t===X&&Object(z.jsx)("div",{style:{margin:"20px auto",textAlign:"center",fontSize:"20px"},children:"Please, enter a query!"}),n.length>0&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(_,{images:n}),Object(z.jsx)(Q,{onClickLoadMore:this.onClickLoadMore})]}),t===Y&&Object(z.jsx)("div",{children:Object(z.jsx)(A.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3})}),t===$&&null]})}}]),t}(g.Component),ne=k.a.div(V||(V=Object(w.a)(["\n  max-width: 100%;\n  /* display: flex;\n  flex-direction: column; */\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  padding: 15px 30px;\n  text-align: center;\n"])));var te=function(e){var n=e.children;return Object(z.jsx)(ne,{children:n})},ae=function(e){Object(v.a)(t,e);var n=Object(O.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={imageName:""},e.handleSearchForm=function(n){e.setState({imageName:n})},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this.state.imageName;return Object(z.jsxs)(te,{children:[Object(z.jsx)(L,{onSubmit:this.handleSearchForm}),Object(z.jsx)(ee,{imageName:e,currentPage:this.props.currentPage}),Object(z.jsx)(y.a,{autoClose:3e3})]})}}]),t}(g.Component);x.a.render(Object(z.jsx)(m.a.StrictMode,{children:Object(z.jsx)(ae,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.04f4952a.chunk.js.map