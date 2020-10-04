<template>
  <div style="position: absolute; bottom: 0; width: 100%">
    <div class="footer container-fluid bg-coffee2">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="text-coffeetext footer-copyright">
          Copyright2020 &copy; CoffeeBeans design by ShengWei
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding: 31.5px 0px;
}
@media screen and(max-width: 540px) {
  .footer {
    padding: 20px 0;
  }
}
@media screen and(max-width: 375px) {
  .footer {
    .footer-copyright {
      font-size: 14px;
    }
  }
}
@media screen and(max-width: 320px) {
  .footer {
    .footer-copyright {
      font-size: 12px;
    }
  }
}
</style>
