(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17082970"],{"1dde":function(t,r,o){var c=o("d039"),a=o("b622"),e=o("2d00"),n=a("species");t.exports=function(t){return e>=51||!c((function(){var r=[],o=r.constructor={};return o[n]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,o){var c=o("861d"),a=o("e8b5"),e=o("b622"),n=e("species");t.exports=function(t,r){var o;return a(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!a(o.prototype)?c(o)&&(o=o[n],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===r?0:r)}},8418:function(t,r,o){"use strict";var c=o("c04e"),a=o("9bf2"),e=o("5c6c");t.exports=function(t,r,o){var n=c(r);n in t?a.f(t,n,e(0,o)):t[n]=o}},"99af":function(t,r,o){"use strict";var c=o("23e7"),a=o("d039"),e=o("e8b5"),n=o("861d"),i=o("7b0b"),s=o("50c4"),u=o("8418"),d=o("65f0"),l=o("1dde"),p=o("b622"),f=o("2d00"),v=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",_=f>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=l("concat"),C=function(t){if(!n(t))return!1;var r=t[v];return void 0!==r?!!r:e(t)},g=!_||!b;c({target:"Array",proto:!0,forced:g},{concat:function(t){var r,o,c,a,e,n=i(this),l=d(n,0),p=0;for(r=-1,c=arguments.length;r<c;r++)if(e=-1===r?n:arguments[r],C(e)){if(a=s(e.length),p+a>m)throw TypeError(h);for(o=0;o<a;o++,p++)o in e&&u(l,p,e[o])}else{if(p>=m)throw TypeError(h);u(l,p++,e)}return l.length=p,l}})},d3a1:function(t,r,o){"use strict";var c=o("e3ea"),a=o.n(c);a.a},e3ea:function(t,r,o){},e8b5:function(t,r,o){var c=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}},eaa9:function(t,r,o){"use strict";o.r(r);var c=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"container"},[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(r){t.isLoading=r}}}),o("div",{staticClass:"card text-center"},[o("div",{staticClass:"card-header h2 product-title"},[t._v(t._s(t.product.title))]),o("div",{staticClass:"card-body"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}})]),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"card-body"},[o("blockquote",{staticClass:"blockquote"},[o("p",{staticClass:"h4 text-center py-3 product-title"},[t._v(t._s(t.product.content))]),o("span",{staticClass:"h5"},[t._v(t._s(t.product.description))])]),o("div",{staticClass:"d-flex justify-content-around my-5 product-price"},[t.product.price?o("div",{staticClass:"h6 product-origin"},[t._v(" 原價 $"+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price?o("div",{staticClass:"h5 product-off"},[t._v(" 特價 $"+t._s(t.product.price)+" 元")]):t._e()]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(r){var o=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.product,"num",r.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("請選擇數量")]),t._l(10,(function(r){return o("option",{key:r,domProps:{value:r}},[t._v("數量 "+t._s(r)+" "+t._s(t.product.unit))])}))],2),o("div",{staticClass:"card-footer modal-footer mt-3"},[t.product.num?o("div",{staticClass:"mr-3 product-off h5"},[t._v(" 總計 "),o("strong",{staticClass:"product-off"},[t._v("$"+t._s(t.product.price*t.product.num)+" 元")])]):t._e(),t.product.num?o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(r){return t.detailAddToCart(t.product,t.product.num)}}},[t._v("加到購物車")]):o("button",{staticClass:"btn",attrs:{type:"button",disabled:""},on:{click:function(r){return t.detailAddToCart(t.detailProduct,t.detailProduct.num)}}},[t._v("加到購物車")])])])])])])])],1)},a=[],e=(o("99af"),{data:function(){return{product:{}}},methods:{getProduct:function(){var t=this;this.isLoading=!0;var r=this.$route.params.id,o="".concat("https://course-ec-api.hexschool.io/","api/").concat("daa979c0-17ef-4c8f-8a22-f4834d3fce7a","/ec/product/").concat(r);this.$http.get(o).then((function(r){t.product=r.data.data,console.log(t.product),t.isLoading=!1}))}},created:function(){this.getProduct()}}),n=e,i=(o("d3a1"),o("2877")),s=Object(i["a"])(n,c,a,!1,null,null,null);r["default"]=s.exports}}]);
//# sourceMappingURL=chunk-17082970.a0faa6cc.js.map