<template>
  <div>
    <div aria-live="polite" aria-atomic="true"
    style="">
      <div
        class="toast toastSuc"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-delay="3000"
        data-animation="true"
        style="position: absolute; top:90px ; right:200px ;"
      >
        <div class="toast-header">
          <div class="mr-2" style="color:#632100">
            <i class="fas fa-coffee"></i>
          </div>
          <strong class="mr-auto" style="color:#632100">購物車訊息</strong>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">已經成功加入購物車囉！</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
