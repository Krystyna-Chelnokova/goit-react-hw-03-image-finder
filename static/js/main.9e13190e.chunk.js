(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1N7y_",galleryItemImage:"ImageGalleryItem_galleryItemImage__nU27_"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__Pn5DZ",modal:"Modal_modal__33RGO"}},22:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__3khAz"}},23:function(e,t,a){e.exports={Button:"Button_Button__1G-5A"}},30:function(e,t,a){},31:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(21),c=a.n(o),s=(a(30),a(12)),i=a(4),l=a(5),u=a(7),h=a(6),m=(a(31),a(8)),d=a.n(m),g=a(0),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:d.a.searchbar,children:Object(g.jsxs)("form",{className:d.a.searchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:d.a.searchFormButton,children:Object(g.jsx)("span",{className:d.a.searchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.searchFormInput,type:"text",name:this.state.query,value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=a(10),p=a.n(j);function y(e){var t=e.imgList,a=e.onClickModal;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(g.jsx)("li",{className:p.a.imageGalleryItem,children:Object(g.jsx)("img",{src:n,alt:r,onClick:a,srcSet:o,className:p.a.galleryItemImage})},t)}))}var f=a(22),v=a.n(f);function O(e){var t=e.imgList,a=e.onClickModal;return Object(g.jsx)("ul",{className:v.a.imageGallery,children:Object(g.jsx)(y,{imgList:t,onClickModal:a})})}var _=a(23),x=a.n(_);function k(e){var t=e.onClick;return Object(g.jsx)("button",{className:x.a.Button,type:"button",onClick:function(){return t()},children:"Load more"})}var w=a(24),I=a.n(w),C=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return I.a.get("".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&","&key=").concat("20900619-dafda001e6b1a08a6ce834e06","&q=").concat(a,"&page=").concat(r)).then((function(e){return e.data.hits}))},S=a(11),L=a.n(S),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e.handleKeydown=function(t){console.log(t.code),"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:L.a.overlay,onClick:this.handleBackdropClick,children:[Object(g.jsx)("div",{children:this.props.children}),Object(g.jsx)("div",{className:L.a.modal,children:Object(g.jsx)("img",{src:this.props.largeImage,alt:this.props.alt})})]})}}]),a}(n.Component),B=(a(51),a(25)),N=a.n(B),F=function(){return Object(g.jsx)("div",{className:"Spiner",children:Object(g.jsx)("div",{className:"Block",children:Object(g.jsx)(N.a,{type:"ThreeDots",color:"#097940",height:50,width:50,timeout:3e3})})})},G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],currentPage:1,searchQuery:"",srcset:"",alt:"",isLoading:!1,showModal:!1,error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,hits:[]})},e.fetchHits=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),C(n).then((function(t){e.setState((function(e){return{hits:[].concat(Object(s.a)(e.hits),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState({isLoading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.setLargeImage=function(t){e.setState({largeImg:t.currentTarget.srcset,alt:t.currentTarget.alt}),e.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchHits()}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isLoading,n=e.showModal,r=e.largeImg,o=e.alt;return Object(g.jsxs)("div",{children:[Object(g.jsx)(b,{onSubmit:this.onChangeQuery}),n&&Object(g.jsx)(M,{onClose:this.toggleModal,largeImage:r,alt:o}),Object(g.jsx)(O,{imgList:t,onClickModal:this.setLargeImage}),a&&Object(g.jsx)(F,{}),t.length>0&&Object(g.jsx)(k,{onClick:this.fetchHits})]})}}]),a}(n.Component);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(G,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3ukeR",searchForm:"Searchbar_searchForm__2EjwV",searchFormButton:"Searchbar_searchFormButton__q0-p0",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__10hRG",searchFormInput:"Searchbar_searchFormInput__1-KXT"}}},[[72,1,2]]]);
//# sourceMappingURL=main.9e13190e.chunk.js.map