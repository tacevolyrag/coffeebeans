(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-939b9304"],{8418:function(t,a,c){"use strict";var o=c("c04e"),r=c("9bf2"),e=c("5c6c");t.exports=function(t,a,c){var i=o(a);i in t?r.f(t,i,e(0,c)):t[i]=c}},"99af":function(t,a,c){"use strict";var o=c("23e7"),r=c("d039"),e=c("e8b5"),i=c("861d"),s=c("7b0b"),n=c("50c4"),d=c("8418"),u=c("65f0"),l=c("1dde"),p=c("b622"),f=c("2d00"),v=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",_=f>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),C=l("concat"),b=function(t){if(!i(t))return!1;var a=t[v];return void 0!==a?!!a:e(t)},g=!_||!C;o({target:"Array",proto:!0,forced:g},{concat:function(t){var a,c,o,r,e,i=s(this),l=u(i,0),p=0;for(a=-1,o=arguments.length;a<o;a++)if(e=-1===a?i:arguments[a],b(e)){if(r=n(e.length),p+r>m)throw TypeError(h);for(c=0;c<r;c++,p++)c in e&&d(l,p,e[c])}else{if(p>=m)throw TypeError(h);d(l,p++,e)}return l.length=p,l}})},d3a1:function(t,a,c){"use strict";var o=c("e3ea"),r=c.n(o);r.a},e3ea:function(t,a,c){},eaa9:function(t,a,c){"use strict";c.r(a);var o=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"container"},[c("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),c("div",{staticClass:"card text-center"},[c("div",{staticClass:"card-header h2 product-title"},[t._v(t._s(t.product.title))]),c("div",{staticClass:"card-body"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-6"},[c("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}})]),c("div",{staticClass:"col-md-6"},[c("div",{staticClass:"card-body"},[c("blockquote",{staticClass:"blockquote"},[c("p",{staticClass:"h4 text-center py-3 product-title"},[t._v(t._s(t.product.content))]),c("span",{staticClass:"h5"},[t._v(t._s(t.product.description))])]),c("div",{staticClass:"d-flex justify-content-around my-5 product-price"},[t.product.price?c("div",{staticClass:"h6 product-origin"},[t._v(" 原價 $"+t._s(t._f("thousand")(t.product.origin_price))+" 元")]):t._e(),t.product.price?c("div",{staticClass:"h5 product-off"},[t._v(" 特價 $"+t._s(t._f("thousand")(t.product.price))+" 元")]):t._e()]),c("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var c=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?c:c[0])}}},[c("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("請選擇數量")]),t._l(10,(function(a){return c("option",{key:a,domProps:{value:a}},[t._v("數量 "+t._s(a)+" "+t._s(t.product.unit))])}))],2),c("div",{staticClass:"card-footer modal-footer mt-3"},[t.product.num?c("div",{staticClass:"mr-3 product-off h5"},[t._v(" 總計 "),c("strong",{staticClass:"product-off"},[t._v(" $"+t._s(t._f("thousand")(t.product.price*t.product.num))+" 元")])]):t._e(),t.product.num?c("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(a){return t.detailAddToCart(t.product,t.product.num)}}},[t._v("加到購物車")]):c("button",{staticClass:"btn",attrs:{type:"button",disabled:""},on:{click:function(a){return t.detailAddToCart(t.detailProduct,t.detailProduct.num)}}},[t._v("加到購物車")])])])])])])])],1)},r=[],e=(c("99af"),{data:function(){return{product:{}}},methods:{getProduct:function(){var t=this;this.isLoading=!0;var a=this.$route.params.id,c="".concat("https://course-ec-api.hexschool.io/","api/").concat("daa979c0-17ef-4c8f-8a22-f4834d3fce7a","/ec/product/").concat(a);this.$http.get(c).then((function(a){t.product=a.data.data,t.isLoading=!1}))}},created:function(){this.getProduct()}}),i=e,s=(c("d3a1"),c("2877")),n=Object(s["a"])(i,o,r,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-939b9304.edace165.js.map