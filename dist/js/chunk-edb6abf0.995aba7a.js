(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edb6abf0"],{"0eb4":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{attrs:{"aria-live":"polite","aria-atomic":"true"}},[i("div",{staticClass:"toast toastSuc",staticStyle:{position:"absolute",top:"90px",right:"200px","z-index":"30"},attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true","data-delay":"3000","data-animation":"true"}},[i("div",{staticClass:"toast-header"},[i("div",{staticClass:"mr-2",staticStyle:{color:"#632100"}},[i("i",{staticClass:"fas fa-coffee"})]),i("strong",{staticClass:"mr-auto",staticStyle:{color:"#632100"}},[t._v("購物車訊息")]),i("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"toast-body"},[t._v("已經成功加入購物車囉！")])])])])}],r={},o=r,c=i("2877"),n=Object(c["a"])(o,s,e,!1,null,null,null);a["a"]=n.exports},"1b37":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"products"},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),i("div",{staticClass:"container"},[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb bg-beige border-bottom"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{staticClass:"text-lightgrey ",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t._v("首頁")])],1),i("li",{staticClass:"breadcrumb-item font-weight-bold active",attrs:{"aria-current":"page"}},[t._v("商品列表")])])]),i("div",{staticClass:"category pb-3"},[i("ul",{staticClass:"d-flex justify-content-center"},[i("li",{class:{active:"all"===t.filterProducts},on:{click:function(a){return t.filterSort(t.filterProducts="all")}}},[t._v("全部商品")]),i("li",{class:{active:"lightRoast"===t.filterProducts},on:{click:function(a){return t.filterSort(t.filterProducts="lightRoast")}}},[t._v("淺烘焙")]),i("li",{class:{active:"midiumRoast"===t.filterProducts},on:{click:function(a){return t.filterSort(t.filterProducts="midiumRoast")}}},[t._v("中烘焙")]),i("li",{class:{active:"other"===t.filterProducts},on:{click:function(a){return t.filterSort(t.filterProducts="other")}}},[t._v("週邊商品")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"content"},[i("div",{staticClass:"d-flex flex-wrap justify-content-between"},t._l(t.categoryProducts,(function(a){return i("div",{key:a.id,staticClass:"products-list shadow-sm bg-white rounded"},[i("div",{staticClass:"card",staticStyle:{height:"450px"}},[i("a",{attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.getProductDetail(a.id)}}},[i("div",{staticStyle:{height:"200px","background-size":"cover","background-position":"center center","background-repeat":"no-repeat"},style:{backgroundImage:"url("+a.imageUrl+")"}})]),i("div",{staticClass:"card-body"},[i("span",{staticClass:"badge badge-light float-right"},[t._v(t._s(a.category))]),i("h5",{staticClass:"card-title product-title"},[i("a",{staticClass:"text-coffee2 font-weight-bold",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.getProductDetail(a.id)}}},[t._v(" "+t._s(a.title))])]),i("p",{staticClass:"card-text"},[t._v(t._s(a.content))])]),i("div",{staticClass:"d-flex justify-content-around"},[i("div",{staticClass:"product-price"},[a.origin_price?i("div",{staticClass:"h6 product-origin"},[t._v("原價 $"+t._s(t._f("thousand")(a.origin_price))+" 元")]):t._e()]),i("div",{staticClass:"h5 product-off"},[t._v("特價 $"+t._s(t._f("thousand")(a.price))+" 元")])]),i("div",{staticClass:"modal-footer mt-3"},[i("button",{staticClass:"btn btn-outline-coffee2 product-detail",attrs:{type:"button"},on:{click:function(i){return t.getProductDetail(a.id)}}},[t._v("商品資訊")]),i("button",{staticClass:"btn btn-coffee2 ml-auto",attrs:{type:"button"},on:{click:function(i){return t.addToCart(a)}}},[t._v("加入購物車")])])])])})),0)])])])]),i("Toast"),i("Toasterror")],1)},e=[],r=(i("99af"),i("4de4"),i("0eb4")),o=i("2a0b"),c={components:{Toast:r["a"],Toasterror:o["a"]},data:function(){return{isLoading:!1,products:[],categoryProducts:[],filterProducts:"all"}},methods:{getProducts:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat("daa979c0-17ef-4c8f-8a22-f4834d3fce7a","/ec/products");this.$http.get(a).then((function(a){t.products=a.data.data,t.categoryProducts=t.products,t.isLoading=!1}))},getProductDetail:function(t){this.$router.push("/product/".concat(t))},addToCart:function(t){var a=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://course-ec-api.hexschool.io/","api/").concat("daa979c0-17ef-4c8f-8a22-f4834d3fce7a","/ec/shopping"),e={product:t.id,quantity:i};this.isLoading=!0,this.$http.post(s,e).then((function(){a.$bus.$emit("get-cart"),$(".toastSuc").toast("show"),a.isLoading=!1})).catch((function(){$(".toastErr").toast("show"),a.isLoading=!1}))},filterSort:function(){switch(this.filterProducts){case"all":this.categoryProducts=this.products;break;case"lightRoast":this.categoryProducts=this.products.filter((function(t){return"淺烘焙"===t.category}));break;case"midiumRoast":this.categoryProducts=this.products.filter((function(t){return"中烘焙"===t.category}));break;case"other":this.categoryProducts=this.products.filter((function(t){return"Other"===t.category}));break;default:break}}},created:function(){this.getProducts()}},n=c,l=(i("77a6"),i("2877")),u=Object(l["a"])(n,s,e,!1,null,null,null);a["default"]=u.exports},"2a0b":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticStyle:{"min-height":"200px"},attrs:{"aria-live":"polite","aria-atomic":"true"}},[i("div",{staticClass:"toast toastErr",staticStyle:{position:"absolute",top:"90px",right:"200px","z-index":"30"},attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true","data-delay":"3000","data-animation":"true"}},[i("div",{staticClass:"toast-header"},[i("div",{staticClass:"mr-2",staticStyle:{color:"#632100"}},[i("i",{staticClass:"fas fa-bomb"})]),i("strong",{staticClass:"mr-auto",staticStyle:{color:"#632100"}},[t._v("購物車訊息")]),i("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"toast-body text-danger"},[t._v("該商品已經在購物車裡囉!")])])])])}],r={},o=r,c=i("2877"),n=Object(c["a"])(o,s,e,!1,null,null,null);a["a"]=n.exports},"77a6":function(t,a,i){"use strict";var s=i("a44d"),e=i.n(s);e.a},8418:function(t,a,i){"use strict";var s=i("c04e"),e=i("9bf2"),r=i("5c6c");t.exports=function(t,a,i){var o=s(a);o in t?e.f(t,o,r(0,i)):t[o]=i}},"99af":function(t,a,i){"use strict";var s=i("23e7"),e=i("d039"),r=i("e8b5"),o=i("861d"),c=i("7b0b"),n=i("50c4"),l=i("8418"),u=i("65f0"),d=i("1dde"),f=i("b622"),v=i("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",g=v>=51||!e((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=d("concat"),C=function(t){if(!o(t))return!1;var a=t[h];return void 0!==a?!!a:r(t)},_=!g||!m;s({target:"Array",proto:!0,forced:_},{concat:function(t){var a,i,s,e,r,o=c(this),d=u(o,0),f=0;for(a=-1,s=arguments.length;a<s;a++)if(r=-1===a?o:arguments[a],C(r)){if(e=n(r.length),f+e>p)throw TypeError(b);for(i=0;i<e;i++,f++)i in r&&l(d,f,r[i])}else{if(f>=p)throw TypeError(b);l(d,f++,r)}return d.length=f,d}})},a44d:function(t,a,i){}}]);
//# sourceMappingURL=chunk-edb6abf0.995aba7a.js.map