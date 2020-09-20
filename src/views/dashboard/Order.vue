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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orderData" :key="item.id">
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
          <td class="text-right">${{ item.amount | thousand}}</td>
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
              <strong v-if="item.paid" class="text-success font-weight-bold">已付款</strong>
              <span v-else class="text-muted">尚未付款</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @render="getOrderData"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      orderData: {},
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
        .catch((err) => {
          console.log(err);
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
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getOrderData();
  },
};
</script>
