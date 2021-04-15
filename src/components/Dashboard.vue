<template>
  <div class="dashboard">
    <el-row :gutter="80">
      <el-col :span="8">
        <div class="card">
          <div class="card-header">
            <div class="card-icon card-icon-info">
              <i class="el-icon-school"></i>
            </div>
            <p class="card-category">Số nhà</p>
            <h3 class="card-title">
              10
            </h3>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card">
          <div class="card-header">
            <div class="card-icon card-icon-success">
              <i class="el-icon-check"></i>
            </div>
            <p class="card-category">Số phòng</p>
            <h3 class="card-title">
              320
            </h3>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card">
          <div class="card-header">
            <div class="card-icon card-icon-danger">
              <i class="el-icon-user"></i>
            </div>
            <p class="card-category">Số sinh viên</p>
            <h3 class="card-title">
              1112
            </h3>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <BarExample />
      </el-col>
      <el-col :span="12">
        <PieExample />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarExample from './Charts/BarExample'
import PieExample from './Charts/PieExample'

export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  components: {
    BarExample,
    PieExample,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  .card {
    border: 0;
    margin-bottom: 30px;
    margin-top: 30px;
    border-radius: 6px;
    color: #333;
    background: #fff;
    width: 100%;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;

    .card-header {
      margin: 0 15px;
      padding: 0;
      position: relative;
      text-align: right;

      .card-icon {
        border-radius: 3px;
        background-color: #999;
        padding: 15px;
        margin-top: -20px;
        margin-right: 15px;
        float: left;
        color: #fff;
        font-size: 28px;

        &.card-icon-warning {
          background: linear-gradient(60deg,#ffa726,#fb8c00);
          box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(255 152 0 / 40%)
        }

        &.card-icon-success {
          background: linear-gradient(60deg,#66bb6a,#43a047);
          box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(76 175 80 / 40%)
        }

        &.card-icon-danger {
          background: linear-gradient(60deg,#ef5350,#e53935);
          box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(244 67 54 / 40%)
        }

        &.card-icon-info {
          background: linear-gradient(60deg,#26c6da,#00acc1);
          box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%)
        }
      }

      .card-category {
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
