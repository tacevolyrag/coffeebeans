<template>
  <div>
    <div aria-live="polite" aria-atomic="true">
      <div
        v-for="(res, i) in message"
        :id="`toast-${i}`"
        :key="i"
        class="toast toastSuc fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-delay="3000"
        data-animation="true"
      >
        <div class="toast-header" :class="`bg-${res.status}`">
            <div class="mr-2 text-coffeetext">
              <i class="fas fa-coffee"></i>
            </div>
            <strong class="mr-auto text-coffeetext">購物車訊息</strong>
            <button
              type="button"
              class="ml-2 mb-1 close text-coffeetext"
              data-dismiss="toast"
              aria-label="Close"
              @click="closeToast(`toast-${i}`)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">{{ res.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  data() {
    return {
      message: [],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.message.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.message.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.message.splice(i, 1);
          }
        });
      }, 5000);
    },
    closeToast(id) {
      $(`#${id}`).toast('hide');
    },
  },
  created() {
    const vm = this;
    vm.$bus.$on('messagepush', (message, status = 'warning') => {
      vm.updateMessage(message, status);
    });
  },
};
</script>

<style lang="scss">
.toastSuc {
  position: fixed;
  top: 90px;
  right: 200px;
  z-index: 30;
  display: none;
  .toast-header {
    div,
    strong {
      color: #632100;
    }
  }
}
</style>
