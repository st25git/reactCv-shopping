(this["webpackJsonpreactcv-shoppingapp"]=this["webpackJsonpreactcv-shoppingapp"]||[]).push([[0],{50:function(e,t,a){e.exports=a(88)},55:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),i=(a(55),a(4)),s=a(5),l=a(7),u=a(6),p=a(11),m=a(12),d=a(1),h=a(10),g=a(8),b="https://media3.scdn.vn",f=function(e,t){return"https://cors-anywhere.herokuapp.com/".concat("https://mapi.sendo.vn","/mob/product/search?p=").concat(e,"&q=").concat(t)},E=function(e,t,a,n){return{type:"GET_PRODUCTS_SUCCESS",products:e,page:t,query:a,isFilter:n}},y=function(e){return{type:"GET_PRODUCTS_FAIL",errMsg:e}},v=function(e,t){return{type:"GET_PRODUCTS_START",isNewSearch:e,isNextPage:t}},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"ADD_TO_CART",index:e,quantity:t}},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"ADD_TO_CART_DETAIL",product:e,quantity:t}},_=function(e,t,a){return{type:"GET_PRICE",priceIndex:e,index:t,quantity:a}},k=function(e){return{type:"DELETE_PRODUCT",index:e}},P=function(e){return{type:"GET_INDEX_IMAGE",indexImage:e}},C=function(e){return{type:"HISTORY_QUERY",query:e}},w=function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/https://mapi.sendo.vn/mob/home").then((function(e){return e.json()})).then((function(t){e({type:"GET_BANNER",banner:t[0].data.list})})).catch((function(t){console.error(t),e(y("r\u1edbt m\u1ea1ng r\u1ed3i n\xe8"))}))}},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return function(c){c(v(a,n)),fetch(f(t,e)).then((function(e){return e.json()})).then((function(a){c(E(a.data,t,e,r))})).catch((function(e){console.error(e),c(y("We have some problem about connecting"))}))}},T=function(e){return function(t){fetch(function(e){return"https://cors-anywhere.herokuapp.com/".concat("https://mapi.sendo.vn","/mob/product/").concat(e,"/detail/")}(e)).then((function(e){return e.json()})).then((function(e){var a,n=Array.isArray(e);console.log(n),t(!1===n?{type:"GET_PRODUCT",product:e,errMsg:a}:function(e){return{type:"GET_PRODUCT_FAIL",errMsg:e}}("Sorry about this problem but the product you want to buy can not found..."))})).catch((function(e){console.error(e)}))}},x=a(90),S=(a(60),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.index;return r.a.createElement("div",{className:"cart_image"},r.a.createElement(p.b,{to:"/detail?id=".concat(t.id,"&name=").concat(t.name,"&index=").concat(a)},r.a.createElement("div",null,r.a.createElement("img",{src:t.img_url||b+t.images[0],alt:t.name}))))}}]),a}(r.a.Component)),I=(a(62),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).inputChange=function(t,a){var n=e.props.quantityProduct[t];n=a.target.value;var r=e.props.cart[t].price*n;console.log(r),e.props.getPrice(r,t,n)},e.handleDelete=function(t,a,n){a=e.props.cart[t],n=e.props.cart[t],e.props.deleteProduct(t,a,n)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.totalPriceOfProduct,a=t.reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"cart-any"},r.a.createElement("div",{className:"list-cart-any",style:0!==this.props.cart.length?{display:"block"}:{display:"none"}},r.a.createElement("table",null,this.props.cart.map((function(a,n){return r.a.createElement("tbody",{key:n},r.a.createElement("tr",{className:"tr-row-1"},r.a.createElement("td",null,r.a.createElement("p",{style:{paddingTop:"30px"}}," ",a.name)),r.a.createElement("td",null,r.a.createElement(x.a,{variant:"outline-danger",onClick:function(){return e.handleDelete(n)},style:{fontSize:"12px"}},"X")," ")),r.a.createElement("tr",{className:"tr-row-2"},r.a.createElement("td",null," ",r.a.createElement(S,{product:a,index:n})),r.a.createElement("td",null," x "),r.a.createElement("td",{index:n}," ",r.a.createElement("input",{index:n,type:"number",min:"1",value:e.props.quantityProduct[n],onChange:function(t,a){return e.inputChange(n,t,a)}})," "),r.a.createElement("td",null," = "),r.a.createElement("td",{className:"price"}," ",r.a.createElement("p",null,t[n].toLocaleString(),"\u0111")," ")),r.a.createElement("tr",{className:"tr-row-3"},r.a.createElement("td",null,"-----------------------------------------")))}))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("p",{style:{color:"red"}},"Total : ",a.toLocaleString(),"\u0111"),r.a.createElement(x.a,{onClick:this.handleOrderSuccess,style:{fontSize:"12px"}},"Order Now"))),r.a.createElement("p",{style:0!==this.props.cart.length?{display:"none"}:{display:"block"}},"Gi\u1ecf h\xe0ng ch\u01b0a c\xf3 s\u1ea3n ph\u1ea9m"))}}]),a}(r.a.Component)),q=Object(h.b)((function(e){return{product:e.product,products:e.products,cart:e.cart,totalPriceOfProduct:e.totalPriceOfProduct,quantityProduct:e.quantityProduct}}),(function(e){return Object(d.a)({},Object(g.b)({getDetailProduct:T,getPrice:_,deleteProduct:k},e))}))(I),A=(a(63),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).backToHistoryQuery=function(){e.props.getProducts(e.props.detailQuery,1,!0)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.detailQuery;return r.a.createElement("span",{className:"back-to-query"},r.a.createElement(p.b,{to:"/reactCv-shopping/list",onClick:this.backToHistoryQuery},e))}}]),a}(r.a.Component)),D=Object(h.b)((function(e){return{isFocus:e.isFocus}}),(function(e){return Object(d.a)({},Object(g.b)({getProducts:N},e))}))(A),M=(a(64),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("table",{className:"list-queries"},r.a.createElement("tbody",null,this.props.historyQuery.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(D,{detailQuery:e,index:t,key:t})))}))))}}]),a}(r.a.Component)),R=Object(h.b)((function(e){return{historyQuery:e.historyQuery,isFocus:e.isFocus}}),(function(e){return Object(d.a)({},Object(g.b)({getProducts:N},e))}))(M),L=(a(65),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.searchByMostView=function(t){e.props.getProducts(t.target.value,1,!0)},e.handleChange=function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{query:t.target.value,value:t.target.value}))},e.handleSearch=function(){var t=document.querySelector(".history-query");t.style.opacity="0",t.style.transform="scale(0)",e.props.getProducts(e.state.query,1,!0),e.props.historyQuery(e.state.query),e.setState(Object(d.a)(Object(d.a)({},e.state),{},{value:""}))},e.handleShowHistoryQuery=function(){var e=document.querySelector(".history-query");e.style.opacity="1",e.style.transform="scale(1)"},e.handleCancel=function(){var e=document.querySelector(".history-query");e.style.opacity="0",e.style.transform="scale(0)"},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"headline"},r.a.createElement("div",{className:"container-headline"},r.a.createElement("div",{className:"list-services"},r.a.createElement("div",{className:"text-intro"},r.a.createElement("p",null,"Demo React Shopping App")),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(p.b,{className:"intro-project",to:"/reactCv-shopping/about-us"},"Gi\u1edbi thi\u1ec7u")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/reactCv-shopping/list"},"\u0110\u0103ng nh\u1eadp")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/reactCv-shopping/registration"},"\u0110\u0103ng k\xed")))))),r.a.createElement("div",{className:"container-header"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/reactCv-shopping/"},r.a.createElement("img",{src:"assets/images/home.webp",alt:"logo"}))),r.a.createElement("div",{className:"form-search suggest"},r.a.createElement("form",{className:"form-header",onSubmit:function(){return r.a.createElement(p.b,{to:"/reactCv-shopping/list"},e.handleSearch())}},r.a.createElement("input",{className:"input-search",type:"text",placeholder:" T\xecm ki\u1ebfm ",onChange:this.handleChange,onClick:this.handleShowHistoryQuery,query:this.props.query,value:this.state.value}),r.a.createElement(p.b,{to:"/reactCv-shopping/list",className:"btn-submit"}," ",r.a.createElement("button",{onClick:this.handleSearch},"Search")),r.a.createElement("div",{className:"history-query"},r.a.createElement(R,null))),r.a.createElement("div",{className:"famous-query"},r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(x.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Th\u1eddi trang n\u1eef"},"Th\u1eddi trang n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(x.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Th\u1eddi trang nam"},"Th\u1eddi trang nam")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(x.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"\u0110\u1ea7m n\u1eef"},"\u0110\u1ea7m n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(x.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Sandal n\u1eef"},"Sandal n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(x.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"D\xe9p nam"},"D\xe9p nam")))),r.a.createElement("div",{className:"logo-cart"},r.a.createElement(p.b,{to:"/reactCv-shopping/cart",className:"link-logo-cart"},"Cart",r.a.createElement("span",{style:0!==this.props.cart.length?{display:"block"}:{display:"none"}},this.props.cart.length)),r.a.createElement(q,null))))}}]),a}(r.a.Component)),F=Object(h.b)((function(e){return{query:e.query,value:e.value,cart:e.cart,minPrice:e.minPrice,maxPrice:e.maxPrice,productBanner:e.productBanner,historyQuery:e.historyQuery,isFocus:e.isFocus}}),(function(e){return Object(d.a)({},Object(g.b)({getProducts:N,getHomeApi:w,historyQuery:C},e))}))(L),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"this is footer")}}]),a}(r.a.Component),B=(a(66),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getProducts(this.props.query,1),this.props.getHomeApi()}},{key:"render",value:function(){var e=this.props.status;return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement("section",{className:"container"},"Start Loading..."===e&&r.a.createElement("img",{className:"img-waiting",src:"https://raw.githubusercontent.com/thanhptse27997/reactCv-shopping/gh-pages/assets/images/tploading.gif",alt:"loading..."}),this.props.children),r.a.createElement(G,null))}}]),a}(r.a.Component)),Q=Object(h.b)((function(e){return{products:e.products,query:e.query,page:e.page,status:e.status}}),(function(e){return Object(d.a)({},Object(g.b)({getProducts:N,getHomeApi:w},e))}))(B),H=a(18),U=a(17),V=(a(70),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleAddToCart=function(t){e.props.addToCart(t)},e.showRating=function(e){for(var t=[],a=1;a<=e;a++)t.push(r.a.createElement(U.a,{icon:H.c,className:"icon-star",key:Math.random()}));for(var n=5-e;n<=5-e;n++)n<Math.round(n)&&t.push(r.a.createElement(U.a,{icon:H.c,key:Math.random()})),n>Math.round(n)&&t.push(r.a.createElement(U.a,{icon:H.d,className:"icon-star",key:Math.random()}));for(var c=1;c<=5-e;c++)t.push(r.a.createElement(U.a,{icon:H.c,key:Math.random()}));return t},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.index;return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"img-product"},r.a.createElement("img",{src:a.img_url,alt:a.name}),r.a.createElement(p.b,{to:"/detail?id=".concat(a.id,"&name=").concat(a.name,"&index=").concat(n)},r.a.createElement("button",{className:"btn-go"},"details")),r.a.createElement("button",{className:"btn-add",onClick:function(){return e.handleAddToCart(n)}},"add to ")),r.a.createElement("div",{className:"info-product"},r.a.createElement("span",{className:"star-product"},this.showRating(a.percent_star)),r.a.createElement("p",{className:"name-product"},a.name.slice(0,42),a.name.length<42?"":"..."),r.a.createElement("p",{style:a.promotion_percent>0?{display:"block",color:"red"}:{display:"none"}},a.final_price.toLocaleString(),"\u0111"),r.a.createElement("p",{className:"price-product",style:a.promotion_percent>0?{textDecoration:"line-through"}:{color:"red"}},a.price.toLocaleString(),"\u0111 ")),r.a.createElement("div",{className:"percent-discout",style:a.promotion_percent>0?{display:"block"}:{display:"none"}},r.a.createElement("p",null," ",r.a.createElement("span",null,"-"),a.promotion_percent,"%")))}}]),a}(r.a.Component)),X=Object(h.b)((function(e){return{products:e.products,category:e.category,cart:e.cart,loginStatus:e.loginStatus}}),(function(e){return Object(d.a)({},Object(g.b)({getProducts:N,addToCart:O,getDetailProduct:T},e))}))(V),Y=(a(71),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isSort:!1},e.handleNextPage=function(){var t=e.props,a=t.page,n=t.isFilter;a++,e.props.getProducts(e.props.query,a,!1,!0,n)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"list-page"},r.a.createElement("div",{className:"products-list"},this.props.products.map((function(e,t){return r.a.createElement(X,{product:e,index:t,key:t})}))),r.a.createElement("div",{className:"btn-next-page"},r.a.createElement("button",{onClick:this.handleNextPage},"Next page")))}}]),a}(r.a.Component)),K=Object(h.b)((function(e){return{products:e.products,page:e.page,query:e.query,isFilter:e.isFilter,status:e.status,errMsg:e.errMsg}}),(function(e){return Object(d.a)({},Object(g.b)({getProducts:N,addToCart:O,getHomeApi:w},e))}))(Y),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.props.itemBanner;switch(t.title){case"VJSERVICEFEE":e="https://www.sendo.vn/tien-ich/ve-may-bay/?ref=home_slider_desktop";break;case"HA_KitchenMachine_TangLoNuong699K_1307_2207\t":e="https://www.sendo.vn/su-kien/deal-bep-sale-to-gia-chi-mot-nua/?ref=home_slider_desktop";break;case"FA_EventT703_Qu\xfd \xf4ng l\u1ecbch l\xe3m":e="https://www.sendo.vn/su-kien/nguoi-ay-la-anh/?ref=home_slider_desktop";break;case"DGS-CHI\u1ebeT KH\u1ea4U 5%":e="https://www.sendo.vn/tien-ich/nap-tien/?ref=home_slider_desktop";break;case"HL_EventT703_S\u1eafm s\u1eeda cu\u1ed1i th\xe1ng, deal x\u1ecbn nh\xe0 sang":e="https://www.sendo.vn/su-kien/sam-sua-cuoi-thang-deal-xin-nha-sang/?ref=home_slider_desktop";break;case"EL_EventT702_Mua \u0111i\u1ec7n tho\u1ea1i c\xf3 qu\xe0":e="https://www.sendo.vn/su-kien/de-la-xu-the/?ref=home_slider_desktop";break;case"ALL_FlashSale_FA_2007":e="https://www.sendo.vn/flash-sale/?category_group_id=50210322&ref=home_slider_desktop";break;case"FPT SHOP":e="https://www.sendo.vn/su-kien/cong-nghe-gia-soc/?ref=home_slider_desktop";break;case"TKB_EventT0703_Senmart":e="https://www.sendo.vn/su-kien/senmart/?ref=home_slider_destop";break;case"FA_EventT703_nangdaopho":e="https://www.sendo.vn/su-kien/nang-xuat-chieu-dien-dep/?ref=home_slider_desktop";break;case"HB_EventT703_B\xed k\xedp \u0111\u1eb9p c\xf9ng sao":e="https://www.sendo.vn/su-kien/lam-dep-cung-sao/?ref=home_slider_desktop";break;case"HV_Motorbike_0307_3107":e="https://www.sendo.vn/su-kien/deal-soc-xe-may/?ref=home_slider_desktop";break;case"FA_BRDT07_VREA&EDEN":e="https://www.sendo.vn/su-kien/vera-eden-chinh-hang-khuyen-mai/?ref=mall_slider_desktop";break;case"\u01afU \u0110\xc3I VPBANK":e="https://www.sendo.vn/su-kien/uu-dai-vpbank/?ref=home_slider_desktop"}return r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:t.image,alt:t.title}))}}]),a}(r.a.Component),Z=Object(h.b)((function(e){return{banner:e.banner}}),(function(e){return Object(d.a)({},Object(g.b)({},e))}))(z),J=a(36),W=(a(72),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(J.a,{className:"banner container"},this.props.banner.map((function(e,t){return r.a.createElement(J.a.Item,{key:t},r.a.createElement(Z,{itemBanner:e,index:t,key:t}))})))}}]),a}(r.a.Component)),$=Object(h.b)((function(e){return{banner:e.banner}}),(function(e){return Object(d.a)({},Object(g.b)({},e))}))(W),ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement($,null))}}]),a}(r.a.Component),te=Object(h.b)((function(e){return{products:e.products,query:e.query,page:e.page}}),(function(e){return Object(d.a)({},Object(g.b)({getProducts:N,addToCart:O,getHomeApi:w},e))}))(ee),ae=a(44),ne=a.n(ae),re=(a(85),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.index;return r.a.createElement(p.b,{to:"/detail?id=".concat(a.id,"&name=").concat(a.name,"&index=").concat(n),className:"img-detail"},r.a.createElement("img",{onClick:function(){return function(t){var a=t;e.props.getIndexImage(a)}(n)},src:b+a.images[n],alt:a.name}))}}]),a}(r.a.Component)),ce=Object(h.b)((function(e){return{indexImage:e.indexImage}}),(function(e){return Object(d.a)({},Object(g.b)({getIndexImage:P},e))}))(re),oe=a(91),ie=a(92),se=a(35),le=(a(86),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleAddToCart_Detail=function(){e.props.addToCart_Detail(e.props.product)},e.previousImage=function(){var t=e.props,a=t.product,n=t.indexImage;console.log(n-1),e.props.getIndexImage(n-1===-1?n=a.images.length-1:n-1)},e.nextImage=function(){var t=e.props,a=t.product,n=t.indexImage;console.log(n+1),e.props.getIndexImage(n+1>a.images.length-1?n=0:n+1)},e.showRatingDetail=function(e){for(var t=[],a=1;a<=e;a++)t.push(r.a.createElement(U.a,{icon:H.c,className:"icon-star-detail",key:Math.random()}));for(var n=5-e;n<=5-e;n++)n<Math.round(n)&&t.push(r.a.createElement(U.a,{icon:H.c,key:Math.random()})),n>Math.round(n)&&t.push(r.a.createElement(U.a,{icon:H.d,className:"icon-star-detail",key:Math.random()}));for(var c=1;c<=5-e;c++)t.push(r.a.createElement(U.a,{icon:H.c,key:Math.random()}));return t},e.handleZoomImg=function(){var e=document.querySelector(".show-img-target");document.querySelector(".btn-close").style.transform="translateX(235px) translateY(75px) scale(1)",e.style.transform="translateX(17%) translateY(-25%) scale(1)"},e.handleOffZoomImg=function(){var e=document.querySelector(".btn-close");document.querySelector(".show-img-target").style.transform="translateX(17%) translateY(-25%) scale(0)",e.style.transform="translateX(235px) translateY(75px) scale(0)"},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=ne.a.parse(window.location.search).id;this.props.getDetailProduct(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.indexImage,c=t.status;return r.a.createElement("div",{className:"container-detail-page"},"Start Loading..."===c&&r.a.createElement("img",{style:{width:"200px"},src:"/tploading.gif",alt:"loading..."}),a&&r.a.createElement(oe.a,{className:"row-detail-page"},r.a.createElement(ie.a,{md:6},r.a.createElement("div",{className:"firstImage"},r.a.createElement("button",{className:"previousImg",onClick:this.previousImage},r.a.createElement(U.a,{icon:H.a})),r.a.createElement("button",{className:"nextImg",onClick:this.nextImage},r.a.createElement(U.a,{icon:H.b})),r.a.createElement("img",{onClick:this.handleZoomImg,className:"img-target",src:b+a.images[n],alt:a.name}),r.a.createElement("div",{className:"show-img-target"},r.a.createElement("img",{src:b+a.images[n],alt:a.name}),r.a.createElement("button",{className:"btn-close",onClick:this.handleOffZoomImg},"X"))),r.a.createElement("div",null,a.images.map((function(e,t){return r.a.createElement(ce,{item:e,product:a,index:t,key:t})})))),r.a.createElement(ie.a,{md:6},r.a.createElement("div",{className:"infoproduct"},r.a.createElement("p",{className:"icon-star"}," ",this.showRatingDetail(a.rating_info.percent_star)),r.a.createElement("p",null,a.name),r.a.createElement("p",{style:{color:"red"}},a.price.toLocaleString()),r.a.createElement(x.a,{variant:"outline-info",id:"btn-addtocart",onClick:function(){return e.handleAddToCart_Detail()}},"add to cart")),r.a.createElement("div",{className:"info-shop"},r.a.createElement("p",null,a.shop_info.shop_name),r.a.createElement("img",{src:a.shop_info.shop_logo,alt:a.shop_info.shop_name}),r.a.createElement("p",null,a.shop_info.phone_number),r.a.createElement("div",{className:"reback-product-free",style:{backgroundImage:"url(".concat(a.customer_benefits.benefits[0].background_url,")")}},r.a.createElement("p",null,a.customer_benefits.benefits[0].text)),r.a.createElement(se.a,{content:a.customer_benefits.benefits[0].tooltip}))),r.a.createElement(ie.a,{md:12,className:"description"},r.a.createElement(se.a,{content:a.description}),r.a.createElement("div",null,r.a.createElement("p",null,a.short_description)))),r.a.createElement("div",{className:"back-to-list"},r.a.createElement(p.b,{to:"reactCv-shopping/list"},"Ti\u1ebfp t\u1ee5c mua s\u1eafm n\xe0o")))}}]),a}(r.a.Component));le.defaultProps={product:void 0};var ue=Object(h.b)((function(e){return{product:e.product,id:e.id,cart:e.cart,loginStatus:e.loginStatus,indexImage:e.indexImage,status:e.status,errMsg:e.errMsg}}),(function(e){return Object(d.a)({},Object(g.b)({getDetailProduct:T,addToCart_Detail:j,getIndexImage:P},e))}))(le),pe=(a(87),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).inputChange=function(t,a){var n=e.props.quantityProduct[t];n=a.target.value;var r=e.props.cart[t].price*n;console.log(r),e.props.getPrice(r,t,n)},e.handleDelete=function(t,a,n){a=e.props.cart[t],n=e.props.cart[t],e.props.deleteProduct(t,a,n)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.totalPriceOfProduct,a=t.reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"cart-compo"},r.a.createElement("div",{className:"list-cart"},r.a.createElement("table",null,this.props.cart.map((function(a,n){return r.a.createElement("tbody",{key:n},r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"150px"}}," ",r.a.createElement("p",{style:{paddingTop:"30px"}}," ",a.name," ")," "),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement(x.a,{variant:"outline-danger",onClick:function(){return e.handleDelete(n)},style:{fontSize:"12px"}},"Delete")," "),r.a.createElement("td",null),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(S,{product:a,index:n})),r.a.createElement("td",null," x "),r.a.createElement("td",{index:n}," ",r.a.createElement("input",{index:n,type:"number",min:"1",value:e.props.quantityProduct[n],onChange:function(t,a){return e.inputChange(n,t,a)}})," "),r.a.createElement("td",null," = "),r.a.createElement("td",{className:"price"}," ",r.a.createElement("p",null,t[n].toLocaleString(),"\u0111")," ")))}))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("p",{style:{color:"red"}},"Total : ",a.toLocaleString(),"\u0111"),r.a.createElement(x.a,{onClick:this.handleOrderSuccess,variant:"outline-success",style:{fontSize:"12px"}},"Order Now"))))}}]),a}(r.a.Component)),me=Object(h.b)((function(e){return{product:e.product,products:e.products,cart:e.cart,totalPriceOfProduct:e.totalPriceOfProduct,quantityProduct:e.quantityProduct}}),(function(e){return Object(d.a)({},Object(g.b)({getDetailProduct:T,getPrice:_,deleteProduct:k},e))}))(pe),de=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"1")}}]),a}(r.a.Component),he=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(Q,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/reactCv-shopping/",component:te}),r.a.createElement(m.a,{exact:!0,path:"/reactCv-shopping/list",component:K}),r.a.createElement(m.a,{exact:!0,path:"/detail",component:ue}),r.a.createElement(m.a,{exact:!0,path:"/reactCv-shopping/cart",component:me}),r.a.createElement(m.a,{exact:!0,path:"/reactCv-shopping/finishOrder",component:de})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(14),be={products:[],minPrice:0,maxPrice:0,category:"",product:void 0,index:-1,id:"",errMsg:"",status:"Start Loading...",page:1,auth:{isLogged:!1,message:""},cart:[],query:" nokia ",loginStatus:!1,totalPriceOfProduct:[],quantityProduct:[],value:"",isFilter:!1,indexImage:0,banner:[],productBanner:void 0,productEventBanner:[],historyQuery:[],isFocus:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER":var a=e.products;return a.sort((function(e,n){switch(t.value){case"lowToHigh":return e.price-n.price;case"highToLow":return n.price-e.price;default:return a}})),Object(d.a)(Object(d.a)({},e),{},{value:t.value});case"GET_PRODUCT":return Object(d.a)(Object(d.a)({},e),{},{product:t.product,image:t.image});case"GET_PRODUCTS_START":return Object(d.a)(Object(d.a)({},e),{},{products:t.isNewSearch||t.isNextPage?[]:e.products,status:"Start Loading...",isFocus:!0,value:t.isNewSearch||t.isNextPage?"":e.value});case"GET_MIN_PRICE":return Object(d.a)(Object(d.a)({},e),{},{minPrice:t.minPrice});case"GET_MAX_PRICE":return Object(d.a)(Object(d.a)({},e),{},{maxPrice:t.maxPrice});case"GET_PRODUCTS_SUCCESS":var n=e.minPrice,r=e.maxPrice,c=[].concat(Object(ge.a)(e.products),Object(ge.a)(t.products)),o=c.filter((function(e){return parseInt(e.price,10)<r})),i=o.filter((function(e){return parseInt(e.price,10)>n}));return Object(d.a)(Object(d.a)({},e),{},{products:t.isFilter?i:c.filter((function(e){return e.percent_star>.5})).sort((function(e,t){return e.percent_star<t.percent_star?-1:0})),status:"Success",isFocus:!1,page:t.page,errMsg:"",query:t.query,isFilter:t.isFilter});case"GET_PRODUCTS_FAIL":return Object(d.a)(Object(d.a)({},e),{},{errMsg:t.errMsg,status:"Fail"});case"GET_PRODUCT_FAIL":return Object(d.a)(Object(d.a)({},e),{},{product:void 0,status:"Fail",errMsg:t.errMsg});case"ADD_TO_CART":var s=e.cart,l=e.products,u=e.totalPriceOfProduct,p=e.quantityProduct,m=l[t.index];console.log(m),s.push(m),p.push(t.quantity),u.push(m.price);for(var h=0;h<s.length-1;h++)s[h].id===m.id&&(s.splice(s.length-1,1),p[h]=p[h]+1,p.splice(p.length-1,1),u[h]+=u[u.length-1],u.splice(u.length-1,1));return Object(d.a)(Object(d.a)({},e),{},{cart:Object(ge.a)(s),totalPriceOfProduct:Object(ge.a)(u),quantityProduct:Object(ge.a)(p)});case"ADD_TO_CART_DETAIL":var g=e.cart,b=e.product,f=e.totalPriceOfProduct,E=e.quantityProduct;g.push(b),E.push(t.quantity),f.push(b.price);for(var y=0;y<g.length-1;y++)g[y].id===b.id&&(g.splice(g.length-1,1),E[y]=E[y]+1,E.splice(E.length-1,1),f[y]+=f[f.length-1],f.splice(f.length-1,1));return Object(d.a)(Object(d.a)({},e),{},{cart:Object(ge.a)(g),totalPriceOfProduct:Object(ge.a)(f),quantityProduct:Object(ge.a)(E)});case"GET_PRICE":var v=e.totalPriceOfProduct,O=e.quantityProduct;return v[t.index]=t.priceIndex,O[t.index]=t.quantity++,Object(d.a)(Object(d.a)({},e),{},{totalPriceOfProduct:Object(ge.a)(v),quantityProduct:Object(ge.a)(O)});case"DELETE_PRODUCT":var j=e.cart,_=e.totalPriceOfProduct,k=e.quantityProduct,P=t.index;return j.splice(P,1),_.splice(P,1),k.splice(P,1),Object(d.a)(Object(d.a)({},e),{},{cart:Object(ge.a)(j),totalPriceOfProduct:Object(ge.a)(_),quantityProduct:Object(ge.a)(k)});case"GET_INDEX_IMAGE":return Object(d.a)(Object(d.a)({},e),{},{indexImage:t.indexImage});case"LOGIN_START":return Object(d.a)(Object(d.a)({},e),{},{auth:{isLogged:!1,message:""}});case"LOGIN_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{auth:t.auth,loginStatus:!0});case"LOGIN_FAIL":return Object(d.a)(Object(d.a)({},e),{},{auth:t.auth});case"LOGIN_RESET":return Object(d.a)(Object(d.a)({},e),{},{auth:{isLogged:!1,message:"logout success"},cart:[],totalPriceOfProduct:[],quantityProduct:[],loginStatus:!1});case"GET_BANNER":return Object(d.a)(Object(d.a)({},e),{},{banner:t.banner});case"GET_EVENT_BANNER":return Object(d.a)(Object(d.a)({},e),{},{productEventBanner:t.eventBanner});case"HISTORY_QUERY":var C=e.historyQuery;return C.push(t.query),Object(d.a)(Object(d.a)({},e),{},{historyQuery:Object(ge.a)(C)});default:return e}},Ee=[function(e){var t=e.getState;return function(e){return function(a){console.log("will dispatch",a);var n=e(a);return console.log("state after dispatch",t()),n}}},a(46).a],ye=Object(g.c)(g.a.apply(void 0,Ee)),ve=Object(g.d)(fe,ye);o.a.render(r.a.createElement(h.a,{store:ve},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.afcee0ea.chunk.js.map