<template>
    <div class="weightMange">
        <el-form ref="form" :model="JobLogRecordVo" label-width="80px">
            <el-form-item label="类别">
                <el-select  v-model="JobLogRecordVo.type" class="input-item" placeholder="请选择">
                    <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value"> </el-option> 
                </el-select>
            </el-form-item>
            <el-form-item label="摘要">
                <el-input type="textarea" v-model="JobLogRecordVo.summary" class="input-item"></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input type="textarea" v-model="JobLogRecordVo.description" class="input-item"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-date-picker type="datetime" placeholder="选择日期" v-model="JobLogRecordVo.createTime" value-format="timestamp" class="input-item"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="float:right">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: "jobLogAdd",
  data() {
    return {
      JobLogRecordVo: {
        type: "",
        summary: "",
        description: "",
        createTime: "",
      },
      type: [{
          value: 'ABOUT_JOB',
          label: '工作相关'
        }, {
          value: 'ABOUT_LIFE',
          label: '生活相关'
        }]
    };
  },
  props: {
    msg: String,
  },
  methods: {
    onSubmit() {

      this.$http
        .post("/jobLog/record/addJobLogRecord", this.JobLogRecordVo)
        .then((data) => {
          console.log(data);
        });
        this.$message({
        showClose: true,
        message: "提交成功",
        type: "success",
      });
    },

    routeToNavigation() {
      this.$router.replace("/navigation");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-item {
  width: 95%;
}
</style>
