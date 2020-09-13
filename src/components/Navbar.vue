<template>
  <div class="navbarPos">
    <div class="container-fluid bg-coffee2 sticky-top">
      <div class="coffee-navbar">
        <div class="row align-items-center">
          <div class="col-md-6 logo">
            <router-link to="/" class="text-coffeetext ">Coffeebeans</router-link>
          </div>
          <div class="col-md-6">
            <ul class="d-flex menu mb-0">
              <li>
                <router-link to="/" class="">首頁</router-link>
              </li>
              <li>
                <router-link to="/products" >產品列表</router-link>
              </li>
              <li>
                <router-link to="/about" >聯絡我們</router-link>
              </li>
              <li class="coffeeNav">
                <a
                  href="#"
                  class="coffee-knowledge"
                  @click.prevent="menuDropDown"
                >咖啡豆知識</a>
                <ul class="knowledge-list bg-coffee2">
                  <li>
                    <router-link to="/coffeekind" >咖啡豆種類</router-link>
                  </li>
                  <li>
                    <router-link to="/coffeebaking" >烘焙八階段</router-link>
                  </li>
                </ul>
              </li>
              <li class="kindBaking">
                <router-link to="/coffeekind" >咖啡豆種類</router-link>
              </li>
              <li class="kindBaking">
                <router-link to="/coffeebaking" >烘焙八階段</router-link>
              </li>
              <li>
                <router-link to="/cart" >
                  <i class="fas fa-shopping-cart"></i>
                  <span
                    class="badge badge-pill badge-danger"
                    style="transform: translateX(-8px) translateY(5px)"
                    v-if="cart.length"
                  >{{ cart.length }}</span>
                </router-link>
              </li>
            </ul>
            <div class="cartHide">
              <router-link to="/cart" >
                <i class="fas fa-shopping-cart"></i>
                <span
                  class="badge badge-pill badge-danger"
                  style="transform: translateX(-8px) translateY(5px)"
                  v-if="cart.length"
                >{{ cart.length }}</span>
              </router-link>
            </div>
            <div class="checkMenu" @click="hbgToggle">
              <input type="checkbox" class="checkOpen">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
/* global $ */
export default {
  data() {
    return {
      cart: {},
    };
  },
  methods: {
    menuDropDown() {
      $('.knowledge-list').slideToggle();
    },
    getCartItems() {
      const getCartUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(getCartUrl).then((res) => {
        this.cart = res.data.data;
      });
    },
    hbgToggle() {
      $('.navbarPos').toggleClass('menu-show');
    },
  },
  created() {
    this.getCartItems();
    this.$bus.$on('get-cart', () => {
      this.getCartItems();
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Carter+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Niconne&display=swap");

html {
  min-height: 100%;
  position: relative;
}
.coffee-navbar {
  .logo {
    font-family: "Carter One", cursive;
  }
  a {
    text-decoration: none;
    padding: 30px 30px;
    font-size: 18px;
  }
}
.menu {
  li{
    a{
      color : #e1c383;
    }
  }
  .knowledge-list {
    position: absolute;
    display: none;
    li::before {
      content: "";
      display: block;
      margin-left: 25%;
      margin-right: 25%;
      border: 1px solid #ffebae;
    }
    li {
      transform: all 1s;
    }
  }
  .coffee-knowledge:hover {
    display: block;
  }
  a {
    display: block;
  }
}
.checkMenu{
  display: none;
  input{
  }
  .line{
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    background-color: #e1c383;
    border-radius: 3px;
    transform-origin: 3px 2px;
    z-index: 1;
    transition: transform 0.5s, opacity 0.55s ease;
  }
  input:checked ~ .line {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
  }
  input:checked ~ .line2 {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ .line3 {
    transform: rotate(-45deg) translate(0, -1px);
  }
}
.kindBaking{
  display: none;
}
.cartHide{
  display: none;
}
@media screen and (max-width: 1024px){
  .coffee-navbar{
    a{
      padding: 30px 16px;
    }
  }
}
@media screen and (max-width: 768px){
  .logo{
    padding: 30px;
  }
  .checkMenu{
    position: relative;
    bottom: -5px;
    display: block;
    float: right;
    .checkOpen{
      position: absolute;
      width: 40px;
      height: 40px;
      right: 0px;
      top: -15px;
      z-index: 5;
      opacity: 0;
    }
  }
  .coffeeNav{
    display: none;
  }
  .kindBaking{
    display: block;
  }
  .cartHide{
    display: block;
    position: absolute;
    right: 60px;
    // bottom: 15px;
    a{
      color: #e1c383;
      padding: 30px 10px;
      :hover{
        color: #3a3b3d;
      }
    }
  }
  .menu{
    max-height: 0px;
    overflow: hidden;
    position: absolute;
    flex-direction: column;
    top: 27px;
    left: 0;
    right: 0;
    background-color: #421c02;
    transition: max-height .3s;
    z-index: 15;
      li{
        border-bottom: 1px dashed #e1c383;
        a{
          padding: 10px 0;
        }
        :hover{
          background-color:#e1c383;
          color:  #421c02;
        }
      }
  }
  .navbarPos{
    position: relative;
  }
  .menu-show .menu{
    max-height: 600px;
  }
}
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 540px){
  .logo{
    position: relative;
    top: 15px;
    padding: 0;
  }
  .checkMenu{
    margin-bottom: 2px;
    top: -8px;
    .checkOpen{
      right: -5px;
      top: -10px;
      z-index: 5;
      opacity: 0;
    }
  }
  .cartHide{
    bottom: 15px;
    left: -400px;
    a{
      padding: 10px;
    }
  }
}
@media screen and (max-width: 414px){
  .logo{
    position: relative;
    top: 15px;
  }
  .checkMenu{
    margin-bottom: 2px;
    top: -8px;
    .checkOpen{
      right: -5px;
      top: -10px;
      z-index: 5;
      opacity: 0;
    }
  }
  .cartHide{
    left: -200px;
  }
}
@media screen and (max-width: 320px){
  .cartHide{
    left: -150px;
  }
}

</style>
