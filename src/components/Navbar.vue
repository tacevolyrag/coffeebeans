<template>
  <div style="">
    <div class="container-fluid bg-coffee2 sticky-top">
      <div class="container coffee-navbar d-flex align-items-center" style="position: relative">
        <router-link to="/" class="text-coffeetext mr-auto logo">Coffeebeans</router-link>
        <ul class="d-flex menu mb-0">
          <li>
            <router-link to="/" class="text-coffeetext">首頁</router-link>
          </li>
          <li>
            <router-link to="/products" class="text-coffeetext">產品列表</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-coffeetext">聯絡我們</router-link>
          </li>
          <li>
            <a href="#" class="text-coffeetext coffee-knowledge" @click.prevent="menuDropDown">
              咖啡豆知識
              </a>
            <ul class="text-coffeetext knowledge-list">
              <li>
                <router-link to="/coffeekind" class="text-coffeetext">咖啡豆種類</router-link>
              </li>
              <li>
                <router-link to="/coffeebaking" class="text-coffeetext">烘焙八階段</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/cart" class="text-coffeetext">
              <i class="fas fa-shopping-cart"></i>
              <span class="badge badge-pill badge-danger"
              style="transform: translateX(-8px) translateY(5px)" v-if="cart.length">
              {{ cart.length }}</span>
            </router-link>
          </li>
        </ul>
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
      this.$http.get(getCartUrl)
        .then((res) => {
          this.cart = res.data.data;
        });
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
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');

html {
  min-height: 100%;
  position: relative;
}
.coffee-navbar {
  .logo{
    font-family: 'Carter One', cursive;
  }
  a {
    text-decoration: none;
    padding: 30px 30px;
    font-size: 18px;
  }
}
.menu {
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
      background-color: #632100;
      a {
        padding: 20px 30px;
      }
    }
  }
  .coffee-knowledge:hover {
    display: block;
  }
  a {
    display: block;
  }
}
</style>
