<template>
  <div class="container mt-5">
      <loading :active.sync="isLoading"></loading>
      <h1 class="coffeebeans-title">CoffeeBeans</h1>
      <form class="form-signin" @submit.prevent="signIn">
        <h2 class="h3 mb-3 font-weight-normal">請登入帳號密碼</h2>
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            v-model="user.email"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="user.password"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-lg btn-block btn-primary">
          登入
        </button>
      </form>
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
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
  },
  methods: {
    signIn() {
      this.isLoading = true;
      const signInUrl = `${process.env.VUE_APP_PATH}api/auth/login`;
      this.$http
        .post(signInUrl, this.user)
        .then((res) => {
          this.token = res.data.token;
          const { expired } = res.data.expired;
          document.cookie = `myToken=${this.token}; expires=${new Date(
            expired * 1000,
          )}; path=/`;
          this.isLoading = false;
          this.$router.push('/admin');
        })
        .catch((err) => {
          const errorMessage = err.response.data.message;
          this.$bus.$emit('messagepush', `${errorMessage}}Σ( ° △ °|||)`, 'danger');
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Carter+One&display=swap");

.coffeebeans-title{
  color: #421c02;
  font-family: "Carter One", cursive;
  text-align: center;
  transform: translateY(-50%);
  margin-top: 15%;
}
.form-signin {
  max-width: 300px;
  padding: 15px;
  margin: auto;
}
</style>
