<template>
  <div class="weight-mange">
    <common-header />
    <div class="weight-mange-list" style="padding-top: 80px">
      <div class="block" style="float: left">
        <span class="demonstration">时间 </span>
        <el-date-picker v-model="daterangeparam" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" ></el-date-picker>
        <el-button type="primary" @click="getTableData" style="margin: 10px;">查询</el-button>
      </div>
      <el-button type="primary" @click="weightAddVisible = true" style="margin: 10px">新增</el-button>
      <el-table :data="weightTable" height="700" border style="width: 100%">
        <el-table-column prop="weight" label="体重" width="360">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="记录时间"
          width="360"
          :formatter="dataFormat"
        >
        </el-table-column>
        <el-table-column prop="createUserName" label="人员名称" width="360">
        </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
      </el-table>

      <el-dialog
        title="新增体重记录"
        :visible.sync="weightAddVisible"
        width="25%"
        :before-close="handleClose"
      >
        <weightAdd> </weightAdd>
      </el-dialog>
    </div>
    <common-footer />
  </div>
</template>
<script>
import weightAdd from "./weightAdd";
import commonHeader from "../../common/commonHeader";
import commonFooter from "../../common/commonFooter";
import * as fecha from "element-ui/lib/utils/date";

export default {
  name: "weightMange",
  components: {
    weightAdd,
    commonHeader,
    commonFooter,
  },

  // 基本数据
  data() {
    return {
      weightAddVisible: false,
      weightTable: [],
      daterangeparam:''
    };
  },

  // 生命周期函数
  mounted: function mounted() {
    this.getTableData();
  },

  methods: {
    // 弹框关闭事件
    handleClose() {
      this.weightAddVisible = false;
    },

    // 加载数据列表
    getTableData() {
      let param = {
        startTime: '',
        endTime: ''
      };
      // 请求参数
      if(this.daterangeparam != null && this.daterangeparam != ""){
        param.startTime = this.daterangeparam[0].getTime(),
        param.endTime = this.daterangeparam[1].getTime()
      }
      
      this.$http.post("/weight/record/getWeightList", param).then((res) => {
        this.weightTable = res;
      });
    },

    // 列表日期时间格式化
    dataFormat(row, column, cellValue) {
      return cellValue ? fecha.format(new Date(cellValue), "yyyy-MM-dd") : "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
