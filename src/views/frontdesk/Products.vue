<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-beige border-bottom">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-lightgrey "
        style="text-decoration: none;">首頁</router-link>
        </li>
        <li class="breadcrumb-item font-weight-bold active" aria-current="page">商品列表</li>
      </ol>
    </nav>
    <div class="category pb-3">
      <ul class="d-flex justify-content-center">
        <li :class="{ active: filterProducts === 'all'}"
        @click="filterSort(filterProducts = 'all')">全部商品</li>
        <li :class="{ active: filterProducts === 'lightRoast'}"
        @click="filterSort(filterProducts = 'lightRoast')">淺烘焙</li>
        <li :class="{ active: filterProducts === 'midiumRoast'}"
        @click="filterSort(filterProducts = 'midiumRoast')">中烘焙</li>
        <li :class="{ active: filterProducts === 'other'}"
        @click="filterSort(filterProducts = 'other')">週邊商品</li>
      </ul>
    </div>
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <div class="d-flex flex-wrap justify-content-between">
              <div
                class="products-list shadow-sm bg-white rounded"
                v-for="product in categoryProducts"
                :key="product.id"
                style="width: 31%"
              >
                <div class="card" style="height: 450px">
                  <a href="#" @click.prevent="getProductDetail(product.id)">
                  <div
                    :style="{backgroundImage: `url(${product.imageUrl})`}"
                    style="height: 200px; background-size: cover;
                    background-position: center center;
                    background-repeat: no-repeat"
                  ></div>
                  </a>
                  <div class="card-body">
                    <span class="badge badge-light float-right">{{ product.category }}</span>
                    <h5 class="card-title product-title">
                      <a href="#" class="text-coffee2 font-weight-bold"
                      @click.prevent="getProductDetail(product.id)">
                        {{ product.title }}</a>
                    </h5>
                    <p class="card-text">{{ product.content }}</p>
                  </div>
                  <div class="d-flex justify-content-around">
                    <div class="product-price">
                      <div
                        class="h6 product-origin"
                        v-if="product.origin_price"
                      >原價 ${{ product.origin_price | thousand }} 元</div>
                    </div>
                    <div class="h5 product-off">特價 ${{ product.price | thousand }} 元</div>
                  </div>
                  <div class="modal-footer mt-3">
                    <button
                      type="button"
                      class="btn btn-outline-coffee2 product-detail"
                      @click="getProductDetail(product.id)"
                    >商品資訊</button>
                    <button
                      type="button"
                      class="btn btn-coffee2 ml-auto"
                      @click="addToCart(product)"
                    >加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Toast></Toast>
    <Toasterror></Toasterror>
  </div>
</template>

<script>
/* global $ */
import Toast from '../../components/Toast.vue';
import Toasterror from '../../components/Toasterror.vue';

export default {
  components: {
    Toast,
    Toasterror,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      categoryProducts: [],
      filterProducts: 'all',
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const getProductsApi = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/products`;
      this.$http.get(getProductsApi).then((response) => {
        this.products = response.data.data;
        this.categoryProducts = this.products;
        this.isLoading = false;
      });
    },
    getProductDetail(id) {
      this.$router.push(`/product/${id}`);
    },
    addToCart(item, quantity = 1) {
      const addToCartUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: item.id,
        quantity,
      };
      this.isLoading = true;
      this.$http.post(addToCartUrl, cart).then(() => {
        this.$bus.$emit('get-cart');
        $('.toastSuc').toast('show');
        this.isLoading = false;
      }).catch(() => {
        $('.toastErr').toast('show');
        this.isLoading = false;
      });
    },
    filterSort() {
      switch (this.filterProducts) {
        case ('all'):
          this.categoryProducts = this.products;
          break;
        case ('lightRoast'):
          this.categoryProducts = this.products.filter((item) => item.category === '淺烘焙');
          break;
        case ('midiumRoast'):
          this.categoryProducts = this.products.filter((item) => item.category === '中烘焙');
          break;
        case ('other'):
          this.categoryProducts = this.products.filter((item) => item.category === 'Other');
          break;
        default:
          break;
      }
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.products{
  background-color: #fefbf4;
  // background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v656-ning-09-coffeeday_1.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=51430a8903a95215898d944a6b81a8b5');
  // background-position: center center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-attachment: fixed;
}
.category{
  ul{
      .active{
        color: #632100;
        border-bottom: #632100;
      }
    li{
      padding: 2px 30px;
      font-weight: bold;
      cursor: pointer;
      &:hover{
        color: #632100;
      }
    }
    li:not(:last-child){
      border-right: 1px solid #632100;
    }
  }
}
.product-title a {
  text-decoration: none;
  font-weight: bolder;
}
.products-list {
  margin-bottom: 25px;
}

.product-origin {
  position: relative;
  color: #bbb;
  font-weight: bolder;
  text-decoration: line-through;
}
.product-off {
  color: #632100;
  font-weight: bolder;
}
.card-footer button {
  background-color: #632100;
  color: #fff;
  transition: 0.3s;
}
.card-footer button:hover {
  background-color: #632100;
  color: #fff;
}
.card-footer .product-detail {
  background-color: #fff;
  color: #632100;
  border-color: #632100;
  transition: 0.3s;
}
.card-footer .product-detail:hover {
  color: #fff;
}
.breadcrumb-item.active{
  color: #632100;
}
</style>
