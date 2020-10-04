<template>
  <div class="container mt-5">
    <loading :active.sync="isLoading"></loading>
    <h2 class="text-coffee">後台商品管理</h2>
    <div class="text-right">
      <button
        type="button"
        class="btn btn-coffee"
        @click="createdProduct"
        data-toggle="modal"
      >
        新增商品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th class="text-left" width="50">列</th>
          <th class="text-left" width="100">分類</th>
          <th class="text-left" width="150">商品名稱</th>
          <th class="text-center" width="120">原價</th>
          <th class="text-center" width="120">售價</th>
          <th class="text-center" width="120">是否上架</th>
          <th width="150" class="pr-4">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="item.id">
          <td class="pt-3 text-left">{{ index + 1 }}</td>
          <td class="pt-3 text-left">{{ item.category }}</td>
          <td class="pt-3 text-left">{{ item.title }}</td>
          <td class="pt-3 text-right">{{ item.origin_price | thousand }}</td>
          <td class="pt-3 text-right">{{ item.price | thousand }}</td>
          <td class="pt-3 text-center">
            <span v-if="item.enabled" class="text-success">已上架</span>
            <span v-else class="text-danger">尚未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-coffee"
                @click="editProduct(item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="removeProduct(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :pages="pagination" @render="getProducts"></Pagination>

    <!-- Modal -->
    <div
      class="modal fade"
      id="createdItem"
      tabindex="-1"
      role="dialog"
      a
      ria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <Modal
        :created="created"
        :status="status"
        :edit-products="editProducts"
        @edited="getProducts"
      ></Modal>
    </div>

    <!-- delModal -->
    <div
      class="modal fade"
      id="removeItem"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <Delmodal :edit-products="editProducts" @edited="getProducts"></Delmodal>
    </div>
  </div>
</template>

<script>
/* global $ */

import Modal from '@/components/Productsmodal.vue';
import Pagination from '@/components/Pagination.vue';
import Delmodal from '@/components/Productsdelmodal.vue';

export default {
  components: {
    Modal,
    Pagination,
    Delmodal,
  },
  data() {
    return {
      products: [],
      editProducts: {
        imageUrl: [],
      },
      pagination: {},
      created: false,
      status: {
        fileUploading: false,
      },
      isLoading: false,
    };
  },
  props: ['token'],

  methods: {
    getProducts(pageNum = 1) {
      const getUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${pageNum}`;
      this.isLoading = true;
      this.$http
        .get(getUrl)
        .then((res) => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          if (this.editProducts.id) {
            this.editProducts = {
              imageUrl: [],
            };
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    createdProduct() {
      this.editProducts = {
        imageUrl: [],
      };
      this.filePath = '';
      this.created = true;
      $('#createdItem').modal('show');
    },
    editProduct(item) {
      this.isLoading = true;
      const editUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`;
      this.created = false;
      this.status.fileUploading = false;
      this.$http
        .get(editUrl)
        .then((res) => {
          this.editProducts = res.data.data;
          $('#createdItem').modal('show');
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    removeProduct(item) {
      this.editProducts = { ...item };
      $('#removeItem').modal('show');
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
