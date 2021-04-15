<template>
  <div class="categories">
    <el-card>
      <div class="head-category">
        <div class="search">
          <el-input class="search-input"
                    placeholder="Nhập mã phòng"
                    v-model="search"
                    clearable>
          </el-input>
          <el-button @click="handleSearch">Tìm kiếm</el-button>
        </div>
      </div>
    </el-card>
    <el-card class="table-category">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 2</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P002
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: Thường</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
      </el-row><el-row :gutter="20">
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="room">
            <div class="room-code">
              P001
            </div>
            <p>Số sinh viên: 8</p>
            <p>Dãy nhà: A2</p>
            <p>Loại phòng: VIP</p>
            <el-button type="primary">Chỉnh sửa</el-button>
            <el-button type="danger">Xóa</el-button>
          </div>
        </el-col>
      </el-row>
      <div class="paginationWarp">
        <el-col :span="10">
          <div class="textInfo">
            <p>Số lượng kết quả: 1 - 24 của 50</p>
          </div>
        </el-col>
        <el-col :span="14">
          <el-pagination
              background
              layout="prev, pager, next"
              :total="50"
              :page-size="24"
              :current-page="1"
              @current-change="handleCurrentChange"
          >
          </el-pagination>
        </el-col>
      </div>
    </el-card>

    <!-- add category -->
    <el-dialog class="dialog-add-product" width="900px" title="Thêm sinh viên" top="5vh" :visible.sync="dialogAddProduct">
      <el-row>
        <el-col :span="12">
          <div class="add-product-image-title">Ảnh sinh viên</div>
          <div class="add-product-image">
            <div class="product-image">
              <label
                  for="product-input"
                  @mouseover="hoverImage"
                  @mouseleave="hoverLeaveImage"
              >
                <div class="productHover" ref="productHover">
                  <i class="fa fa-pencil"></i>
                </div>
                <img
                    v-if="newProductImageUrl"
                    :src="newProductImageUrl"
                    alt=""
                />
                <img v-else src="../assets/images/kma.jpg" alt="" />
              </label>
              <input
                  ref="productImage"
                  type="file"
                  accept="image/*"
                  id="product-input"
                  @change="handleChangeImage"
              />
              <center>
                <div
                    v-if="newProductImageUrl"
                    class="delete-product-image"
                    @click="deleteImage"
                >
                  Xóa ảnh
                </div>
              </center>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form
              class="form-product"
              ref="formAddProduct"
              label-position="top"
              hide-required-asterisk
              label-width="130px"
              size="small"
          >
            <el-row>
              <el-col :span="24" class="margin-input">
                <el-form-item prop="name">
                  <label class="label-product"
                  >Tên sinh viên <span class="required"> *</span></label
                  >
                  <el-input
                      size="medium"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="name">
                  <label class="label-product"
                  >Mã sinh viên <span class="required"> *</span></label
                  >
                  <el-input
                      size="medium"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="name">
                  <label class="label-product"
                  >Giới tính <span class="required"> *</span></label
                  >
                  <el-input
                      size="medium"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="name">
                  <label class="label-product"
                  >Ngày sinh <span class="required"> *</span></label
                  >
                  <el-input
                      size="medium"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="name">
                  <label class="label-product"
                  >Trường <span class="required"> *</span></label
                  >
                  <el-input
                      size="medium"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="name">
                  <label class="label-product"
                  >Mã sinh viên <span class="required"> *</span></label
                  >
                  <el-input
                      size="medium"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="description">
                  <label class="label-product">Ghi chú</label>
                  <el-input
                      size="medium"
                      v-model="form.description"
                      :autosize="{ minRows: 4, maxRows: 6 }"
                      autocomplete="off"
                      type="textarea"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogAddProduct = false">Hủy</el-button>
            <el-button type="primary"
            >Lưu</el-button
            >
        </span>
    </el-dialog>
    <!-- edit category -->
    <el-dialog
        class="dialog-add-category"
        width="500px"
        title="Sửa nhóm sản phẩm"
        top="5vh"
        :visible.sync="dialogEditCategory"
    >
      <el-row>
        <el-col :span="24">
          <el-form
              class="form-product"
              :model="form"
              :rules="rules"
              ref="formEditCategory"
              label-position="top"
              hide-required-asterisk
              label-width="130px"
              size="small"
          >
            <el-row>
              <el-col :span="24" class="margin-input">
                <el-form-item prop="name">
                  <label class="label-product"
                  >Tên nhóm sản phẩm <span class="required"> *</span></label
                  >
                  <el-input
                      size="medium"
                      v-model="form.name"
                      autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="description">
                  <label class="label-product">Mô tả</label>
                  <el-input
                      size="medium"
                      v-model="form.description"
                      :autosize="{ minRows: 4, maxRows: 6 }"
                      autocomplete="off"
                      type="textarea"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogEditCategory = false">Hủy</el-button>
        <el-button
            type="primary"
            @click="handleUpdateCategory('formEditCategory')"
        >Lưu</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      students: [
        {
          name: 'Nguyễn Quang Thành',
          birth: '20/01/2000',
          gender: 'Nam',
          school: 'KMA',
          k: 'AT15',
          code: 'AT150251'
        },
        {
          name: 'Kiều Duy Khánh',
          birth: '20/01/2000',
          gender: 'Nam',
          school: 'KMA',
          k: 'AT15',
          code: 'AT150251'
        }
      ],
      search: "",
      dialogAddCategory: false,
      dialogEditCategory: false,
      form: {
        name: "",
        description: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Tên nhóm sản phẩm không được bỏ trống!",
            trigger: "change",
          },
        ],
      },
      categoryEditId: '',
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
        from: 0,
        to: 0
      },
      newProductImageUrl: '',
      dialogAddProduct: false
    }
  },
  methods: {
    // ...mapMutations(["updateTitle", "updateSideBar"]),
    changePageTitle() {
      // this.updateTitle("Quản lý nhóm sản phẩm");
    },
    changeIndexSidebar() {
      // this.updateSideBar("2");
    },
    storeCategory() {
    },
    editCategory() {
    },
    handleUpdateCategory() {
    },
    handleDeleteCategory() {
    },
    handleSearch() {
      let params = {
        q: this.search
      }
      this.getData(params)
    },
    getData() {

    },
    handleCurrentChange(val) {
      let payload = {
        page: val,
        q: this.search
      }
      this.getData(payload);
    },
    hoverImage() {
      this.$refs.productHover.style.display = "flex";
    },
    hoverLeaveImage() {
      this.$refs.productHover.style.display = "none";
    },
    handleChangeImage(e) {
      if (e.target.files.length) {
        this.newProductUploadImage = e.target.files[0];
        this.newProductImageUrl = URL.createObjectURL(e.target.files[0]);
      }
    },
    deleteImage() {
      this.newProductUploadImage = "";
      this.newProductImageUrl = "";
    },
  },
  watch: {
    dialogAddCategory(value) {
      if (!value) {
        this.$refs.formAddCategory.resetFields();
      } else {
        this.form.name = "";
        this.form.description = "";
      }
    },
    dialogEditCategory(value) {
      if (!value) {
        if (this.$refs.formAddCategory) {
          this.$refs.formAddCategory.resetFields();
        }
      }
    },
    search(value) {
      if (!value) {
        this.getData();
      }
    },
  },
  mounted() {
    this.changePageTitle();
    this.getData();
    this.changeIndexSidebar();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.categories {
  .head-category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search {
      width: 40%;
      float: left;
      .search-input {
        width: 70%;
        margin-right: 2%;
      }
    }
  }
  .table-category {
    margin-top: 20px;
    .category-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    .page {
      padding-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
    .el-row {
      margin-bottom: 20px;
      .room {
        height: 180px;
        border: 2px #0080dd solid;
        padding: 10px;
      }
    }
  }
  .dialog-add-category {
    .form-product {
      .label-product {
        font-weight: bold;
        .required {
          color: $colorRed;
        }
      }
      .select-categories {
        width: 100%;
      }
    }
  }

  .paginationWarp {
    padding: 20px 0;
    margin-bottom: 10px;
    .el-pagination {
      float: right;
    }
    .textInfo {
      p {
        font-size: .92857rem;
        margin: 10px 0;
      }
    }
  }
  .dialog-add-product {
    .add-product-image-title {
      margin-top: 7px;
      font-weight: bold;
    }
    .add-product-image {
      margin-right: 40px;
      #product-input,
      #product-edit-input {
        display: none;
      }
      .productHover {
        background: rgb(144 154 154 / 47%);
        position: absolute;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        display: none;
        cursor: pointer;
      }
      .product-image {
        margin-top: 20px;
        img,
        .productHover {
          width: 390px;
          height: 390px;
          object-fit: cover;
          cursor: pointer;
        }
        .delete-product-image {
          margin-top: 10px;
          color: #0080dd;
          cursor: pointer;
          max-width: 55px;
        }
      }
    }
    .form-product {
      .label-product {
        font-weight: bold;
        .required {
          color: $colorRed;
        }
      }
      .select-categories {
        width: 100%;
      }
    }
  }
}

.product-action {
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  margin: 5px 0;
  padding-left: 5px;
  height: 30px;
  line-height: 30px;
  i {
    margin-right: 5px;
  }
  cursor: pointer;
}

.product-action:hover {
  background-color: #F8F9FA;
}

.btn-edit {
  cursor: pointer;
}
</style>