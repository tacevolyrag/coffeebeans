<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
        <template v-for="item in swiperProducts">
            <swiper-slide :key="item.id">
                <div class="slider card">
                    <router-link :to="`/product/${item.id}`" target="_blank">
                     <div class="swiperImg"
                     :style=
                     "{backgroundImage: `url(${item.imageUrl[0]})`}">
                     </div>
                    </router-link>
                    <div class="card-body">
                        <div class="body-content">
                            <div class="text-coffee2 font-weight-bold h5">{{ item.title }}</div>
                            <div class="text"><p class="px-5">{{ item.content }}</p></div>
                            <div class="card-price text-right">
                                <div class="originPrice" v-if="item.origin_price">
                                    NT$ {{ item.origin_price }}</div>
                                <div class="price h5 mt-1">NT$ {{ item.price }}</div>
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
      this.$http.get(getSwiperProductsUrl)
        .then((res) => {
          console.log(res);
          this.swiperProducts = res.data.data;
        });
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
  .card-price{
    .originPrice{
      color: #bbb;
      text-decoration: line-through;
      font-size: 14px;
    }
    .price{
        color: red;
        font-weight: bold;
        font-size: 20px;
    }
  }
  .slider{
      border: 0;
      box-shadow: 0px 1px 2px #bbb;
      margin-bottom: 50px;
  }
</style>
