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
        <div class="col-md-8">
          <div style="font-size: 6rem"><i class="fas fa-truck"></i></div>
          <h4 class="mt-1 text-coffee2">恭喜您，已完成付款結帳囉 ！</h4>
          <p class="mt-1">感謝您對 <span style="font-family:'Carter One', cursive;">
            CoffeeBeans</span> 的信任，商品將會在 1 - 3 天到府，請耐心等候。</p>
          <div class="d-flex justify-content-around my-5 btnArea">
          <button class="btn btn-outline-coffee2" type="button" @click="goToIndex">回首頁</button>
          <button class="btn btn-coffee2 backShop"
          type="button" style="width:40%" @click="goToShop">
            繼續購物 ！</button>
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
    };
  },
  methods: {
    goToIndex() {
      this.$router.push('/#');
    },
    goToShop() {
      this.$router.push('/products');
    },
  },
};
</script>

<style lang="scss">
body{
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
      background-color: #632100;
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
      background-color: #632100;
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
      background-color: #632100;
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
      background-color: #632100;
      height: 5px;
      top: 25%;
      width: 150px;
      right: -199%;
      z-index: 9;
      div {
        background-color: #632100;
        color: #ffebae;
      }
      span {
        color: #2c3e50;
      }
    }
  }
  .step4 {
    div {
      background-color: #632100;
      color: #ffebae;
    }
    span {
      color: #2c3e50;
    }
  }
}
@media screen and(max-width:768px){
  .shopping-step{
    display: none;
  }
}
@media screen and(max-width:320px){
  .congratulation{
    margin-bottom: 3rem;
  }
  .btnArea{
    .backShop{
      width: 50%;
    }
  }
}
</style>
