<template>
  <div class="container-fluid">
    <loading :active.sync="isLoading"></loading>
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
    <div class="container py-5 congra congratulation">
      <div class="row justify-content-center">
        <div class="col-md-8 checkout text-center">
          <div class="truck-img"><i class="fas fa-truck"></i></div>
          <h4 class="mt-1 text-coffee2">恭喜您，已完成付款結帳囉 ！</h4>
          <p class="mt-1">
            感謝您對 <span> CoffeeBeans</span> 的信任，商品將會在 1 - 3
            天到府，請耐心等候。
          </p>
          <div class="d-flex justify-content-around my-5 btnArea">
            <button
              class="btn btn-outline-coffee2"
              type="button"
              @click="backToPast('index')"
            >
              回首頁
            </button>
            <button
              class="btn btn-coffee2 backShop"
              type="button"
              @click="backToPast('products')"
            >
              繼續購物 ！
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      cart: '',
    };
  },
  methods: {
    backToPast(somewhere) {
      switch (somewhere) {
        case 'index':
          this.$router.push('/#');
          break;
        case 'products':
          this.$router.push('/products');
          break;
        default:
          break;
      }
    },
    getCartItems() {
      const getCartUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(getCartUrl)
        .then((res) => {
          this.$bus.$emit('get-cart');
          this.cart = res.data.data;
        });
    },
  },
  created() {
    this.getCartItems();
  },
};
</script>

<style lang="scss">
$cf-Step-bgColor: #632100;

body {
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
    span {
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
      background-color: $cf-Step-bgColor;
      height: 5px;
      top: 25%;
      width: 150px;
      right: -199%;
      z-index: 9;
      div {
        background-color: $cf-Step-bgColor;
        color: #ffebae;
      }
      span {
        color: #2c3e50;
      }
    }
  }
  .step4 {
    div {
      background-color: $cf-Step-bgColor;
      color: #ffebae;
    }
    span {
      color: #2c3e50;
    }
  }
}
.checkout {
  span {
    font-family: "Carter One", cursive;
  }
  .truck-img {
    font-size: 6rem;
  }
  .backShop {
    width: 40%;
  }
}
@media screen and(max-width:768px) {
  .shopping-step {
    display: none;
  }
}
@media screen and(max-width:320px) {
  .congratulation {
    margin-bottom: 3rem;
  }
  .btnArea {
    .backShop {
      width: 50%;
    }
  }
}
</style>
