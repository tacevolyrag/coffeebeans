(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08e39cfd"],{"2a62":function(t,a,e){},8418:function(t,a,e){"use strict";var s=e("c04e"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,a,e){var r=s(a);r in t?o.f(t,r,i(0,e)):t[r]=e}},"99af":function(t,a,e){"use strict";var s=e("23e7"),o=e("d039"),i=e("e8b5"),r=e("861d"),n=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),p=e("b622"),f=e("2d00"),m=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",_=f>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=u("concat"),C=function(t){if(!r(t))return!1;var a=t[m];return void 0!==a?!!a:i(t)},b=!_||!g;s({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,s,o,i,r=n(this),u=d(r,0),p=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?r:arguments[a],C(i)){if(o=c(i.length),p+o>v)throw TypeError(h);for(e=0;e<o;e++,p++)e in i&&l(u,p,i[e])}else{if(p>=v)throw TypeError(h);l(u,p++,i)}return u.length=p,u}})},a617:function(t,a,e){"use strict";var s=e("2a62"),o=e.n(s);o.a},e4e0:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container bg-beige mb-5 pb-5"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb bg-beige border-bottom"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{staticClass:"text-lightgrey ",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t._v("首頁")])],1),e("li",{staticClass:"breadcrumb-item"},[e("router-link",{staticClass:"text-lightgrey ",staticStyle:{"text-decoration":"none"},attrs:{to:"/cart"}},[t._v("購物車")])],1),e("li",{staticClass:"breadcrumb-item font-weight-bold active text-coffee2",attrs:{"aria-current":"page"}},[t._v("填寫資料及付款方式")])])]),e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._m(0),t.cart.length?e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"cart-border"},[e("div",{staticClass:"card-header text-left pt-3 text-coffee2"},[t._v("訂單資訊")]),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table",attrs:{width:"100%"}},[t._m(1),e("tbody",t._l(t.cart,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.product.title))]),e("td",[t._v(t._s(a.quantity)+t._s(a.product.unit))]),e("td",{staticClass:"text-right"},[t._v(" $ "+t._s(t._f("thousand")(a.product.price*a.quantity)))])])})),0)]),e("div",{staticClass:"coupon"},[e("p",{staticClass:"text-left ml-4 mt-5"},[t._v("使用優惠券")]),e("div",{staticClass:"input-group input-group-sm mb-3 ml-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.coupon,expression:"form.coupon"}],staticClass:"form-control",attrs:{type:"text","aria-label":"form.coupon","aria-describedby":"basic-addon2",placeholder:"請輸入優惠碼"},domProps:{value:t.form.coupon},on:{input:function(a){a.target.composing||t.$set(t.form,"coupon",a.target.value)}}}),e("div",{staticClass:"input-group-append mr-5"},[e("button",{staticClass:"btn btn-coffee2",on:{click:t.couponUse}},[t._v("使用")])])]),t.couponExpired||!1===t.coupon.enabled?e("span",{staticClass:"text-danger float-left ml-4",staticStyle:{"font-size":"14px"}},[t._v(" 此優惠券無效!")]):t._e()])]),e("div",{staticClass:"card-footer pt-3 "},[e("div",{staticClass:"d-flex"},[e("p",{staticClass:"ml-4"},[t._v("商品總額")]),e("span",{staticClass:"ml-auto mr-4"},[t._v(" NT$ "+t._s(t._f("thousand")(t.cartTotal)))])]),t.coupon.enabled?e("div",{staticClass:"d-flex"},[e("p",{staticClass:"ml-4"},[t._v("優惠折扣")]),e("span",{staticClass:"ml-auto mr-4 text-danger"},[t._v(" - $"+t._s(t._f("thousand")(Math.ceil(t.cartTotal-t.cartTotal*(t.coupon.percent/100))))+" ")])]):t._e(),e("div",{staticClass:"d-flex checkout-money"},[e("p",{staticClass:"ml-4"},[t._v("結帳金額")]),t.coupon.enabled?e("span",{staticClass:"ml-auto mr-4 font-weight-bold h5"},[t._v(" NT$ "+t._s(t._f("thousand")(t.checkOutMoney))+" ")]):e("span",{staticClass:"ml-auto mr-4 font-weight-bold h5"},[t._v(" NT$ "+t._s(t._f("thousand")(t.cartTotal)))])])])])])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("validation-observer",{staticClass:"col-md-9",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.submitData(a)}}},[e("div",{staticClass:"form-group text-left"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"name"}},[t._v("收件人姓名*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"name",name:"姓名",placeholder:"請輸入收件人姓名"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group text-left"},[e("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes,i=a.passed;return[e("label",{attrs:{for:"email"}},[t._v("電子信箱*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:o,attrs:{type:"email",id:"email",name:"信箱",placeholder:"請輸入信箱"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))]),i?e("span",{staticClass:"text-success"},[t._v("信箱 格式正確")]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group text-left"},[e("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"tel"}},[t._v("電話號碼*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:o,attrs:{type:"tel",id:"tel",name:"電話",placeholder:"請輸入電話號碼"},domProps:{value:t.form.tel},on:{input:function(a){a.target.composing||t.$set(t.form,"tel",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group text-left"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"address"}},[t._v("收件地址*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"address",name:"地址",placeholder:"請輸入收件人地址"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group text-left"},[e("validation-provider",{attrs:{rules:"required"}},[e("label",{attrs:{for:"buyWay"}},[t._v("購買方式*")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",attrs:{id:"buyWay",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.form,"payment",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("請選擇付款方案")]),e("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),e("option",{attrs:{value:"ATM"}},[t._v("ATM")]),e("option",{attrs:{value:"Barcode"}},[t._v("Barcode")]),e("option",{attrs:{value:"Credit"}},[t._v("Credit")]),e("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),e("option",{attrs:{value:"GooglePay"}},[t._v("GooglePay")])])])],1),e("div",{staticClass:"form-group text-left"},[e("label",{attrs:{for:"message"}},[t._v("留言給我們")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"message",id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"text-right verification-submit pt-3"},[e("button",{staticClass:"btn btn-outline-coffee2",attrs:{type:"submit",disabled:s}},[t._v(" 送出訂單資料")])])])]}}],null,!1,2458101449)})],1)])])]):e("div",{staticClass:"cart container py-5"},[e("div",{staticClass:"text-center"},[t._m(2),e("p",[t._v("您的購物車中沒有商品")]),e("div",{staticClass:"btn btn-coffee2",staticStyle:{width:"15%"},attrs:{type:"button"},on:{click:t.goToShop}},[t._v("去購物")])])])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container shopping-step py-5"},[e("ol",{staticClass:"step d-flex justify-content-center"},[e("li",{staticClass:"step1"},[e("div",{staticClass:"d-flex justify-content-center align-items-center"},[t._v("1")]),e("span",[t._v("確認購物車")])]),e("li",{staticClass:"step2"},[e("div",{staticClass:"d-flex justify-content-center align-items-center"},[t._v("2")]),e("span",[t._v("填寫資料與付款方式")])]),e("li",{staticClass:"step3"},[e("div",{staticClass:"d-flex justify-content-center align-items-center"},[t._v("3")]),e("span",[t._v("確認付款")])]),e("li",{staticClass:"step4"},[e("div",{staticClass:"d-flex justify-content-center align-items-center"},[t._v("4")]),e("span",[t._v("完成訂購")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticStyle:{"font-size":"14px"}},[e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("價格")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticStyle:{"font-size":"6rem"}},[e("i",{staticClass:"fas fa-shopping-cart"})])}],i=(e("99af"),e("4160"),e("159b"),{data:function(){return{cart:{},coupon:{},cartTotal:0,couponCode:"",couponExpired:!1,isLoading:!1,form:{name:"",email:"",tel:"",address:"",coupon:"",payment:"",message:""}}},computed:{checkOutMoney:function(){var t=Math.ceil(this.cartTotal-this.cartTotal*(this.coupon.percent/100)),a=this.cartTotal;return a-=t,a}},methods:{goToShop:function(){this.$router.push("/products")},getCartItems:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("daa979c0-17ef-4c8f-8a22-f4834d3fce7a","/ec/shopping");this.isLoading=!0,this.$http.get(a).then((function(a){t.cart=a.data.data,t.updateCartTotal(),t.isLoading=!1})).catch((function(){t.isLoading=!1}))},submitData:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("daa979c0-17ef-4c8f-8a22-f4834d3fce7a","/ec/orders");this.isLoading=!0,this.$http.post(a,this.form).then((function(a){var e=a.data.data.id;t.$router.push("/payedbill/".concat(e))})).catch((function(a){console.dir(a),t.isLoading=!1}))},updateCartTotal:function(){var t=this;this.cartTotal=0,this.cart.forEach((function(a){t.cartTotal+=a.quantity*a.product.price}))},couponUse:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("daa979c0-17ef-4c8f-8a22-f4834d3fce7a","/ec/coupon/search");this.isLoading=!0,this.$http.post(a,{code:this.form.coupon}).then((function(a){t.couponExpired=!1,t.coupon=a.data.data,t.isLoading=!1})).catch((function(){t.couponExpired=!0,t.isLoading=!1}))}},created:function(){this.getCartItems()}}),r=i,n=(e("a617"),e("2877")),c=Object(n["a"])(r,s,o,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-08e39cfd.bb54a852.js.map