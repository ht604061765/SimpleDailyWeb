<template>
  <div class="navigation">
    <common-header />
    <div class="navigation-content">
      <el-row>
        <el-col :span="4" style="margin:0px 10px 0px 10px">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../assets/hanbao.png" class="image" @click="routeToWeightMange">
            <div style="padding: 14px;float: right;">
              <el-button type="success" @click="routeToWeightMange">体重管理</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4" style="margin:0px 10px 0px 10px">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../assets/jobLog.png" class="image" @click="routeToJobLogMange">
            <div style="padding: 14px;float: right;">
              <el-button type="success" @click="routeToJobLogMange">工作日志</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4" style="margin:0px 10px 0px 10px">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../assets/lueluelue.jpg" class="image" @click="pendingCode">
            <div style="padding: 14px;float: right;">
              <el-button type="success" @click="pendingCode">其他功能</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <common-footer />
  </div>
</template>

<script>
import commonHeader from '../common/commonHeader';
import commonFooter from '../common/commonFooter';

export default {
  name: 'navigation',
  components: {
    commonHeader,
    commonFooter
  },
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {

    pendingCode() {
      this.$message({
        showClose: true,
        message: '恭喜你，这个功能待开发。。。',
        type: 'success'
      });
    },

    routeToWeightMange() {
      this.$router.replace('/weightMange')
    },

    routeToJobLogMange() {
      this.$router.replace('/joblog')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 250px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
