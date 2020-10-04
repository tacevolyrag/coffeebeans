<template>
  <div>
    <div class="modal-dialog" role="document">
      <loading :active.sync="isLoading"></loading>
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-white">刪除產品</h5>
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
          是否刪除
          <em class="h5 text-danger">{{ editProducts.title }}</em>
          商品(刪除後將無法恢復)？
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            關閉
          </button>
          <button
            type="button"
            class="btn btn-danger text-white"
            @click="confirmDelete"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  props: ['editProducts'],
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    confirmDelete() {
      this.isLoading = true;
      const delUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.editProducts.id}`;
      this.$http
        .delete(delUrl)
        .then(() => {
          $('#removeItem').modal('hide');
          this.$emit('edited');
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
};
</script>
