<template>
  <div>
    <div aria-live="polite" aria-atomic="true"
    style="min-height: 200px;">
      <div
        class="toast toastErr"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-delay="3000"
        data-animation="true"
      >
        <div class="toast-header">
          <div class="mr-2">
            <i class="fas fa-bomb"></i>
          </div>
          <strong class="mr-auto">購物車訊息</strong>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body text-danger">該商品已經在購物車裡囉!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .toastErr{
    position: absolute;
    top: 90px;
    right: 200px;
    z-index: 30;
    display: none;
    .toast-header{
      div,strong{
        color: #632100;
      }
    }
  }
</style>
