<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header bg-themeCoffee">
          <h5 class="modal-title text-secondaryCoffee" id="exampleModalLabel">
            新增優惠券
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
          <div class="row">
            <div class="col-md-8">
              <div class="form-group text-left">
                <label for="couponName" class="col-form-label">
                  <div>優惠券名稱</div>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="couponName"
                  placeholder="請輸入優惠券名稱"
                  v-model="editCoupon.title"
                />
              </div>
              <div class="form-group text-left">
                <label for="couponDate" class="col-form-label">
                  <div>優惠券期限</div>
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="couponDate"
                  v-model="couponDate"
                />
              </div>
              <div class="form-group text-left">
                <label for="couponTime" class="col-form-label">
                  <div>優惠券時間</div>
                </label>
                <input
                  type="time"
                  class="form-control"
                  id="couponTime"
                  step="1"
                  v-model="couponTime"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group text-left">
                <label for="couponId" class="col-form-label">
                  <div>優惠券序號</div>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="couponId"
                  placeholder="COUPON CODE"
                  v-model="editCoupon.code"
                />
              </div>
              <div class="form-group text-left">
                <label for="couponPercent" class="col-form-label">
                  <div>折扣百分比</div>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="couponPercent"
                  placeholder="請輸入折扣百分比"
                  v-model="editCoupon.percent"
                />
              </div>
              <div class="form-check mt-4 text-themeCoffee font-weight-bold">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="couponOnline"
                  v-model="editCoupon.enabled"
                />
                <label for="couponOnline" class="form-check-label"
                  >是否上線</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn btn-themeCoffee" @click="createdCoupon">
            完成
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  data() {
    return {
      isLoading: false,
      couponTime: '',
      couponDate: '',
    };
  },
  props: ['editCoupon', 'created'],
  methods: {
    createdCoupon() {
      this.isLoading = true;
      this.editCoupon.deadline_at = `${this.couponDate} ${this.couponTime}`;
      let apiUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      let httpMethod = 'post';

      // 如果是 true 就新增一個優惠券，反之則編輯優惠券。
      if (!this.created) {
        apiUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.editCoupon.id}`;
        httpMethod = 'patch';
      }
      this.$http[httpMethod](apiUrl, this.editCoupon)
        .then(() => {
          this.$emit('update');
          $('#couponModal').modal('hide');
          this.isLoading = false;
        }).catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
