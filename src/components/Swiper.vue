<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <template v-for="item in swiperProducts">
        <swiper-slide :key="item.id">
          <div class="slider card">
            <a href="#" @click.prevent="getOtherItem(item.id)">
              <div
                class="swiperImg"
                :style="{ backgroundImage: `url(${item.imageUrl[0]})` }"
              ></div>
            </a>
            <div class="card-body">
              <div class="body-content">
                <div class="text-themeCoffee font-weight-bold h5 text-center">
                  {{ item.title }}
                </div>
                <div class="text">
                  <p>{{ item.content }}</p>
                </div>
                <div class="card-price text-right">
                  <div class="originPrice" v-if="item.origin_price">
                    NT$ {{ item.origin_price }}
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <a
                      href="#"
                      class="btn btn-themeCoffee"
                      @click.prevent="getOtherItem(item.id)"
                    >
                      查看更多
                    </a>
                    <div class="price h5 mt-1">NT$ {{ item.price }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </template>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: true,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: true,
          },
          280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
          },
        },
      },
      swiperProducts: {},
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    getSwiperProducts() {
      const getSwiperProductsUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/products`;
      this.$http
        .get(getSwiperProductsUrl)
        .then((res) => {
          this.swiperProducts = res.data.data;
        });
    },
    getOtherItem(id) {
      this.$router.push(`/product/${id}`);
      this.$emit('getOtherItem');
    },
  },
  created() {
    this.getSwiperProducts();
  },
};
</script>

<style lang="scss">
.swiperImg {
  height: 250px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.card-price {
  .originPrice {
    color: #bbb;
    text-decoration: line-through;
    font-size: 14px;
  }
  .price {
    color: red;
    font-weight: bold;
    font-size: 20px;
  }
}
.slider {
  border: 0;
  box-shadow: 0px 1px 2px #bbb;
  margin-bottom: 50px;
}
</style>
