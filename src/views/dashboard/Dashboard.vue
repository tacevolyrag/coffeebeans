<template>
  <div>
    <div id="nav" v-if="authSuccess">
      <div class="bg-themeCoffee backend-navbar text-left">
        <router-link to="/admin/boardproducts">後台產品列表</router-link>
        <router-link to="/admin/order">訂單列表</router-link>
        <router-link to="/admin/coupons">優惠券列表</router-link>
        <router-link to="/admin/depositimage">後台儲存圖片</router-link>
        <router-link to="/login">登入</router-link>
        <router-link to="/">回到前台</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      authSuccess: false,
    };
  },
  methods: {
    checkAuth() {
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      const apiUrl = `${process.env.VUE_APP_PATH}api/auth/check`;
      this.$http
        .post(apiUrl, {
          api_token: this.token,
        })
        .then(() => {
          this.authSuccess = true;
          this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
  },

  created() {
    this.checkAuth();
  },
};
</script>

<style lang="scss">
  .backend-navbar{
    a{
      text-decoration: none;
      color: #e1c383;
      padding: 30px;
      display: inline-block;
      &:hover{
        color: #421c02;
        background-color:  #e1c383;
        font-weight: bold;
      }
    }
  }
</style>
