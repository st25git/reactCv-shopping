(this["webpackJsonpreactcv-shoppingapp"]=this["webpackJsonpreactcv-shoppingapp"]||[]).push([[0],{48:function(e,t,a){e.exports=a(79)},53:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),i=(a(53),a(5)),u=a(6),s=a(8),l=a(7),p=a(10),d=a(11),m=a(1),h=a(12),b=a(9),g="https://media3.scdn.vn",f=function(e,t){return"https://cors-anywhere.herokuapp.com/".concat("https://mapi.sendo.vn","/mob/product/search?p=").concat(e,"&q=").concat(t)},v=function(e,t){return{type:"GET_PRODUCT",product:e,errMsg:t}},O=function(e,t,a,n){return{type:"GET_PRODUCTS_SUCCESS",products:e,page:t,query:a,isFilter:n}},E=function(e){return{type:"GET_PRODUCTS_FAIL",errMsg:e}},j=function(e){return{type:"GET_PRODUCTS_START",isNewSearch:e}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"ADD_TO_CART",index:e,quantity:t}},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"ADD_TO_CART_DETAIL",product:e,quantity:t}},T=function(e){return{type:"GET_INDEX_IMAGE",indexImage:e}},P=function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/https://mapi.sendo.vn/mob/event/deal-soc-xe-may").then((function(e){return e.json()})).then((function(t){e({type:"GET_EVENT_BANNER",eventBanner:t.product})})).catch((function(t){console.error(t),e(E("r\u1edbt m\u1ea1ng r\u1ed3i n\xe8"))}))}},_=function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/https://mapi.sendo.vn/mob/home").then((function(e){return e.json()})).then((function(t){e({type:"GET_BANNER",banner:t[0].data.list}),console.log(t[0].data.list),console.log(t[0].type)})).catch((function(t){console.error(t),e(E("r\u1edbt m\u1ea1ng r\u1ed3i n\xe8"))}))}},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(r){r(j(a)),fetch(f(t,e)).then((function(e){return e.json()})).then((function(a){r(O(a.data,t,e,n))})).catch((function(e){console.error(e),r(E("We have some problem about connecting"))}))}},k=function(e){return function(t){fetch(function(e){return"https://cors-anywhere.herokuapp.com/".concat("https://mapi.sendo.vn","/mob/product/").concat(e,"/detail/")}(e)).then((function(e){return e.json()})).then((function(e){var a=Array.isArray(e);console.log(a),t(0==a?v(e):{type:"GET_PRODUCT_FAIL",errMsg:"Sorry about this problem but the product you want to buy can not found..."})})).catch((function(e){console.error(e)}))}},I=a(81),N=(a(58),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.searchByMostView=function(t){e.state.query=t.target.value,e.props.getProducts(e.state.query,1,!0)},e.handleChange=function(t){e.setState(Object(m.a)(Object(m.a)({},e.state),{},{query:t.target.value,value:t.target.value}))},e.handleSearch=function(){e.props.getProducts(e.state.query,1,!0)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"headline"},r.a.createElement("div",{className:"container-headline"},r.a.createElement("div",{className:"list-services"},r.a.createElement("div",{className:"text-intro"},r.a.createElement("p",null,"Demo React Shopping App")),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(p.b,{className:"intro-project",to:"/reactCv-shopping/about-us"},"Gi\u1edbi thi\u1ec7u")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/reactCv-shopping/list"},"\u0110\u0103ng nh\u1eadp")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/reactCv-shopping/registration"},"\u0110\u0103ng k\xed")))))),r.a.createElement("div",{className:"container-header"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/reactCv-shopping/"},r.a.createElement("img",{src:"assets/images/home.webp",atl:"logo"}))),r.a.createElement("form",{className:"form-search",onSubmit:function(){return r.a.createElement(p.b,{to:"/reactCv-shopping/list"},e.handleSearch())}},r.a.createElement("input",{type:"text",placeholder:" T\xecm ki\u1ebfm ",onChange:this.handleChange,query:this.props.query}),r.a.createElement(p.b,{to:"/reactCv-shopping/list",className:"btn-submit"}," ",r.a.createElement("button",{onClick:this.handleSearch},"Search"))),r.a.createElement("div",{className:"logo-cart"},r.a.createElement(p.b,{to:"/reactCv-shopping/cart"},"Cart"))),r.a.createElement("div",{className:"famous-query"},r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(I.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Th\u1eddi trang n\u1eef"},"Th\u1eddi trang n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(I.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Th\u1eddi trang nam"},"Th\u1eddi trang nam")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(I.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"\u0110\u1ea7m n\u1eef"},"\u0110\u1ea7m n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(I.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Sandal n\u1eef"},"Sandal n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(I.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"D\xe9p nam"},"D\xe9p nam"))))}}]),a}(r.a.Component)),S=Object(h.b)((function(e){return{query:e.query,value:e.value,minPrice:e.minPrice,maxPrice:e.maxPrice,productBanner:e.productBanner}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:x,getHomeApi:_,getEvent:P},e))}))(N),w=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"this is footer")}}]),a}(r.a.Component),A=(a(60),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.getProducts(this.props.query,1),this.props.getEvent(),this.props.getHomeApi()}},{key:"render",value:function(){var e=this.props.status;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("section",{className:"container"},"Start Loading..."==e&&r.a.createElement("img",{style:{width:"200px"},src:"https://raw.githubusercontent.com/thanhptse27997/reactCv-shopping/gh-pages/assets/images/tploading.gif"}),this.props.children),r.a.createElement(w,null))}}]),a}(r.a.Component)),D=Object(h.b)((function(e){return{products:e.products,query:e.query,page:e.page,status:e.status}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:x,getHomeApi:_,getEvent:P},e))}))(A),M=a(19),q=a(18),R=(a(64),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleAddToCart=function(t){e.props.addToCart(t)},e.showRating=function(e){for(var t=[],a=1;a<=e;a++)t.push(r.a.createElement(q.a,{icon:M.c,className:"icon-star",key:Math.random()}));for(var n=5-e;n<=5-e;n++)n<Math.round(n)&&t.push(r.a.createElement(q.a,{icon:M.c,key:Math.random()})),n>Math.round(n)&&t.push(r.a.createElement(q.a,{icon:M.d,className:"icon-star",key:Math.random()}));for(var c=1;c<=5-e;c++)t.push(r.a.createElement(q.a,{icon:M.c,key:Math.random()}));return t},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.index;return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"img-product"},r.a.createElement("img",{src:a.img_url}),r.a.createElement("button",{className:"btn-add",onClick:function(){return e.handleAddToCart(n)}},"add to "),r.a.createElement(p.b,{to:"/detail?id=".concat(a.id,"&name=").concat(a.name,"&index=").concat(n)},r.a.createElement("button",{className:"btn-go"},"details"))),r.a.createElement("div",{className:"info-product"},r.a.createElement("span",{className:"star-product"},this.showRating(a.percent_star)),r.a.createElement("p",null,a.name),r.a.createElement("p",{style:{color:"red"}},a.price.toLocaleString(),"\u0111 ")))}}]),a}(r.a.Component)),G=Object(h.b)((function(e){return{products:e.products,category:e.category,cart:e.cart,loginStatus:e.loginStatus}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:x,addToCart:y,getProduct:v},e))}))(R),L=(a(65),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"products-list"},this.props.products.map((function(e,t){return r.a.createElement(G,{product:e,index:t,key:t})})))}}]),a}(r.a.Component)),B=Object(h.b)((function(e){return{products:e.products}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:x,addToCart:y,getEvent:P,getHomeApi:_},e))}))(L),F=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.itemBanner;return r.a.createElement("div",null,r.a.createElement("img",{src:e.image}))}}]),a}(r.a.Component),U=Object(h.b)((function(e){return{banner:e.banner}}),(function(e){return Object(m.a)({},Object(b.b)({},e))}))(F),V=a(34),H=(a(66),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(V.a,{className:"banner container"},this.props.banner.map((function(e,t){return r.a.createElement(V.a.Item,{key:t},"HV_Motorbike_0307_3107"===e.title?r.a.createElement(p.b,{to:"/reactCv-shopping/eventbanner"},r.a.createElement(U,{itemBanner:e,index:t,key:t})):r.a.createElement(U,{itemBanner:e,index:t,key:t}))})))}}]),a}(r.a.Component)),W=Object(h.b)((function(e){return{banner:e.banner}}),(function(e){return Object(m.a)({},Object(b.b)({},e))}))(H),X=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"home-page"},r.a.createElement(W,null))}}]),a}(r.a.Component),J=Object(h.b)((function(e){return{products:e.products,query:e.query,page:e.page}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:x,addToCart:y,getEvent:P,getHomeApi:_},e))}))(X),$=a(43),z=a.n($),K=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.index;return r.a.createElement(p.b,{to:"/detail?id=".concat(a.id,"&name=").concat(a.name,"&index=").concat(n)},r.a.createElement("img",{onClick:function(){return function(t){var a=t;e.props.getIndexImage(a)}(n)},style:{width:"50px"},src:g+a.images[n]}))}}]),a}(r.a.Component),Q=Object(h.b)((function(e){return{indexImage:e.indexImage}}),(function(e){return Object(m.a)({},Object(b.b)({getIndexImage:T},e))}))(K),Y=a(82),Z=a(83),ee=a(84),te=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleAddToCart_Detail=function(){e.props.addToCart_Detail(e.props.product)},e.previousImage=function(){var t=e.props,a=t.product,n=t.indexImage;console.log(n-1),e.props.getIndexImage(n-1==-1?n=a.images.length-1:n-1)},e.nextImage=function(){var t=e.props,a=t.product,n=t.indexImage;console.log(n+1),e.props.getIndexImage(n+1>a.images.length-1?n=0:n+1)},e.showRatingDetail=function(e){for(var t=[],a=1;a<=e;a++)t.push(r.a.createElement(q.a,{icon:M.c,className:"icon-star-detail",key:Math.random()}));for(var n=5-e;n<=5-e;n++)n<Math.round(n)&&t.push(r.a.createElement(q.a,{icon:M.c,key:Math.random()})),n>Math.round(n)&&t.push(r.a.createElement(q.a,{icon:M.d,className:"icon-star-detail",key:Math.random()}));for(var c=1;c<=5-e;c++)t.push(r.a.createElement(q.a,{icon:M.c,key:Math.random()}));return t},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=z.a.parse(window.location.search).id;this.props.getDetailProduct(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.indexImage,c=t.errMsg,o=t.status;return r.a.createElement(Y.a,{className:"container-normal"},"Start Loading..."==o&&r.a.createElement("img",{style:{width:"200px"},src:"/tploading.gif"}),a?r.a.createElement(Z.a,{className:"detail-page"},r.a.createElement(ee.a,{md:8},r.a.createElement("div",{className:"firstImage"},r.a.createElement("button",{className:"previousImg",onClick:this.previousImage},r.a.createElement(q.a,{icon:M.a})),r.a.createElement("button",{className:"nextImg",onClick:this.nextImage},r.a.createElement(q.a,{icon:M.b})),r.a.createElement("img",{src:g+a.images[n]})),r.a.createElement("div",null,a.images.map((function(e,t){return r.a.createElement(Q,{item:e,product:a,index:t,key:t})})))),r.a.createElement(ee.a,{md:4},r.a.createElement("div",{className:"infoproduct"},r.a.createElement("p",null," ",this.showRatingDetail(a.rating_info.percent_star)),r.a.createElement("p",null,a.name),r.a.createElement("p",{style:{color:"red"}},a.price.toLocaleString()),r.a.createElement(I.a,{variant:"outline-info",id:"btn-addtocart",onClick:function(){return e.handleAddToCart_Detail()}},"add to cart")))):r.a.createElement("div",null,r.a.createElement("p",{style:{color:"red"}},c),r.a.createElement(p.b,{to:"/thanhptse-Cv/porfolio/list"},"Ti\u1ebfp t\u1ee5c mua s\u1eafm n\xe0o")))}}]),a}(r.a.Component);te.defaultProps={product:void 0,id:""};var ae=Object(h.b)((function(e){return{product:e.product,index:e.index,id:e.id,cart:e.cart,loginStatus:e.loginStatus,indexImage:e.indexImage,status:e.status,errMsg:e.errMsg}}),(function(e){return Object(m.a)({},Object(b.b)({getDetailProduct:k,addToCart_Detail:C,getIndexImage:T},e))}))(te),ne=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"1")}}]),a}(r.a.Component),re=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(D,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/reactCv-shopping/",component:J}),r.a.createElement(d.a,{exact:!0,path:"/reactCv-shopping/list",component:B}),r.a.createElement(d.a,{exact:!0,path:"/detail",component:ae}),r.a.createElement(d.a,{exact:!0,path:"/reactCv-shopping/finishOrder",component:ne})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(15),oe={products:[],minPrice:0,maxPrice:0,category:"",product:void 0,index:-1,id:"",errMsg:"",status:"Start Loading...",page:1,auth:{isLogged:!1,message:""},cart:[],query:" nokia ",loginStatus:!1,totalPriceOfProduct:[],quantityProduct:[],value:"",isFilter:!1,indexImage:0,banner:[],productBanner:void 0,productEventBanner:[]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER":var a=e.products;return a.sort((function(e,a){switch(t.value){case"lowToHigh":return e.price-a.price;case"highToLow":return a.price-e.price}})),Object(m.a)(Object(m.a)({},e),{},{value:t.value});case"GET_PRODUCT":return Object(m.a)(Object(m.a)({},e),{},{product:t.product,image:t.image});case"GET_PRODUCTS_START":return Object(m.a)(Object(m.a)({},e),{},{products:t.isNewSearch?[]:e.products,status:"Start Loading...",value:t.isNewSearch?"":e.value});case"GET_MIN_PRICE":return Object(m.a)(Object(m.a)({},e),{},{minPrice:t.minPrice});case"GET_MAX_PRICE":return Object(m.a)(Object(m.a)({},e),{},{maxPrice:t.maxPrice});case"GET_PRODUCTS_SUCCESS":var n=e.minPrice,r=e.maxPrice,c=[].concat(Object(ce.a)(e.products),Object(ce.a)(t.products)),o=c.filter((function(e){return parseInt(e.price,10)<r})),i=o.filter((function(e){return parseInt(e.price,10)>n}));return Object(m.a)(Object(m.a)({},e),{},{products:t.isFilter?i:c.filter((function(e){return 0!=e.percent_star})).sort((function(e,t){return e.percent_star<t.percent_star?-1:0})),status:"Success",page:t.page,errMsg:"",query:t.query,isFilter:t.isFilter});case"GET_PRODUCTS_FAIL":return Object(m.a)(Object(m.a)({},e),{},{errMsg:t.errMsg,status:"Fail"});case"GET_PRODUCT_FAIL":return Object(m.a)(Object(m.a)({},e),{},{product:void 0,status:"Fail",errMsg:t.errMsg});case"ADD_TO_CART":var u=e.cart,s=e.products,l=(e.product,e.totalPriceOfProduct),p=e.quantityProduct,d=s[t.index];return u.findIndex((function(e){return e.id===d.id}))>=0?(p[u.indexOf(d)]+=t.quantity,l[u.indexOf(d)]+=d.price):(u.push(d),l.push(d.price),p.push(t.index=t.quantity)),Object(m.a)(Object(m.a)({},e),{},{cart:Object(ce.a)(u),totalPriceOfProduct:Object(ce.a)(l),quantityProduct:Object(ce.a)(p)});case"ADD_TO_CART_DETAIL":var h=e.cart,b=e.product,g=e.totalPriceOfProduct,f=e.quantityProduct;return h.push(b),g.push(b.price),f.push(t.quantity),Object(m.a)(Object(m.a)({},e),{},{cart:Object(ce.a)(h),totalPriceOfProduct:Object(ce.a)(g),quantityProduct:Object(ce.a)(f)});case"GET_PRICE":var v=e.totalPriceOfProduct,O=e.quantityProduct;return v[t.index]=t.priceIndex,O[t.index]=t.quantity++,Object(m.a)(Object(m.a)({},e),{},{totalPriceOfProduct:Object(ce.a)(v),quantityProduct:Object(ce.a)(O)});case"DELETE_PRODUCT":var E=e.cart,j=e.totalPriceOfProduct,y=e.quantityProduct,C=t.index;return E.splice(C,1),j.splice(C,1),y.splice(C,1),Object(m.a)(Object(m.a)({},e),{},{cart:Object(ce.a)(E),totalPriceOfProduct:Object(ce.a)(j),quantityProduct:Object(ce.a)(y)});case"GET_INDEX_IMAGE":return Object(m.a)(Object(m.a)({},e),{},{indexImage:t.indexImage});case"LOGIN_START":return Object(m.a)(Object(m.a)({},e),{},{auth:{isLogged:!1,message:""}});case"LOGIN_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{auth:t.auth,loginStatus:!0});case"LOGIN_FAIL":return Object(m.a)(Object(m.a)({},e),{},{auth:t.auth});case"LOGIN_RESET":return Object(m.a)(Object(m.a)({},e),{},{auth:{isLogged:!1,message:"logout success"},cart:[],totalPriceOfProduct:[],quantityProduct:[],loginStatus:!1});case"GET_BANNER":return Object(m.a)(Object(m.a)({},e),{},{banner:t.banner});case"GET_EVENT_BANNER":return Object(m.a)(Object(m.a)({},e),{},{productEventBanner:t.eventBanner});default:return e}},ue=[function(e){var t=e.getState;return function(e){return function(a){console.log("will dispatch",a);var n=e(a);return console.log("state after dispatch",t()),n}}},a(44).a],se=Object(b.c)(b.a.apply(void 0,ue)),le=Object(b.d)(ie,se);o.a.render(r.a.createElement(h.a,{store:le},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.d7b25ba7.chunk.js.map