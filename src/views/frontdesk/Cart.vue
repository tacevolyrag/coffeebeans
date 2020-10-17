<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-beige border-bottom">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-lightgrey">首頁</router-link>
        </li>
        <li
          class="breadcrumb-item font-weight-bold active text-infoCoffee"
          aria-current="page"
        >
          購物車
        </li>
      </ol>
    </nav>
    <loading :active.sync="isLoading"></loading>
    <!-- shopping step -->
    <div class="container shopping-step py-5" v-if="cart.length">
      <ol class="step d-flex justify-content-center list-unstyled">
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

    <!-- cart detail -->
    <div class="cart container py-5" v-if="cart.length">
      <div class="row">
        <div class="col-lg-8">
          <div class="cart-border">
            <div class="text-right mt-3 pr-2">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeItems"
              >
                <i class="fas fa-times"> 清除購物車</i>
              </button>
            </div>
            <div class="cart-table table-responsive">
              <table class="table mt-3">
                <thead>
                  <th class="delete text-nowrap">刪除</th>
                  <th class="prouduct text-nowrap">商品名稱</th>
                  <th class="quantity text-nowrap">數量</th>
                  <th class="unit text-nowrap">單位</th>
                  <th class="price text-nowrap">單價</th>
                </thead>
                <tbody v-if="cart.length">
                  <tr v-for="item in cart" :key="item.id">
                    <td class="align-middle md-delete">
                      <button
                        type="button"
                        class="btn text-danger"
                        @click="removeItem(item.product.id)"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </td>
                    <td class="align-middle prouductName">
                      <a
                        href="#"
                        class="productTitle"
                        @click.prevent="goToNext('product', item.product.id)"
                      >
                        {{ item.product.title }}</a
                      >
                    </td>
                    <td class="align-middle quantity-size">
                      <div class="input-group input-group-sm flex-nowrap">
                        <div class="input-group-prepend">
                          <button
                            type="button"
                            class="btn btn-outline-themeCoffee btn-sm"
                            :disabled="item.quantity === 1"
                            @click="
                              quantityUpdate(item.product.id, item.quantity - 1)
                            "
                          >
                            -
                          </button>
                        </div>
                        <input
                          type="text"
                          :value="item.quantity"
                          class="form-control text-center"
                        />
                        <div class="input-group-append">
                          <button
                            type="button"
                            class="btn btn-outline-themeCoffee btn-sm"
                            @click="
                              quantityUpdate(item.product.id, item.quantity + 1)
                            "
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle unit">{{ item.product.unit }}</td>
                    <td
                      class="align-middle text-right font-weight-bold md-price text-nowrap"
                    >
                      $ {{ (item.product.price * item.quantity) | thousand }}
                    </td>
                  </tr>
                </tbody>
                <tfoot class="cart-foot mt-3">
                  <tr v-if="cart.length">
                    <td colspan="2">
                      <button
                        type="button"
                        class="btn btn-themeCoffee float-left"
                        @click="goToNext('products')"
                      >
                        繼續購物
                      </button>
                    </td>
                    <td class="total-price text-right">總計</td>
                    <td colspan="2" class="text-right font-weight-bold">
                      $ {{ cartTotal | thousand }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <!-- cart detail end-->

        <!-- order information -->
        <div class="col-lg-4 col-12 orderInfo">
          <div class="cart-border" style="width: 100%">
            <div class="card-header pt-3 text-themeCoffee">訂單資訊</div>
            <div class="card-body my-3">
              <div class="d-flex">
                <p class="ml-4">商品總計</p>
                <span class="ml-auto mr-4">NT$ {{ cartTotal | thousand }}</span>
              </div>
              <div class="d-flex">
                <p class="ml-4">運費總計</p>
                <span class="ml-auto mr-4">NT$ 0</span>
              </div>
            </div>
            <div class="card-footer pt-3 pb-3">
              <div class="d-flex py-3">
                <p class="ml-4">結帳金額</p>
                <span class="ml-auto mr-4 font-weight-bold h5">
                  NT$ {{ cartTotal | thousand }}</span
                >
              </div>
              <button
                class="btn btn-themeCoffee nextToStep"
                @click="goToNext('paybill')"
              >
                下一步
              </button>
            </div>
          </div>
        </div>
        <!-- order information end-->
      </div>
    </div>
    <div class="cart container" v-else>
      <div class="text-center">
        <p class="cart-img"><i class="fas fa-shopping-cart"></i></p>
        <p>您的購物車中沒有商品</p>
        <div
          class="btn btn-themeCoffee cart-goshop"
          type="button"
          @click="goToNext('products')"
        >
          去購物
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
      cartTotal: 0,
      isLoading: false,
    };
  },
  methods: {
    goToNext(somewhere, productId) {
      switch (somewhere) {
        case 'paybill':
          this.$bus.$emit('orderMoney', this.cartTotal);
          this.$router.push('/paybill');
          break;
        case 'products':
          this.$router.push('/products');
          break;
        case 'product':
          this.$router.push(`/product/${productId}`);
          break;
        default:
          break;
      }
    },
    getCartItems() {
      const getCartItemsUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      this.$http
        .get(getCartItemsUrl)
        .then((res) => {
          this.cart = res.data.data;
          this.updateCartTotal();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    removeItems() {
      const removeItemsUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.isLoading = true;
      this.$http
        .delete(removeItemsUrl)
        .then(() => {
          this.$bus.$emit('get-cart');
          this.getCartItems();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    removeItem(id) {
      const removeItemUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.isLoading = true;
      this.$http
        .delete(removeItemUrl, id)
        .then(() => {
          this.$bus.$emit('get-cart');
          this.getCartItems();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    quantityUpdate(id, quantity) {
      const quantityUpdateUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const updateObj = {
        product: id,
        quantity,
      };
      this.isLoading = true;
      this.$http
        .patch(quantityUpdateUrl, updateObj)
        .then(() => {
          this.getCartItems();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    updateCartTotal() {
      this.cartTotal = 0;
      this.cart.forEach((item) => {
        this.cartTotal += item.quantity * item.product.price;
      });
    },
  },
  mounted() {
    this.getCartItems();
  },
};
</script>

<style lang="scss">
$cf-Step-bgColor: #632100;
$cf-throughLine-Color: #bbb;

body {
  margin-bottom: 80px;
  background-color: #fefbf4;
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
    &::before {
      position: absolute;
      display: block;
      content: "";
      background-color: $cf-throughLine-Color;
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
  .step2,
  .step3,
  .step4 {
    div {
      background-color: $cf-throughLine-Color;
      color: #aaa;
    }
    span {
      color: $cf-throughLine-Color;
    }
  }
}
.breadcrumb-item {
  a {
    text-decoration: none;
  }
}
.nextToStep {
  width: 100%;
}
.cart {
  .cart-border {
    border: 1px solid $cf-throughLine-Color;
    border-radius: 1%;
  }
  thead {
    text-align: center;
  }
  tbody {
    text-align: center;
    .productTitle {
      text-decoration: none;
      color: #000;
    }
  }
  .cart-goshop {
    width: 15%;
  }
}
.cart-table {
  max-width: 100%;
  .quantity {
    width: 150px;
  }
}
.cart-img {
  font-size: 6rem;
}
@media screen and(max-width:768px) {
  .shopping-step {
    li {
      margin: 0 59px;
    }
    .step1::before {
      top: 23%;
      right: -206%;
    }
    .step2::before {
      top: 23%;
      right: -87%;
    }
    .step3::before {
      display: none;
    }
    .step4 {
      display: none;
    }
  }
  .cart {
    .cart-goshop {
      width: 25%;
    }
  }
  .orderInfo {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
}
@media screen and(max-width:540px) {
  .shopping-step {
    li {
      margin: 0 45px;
    }
    .step1::before {
      top: 18%;
      right: -210%;
      width: 135px;
    }
    .step2::before {
      top: 18%;
      right: -91%;
      width: 130px;
    }
  }
  .cart-table {
    .quantity {
      width: 125px;
    }
    .unit {
      text-align: center;
    }
  }
  .cart {
    tbody {
      text-align: left;
    }
  }
}
@media screen and(max-width:414px) {
  .shopping-step {
    li {
      margin: 0 50px;
    }
    .step1::before {
      top: 17%;
      right: -237%;
      width: 137px;
    }
    .step2::before {
      display: none;
    }
    .step3 {
      display: none;
    }
  }
  .cart {
    padding-bottom: 100px;
    .cart-goshop {
      width: 50%;
    }
  }
  .cart-table {
    .unit {
      display: none;
    }
  }
}
@media screen and(max-width:375px) {
  .shopping-step {
    li {
      margin: 0 42px;
    }
    .step1::before {
      top: 18%;
      right: -213%;
      width: 120px;
    }
  }
  .table td.quantity-size {
    padding: 0.75rem 0;
  }
  .table td.md-delete {
    text-align: center;
    padding: 0.75rem 0;
  }
}
@media screen and(max-width:360px) {
  .shopping-step {
    li {
      margin: 0 39px;
    }
    .step1::before {
      top: 18%;
      right: -204%;
      width: 120px;
    }
  }
  .table th,
  .table td {
    padding: 0.75rem 0.5rem;
  }
}
@media screen and(max-width:320px) {
  .shopping-step {
    li {
      margin: 0 25px;
    }
    .step1::before {
      top: 18%;
      right: -144%;
      width: 92px;
    }
  }
  .cart-table {
    .prouduct {
      width: 91px;
    }
    .quantity {
      width: 180px;
    }
  }
  .table th,
  .table td {
    padding: 0.75rem 0;
  }
}
@media screen and(max-width:280px) {
  .shopping-step {
    li {
      margin: 0 18px;
    }
    .step1::before {
      top: 18%;
      right: -120%;
      width: 72px;
    }
  }
}
</style>
