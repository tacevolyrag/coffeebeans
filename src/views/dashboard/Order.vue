<template>
  <div class="container mt-5">
    <loading :active.sync="isLoading"></loading>
    <h2 class="text-coffee">後台訂單列表</h2>
    <table class="table mt-5">
      <thead>
        <tr>
          <th>下單日期</th>
          <th>商品名稱</th>
          <th>付款方式</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>訂單</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderData" :key="item.id">
          <td>{{ item.created.datetime }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(res, i) in item.products" :key="i">
                {{ res.product.title }}
                數量: {{ res.quantity }}
                {{ res.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.payment }}</td>
          <td class="text-right">${{ item.amount | thousand }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                :id="item.id"
                class="custom-control-input"
                v-model="item.paid"
                @change="orderPaidStatus(item)"
              />
              <label :for="item.id" class="custom-control-label"></label>
              <strong v-if="item.paid" class="text-success font-weight-bold"
                >已付款</strong
              >
              <span v-else class="text-muted">尚未付款</span>
            </div>
          </td>
          <td>
            <button
              class="btn btn-coffee2"
              data-target="orderModal"
              @click="specifyOrder(item.id)"
            >
              訂單資訊
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-beige">
          <div class="modal-header">
            <h5
              class="modal-title text-coffee2 font-weight-bold"
              id="exampleModalLabel"
            >
              訂單資訊
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
            <table class="table mt-3">
              <tbody class="text-left">
                <tr>
                  <td width="30%">收件人姓名：</td>
                  <td>{{ userInformation.name }}</td>
                </tr>
                <tr>
                  <td width="30%">收件人住址：</td>
                  <td>{{ userInformation.address }}</td>
                </tr>
                <tr>
                  <td width="30%">收件人電話：</td>
                  <td>{{ userInformation.tel }}</td>
                </tr>
                <tr>
                  <td width="30%">收件人信箱：</td>
                  <td>{{ userInformation.email }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-coffee2" data-dismiss="modal">
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pages="pagination" @render="getOrderData"></Pagination>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      orderData: {},
      userInformation: {},
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getOrderData(pageNum = 1) {
      this.isLoading = true;
      const getApi = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${pageNum}`;
      this.$http
        .get(getApi)
        .then((res) => {
          this.orderData = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    orderPaidStatus(item) {
      this.isLoading = true;
      let url = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;
      if (!item.paid) {
        url = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`;
      }
      this.$http
        .patch(url, item.id)
        .then(() => {
          this.getOrderData();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    specifyOrder(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`;
      this.$http.get(url).then((res) => {
        this.userInformation = res.data.data.user;
        $('#orderModal').modal('show');
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getOrderData();
  },
};
</script>
