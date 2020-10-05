<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-beige border-bottom">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-lightgrey">首頁</router-link>
          </li>
          <li
            class="breadcrumb-item font-weight-bold active text-coffeetext2"
            aria-current="page"
          >
            商品列表
          </li>
        </ol>
      </nav>
      <!-- 商品分類 -->
      <div class="category pb-3">
        <ul class="d-flex justify-content-center">
          <li
            :class="{ active: filterProducts === 'all' }"
            @click="filterSort((filterProducts = 'all'))"
          >
            全部商品
          </li>
          <li
            :class="{ active: filterProducts === 'lightRoast' }"
            @click="filterSort((filterProducts = 'lightRoast'))"
          >
            淺烘焙
          </li>
          <li
            :class="{ active: filterProducts === 'midiumRoast' }"
            @click="filterSort((filterProducts = 'midiumRoast'))"
          >
            中烘焙
          </li>
          <li
            :class="{ active: filterProducts === 'other' }"
            @click="filterSort((filterProducts = 'other'))"
          >
            週邊商品
          </li>
        </ul>
      </div>
      <!-- 商品分類e -->
      <!-- 商品列表 -->
      <div class="row item">
        <div class="col-md-12">
          <div class="content">
            <div class="d-flex flex-wrap">
              <div
                class="products-list bg-white rounded"
                v-for="product in categoryProducts"
                :key="product.id"
              >
                <div class="card item-card">
                  <a href="#" @click.prevent="getProductDetail(product.id)">
                    <div
                      :style="{ backgroundImage: `url(${product.imageUrl})` }"
                      class="item-card-img"
                    ></div>
                  </a>
                  <div class="card-body">
                    <h5 class="card-title product-title text-center">
                      <a
                        href="#"
                        class="text-coffee2 font-weight-bold"
                        @click.prevent="getProductDetail(product.id)"
                      >
                        {{ product.title }}</a
                      >
                    </h5>
                    <p class="card-text">{{ product.content }}</p>
                  </div>
                  <div class="d-flex justify-content-between product-all-price">
                    <div class="product-price">
                      <div
                        class="h6 product-origin"
                        v-if="product.origin_price"
                      >
                        原價 ${{ product.origin_price | thousand }} 元
                      </div>
                    </div>
                    <div class="h5 product-off">
                      特價 ${{ product.price | thousand }} 元
                    </div>
                  </div>
                  <div class="modal-footer mt-3">
                    <button
                      type="button"
                      class="btn btn-outline-coffee2 product-detail"
                      @click="getProductDetail(product.id)"
                    >
                      商品資訊
                    </button>
                    <button
                      type="button"
                      class="btn btn-coffee2 ml-auto"
                      @click="addToCart(product)"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品列表e -->
    </div>
    <Toast></Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  components: {
    Toast,
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
    filterSort() {
      switch (this.filterProducts) {
        case 'all':
          this.categoryProducts = this.products;
          break;
        case 'lightRoast':
          this.categoryProducts = this.products.filter(
            (item) => item.category === '淺烘焙',
          );
          break;
        case 'midiumRoast':
          this.categoryProducts = this.products.filter(
            (item) => item.category === '中烘焙',
          );
          break;
        case 'other':
          this.categoryProducts = this.products.filter(
            (item) => item.category === 'Other',
          );
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
$cf-Theme-Color: #421c02;
$cg-white: #fff;

.breadcrumb-item {
  a {
    text-decoration: none;
  }
}
.products {
  background-color: #fefbf4;
}
.item{
  margin-bottom: 10rem;
}
.products-list{
  margin-bottom: 25px;
  width: 31%;
  margin: 2.5% 1.165%;
  .item-card {
    height: 450px;
    box-shadow: 0 1px 2px rgba(66,28,2,0.15);
    .item-card-img {
      height: 200px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .product-all-price {
      padding: 0 16px;
      .product-origin {
        position: relative;
        color: #bbb;
        font-weight: bolder;
        text-decoration: line-through;
      }
      .product-off {
        color: $cf-Theme-Color;
        font-weight: bolder;
      }
    }
    .product-title {
      a{
      text-decoration: none;
      font-weight: bolder;
      }
    }
  }
}

.category {
  ul {
    .active {
      color: #632100;
    }
    li {
      padding: 2px 30px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: #632100;
      }
    }
    li:not(:last-child) {
      border-right: 1px solid #632100;
    }
  }
}

.card-footer button {
  background-color: $cf-Theme-Color;
  color: $cg-white;
  transition: 0.3s;
}
.card-footer button:hover {
  background-color: $cf-Theme-Color;
  color: $cg-white;
}
.card-footer .product-detail {
  background-color: $cg-white;
  color: $cf-Theme-Color;
  border-color: $cf-Theme-Color;
  transition: 0.3s;
}
.card-footer .product-detail:hover {
  color: $cg-white;
}
.breadcrumb-item.active {
  color: $cf-Theme-Color;
}
@media screen and(max-width: 768px) {
  .products-list {
    width: 48%;
  }
}
@media screen and(max-width: 414px) {
  .products-list {
    width: 100%;
    margin-bottom: 50px;
  }
  .category {
    ul {
      li {
        padding: 10px;
        font-weight: bold;
        cursor: pointer;
        z-index: 10;
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .category {
    ul {
      li {
        padding: 5px;
      }
    }
  }
}
@media screen and (max-width: 280px) {
  .category {
    ul {
      li {
        padding: 10px;
      }
    }
  }
}
</style>
