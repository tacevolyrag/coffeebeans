<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-beige border-bottom">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-lightgrey"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/products" class="text-lightgrey">
            商品列表
          </router-link>
        </li>
        <li
          class="breadcrumb-item font-weight-bold text-coffee2 active"
          aria-current="page"
        >
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="mt-4">
      <div>
        <div class="row align-items-center">
          <div class="col-md-6 single-product">
            <img
              :src="product.imageUrl"
              class="img-fluid"
              :alt="product.title"
            />
          </div>
          <div class="col-md-6">
            <div class="product-detail">
              <blockquote>
                <div class="d-flex align-items-center product-title">
                  <h3 class="text-coffee2 font-weight-bold">
                    {{ product.title }}
                  </h3>
                  <span class="badge badge-pill badge-coffee2 ml-auto">
                    {{ product.category }}</span
                  >
                </div>
                <div>
                  <p class="pt-3 text-coffee2 h5">{{ product.content }}</p>
                  <span class="product-detail-span">{{
                    product.description
                  }}</span>
                </div>
                <div class="d-flex justify-content-around text-coffee2 mt-4">
                  <div class="h6 product-origin" v-if="!product.price">
                    NT ${{ product.origin_price | thousand }} 元
                  </div>
                  <div class="h5 font-weight-bold ml-auto" v-if="product.price">
                    NT ${{ product.price | thousand }} 元
                  </div>
                </div>
              </blockquote>

              <select v-model="product.num" class="form-control mt-3">
                <option value="0" disabled selected>請選擇數量</option>
                <option
                  v-for="productNum in 10"
                  :key="productNum"
                  :value="productNum"
                >
                  數量 {{ productNum }} {{ product.unit }}
                </option>
              </select>
              <div class="mt-5 d-flex justify-content-end align-items-center">
                <div class="mr-3 product-off h5 pt-2" v-if="product.num">
                  總計
                  <strong class="product-off">
                    ${{ (product.price * product.num) | thousand }} 元</strong
                  >
                </div>
                <button
                  type="button"
                  class="btn btn-coffee2 addToCart"
                  @click="detailAddToCart(product, product.num)"
                  v-if="product.num"
                >
                  加到購物車
                </button>
                <button
                  type="button"
                  class="btn btn-coffee2 addToCart"
                  v-else
                  disabled
                >
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row mt-5 pt-4 justify-content-center border-top"
      v-if="!(product.category === 'Other')"
    >
      <div class="col-md-6">
        <div class="mb-5">
          <h4 class="text-coffee2 mb-3 pb-3">產品規格</h4>
          <p class="text-left">
            產地：{{ product.title }}<br /><br />
            處理法：水洗<br /><br />
            烘焙度：{{ product.category }}<br /><br />
            保存方式：常溫、避免陽光直射<br /><br />
            保存期限：365 天(未開封)<br /><br />
            賞味期限：100 天（未開封）、 開封後建議立即享用<br /><br />
            內容物重量：454g ± 10g<br /><br />
            內容物：咖啡豆
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-5">
          <h4 class="text-coffee2 pb-3">使用方式</h4>
          <p class="text-left">
            咖啡比例：每 10g 使用 150 ~ 200cc 水沖泡咖啡<br />可因自己喜好口感增加或減少水量<br /><br />
            萃取水溫：建議溫度 90 度~ 92 度
          </p>
        </div>
      </div>
    </div>
    <div class="row pt-5 justify-content-center mb-5 pb-5">
      <div class="col-md-12">
        <div class="mb-5">
          <h4 class="text-coffee2 mb-3 pb-3 font-weight-bold text-center">
            你可能也會喜歡
          </h4>
          <Swiper @getOtherItem="getProduct"></Swiper>
        </div>
      </div>
    </div>
    <Toast></Toast>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue';
import Toast from '@/components/Toast.vue';

export default {
  components: {
    Swiper,
    Toast,
  },
  data() {
    return {
      product: {},
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const getProductApi = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.$http.get(getProductApi).then((res) => {
        this.product = res.data.data;
        this.$set(this.product, 'num', 0);
        this.isLoading = false;
      });
    },
    detailAddToCart(item, quantity) {
      const addToCartUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: item.id,
        quantity,
      };
      this.isLoading = true;
      this.$http
        .post(addToCartUrl, cart)
        .then(() => {
          this.$bus.$emit('get-cart');
          this.$bus.$emit('messagepush', '加入購物車成功囉!ヽ(＾Д＾)ﾉ ', 'coffee2');
          this.isLoading = false;
        })
        .catch((err) => {
          const errorList = err.response.data.errors;
          errorList.forEach((error) => {
            this.$bus.$emit('messagepush', `${error}Σ( ° △ °|||)`, 'danger');
          });
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style lang="scss">
body {
  background-color: #fefbf4;
}
.breadcrumb-item {
  a {
    text-decoration: none;
  }
}
.addToCart {
  width: 50%;
}
.product-origin {
  position: relative;
  color: #000;
  font-weight: bolder;
}
.product-origin::after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  height: 55%;
  border-bottom: 2px solid #bbb;
}
.product-detail {
  .product-detail-span {
    display: block;
    text-align: left;
  }
}
@media screen and (max-width: 414px) {
  .single-product {
    margin-bottom: 30px;
  }
}
</style>
