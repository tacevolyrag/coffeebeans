<template>
  <div class="modal-dialog modal-xl" role="document">
    <loading :active.sync="isLoading"></loading>
    <div class="modal-content">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLongTitle">新增產品</h5>
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-5">
            <div class="form-group text-left">
              <label for="image">圖片網址</label>
              <input
                id="image"
                placeholder="輸入圖片來源網址"
                class="form-control"
                v-model="editProducts.imageUrl[0]"
              />
              <img :src="editProducts.imageUrl[0]" alt class="img-fluid mt-3" />
            </div>
            <div class="form-group text-left">
              <label for="customFile"></label>
              <input type="file" id="customFile" class="form-group text-fluid"
              @change="uploadFile" />
              <img :src="filePath[0]" class="img-fluid" alt />
            </div>
          </div>
          <div class="col-sm-7">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="editProducts.title"
                placeholder="請輸入標題"
              />
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="category">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="editProducts.category"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="form-group">
                  <label for="origin_price">原價</label>
                  <input
                    type="text"
                    class="form-control"
                    id="origin_price"
                    v-model="editProducts.origin_price"
                    placeholder="請輸入原價"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="unit">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    v-model="editProducts.unit"
                    placeholder="請輸入單位"
                  />
                </div>
                <div class="form-group">
                  <label for="price">售價</label>
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    v-model="editProducts.price"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div class="form-group">
              <label for="description">產品描述</label>
              <textarea class="form-control" id="description" v-model="editProducts.description">
              </textarea>
            </div>
            <div class="form-group">
              <label for="content">說明內容</label>
              <textarea class="form-control" id="content" v-model="editProducts.content"></textarea>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                id="enabled"
                v-model="editProducts.enabled"
                required
              />
              <label class="form-check-label" for="enabled">是否啟用</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-outline-primary" @click="updateProduct">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  props: ['editProducts', 'created', 'status'],
  data() {
    return {
      filePath: {
        imageUrl: [],
      },
      isLoading: false,
    };
  },
  methods: {
    updateProduct() {
      this.isLoading = true;
      const editUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.editProducts.id}`;
      const creatUrl = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/ec/product`;
      // 如果是 true 就新增一個產品，反之則編輯產品
      if (this.created) {
        this.$http.post(creatUrl, this.editProducts)
          .then(() => {
            this.$emit('edited');
            this.filePath = {};
            $('#createdItem').modal('hide');
            this.isLoading = false;
          }).catch(() => {
            this.isLoading = false;
          });
      } else {
        this.$http.patch(editUrl, this.editProducts)
          .then(() => {
            this.$emit('edited');
            $('#createdItem').modal('hide');
            this.isLoading = false;
          }).catch(() => {
            this.isLoading = false;
          });
      }
    },
    uploadFile() {
      const uploadedFile = document.querySelector('#customFile').files[0];
      console.dir(document.querySelector('#customFile'));
      const formData = new FormData();
      formData.append('file', uploadedFile);
      const url = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        this.status.fileUploading = true;
        this.filePath = res.data.data.path;
        if (res.status === 200) {
          this.editProducts.imageUrl.push(this.filePath);
          if (this.editProducts.imageUrl[0]) {
            this.editProducts.imageUrl[0] = this.filePath;
          }
        }
      }).catch((err) => {
        console.dir(err);
      });
    },
  },
};
</script>
