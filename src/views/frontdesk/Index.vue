<template>
    <div class="mb-5 pb-5 index">
        <div class="container-fluid px-0 py-0">
            <div class="banner d-flex justify-content-center align-items-center">
                <div></div>
                <div class="banner-img">
                    <div class="banner-text text-coffeetext h4">
                        <!-- <p>遠離喧囂的生活</p><br>
                        <p>邂逅內心的自我</p><br>
                        <p>一杯手沖單品咖啡</p><br>
                        <p>讓心靈定格在光影</p><br>
                        <p>與音樂的世界裡</p> -->
                        <p>遠離喧囂的生活</p>
                        <p>邂逅內心的自我</p>
                        <p>一杯手沖單品咖啡</p>
                        <p>讓心靈定格在光影與音樂的世界裡</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-beige container-fluid">
            <div class="py-5">
                <div class="intoduction">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-6">
                            <div class="into-img into-img-1 img-opacity img-opacity1">
                                <a href="#" class="text-white" @click.prevent="btnToCoffeeBeans">
                                    Coffee 新鮮咖啡豆</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="into-text">
                                <h3 class="text-coffee2">有高品質的咖啡豆才有好咖啡</h3>
                                <p>一杯好咖啡的關鍵是什麼？好的沖泡技巧<br>
                                和器具固然不可或缺，但<strong>高品質的咖啡豆</strong><br>
                                才是最重要的元素。不同品種咖啡豆的味<br>
                                 道都不一樣，個人喜好當然也見仁見智。<br>
                                </p>
                                 <h3 class="text-coffee2">那麼，什麼才是高品質的咖啡豆</h3>
                                 <p>
                                 一般覺得好喝的咖啡大概都有兩個特徵：<br>
                                 1.<strong>香氣迷人</strong> 2.<strong>味道好</strong><br>
                                </p>
                                <button type="button"
                                class="btn btn-outline-coffee2 float-right mt-3"
                                @click="btnToCoffeeBeans">
                                    更多咖啡豆資訊</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid my-5 py-5">
                <div class="intoduction">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-6 intoduction-2">
                            <div class="into-text">
                                <h3 class="text-coffee2">咖啡的香氣，來自咖啡烘焙</h3>
                                <p>咖啡的香氣及味道，是在烘焙後才產生的<br>
                                在烘焙過程中，咖啡生豆的水分慢慢釋放<br>
                                後<strong>重量減輕，顏色加深，體積膨脹</strong>含有<strong>香<br>
                                 氣的油脂</strong>慢慢釋放出來。<br>
                                 此外，生豆中原本含有的大量綠原酸隨著<br>
                                 烘焙的過程會逐漸消失釋放出好聞的水果<br>
                                 酸其味道隨<strong>烘焙時間長短</strong>而有所差異。<br>
                                </p>
                                <button type="button"
                                class="btn btn-outline-coffee2 float-right mt-3"
                                @click="btnToCoffeeBaking">
                                    更多咖啡豆資訊</button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="into-img into-img-2 img-opacity img-opacity2">
                                <a href="#" class="text-white" @click.prevent="btnToCoffeeBaking">
                                    Baking 烘焙二三事</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-5">
            <div class="container product-hot">
                <h2 class="text-coffee2">咖啡豆搭配周邊！ 自用贈禮兩相宜！ 限時限量搶購中！</h2>
                <br>
                <h4>超值優惠，心動不如馬上行動！</h4>
                <br>
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-4">
                        <div class="product product1">
                            <router-link to="/products" class="product1-img">
                            </router-link>
                            <router-link to="/products" class="text-coffee2 link-product">
                            <h3>阿拉比卡豆(Arabica)</h3></router-link>
                            <p>
                                <strong>果實飽滿、味道柔順</strong><br>
                                咖啡因含量低，味道比較甜、柔和，<br>
                                帶點莓果般的酸味。
                            </p>
                            <button type="button" class="btn btn-outline-coffee2"
                            @click="btnToProducts">
                            查看商品資訊
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product product2">
                            <router-link to="/products" class="product2-img"></router-link>
                            <router-link to="/products" class="text-coffee2 link-product">
                            <h3>羅布斯塔豆(Robusta)</h3></router-link>
                            <p>
                                <strong>味道苦烈、價格較低</strong><br>
                                咖啡因含量高，脂肪和糖分含量較低，<br>
                                羅布斯塔的味道較苦也較強烈。
                            </p>
                            <button type="button" class="btn btn-outline-coffee2"
                            @click="btnToProducts">
                            查看商品資訊
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="product product3">
                            <router-link to="/products" class="product3-img"></router-link>
                            <router-link to="/products" class="text-coffee2 link-product">
                            <h3>馬克杯</h3></router-link>
                            <strong>圓潤杯耳舒適好拿握。</strong>
                            <p>適盛裝咖啡、牛奶等，亦可做為居家<br>擺飾。
                            </p>
                            <button type="button" class="btn btn-outline-coffee2"
                            @click="btnToProducts">
                            查看商品資訊
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* global $ */
export default {
  methods: {
    btnToCoffeeBeans() {
      this.$router.push('/coffeekind');
    },
    btnToCoffeeBaking() {
      this.$router.push('/coffeebaking');
    },
    btnToProducts() {
      this.$router.push('/products');
    },
    scrollToShow() {
      $(window).scroll(() => {
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        // console.log('滾輪高度', scrollPos, '高度', windowHeight);
        // eslint-disable-next-line
        $('.into-img').each(function () {
          const thisPos = $(this).offset().top;
          //  console.log('目標座標', thisPos);
          if (scrollPos + windowHeight >= thisPos) {
            $(this).addClass('img-opacity-duration');
          }
        });
      });
    },
  },
  mounted() {
    this.scrollToShow();
  },
};
</script>

<style lang="scss" scoped>
.index{
    background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v656-ning-09-coffeeday_1.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=51430a8903a95215898d944a6b81a8b5');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
}
// banner img,text css
  .banner{
    height: 500px;

      .banner-img{
        // height: 500px;
        // background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v656-ning-09-coffeeday_1.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=51430a8903a95215898d944a6b81a8b5');
        // background-position: center center;
        // background-repeat: no-repeat;
        // background-size: cover;
        // background-attachment: fixed;
      }
    .banner-text{
        line-height: 1.6;
        transform: translateX(70%)
    }
  }
// banner img,text end

// coffeebean intoduction
  .intoduction{
      display: flex;
      justify-content: space-around;
      align-items: center;
      .into-img{
          position: relative;
          height: 350px;
          width: 500px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          a{
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0px;
              left: 0;
              opacity: 0;
              text-decoration: none;
              font-size: 28px;
              background-color: rgba(80,80,80,0.5);
              padding-top: 155px;
              transition: .3s;
              &:hover{
                  opacity: 1;
              }
          }
      }
      .into-img-1{
          background-image: url('https://images.unsplash.com/photo-1572222182801-42d94da0d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
      }
      .into-img-2{
          background-image: url('https://images.unsplash.com/photo-1572222182786-8394a1975dd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
      }
      .img-opacity{
          opacity: 0;
          transition: all 1.5s;
      }
      .img-opacity1{
          transform: translateX(-50%);
      }
      .img-opacity2{
          transform: translateX(50%);
      }
      .img-opacity-duration{
          opacity: 1;
          transform: translateX(0);
      }
      .into-text{
        padding: 10px 20px;
        line-height: 1.8;
        font-size: 18px;
        text-align: center;
        letter-spacing: 2px;
        h3{
            padding: 0 0 15px 0;
        }
      }
  }
  .intoduction-1{
      .into-text{
          padding: 10px;
          h3{
              padding: 0;
          }
      }
  }
  .intoduction-2{
      .into-text{
          text-align: left;
      }
  }
  // coffeebean intoduction end

  // product
  .product-hot{
      background-color: rgba(254,251,244,.9);
      padding: 50px;
      .product{
          line-height: 2;
            h3{
                margin: 20px 0;
            }
          .product1-img,.product2-img,.product3-img{
              display: block;
              margin: 0 auto;
              width: 300px;
              height: 225px;
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
          }
          .link-product{
              text-decoration: none;
          }
          .product1-img{
              background-image: url('https://images.unsplash.com/photo-1587738108058-10ad47447b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
          }
          .product2-img{
              background-image: url('https://images.unsplash.com/photo-1527619675211-f7283b39fae4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
          }
          .product3-img{
              background-image: url('https://images.unsplash.com/photo-1545676960-c8cefcddf8af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80');
          }
      }
  }
  // product end
</style>
