<template>
  <div class="">
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
    <div class="container mb-5 pb-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="border mb-4">
            <table class="table">
              <tr>
                <td class="text-left h5 text-coffee2">收件人資訊</td>
              </tr>
              <tr>
                <td class="text-left" width="20%">姓名</td>
                <td class="text-left">{{ order.user.name }}</td>
              </tr>
              <tr>
                <td class="text-left" width="20%">取貨地址</td>
                <td class="text-left">{{ order.user.address }}</td>
              </tr>
              <tr>
                <td class="text-left" width="20%">手機號碼</td>
                <td class="text-left">{{ order.user.tel }}</td>
              </tr>
              <tr>
                <td class="text-left" width="20%">電子信箱</td>
                <td class="text-left">{{ order.user.email }}</td>
              </tr>
            </table>
          </div>
          <div class="border mb-4">
            <table class="table">
              <tr>
                <td class="text-left h5 text-coffee2">訂單資訊</td>
              </tr>
              <tr>
                <td class="text-left" width="20%">付款方式</td>
                <td class="text-left">{{ order.payment }}</td>
              </tr>
              <tr>
                <td class="text-left" width="20%">優惠折扣</td>
                <td class="text-left" v-if="order.coupon">{{ order.coupon.percent }}%</td>
                <td class="text-left" v-else>原價</td>
              </tr>
              <tr>
                <td class="text-left" width="20%">訂單金額</td>
                <td class="text-left text-coffee2 font-weight-bold h5">
                    ${{ Math.floor(order.amount) }}</td>
              </tr>
              <tr>
                <td class="text-left" width="20%">付款狀態</td>
                <td class="text-left text-danger" v-if="!order.paid">尚未付款</td>
              </tr>
            </table>
          </div>
          <div class="d-flex justify-content-end mb-5">
            <button class="btn btn-coffee2" style="width:50%" @click="payedBill">確認付款</button>
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
      order: {},
      isLoading: false,
    };
  },
  methods: {
    getOrderData() {
      const { id } = this.$route.params;
      this.isLoading = true;
      const getOrderUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/orders/${id}`;
      this.$http.get(getOrderUrl).then((res) => {
        console.log(res);
        this.order = res.data.data;
        this.isLoading = false;
      });
    },
    backToPaybill() {
      this.$router.push('/paybill');
    },
    payedBill() {
      const { id } = this.$route.params;
      this.isLoading = true;
      const payedbillUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/orders/${id}/paying`;
      this.$http.post(payedbillUrl)
        .then(() => {
          this.isLoading = false;
          this.$router.push('/checkouts');
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getOrderData();
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
      div {
        color: #ffebae;
      }
      span {
        color: #2c3e50;
      }
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
    }
  }
  .step4 {
      div {
        background-color: #bbb;
        color: #aaa;
      }
      span {
        color: #bbb;
      }
  }
}
</style>
