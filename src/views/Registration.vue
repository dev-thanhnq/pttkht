<template>
  <div class="regis">
    <el-form
        class="form-product"
        ref="formAddProduct"
        label-position="top"
        hide-required-asterisk
        label-width="130px"
        size="small"
    >
      <h1>Đăng kí ở ký túc xá</h1>
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
                :autosize="{ minRows: 4, maxRows: 6 }"
                autocomplete="off"
                type="textarea"
            ></el-input>
            <el-button type="primary">Đăng kí</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
name: "Registration"
}
</script>

<style lang="scss" scoped>
  .regis {
    display: flex;
    align-items: center;
    justify-content: center;
    .form-product {
      width: 700px;
      border: 2px #0080dd solid;
      padding: 0 20px 10px 20px;
    }
  }
</style>