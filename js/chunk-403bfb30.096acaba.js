(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-403bfb30"],{"16a3":function(t,e,a){"use strict";var s=a("cd8c"),n=a.n(s);n.a},"1eb2":function(t,e,a){},"57e9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("Footerbar")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbarPos"},[a("div",{staticClass:"container-fluid bg-themeCoffee sticky-top"},[a("div",{staticClass:"coffee-navbar"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-6 logo"},[a("router-link",{staticClass:"text-secondaryCoffee",attrs:{to:"/"}},[t._v("Coffeebeans")])],1),a("div",{staticClass:"col-sm-6"},[a("ul",{staticClass:"d-flex menu list-unstyled"},[a("li",[a("router-link",{attrs:{to:"/products"}},[t._v("產品列表")])],1),a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("聯絡我們")])],1),a("li",{staticClass:"coffeeNav"},[a("a",{staticClass:"coffee-knowledge",attrs:{href:"#"}},[t._v("咖啡豆知識")]),a("ul",{staticClass:"knowledge-list bg-themeCoffee list-unstyled"},[a("li",[a("router-link",{attrs:{to:"/coffeekind"}},[t._v("咖啡豆種類")])],1),a("li",[a("router-link",{attrs:{to:"/coffeebaking"}},[t._v("烘焙八階段")])],1)])]),a("li",{staticClass:"kindBaking"},[a("router-link",{attrs:{to:"/coffeekind"}},[t._v("咖啡豆種類")])],1),a("li",{staticClass:"kindBaking"},[a("router-link",{attrs:{to:"/coffeebaking"}},[t._v("烘焙八階段")])],1),a("li",[a("router-link",{attrs:{to:"/cart"}},[a("i",{staticClass:"fas fa-shopping-cart"}),t.cart.length?a("span",{staticClass:"badge badge-pill badge-danger badge-transform"},[t._v(t._s(t.cart.length))]):t._e()])],1)]),a("div",{staticClass:"cartHide"},[a("router-link",{attrs:{to:"/cart"}},[a("i",{staticClass:"fas fa-shopping-cart"}),t.cart.length?a("span",{staticClass:"badge badge-pill badge-danger badge-transform"},[t._v(t._s(t.cart.length))]):t._e(),a("span",{attrs:{else:""}})])],1),a("div",{staticClass:"checkMenu",on:{click:function(e){return e.stopPropagation(),t.hbgToggle(e)}}},[a("input",{staticClass:"checkOpen",attrs:{type:"checkbox"}}),a("span",{staticClass:"line line1"}),a("span",{staticClass:"line line2"}),a("span",{staticClass:"line line3"})])])])])]),a("router-view")],1)},c=[],r=(a("99af"),{data:function(){return{cart:{},panelShow:!1}},methods:{getCartItems:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/").concat("daa979c0-17ef-4c8f-8a22-f4834d3fce7a","/ec/shopping");this.$http.get(e).then((function(e){t.cart=e.data.data}))},hbgToggle:function(){$(".navbarPos").toggleClass("menu-show")},queryHide:function(){$(".navbarPos").removeClass("menu-show")&&!0===$(".checkOpen")[0].checked&&($(".checkOpen")[0].checked=!1)}},created:function(){var t=this;this.getCartItems(),this.$bus.$on("get-cart",(function(){t.getCartItems()}))},mounted:function(){document.addEventListener("click",this.queryHide)},beforeDestroy:function(){document.removeEventListener("click",this.queryHide)}}),o=r,l=(a("16a3"),a("2877")),f=Object(l["a"])(o,i,c,!1,null,null,null),u=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",bottom:"0",width:"100%"}},[a("div",{staticClass:"footer container-fluid bg-themeCoffee"},[a("div",{staticClass:"container d-flex justify-content-center align-items-center"},[a("div",{staticClass:"text-secondaryCoffee footer-copyright"},[t._v(" Copyright2020 © CoffeeBeans design by ShengWei ")])])])])}],v={},g=v,b=(a("f529"),Object(l["a"])(g,d,h,!1,null,null,null)),p=b.exports,C={components:{Navbar:u,Footerbar:p}},k=C,m=Object(l["a"])(k,s,n,!1,null,null,null);e["default"]=m.exports},8418:function(t,e,a){"use strict";var s=a("c04e"),n=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var c=s(e);c in t?n.f(t,c,i(0,a)):t[c]=a}},"99af":function(t,e,a){"use strict";var s=a("23e7"),n=a("d039"),i=a("e8b5"),c=a("861d"),r=a("7b0b"),o=a("50c4"),l=a("8418"),f=a("65f0"),u=a("1dde"),d=a("b622"),h=a("2d00"),v=d("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",p=h>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),C=u("concat"),k=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},m=!p||!C;s({target:"Array",proto:!0,forced:m},{concat:function(t){var e,a,s,n,i,c=r(this),u=f(c,0),d=0;for(e=-1,s=arguments.length;e<s;e++)if(i=-1===e?c:arguments[e],k(i)){if(n=o(i.length),d+n>g)throw TypeError(b);for(a=0;a<n;a++,d++)a in i&&l(u,d,i[a])}else{if(d>=g)throw TypeError(b);l(u,d++,i)}return u.length=d,u}})},cd8c:function(t,e,a){},f529:function(t,e,a){"use strict";var s=a("1eb2"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-403bfb30.096acaba.js.map