(this["webpackJsonpreactcv-shoppingapp"]=this["webpackJsonpreactcv-shoppingapp"]||[]).push([[0],{48:function(e,t,a){e.exports=a(79)},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),i=(a(53),a(5)),u=a(6),l=a(8),s=a(7),p=a(10),d=a(12),m=a(1),h=a(11),b=a(9),g="https://media3.scdn.vn",E=function(e,t){return"https://cors-anywhere.herokuapp.com/".concat("https://mapi.sendo.vn","/mob/product/search?p=").concat(e,"&q=").concat(t)},f=function(e,t){return{type:"GET_PRODUCT",product:e,errMsg:t}},v=function(e,t,a,n){return{type:"GET_PRODUCTS_SUCCESS",products:e,page:t,query:a,isFilter:n}},O=function(e){return{type:"GET_PRODUCTS_FAIL",errMsg:e}},j=function(e){return{type:"GET_PRODUCTS_START",isNewSearch:e}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"ADD_TO_CART",index:e,quantity:t}},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"ADD_TO_CART_DETAIL",product:e,quantity:t}},P=function(e,t,a){return{type:"GET_PRICE",priceIndex:e,index:t,quantity:a}},T=function(e){return{type:"DELETE_PRODUCT",index:e}},x=function(e){return{type:"GET_INDEX_IMAGE",indexImage:e}},_=function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/https://mapi.sendo.vn/mob/event/deal-soc-xe-may").then((function(e){return e.json()})).then((function(t){e({type:"GET_EVENT_BANNER",eventBanner:t.product})})).catch((function(t){console.error(t),e(O("r\u1edbt m\u1ea1ng r\u1ed3i n\xe8"))}))}},k=function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/https://mapi.sendo.vn/mob/home").then((function(e){return e.json()})).then((function(t){e({type:"GET_BANNER",banner:t[0].data.list}),console.log(t[0].data.list),console.log(t[0].type)})).catch((function(t){console.error(t),e(O("r\u1edbt m\u1ea1ng r\u1ed3i n\xe8"))}))}},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(r){r(j(a)),fetch(E(t,e)).then((function(e){return e.json()})).then((function(a){r(v(a.data,t,e,n))})).catch((function(e){console.error(e),r(O("We have some problem about connecting"))}))}},I=function(e){return function(t){fetch(function(e){return"https://cors-anywhere.herokuapp.com/".concat("https://mapi.sendo.vn","/mob/product/").concat(e,"/detail/")}(e)).then((function(e){return e.json()})).then((function(e){var a=Array.isArray(e);console.log(a),t(0==a?f(e):{type:"GET_PRODUCT_FAIL",errMsg:"Sorry about this problem but the product you want to buy can not found..."})})).catch((function(e){console.error(e)}))}},S=a(81),w=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.index;return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/detail?id=".concat(t.id,"&name=").concat(t.name,"&index=").concat(a)},r.a.createElement("div",{className:"cart_image"},r.a.createElement("img",{style:{width:"60px"},src:t.img_url||g+t.images[0]}))))}}]),a}(r.a.Component),D=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).inputChange=function(t,a){var n=e.props.quantityProduct[t];n=a.target.value;var r=e.props.cart[t].price*n;console.log(r),e.props.getPrice(r,t,n)},e.handleDelete=function(t,a,n){a=e.props.cart[t],n=e.props.cart[t],e.props.deleteProduct(t,a,n)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.cart,n=t.totalPriceOfProduct,c=n.reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"Cart"},r.a.createElement("span",{className:"quantity-cart"},a.length),r.a.createElement("div",{className:"list-cart"},r.a.createElement("table",null,this.props.cart.map((function(t,a){return r.a.createElement("tbody",{key:a},r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"150px"}}," ",r.a.createElement("p",{style:{paddingTop:"30px"}}," ",t.name," ")," "),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement(S.a,{variant:"outline-danger",onClick:function(){return e.handleDelete(a)},style:{fontSize:"12px"}},"Delete")," "),r.a.createElement("td",null),r.a.createElement("td",null)),r.a.createElement("tr",null),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(w,{product:t,index:a})),r.a.createElement("td",null," x "),r.a.createElement("td",{index:a}," ",r.a.createElement("input",{index:a,type:"number",min:"1",value:e.props.quantityProduct[a],onChange:function(t,n){return e.inputChange(a,t,n)}})," "),r.a.createElement("td",null," = "),r.a.createElement("td",{className:"price"}," ",r.a.createElement("p",null,n[a].toLocaleString(),"\u0111")," ")))}))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("p",{style:{color:"red"}},"Total : ",c.toLocaleString(),"\u0111"),r.a.createElement(S.a,{onClick:this.handleOrderSuccess,variant:"outline-success",style:{fontSize:"12px"}},"Order Now"))))}}]),a}(r.a.Component),q=Object(h.b)((function(e){return{product:e.product,products:e.products,cart:e.cart,totalPriceOfProduct:e.totalPriceOfProduct,quantityProduct:e.quantityProduct}}),(function(e){return Object(m.a)({},Object(b.b)({getDetailProduct:I,getPrice:P,deleteProduct:T},e))}))(D),A=(a(59),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.searchByMostView=function(t){e.state.query=t.target.value,e.props.getProducts(e.state.query,1,!0)},e.handleChange=function(t){e.setState(Object(m.a)(Object(m.a)({},e.state),{},{query:t.target.value,value:t.target.value}))},e.handleSearch=function(){e.props.getProducts(e.state.query,1,!0)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"headline"},r.a.createElement("div",{className:"container-headline"},r.a.createElement("div",{className:"list-services"},r.a.createElement("div",{className:"text-intro"},r.a.createElement("p",null,"Demo React Shopping App")),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(p.b,{className:"intro-project",to:"/reactCv-shopping/about-us"},"Gi\u1edbi thi\u1ec7u")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/reactCv-shopping/list"},"\u0110\u0103ng nh\u1eadp")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/reactCv-shopping/registration"},"\u0110\u0103ng k\xed")))))),r.a.createElement("div",{className:"container-header"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/reactCv-shopping/"},r.a.createElement("img",{src:"assets/images/home.webp",atl:"logo"}))),r.a.createElement("form",{className:"form-search",onSubmit:function(){return r.a.createElement(p.b,{to:"/reactCv-shopping/list"},e.handleSearch())}},r.a.createElement("input",{type:"text",placeholder:" T\xecm ki\u1ebfm ",onChange:this.handleChange,query:this.props.query}),r.a.createElement(p.b,{to:"/reactCv-shopping/list",className:"btn-submit"}," ",r.a.createElement("button",{onClick:this.handleSearch},"Search"))),r.a.createElement("div",{className:"logo-cart"},r.a.createElement(p.b,{to:"/reactCv-shopping/cart"},"Cart",r.a.createElement("div",null,r.a.createElement(q,null))))),r.a.createElement("div",{className:"famous-query"},r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(S.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Th\u1eddi trang n\u1eef"},"Th\u1eddi trang n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(S.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Th\u1eddi trang nam"},"Th\u1eddi trang nam")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(S.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"\u0110\u1ea7m n\u1eef"},"\u0110\u1ea7m n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(S.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"Sandal n\u1eef"},"Sandal n\u1eef")),r.a.createElement(p.b,{to:"/reactCv-shopping/list"},r.a.createElement(S.a,{variant:"link",type:"button",onClick:this.searchByMostView,value:"D\xe9p nam"},"D\xe9p nam"))))}}]),a}(r.a.Component)),M=Object(h.b)((function(e){return{query:e.query,value:e.value,minPrice:e.minPrice,maxPrice:e.maxPrice,productBanner:e.productBanner}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:N,getHomeApi:k,getEvent:_},e))}))(A),R=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"this is footer")}}]),a}(r.a.Component),G=(a(60),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.getProducts(this.props.query,1),this.props.getEvent(),this.props.getHomeApi()}},{key:"render",value:function(){var e=this.props.status;return r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement("section",{className:"container"},"Start Loading..."==e&&r.a.createElement("img",{style:{width:"200px"},src:"https://raw.githubusercontent.com/thanhptse27997/reactCv-shopping/gh-pages/assets/images/tploading.gif"}),this.props.children),r.a.createElement(R,null))}}]),a}(r.a.Component)),L=Object(h.b)((function(e){return{products:e.products,query:e.query,page:e.page,status:e.status}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:N,getHomeApi:k,getEvent:_},e))}))(G),B=a(19),U=a(18),F=(a(64),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleAddToCart=function(t){e.props.addToCart(t)},e.showRating=function(e){for(var t=[],a=1;a<=e;a++)t.push(r.a.createElement(U.a,{icon:B.c,className:"icon-star",key:Math.random()}));for(var n=5-e;n<=5-e;n++)n<Math.round(n)&&t.push(r.a.createElement(U.a,{icon:B.c,key:Math.random()})),n>Math.round(n)&&t.push(r.a.createElement(U.a,{icon:B.d,className:"icon-star",key:Math.random()}));for(var c=1;c<=5-e;c++)t.push(r.a.createElement(U.a,{icon:B.c,key:Math.random()}));return t},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.index;return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"img-product"},r.a.createElement("img",{src:a.img_url}),r.a.createElement(p.b,{to:"/detail?id=".concat(a.id,"&name=").concat(a.name,"&index=").concat(n)},r.a.createElement("button",{className:"btn-go"},"details")),r.a.createElement("button",{className:"btn-add",onClick:function(){return e.handleAddToCart(n)}},"add to ")),r.a.createElement("div",{className:"info-product"},r.a.createElement("span",{className:"star-product"},this.showRating(a.percent_star)),r.a.createElement("p",null,a.name),r.a.createElement("p",{style:{color:"red"}},a.price.toLocaleString(),"\u0111 ")))}}]),a}(r.a.Component)),V=Object(h.b)((function(e){return{products:e.products,category:e.category,cart:e.cart,loginStatus:e.loginStatus}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:N,addToCart:y,getProduct:f},e))}))(F),H=(a(65),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"products-list"},this.props.products.map((function(e,t){return r.a.createElement(V,{product:e,index:t,key:t})})))}}]),a}(r.a.Component)),W=Object(h.b)((function(e){return{products:e.products}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:N,addToCart:y,getEvent:_,getHomeApi:k},e))}))(H),X=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.itemBanner;return r.a.createElement("div",null,r.a.createElement("img",{src:e.image}))}}]),a}(r.a.Component),z=Object(h.b)((function(e){return{banner:e.banner}}),(function(e){return Object(m.a)({},Object(b.b)({},e))}))(X),J=a(35),$=(a(66),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(J.a,{className:"banner container"},this.props.banner.map((function(e,t){return r.a.createElement(J.a.Item,{key:t},"HV_Motorbike_0307_3107"===e.title?r.a.createElement(p.b,{to:"/reactCv-shopping/eventbanner"},r.a.createElement(z,{itemBanner:e,index:t,key:t})):r.a.createElement(z,{itemBanner:e,index:t,key:t}))})))}}]),a}(r.a.Component)),K=Object(h.b)((function(e){return{banner:e.banner}}),(function(e){return Object(m.a)({},Object(b.b)({},e))}))($),Q=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"home-page"},r.a.createElement(K,null))}}]),a}(r.a.Component),Y=Object(h.b)((function(e){return{products:e.products,query:e.query,page:e.page}}),(function(e){return Object(m.a)({},Object(b.b)({getProducts:N,addToCart:y,getEvent:_,getHomeApi:k},e))}))(Q),Z=a(43),ee=a.n(Z),te=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.index;return r.a.createElement(p.b,{to:"/detail?id=".concat(a.id,"&name=").concat(a.name,"&index=").concat(n)},r.a.createElement("img",{onClick:function(){return function(t){var a=t;e.props.getIndexImage(a)}(n)},style:{width:"50px"},src:g+a.images[n]}))}}]),a}(r.a.Component),ae=Object(h.b)((function(e){return{indexImage:e.indexImage}}),(function(e){return Object(m.a)({},Object(b.b)({getIndexImage:x},e))}))(te),ne=a(82),re=a(83),ce=a(84),oe=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleAddToCart_Detail=function(){e.props.addToCart_Detail(e.props.product)},e.previousImage=function(){var t=e.props,a=t.product,n=t.indexImage;console.log(n-1),e.props.getIndexImage(n-1==-1?n=a.images.length-1:n-1)},e.nextImage=function(){var t=e.props,a=t.product,n=t.indexImage;console.log(n+1),e.props.getIndexImage(n+1>a.images.length-1?n=0:n+1)},e.showRatingDetail=function(e){for(var t=[],a=1;a<=e;a++)t.push(r.a.createElement(U.a,{icon:B.c,className:"icon-star-detail",key:Math.random()}));for(var n=5-e;n<=5-e;n++)n<Math.round(n)&&t.push(r.a.createElement(U.a,{icon:B.c,key:Math.random()})),n>Math.round(n)&&t.push(r.a.createElement(U.a,{icon:B.d,className:"icon-star-detail",key:Math.random()}));for(var c=1;c<=5-e;c++)t.push(r.a.createElement(U.a,{icon:B.c,key:Math.random()}));return t},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=ee.a.parse(window.location.search).id;this.props.getDetailProduct(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.indexImage,c=t.errMsg,o=t.status;return r.a.createElement(ne.a,{className:"container-normal"},"Start Loading..."==o&&r.a.createElement("img",{style:{width:"200px"},src:"/tploading.gif"}),a?r.a.createElement(re.a,{className:"detail-page"},r.a.createElement(ce.a,{md:8},r.a.createElement("div",{className:"firstImage"},r.a.createElement("button",{className:"previousImg",onClick:this.previousImage},r.a.createElement(U.a,{icon:B.a})),r.a.createElement("button",{className:"nextImg",onClick:this.nextImage},r.a.createElement(U.a,{icon:B.b})),r.a.createElement("img",{src:g+a.images[n]})),r.a.createElement("div",null,a.images.map((function(e,t){return r.a.createElement(ae,{item:e,product:a,index:t,key:t})})))),r.a.createElement(ce.a,{md:4},r.a.createElement("div",{className:"infoproduct"},r.a.createElement("p",null," ",this.showRatingDetail(a.rating_info.percent_star)),r.a.createElement("p",null,a.name),r.a.createElement("p",{style:{color:"red"}},a.price.toLocaleString()),r.a.createElement(S.a,{variant:"outline-info",id:"btn-addtocart",onClick:function(){return e.handleAddToCart_Detail()}},"add to cart")))):r.a.createElement("div",null,r.a.createElement("p",{style:{color:"red"}},c),r.a.createElement(p.b,{to:"/thanhptse-Cv/porfolio/list"},"Ti\u1ebfp t\u1ee5c mua s\u1eafm n\xe0o")))}}]),a}(r.a.Component);oe.defaultProps={product:void 0,id:""};var ie=Object(h.b)((function(e){return{product:e.product,index:e.index,id:e.id,cart:e.cart,loginStatus:e.loginStatus,indexImage:e.indexImage,status:e.status,errMsg:e.errMsg}}),(function(e){return Object(m.a)({},Object(b.b)({getDetailProduct:I,addToCart_Detail:C,getIndexImage:x},e))}))(oe),ue=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"1")}}]),a}(r.a.Component),le=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(L,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/reactCv-shopping/",component:Y}),r.a.createElement(d.a,{exact:!0,path:"/reactCv-shopping/list",component:W}),r.a.createElement(d.a,{exact:!0,path:"/detail",component:ie}),r.a.createElement(d.a,{exact:!0,path:"/reactCv-shopping/cart",component:q}),r.a.createElement(d.a,{exact:!0,path:"/reactCv-shopping/finishOrder",component:ue})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(15),pe={products:[],minPrice:0,maxPrice:0,category:"",product:void 0,index:-1,id:"",errMsg:"",status:"Start Loading...",page:1,auth:{isLogged:!1,message:""},cart:[],query:" nokia ",loginStatus:!1,totalPriceOfProduct:[],quantityProduct:[],value:"",isFilter:!1,indexImage:0,banner:[],productBanner:void 0,productEventBanner:[]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER":var a=e.products;return a.sort((function(e,a){switch(t.value){case"lowToHigh":return e.price-a.price;case"highToLow":return a.price-e.price}})),Object(m.a)(Object(m.a)({},e),{},{value:t.value});case"GET_PRODUCT":return Object(m.a)(Object(m.a)({},e),{},{product:t.product,image:t.image});case"GET_PRODUCTS_START":return Object(m.a)(Object(m.a)({},e),{},{products:t.isNewSearch?[]:e.products,status:"Start Loading...",value:t.isNewSearch?"":e.value});case"GET_MIN_PRICE":return Object(m.a)(Object(m.a)({},e),{},{minPrice:t.minPrice});case"GET_MAX_PRICE":return Object(m.a)(Object(m.a)({},e),{},{maxPrice:t.maxPrice});case"GET_PRODUCTS_SUCCESS":var n=e.minPrice,r=e.maxPrice,c=[].concat(Object(se.a)(e.products),Object(se.a)(t.products)),o=c.filter((function(e){return parseInt(e.price,10)<r})),i=o.filter((function(e){return parseInt(e.price,10)>n}));return Object(m.a)(Object(m.a)({},e),{},{products:t.isFilter?i:c.filter((function(e){return 0!=e.percent_star})).sort((function(e,t){return e.percent_star<t.percent_star?-1:0})),status:"Success",page:t.page,errMsg:"",query:t.query,isFilter:t.isFilter});case"GET_PRODUCTS_FAIL":return Object(m.a)(Object(m.a)({},e),{},{errMsg:t.errMsg,status:"Fail"});case"GET_PRODUCT_FAIL":return Object(m.a)(Object(m.a)({},e),{},{product:void 0,status:"Fail",errMsg:t.errMsg});case"ADD_TO_CART":var u=e.cart,l=e.products,s=(e.product,e.totalPriceOfProduct),p=e.quantityProduct,d=l[t.index];return u.findIndex((function(e){return e.id===d.id}))>=0?(p[u.indexOf(d)]+=t.quantity,s[u.indexOf(d)]+=d.price):(u.push(d),s.push(d.price),p.push(t.index=t.quantity)),Object(m.a)(Object(m.a)({},e),{},{cart:Object(se.a)(u),totalPriceOfProduct:Object(se.a)(s),quantityProduct:Object(se.a)(p)});case"ADD_TO_CART_DETAIL":var h=e.cart,b=e.product,g=e.totalPriceOfProduct,E=e.quantityProduct;return h.push(b),g.push(b.price),E.push(t.quantity),Object(m.a)(Object(m.a)({},e),{},{cart:Object(se.a)(h),totalPriceOfProduct:Object(se.a)(g),quantityProduct:Object(se.a)(E)});case"GET_PRICE":var f=e.totalPriceOfProduct,v=e.quantityProduct;return f[t.index]=t.priceIndex,v[t.index]=t.quantity++,Object(m.a)(Object(m.a)({},e),{},{totalPriceOfProduct:Object(se.a)(f),quantityProduct:Object(se.a)(v)});case"DELETE_PRODUCT":var O=e.cart,j=e.totalPriceOfProduct,y=e.quantityProduct,C=t.index;return O.splice(C,1),j.splice(C,1),y.splice(C,1),Object(m.a)(Object(m.a)({},e),{},{cart:Object(se.a)(O),totalPriceOfProduct:Object(se.a)(j),quantityProduct:Object(se.a)(y)});case"GET_INDEX_IMAGE":return Object(m.a)(Object(m.a)({},e),{},{indexImage:t.indexImage});case"LOGIN_START":return Object(m.a)(Object(m.a)({},e),{},{auth:{isLogged:!1,message:""}});case"LOGIN_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{auth:t.auth,loginStatus:!0});case"LOGIN_FAIL":return Object(m.a)(Object(m.a)({},e),{},{auth:t.auth});case"LOGIN_RESET":return Object(m.a)(Object(m.a)({},e),{},{auth:{isLogged:!1,message:"logout success"},cart:[],totalPriceOfProduct:[],quantityProduct:[],loginStatus:!1});case"GET_BANNER":return Object(m.a)(Object(m.a)({},e),{},{banner:t.banner});case"GET_EVENT_BANNER":return Object(m.a)(Object(m.a)({},e),{},{productEventBanner:t.eventBanner});default:return e}},me=[function(e){var t=e.getState;return function(e){return function(a){console.log("will dispatch",a);var n=e(a);return console.log("state after dispatch",t()),n}}},a(44).a],he=Object(b.c)(b.a.apply(void 0,me)),be=Object(b.d)(de,he);o.a.render(r.a.createElement(h.a,{store:be},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.ba978cbf.chunk.js.map