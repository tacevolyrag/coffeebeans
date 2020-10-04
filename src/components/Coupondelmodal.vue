<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-white" id="exampleModalLabel">
            刪除優惠券
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          確定要刪除
          <em class="h5 text-danger">{{ editCoupon.title }} </em>
          優惠券嗎(刪除後將無法恢復)？
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            關閉
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="confrimDelCoupon(editCoupon)"
          >
            確定刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  props: ['editCoupon'],
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    confrimDelCoupon(coupon) {
      const delUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${coupon.id}`;
      this.isLoading = true;
      this.$http.delete(delUrl).then(() => {
        this.$emit('update');
        $('#delCouponModal').modal('hide');
        this.isLoading = false;
      });
    },
  },
};
</script>
