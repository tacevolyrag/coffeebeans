<template>
  <div class="navbarPos">
    <div class="container-fluid bg-coffee2 sticky-top">
      <div class="coffee-navbar">
        <div class="row align-items-center">
          <div class="col-sm-6 logo">
            <router-link to="/" class="text-coffeetext"
              >Coffeebeans</router-link
            >
          </div>
          <div class="col-sm-6">
            <ul class="d-flex menu mb-0">
              <li>
                <router-link to="/products">產品列表</router-link>
              </li>
              <li>
                <router-link to="/about">聯絡我們</router-link>
              </li>
              <li class="coffeeNav">
                <a
                  href="#"
                  class="coffee-knowledge"
                  @click.prevent="menuDropDown"
                  >咖啡豆知識</a
                >
                <ul class="knowledge-list bg-coffee2">
                  <li>
                    <router-link to="/coffeekind">咖啡豆種類</router-link>
                  </li>
                  <li>
                    <router-link to="/coffeebaking">烘焙八階段</router-link>
                  </li>
                </ul>
              </li>
              <li class="kindBaking">
                <router-link to="/coffeekind">咖啡豆種類</router-link>
              </li>
              <li class="kindBaking">
                <router-link to="/coffeebaking">烘焙八階段</router-link>
              </li>
              <li>
                <router-link to="/cart">
                  <i class="fas fa-shopping-cart"></i>
                  <span
                    class="badge badge-pill badge-danger badge-transform"
                    v-if="cart.length"
                    >{{ cart.length }}</span
                  >
                </router-link>
              </li>
            </ul>
              <div class="cartHide">
                <router-link to="/cart">
                  <i class="fas fa-shopping-cart"></i>
                  <span
                    class="badge badge-pill badge-danger badge-transform"
                    v-if="cart.length"
                    >{{ cart.length }}</span
                  >
                  <span else></span>
                </router-link>
              </div>
              <div class="checkMenu" @click="hbgToggle">
                <input type="checkbox" class="checkOpen" />
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
      panelShow: false,
    };
  },
  methods: {
    menuDropDown(e) {
      e.stopPropagation();
      $('.knowledge-list').fadeToggle(300);
      $('.coffee-knowledge').toggleClass('active');
    },
    getCartItems() {
      const getCartUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(getCartUrl)
        .then((res) => {
          this.cart = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    hbgToggle(e) {
      e.stopPropagation();
      $('.navbarPos').toggleClass('menu-show');
    },
  },
  created() {
    this.getCartItems();
    this.$bus.$on('get-cart', () => {
      this.getCartItems();
    });
  },
  mounted() {
    document.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target.className !== 'knowledge-list') {
        $('.knowledge-list').hide();
        $('.coffee-knowledge').removeClass('active');
        if ($('.navbarPos').removeClass('menu-show')) {
          if ($('.checkOpen')[0].checked === true) {
            $('.checkOpen')[0].checked = false;
          }
        }
      }
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Carter+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Niconne&display=swap");
$cf-Theme-Color: #421c02;
$cf-Text-Color: #e1c383;

html {
  min-height: 100%;
  position: relative;
}
.coffee-navbar {
  .logo {
    font-family: "Carter One", cursive;
    text-align: center;
  }
  a {
    text-decoration: none;
    padding: 30px 35px;
    font-size: 18px;
  }
}
.menu {
  li {
    a {
      color: $cf-Text-Color;
      &:hover {
        background-color: $cf-Text-Color;
        color: $cf-Theme-Color;
      }
    }
  }
  .knowledge-list {
    position: absolute;
    display: none;
    li::before {
      content: "";
      display: block;
      border: 1px solid #ffebae;
    }
  }
  a {
    display: block;
  }
  .active {
    background-color: $cf-Text-Color;
    color: $cf-Theme-Color;
  }
}
.checkMenu {
  display: none;
  .line {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    background-color: $cf-Text-Color;
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
.kindBaking {
  display: none;
}
.cartHide {
  display: none;
}
.badge-transform {
  transform: translateX(-8px) translateY(5px);
}
@media screen and (max-width: 1024px) {
  .coffee-navbar {
    a {
      padding: 30px 16px;
    }
  }
}
@media screen and (max-width: 768px) {
  .coffee-navbar {
    .logo {
      padding: 30px;
      text-align: left;
    }
  }
  .checkMenu {
    position: relative;
    bottom: -5px;
    display: block;
    float: right;
    margin-right: 1.5rem;
    .checkOpen {
      position: absolute;
      width: 40px;
      height: 40px;
      right: 0px;
      top: -15px;
      z-index: 5;
      opacity: 0;
    }
  }
  .coffeeNav {
    display: none;
  }
  .kindBaking {
    display: block;
  }
  .cartHide {
    display: block;
    position: absolute;
    right: 60px;
    margin-right: 1.5rem;
    a {
      color: $cf-Text-Color;
      padding: 30px 10px;
      :hover {
        color: #3a3b3d;
      }
    }
  }
  .menu {
    max-height: 0px;
    overflow: hidden;
    position: absolute;
    flex-direction: column;
    top: 57px;
    left: 0;
    right: 0;
    background-color: $cf-Theme-Color;
    transition: max-height 0.3s;
    z-index: 15;
    li {
      border-bottom: 1px dashed $cf-Text-Color;
      a {
        padding: 10px 0;
        text-align: center;
      }
      :hover {
        background-color: $cf-Text-Color;
        color: $cf-Theme-Color;
      }
    }
  }
  .navbarPos {
    position: relative;
  }
  .menu-show .menu {
    max-height: 600px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1305px) {
  .coffee-navbar {
    .logo {
      text-align: left;
      padding-left: 120px;
    }
    a{
      padding: 30px 15px;
    }
  }
  .badge-transform {
    transform: translateX(-5px) translateY(-15px);
  }
}
@media screen and (max-width: 575px) {
  .coffee-navbar {
    .logo {
      padding: 0px;
      text-align: center;
      transform: translateY(50%);
      z-index: 1;
    }
    a{
      padding: 16px;
    }
  }
  .menu {
    top: 29px;
  }
  .checkMenu {
    margin-bottom: 2px;
    top: -8px;
    margin-right: 0;
    .checkOpen {
      right: -5px;
      top: -10px;
      z-index: 5;
      opacity: 0;
    }
  }
  .cartHide {
    bottom: 15px;
    left: 10px;
    right: auto;
    z-index: 1;
    margin-right: 0;
    a {
      padding: 10px;
    }
  }
}
@media screen and (max-width: 414px) {
  .coffee-navbar {
    .logo{
      transform: translateY(50%);
      z-index: 1;
    }
    a{
      padding: 16px;
    }
  }

  .checkMenu {
    margin-bottom: 2px;
    top: -8px;
    .checkOpen {
      right: -5px;
      top: -10px;
      z-index: 5;
      opacity: 0;
    }
  }
  .cartHide {
    left: 10px;
  }
}
@media screen and (max-width: 320px) {
  .cartHide {
    left: 10px;
  }
}
</style>
