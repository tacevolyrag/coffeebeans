<template>
  <div class="container mt-5">
    <loading :active.sync="isLoading"></loading>
    <h2 class="text-coffee">後台圖片管理</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>列</th>
          <th>圖片縮圖</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(image,index) in imageStorage" :key="image.id">
          <td>{{ index + 1 }}</td>
          <td><img :src="image.path" class="img-fluid" width="100px"></td>
          <td>
            <div class="btn-group" style="line-height: 100px">
            <button type="button" class="btn btn-outline-danger d-flex align-items-center"
            @click.prevent="imageDeleteModal(image)">
              刪除
            </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :pages="pagination" @render="getImages"></Pagination>
    <!-- Modal -->
    <div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel"
    aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title text-white">刪除圖片</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <i class="h5 text-danger"> 圖片 </i>(刪除後將無法恢復)？
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-coffee" data-dismiss="modal">
              Close</button>
            <button type="button" class="btn btn-danger text-white" @click.prevent="imageDelete">
              確認刪除</button>
          </div>
        </div>
      </div>
    </div>
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
      imageStorage: [],
      editImage: {},
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getImages(pageNum = 1) {
      this.isLoading = true;
      const imgUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/storage?page=${pageNum}`;
      this.$http
        .get(imgUrl)
        .then((res) => {
          this.imageStorage = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    imageDeleteModal(item) {
      this.editImage = { ...item };
      $('#delModal').modal('show');
    },
    imageDelete() {
      const delUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/storage/${this.editImage.id}`;
      this.isLoading = true;
      this.$http.delete((delUrl))
        .then(() => {
          $('#delModal').modal('hide');
          this.getImages();
          this.isLoading = false;
        }).catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getImages();
  },
};
</script>
