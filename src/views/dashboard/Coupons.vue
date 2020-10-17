<template>
  <div class="container mt-5">
    <loading :active.sync="isLoading"></loading>
    <h2 class="text-themeCoffee">後台優惠卷管理</h2>
    <button class="float-right btn btn-themeCoffee my-4" @click="newCouponModal">
      新增優惠券
    </button>
    <table class="table">
      <thead>
        <tr>
          <th>序號名稱</th>
          <th>序號</th>
          <th>折扣百分比</th>
          <th>期限</th>
          <th>是否開放</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.code }}</td>
          <td>{{ coupon.percent }}%</td>
          <td>{{ coupon.deadline.datetime }}</td>
          <td v-if="coupon.enabled" class="text-success">開放</td>
          <td v-else class="text-danger">未開放</td>
          <td>
            <div class="btn-group float-right">
              <button
                class="btn btn-outline-themeCoffee"
                @click="editCouponModal(coupon)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger"
                @click="delCouponModal(coupon)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- newCouponModal-->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <Couponmodal
        :edit-coupon="editCoupon"
        :created="created"
        @update="getcouponsData"
      >
      </Couponmodal>
    </div>
    <!-- newCouponModal end-->
    <!-- delCouponModal -->
    <div
      class="modal fade"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <Coupondelmodal
        :edit-coupon="editCoupon"
        @update="getcouponsData"
      ></Coupondelmodal>
    </div>
    <!-- delCouponModal end-->
  </div>
</template>

<script>
/* global $ */
import Couponmodal from '@/components/Couponmodal.vue';
import Coupondelmodal from '@/components/Coupondelmodal.vue';

export default {
  components: {
    Couponmodal,
    Coupondelmodal,
  },
  data() {
    return {
      coupons: [],
      editCoupon: {
        deadline_at: 0,
      },
      pagination: {},
      created: false,
      isLoading: false,
    };
  },
  methods: {
    getcouponsData() {
      this.isLoading = true;
      const getUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupons`;
      this.$http
        .get(getUrl)
        .then((res) => {
          this.coupons = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    newCouponModal() {
      this.created = true;
      this.editCoupon = {};
      this.editCoupon.deadline_at = {};
      $('#couponModal').modal('show');
    },
    editCouponModal(coupon) {
      this.created = false;
      this.editCoupon = { ...coupon };
      $('#couponModal').modal('show');
    },
    delCouponModal(coupon) {
      this.editCoupon = { ...coupon };
      $('#delCouponModal').modal('show');
    },
  },
  created() {
    this.getcouponsData();
  },
};
</script>
