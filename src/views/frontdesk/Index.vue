<template>
  <div class="mb-5 pb-5 index">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="banner">
            <div class="banner-text h4 text-center">
              <p>遠離喧囂的生活</p>
              <p>邂逅內心的自我</p>
              <p>一杯手沖單品咖啡</p>
              <p>讓心靈定格在光影與音樂的世界裡</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-beige container-fluid mb-5 pt-5">
      <div class="intoduction container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <div class="into-img into-img-1 img-opacity img-opacity1 img-fluid">
              <a
                href="#"
                class="text-white text-center"
                @click.prevent="btnToCoffee('coffeekind')"
              >
                Coffee 新鮮咖啡豆
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="into-text">
              <h3 class="text-coffee2">有高品質的咖啡豆才有好咖啡</h3>
              <p>
                一杯好咖啡的關鍵是什麼？好的沖泡技巧和器具固然不可或缺，但
                <strong>高品質的咖啡豆</strong>
                才是最重要的元素。不同品種咖啡豆的味道都不一樣，個人喜好當然也見仁見智。
              </p>
              <h3 class="text-coffee2">那麼，什麼才是高品質的咖啡豆</h3>
              <p>
                一般覺得好喝的咖啡大概都有兩個特徵：
                <br />
                <strong class="feature">1.香氣迷人 2.味道好</strong>
              </p>
              <button
                type="button"
                class="btn btn-outline-coffee2 float-right mt-3"
                @click="btnToCoffee('coffeekind')"
              >
                更多咖啡豆資訊
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="intoduction container py-5">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6 intoduction-2">
            <div class="into-text">
              <h3 class="text-coffee2">咖啡的香氣，來自咖啡烘焙</h3>
              <p>
                咖啡的香氣及味道，是在烘焙後才產生的，
                在烘焙過程中，咖啡生豆的水分慢慢釋放後
                <strong>重量減輕，顏色加深，體積膨脹</strong>
                含有
                <strong> 香氣的油脂 </strong>慢慢釋放出來。<br />
                此外，生豆中原本含有的大量綠原酸隨著
                烘焙的過程會逐漸消失釋放出好聞的水果 酸其味道隨
                <strong>烘焙時間長短</strong> 而有所差異。
              </p>
              <button
                type="button"
                class="btn btn-outline-coffee2 float-right mt-3"
                @click="btnToCoffee('coffeebaking')"
              >
                更多咖啡豆資訊
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="into-img into-img-2 img-opacity img-opacity2 img-fluid">
              <a
                href="#"
                class="text-white text-center"
                @click.prevent="btnToCoffee('coffeebaking')"
                >Baking 烘焙二三事</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-area">
      <div class="container product-hot">
        <h2 class="text-coffee2 text-center">
          咖啡豆搭配周邊！ 自用贈禮兩相宜！ 限時限量搶購中！
        </h2>
        <br />
        <h4 class="text-center">
          超值優惠，慶祝開幕折扣優惠碼輸入「 opening 」 全品項打 9
          折，心動不如馬上行動！
        </h4>
        <br />
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4">
            <div class="product product1 text-center">
              <router-link
                to="/products"
                class="product1-img img-fluid"
              ></router-link>
              <router-link to="/products" class="text-coffee2 link-product">
                <h3>阿拉比卡豆</h3>
              </router-link>
              <h5 class="font-weight-bold">果實飽滿、味道柔順</h5>
              <p class="text-left">
                咖啡因含量低，味道比較甜、柔和，帶點莓果般的酸味。
              </p>
              <button
                type="button"
                class="btn btn-outline-coffee2"
                @click="btnToCoffee('products')"
              >
                查看商品資訊
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product product2 text-center">
              <router-link
                to="/products"
                class="product2-img img-fluid"
              ></router-link>
              <router-link to="/products" class="text-coffee2 link-product">
                <h3>羅布斯塔豆</h3>
              </router-link>
              <h5 class="font-weight-bold">味道苦烈、價格較低</h5>
              <p class="text-left">
                咖啡因含量高，脂肪和糖分含量較低，羅布斯塔的味道較苦也較強烈。
              </p>
              <button
                type="button"
                class="btn btn-outline-coffee2"
                @click="btnToCoffee('products')"
              >
                查看商品資訊
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product product3 text-center">
              <router-link
                to="/products"
                class="product3-img img-fluid"
              ></router-link>
              <router-link to="/products" class="text-coffee2 link-product">
                <h3>馬克杯</h3>
              </router-link>
              <h5 class="font-weight-bold">圓潤杯耳舒適好拿握</h5>
              <p class="text-left">適盛裝咖啡、牛奶等，亦可做為居家擺飾。</p>
              <button
                type="button"
                class="btn btn-outline-coffee2"
                @click="btnToCoffee('products')"
              >
                查看商品資訊
              </button>
            </div>
          </div>
        </div>
        <div class="goToTop">
          <a href="#" @click.prevent="backToTop">
            <i class="fas fa-arrow-alt-circle-up"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  methods: {
    btnToCoffee(somewhere) {
      switch (somewhere) {
        case 'coffeekind':
          this.$router.push('/coffeekind');
          break;
        case 'coffeebaking':
          this.$router.push('/coffeebaking');
          break;
        case 'products':
          this.$router.push('/products');
          break;
        default:
          break;
      }
    },
    scrollToShow() {
      $(window).scroll(() => {
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('.into-img').each(() => {
          const vm = $('.into-img');
          const thisPos = vm.offset().top;
          if (scrollPos + windowHeight >= thisPos) {
            vm.addClass('img-opacity-duration');
          }
        });
        if (scrollPos >= 900) {
          $('.goToTop').css('opacity', 1);
        } else {
          $('.goToTop').css('opacity', 0);
        }
      });
    },
    backToTop() {
      $('html,body').animate({ scrollTop: 0 }, 900);
    },
  },
  mounted() {
    this.scrollToShow();
  },
};
</script>

<style lang="scss" scoped>
.goToTop {
  position: fixed;
  bottom: 100px;
  right: 8%;
  z-index: 50;
  opacity: 0;
  transition: opacity 0.3s;
  a {
    color: #e1c383;
    text-decoration: none;
    font-size: 2.5rem;
  }
}
.index {
  background-image: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/KhTLAXpnObyZFg5pTNVivJJNg8ToVhnR0YqTlxvyDWsI0suOE9vbZQ6WVvit474bf7vReNco3yBbPF4MmGSyAvZPj7WAY2s4UjgwNK4JwrU0ewYaNvlv8EtyOC4T82RQ.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  max-width: 100%;
}
// banner img,text css
.banner {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner-text {
    line-height: 1.6;
    transform: translateX(70%);
    color: #e1c383;
  }
}
// banner img,text end

// coffeebean intoduction
.intoduction {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
  .into-img {
    position: relative;
    height: 350px;
    width: 500px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    a {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0px;
      left: 0;
      opacity: 0;
      text-decoration: none;
      font-size: 28px;
      background-color: rgba(80, 80, 80, 0.5);
      padding-top: 155px;
      transition: 0.3s;
      &:hover {
        opacity: 1;
      }
    }
  }
  .into-img-1 {
    margin-left: 50px;
    background-image: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/bH8qdGnJpfKlCofNcIRFd7kjiTD5mLV1yDMZy62fTKraPaBlz2JGTx9lHCuWNhoILIz6SA2VbteEJS6mRdYML4Pel38zcM5UAGOCcHOmJHn9LF2zkWScmJqsZimLSc5b.jpg");
  }
  .into-img-2 {
    background-image: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/shf14sdlCgLTJ9gSZiB5KRB2Ne4tzD10AhZDEM5fLUpoFTcqoUsxJeRZNsynkFwCs2uIW7djozFi5TnFfzrAr5s2G3uyECdURcyoxDkbJb6wekbm0H39wCeUJ9f6H4NU.jpg");
  }
  .img-opacity {
    opacity: 0;
    transition: all 1.5s;
  }
  .img-opacity1 {
    transform: translateX(-50%);
  }
  .img-opacity2 {
    transform: translateX(50%);
  }
  .img-opacity-duration {
    opacity: 1;
    transform: translateX(0);
  }
  .into-text {
    padding: 10px 20px;
    line-height: 1.8;
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
    h3 {
      padding: 0 0 15px 0;
      text-align: center;
    }
    p {
      text-align: left;
      padding: 0 75px;
    }
    button {
      margin-right: 70px;
    }
    .feature {
      padding-left: 90px;
    }
  }
}
.intoduction-1 {
  .into-text {
    padding: 10px;
    h3 {
      padding: 0;
    }
  }
}
.intoduction-2 {
  .into-text {
    text-align: left;
  }
}
// coffeebean intoduction end

// product
.product-area {
  padding-bottom: 3rem;
}
.product-hot {
  background-color: rgba(254, 251, 244, 0.9);
  padding: 50px;
  .product {
    line-height: 2;
    h3 {
      margin: 20px 0;
    }
    p {
      padding: 0 1.5rem;
    }
    .product1-img,
    .product2-img,
    .product3-img {
      display: block;
      margin: 0 auto;
      width: 300px;
      height: 225px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .link-product {
      text-decoration: none;
    }
    .product1-img {
      background-image: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/iKQstszyiUtycZzjZYEpKlAVkzCra5PZ9OtNV6nRaKxRpti4uyRTFkoIVi0vM8sis1eBL3KOBJ6yt5zYrp8lLpAaPIbqvRDnx7cKQDbVGojhdCvdk5FeznWMyCBnGTf5.jpg");
    }
    .product2-img {
      background-image: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/NgQ4aVqkUd4WAsfY7Qscs502CNOrLCDEoPiMJA991dlpMKB8vnJ8B81SN8sipUP4MnXmxrfCuh9mnrcr4KMGmGQNh2Vejnv6wjgkCofeA2NlWEgUwRzVqEPO42kQLMde.jpg");
    }
    .product3-img {
      background-image: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/6yJabZwAspAQOTyJc6txgPxCdO38Gw1RfLdF4cvJWv7DyxqpFMEkspj6lf0F3Jp9degz4I4TEtBvQ7DImIwsXWe6NJPNlhbz3rPjBtpYmvEwlRcwqx7dpKOUeefFrGag.jpg");
    }
  }
}
// product end

// rwd
@media screen and (max-width: 1024px) {
  .intoduction {
    .into-text {
      p {
        padding: 0 0px;
      }
      button {
        margin-right: 0;
      }
    }
    .into-img-1 {
      margin-left: 0;
    }

    .img-opacity2 {
      transform: translateX(-50%);
    }
    .img-opacity-duration {
      opacity: 1;
      transform: translateX(0%);
    }
  }
}
.product-hot {
  .product {
    p {
      padding: 0 20px;
    }
  }
}
@media screen and (max-width: 768px) {
  .index {
    .banner {
      justify-content: start;
    }
  }
  .product-hot {
    .product2 {
      p {
        padding: 0 5px;
      }
    }
    .product3 {
      p {
        padding: 0 25px;
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .index {
    .banner {
      background-repeat: no-repeat;
      background-size: cover;
      background-size: center center;
      .banner-text {
        transform: translateX(0);
        padding-left: 25px;
      }
    }
  }
  .intoduction {
    margin-bottom: 0;
    .into-text {
      padding-top: 40px;
    }
    .into-img {
      width: 375px;
    }
  }
  .intoduction-2 {
    margin-bottom: 3rem;
  }
  .product1,
  .product2 {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 375px) {
  .intoduction {
    .into-img {
      width: 350px;
    }
  }
}
@media screen and (max-width: 320px) {
  .intoduction {
    .into-img {
      width: 300px;
    }
  }
}
</style>
