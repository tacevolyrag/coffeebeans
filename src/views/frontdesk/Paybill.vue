<template>
  <div class="container bg-beige mb-5 pb-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-beige border-bottom">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-lightgrey">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/cart" class="text-lightgrey">購物車</router-link>
        </li>
        <li class="breadcrumb-item font-weight-bold active text-coffee2"
        aria-current="page">填寫資料及付款方式</li>
      </ol>
    </nav>
    <loading :active.sync="isLoading"></loading>
    <!-- shopping step -->
    <div class="container shopping-step py-5">
      <ol class="step d-flex justify-content-center">
        <li class="step1">
          <div class="d-flex justify-content-center align-items-center">1</div>
          <span>確認購物車</span>
        </li>
        <li class="step2">
          <div class="d-flex justify-content-center align-items-center">2</div>
          <span>填寫資料與付款方式</span>
        </li>
        <li class="step3">
          <div class="d-flex justify-content-center align-items-center">3</div>
          <span>確認付款</span>
        </li>
        <li class="step4">
          <div class="d-flex justify-content-center align-items-center">4</div>
          <span>完成訂購</span>
        </li>
      </ol>
    </div>
    <!-- shopping step end -->

    <!-- customer data -->
    <div class="container py-5" v-if="cart.length">
      <div class="row ">
        <div class="col-md-6">
          <div class="row justify-content-center">
            <div class="cart-border">
              <div class="card-header text-left pt-3 text-coffee2">訂單資訊</div>
              <div class="card-body">
                  <table width="100%" class="table">
                    <thead>
                      <tr class="order-header">
                        <th>品名</th>
                        <th>數量</th>
                        <th>價格</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in cart" :key="item.id">
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.quantity }}{{ item.product.unit}}</td>
                        <td class="text-right">
                          $ {{ item.product.price * item.quantity | thousand }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="coupon">
                    <p class="text-left ml-4 mt-5">使用優惠券</p>
                    <div class="input-group input-group-sm mb-3 ml-4">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="form.coupon"
                        aria-describedby="basic-addon2"
                        placeholder="請輸入優惠碼"
                        v-model="form.coupon"
                      />
                      <div class="input-group-append mr-5">
                        <button class="btn btn-coffee2" @click="couponUse">使用</button>
                      </div>
                    </div>
                      <span class="text-danger float-left ml-4"
                      v-if="couponExpired || coupon.enabled === false" >
                      此優惠券無效!</span>
                  </div>
              </div>
              <div class="card-footer pt-3 ">
                <div class="d-flex">
                  <p class="ml-4">商品總額</p>
                  <span class="ml-auto mr-4">
                      NT$ {{ cartTotal | thousand }}</span>
                </div>
                <div class="d-flex" v-if="coupon.enabled">
                  <p class="ml-4">優惠折扣</p>
                  <span class="ml-auto mr-4 text-danger">
                    - ${{  Math.ceil(cartTotal - (cartTotal * (coupon.percent / 100))) | thousand }}
                  </span>
                </div>
                <div class="d-flex checkout-money">
                  <p class="ml-4">結帳金額</p>
                  <span class="ml-auto mr-4 font-weight-bold h5" v-if="coupon.enabled">
                    NT$ {{ checkOutMoney | thousand }}
                  </span>
                  <span class="ml-auto mr-4 font-weight-bold h5" v-else>
                      NT$ {{ cartTotal | thousand }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
         <!-- 訂單資訊驗證及訊息 start-->
        <div class="col-md-6 data-validation">
          <div class="row justify-content-start">
            <validation-observer v-slot="{ invalid }" class="col-md-10">
              <form @submit.prevent="submitData">
                <div class="form-group text-left">
                  <validation-provider rules="required" v-slot="{ errors,classes}">
                    <label for="name">收件人姓名*</label>
                    <input type="text" id="name" name="姓名" v-model="form.name" class="form-control"
                        :class="classes" placeholder="請輸入收件人姓名">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group text-left">
                  <validation-provider rules="required|email" v-slot="{ errors,classes,passed }">
                    <label for="email">電子信箱*</label>
                    <input type="email" id="email" name="信箱" v-model="form.email"
                    class="form-control" :class="classes" placeholder="請輸入信箱">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed" class="text-success">信箱 格式正確</span>
                  </validation-provider>
                </div>
                <div class="form-group text-left">
                  <validation-provider rules="required|min:8" v-slot="{ errors,classes}">
                    <label for="tel">電話號碼*</label>
                    <input type="tel" id="tel" name="電話" v-model="form.tel" class="form-control"
                        :class="classes" placeholder="請輸入電話號碼">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group text-left">
                  <validation-provider rules="required" v-slot="{ errors,classes}">
                    <label for="address">收件地址*</label>
                    <input type="text" id="address" name="地址" v-model="form.address"
                     class="form-control" :class="classes" placeholder="請輸入收件人地址">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group text-left">
                  <validation-provider rules="required">
                    <label for="buyWay">購買方式*</label>
                    <select v-model="form.payment" class="form-control" id="buyWay" required>
                      <option value="" disabled>請選擇付款方案</option>
                      <option value="WebATM">WebATM</option>
                      <option value="ATM">ATM</option>
                      <option value="Barcode">Barcode</option>
                      <option value="Credit">Credit</option>
                      <option value="ApplePay">ApplePay</option>
                      <option value="GooglePay">GooglePay</option>
                    </select>
                    </validation-provider>
                </div>
                <div class="form-group text-left">
                    <label for="message">留言給我們</label>
                    <textarea name="message" id="message" v-model="form.message" cols="30" rows="3"
                        class="form-control"></textarea>
                </div>
                <div class="text-right verification-submit pt-3">
                    <button type="submit" class="btn btn-outline-coffee2" :disabled="invalid">
                      送出訂單資料</button>
                </div>
              </form>
            </validation-observer>
          </div>
        <!-- 收件人資訊驗證及訊息 end-->
        </div>
      </div>
    </div>
    <!-- customer data e -->
    <div class="cart container py-5" v-else>
      <div class="text-center">
        <p class="cart-img"><i class="fas fa-shopping-cart"></i></p>
        <p>您的購物車中沒有商品</p>
        <div class="btn btn-coffee2 cart-goshop" type="button" @click="goToShop" >去購物</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
      coupon: {},
      cartTotal: 0,
      couponCode: '',
      couponExpired: false,
      isLoading: false,
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        coupon: '',
        payment: '',
        message: '',
      },
    };
  },
  computed: {
    checkOutMoney() {
      const ceilMoney = Math.ceil(this.cartTotal - (this.cartTotal * (this.coupon.percent / 100)));
      let totalMoney = this.cartTotal;
      totalMoney -= ceilMoney;
      return totalMoney;
    },
  },
  methods: {
    goToShop() {
      this.$router.push('/products');
    },
    getCartItems() {
      const getCartItemsUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      this.$http.get(getCartItemsUrl).then((res) => {
        this.cart = res.data.data;
        this.updateCartTotal();
        this.isLoading = false;
      }).catch((err) => {
        console.log(err);
        this.isLoading = false;
      });
    },
    submitData() {
      const orderSubmitUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/orders`;
      this.isLoading = true;
      this.$http.post(orderSubmitUrl, this.form)
        .then((res) => {
          const orderId = res.data.data.id;
          this.$router.push(`/payedbill/${orderId}`);
        }).catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    updateCartTotal() {
      this.cartTotal = 0;
      this.cart.forEach((item) => {
        this.cartTotal += item.quantity * item.product.price;
      });
    },
    couponUse() {
      const couponUseUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.isLoading = true;
      this.$http.post(couponUseUrl, { code: this.form.coupon })
        .then((res) => {
          this.couponExpired = false;
          this.coupon = res.data.data;
          this.isLoading = false;
        }).catch((err) => {
          this.isLoading = false;
          this.couponExpired = true;
          console.log(err);
        });
    },
  },
  created() {
    this.getCartItems();
  },
};
</script>

<style lang="scss">
$cf-Step-bgColor:  #632100;
$cf-throughLine-Color: #bbb;

body{
  background-color: #fefdf4;
}
.breadcrumb-item{
  a{
    text-decoration: none;
  }
}
.shopping-step {
  letter-spacing: 1px;
  ol {
    margin-bottom: 0;
    margin-top: 0;
  }
  li {
    margin: 0 60px;
  }
  .step1,
  .step2,
  .step3,
  .step4 {
    div {
      background-color: $cf-Step-bgColor;
      color: #ffebae;
      height: 40px;
      width: 40px;
      margin: 0 auto;
      border-radius: 50%;
      margin-bottom: 15px;
      z-index: 10;
    }
  }
  .step1 {
    position: relative;
    &::before {
      position: absolute;
      display: block;
      content: "";
      background-color: $cf-Step-bgColor;
      width: 200px;
      height: 5px;
      top: 25%;
      right: -208%;
      z-index: 9;
    }
  }
  .step2 {
    position: relative;
    span{
        color: #2c3e50;
    }
    &::before {
      position: absolute;
      display: block;
      content: "";
      background-color: $cf-Step-bgColor;
      width: 192px;
      height: 5px;
      top: 25%;
      right: -88%;
      z-index: 9;
    }
  }
  .step3 {
    position: relative;
    &::before {
      position: absolute;
      display: block;
      content: "";
      background-color: $cf-throughLine-Color;
      height: 5px;
      top: 25%;
      width: 155px;
      right: -200%;
      z-index: 9;
    }
  }
  .step3,.step4 {
    div {
      background-color: $cf-throughLine-Color;
      color: #aaa;
    }
    span {
      color: $cf-throughLine-Color;
    }
  }
}
.cart-border {
  border: 1px solid $cf-throughLine-Color;
  border-radius: 1%;
  .coupon {
    p {
      font-size: 14px;
    }
  }
  .checkout-money{
    padding-top: 20px;
    border-top: 3px solid $cf-Step-bgColor;
  }
}
.order-header{
  font-size: 14px;
  font-weight: bold;
}
.coupon{
  span{
    font-size: 14px;
  }
}
.cart-img{
  font-size: 6rem;
}
.cart-goshop{
  width: 15%;
}
@media screen and (max-width: 768px){
  .shopping-step{
    li{
      margin: 0 59px;
    }
    .step2::before{
      right: -87%;
    }
    .step3::before{
      display: none;
    }
    .step4{
      display: none;
    }
  }
}
@media screen and (max-width: 414px){
  .shopping-step{
    display: none;
  }
  .data-validation{
    margin-top: 50px;
  }
}
</style>
