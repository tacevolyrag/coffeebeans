<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-beige border-bottom">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-lightgrey"
        style="text-decoration: none;">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/products" class="text-lightgrey"
        style="text-decoration: none;">商品列表</router-link>
        </li>
        <li class="breadcrumb-item font-weight-bold text-coffee2 active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="mt-4">
      <div class="">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img :src="product.imageUrl" class="img-fluid" alt />
          </div>
          <div class="col-md-6">
            <div class="">
              <blockquote>
                <div class="d-flex justify-content-around align-items-center">
                  <h3 class="text-coffee2 font-weight-bold ">{{ product.title }}</h3>
                  <span class="badge badge-pill badge-coffee2">{{ product.category }}</span>
                </div>
                <div class="px-3">
                  <p class="pt-3 text-coffee2 h5">{{ product.content }}</p>
                  <span>{{ product.description }}</span>
                </div>
                <div class="d-flex justify-content-around text-coffee2 mt-4">
                  <div
                    class="h6 product-origin"
                    v-if="!product.price"
                  >NT ${{ product.origin_price | thousand }} 元</div>
                  <div
                    class="h5 font-weight-bold ml-auto"
                    v-if="product.price"
                  >NT ${{ product.price | thousand }} 元</div>
                </div>
              </blockquote>

              <select v-model="product.num" class="form-control mt-3">
                <option value="0" disabled selected>請選擇數量</option>
                <option
                  v-for="productNum in 10"
                  :key="productNum"
                  :value="productNum"
                >數量 {{ productNum }} {{ product.unit }}</option>
              </select>
              <div class="mt-5 d-flex justify-content-end align-items-center">
                <div class="mr-3 product-off h5 pt-2" v-if="product.num">
                  總計
                  <strong class="product-off">
                    ${{ product.price * product.num | thousand }} 元</strong>
                </div>
                <button
                  type="button"
                  class="btn btn-coffee2"
                  @click="detailAddToCart(product,product.num)"
                  v-if="product.num" style="width: 50%"
                >加到購物車</button>
                <button type="button" class="btn btn-coffee2" style="width: 50%"
                v-else disabled>加到購物車</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
        <div class="row mt-5 pt-4 justify-content-center border-top"
        v-if="!(product.category === 'Other')">
            <div class="col-md-6">
              <div class="mb-5">
              <h4 class="text-coffee2 mb-3 pb-3 text-center">產品規格</h4>
              <p>
                產地：{{ product.title }}<br><br>
                處理法：水洗<br><br>
                烘焙度：{{ product.category }}<br><br>
                保存方式：常溫、避免陽光直射<br><br>
                保存期限：365 天(未開封)<br><br>
                賞味期限：100 天（未開封）、開封後建議立即享用。<br><br>
                內容物重量：454g ± 10g<br><br>
                內容物：咖啡豆
              </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-5">
              <h4 class="text-coffee2 pb-3">使用方式</h4>
              <p>
                咖啡比例：每 10g 使用 150 ~ 200cc 水沖泡咖啡，<br>可因自己喜好口感增加或減少水量。<br><br>
                萃取水溫：建議溫度 90 度~ 92 度
              </p>
              </div>
            </div>
        </div>
        <div class="row pt-5 justify-content-center">
            <div class="col-md-12">
              <div class="mb-5">
              <h4 class="text-coffee2 mb-3 pb-3 font-weight-bold">你可能也會喜歡</h4>
              <Swiper></Swiper>
              </div>
            </div>
        </div>
    <Toast></Toast>
    <Toasterror></Toasterror>
  </div>
</template>

<script>
/* global $ */
import Swiper from '@/components/Swiper.vue';
import Toast from '../../components/Toast.vue';
import Toasterror from '../../components/Toasterror.vue';

export default {
  components: {
    Swiper,
    Toast,
    Toasterror,
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
          $('.toastSuc').toast('show');
          this.isLoading = false;
        })
        .catch(() => {
          $('.toastErr').toast('show');
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style>
body{
  background-color: #fefbf4;
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
  border-bottom: 2px solid #f00;
}
</style>
