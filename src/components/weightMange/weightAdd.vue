<template>
    <div class="weightMange">
        <el-form ref="form" :model="weightRecordVo" label-width="80px">
            <el-form-item label="体重">
                <el-input v-model="weightRecordVo.weight" type="number" class="input-item"></el-input>
            </el-form-item>

            <el-form-item label="备注">
                <el-input type="textarea" v-model="weightRecordVo.remark" class="input-item"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-date-picker type="datetime" placeholder="选择日期" v-model="weightRecordVo.createTime" value-format="timestamp" class="input-item"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="float:right">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'weightMange',
    data() {
        return {
            weightRecordVo: {
                weight: '',
                remark: '',
                createTime: ''
            }
        }
    },
    props: {
        msg: String
    },
    methods: {
        onSubmit() {
            this.$message({
                showClose: true,
                message: 'onSubmit',
                type: 'success'
            });
            this.$http.post("/weight/record/addWeightRecord", this.weightRecordVo).then(data => {
                console.log(data)
            })
        },

        routeToNavigation() {
            this.$router.replace('/navigation')
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-item{
    width: 95%;
}
</style>
