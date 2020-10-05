<template>
  <div class="container mt-5">
    <loading :active.sync="isLoading"></loading>
    <form class="form-signin" @submit.prevent="signIn">
      <h1 class="h3 mb-3 font-weight-normal">請輸入帳號密碼</h1>
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
  </div>
</template>

<script>
export default {
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
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
body {
  height: 100%;
  text-align: center;
  font-family: 微軟正黑體;
}
.form-signin {
  width: 100%;
  max-width: 300px;
  padding: 15px;
  margin: auto;
}
</style>
